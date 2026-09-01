# Project Steering — Cesar Atachao Portfolio

High-level context for anyone (human or agent) working in this repository.
See `project-overview.md` at the repo root for the full technical breakdown.

## What this is
A personal portfolio monorepo for **Cesar Atachao**, Data Engineer (AWS).
- `web/` — bilingual (ES/EN) React + Vite portfolio site. **This is what's deployed.**
- `infra/` — AWS CDK (Python) S3 + CloudFront stack. Alternate hosting, not the
  current production path.

- Live: https://portfolio-cesar-atachao.vercel.app
- Repo: https://github.com/SrChezz/portfolio-cesar-atachao
- Hosting: Vercel project `portfolio-cesar-atachao` (scope `srchezzs-projects`)

## Tech at a glance
- React 18, Vite 5, react-router-dom, lucide-react.
- **pnpm only** (pinned via `packageManager`). Do NOT reintroduce npm/package-lock.json.
  Build scripts are blocked by default; `esbuild` is allow-listed in
  `web/pnpm-workspace.yaml` via `allowBuilds`.
- Styling: hand-written CSS with design tokens in `web/src/styles.css`.
- i18n: `web/src/i18n/LanguageContext.jsx` (`useT`, `useLang`); browser-detect
  + localStorage; default Spanish.

## Where things live (edit these, not the components)
- **All display copy (ES/EN):** `web/src/data/content.js` — the single source of truth.
- **Blog posts:** `web/src/data/posts.js`.
- **Auto-generated data (do not hand-edit):** `web/src/data/generated.json` —
  produced at build time by `web/scripts/fetch-data.mjs` (GitHub repos for
  `srchezz`+`catachao`, Credly badges for `cesaratachao`).

## Design language
Midnight "cloud console": deep navy background, Andean amber (`#eba552`) primary
accent, cyan (`#5fd0c8`) secondary. Fonts: Space Grotesk / Inter / JetBrains Mono.
Signature = "data pipeline" motif. Motion respects `prefers-reduced-motion`.
Brand mark = `web/public/favicon.svg` (CA monogram), reused as the nav logo.

## How to work here
- **Change wording** → edit `content.js` (keep both `es` and `en`).
- **Add a project case study** → add to `projects` + `projectDetails` in
  `content.js`; put images in `web/public/projects/`.
- **Certs/repos refresh** automatically on build; or run `pnpm fetch-data`.
- **Build/deploy:** `cd web && pnpm build` (runs the prebuild fetch), then
  `vercel --prod`. Vercel root directory is `web`.
- **Verify before deploy:** `pnpm build` must succeed; for infra, `cdk synth` + `pytest`.

## Guardrails / gotchas
- Keep the Vercel project name unique (`portfolio-cesar-atachao`). A prior
  generic `web` project caused an alias collision with another project.
- Workspace skills live in `.kiro/skills/` (Kiro), NOT `.agents/skills/` (Codex).
- Profile facts are grounded in the CV/LinkedIn/Credly — do not invent metrics.
- Production hosting is Vercel; `infra/` is the AWS alternative, not live.

## Profile facts (source of truth: content.js)
- Current role: Data Engineer @ Morris & Opazo (AWS Partner), remote, Nov 2025–present.
- Led teams across 25+ projects; financial-sector pipelines; created architectures.
- 23 verified certifications (6 AWS incl. Data Engineer Associate; GCP ACE; etc.).
- Based in Huancayo, Peru. Works in Spanish & English.
