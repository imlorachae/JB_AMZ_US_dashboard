# JungBeauty Amazon 대시보드 — 약속된 규칙 (Conventions)

> 코드(`amazon_dashboard.js`)에서 직접 확인된 사실만 기록합니다. 확인되지 않은 부분은 "확인 필요"로 명시.
> 최종 갱신: 2026-06-11

---

## 0. 확장 구조 — 국가 × 판매채널 매트릭스 (2026-06-07 합의)

> 향후 다국가/다채널/종합대시보드 확장을 위한 **카테고라이징 합의안**.
> 국가가 1차 축, 채널이 국가에 종속되는 2차 축 (교차 매트릭스).

```
🇺🇸 US
  ├─ Amazon
  └─ Yesstyle

🇦🇪 UAE
  └─ Amazon

🇸🇬 싱가포르
  ├─ 자사몰 (Shopify) — SG 전용 스토어
  ├─ TikTok Shop
  └─ Shopee

🇲🇾 말레이시아
  ├─ 자사몰 (Shopify) — MY 전용 스토어 (SG와 별개 운영)
  ├─ TikTok Shop
  └─ Shopee
```

**핵심 합의 사항**:
- 국가가 1차 키, 채널이 그 국가에 종속 → 데이터 모델은 `{country, channel}` 복합키로 설계
  (예: `US_Amazon`, `US_Yesstyle`, `UAE_Amazon`, `SG_Shopify`, `SG_TikTok`, `SG_Shopee`, `MY_Shopify`, `MY_TikTok`, `MY_Shopee`)
- TikTok/Shopee처럼 같은 채널명이 여러 국가에 있어도, **국가가 다르면 완전히 별개의 데이터셋**으로 취급 (자사몰처럼 독립 운영)
- SG 자사몰과 MY 자사몰은 같은 Shopify 기반이지만 **서로 다른 스토어** (데이터 통합 불가)
- 현재 코드(`PRELOADED`, `CAMPAIGN_DAILY`, `byMonth` 등)는 US/Amazon 단일 채널 기준으로 짜여 있어, 확장 시 이 차원을 추가하는 데이터 구조 작업이 별도로 필요함

**레이아웃 적용 방향**: 사이드바(매출/광고/종합/설정)는 그대로 두고, 상단에 **국가 ▾ → 채널 ▾** 2단 컨텍스트 셀렉터를 추가하는 형태로 이 매트릭스에 대응시킨다.

---

## 1. 매출 데이터 정리 방법

- **`PRELOADED` 배열** (js 3번 줄): 대시보드 정적 폴백 데이터.
  필드: `{yr, mo, day, dow, sales, salesKRW, orders, items, sessions, adSpend, adSales, organic, vine_adj, vine_desc, impr, clicks, adOrders}`
- **출처**: Google Drive `JB_global_google/01_Claude_Data/JB_Master_Data` 시트(`master_data_upload` 탭)
  - 광고 세부 지표(impr/clicks/adOrders)는 `01_US/01_AMZ/02_ads/Sponsored_Products_검색어_보고서_xxxx.xlsx`에서 일자별 합산해 채움
- **organic 계산**: `organic = Math.max(0, sales - adSales)` (js 227, 241, 661번 줄 동일 패턴)
- **vine_adj**: 자동 계산 로직 없음. Vine 프로모션으로 발생한 매출(원가 이하 리뷰 물량)을 사람이 직접 식별해서 `vine_adj`(보통 해당일 sales와 같은 크기의 음수)와 `vine_desc`에 수동 입력하는 **데이터 입력 컨벤션**.
  - `agg()`에서 `vineMode==='exclude'`(`v` 플래그)일 때 sales/organic에 `vine_adj`를 더해 Vine 매출 제외 집계 생성

## 2. 광고 데이터 정리 방법

- **출처**: `01_US/01_AMZ/02_ads/Sponsored_Products_검색어_보고서_xxxx.xlsx` (Sponsored Products 키워드 보고서, raw)
- **`CAMPAIGN_DAILY` 상수** (js 4번 줄): raw 보고서를 (날짜, 캠페인명) 기준으로 직접 피벗·집계한 **실측 데이터** (추정치 아님)
  - 필드: `{d:날짜, c:캠페인명, i:노출, k:클릭, s:지출, r:광고매출, o:주문}`
  - 2026-06-11 확장: `AD_data_deep/Sponsored_Products_캠페인_보고서_04.csv`(4월, 일별) + `_05_1.csv`(5/1~14, 시간별→일별 합산) + 기존 검색어 보고서 피벗(5/29~6/4)
  - 범위 4/1~6/4, 24개 캠페인, 546행. **5/15~28은 캠페인×일별 원본 보고서가 없어 빈 구간** (해당 기간 캠페인 보고서를 받으면 같은 방식으로 채울 수 있음)
  - 일별 총합이 검색어 보고서(doGet) 일별 합계와 센트 단위 일치 검증 완료 (5개 표본일)
- **renderCampaigns() 3-mode 패턴**: 선택한 날짜 범위에 `CAMPAIGN_DAILY` 실측 데이터가 있으면 `dataMode='real'`로 그 데이터를 그대로 사용, 없으면 `allData` 비례 추정(`estimate`/`cumulative`)으로 폴백
  - **중요한 약속**: 실측 피벗 데이터가 있으면 절대 추정치를 우선하지 않는다 (사용자가 명시적으로 "비례 추정" 방식을 거부하고 "엑셀 피벗처럼 실데이터 집계"를 요구함 — 이 원칙은 향후 신규 데이터 추가 시에도 동일하게 적용)

## 3. 데이터 가공 방법 (mergeData)

- `mergeData(existing, incoming)`: 새 광고 데이터 업로드 시 병합 담당 (js 203-243번 줄)
- **8일 컷오프 규칙**: `cutoff = CA(캘리포니아) 기준 오늘 - 8일`
  - 이 날짜보다 이전 데이터는 "확정(settled)"으로 간주 → **덮어쓰지 않음**
  - 근거(코드 주석): 광고 전환 데이터는 클릭 후 7일간 추적되므로 8일 이전은 확정으로 봄
- 기존 행 존재 시:
  - `_adOnly` 플래그면 광고 지표만 갱신, sales 보존
  - 일반 갱신이면 `organic = max(0, sales - adSales)` 재계산
- **환율**: `getRate(yr,mo)` → `KRW_RATES[yr.mo] || 1400`, `SGD_RATES[yr.mo] || 1.34`
  - PRELOADED의 KRW 값은 기존 항목의 `salesKRW/sales` 비율로 역산한 환율(약 1507.84)을 사용해 채움

## 4. 매출 예측 시뮬레이션

- **`simData[key]`** (`sim_${yr}_${mo}`): `{mo, yr, locked, adSpend, orgPct, roas, actual:{...}, trendPredicted}`
  - `locked: true` (확정월): `agg()` 실측 합계를 `actual`에 저장, `orgPct`/`roas`도 실측에서 역산
  - `locked: false` (미래/진행월): `avgAdSpend × (1+avgGrowth/200)^ahead`로 광고비 투영, 진행 중인 달은 `calcProjSales()`로 보정
  - `avgGrowth`(MoM 성장률 평균)는 **-10% ~ +20% 범위로 클램프**
- **트렌드 예측 (`trendPredicted`)**: 모든 월 공통 — `avgAdSpend × (1+avgGrowth/200)^(mo-lastConfMo) × (avgRoas/100)`
  → "확정 월의 실제 대비 비교용" (js 642번 줄 주석)
- **`calcSim(key)`**: locked면 실측 ROAS/ACOS 산출, unlocked면 `adSpend × roas/100`으로 totalSales 역산 후 `orgPct`로 organic/adSales 분리
- **월간 잔여일 매출 예측 — `calcProjSales()`** (js 1284번 줄):
  ```
  일평균(dailyAvg) = 누적매출 ÷ 경과일수
  proj = 누적매출 + Σ(오늘(CA기준) 이후 남은 날짜의 dailyAvg × 해당 요일 가중치)
  ```
- **요일 가중치 — `getDowWeights()`** (js 1273번 줄):
  - **2026년 4월 이후, 매출 0 초과인 날짜만** 표본 사용 ("광고 안정화 이후"라는 주석 근거)
  - 요일별 평균 매출 ÷ 전체 평균 = 가중치 (데이터 없는 요일은 가중치 1)
- **주간 프로젝션 배너**: "확정 {actualTotal} / 예측 {projDays}일" 형태로 표시 (js 1632번 줄)

## 5. 표시 포맷 규칙 (2026-06-07 추가)

- **CPC / CTR / CVR은 매출·광고 탭 전체에서 소수점 2자리로 표시**
  - 신규 포맷 타입 `pct2`(예: `12.34%`), `money2`(예: `$1.23`/`₩1,234.56`) 추가
  - `fmtMetric`, KPI 카드, 차트 축/툴팁, 캠페인·그룹·키워드 테이블의 `cpcFmt` 모두 동일 규칙 적용
  - (참고: 매출/광고비 등 큰 금액은 기존처럼 정수 반올림 `money`/`pct` 유지 — 단가성·비율성 지표만 2자리로 분리)

## 6. 데이터 흐름 요약 (전체 파이프라인 — 2026-06-11 실사로 전면 갱신)

> Apps Script가 **2개**다 (둘 다 lora.chae@ksisters.sg 소유). 역할이 다르므로 절대 혼동 금지.

```
[입력] 아마존 보고서 메일 (no-reply@ads.amazon.com, 첨부 없음·링크만)
   └─ 사람이 "보고서 다운로드" 클릭 → xlsx를 Drive에 업로드 (자동화 불가: 링크가 로그인 필요)
        ├─ 01_Claude_Data/01_US/01_AMZ/01_Sales/  (매출·비즈니스 보고서)
        └─ 01_Claude_Data/01_US/01_AMZ/02_ads/   (광고 보고서, ID: 1VO9j_TnG60XJEfGxS0kIvfO7ShMdIn5z)

[스크립트 1] JB Dashboard Server (원조, 6/1) — "백업 + 가공"
   매일 밤 10~11시 KST 트리거(manualUpdateMasterSheet) + URL 호출 시:
   01_Claude_Data 전체 파일 파싱 → 최근 7일 일별 행 생성
   → JB_Master_Data 시트(master_data_upload 탭)에 날짜별 upsert  ← 이것이 "백업"
   ⚠ 2026-06-11 수정: 날짜 비교를 getDisplayValues()로 (Date/문자열 혼합 중복 버그)
   ⚠ cleanupMasterSheet() = 중복 제거+정렬 일회성 함수 (Code.gs 말미)

[스크립트 2] JB Dashboard Sync (6/10) — "대시보드 데이터 공급"
   Gmail 첨부 → 02_ads 저장 시도(현재 메일에 첨부가 없어 무용) + doGet 캐시 제공
   대시보드 DRIVE_SCRIPT_URL = 이 스크립트의 /exec (AKfycbyz...)

[대시보드] amazon_dashboard.js
   Sync URL 호출(하루 1회 자동 + 동기화 버튼) → mergeData() 병합 (8일 컷오프)
   JB_Master_Data ──(수동/세션 작업)──→ PRELOADED 하드코딩
```

**역사적 사고 (2026-06-10)**: 원래 대시보드가 Server URL을 호출했고 백업은 그 호출에 얹혀 돌았다.
6/10 타임아웃 개선 때 대시보드를 Sync URL로 교체하면서 **백업 실행 경로가 소리 없이 끊겼다.**
→ 재발 방지: 백업은 이제 독립 트리거로 돈다. **URL 교체·구조 변경 시 이 섹션을 반드시 갱신할 것.**

---

## 7. UI 레이아웃 규칙 (2026-06-08 추가)

### 7-1. Ads 지표 순서 — 고객 여정 기준
- **ADS_ORDER** (Trend Metrics 칩 순서):
  `adSpend → adSales → organic → roas → acos → troas → tacos → impr → ctr → clicks → cvr → adOrders → cpc → cpa → cpm`
- **Ads Overview 3번째 KPI 행** (8칸):
  `impr → ctr → clicks → adOrders → cvr → cpm → cpc → cpa`
  - 고객 여정 순서: 노출 → 클릭률 → 클릭 → 주문 → 전환율 → (비용 지표) CPM → CPC → CPA
  - CPC(클릭당 비용), CPA(전환당 비용), CPM(노출당 비용)은 비용 지표로 묶어 맨 뒤 배치

### 7-2. 비용 지표 색상
- CPM, CPC, CPA 3개 카드는 동일한 연한 회색 `#94a3b8`으로 통일
  → 비용 지표임을 시각적으로 구분 (나머지 여정 지표들은 각자 고유 색)

### 7-3. 전체 너비 일관성
- **문제**: `.content` 가 flex 컬럼 안에서 `margin: 0 auto`를 사용해 내부 콘텐츠 크기에 맞게 수축 → 탭마다 너비 달라짐
- **수정**: `amazon_dashboard.css` `.content` 에 `width: 100%; box-sizing: border-box` 추가
  ```css
  .content{padding:14px 20px;max-width:1440px;margin:0 auto;width:100%;box-sizing:border-box}
  ```
- 결과: Sales/Ads Overview/Campaign/Ad Group/KW 등 모든 탭이 동일 너비로 렌더링

### 7-4. Topbar 구조 (2026-06-11)
- **topbar**: `flex-wrap:nowrap` — 항상 1줄 유지 (flex-wrap:wrap 금지)
  - `.topbar-left`: 로고 + 배지만 (flex-shrink:0)
  - `.topbar-right`: 탭 버튼들 + vine 버튼 + 통화 버튼 + 동기화 (flex-wrap:nowrap)
- **#status-bar**: topbar 바로 아래 별도 고정 바 (position:sticky; top:49px; z-index:99)
  - `id="link-status"` span이 이 안에 있음 — "Data ~6/9 · Synced · Updated" 텍스트 표시
  - 이전에 topbar-left 안에 있었으나 topbar 줄바꿈 유발로 분리
- **Vine 버튼 (`id="vine-group"`)**: Sales 탭에서만 표시, 나머지 탭(Ads/Overview/Settings)에선 숨김
  - `applyI18nStatic()`에서 `appMode==='sales'`일 때만 display 활성화
  - **이 show/hide 로직을 다른 render 함수에 추가하거나 vine-group을 전체 노출로 되돌리지 않도록 주의**

---

### 확인이 더 필요한 부분 (추측 금지 원칙에 따라 미확정으로 표기)
- `vine_adj` 산출의 "정확한 기준값"(예: 왜 -2895인지 등 원천 계산 근거) — 코드에는 결과값만 박혀있고 산출 로직은 없음 → 사람이 Drive 원본 데이터를 보고 직접 입력한 것으로 추정되나 산출 기준 자체는 코드로 확인 불가
