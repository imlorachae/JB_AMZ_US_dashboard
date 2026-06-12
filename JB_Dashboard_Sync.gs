// ================================================================
// JB Amazon Dashboard — Google Apps Script v6
// ================================================================
// 필수 설정 (완료됨):
//   1. 서비스(+) → Drive API 추가
//   2. authorizeNow 1회 실행 → SpreadsheetApp 권한 승인
// v5 변경: 파일 간 같은 날짜 중복 합산 방지 — 최신 파일이 겹치는 날짜를 덮어씀
// v6 변경:
//   - doGet: PropertiesService 캐시 추가 (파일 변경 없으면 즉시 반환)
//   - syncGmailToDrive: xlsx 첨부파일을 Google Sheets로 바로 변환 저장
//     (doGet에서 매번 xlsx→Sheets 변환하는 것 제거 → 타임아웃 해결)
// ================================================================

const FOLDER_ID = '1VO9j_TnG60XJEfGxS0kIvfO7ShMdIn5z';

const GMAIL_QUERIES = [
  'from:amazon subject:report has:attachment newer_than:60d',
  'from:advertising.amazon.com has:attachment newer_than:60d',
  'subject:"Sponsored Products" has:attachment newer_than:60d',
  'subject:"캠페인 보고서" has:attachment newer_than:60d',
];

// ================================================================
// 1. doGet — 대시보드 엔드포인트 (캐시 포함)
// ================================================================
// ================================================================
// v7: 다국가 지원 폴더 ID 맵 (MY / SG)
// ================================================================
const FOLDER_MAP = {
  MY_Shopify:   '15HeWVH6SXK2TnkjrlQcvUe9IEtKd2skc',
  MY_Shopee:    '1t2-mB1n4FtfLL0Q4cJLIJtlf635q2D0U',
  MY_TikTok:    '1Sq4rqzeSA95ocmNpUVez0hUq8Lg03TG_',
  MY_TikTokAds: '1N9t680BVR8cgoaTVCF52kEQ_TAhebIzZ',
  SG_Shopify:   '1Mjbt665WckIGVsG8jE8-_bupMdE4wfqS',
  SG_Shopee:    '15qY6BtKmj6bLuCaT05SzZuZn54CNH6J6',
  SG_TikTok:    '10xJpgWIzn2hT1-7MrFVjMJTJzmYzj_6F',
  SG_FBAds:     '1AKKBOPtMpdlg94NnlgkhqUd0IQNFH8Ym',
  UAE_AMZ:      '', // TODO: Drive 폴더 ID 추가 필요
};
const COUNTRY_CURRENCY = { MY: 'MYR', SG: 'SGD', UAE: 'AED' };

function doGet(e) {
  if (e && e.parameter && e.parameter.debug === '1') return debugFiles();
  if (e && e.parameter && e.parameter.country) return doGetCountry(e);

  try {
    const folder = DriveApp.getFolderById(FOLDER_ID);
    const iter = folder.getFiles();
    const fileList = [];
    while (iter.hasNext()) fileList.push(iter.next());

    // 폴더 내 파일 중 가장 최근 수정 시간 계산
    let maxMod = 0;
    for (const f of fileList) {
      const m = f.getLastUpdated().getTime();
      if (m > maxMod) maxMod = m;
    }

    // 캐시 확인 — 파일이 바뀌지 않았으면 즉시 반환
    const props = PropertiesService.getScriptProperties();
    const cachedMod  = props.getProperty('doget_cache_mod');
    const cachedData = props.getProperty('doget_cache_data');
    if (cachedMod && cachedData && parseInt(cachedMod) >= maxMod) {
      return ContentService.createTextOutput(cachedData)
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 캐시 미스 — 파일 재처리
    fileList.sort((a, b) => a.getLastUpdated().getTime() - b.getLastUpdated().getTime());

    const byDate = {};
    let fileCount = 0;

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const name = file.getName().toLowerCase();
      const mime = file.getMimeType();
      const fb = {};
      let ok = false;

      if (name.endsWith('.csv')) {
        parseAdsCsv(file.getBlob().getDataAsString('UTF-8'), fb);
        ok = true;
      } else if (mime === MimeType.GOOGLE_SHEETS) {
        try {
          const ss = SpreadsheetApp.openById(file.getId());
          const sheet = ss.getSheets()[0];
          const values = sheet.getRange(1, 1, 5000, 30).getValues()
            .filter(r => r[0] !== '' && r[0] !== null && r[0] !== undefined);
          parseAdsValues(values, fb);
          ok = true;
        } catch(err) { Logger.log('Sheets error: ' + name + ' - ' + err.message); }
      } else if (name.endsWith('.xlsx') || name.endsWith('.xls')) {
        // 아직 변환 안 된 xlsx 폴백 처리 (신규 파일은 syncGmailToDrive에서 Sheets로 저장됨)
        let tmpId = null;
        try {
          const created = Drive.Files.create(
            {mimeType: 'application/vnd.google-apps.spreadsheet', name: '_tmp_' + file.getName()},
            file.getBlob()
          );
          tmpId = created.id;
          const ss = SpreadsheetApp.openById(tmpId);
          const sheet = ss.getSheets()[0];
          const values = sheet.getRange(1, 1, 5000, 30).getValues()
            .filter(r => r[0] !== '' && r[0] !== null && r[0] !== undefined);
          parseAdsValues(values, fb);
          ok = true;
        } catch(err) {
          Logger.log('XLSX error: ' + name + ' - ' + err.message);
        } finally {
          if (tmpId) { try { Drive.Files.remove(tmpId); } catch(ex) {} }
        }
      } else {
        continue;
      }

      if (ok) {
        fileCount++;
        for (const k in fb) byDate[k] = fb[k];
      }
    }

    const data = Object.values(byDate).sort((a, b) =>
      new Date(a.yr, a.mo - 1, a.day) - new Date(b.yr, b.mo - 1, b.day));

    const result = JSON.stringify({
      success: true, data: data, fileCount: fileCount,
      lastFileMod: maxMod ? new Date(maxMod).toISOString() : null
    });

    // 캐시 저장 (PropertiesService 9KB 제한 — 실패해도 응답은 정상 반환)
    try {
      props.setProperty('doget_cache_mod',  String(maxMod));
      props.setProperty('doget_cache_data', result);
    } catch(cacheErr) {
      Logger.log('Cache save failed (size?): ' + cacheErr.message);
    }

    return ContentService.createTextOutput(result)
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService.createTextOutput(
      JSON.stringify({success: false, error: err.message})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ================================================================
// 2. debugFiles — ?debug=1
// ================================================================
function debugFiles() {
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const files = folder.getFiles();
  const info = [];
  while (files.hasNext()) {
    const file = files.next();
    const name = file.getName();
    const mime = file.getMimeType();
    const fi = { name: name, size: file.getSize(), mime: mime, updated: file.getLastUpdated().toISOString() };
    const isSheets = mime === MimeType.GOOGLE_SHEETS;
    const isXlsx = name.toLowerCase().match(/\.xlsx?$/);
    if (isSheets || isXlsx) {
      let ssId = null, tmpId = null;
      try {
        if (isXlsx) {
          const created = Drive.Files.create(
            {mimeType: 'application/vnd.google-apps.spreadsheet', name: '_tmp_' + name},
            file.getBlob()
          );
          tmpId = ssId = created.id;
        } else { ssId = file.getId(); }
        const ss = SpreadsheetApp.openById(ssId);
        const sheet = ss.getSheets()[0];
        fi.lastRow = sheet.getLastRow();
        fi.lastCol = sheet.getLastColumn();
        fi.headers = sheet.getRange(1, 1, 1, 30).getValues()[0].filter(v => v !== '' && v !== null);
      } catch(err) { fi.error = err.message; }
      finally { if (tmpId) { try { Drive.Files.remove(tmpId); } catch(e) {} } }
    }
    info.push(fi);
  }
  return ContentService.createTextOutput(
    JSON.stringify({debug: true, files: info}, null, 2)
  ).setMimeType(ContentService.MimeType.JSON);
}

// ================================================================
// 3. CSV 파싱
// ================================================================
function parseAdsCsv(csvText, byDate) {
  if (csvText.charCodeAt(0) === 0xFEFF) csvText = csvText.slice(1);
  const lines = csvText.split(/\r?\n/);
  if (lines.length < 2) return;
  const headers = parseCsvLine(lines[0]);
  const idx = buildIdx(headers);
  if (idx.date < 0 || idx.spend < 0) return;
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const row = parseCsvLine(line);
    if (!row || row.length < 5) continue;
    accumulateRow(row, idx, byDate);
  }
}

// ================================================================
// 4. Sheets/XLSX 파싱
// ================================================================
function parseAdsValues(values, byDate) {
  if (!values || values.length < 2) return;
  const headers = values[0].map(h => String(h));
  const idx = buildIdx(headers);
  if (idx.date < 0 || idx.spend < 0) return;
  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    if (!row || !row[idx.date]) continue;
    accumulateRow(row, idx, byDate);
  }
}

// ================================================================
// 5. 공통 행 처리
// ================================================================
function accumulateRow(row, idx, byDate) {
  const rawDate = row[idx.date];
  const d = rawDate instanceof Date ? rawDate : new Date(String(rawDate).trim());
  if (isNaN(d.getTime())) return;
  const yr = d.getFullYear(), mo = d.getMonth() + 1, day = d.getDate();
  if (yr < 2020) return;
  const k = yr + '_' + mo + '_' + day;
  const DOW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()];
  const adSpend  = toNum(idx.spend    >= 0 ? row[idx.spend]    : 0);
  const adSales  = toNum(idx.adSales  >= 0 ? row[idx.adSales]  : 0);
  const impr     = toNum(idx.impr     >= 0 ? row[idx.impr]     : 0);
  const clicks   = toNum(idx.clicks   >= 0 ? row[idx.clicks]   : 0);
  const adOrders = toNum(idx.adOrders >= 0 ? row[idx.adOrders] : 0);
  if (!byDate[k]) {
    byDate[k] = {yr: yr, mo: mo, day: day, dow: DOW, _adOnly: true,
                 adSpend: 0, adSales: 0, impr: 0, clicks: 0, adOrders: 0};
  }
  byDate[k].adSpend  += adSpend;
  byDate[k].adSales  += adSales;
  byDate[k].impr     += impr;
  byDate[k].clicks   += clicks;
  byDate[k].adOrders += adOrders;
}

// ================================================================
// 6. Gmail → Drive 자동 저장
//    xlsx 첨부파일 → Google Sheets로 바로 변환 저장 (doGet 타임아웃 방지)
//    CSV는 그대로 저장
// ================================================================
function syncGmailToDrive() {
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const existing = {};
  const iter = folder.getFiles();
  while (iter.hasNext()) {
    const f = iter.next();
    const n = f.getName();
    existing[n] = true;
    existing[n.replace(/\.xlsx?$/i, '')] = true;
  }
  let saved = 0;
  const seen = new Set();
  for (const query of GMAIL_QUERIES) {
    let threads;
    try { threads = GmailApp.search(query, 0, 20); }
    catch(e) { Logger.log('Gmail search fail: ' + query); continue; }
    for (const thread of threads) {
      for (const msg of thread.getMessages()) {
        for (const att of msg.getAttachments()) {
          const name = att.getName();
          if (seen.has(name)) continue;
          seen.add(name);
          if (!name.match(/\.(csv|xlsx|xls)$/i)) continue;
          const baseName = name.replace(/\.xlsx?$/i, '');
          if (existing[name] || existing[baseName]) continue;
          try {
            if (name.match(/\.xlsx?$/i)) {
              // xlsx → Google Sheets로 바로 변환 (doGet에서 변환 불필요)
              Drive.Files.create(
                {name: baseName, mimeType: 'application/vnd.google-apps.spreadsheet', parents: [FOLDER_ID]},
                att.getBlob()
              );
            } else {
              folder.createFile(att);
            }
            existing[name] = true;
            existing[baseName] = true;
            saved++;
            Logger.log('saved: ' + baseName);
          } catch(e) { Logger.log('save fail: ' + name + ' - ' + e.message); }
        }
      }
    }
  }
  // 새 파일 저장 시 캐시 무효화
  if (saved > 0) {
    try { PropertiesService.getScriptProperties().deleteProperty('doget_cache_mod'); } catch(e) {}
  }
  Logger.log('Gmail -> Drive done: ' + saved);
  return saved;
}

// ================================================================
// 7. 캐시 강제 초기화 (수동 실행용) — 전체 채널 포함
// ================================================================
function clearCache() {
  const props = PropertiesService.getScriptProperties();
  const keys = props.getKeys();
  let cleared = 0;
  for (const k of keys) {
    if (k.startsWith('doget_cache') || k.startsWith('cache_')) {
      props.deleteProperty(k);
      cleared++;
    }
  }
  Logger.log('Cache cleared: ' + cleared + ' entries');
}

// ================================================================
// 8. 기존 XLSX → Google Sheets 일괄 변환 (1회용)
// ================================================================
function migrateXlsxToSheets() {
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const files = folder.getFiles();
  let converted = 0, failed = 0;
  const toTrash = [];
  while (files.hasNext()) {
    const file = files.next();
    const name = file.getName();
    if (!name.toLowerCase().match(/\.xlsx?$/)) continue;
    const baseName = name.replace(/\.xlsx?$/i, '');
    Logger.log('converting: ' + name);
    try {
      Drive.Files.create(
        {name: baseName, mimeType: 'application/vnd.google-apps.spreadsheet', parents: [FOLDER_ID]},
        file.getBlob()
      );
      toTrash.push(file);
      converted++;
    } catch(e) { Logger.log('fail: ' + e.message); failed++; }
  }
  for (const f of toTrash) { try { f.setTrashed(true); } catch(e) {} }
  Logger.log('migrate done: ' + converted + ' converted, ' + failed + ' failed');
}

// ================================================================
// 9. 권한 승인 트리거 (1회용 — 이미 실행 완료)
// ================================================================
function authorizeNow() {
  const ss = SpreadsheetApp.create('__perm_temp__');
  const id = ss.getId();
  try { Drive.Files.remove(id); } catch(e) { try { DriveApp.getFileById(id).setTrashed(true); } catch(e2) {} }
  Logger.log('권한 승인 완료');
}

// ================================================================
// 10. 트리거 설정 (최초 1회만 실행)
// ================================================================
function createTrigger() {
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('syncGmailToDrive')
    .timeBased().atHour(9).everyDays(1).inTimezone('Asia/Seoul').create();
  ScriptApp.newTrigger('syncGmailToDrive')
    .timeBased().atHour(21).everyDays(1).inTimezone('Asia/Seoul').create();
  Logger.log('trigger set: daily 9am + 9pm KST');
}

// ================================================================
// 유틸
// ================================================================
function buildIdx(headers) {
  return {
    date:     findCol(headers, ['날짜','Date','시작 날짜','Start Date']),
    impr:     findCol(headers, ['광고 노출 수','Impressions']),
    clicks:   findCol(headers, ['클릭수','Clicks']),
    spend:    findCol(headers, ['지출','Spend']),
    adOrders: findCol(headers, ['7일 총 주문','14일 총 주문','Orders']),
    adSales:  findCol(headers, ['7일 총 판매','14일 총 판매','Sales']),
  };
}

function findCol(headers, candidates) {
  for (const c of candidates) {
    const i = headers.findIndex(h => h && String(h).includes(c));
    if (i >= 0) return i;
  }
  return -1;
}

function toNum(v) {
  if (v === null || v === undefined || v === '') return 0;
  if (typeof v === 'number') return isNaN(v) ? 0 : v;
  return parseFloat(String(v).replace(/[^0-9.-]/g, '')) || 0;
}

function parseCsvLine(line) {
  const result = [];
  let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQ && line[i+1] === '"') { cur += '"'; i++; }
      else inQ = !inQ;
    } else if (c === ',' && !inQ) {
      result.push(cur.trim()); cur = '';
    } else { cur += c; }
  }
  result.push(cur.trim());
  return result;
}

// ================================================================
// v7: 다국가 엔드포인트 (MY / SG)
// ================================================================
function doGetCountry(e) {
  const country = e.parameter.country;
  const channel = e.parameter.channel;
  if (!country || !channel) {
    return ContentService.createTextOutput(
      JSON.stringify({success:false, error:'country and channel params required'})
    ).setMimeType(ContentService.MimeType.JSON);
  }

  const key = country + '_' + channel;
  const folderId = FOLDER_MAP[key];
  if (!folderId) {
    return ContentService.createTextOutput(
      JSON.stringify({success:false, error:'Unknown: ' + key})
    ).setMimeType(ContentService.MimeType.JSON);
  }

  const cacheModKey  = 'cachev11_' + key + '_mod';
  const cacheDataKey = 'cachev11_' + key + '_data';
  const props = PropertiesService.getScriptProperties();

  try {
    const folder = DriveApp.getFolderById(folderId);
    const iter   = folder.getFiles();
    const files  = [];
    while (iter.hasNext()) files.push(iter.next());

    let maxMod = 0;
    for (const f of files) { const m = f.getLastUpdated().getTime(); if (m > maxMod) maxMod = m; }

    const cachedMod  = props.getProperty(cacheModKey);
    const cachedData = props.getProperty(cacheDataKey);
    if (cachedMod && cachedData && parseInt(cachedMod) >= maxMod) {
      return ContentService.createTextOutput(cachedData).setMimeType(ContentService.MimeType.JSON);
    }

    const byMo = {};
    let fileCount = 0;
    const filesFound = files.length;
    const parseErrors = [];

    for (const file of files) {
      const result = parseMonthlyFile(file, key, channel);
      if (!result) { parseErrors.push(file.getName()); continue; }
      const k = result.yr + '_' + result.mo;
      if (!byMo[k]) byMo[k] = {yr:result.yr, mo:result.mo, sales:0, orders:0, adSpend:0, adOrders:0};
      byMo[k].sales    += result.sales    || 0;
      byMo[k].orders   += result.orders   || 0;
      byMo[k].adSpend  += result.adSpend  || 0;
      byMo[k].adOrders += result.adOrders || 0;
      fileCount++;
    }

    let currency = COUNTRY_CURRENCY[country] || 'USD';
    if (channel === 'FBAds') currency = 'USD';

    const data = Object.values(byMo).sort((a,b) => a.yr!==b.yr ? a.yr-b.yr : a.mo-b.mo);
    const out  = JSON.stringify({success:true, country, channel, currency, data, fileCount, filesFound, parseErrors});

    try { props.setProperty(cacheModKey, String(maxMod)); props.setProperty(cacheDataKey, out); }
    catch(ce) { Logger.log('Cache save failed: ' + ce.message); }

    return ContentService.createTextOutput(out).setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService.createTextOutput(
      JSON.stringify({success:false, error:err.message})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ────────────────────────────────────────────────────────────────
// 월별 파일 파서 — 파일 1개 → {yr, mo, sales, orders, adSpend, ...}
// ────────────────────────────────────────────────────────────────
function parseMonthlyFile(file, key, channel) {
  const name     = file.getName();
  const ym       = extractYearMonth(name);
  if (!ym) { Logger.log('No YM in: ' + name); return null; }

  const nameLower = name.toLowerCase();
  const mime      = file.getMimeType();

  // FB Ads CSV (Ksisters-Ads-*)
  if (channel === 'FBAds' || nameLower.includes('ksisters')) {
    try {
      return parseFBAdsCsv(file.getBlob().getDataAsString('UTF-8'), ym);
    } catch(err) { Logger.log('FBAds error: ' + name + ' - ' + err.message); return null; }
  }

  // CSV (Shopify)
  if (nameLower.endsWith('.csv')) {
    const filterJB = key === 'MY_Shopify';
    try {
      return parseShopifyCsvMonthly(file.getBlob().getDataAsString('UTF-8'), ym, filterJB);
    } catch(err) { Logger.log('Shopify CSV error: ' + name + ' - ' + err.message); return null; }
  }

  // XLSX / Google Sheets
  let values = null;
  let tmpId  = null;
  try {
    let ssId = file.getId();
    if (mime !== MimeType.GOOGLE_SHEETS) {
      const created = Drive.Files.create(
        {mimeType:'application/vnd.google-apps.spreadsheet', name:'_tmp_'+name},
        file.getBlob()
      );
      tmpId = ssId = created.id;
    }
    const ss     = SpreadsheetApp.openById(ssId);
    const sheet  = ss.getSheets()[0];
    values = sheet.getDataRange().getValues();
  } catch(err) {
    Logger.log('XLSX open error: ' + name + ' - ' + err.message);
  } finally {
    if (tmpId) { try { Drive.Files.remove(tmpId); } catch(e) {} }
  }
  if (!values) return null;

  const filterJB = (key === 'MY_Shopee' || key === 'SG_Shopee');
  if (channel === 'Shopee')     return parseShopeeXlsxMonthly(values, ym, filterJB);
  if (channel === 'TikTok')     return parseTikTokSalesXlsx(values, ym, false);
  if (channel === 'TikTokAds')  return parseTikTokAdsXlsx(values, ym);
  return null;
}

// ────────────────────────────────────────────────────────────────
// 파일명에서 연/월 추출
// ────────────────────────────────────────────────────────────────
function extractYearMonth(name) {
  const MONTHS = {jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12,
    january:1,february:2,march:3,april:4,june:6,july:7,august:8,september:9,october:10,november:11,december:12};

  // "(Jan 2026)" or "(January 2026)"
  const m1 = name.match(/\((\w+)\s+(\d{4})\)/i);
  if (m1) { const mo=MONTHS[m1[1].toLowerCase()]; if(mo) return {yr:parseInt(m1[2]),mo}; }

  // "(Jan2026)" — no space between month and year
  const m1b = name.match(/\(([A-Za-z]+?)(\d{4})\)/i);
  if (m1b) { const mo=MONTHS[m1b[1].toLowerCase()]; if(mo) return {yr:parseInt(m1b[2]),mo}; }

  // "20260201" or "20260201_20260228" — YYYYMMDD
  const m4 = name.match(/(\d{4})(\d{2})\d{2}/);
  if (m4) { const yr=parseInt(m4[1]),mo=parseInt(m4[2]); if(yr>=2020&&mo>=1&&mo<=12) return {yr,mo}; }

  // "- 2026-01-01" (date range)
  const m2 = name.match(/[\s\-_](\d{4})-(\d{2})-\d{2}/);
  if (m2) return {yr:parseInt(m2[1]), mo:parseInt(m2[2])};

  // "Jan-1-2026" or "2026-Jan" style — search forward AND backward
  const parts = name.split(/[-_\s.()]/);
  for (let i = 0; i < parts.length; i++) {
    const mo = MONTHS[parts[i].toLowerCase()];
    if (!mo) continue;
    for (let j = i+1; j < Math.min(i+4, parts.length); j++) {
      const yr = parseInt(parts[j]);
      if (yr >= 2020 && yr <= 2035) return {yr, mo};
    }
    for (let j = i-1; j >= Math.max(0, i-4); j--) {
      const yr = parseInt(parts[j]);
      if (yr >= 2020 && yr <= 2035) return {yr, mo};
    }
  }
  return null;
}

// 헤더 행 인덱스 탐색 — 첫 몇 행 중 testFn을 만족하는 행 반환
function findHeaderRowIdx(values, testFn) {
  for (let i = 0; i < Math.min(5, values.length); i++) {
    if (testFn(values[i].map(h => String(h||'').trim().toLowerCase()))) return i;
  }
  return 0;
}

// ────────────────────────────────────────────────────────────────
// Shopify CSV 월별 집계 (MY: vendor='Jung Beauty' 필터, SG: 전체)
// ────────────────────────────────────────────────────────────────
function parseShopifyCsvMonthly(text, ym, filterJB) {
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  const lines = text.split(/\r?\n/);
  if (lines.length < 2) return null;
  const headers  = parseCsvLine(lines[0]).map(h => h.replace(/^"|"$/g,'').trim().toLowerCase());
  const vendorIdx   = headers.findIndex(h => h.includes('vendor'));
  const netSalesIdx = headers.findIndex(h => h === 'net sales' || h.includes('net sales'));
  const ordersIdx   = headers.findIndex(h => h === 'orders' || h === 'net items sold');
  if (netSalesIdx < 0) { Logger.log('Shopify: no net sales col. headers: ' + headers.join('|')); return null; }

  let totalSales = 0, totalOrders = 0;
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim(); if (!line) continue;
    const row  = parseCsvLine(line); if (!row || row.length < 3) continue;
    if (filterJB && vendorIdx >= 0) {
      const vendor = row[vendorIdx].replace(/^"|"$/g,'').trim().toLowerCase();
      if (vendor !== 'jung beauty') continue;
    }
    const sales = toNum(row[netSalesIdx]);
    if (sales === 0 && filterJB) continue;
    totalSales  += sales;
    if (ordersIdx >= 0) totalOrders += toNum(row[ordersIdx]);
  }
  return {yr:ym.yr, mo:ym.mo, sales:totalSales, orders:totalOrders};
}

// ────────────────────────────────────────────────────────────────
// Shopee XLSX 월별 집계 (MY/SG: Jung Beauty 필터)
// v8 fix: ① 'Product' 단독 헤더도 인식 (JB 필터 무력화 버그 복구 — 타 브랜드 합산 방지)
//         ② variation 하위행 제외, 상품 합계행만 집계 (2중 카운트 방지)
//         ③ 매출 컬럼 우선순위 명시: Confirmed > Paid > Net/Total/GMV > Placed
// ────────────────────────────────────────────────────────────────
function parseShopeeXlsxMonthly(values, ym, filterJB) {
  if (!values || values.length < 2) return null;
  const hi = findHeaderRowIdx(values, row => row.some(h => h === 'item id' || (h.includes('item') && h.includes('id'))));
  const headers = values[hi].map(h => String(h||'').trim().toLowerCase());
  Logger.log('Shopee XLSX headers (row ' + hi + '): ' + headers.join(' | '));

  const findCol = preds => { for (var p = 0; p < preds.length; p++) { const idx = headers.findIndex(preds[p]); if (idx >= 0) return idx; } return -1; };
  const isAmt = h => h.indexOf('per') < 0 && h.indexOf('rate') < 0 && h.indexOf('unit') < 0 && h.indexOf('conversion') < 0;
  const salesIdx = findCol([
    h => h.includes('sales') && h.includes('confirmed') && isAmt(h),
    h => h.includes('sales') && h.includes('paid') && isAmt(h),
    h => h.includes('net sales') || h.includes('total sales') || h.includes('revenue') || h.includes('gmv') || h.includes('order amount'),
    h => h.includes('sales') && h.includes('placed') && isAmt(h),
    h => h.includes('sales') && isAmt(h) && !h.includes('item'),
  ]);
  const ordersIdx = findCol([
    h => h === 'confirmed order' || h === 'confirmed orders',
    h => h === 'paid order' || h === 'paid orders',
    h => h === 'placed order' || h === 'placed orders',
    h => h === 'orders' || h === 'quantity' || h === 'sold',
    h => h.includes('order') && (h.includes('qty') || h.includes('count')),
  ]);
  if (salesIdx < 0) { Logger.log('Shopee: no sales col found'); return null; }
  Logger.log('Shopee salesCol="' + headers[salesIdx] + '" ordersCol="' + (ordersIdx >= 0 ? headers[ordersIdx] : '-') + '"');

  // 상품명: 'product name'류 우선, 없으면 'product'/'item' 단독 헤더 (Top Performing Products 양식)
  let nameIdx = headers.findIndex(h =>
    (h.includes('product') || h.includes('item')) && (h.includes('name') || h.includes('title')));
  if (nameIdx < 0) nameIdx = headers.findIndex(h => h === 'product' || h === 'item');

  // variation 하위행 식별 (값이 '-'가 아니면 하위행)
  const varIdx = headers.findIndex(h => h === 'variation id' || h === 'variation name');

  let totalSales = 0, totalOrders = 0;
  for (let i = hi + 1; i < values.length; i++) {
    const row = values[i];
    if (!row || row[salesIdx] === '' || row[salesIdx] === null || row[salesIdx] === undefined) continue;
    if (varIdx >= 0) {
      const vv = String(row[varIdx] == null ? '' : row[varIdx]).trim();
      if (vv && vv !== '-') continue;
    }
    if (filterJB && nameIdx >= 0) {
      const pname = String(row[nameIdx]||'').toLowerCase();
      if (!pname.includes('jung beauty')) continue;
    }
    totalSales  += toNum(row[salesIdx]);
    if (ordersIdx >= 0) totalOrders += toNum(row[ordersIdx]);
  }
  return {yr:ym.yr, mo:ym.mo, sales:totalSales, orders:totalOrders};
}

// ────────────────────────────────────────────────────────────────
// TikTok Shop 매출 XLSX 월별 집계
// ────────────────────────────────────────────────────────────────
// v9 fix: ① GMV가 "RM432.28" 같은 통화 접두 문자열이라 toNum=0 되던 것 — 통화문자 제거 후 파싱
//         ② Jung Beauty 필터 추가 (멀티브랜드 샵 export에서 타 브랜드 제외)
function parseTikTokSalesXlsx(values, ym, filterJB) {
  if (!values || values.length < 2) return null;
  const hi = findHeaderRowIdx(values, row => row.some(h => h === 'gmv' || h === 'sku id' || h === 'id'));
  const headers = values[hi].map(h => String(h||'').trim().toLowerCase());
  Logger.log('TikTok Sales headers (row ' + hi + '): ' + headers.join(' | '));

  const tnum = v => toNum(String(v == null ? '' : v).replace(/[^0-9.\-]/g, ''));
  const gmvIdx = headers.findIndex(h =>
    h === 'gmv' || h.includes('revenue') || h.includes('sales amount') ||
    h.includes('total amount') || h.includes('product amount') || h.includes('order amount'));
  const ordersIdx = headers.findIndex(h =>
    h === 'orders' || h === 'sku orders' ||
    (h.includes('order') && !h.includes('cancel') && !h.includes('return') && !h.includes('amount') && !h.includes('rate')));
  const nameIdx = headers.findIndex(h => h === 'product' || h.includes('product name'));

  if (gmvIdx < 0) { Logger.log('TikTok Sales: no GMV col'); return null; }

  let totalGmv = 0, totalOrders = 0;
  for (let i = hi + 1; i < values.length; i++) {
    const row = values[i];
    if (!row || row[gmvIdx] === '' || row[gmvIdx] === null || row[gmvIdx] === undefined) continue;
    if (filterJB && nameIdx >= 0) {
      const pname = String(row[nameIdx]||'').toLowerCase();
      if (!pname.includes('jung beauty')) continue;
    }
    totalGmv   += tnum(row[gmvIdx]);
    if (ordersIdx >= 0) totalOrders += tnum(row[ordersIdx]);
  }
  return {yr:ym.yr, mo:ym.mo, sales:totalGmv, orders:totalOrders};
}

// ────────────────────────────────────────────────────────────────
// TikTok Ads XLSX 월별 집계
// ────────────────────────────────────────────────────────────────
function parseTikTokAdsXlsx(values, ym) {
  if (!values || values.length < 2) return null;
  const hi = findHeaderRowIdx(values, row => row.some(h => h === 'cost' || h === 'campaign name' || h.includes('spend')));
  const headers = values[hi].map(h => String(h||'').trim().toLowerCase());
  Logger.log('TikTok Ads headers (row ' + hi + '): ' + headers.join(' | '));

  const spendIdx = headers.findIndex(h =>
    h === 'cost' || h.includes('spend') || h.includes('budget spent'));
  const purchIdx = headers.findIndex(h =>
    h === 'sku orders' || h.includes('purchase') ||
    (h.includes('order') && !h.includes('cancel') && !h.includes('cost') && !h.includes('per')));

  if (spendIdx < 0) { Logger.log('TikTok Ads: no spend col'); return null; }

  let totalSpend = 0, totalOrders = 0;
  for (let i = hi + 1; i < values.length; i++) {
    const row = values[i];
    if (!row || row[spendIdx] === '' || row[spendIdx] === null || row[spendIdx] === undefined) continue;
    totalSpend  += toNum(row[spendIdx]);
    if (purchIdx >= 0) totalOrders += toNum(row[purchIdx]);
  }
  return {yr:ym.yr, mo:ym.mo, adSpend:totalSpend, adOrders:totalOrders};
}

// ────────────────────────────────────────────────────────────────
// FB Ads CSV 월별 집계 (SG Ksisters-Ads-*.csv, USD)
// ────────────────────────────────────────────────────────────────
function parseFBAdsCsv(text, ym) {
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  const lines = text.split(/\r?\n/);
  if (lines.length < 2) return null;
  const headers  = parseCsvLine(lines[0]).map(h => h.replace(/^"|"$/g,'').trim());
  const spendIdx = headers.findIndex(h => h.toLowerCase().includes('amount spent'));
  const purchIdx = headers.findIndex(h => h.toLowerCase() === 'purchases');
  if (spendIdx < 0) { Logger.log('FBAds: no spend col'); return null; }

  let totalSpend = 0, totalPurch = 0;
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim(); if (!line) continue;
    const row  = parseCsvLine(line); if (!row || row.length < 5) continue;
    if (!row[0].match(/^\d{4}-\d{2}-\d{2}/)) continue; // skip non-data rows
    totalSpend += toNum(row[spendIdx]);
    if (purchIdx >= 0) totalPurch += toNum(row[purchIdx]);
  }
  return {yr:ym.yr, mo:ym.mo, adSpend:totalSpend, adOrders:totalPurch};
}
