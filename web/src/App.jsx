import {
  profile,
  experience,
  skills,
  projects,
  education,
  certifications,
  extracurricular,
} from './data/profile.js'
import { useReveal, useScrollProgress } from './hooks/useReveal.js'

/* Wraps children in a scroll-reveal container. */
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

function Section({ id, index, title, note, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-h`}>
      <Reveal as="header" className="section-head">
        <h2 className="section-heading" id={`${id}-h`}>
          <span className="section-index">{index}</span>
          {title}
        </h2>
        {note && <p className="section-note">{note}</p>}
      </Reveal>
      {children}
    </section>
  )
}

/* Left rail that fills as the page scrolls — the "data pipeline" signature. */
function PipelineRail() {
  const progress = useScrollProgress()
  return (
    <div className="pipeline-rail" aria-hidden="true">
      <div className="pipeline-track">
        <div
          className="pipeline-fill"
          style={{ transform: `scaleY(${progress})` }}
        />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-eyebrow reveal-hero" style={{ '--i': 0 }}>
          <span className="blink">▹</span> {profile.location}
        </p>
        <h1 className="hero-name reveal-hero" style={{ '--i': 1 }}>
          {profile.name}
        </h1>
        <p className="hero-headline reveal-hero" style={{ '--i': 2 }}>
          {profile.headline}
        </p>
        <p className="hero-summary reveal-hero" style={{ '--i': 3 }}>
          {profile.summary}
        </p>
        <nav
          className="hero-links reveal-hero"
          style={{ '--i': 4 }}
          aria-label="Enlaces de contacto"
        >
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.credly} target="_blank" rel="noreferrer">
            Credly
          </a>
        </nav>
      </div>
    </header>
  )
}

function Experience() {
  return (
    <Section id="experiencia" index="01" title="Experiencia">
      <ol className="timeline">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role + job.company} className="timeline-item" delay={i * 60}>
            <div className="timeline-meta">{job.period}</div>
            <div className="timeline-body">
              <h3>{job.role}</h3>
              <p className="timeline-org">
                {job.company} · <span>{job.location}</span>
              </p>
              <ul>
                {job.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="habilidades" index="02" title="Habilidades">
      <div className="skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.category} className="skill-group" delay={i * 80}>
            <h3 className="skill-category">{group.category}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="proyectos" index="03" title="Proyectos">
      <div className="projects">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.name} className="project-card" delay={i * 80}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <ul className="chips">
              {p.stack.map((s) => (
                <li key={s} className="chip chip-quiet">
                  {s}
                </li>
              ))}
            </ul>
            <a href={p.url} target="_blank" rel="noreferrer" className="project-link">
              Ver repositorio <span className="arrow">&rarr;</span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Certifications() {
  const groups = ['AWS', 'Google Cloud', 'Otros']
  return (
    <Section
      id="certificaciones"
      index="04"
      title="Certificaciones"
      note={
        <>
          {certifications.length} certificaciones verificadas ·{' '}
          <a href={profile.links.credly} target="_blank" rel="noreferrer">
            Credly
          </a>
        </>
      }
    >
      {groups.map((g, gi) => {
        const items = certifications.filter((c) => c.group === g)
        if (items.length === 0) return null
        return (
          <Reveal key={g} className="cert-group" delay={gi * 60}>
            <h3 className="cert-group-title">{g}</h3>
            <ul className="cert-list">
              {items.map((c) => (
                <li key={c.name} className="cert-item">
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-meta">
                    {c.issuer} · {c.date}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        )
      })}
    </Section>
  )
}

function Education() {
  return (
    <Section id="educacion" index="05" title="Educación">
      <ol className="timeline">
        {education.map((e, i) => (
          <Reveal as="li" key={e.institution} className="timeline-item" delay={i * 60}>
            <div className="timeline-meta">{e.period}</div>
            <div className="timeline-body">
              <h3>{e.institution}</h3>
              <p className="timeline-org">{e.degree}</p>
              <ul>
                {e.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

function Extracurricular() {
  return (
    <Section id="comunidad" index="06" title="Comunidad">
      <ol className="timeline">
        {extracurricular.map((x, i) => (
          <Reveal as="li" key={x.role} className="timeline-item" delay={i * 60}>
            <div className="timeline-meta">{x.period}</div>
            <div className="timeline-body">
              <h3>{x.role}</h3>
              <p className="timeline-org">{x.org}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

export default function App() {
  return (
    <div className="app">
      <PipelineRail />
      <div className="container">
        <Hero />
        <main>
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Extracurricular />
        </main>
        <footer className="footer">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <span className="footer-loc">{profile.location}</span>
        </footer>
      </div>
    </div>
  )
}
