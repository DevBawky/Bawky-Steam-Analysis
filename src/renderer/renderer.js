const pipeline = window.steamGenrePipeline;

const state = {
  year: 'all',
  mode: 'blended',
  market: 'all',
  selectedGenreId: null,
  trendFromYear: 2015,
  trendToYear: 2026,
  locale: 'ko'
};

const translations = {
  ko: {
    heroEyebrow: 'Steam 글로벌 장르 인텔리전스',
    sources: '수집 소스',
    coverage: '커버리지',
    sourceInfo: '수집 방식 보기',
    year: '연도',
    blended: '종합',
    demand: '수요',
    supply: '공급',
    marketAll: '전체',
    marketIndie: '인디',
    marketAAA: 'AAA',
    reset: '세부 분석 초기화',
    mockNotice: '현재 화면은 실제 Steam 전체 게임 실시간 수집본이 아니라 로컬 목업 데이터입니다.',
    collectionStatus: '수집 상태: 목업 데이터 · 마지막 생성:',
    stackedBars: '100% 누적 가로 막대',
    regionalShare: '지역별 장르 점유율',
    tagFlow: '태그 기반 장르 흐름',
    hybridBoard: '하이브리드 분석 보드',
    hybridGenreTags: '하이브리드 장르 태그',
    tagTopTrend: '태그 Top 10과 상승/하락',
    from: '시작',
    to: '종료',
    sourcesCoverage: '수집 소스와 커버리지',
    pipelineInfo: '데이터 파이프라인 설명',
    collectionFlowTitle: '수집 방식 한눈에 보기',
    flowSources: '여러 출처 수집',
    flowSourcesText: 'Steam, SteamSpy, SteamDB, VG Insights에서 앱/태그/성과 지표를 가져옵니다.',
    flowNormalize: '동일 게임 매칭',
    flowNormalizeText: 'appId와 제목을 기준으로 같은 게임의 데이터를 하나로 묶습니다.',
    flowValidate: '교차 검증',
    flowValidateText: '결측치와 극단값을 제거하고 신뢰도 가중 평균을 계산합니다.',
    flowRender: '대시보드 렌더링',
    flowRenderText: '지역별 100% 점유율, 하이브리드 태그, 상승/하락 추세로 변환합니다.',
    usedSourcesTitle: '활용 소스',
    steamSourceText: '앱 목록, 기본 메타데이터, 장르, 출시일 후보를 수집합니다.',
    steamSpyText: '태그, 소유자 추정 범위, 리뷰 기반 지표를 보강합니다.',
    steamDbText: '공개 API가 아니므로 약관을 준수한 로컬 스냅샷 또는 자체 재수집 결과로 다룹니다.',
    vgInsightsText: '구독형 API를 통해 추정 판매량, 리뷰, 지역/시장 지표를 보강하는 소스로 가정합니다.',
    coverageMeaningTitle: '커버리지란?',
    coverageMeaningText: '커버리지는 목표 데이터셋 중 유효하게 교차 검증 가능한 레코드의 비율입니다. 예를 들어 Steam 앱 목록 10,000개 중 게임으로 판정되고, 최소 2개 이상 소스에서 주요 지표가 확보된 항목이 9,300개라면 커버리지는 93%입니다.',
    sourceTableTitle: '소스별 역할',
    tableSource: '소스',
    tableBestFor: '잘 쓰는 지표',
    tableCaution: '주의점',
    steamBestFor: '공식 앱/장르/출시 정보',
    steamCaution: '성과 지표는 제한적입니다.',
    steamSpyBestFor: '태그, 리뷰, 소유자 추정',
    steamSpyCaution: '소유자 수는 범위 추정값입니다.',
    steamDbBestFor: '동시 접속자와 피크 추세',
    steamDbCaution: '공식 공개 API가 아니므로 스냅샷 기반으로 다룹니다.',
    vgBestFor: '판매량과 시장 성과 추정',
    vgCaution: '유료/추정 데이터라 검증 가중치를 둡니다.',
    crossValidationTitle: '교차 검증 파이프라인',
    pipelineStepOne: '여러 소스에서 동일 appId의 메타데이터와 성과 지표를 수집합니다.',
    pipelineStepTwo: '태그 우선순위 규칙으로 하이브리드 장르를 먼저 확정합니다.',
    pipelineStepThree: '결측치는 제외하고, 중앙값 절대 편차 방식으로 극단값을 제거합니다.',
    pipelineStepFour: '소스별 신뢰 가중치를 적용해 수요/공급/종합 점수를 평균화합니다.',
    pipelineStepFive: '지역별 막대 합계가 정확히 100%가 되도록 반올림 오차를 보정합니다.',
    currentDataStateTitle: '현재 앱 상태',
    currentDataStateText: '현재는 네트워크 수집을 실제로 수행하지 않는 로컬 목업입니다. UI와 파이프라인 구조, 이상치 제거, 평균화, 장르 우선순위, 100% 누적 렌더링을 검증하기 위한 단계입니다.',
    all: '전체',
    score: '점수',
    topTags: '기준 태그 Top 10',
    waiting: '대기 중',
    selectCoreGenre: '핵심 장르를 선택하세요',
    selectCoreDescription: '선택한 장르는 세부 태그 비율로 분할되고, 나머지 장르는 낮은 채도로 표시됩니다.',
    detailActive: '세부 분석 활성화',
    selectedTopGames: '선택 장르 인기 게임 Top 3',
    allTopGames: '전체 인기 게임 Top 3',
    representativeGames: '대표 게임',
    change: '변화',
    risingFalling: '상승 / 하락 태그',
    rising: '상승',
    falling: '하락',
    noResults: '결과 없음',
    firstPlace: '1위',
    detailReason: '수요 또는 공급 신호가 충분히 높아 2-depth 세부 분석 대상으로 분류된 장르입니다.'
  },
  en: {
    heroEyebrow: 'Steam Global Genre Intelligence',
    sources: 'Sources',
    coverage: 'Coverage',
    sourceInfo: 'Source Details',
    year: 'Year',
    blended: 'Blended',
    demand: 'Demand',
    supply: 'Supply',
    marketAll: 'All',
    marketIndie: 'Indie',
    marketAAA: 'AAA',
    reset: 'Reset Drill-down',
    mockNotice: 'This screen uses local mock data, not a live fetch of every Steam game.',
    collectionStatus: 'Collection status: mock data · generated:',
    stackedBars: '100% Stacked Horizontal Bars',
    regionalShare: 'Regional Genre Share',
    tagFlow: 'Tag-Based Genre Flow',
    hybridBoard: 'Hybrid Analysis Board',
    hybridGenreTags: 'Hybrid Genre Tags',
    tagTopTrend: 'Tag Top 10 and Rise/Fall',
    from: 'From',
    to: 'To',
    sourcesCoverage: 'Sources and Coverage',
    pipelineInfo: 'Data Pipeline Details',
    collectionFlowTitle: 'Collection Flow at a Glance',
    flowSources: 'Fetch multiple sources',
    flowSourcesText: 'Collect app, tag, and performance signals from Steam, SteamSpy, SteamDB, and VG Insights.',
    flowNormalize: 'Match the same game',
    flowNormalizeText: 'Group records for the same title by appId and normalized title.',
    flowValidate: 'Cross-validate',
    flowValidateText: 'Remove missing values and outliers, then calculate confidence-weighted averages.',
    flowRender: 'Render dashboard',
    flowRenderText: 'Convert the result into regional 100% shares, hybrid tags, and rise/fall trends.',
    usedSourcesTitle: 'Sources Used',
    steamSourceText: 'Collects app lists, core metadata, genre, and release date candidates.',
    steamSpyText: 'Adds tags, owner estimate ranges, and review-based signals.',
    steamDbText: 'Handled as a compliant local snapshot or pre-collected dataset for player history signals.',
    vgInsightsText: 'Assumed as a supplementary source for estimated sales, reviews, and market signals.',
    coverageMeaningTitle: 'What Coverage Means',
    coverageMeaningText: 'Coverage is the share of the target dataset that can be validly cross-checked. For example, if 9,300 of 10,000 Steam app records are identified as games and have key metrics confirmed by at least two sources, coverage is 93%.',
    sourceTableTitle: 'Source Roles',
    tableSource: 'Source',
    tableBestFor: 'Best For',
    tableCaution: 'Caution',
    steamBestFor: 'Official app, genre, and release data',
    steamCaution: 'Performance metrics are limited.',
    steamSpyBestFor: 'Tags, reviews, and owner estimates',
    steamSpyCaution: 'Owner counts are range estimates.',
    steamDbBestFor: 'Concurrent players and peak trends',
    steamDbCaution: 'Treated as snapshot data because it is not an official public API.',
    vgBestFor: 'Sales and market performance estimates',
    vgCaution: 'Estimated or paid data, so it receives validation weighting.',
    crossValidationTitle: 'Cross-Validation Pipeline',
    pipelineStepOne: 'Collect metadata and performance metrics for the same appId from multiple sources.',
    pipelineStepTwo: 'Resolve hybrid genres first using the tag priority rules.',
    pipelineStepThree: 'Exclude missing values and remove outliers with median absolute deviation.',
    pipelineStepFour: 'Apply source reliability weights and average demand, supply, and blended scores.',
    pipelineStepFive: 'Correct rounding drift so each regional stacked bar totals exactly 100%.',
    currentDataStateTitle: 'Current App State',
    currentDataStateText: 'This is currently a local mock, not a live network collection run. It validates the UI, pipeline structure, outlier removal, averaging, genre priority, and 100% stacked rendering.',
    all: 'All',
    score: 'Score',
    topTags: 'Tag Top 10',
    waiting: 'Ready',
    selectCoreGenre: 'Select a Core Genre',
    selectCoreDescription: 'The selected genre splits into detailed tag shares while other genres are dimmed.',
    detailActive: 'Detail Active',
    selectedTopGames: 'Selected Genre Top 3 Games',
    allTopGames: 'Overall Top 3 Games',
    representativeGames: 'Representative Games',
    change: 'Change',
    risingFalling: 'Rising / Falling Tags',
    rising: 'Rising',
    falling: 'Falling',
    noResults: 'No results',
    firstPlace: 'Top',
    detailReason: 'This genre has enough demand or supply signal to justify a second-depth analysis.'
  }
};

const labelTranslations = {
  en: {
    아시아: 'Asia',
    북미: 'North America',
    유럽: 'Europe',
    남미: 'South America',
    오세아니아: 'Oceania',
    액션: 'Action',
    로그라이크: 'Roguelike',
    전략: 'Strategy',
    시뮬레이션: 'Simulation',
    어드벤처: 'Adventure',
    슈터: 'Shooter',
    스포츠: 'Sports',
    퍼즐: 'Puzzle',
    레이싱: 'Racing',
    '생존 액션': 'Survival Action',
    핵앤슬래시: 'Hack and Slash',
    '기타 액션': 'Other Action',
    '액션 로그라이크': 'Action Roguelike',
    '덱빌딩 로그라이크': 'Deckbuilding Roguelike',
    서바이버라이크: 'Survivor-like',
    '전통 로그라이크': 'Traditional Roguelike',
    '3인칭 슈터': 'Third-Person Shooter',
    '익스트랙션 슈터': 'Extraction Shooter',
    '기타 슈터': 'Other Shooter',
    '액션 RPG': 'Action RPG',
    '오픈월드 RPG': 'Open World RPG',
    '기타 RPG': 'Other RPG',
    대전략: 'Grand Strategy',
    덱빌딩: 'Deckbuilding',
    전술: 'Tactics',
    '기타 전략': 'Other Strategy',
    '생활 시뮬레이션': 'Life Simulation',
    경영: 'Management',
    자동화: 'Automation',
    '기타 시뮬레이션': 'Other Simulation',
    내러티브: 'Narrative',
    탐험: 'Exploration',
    '기타 어드벤처': 'Other Adventure',
    '동시 접속자 중심': 'Concurrent player signal',
    '지역별 플레이어 기반': 'Regional player base',
    '장기 서비스 지표': 'Long-term service signal',
    '리뷰/판매량 균형': 'Review and sales balance',
    '서바이버라이크 수요': 'Survivor-like demand',
    '덱빌딩 로그라이크 성장': 'Deckbuilding roguelike growth',
    'FPS 동시 접속자': 'FPS concurrent players',
    '배틀로얄 지역 수요': 'Battle royale regional demand',
    '라이브 서비스 슈터': 'Live-service shooter',
    '리뷰/판매량 중심': 'Review and sales signal',
    '동시 접속자 피크': 'Peak concurrent players',
    '장기 수요 회복': 'Long-term demand recovery',
    '장기 활성 유저': 'Long-term active users',
    'DLC 기반 수요': 'DLC-driven demand',
    '대전략 유지율': 'Grand strategy retention',
    '리뷰/플레이 지속성': 'Review and playtime durability',
    '모드 생태계': 'Mod ecosystem',
    '경영 시뮬레이션 수요': 'Management sim demand',
    '메트로배니아 대표성': 'Metroidvania benchmark',
    '내러티브 수요': 'Narrative demand',
    '탐험형 리뷰 품질': 'Exploration review quality',
    '글로벌 스포츠 수요': 'Global sports demand',
    '프랜차이즈 기반': 'Franchise-driven demand',
    '시뮬레이션 결합 수요': 'Simulation crossover demand',
    '장기 리뷰 품질': 'Long-term review quality',
    '퍼즐 핵심 팬층': 'Core puzzle audience',
    '신작 수요': 'New release demand',
    '오픈월드 레이싱': 'Open-world racing',
    '시뮬레이션 팬층': 'Simulation audience',
    '시즌형 스포츠 수요': 'Seasonal sports demand',
    '인디 로그라이크 수요': 'Indie roguelike demand',
    '인디 장기 플레이 지속성': 'Indie long-term play durability',
    '액션 로그라이크 대표성': 'Action roguelike benchmark',
    '액션 어드벤처 수요': 'Action adventure demand',
    '스타일 액션 팬층': 'Stylized action audience',
    '협동 슈터 유지율': 'Co-op shooter retention',
    '하이템포 FPS 팬층': 'High-tempo FPS audience',
    '슈터 로그라이크 결합': 'Shooter roguelike crossover',
    '내러티브 RPG 수요': 'Narrative RPG demand',
    '인디 RPG 장기 리뷰': 'Indie RPG long-term reviews',
    'JRPG 감성 수요': 'JRPG-inspired demand',
    '덱빌딩 전략 수요': 'Deckbuilding strategy demand',
    '전술 전략 팬층': 'Tactical strategy audience',
    '생존 도시건설 성장': 'Survival city-builder growth',
    '생활 시뮬레이션 대표성': 'Life simulation benchmark',
    '자동화 시뮬레이션 수요': 'Automation simulation demand',
    '탐험 액션 어드벤처': 'Exploration action adventure',
    '내러티브 팬층': 'Narrative audience',
    '인디 스포츠 수요': 'Indie sports demand',
    '익스트림 스포츠 팬층': 'Extreme sports audience',
    '레이싱 스포츠 결합': 'Racing sports crossover',
    '시스템 퍼즐 수요': 'System puzzle demand',
    '인디 레이싱 대표성': 'Indie racing benchmark',
    '아케이드 레이싱 팬층': 'Arcade racing audience',
    '드리프트 팬층': 'Drift racing audience',
    '신뢰도 높음': 'High confidence',
    '신뢰도 보통': 'Medium confidence',
    '신뢰도 낮음': 'Low confidence'
  }
};

const chart = document.querySelector('#chart');
const yearSelect = document.querySelector('#yearSelect');
const activeMode = document.querySelector('#activeMode');
const genreButtons = document.querySelector('#genreButtons');
const detailCard = document.querySelector('#detailCard');
const sourceCount = document.querySelector('#sourceCount');
const coverageScore = document.querySelector('#coverageScore');
const resetButton = document.querySelector('#resetButton');
const topGamesCard = document.querySelector('#topGamesCard');
const hybridTagsCard = document.querySelector('#hybridTagsCard');
const trendCard = document.querySelector('#trendCard');
const trendBody = document.querySelector('#trendBody');
const trendFromSelect = document.querySelector('#trendFromSelect');
const trendToSelect = document.querySelector('#trendToSelect');
const sourceInfoButton = document.querySelector('#sourceInfoButton');
const sourceModal = document.querySelector('#sourceModal');
const sourceModalClose = document.querySelector('#sourceModalClose');
const exportJsonButton = document.querySelector('#exportJsonButton');
const exportCsvButton = document.querySelector('#exportCsvButton');
const lastGeneratedAt = document.querySelector('#lastGeneratedAt');
const windowMinimize = document.querySelector('#windowMinimize');
const windowMaximize = document.querySelector('#windowMaximize');
const windowClose = document.querySelector('#windowClose');
const localeToggle = document.querySelector('#localeToggle');

const dashboard = pipeline.buildDashboardDataset();

sourceCount.textContent = dashboard.sources.length;
coverageScore.textContent = `${Math.round(dashboard.quality.coverage * 100)}%`;
lastGeneratedAt.textContent = new Date(dashboard.generatedAt).toLocaleString('ko-KR');

const allYearsOption = document.createElement('option');
allYearsOption.value = 'all';
allYearsOption.textContent = t('all');
allYearsOption.selected = state.year === 'all';
yearSelect.append(allYearsOption);

dashboard.years.forEach((year) => {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  option.selected = year === state.year;
  yearSelect.append(option);
});

dashboard.years.forEach((year) => {
  const fromOption = document.createElement('option');
  fromOption.value = year;
  fromOption.textContent = year;
  fromOption.selected = year === state.trendFromYear;
  trendFromSelect.append(fromOption);

  const toOption = document.createElement('option');
  toOption.value = year;
  toOption.textContent = year;
  toOption.selected = year === state.trendToYear;
  trendToSelect.append(toOption);
});

yearSelect.addEventListener('change', (event) => {
  state.year = event.target.value === 'all' ? 'all' : Number(event.target.value);
  render();
});

document.querySelectorAll('.mode-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.mode-button').forEach((item) => {
      item.classList.toggle('is-active', item === button);
    });
    state.mode = button.dataset.mode;
    render();
  });
});

document.querySelectorAll('.market-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.market-button').forEach((item) => {
      item.classList.toggle('is-active', item === button);
    });
    state.market = button.dataset.market;
    state.selectedGenreId = null;
    render();
  });
});

resetButton.addEventListener('click', () => {
  state.selectedGenreId = null;
  render();
});

trendFromSelect.addEventListener('change', (event) => {
  state.trendFromYear = Number(event.target.value);
  render();
});

trendToSelect.addEventListener('change', (event) => {
  state.trendToYear = Number(event.target.value);
  render();
});

exportJsonButton.addEventListener('click', () => {
  const payload = pipeline.buildExportPayload(
    dashboard,
    state.year,
    state.mode,
    Math.min(state.trendFromYear, state.trendToYear),
    Math.max(state.trendFromYear, state.trendToYear),
    state.market
  );
  downloadFile(
    `steam-genre-${state.year}-${state.mode}-${state.market}.json`,
    JSON.stringify(payload, null, 2),
    'application/json'
  );
});

exportCsvButton.addEventListener('click', () => {
  const rows = pipeline.buildExportRows(dashboard, state.year, state.mode, state.market);
  downloadFile(`steam-genre-${state.year}-${state.mode}-${state.market}.csv`, toCsv(rows), 'text/csv;charset=utf-8');
});

windowMinimize.addEventListener('click', () => {
  window.windowControls?.minimize();
});

windowMaximize.addEventListener('click', async () => {
  const isMaximized = await window.windowControls?.toggleMaximize();
  windowMaximize.textContent = isMaximized ? '❐' : '□';
});

windowClose.addEventListener('click', () => {
  window.windowControls?.close();
});

localeToggle.addEventListener('click', () => {
  state.locale = state.locale === 'ko' ? 'en' : 'ko';
  applyTranslations();
  render();
});

sourceInfoButton.addEventListener('click', () => {
  sourceModal.hidden = false;
});

sourceModalClose.addEventListener('click', closeSourceModal);

sourceModal.addEventListener('click', (event) => {
  if (event.target === sourceModal) {
    closeSourceModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !sourceModal.hidden) {
    closeSourceModal();
  }
});

function closeSourceModal() {
  sourceModal.hidden = true;
}

function render() {
  const view = pipeline.getYearView(dashboard, state.year, state.mode, state.market);
  activeMode.textContent = `${labelForMode(state.mode)} · ${labelForMarket(state.market)}`;

  renderGenreButtons(view);
  renderChart(view);
  renderHybridTagsCard(view);
  renderTrendCard();
  renderDetailCard(view);
  renderTopGames();
}

function renderGenreButtons(view) {
  const drillable = pipeline.getDrillableGenres(view);
  genreButtons.replaceChildren();

  drillable.forEach((genre) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'genre-button';
    button.classList.toggle('is-active', genre.id === state.selectedGenreId);
    button.style.setProperty('--genre-color', genre.color);
    button.textContent = translateLabel(genre.label);
    button.addEventListener('click', () => {
      state.selectedGenreId = state.selectedGenreId === genre.id ? null : genre.id;
      render();
    });
    genreButtons.append(button);
  });
}

function renderChart(view) {
  chart.replaceChildren();

  view.regions.forEach((region) => {
    const row = document.createElement('article');
    row.className = 'chart-row';

    const label = document.createElement('div');
    label.className = 'region-label';
    label.textContent = translateLabel(region.label);

    const track = document.createElement('div');
    track.className = 'bar-track';
    track.setAttribute('aria-label', `${region.label} 장르 분포`);

    const segments = pipeline.getVisibleSegments(region, state.selectedGenreId);

    segments.forEach((segment) => {
      const piece = document.createElement('button');
      piece.type = 'button';
      piece.className = 'bar-segment';
      piece.classList.toggle('is-favored', segment.genreId === region.favoredGenreId);
      piece.classList.toggle('is-dimmed', segment.dimmed);
      piece.style.setProperty('--segment-color', segment.color);
      piece.style.setProperty('--segment-width', `${segment.share}%`);
      piece.title = `${translateLabel(segment.label)}: ${segment.share.toFixed(1)}%`;
      piece.addEventListener('click', () => {
        if (pipeline.hasSubgenres(view, segment.genreId)) {
          state.selectedGenreId = segment.genreId;
          render();
        }
      });

      const text = document.createElement('span');
      text.className = 'segment-label';
      text.textContent = segment.share >= 4.5 ? `${segment.share.toFixed(1)}%` : '';

      piece.append(text);
      track.append(piece);
    });

    const favored = document.createElement('div');
    favored.className = 'favored-label';
    favored.textContent = `${t('firstPlace')} ${translateLabel(region.favoredGenreLabel)}`;

    row.append(label, track, favored);
    chart.append(row);
  });
}

function renderHybridTagsCard(view) {
  const tags = pipeline.getHybridTagRankings(view);
  const tagItems = tags
    .map(
      (tag, index) => `
        <li>
          <span class="tag-rank">${index + 1}</span>
          <span class="tag-name">${translateLabel(tag.label)}</span>
          <strong>${tag.share.toFixed(1)}%</strong>
        </li>
      `
    )
    .join('');

  hybridTagsCard.innerHTML = `
    <span class="detail-kicker">${t('hybridGenreTags')}</span>
    <strong>${labelForMode(state.mode)} ${t('topTags')}</strong>
    <ol>${tagItems}</ol>
  `;
}

function renderDetailCard(view) {
  const selected = state.selectedGenreId
    ? pipeline.findGenreSummary(view, state.selectedGenreId)
    : null;

  if (!selected) {
    detailCard.innerHTML = `
      <span class="detail-kicker">${t('waiting')}</span>
      <strong>${t('selectCoreGenre')}</strong>
      <p>${t('selectCoreDescription')}</p>
    `;
    return;
  }

  const subgenreItems = selected.subgenres
    .map(
      (subgenre) => `
        <li>
          <span>${translateLabel(subgenre.label)}</span>
          <strong>${subgenre.averageShare.toFixed(1)}%</strong>
        </li>
      `
    )
    .join('');

    detailCard.innerHTML = `
      <span class="detail-kicker">${t('detailActive')}</span>
    <strong>${translateLabel(selected.label)}</strong>
    <span class="confidence-badge ${getSelectedConfidence(view, selected.id).level}">${translateLabel(getSelectedConfidence(view, selected.id).label)}</span>
    <p>${t('detailReason')}</p>
    <ul>${subgenreItems}</ul>
  `;
}

function renderTrendCard() {
  const fromYear = Math.min(state.trendFromYear, state.trendToYear);
  const toYear = Math.max(state.trendFromYear, state.trendToYear);
  const trend = pipeline.getTagTrendRankings(dashboard, state.mode, fromYear, toYear, state.market);
  const rising = trend.rising;
  const falling = trend.falling;

  trendBody.innerHTML = `
    <span class="detail-kicker">${fromYear} → ${toYear} ${t('change')}</span>
    <strong>${t('risingFalling')}</strong>
    <div class="trend-columns">
      <div>
        <span class="trend-title up">${t('rising')}</span>
        <ol>${renderTrendRows(rising, 'up')}</ol>
      </div>
      <div>
        <span class="trend-title down">${t('falling')}</span>
        <ol>${renderTrendRows(falling, 'down')}</ol>
      </div>
    </div>
  `;
}

function renderTopGames() {
  const games = pipeline.getTopGames(dashboard, state.selectedGenreId, state.market);
  const title = state.selectedGenreId ? t('selectedTopGames') : t('allTopGames');
  const gameItems = games
    .map(
      (game, index) => `
        <li>
          <span class="game-rank">${index + 1}</span>
          <span class="game-title">${game.title}</span>
          <strong>${translateLabel(game.metric)}</strong>
        </li>
      `
    )
    .join('');

  topGamesCard.innerHTML = `
    <span class="detail-kicker">${t('representativeGames')}</span>
    <strong>${title}</strong>
    <ol>${gameItems}</ol>
  `;
}

function labelForMode(mode) {
  if (mode === 'demand') {
    return t('demand');
  }

  if (mode === 'supply') {
    return t('supply');
  }

  return t('blended');
}

function labelForMarket(market) {
  if (market === 'indie') {
    return t('marketIndie');
  }

  if (market === 'aaa') {
    return t('marketAAA');
  }

  return t('marketAll');
}

function getSelectedConfidence(view, genreId) {
  const genre = view.regions[0]?.genres.find((item) => item.id === genreId);
  return genre?.confidence ?? { level: 'low', label: '신뢰도 낮음' };
}

function renderTrendRows(rows, direction) {
  if (rows.length === 0) {
    return `<li class="empty-row">${t('noResults')}</li>`;
  }

  return rows
    .map(
      (row) => `
        <li>
          <span>${translateLabel(row.label)}</span>
          <strong class="${direction}">${row.delta > 0 ? '+' : ''}${row.delta.toFixed(1)}%p</strong>
        </li>
      `
    )
    .join('');
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function toCsv(rows) {
  if (rows.length === 0) {
    return '';
  }

  const headers = Object.keys(rows[0]);
  const body = rows.map((row) => headers.map((header) => csvEscape(row[header])).join(','));
  return [headers.join(','), ...body].join('\n');
}

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function t(key) {
  return translations[state.locale][key] ?? translations.ko[key] ?? key;
}

function translateLabel(label) {
  if (state.locale === 'ko') {
    return label;
  }

  return labelTranslations.en[label] ?? label;
}

function applyTranslations() {
  document.documentElement.lang = state.locale;
  localeToggle.dataset.locale = state.locale;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  yearSelect.querySelector('option[value="all"]').textContent = t('all');
}

render();
