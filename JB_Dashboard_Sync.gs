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
function doGet(e) {
  if (e && e.parameter && e.parameter.debug === '1') return debugFiles();

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
// 7. 캐시 강제 초기화 (수동 실행용)
// ================================================================
function clearCache() {
  const props = PropertiesService.getScriptProperties();
  props.deleteProperty('doget_cache_mod');
  props.deleteProperty('doget_cache_data');
  Logger.log('Cache cleared');
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
  return parseFloat(String(v).replace(/[$,%]/g, '').replace(/,/g, '').trim()) || 0;
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
