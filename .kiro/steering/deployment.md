# Deployment — Steering

## TL;DR: pushing to GitHub is the deploy

**To deploy the site, push to `main`. That's it.**

```bash
git add -A
git commit -m "..."
git push origin main
```

Vercel is connected to the GitHub repo and automatically builds and deploys
every push to `main` to production. **No manual `vercel` command is required.**

## How it works

- **Repo:** https://github.com/SrChezz/portfolio-cesar-atachao (branch `main`)
- **Host:** Vercel project `portfolio-cesar-atachao` (scope `srchezzs-projects`),
  connected to the GitHub repo (Git integration).
- **Live URL:** https://portfolio-cesar-atachao.vercel.app
- **Trigger:** a push to `main` → Vercel starts a Production deployment
  automatically → on success, the live alias updates.
- **Root directory:** the Vercel project's Root Directory is `web` (the app
  lives in the `web/` subfolder of this monorepo). Build settings come from
  `web/vercel.json`: framework Vite, `pnpm install`, `pnpm run build`, output `dist`.
- **Build-time data:** the `prebuild` step runs `web/scripts/fetch-data.mjs`,
  refreshing GitHub repos + Credly badges on Vercel's servers during each build.

## Branch / preview behavior

- Push to **`main`** → **Production** deploy (updates the live URL).
- Push any **other branch** or open a PR → Vercel creates a **Preview** deploy
  with its own URL (does not affect production). Merge to `main` to promote.

## Before you push (recommended checks)

```bash
cd web
pnpm build     # must succeed; runs the prebuild data fetch + vite build
```

For infrastructure changes (`infra/`, not the live host): `cdk synth` + `pytest`.

## Manual deploy (fallback only)

Normally unnecessary. If the Git integration is ever unavailable:

```bash
cd web
vercel --prod --scope srchezzs-projects
```

## Guardrails

- Keep the Vercel project name unique (`portfolio-cesar-atachao`). A prior
  generic `web` project caused an alias collision with another project.
- Do not change the Vercel Root Directory away from `web`, or Git builds will
  fail (no `package.json` at repo root).
- Production hosting is Vercel. `infra/` (AWS CDK S3 + CloudFront) is an
  alternative hosting path and is NOT the live deploy.
