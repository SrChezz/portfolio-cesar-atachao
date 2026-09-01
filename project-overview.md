# Project Overview — Cesar Atachao Portfolio

A personal portfolio monorepo: a bilingual (ES/EN) React website plus AWS CDK
infrastructure. The site is currently deployed on **Vercel**; the CDK stack
(`infra/`) is the alternate AWS hosting path (S3 + CloudFront), kept for future use.

- **Live site:** https://portfolio-cesar-atachao.vercel.app
- **Repository:** https://github.com/SrChezz/portfolio-cesar-atachao
- **Owner:** Cesar Atachao — Data Engineer (AWS)

---

## Repository layout

```
.
├── web/                      # React portfolio website (Vite + React, pnpm)
│   ├── src/
│   │   ├── main.jsx          # Entry; wraps app in LanguageProvider
│   │   ├── App.jsx           # Router shell, background, nav, footer
│   │   ├── styles.css        # All styles (design tokens + components)
│   │   ├── components/
│   │   │   ├── Background.jsx # Ambient animated background (aurora + grid)
│   │   │   └── Nav.jsx        # Sticky top nav + language toggle
│   │   ├── pages/
│   │   │   ├── Home.jsx       # Hero + all sections
│   │   │   ├── Projects.jsx   # /proyectos — case studies + live GitHub repos
│   │   │   ├── ProjectPage.jsx# /proyectos/:slug — project deep-dive
│   │   │   └── Blog.jsx       # /blog — posts list + empty state
│   │   ├── hooks/
│   │   │   └── useReveal.js   # Scroll-reveal + scroll-progress hooks
│   │   ├── i18n/
│   │   │   └── LanguageContext.jsx # ES/EN context (browser-detect + storage)
│   │   └── data/
│   │       ├── content.js     # Bilingual source of truth (all copy)
│   │       ├── posts.js       # Blog posts data
│   │       └── generated.json # Build-time GitHub repos + Credly badges
│   ├── scripts/
│   │   └── fetch-data.mjs     # Prebuild: fetch GitHub + Credly -> generated.json
│   ├── public/               # favicon.svg, apple-touch-icon.png, profile.jpg, projects/
│   ├── vercel.json           # Vercel build config + SPA rewrite
│   └── package.json          # pnpm-managed (packageManager pinned)
│
├── infra/                    # AWS CDK (Python) — alternate hosting
│   ├── app.py                # CDK app entry (us-east-1)
│   ├── stacks/site_stack.py  # Private S3 + CloudFront (OAC) + BucketDeployment
│   ├── tests/test_site_stack.py # Assertion tests
│   ├── cdk.json / requirements*.txt
│   └── README.md
│
├── .kiro/skills/             # Workspace skills (aws-cdk, frontend-design)
├── README.md                 # Quick-start
└── project-overview.md       # This document
```

---

## Web application

### Stack
- **Framework:** React 18 + Vite 5
- **Routing:** react-router-dom (client-side, SPA)
- **Icons:** lucide-react
- **Package manager:** pnpm (pinned via `packageManager`; `allowBuilds: esbuild`
  in `pnpm-workspace.yaml` because pnpm blocks build scripts by default)
- **Styling:** hand-written CSS with design tokens (no framework)

### Design
- **Aesthetic:** midnight "cloud console" — deep navy canvas, Andean amber
  (`#eba552`) primary accent, cyan (`#5fd0c8`) data-signal secondary.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/data).
- **Signature:** a "data pipeline" motif — a scroll-progress rail and a
  connected data-flow diagram on the project page (echoing ETL work).
- **Motion:** hero entrance, scroll reveals (IntersectionObserver), ambient
  animated background, hover micro-interactions. All gated by
  `prefers-reduced-motion`.
- **Brand mark:** `favicon.svg` — a "CA" monogram with a cyan data-node; reused
  as the nav logo and the browser/app icon.

### Internationalization (ES/EN)
- `LanguageContext.jsx` provides `useLang()` and `useT()`.
- Initial language: user's saved choice (localStorage `portfolio-lang`) →
  else browser language → else Spanish.
- All display copy lives in `content.js` as `{ es, en }` objects; `useT()`
  resolves the active language. A toggle in the nav switches and persists.

### Content model (`src/data/content.js`)
Single source of truth for: `profile`, `experience`, `skills`, `projects`,
`education`, `extracurricular`, `certifications` (static fallback), `ui` (labels),
and `projectDetails` (per-project deep-dive). Editing copy = editing this file.

### Build-time data integration (`scripts/fetch-data.mjs`)
Runs automatically as the `prebuild` step (locally and on Vercel):
- **GitHub:** public repos for `srchezz` + `catachao` (excludes forks/archived
  and a denylist), most-recent first.
- **Credly:** all badges (image, issuer, verification URL) for `cesaratachao`.
- Writes `src/data/generated.json`. Network-failure-safe: keeps cached data so
  the build never breaks. Rationale: Credly has no browser CORS and GitHub
  rate-limits per IP, so fetching at build time keeps the runtime static/fast.

### Routes
| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Hero, experience, skills, projects, live Credly certs, education, community |
| `/proyectos` | Projects | Case studies + live GitHub repo grid |
| `/proyectos/:slug` | ProjectPage | Deep-dive (data flow, orchestration, diagrams, repo structure) |
| `/blog` | Blog | Posts list; elegant "coming soon" empty state |

### Local development
```bash
cd web
pnpm install
pnpm dev        # dev server
pnpm build      # runs prebuild fetch, then vite build -> dist/
pnpm preview    # serve the production build
pnpm fetch-data # manually refresh generated.json
```

---

## Infrastructure (`infra/`) — alternate AWS hosting

AWS CDK (Python) defining `PortfolioSiteStack` in **us-east-1**:
- Private S3 bucket (`BLOCK_ALL`, S3-managed encryption, SSL enforced).
- CloudFront with Origin Access Control (OAC) — only CloudFront reads the bucket.
- `BucketDeployment` uploads `web/dist` and invalidates the CDN cache.
- SPA-friendly 403/404 → `index.html`.
- Assertion tests in `tests/` (public-access block, HTTPS redirect, OAC present).

```bash
cd infra
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt -r requirements-dev.txt
cdk synth && pytest
cdk bootstrap aws://<ACCOUNT_ID>/us-east-1   # first time
cdk deploy
```

> Note: production hosting is currently **Vercel**. The CDK stack is a
> ready-to-use alternative (or for adding AWS-native features later).

---

## Deployment (Vercel)

- **Project:** `portfolio-cesar-atachao` (scope `srchezzs-projects`).
- **Config:** `web/vercel.json` — framework `vite`, `pnpm install` / `pnpm run build`,
  output `dist`, SPA rewrite (`/(.*)` → `/index.html`).
- **Root directory:** `web` (the app is in the `web/` subfolder of the monorepo).
- **Manual deploy:** `cd web && vercel --prod`.
- **Git-connected deploy:** when the GitHub repo is connected to the Vercel
  project, every push to `main` auto-deploys.

### Deployment history note
The project was first deployed under a generic Vercel project name (`web`),
which collided with another project. It was moved to the uniquely-named
`portfolio-cesar-atachao` project to prevent alias clashes. Always keep the
Vercel project name unique.

---

## Conventions & guardrails

- **Editing copy:** change `src/data/content.js` (bilingual), not the components.
- **Adding a project case study:** add an entry to `projects` and
  `projectDetails` in `content.js`; drop assets in `public/projects/`.
- **Adding a blog post:** add an entry to `src/data/posts.js`.
- **Refreshing certs/repos:** happens automatically on build; or `pnpm fetch-data`.
- **Package manager:** pnpm only (do not reintroduce `package-lock.json`).
- **Skills:** workspace skills live in `.kiro/skills/` (not `.agents/skills/`).
```
