import { useEffect } from 'react'
import { PenLine, Clock, CalendarDays, ArrowUpRight, Rss } from 'lucide-react'
import { posts } from '../data/posts.js'
import { profile, ui } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import { useLang, useT } from '../i18n/LanguageContext.jsx'

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

export default function Blog() {
  const t = useT()
  const { lang } = useLang()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fmt = (iso) => {
    try {
      return new Date(iso).toLocaleDateString(lang === 'es' ? 'es-PE' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    } catch {
      return iso
    }
  }

  return (
    <div className="page">
      <header className="page-head">
        <p className="hero-eyebrow reveal-hero" style={{ '--i': 0 }}>
          <PenLine size={15} /> {t(ui.labels.techNotes)}
        </p>
        <h1 className="page-title reveal-hero" style={{ '--i': 1 }}>
          {t(ui.nav.blog)}
        </h1>
        <p className="page-lead reveal-hero" style={{ '--i': 2 }}>
          {t(ui.labels.blogLead)}
        </p>
      </header>

      <section className="page-block">
        {posts.length === 0 ? (
          <Reveal className="blog-empty">
            <div className="blog-empty-icon">
              <PenLine size={26} strokeWidth={1.5} />
            </div>
            <h2>{t(ui.labels.comingSoon)}</h2>
            <p>{t(ui.labels.blogEmpty)}</p>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="cta-button">
              <Rss size={16} /> {t(ui.labels.followLinkedin)}
            </a>
          </Reveal>
        ) : (
          <ul className="post-list">
            {posts.map((post, i) => {
              const Card = post.url ? 'a' : 'article'
              const linkProps = post.url
                ? { href: post.url, target: '_blank', rel: 'noreferrer' }
                : {}
              return (
                <Reveal as={Card} key={post.slug} className="post-card" delay={i * 70} {...linkProps}>
                  <div className="post-meta">
                    <span>
                      <CalendarDays size={13} /> {fmt(post.date)}
                    </span>
                    {post.readingMinutes && (
                      <span>
                        <Clock size={13} /> {post.readingMinutes} min
                      </span>
                    )}
                  </div>
                  <h2 className="post-title">
                    {t(post.title)}
                    {post.url && <ArrowUpRight size={17} className="post-ext" />}
                  </h2>
                  <p className="post-excerpt">{t(post.excerpt)}</p>
                  {post.tags?.length > 0 && (
                    <ul className="chips">
                      {post.tags.map((tag) => (
                        <li key={tag} className="chip chip-quiet">
                          {tag}
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
