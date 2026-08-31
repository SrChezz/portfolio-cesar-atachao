/**
 * Build-time data fetch.
 * Pulls public GitHub repos (srchezz + catachao) and Credly badges, then writes
 * them to src/data/generated.json. Run automatically via the `prebuild` script.
 *
 * Rationale: Credly has no browser CORS support and GitHub has per-IP rate
 * limits, so fetching at build time (not runtime) keeps the static site fast
 * and avoids CORS/rate-limit issues. The data refreshes on every deploy.
 *
 * Network failures are non-fatal: if a source is unreachable, the existing
 * generated.json is kept so the build still succeeds.
 */
import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'src', 'data', 'generated.json')

const GITHUB_USERS = ['srchezz', 'catachao']
const CREDLY_USER = 'cesaratachao'
const UA = { 'User-Agent': 'portfolio-build-script' }

// Repos to exclude from the "featured" GitHub list (throwaway/demo projects).
const REPO_DENYLIST = new Set(['portfolio-cesar-atachao'])

async function fetchGitHubRepos() {
  const all = []
  for (const user of GITHUB_USERS) {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&sort=updated`,
      { headers: UA }
    )
    if (!res.ok) throw new Error(`GitHub ${user}: HTTP ${res.status}`)
    const repos = await res.json()
    for (const r of repos) {
      if (r.fork || r.archived || REPO_DENYLIST.has(r.name)) continue
      all.push({
        name: r.name,
        owner: user,
        description: r.description,
        url: r.html_url,
        language: r.language,
        stars: r.stargazers_count,
        topics: r.topics || [],
        updatedAt: r.updated_at,
      })
    }
  }
  // Most recently updated first, cap to a reasonable number.
  all.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
  return all.slice(0, 12)
}

async function fetchCredlyBadges() {
  const res = await fetch(
    `https://www.credly.com/users/${CREDLY_USER}/badges.json`,
    { headers: { ...UA, Accept: 'application/json' } }
  )
  if (!res.ok) throw new Error(`Credly: HTTP ${res.status}`)
  const { data = [] } = await res.json()
  return data
    .filter((b) => b.public !== false)
    .map((b) => {
      const tpl = b.badge_template || {}
      const issuer =
        b.issuer?.entities?.[0]?.entity?.name || tpl.issuer?.name || ''
      return {
        id: b.id,
        name: tpl.name,
        issuer,
        image: b.image_url || tpl.image_url,
        verifyUrl: `https://www.credly.com/badges/${b.id}`,
        issuedAt: b.issued_at_date,
      }
    })
    .sort((a, b) => new Date(b.issuedAt) - new Date(a.issuedAt))
}

async function main() {
  const previous = existsSync(OUT)
    ? JSON.parse(readFileSync(OUT, 'utf8'))
    : { repos: [], badges: [] }

  const out = { ...previous, generatedAt: new Date().toISOString() }

  try {
    out.repos = await fetchGitHubRepos()
    console.log(`✓ GitHub: ${out.repos.length} repos`)
  } catch (err) {
    console.warn(`! GitHub fetch failed, keeping cached repos: ${err.message}`)
  }

  try {
    out.badges = await fetchCredlyBadges()
    console.log(`✓ Credly: ${out.badges.length} badges`)
  } catch (err) {
    console.warn(`! Credly fetch failed, keeping cached badges: ${err.message}`)
  }

  writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n')
  console.log(`✓ Wrote ${OUT}`)
}

main().catch((err) => {
  console.error('fetch-data failed:', err)
  // Do not fail the build on unexpected errors — write an empty shell if needed.
  if (!existsSync(OUT)) {
    writeFileSync(OUT, JSON.stringify({ repos: [], badges: [], generatedAt: null }, null, 2))
  }
  process.exit(0)
})
