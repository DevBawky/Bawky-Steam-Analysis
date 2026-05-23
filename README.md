<p align="center">
  <img width="200" height="200" alt="BAWKY STEAM ANALYSIS AppIcon" src="https://github.com/DevBawky/Bawky-Steam-Analysis/blob/main/assets/app-icon%20(2).png" />
</p>

<h1 align="center">BAWKY STEAM ANALYSIS</h1>

<p align="center">
  <b>Steam 장르 및 인디게임 시장 흐름을 분석하는 데스크톱 대시보드</b><br>
  <b>A desktop dashboard for exploring Steam genre and indie game market trends</b>
</p>

<p align="center">
  <b>프로그램이 유용하다면 Star⭐ 부탁드리겠습니다!</b><br>
  <b>If you find this program useful, please consider giving it a star!⭐</b>
</p>

---

## Download (v1.0.0)

| Platform | Download Link | File Type |
| :--- | :--- | :--- |
| **Windows** | <a href="https://github.com/DevBawky/Bawky-Steam-Analysis/releases/download/1.0.0/BAWKY.INDIEGAME.ANALYSIS.Setup.1.0.0.exe"><img src="https://img.shields.io/badge/DOWNLOAD-.exe-0078D4?style=for-the-badge&logo=windows&logoColor=white" height="28"></a> | Installer |
| **Linux** | <a href="https://github.com/DevBawky/Bawky-Steam-Analysis/releases/download/1.0.0/indiegame-analysis-1.0.0.tar.gz"><img src="https://img.shields.io/badge/DOWNLOAD-.tar.gz-C0392B?style=for-the-badge&logo=linux&logoColor=white" height="28"></a> | Archive |

## Important Notice
> 현재 버전은 실제 Steam 전체 데이터를 실시간으로 수집하는 프로그램이 아닙니다.
로컬 목업 데이터를 기반으로 분석 대시보드 UI, 장르 분류 구조, 이상치 제거, 가중 평균, 트렌드 비교 및 데이터 내보내기 기능을 시연합니다.

## Project Information

> **Steam 게임 장르의 지역별 점유율, 연도별 변화, 인디/AAA 시장 차이와 하이브리드 태그 흐름을 확인할 수 있는 분석 프로그램입니다.**  
> **Analyze regional genre shares, yearly trends, Indie/AAA market differences, and hybrid tag movements across Steam games.**

<p align="left">
  <a href="https://github.com/DevBawky/Bawky-Steam-Analysis">
    <img src="https://img.shields.io/badge/상세_정보_확인_(VIEW_DETAILS)-E85D4F?style=for-the-badge&logo=github&logoColor=white" alt="View Details" height="45">
  </a>
</p>

---

## Main Features

| Feature | Description |
| :--- | :--- |
| **Regional Genre Share** | 아시아, 북미, 유럽, 남미, 오세아니아의 장르 점유율을 100% 누적 막대 그래프로 비교합니다. |
| **Yearly Analysis** | 2015년부터 2026년까지 연도별 장르 흐름을 확인할 수 있습니다. |
| **Demand / Supply / Blended** | 수요, 공급, 종합 분석 모드를 전환하여 시장 흐름을 비교합니다. |
| **Indie / AAA Filter** | 전체 시장, 인디 시장, AAA 시장을 구분하여 분석합니다. |
| **Genre Drill-down** | 주요 장르를 선택하여 세부 하위 장르 및 태그 비중을 확인합니다. |
| **Hybrid Tag Top 10** | 복합 장르 태그의 상위 순위와 점유율을 보여줍니다. |
| **Rising / Falling Tags** | 선택한 기간 동안 상승하거나 하락한 태그를 비교합니다. |
| **Representative Games** | 선택한 장르 또는 시장에서 대표 게임 Top 3를 표시합니다. |
| **Data Export** | 현재 분석 결과를 JSON 또는 CSV 파일로 내보낼 수 있습니다. |
| **Korean / English UI** | 한국어와 영어 인터페이스 전환을 지원합니다. |

---

## Analysis Dashboard

### Regional Genre Share
지역별로 어떤 장르가 상대적으로 강한지 한눈에 비교할 수 있습니다.

- Asia
- North America
- Europe
- South America
- Oceania

### Analysis Modes
분석 목적에 따라 다음 세 가지 모드를 선택할 수 있습니다.

| Mode | Description |
| :--- | :--- |
| **Blended** | 수요와 공급 신호를 종합한 전체 분석 |
| **Demand** | 관심도, 플레이어 반응, 판매 및 리뷰 신호 중심 분석 |
| **Supply** | 장르별 공급 및 시장 형성 신호 중심 분석 |

### Market Filters
시장 구분에 따라 장르 흐름을 별도로 확인할 수 있습니다.

- **All**: 전체 시장
- **Indie**: 인디게임 중심 시장
- **AAA**: 대형 제작 게임 중심 시장

---

## Genre Drill-down

선택 가능한 주요 장르 중 일부는 세부 하위 장르로 분해하여 분석할 수 있습니다.

| Main Genre | Detailed Genres |
| :--- | :--- |
| **Action** | Survival Action, Shooter, Hack and Slash, Other Action |
| **Roguelike** | Action Roguelike, Deckbuilding Roguelike, Survivor-like, Traditional Roguelike |
| **Shooter** | FPS, Third-Person Shooter, Extraction Shooter, Other Shooter |
| **RPG** | JRPG, Action RPG, Open World RPG, Other RPG |
| **Strategy** | Grand Strategy, Deckbuilding, Tactics, Other Strategy |
| **Simulation** | Life Simulation, Management, Automation, Other Simulation |
| **Adventure** | Narrative, Metroidvania, Exploration, Other Adventure |

---

## Data Sources

프로그램은 다음 데이터 소스를 기반으로 하는 분석 파이프라인 구조를 제공합니다.

| Source | Purpose |
| :--- | :--- |
| **Steam Web API / Store API** | 게임 기본 정보, 장르, 출시 정보 |
| **SteamSpy** | 태그, 리뷰, 보유자 추정 정보 |
| **SteamDB Snapshot** | 동시 접속자 및 추세 기반 데이터 |
| **VG Insights** | 판매량, 리뷰 및 시장 성과 추정 신호 |

### Data Processing Pipeline

1. 여러 데이터 소스에서 게임 및 장르 관련 신호를 수집합니다.
2. 동일한 게임 데이터를 `appId` 및 제목 기준으로 연결합니다.
3. 결측치와 이상치를 제거합니다.
4. 데이터 소스별 신뢰도 가중치를 적용합니다.
5. 수요, 공급, 종합 점수를 계산합니다.
6. 지역별 장르 점유율과 태그 트렌드로 시각화합니다.

---

## Current Data Notice

> **현재 버전은 실제 Steam 전체 데이터를 실시간으로 수집하는 버전이 아니라, 로컬 목업 데이터를 기반으로 분석 UI와 데이터 파이프라인 구조를 시연하는 버전입니다.**  
> **The current version uses local mock data to demonstrate the analysis dashboard and pipeline structure. It does not perform a live collection of the entire Steam catalog.**

---

## Installation

### Windows
1. 다운로드한 `.exe` 설치 파일을 실행합니다.
2. 설치 경로를 선택합니다.
3. 설치 완료 후 프로그램을 실행합니다.

### Linux
1. `.tar.gz` 파일을 다운로드합니다.
2. 원하는 위치에 압축을 해제합니다.
3. 실행 파일을 실행합니다.

### Windows Security Guide

**Windows에서 Microsoft Defender SmartScreen 경고가 표시될 경우:**

1. 경고 창에서 **추가 정보**를 클릭합니다.
2. 표시되는 **실행** 버튼을 클릭합니다.
3. 프로그램 설치 또는 실행을 계속 진행합니다.

> 프로그램은 공식 GitHub Releases 페이지에서 다운로드한 파일만 사용하는 것을 권장합니다.

---

## Development

### Requirements

- Node.js
- npm
- Electron

### Run Locally

```powershell
npm.cmd install
npm.cmd run start
```

## Validate Source Files
`npm.cmd run build`
## Build Distribution Files
### Windows
`npm.cmd run dist:win`
### Linux
`npm.cmd run dist:linux`

## Tech Stack

| Technology | Purpose |
| ---- | ---- |
| Electron | 데스크톱 애플리케이션 프레임워크| 
| HTML / CSS / JavaScript | 대시보드 UI 및 사용자 상호작용| 
Electron Builder | 운영체제별 배포 파일 생성| 
| Local Data Pipeline | 장르 점수 계산, 트렌드 비교 및 내보내기 데이터 생성| 
