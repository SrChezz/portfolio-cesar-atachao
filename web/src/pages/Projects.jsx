import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Star, GitFork, FolderGit2, Code2 } from 'lucide-react'
import { projects } from '../data/profile.js'
import generated from '../data/generated.json'
import { useReveal } from '../hooks/useReveal.js'

function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Language → accent dot color (a small, recognizable set).
const LANG_COLOR = {
  Python: '#4b8bbe',
  JavaScript: '#e8a44c',
  TypeScript: '#5fd0c8',
  Java: '#d97b53',
  Astro: '#b980f0',
  HTML: '#e34c26',
  CSS: '#5fd0c8',
}

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const repos = generated.repos || []

  return (
    <div className="page">
      <header className="page-head">
        <p className="hero-eyebrow reveal-hero" style={{ '--i': 0 }}>
          <FolderGit2 size={15} /> Portafolio de trabajo
        </p>
        <h1 className="page-title reveal-hero" style={{ '--i': 1 }}>
          Proyectos
        </h1>
        <p className="page-lead reveal-hero" style={{ '--i': 2 }}>
          Casos de estudio detallados y repositorios públicos en constante evolución.
        </p>
      </header>

      {/* Detailed case studies */}
      <section className="page-block">
        <h2 className="block-title">Casos de estudio</h2>
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.slug} className="project-card" delay={i * 80}>
              <h3>{p.name}</h3>
              {p.tagline && <p className="project-tagline">{p.tagline}</p>}
              <p>{p.description}</p>
              <ul className="chips">
                {p.stack.map((s) => (
                  <li key={s} className="chip chip-quiet">
                    {s}
                  </li>
                ))}
              </ul>
              <Link to={`/proyectos/${p.slug}`} className="project-link">
                Ver caso de estudio <ArrowUpRight size={16} className="arrow" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Live GitHub repos */}
      <section className="page-block">
        <h2 className="block-title">
          <Code2 size={20} strokeWidth={1.75} /> En GitHub
        </h2>
        <p className="section-note" style={{ marginTop: 0, marginBottom: 24 }}>
          Repositorios públicos, sincronizados automáticamente en cada despliegue.
        </p>
        <div className="repo-grid">
          {repos.map((r, i) => (
            <Reveal
              as="a"
              key={`${r.owner}/${r.name}`}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="repo-card"
              delay={(i % 6) * 50}
            >
              <div className="repo-top">
                <FolderGit2 size={16} className="repo-icon" />
                <span className="repo-name">{r.name}</span>
                <ArrowUpRight size={15} className="repo-ext" />
              </div>
              <p className="repo-desc">{r.description || 'Sin descripción.'}</p>
              <div className="repo-meta">
                {r.language && (
                  <span className="repo-lang">
                    <span
                      className="lang-dot"
                      style={{ background: LANG_COLOR[r.language] || '#8aa' }}
                    />
                    {r.language}
                  </span>
                )}
                {r.stars > 0 && (
                  <span>
                    <Star size={13} /> {r.stars}
                  </span>
                )}
                <span className="repo-owner">@{r.owner}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
