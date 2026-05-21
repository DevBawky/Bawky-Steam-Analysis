# BAWKY INDIEGAME ANALYSIS

Electron desktop app starter.

## Run

```powershell
npm.cmd run start
```

PowerShell에서 `npm` 실행 정책 오류가 나면 `npm.cmd`를 사용하세요.

## Validate

```powershell
npm.cmd run build
```

## Structure

- `src/main.js`: Electron main process and window setup
- `src/preload.js`: Safe bridge between Electron and the renderer
- `src/renderer/data-pipeline.js`: Local multi-source adapter model, outlier filtering, weighted averaging, and 2-depth dataset shaping
- `src/renderer/renderer.js`: 100% stacked horizontal chart rendering and drill-down interactions
- `src/renderer/`: HTML, CSS, and browser-side JavaScript
