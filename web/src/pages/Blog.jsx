import { useEffect } from 'react'
import { PenLine, Clock, CalendarDays, ArrowUpRight, Rss } from 'lucide-react'
import { posts } from '../data/posts.js'
import { profile } from '../data/profile.js'
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

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('es-PE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return iso
  }
}

function EmptyState() {
  return (
    <Reveal className="blog-empty">
      <div className="blog-empty-icon">
        <PenLine size={26} strokeWidth={1.5} />
      </div>
      <h2>Próximamente</h2>
      <p>
        Estoy preparando artículos técnicos sobre ingeniería de datos, arquitectura
        en AWS y lo que voy aprendiendo en el camino. Vuelve pronto.
      </p>
      <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="cta-button">
        <Rss size={16} /> Sígueme en LinkedIn
      </a>
    </Reveal>
  )
}

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page">
      <header className="page-head">
        <p className="hero-eyebrow reveal-hero" style={{ '--i': 0 }}>
          <PenLine size={15} /> Notas técnicas
        </p>
        <h1 className="page-title reveal-hero" style={{ '--i': 1 }}>
          Blog
        </h1>
        <p className="page-lead reveal-hero" style={{ '--i': 2 }}>
          Escritos sobre ingeniería de datos, nube y aprendizaje continuo.
        </p>
      </header>

      <section className="page-block">
        {posts.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="post-list">
            {posts.map((post, i) => {
              const Card = post.url ? 'a' : 'article'
              const linkProps = post.url
                ? { href: post.url, target: '_blank', rel: 'noreferrer' }
                : {}
              return (
                <Reveal
                  as={Card}
                  key={post.slug}
                  className="post-card"
                  delay={i * 70}
                  {...linkProps}
                >
                  <div className="post-meta">
                    <span>
                      <CalendarDays size={13} /> {formatDate(post.date)}
                    </span>
                    {post.readingMinutes && (
                      <span>
                        <Clock size={13} /> {post.readingMinutes} min
                      </span>
                    )}
                  </div>
                  <h2 className="post-title">
                    {post.title}
                    {post.url && <ArrowUpRight size={17} className="post-ext" />}
                  </h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  {post.tags?.length > 0 && (
                    <ul className="chips">
                      {post.tags.map((t) => (
                        <li key={t} className="chip chip-quiet">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}
