# AGENTS.md

## Cursor Cloud specific instructions

This is a **pure frontend SPA** (React + Vite + TypeScript + Tailwind CSS) — a marketing website for MDS Cloud. There is no backend, no database, no API, and no environment variables needed.

### Quick reference

- **Install deps:** `npm install`
- **Dev server:** `npm run dev` (runs on port 8080)
- **Lint:** `npm run lint` (pre-existing lint errors exist in `src/components/old/` and some `ui/` components — these are not regressions)
- **Build:** `npm run build`
- See `package.json` `scripts` section and `README.md` for full command list.

### Non-obvious notes

- The Vite dev server binds to `::` (all interfaces) on **port 8080**, configured in `vite.config.ts`.
- Both `package-lock.json` and `bun.lockb` exist; use **npm** (matches the lockfile and README instructions).
- No test framework is configured — there are no automated tests in this project.
- The `lovable-tagger` dev dependency injects a component tagger in development mode only; it does not affect production builds.
- Path alias `@/` maps to `./src/` (configured in both `tsconfig.json` and `vite.config.ts`).
