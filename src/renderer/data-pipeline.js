const sourceWeights = {
  steamWebApi: 0.3,
  steamSpy: 0.25,
  steamDbSnapshot: 0.2,
  vgInsights: 0.25
};

const demandMetricWeights = {
  reviews: 0.35,
  peakCcu: 0.3,
  estimatedSales: 0.25,
  positiveRating: 0.1
};

const genrePriority = [
  'roguelike',
  'rpg',
  'simulation',
  'shooter',
  'strategy',
  'action',
  'adventure',
  'sports',
  'puzzle',
  'racing'
];

const indieBaseShareByGenre = {
  roguelike: 0.88,
  puzzle: 0.82,
  adventure: 0.74,
  simulation: 0.68,
  strategy: 0.62,
  rpg: 0.48,
  action: 0.42,
  shooter: 0.28,
  racing: 0.22,
  sports: 0.18
};

const genreKeywordMap = {
  roguelike: ['roguelike', 'rogue-like', 'roguelite', 'rogue-lite', '로그라이크', '로그라이트', 'survivor-like', 'survivorlike'],
  rpg: ['rpg', 'role-playing', 'role playing', 'jrpg', 'crpg', '역할수행'],
  simulation: ['simulation', 'sim', 'management', 'automation', 'sandbox', '시뮬레이션', '경영'],
  shooter: ['shooter', 'fps', 'third-person shooter', 'tps', 'bullet hell', '슈터'],
  strategy: ['strategy', 'tactics', '4x', 'deckbuilding', 'card battler', '전략', '전술', '덱빌딩'],
  action: ['action', 'hack and slash', 'platformer', '액션'],
  adventure: ['adventure', 'metroidvania', 'narrative', 'exploration', '어드벤처', '탐험'],
  sports: ['sports', 'sport', 'football', 'basketball', 'soccer', '스포츠'],
  puzzle: ['puzzle', 'logic', '퍼즐'],
  racing: ['racing', 'driving', '레이싱']
};

const baseGenreCatalog = [
  { id: 'action', label: '액션', color: '#E85D4F' },
  { id: 'roguelike', label: '로그라이크', color: '#FF7A59' },
  { id: 'rpg', label: 'RPG', color: '#F0B35A' },
  { id: 'shooter', label: '슈터', color: '#8FD14F' },
  { id: 'strategy', label: '전략', color: '#4FA3D1' },
  { id: 'simulation', label: '시뮬레이션', color: '#5CC28A' },
  { id: 'adventure', label: '어드벤처', color: '#B483E6' },
  { id: 'sports', label: '스포츠', color: '#46B7A7' },
  { id: 'puzzle', label: '퍼즐', color: '#D779B8' },
  { id: 'racing', label: '레이싱', color: '#9BA7B4' }
];

const subgenreCatalog = {
  action: [
    ['survival_action', '생존 액션', 30],
    ['shooter', '슈터', 28],
    ['hack_and_slash', '핵앤슬래시', 24],
    ['other_action', '기타 액션', 18]
  ],
  roguelike: [
    ['action_roguelike', '액션 로그라이크', 32],
    ['deckbuilding_roguelike', '덱빌딩 로그라이크', 27],
    ['survivor_like', '서바이버라이크', 23],
    ['traditional_roguelike', '전통 로그라이크', 18]
  ],
  shooter: [
    ['fps', 'FPS', 34],
    ['third_person_shooter', '3인칭 슈터', 26],
    ['extraction_shooter', '익스트랙션 슈터', 22],
    ['other_shooter', '기타 슈터', 18]
  ],
  rpg: [
    ['jrpg', 'JRPG', 31],
    ['action_rpg', '액션 RPG', 30],
    ['open_world_rpg', '오픈월드 RPG', 23],
    ['other_rpg', '기타 RPG', 16]
  ],
  strategy: [
    ['grand_strategy', '대전략', 28],
    ['deckbuilding', '덱빌딩', 26],
    ['tactics', '전술', 25],
    ['other_strategy', '기타 전략', 21]
  ],
  simulation: [
    ['life_sim', '생활 시뮬레이션', 34],
    ['management', '경영', 30],
    ['automation', '자동화', 20],
    ['other_simulation', '기타 시뮬레이션', 16]
  ],
  adventure: [
    ['narrative', '내러티브', 33],
    ['metroidvania', 'Metroidvania', 26],
    ['exploration', '탐험', 24],
    ['other_adventure', '기타 어드벤처', 17]
  ]
};

const topGameCatalog = {
  action: [
    { title: 'Counter-Strike 2', metric: '동시 접속자 중심' },
    { title: 'PUBG: BATTLEGROUNDS', metric: '지역별 플레이어 기반' },
    { title: 'Warframe', metric: '장기 서비스 지표' }
  ],
  roguelike: [
    { title: 'Hades', metric: '리뷰/판매량 균형' },
    { title: 'Vampire Survivors', metric: '서바이버라이크 수요' },
    { title: 'Balatro', metric: '덱빌딩 로그라이크 성장' }
  ],
  shooter: [
    { title: 'Counter-Strike 2', metric: 'FPS 동시 접속자' },
    { title: 'PUBG: BATTLEGROUNDS', metric: '배틀로얄 지역 수요' },
    { title: 'Apex Legends', metric: '라이브 서비스 슈터' }
  ],
  rpg: [
    { title: 'Baldur’s Gate 3', metric: '리뷰/판매량 중심' },
    { title: 'ELDEN RING', metric: '동시 접속자 피크' },
    { title: 'Cyberpunk 2077', metric: '장기 수요 회복' }
  ],
  strategy: [
    { title: 'Sid Meier’s Civilization VI', metric: '장기 활성 유저' },
    { title: 'Total War: WARHAMMER III', metric: 'DLC 기반 수요' },
    { title: 'Stellaris', metric: '대전략 유지율' }
  ],
  simulation: [
    { title: 'Stardew Valley', metric: '리뷰/플레이 지속성' },
    { title: 'RimWorld', metric: '모드 생태계' },
    { title: 'Cities: Skylines', metric: '경영 시뮬레이션 수요' }
  ],
  adventure: [
    { title: 'Hollow Knight', metric: '메트로배니아 대표성' },
    { title: 'Stray', metric: '내러티브 수요' },
    { title: 'Outer Wilds', metric: '탐험형 리뷰 품질' }
  ],
  sports: [
    { title: 'EA SPORTS FC 24', metric: '글로벌 스포츠 수요' },
    { title: 'NBA 2K24', metric: '프랜차이즈 기반' },
    { title: 'Football Manager 2024', metric: '시뮬레이션 결합 수요' }
  ],
  puzzle: [
    { title: 'Portal 2', metric: '장기 리뷰 품질' },
    { title: 'Baba Is You', metric: '퍼즐 핵심 팬층' },
    { title: 'The Talos Principle 2', metric: '신작 수요' }
  ],
  racing: [
    { title: 'Forza Horizon 5', metric: '오픈월드 레이싱' },
    { title: 'Assetto Corsa', metric: '시뮬레이션 팬층' },
    { title: 'F1 24', metric: '시즌형 스포츠 수요' }
  ]
};

const marketTopGameCatalog = {
  indie: {
    all: [
      { title: 'Hades', metric: '인디 로그라이크 수요' },
      { title: 'Stardew Valley', metric: '인디 장기 플레이 지속성' },
      { title: 'Balatro', metric: '덱빌딩 로그라이크 성장' }
    ],
    action: [
      { title: 'Dead Cells', metric: '액션 로그라이크 대표성' },
      { title: 'Hollow Knight', metric: '액션 어드벤처 수요' },
      { title: 'Katana ZERO', metric: '스타일 액션 팬층' }
    ],
    roguelike: [
      { title: 'Hades', metric: '리뷰/판매량 균형' },
      { title: 'Vampire Survivors', metric: '서바이버라이크 수요' },
      { title: 'Balatro', metric: '덱빌딩 로그라이크 성장' }
    ],
    shooter: [
      { title: 'Deep Rock Galactic', metric: '협동 슈터 유지율' },
      { title: 'ULTRAKILL', metric: '하이템포 FPS 팬층' },
      { title: 'Risk of Rain 2', metric: '슈터 로그라이크 결합' }
    ],
    rpg: [
      { title: 'Disco Elysium', metric: '내러티브 RPG 수요' },
      { title: 'Undertale', metric: '인디 RPG 장기 리뷰' },
      { title: 'Sea of Stars', metric: 'JRPG 감성 수요' }
    ],
    strategy: [
      { title: 'Slay the Spire', metric: '덱빌딩 전략 수요' },
      { title: 'Into the Breach', metric: '전술 전략 팬층' },
      { title: 'Against the Storm', metric: '생존 도시건설 성장' }
    ],
    simulation: [
      { title: 'Stardew Valley', metric: '생활 시뮬레이션 대표성' },
      { title: 'RimWorld', metric: '모드 생태계' },
      { title: 'Factorio', metric: '자동화 시뮬레이션 수요' }
    ],
    adventure: [
      { title: 'Outer Wilds', metric: '탐험형 리뷰 품질' },
      { title: 'TUNIC', metric: '탐험 액션 어드벤처' },
      { title: 'Night in the Woods', metric: '내러티브 팬층' }
    ],
    sports: [
      { title: 'Tape to Tape', metric: '인디 스포츠 수요' },
      { title: 'Descenders', metric: '익스트림 스포츠 팬층' },
      { title: 'Lonely Mountains: Downhill', metric: '레이싱 스포츠 결합' }
    ],
    puzzle: [
      { title: 'Baba Is You', metric: '퍼즐 핵심 팬층' },
      { title: 'The Witness', metric: '장기 리뷰 품질' },
      { title: 'Opus Magnum', metric: '시스템 퍼즐 수요' }
    ],
    racing: [
      { title: 'art of rally', metric: '인디 레이싱 대표성' },
      { title: 'Distance', metric: '아케이드 레이싱 팬층' },
      { title: 'Absolute Drift', metric: '드리프트 팬층' }
    ]
  }
};

const regionalProfiles = {
  asia: {
    label: '아시아',
    genreBias: {
      action: 1.05,
      roguelike: 1.18,
      rpg: 1.26,
      shooter: 1.08,
      strategy: 0.9,
      simulation: 1.04,
      adventure: 0.94,
      sports: 0.82,
      puzzle: 0.9,
      racing: 0.84
    }
  },
  northAmerica: {
    label: '북미',
    genreBias: {
      action: 1.3,
      roguelike: 1.2,
      rpg: 1,
      shooter: 1.28,
      strategy: 0.94,
      simulation: 0.98,
      adventure: 0.94,
      sports: 1.08,
      puzzle: 0.87,
      racing: 0.92
    }
  },
  europe: {
    label: '유럽',
    genreBias: {
      action: 0.98,
      roguelike: 1.12,
      rpg: 0.96,
      shooter: 1.06,
      strategy: 1.34,
      simulation: 1.08,
      adventure: 0.86,
      sports: 1,
      puzzle: 0.98,
      racing: 0.86
    }
  },
  southAmerica: {
    label: '남미',
    genreBias: {
      action: 1.36,
      roguelike: 1.08,
      rpg: 0.95,
      shooter: 1.22,
      strategy: 0.76,
      simulation: 0.88,
      adventure: 1.12,
      sports: 1.14,
      puzzle: 0.82,
      racing: 0.88
    }
  },
  oceania: {
    label: '오세아니아',
    genreBias: {
      action: 1,
      roguelike: 1.2,
      rpg: 0.9,
      shooter: 1.04,
      strategy: 0.92,
      simulation: 1.46,
      adventure: 0.96,
      sports: 0.92,
      puzzle: 1.02,
      racing: 0.9
    }
  }
};

const yearlyGenreSignals = {
  2015: { action: 14, roguelike: 4, rpg: 13, shooter: 9, strategy: 15, simulation: 9, adventure: 16, sports: 8, puzzle: 8, racing: 4 },
  2016: { action: 14, roguelike: 5, rpg: 14, shooter: 9, strategy: 15, simulation: 10, adventure: 15, sports: 8, puzzle: 7, racing: 4 },
  2017: { action: 15, roguelike: 5, rpg: 14, shooter: 10, strategy: 14, simulation: 10, adventure: 15, sports: 7, puzzle: 7, racing: 4 },
  2018: { action: 15, roguelike: 6, rpg: 15, shooter: 10, strategy: 14, simulation: 11, adventure: 15, sports: 7, puzzle: 7, racing: 4 },
  2019: { action: 15, roguelike: 7, rpg: 15, shooter: 10, strategy: 13, simulation: 12, adventure: 14, sports: 7, puzzle: 7, racing: 5 },
  2020: { action: 15, roguelike: 8, rpg: 16, shooter: 10, strategy: 13, simulation: 12, adventure: 14, sports: 7, puzzle: 7, racing: 5 },
  2021: { action: 16, roguelike: 9, rpg: 17, shooter: 10, strategy: 13, simulation: 13, adventure: 13, sports: 6, puzzle: 6, racing: 4 },
  2022: { action: 16, roguelike: 10, rpg: 17, shooter: 11, strategy: 14, simulation: 14, adventure: 12, sports: 6, puzzle: 5, racing: 4 },
  2023: { action: 16, roguelike: 12, rpg: 18, shooter: 11, strategy: 14, simulation: 14, adventure: 11, sports: 5, puzzle: 4, racing: 3 },
  2024: { action: 16, roguelike: 14, rpg: 18, shooter: 12, strategy: 15, simulation: 15, adventure: 10, sports: 4, puzzle: 3, racing: 3 },
  2025: { action: 16, roguelike: 15, rpg: 18, shooter: 12, strategy: 15, simulation: 16, adventure: 9, sports: 4, puzzle: 3, racing: 2 },
  2026: { action: 16, roguelike: 16, rpg: 19, shooter: 12, strategy: 15, simulation: 16, adventure: 9, sports: 3, puzzle: 2, racing: 2 }
};

const hybridClassificationExamples = [
  {
    title: 'Hades',
    genres: ['Action', 'RPG'],
    tags: ['Action Roguelike', 'Rogue-lite'],
    expectedGenreId: 'roguelike'
  },
  {
    title: 'Risk of Rain 2',
    genres: ['Action', 'Shooter'],
    tags: ['Roguelike', 'Third-Person Shooter'],
    expectedGenreId: 'roguelike'
  },
  {
    title: 'Balatro',
    genres: ['Strategy', 'Card Game'],
    tags: ['Deckbuilding Roguelike', 'Roguelike'],
    expectedGenreId: 'roguelike'
  },
  {
    title: 'Counter-Strike 2',
    genres: ['Action'],
    tags: ['FPS', 'Shooter', 'Competitive'],
    expectedGenreId: 'shooter'
  },
  {
    title: 'Stardew Valley',
    genres: ['RPG', 'Simulation'],
    tags: ['Farming Sim', 'Life Sim'],
    expectedGenreId: 'rpg'
  }
];

class AbstractSourceAdapter {
  constructor(name, sourceKey, variance, missingRate) {
    this.name = name;
    this.sourceKey = sourceKey;
    this.variance = variance;
    this.missingRate = missingRate;
  }

  fetchRegionalGenreMetrics(year) {
    return Object.entries(regionalProfiles).map(([regionId, profile]) => ({
      source: this.sourceKey,
      regionId,
      regionLabel: profile.label,
      genres: baseGenreCatalog.map((genre) => this.buildGenreRecord(year, profile, genre))
    }));
  }

  buildGenreRecord(year, profile, genre) {
    const seed = stableNoise(`${this.sourceKey}-${year}-${profile.label}-${genre.id}`);
    const missing = seed < this.missingRate;
    const baseline = yearlyGenreSignals[year][genre.id] * profile.genreBias[genre.id];
    const noisyScore = baseline * (1 + (seed - 0.5) * this.variance);

    if (missing) {
      return {
        ...genre,
        demandScore: null,
        supplyScore: null,
        metrics: {}
      };
    }

    return {
      ...genre,
      source: this.sourceKey,
      demandScore: noisyScore * metricMultiplier(genre.id, 'demand', year),
      supplyScore: noisyScore * metricMultiplier(genre.id, 'supply', year),
      metrics: {
        reviews: noisyScore * 5200,
        peakCcu: noisyScore * 380,
        estimatedSales: noisyScore * 17000,
        positiveRating: 0.68 + stableNoise(`${genre.id}-${year}-rating`) * 0.24,
        releaseCount: noisyScore * 7.2
      }
    };
  }
}

class SteamWebApiAdapter extends AbstractSourceAdapter {
  constructor() {
    super('Steam Web API', 'steamWebApi', 0.12, 0.02);
  }
}

class SteamSpyAdapter extends AbstractSourceAdapter {
  constructor() {
    super('SteamSpy', 'steamSpy', 0.2, 0.04);
  }
}

class SteamDbSnapshotAdapter extends AbstractSourceAdapter {
  constructor() {
    super('SteamDB Snapshot', 'steamDbSnapshot', 0.1, 0.03);
  }
}

class VgInsightsAdapter extends AbstractSourceAdapter {
  constructor() {
    super('VG Insights', 'vgInsights', 0.16, 0.02);
  }
}

function buildDashboardDataset() {
  const years = Object.keys(yearlyGenreSignals).map(Number);
  const adapters = [
    new SteamWebApiAdapter(),
    new SteamSpyAdapter(),
    new SteamDbSnapshotAdapter(),
    new VgInsightsAdapter()
  ];

  const byYear = {};

  years.forEach((year) => {
    const sourceRows = adapters.flatMap((adapter) => adapter.fetchRegionalGenreMetrics(year));
    byYear[year] = crossValidateYear(year, sourceRows);
  });

  return {
    schemaVersion: 'steam-genre-dashboard.v1',
      generatedAt: new Date().toISOString(),
    years,
    sources: adapters.map((adapter) => adapter.name),
    topGames: topGameCatalog,
    marketTopGames: marketTopGameCatalog,
    classification: {
      priority: genrePriority.map((genreId, index) => ({
        rank: index + 1,
        genreId,
        label: getGenreLabel(genreId)
      })),
      examples: hybridClassificationExamples.map((game) => ({
        ...game,
        resolvedGenreId: classifyGameGenre(game).genreId,
        resolvedLabel: getGenreLabel(classifyGameGenre(game).genreId)
      }))
    },
    quality: {
      coverage: 0.93,
      outlierPolicy: 'median_absolute_deviation',
      minimumSourcesPerMetric: 2
    },
    byYear
  };
}

function crossValidateYear(year, sourceRows) {
  return {
    year,
    regions: Object.keys(regionalProfiles).map((regionId) => {
      const rowsForRegion = sourceRows.filter((row) => row.regionId === regionId);
      const genres = baseGenreCatalog.map((genre) => {
        const indieShare = getIndieShare(genre.id, year, regionId);
        const sourceGenreRows = rowsForRegion
          .map((row) => row.genres.find((item) => item.id === genre.id))
          .filter(Boolean);

        const demandScore = validatedAverage(sourceGenreRows, 'demandScore');
        const supplyScore = validatedAverage(sourceGenreRows, 'supplyScore');
        const blendedScore = demandScore * 0.68 + supplyScore * 0.32;

        return {
          ...genre,
          demandScore,
          supplyScore,
          blendedScore,
          market: {
            indieShare,
            aaaShare: 1 - indieShare
          },
          sourceCount: sourceGenreRows.filter((item) => item.demandScore != null).length,
          subgenres: buildSubgenreShares(genre.id, year, regionId)
        };
      });

      return {
        id: regionId,
        label: regionalProfiles[regionId].label,
        genres
      };
    })
  };
}

function getIndieShare(genreId, year, regionId) {
  const baseShare = indieBaseShareByGenre[genreId] ?? 0.5;
  const indieGrowth = Math.min(Math.max((year - 2015) * 0.012, 0), 0.13);
  const regionTilt = stableNoise(`indie-${regionId}`) * 0.08 - 0.04;
  const genreNoise = stableNoise(`indie-${genreId}-${year}-${regionId}`) * 0.08 - 0.04;

  return clamp(baseShare + indieGrowth + regionTilt + genreNoise, 0.08, 0.92);
}

function getMarketAdjustedScore(genre, scoreKey, market) {
  if (market === 'indie') {
    return genre[scoreKey] * (genre.market?.indieShare ?? 0.5);
  }

  if (market === 'aaa') {
    return genre[scoreKey] * (genre.market?.aaaShare ?? 0.5);
  }

  return genre[scoreKey];
}

function getAverageMarketSplit(genres) {
  const indieShare = genres.reduce((sum, genre) => sum + (genre.market?.indieShare ?? 0.5), 0) / genres.length;

  return {
    indieShare,
    aaaShare: 1 - indieShare
  };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getYearView(dataset, year, mode, market = 'all') {
  const yearData = year === 'all' ? getAllYearsView(dataset) : dataset.byYear[year];
  const scoreKey = mode === 'demand' ? 'demandScore' : mode === 'supply' ? 'supplyScore' : 'blendedScore';

  return {
    ...yearData,
    mode,
    market,
    regions: yearData.regions.map((region) => {
      const total = region.genres.reduce((sum, genre) => sum + getMarketAdjustedScore(genre, scoreKey, market), 0);
      const genres = fixRoundingDrift(
        region.genres.map((genre) => {
          const marketScore = getMarketAdjustedScore(genre, scoreKey, market);

          return {
            ...genre,
            marketScore,
            share: total === 0 ? 0 : (marketScore / total) * 100,
            confidence: getConfidence(genre.sourceCount)
          };
        })
      ).sort((a, b) => b.share - a.share);

      const favored = genres.reduce((best, genre) => (genre.share > best.share ? genre : best), genres[0]);

      return {
        ...region,
        genres,
        favoredGenreId: favored.id,
        favoredGenreLabel: favored.label
      };
    })
  };
}

function getAllYearsView(dataset) {
  const years = dataset.years;

  return {
    year: 'all',
    regions: Object.keys(regionalProfiles).map((regionId) => {
      const genres = baseGenreCatalog.map((catalogGenre) => {
        const yearlyGenres = years
          .map((year) => dataset.byYear[year].regions.find((region) => region.id === regionId))
          .map((region) => region.genres.find((genre) => genre.id === catalogGenre.id));

        return {
          ...catalogGenre,
          demandScore: yearlyGenres.reduce((sum, genre) => sum + genre.demandScore, 0),
          supplyScore: yearlyGenres.reduce((sum, genre) => sum + genre.supplyScore, 0),
          blendedScore: yearlyGenres.reduce((sum, genre) => sum + genre.blendedScore, 0),
          market: getAverageMarketSplit(yearlyGenres),
          sourceCount: Math.round(
            yearlyGenres.reduce((sum, genre) => sum + genre.sourceCount, 0) / yearlyGenres.length
          ),
          subgenres: buildAllYearSubgenres(yearlyGenres)
        };
      });

      return {
        id: regionId,
        label: regionalProfiles[regionId].label,
        genres
      };
    })
  };
}

function buildAllYearSubgenres(yearlyGenres) {
  const first = yearlyGenres.find((genre) => genre.subgenres.length > 0);

  if (!first) {
    return [];
  }

  return fixRoundingDrift(
    first.subgenres.map((subgenre) => ({
      ...subgenre,
      shareWithinParent:
        yearlyGenres.reduce((sum, genre) => {
          const match = genre.subgenres.find((item) => item.id === subgenre.id);
          return sum + (match?.shareWithinParent ?? 0);
        }, 0) / yearlyGenres.length
    }))
  );
}

function getVisibleSegments(region, selectedGenreId) {
  if (!selectedGenreId) {
    return region.genres.map((genre) => ({
      id: genre.id,
      genreId: genre.id,
      label: genre.label,
      color: genre.color,
      share: genre.share,
      dimmed: false
    }));
  }

  const segments = region.genres.flatMap((genre) => {
    if (genre.id === selectedGenreId && genre.subgenres.length > 0) {
      return genre.subgenres.map((subgenre) => ({
        id: subgenre.id,
        genreId: genre.id,
        label: subgenre.label,
        color: subgenre.color,
        share: (genre.share * subgenre.shareWithinParent) / 100,
        dimmed: false
      }));
    }

    return {
      id: genre.id,
      genreId: genre.id,
      label: genre.label,
      color: genre.color,
      share: genre.share,
      dimmed: true
    };
  });

  return fixRoundingDrift(segments);
}

function getDrillableGenres(view) {
  const totals = new Map();

  view.regions.forEach((region) => {
    region.genres.forEach((genre) => {
      if (genre.subgenres.length === 0) {
        return;
      }
      totals.set(genre.id, {
        ...genre,
        share: (totals.get(genre.id)?.share ?? 0) + genre.share
      });
    });
  });

  return [...totals.values()]
    .sort((a, b) => b.share - a.share)
    .slice(0, 5);
}

function getHybridTagRankings(view) {
  const totals = new Map();

  view.regions.forEach((region) => {
    region.genres.forEach((genre) => {
      genre.subgenres.forEach((subgenre) => {
        const current = totals.get(subgenre.id) ?? {
          id: subgenre.id,
          label: subgenre.label,
          parentGenreId: genre.id,
          parentLabel: genre.label,
          color: subgenre.color,
          score: 0
        };

        current.score += (genre.share * subgenre.shareWithinParent) / 100;
        totals.set(subgenre.id, current);
      });
    });
  });

  const totalScore = [...totals.values()].reduce((sum, item) => sum + item.score, 0);

  return [...totals.values()]
    .map((item) => ({
      ...item,
      share: totalScore === 0 ? 0 : (item.score / totalScore) * 100
    }))
    .sort((a, b) => b.share - a.share)
    .slice(0, 10);
}

function getTagTrendRankings(dataset, mode, fromYear = 2020, toYear = 2026, market = 'all') {
  const fromView = getYearView(dataset, fromYear, mode, market);
  const toView = getYearView(dataset, toYear, mode, market);
  const fromTags = getHybridTagRankings(fromView);
  const toTags = getHybridTagRankings(toView);
  const fromMap = new Map(fromTags.map((tag) => [tag.id, tag]));
  const toMap = new Map(toTags.map((tag) => [tag.id, tag]));
  const ids = new Set([...fromMap.keys(), ...toMap.keys()]);

  const rows = [...ids].map((id) => {
    const from = fromMap.get(id);
    const to = toMap.get(id);

    return {
      id,
      label: to?.label ?? from?.label ?? id,
      fromShare: from?.share ?? 0,
      toShare: to?.share ?? 0,
      delta: (to?.share ?? 0) - (from?.share ?? 0)
    };
  });

  return {
    rising: [...rows].sort((a, b) => b.delta - a.delta).slice(0, 5),
    falling: [...rows].sort((a, b) => a.delta - b.delta).slice(0, 5)
  };
}

function getConfidence(sourceCount) {
  if (sourceCount >= 4) {
    return { level: 'high', label: '신뢰도 높음' };
  }

  if (sourceCount >= 3) {
    return { level: 'medium', label: '신뢰도 보통' };
  }

  return { level: 'low', label: '신뢰도 낮음' };
}

function buildExportPayload(dataset, year, mode, trendFromYear = dataset.years[0], trendToYear = dataset.years.at(-1), market = 'all') {
  const view = getYearView(dataset, year, mode, market);

  return {
    schemaVersion: dataset.schemaVersion,
    generatedAt: new Date().toISOString(),
    selectedYear: year,
    mode,
    market,
    quality: dataset.quality,
    sources: dataset.sources,
    regions: view.regions,
    hybridTags: getHybridTagRankings(view),
    tagTrend: getTagTrendRankings(dataset, mode, trendFromYear, trendToYear, market)
  };
}

function buildExportRows(dataset, year, mode, market = 'all') {
  const view = getYearView(dataset, year, mode, market);

  return view.regions.flatMap((region) =>
    region.genres.map((genre) => ({
      year,
      mode,
      market,
      region: region.label,
      genre: genre.label,
      share: genre.share,
      confidence: genre.confidence.label,
      sourceCount: genre.sourceCount
    }))
  );
}

function hasSubgenres(view, genreId) {
  return view.regions.some((region) =>
    region.genres.some((genre) => genre.id === genreId && genre.subgenres.length > 0)
  );
}

function findGenreSummary(view, genreId) {
  const regionGenres = view.regions
    .map((region) => region.genres.find((genre) => genre.id === genreId))
    .filter(Boolean);

  if (regionGenres.length === 0) {
    return null;
  }

  const first = regionGenres[0];
  const subgenres = first.subgenres.map((subgenre) => ({
    ...subgenre,
    averageShare:
      regionGenres.reduce((sum, genre) => {
        const match = genre.subgenres.find((item) => item.id === subgenre.id);
        return sum + (match?.shareWithinParent ?? 0);
      }, 0) / regionGenres.length
  }));

  return {
    id: first.id,
    label: first.label,
    reason: '수요 또는 공급 신호가 충분히 높아 2-depth 세부 분석 대상으로 분류된 장르입니다.',
    subgenres
  };
}

function classifyGameGenre(game) {
  const tokens = [...(game.genres ?? []), ...(game.tags ?? [])].map(normalizeGenreToken);

  for (const genreId of genrePriority) {
    const keywords = genreKeywordMap[genreId] ?? [];
    const matchedKeyword = keywords.find((keyword) =>
      tokens.some((token) => token.includes(normalizeGenreToken(keyword)))
    );

    if (matchedKeyword) {
      return {
        genreId,
        label: getGenreLabel(genreId),
        matchedKeyword,
        priorityRank: genrePriority.indexOf(genreId) + 1
      };
    }
  }

  return {
    genreId: 'action',
    label: getGenreLabel('action'),
    matchedKeyword: null,
    priorityRank: genrePriority.indexOf('action') + 1
  };
}

function getTopGames(dataset, genreId, market = 'all') {
  const marketCatalog = dataset.marketTopGames?.[market];

  if (marketCatalog) {
    if (genreId && marketCatalog[genreId]) {
      return marketCatalog[genreId];
    }

    if (marketCatalog.all) {
      return marketCatalog.all;
    }
  }

  if (genreId && dataset.topGames[genreId]) {
    return dataset.topGames[genreId];
  }

  return [
    dataset.topGames.action[0],
    dataset.topGames.rpg[0],
    dataset.topGames.roguelike[0]
  ];
}

function getGenreLabel(genreId) {
  return baseGenreCatalog.find((genre) => genre.id === genreId)?.label ?? genreId;
}

function normalizeGenreToken(value) {
  return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

function validatedAverage(rows, key) {
  const weighted = rows
    .filter((row) => row[key] != null)
    .map((row) => ({
      value: row[key],
      weight: sourceWeights[row.source] ?? 0.1
    }));

  const clean = removeOutliers(weighted);
  const numerator = clean.reduce((sum, item) => sum + item.value * item.weight, 0);
  const denominator = clean.reduce((sum, item) => sum + item.weight, 0);
  return denominator === 0 ? 0 : numerator / denominator;
}

function removeOutliers(weightedValues) {
  if (weightedValues.length < 3) {
    return weightedValues;
  }

  const values = weightedValues.map((item) => item.value);
  const median = getMedian(values);
  const deviations = values.map((value) => Math.abs(value - median));
  const mad = getMedian(deviations);

  if (mad === 0) {
    return weightedValues;
  }

  return weightedValues.filter((item) => Math.abs(item.value - median) / mad <= 3.5);
}

function buildSubgenreShares(genreId, year, regionId) {
  const catalog = subgenreCatalog[genreId] ?? [];

  if (catalog.length === 0) {
    return [];
  }

  const raw = catalog.map(([id, label, base]) => {
    const noise = stableNoise(`${year}-${regionId}-${id}`) - 0.5;
    return {
      id,
      label,
      color: shiftColor(baseGenreCatalog.find((genre) => genre.id === genreId).color, noise),
      shareWithinParent: base * (1 + noise * 0.18)
    };
  });

  return fixRoundingDrift(raw);
}

function fixRoundingDrift(items) {
  const rounded = items.map((item) => ({
    ...item,
    share: item.share == null ? item.share : Math.round(item.share * 10) / 10,
    shareWithinParent:
      item.shareWithinParent == null ? item.shareWithinParent : Math.round(item.shareWithinParent * 10) / 10
  }));

  const key = rounded[0]?.shareWithinParent == null ? 'share' : 'shareWithinParent';
  const total = rounded.reduce((sum, item) => sum + (item[key] ?? 0), 0);
  const drift = Math.round((100 - total) * 10) / 10;
  const largest = rounded.reduce((bestIndex, item, index) => {
    return (item[key] ?? 0) > (rounded[bestIndex]?.[key] ?? 0) ? index : bestIndex;
  }, 0);

  if (rounded[largest] && Math.abs(drift) > 0) {
    rounded[largest] = {
      ...rounded[largest],
      [key]: Math.round((rounded[largest][key] + drift) * 10) / 10
    };
  }

  return rounded;
}

function getMedian(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const midpoint = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[midpoint - 1] + sorted[midpoint]) / 2
    : sorted[midpoint];
}

function metricMultiplier(genreId, metricType, year) {
  const trend = (year - 2020) * 0.025;
  const genreBoost = stableNoise(`${metricType}-${genreId}`) * 0.18;
  return 0.9 + trend + genreBoost;
}

function stableNoise(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967295;
}

function shiftColor(hex, amount) {
  const channel = (start) => parseInt(hex.slice(start, start + 2), 16);
  const mix = amount >= 0 ? 255 : 0;
  const ratio = Math.min(Math.abs(amount) * 0.55, 0.4);
  const next = [channel(1), channel(3), channel(5)].map((value) =>
    Math.round(value * (1 - ratio) + mix * ratio)
      .toString(16)
      .padStart(2, '0')
  );
  return `#${next.join('')}`;
}

window.steamGenrePipeline = {
  buildDashboardDataset,
  findGenreSummary,
  getDrillableGenres,
  getVisibleSegments,
  getYearView,
  getHybridTagRankings,
  getTagTrendRankings,
  buildExportPayload,
  buildExportRows,
  getTopGames,
  hasSubgenres,
  classifyGameGenre,
  sourceWeights,
  demandMetricWeights
};
