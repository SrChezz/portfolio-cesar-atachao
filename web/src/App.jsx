import {
  profile,
  experience,
  skills,
  projects,
  education,
  certifications,
  extracurricular,
} from './data/profile.js'

function SectionHeading({ index, title }) {
  return (
    <h2 className="section-heading">
      <span className="section-index">{index}</span>
      {title}
    </h2>
  )
}

function Hero() {
  return (
    <header className="hero">
      <p className="hero-eyebrow">// {profile.location}</p>
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-headline">{profile.headline}</p>
      <p className="hero-summary">{profile.summary}</p>
      <nav className="hero-links" aria-label="Enlaces de contacto">
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
    </header>
  )
}

function Experience() {
  return (
    <section className="section" aria-labelledby="exp">
      <SectionHeading index="01" title="Experiencia" />
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.role + job.company} className="timeline-item">
            <div className="timeline-meta">{job.period}</div>
            <div className="timeline-body">
              <h3>{job.role}</h3>
              <p className="timeline-org">
                {job.company} · <span>{job.location}</span>
              </p>
              <ul>
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" aria-labelledby="skills">
      <SectionHeading index="02" title="Habilidades" />
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" aria-labelledby="projects">
      <SectionHeading index="03" title="Proyectos" />
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className="project-card">
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
              Ver repositorio &rarr;
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Certifications() {
  const groups = ['AWS', 'Google Cloud', 'Otros']
  return (
    <section className="section" aria-labelledby="certs">
      <SectionHeading index="04" title="Certificaciones" />
      <p className="section-note">
        {certifications.length} certificaciones verificadas ·{' '}
        <a href={profile.links.credly} target="_blank" rel="noreferrer">
          Credly
        </a>
      </p>
      {groups.map((g) => {
        const items = certifications.filter((c) => c.group === g)
        if (items.length === 0) return null
        return (
          <div key={g} className="cert-group">
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
          </div>
        )
      })}
    </section>
  )
}

function Education() {
  return (
    <section className="section" aria-labelledby="edu">
      <SectionHeading index="05" title="Educación" />
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.institution} className="timeline-item">
            <div className="timeline-meta">{e.period}</div>
            <div className="timeline-body">
              <h3>{e.institution}</h3>
              <p className="timeline-org">{e.degree}</p>
              <ul>
                {e.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Extracurricular() {
  return (
    <section className="section" aria-labelledby="extra">
      <SectionHeading index="06" title="Comunidad" />
      <ul className="timeline">
        {extracurricular.map((x) => (
          <li key={x.role} className="timeline-item">
            <div className="timeline-meta">{x.period}</div>
            <div className="timeline-body">
              <h3>{x.role}</h3>
              <p className="timeline-org">{x.org}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function App() {
  return (
    <div className="app">
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
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <span className="footer-loc">{profile.location}</span>
        </footer>
      </div>
    </div>
  )
}
