import { Link } from 'react-router-dom'
import {
  MapPin,
  Mail,
  Phone,
  Code2,
  Contact,
  Award,
  Briefcase,
  Wrench,
  FolderGit2,
  BadgeCheck,
  GraduationCap,
  Users,
  ArrowUpRight,
  Cloud,
  Cpu,
} from 'lucide-react'
import {
  profile,
  experience,
  skills,
  projects,
  education,
  certifications,
  extracurricular,
  ui,
} from '../data/content.js'
import generated from '../data/generated.json'
import { useReveal } from '../hooks/useReveal.js'
import { useT } from '../i18n/LanguageContext.jsx'

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

function Section({ id, index, title, Icon, note, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-h`}>
      <Reveal as="header" className="section-head">
        <h2 className="section-heading" id={`${id}-h`}>
          <span className="section-index">{index}</span>
          {Icon && <Icon className="section-icon" size={20} strokeWidth={1.75} />}
          {title}
        </h2>
        {note && <p className="section-note">{note}</p>}
      </Reveal>
      {children}
    </section>
  )
}

const SKILL_ICONS = [Cpu, Cloud]

export default function Home() {
  const t = useT()

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <img
            className="hero-avatar reveal-hero"
            style={{ '--i': 0 }}
            src="/profile.jpg"
            width="112"
            height="112"
            alt={`${profile.name}`}
            loading="eager"
            decoding="async"
          />
          <p className="hero-eyebrow reveal-hero" style={{ '--i': 1 }}>
            <MapPin size={15} strokeWidth={2} /> {t(profile.location)}
          </p>
          <h1 className="hero-name reveal-hero" style={{ '--i': 2 }}>
            {profile.name}
          </h1>
          <p className="hero-headline reveal-hero" style={{ '--i': 3 }}>
            {t(profile.headline)}
          </p>
          <p className="hero-summary reveal-hero" style={{ '--i': 4 }}>
            {t(profile.summary)}
          </p>
          <nav className="hero-links reveal-hero" style={{ '--i': 5 }} aria-label="Contacto">
            <a href={`mailto:${profile.email}`}>
              <Mail size={15} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              <Phone size={15} /> {profile.phone}
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              <Code2 size={15} /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <Contact size={15} /> LinkedIn
            </a>
            <a href={profile.links.credly} target="_blank" rel="noreferrer">
              <Award size={15} /> Credly
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Section id="experiencia" index="01" title={t(ui.sections.experience)} Icon={Briefcase}>
          <ol className="timeline">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.company} className="timeline-item" delay={i * 60}>
                <div className="timeline-meta">{t(job.period)}</div>
                <div className="timeline-body">
                  <h3>{t(job.role)}</h3>
                  <p className="timeline-org">
                    {job.company} · <span>{t(job.location)}</span>
                  </p>
                  <ul>
                    {job.highlights.map((h, j) => (
                      <li key={j}>{t(h)}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>

        <Section id="habilidades" index="02" title={t(ui.sections.skills)} Icon={Wrench}>
          <div className="skills-grid">
            {skills.map((group, i) => {
              const GIcon = SKILL_ICONS[i]
              return (
                <Reveal key={i} className="skill-group" delay={i * 80}>
                  <h3 className="skill-category">
                    {GIcon && <GIcon size={15} strokeWidth={2} />} {t(group.category)}
                  </h3>
                  <ul className="chips">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </Section>

        <Section id="proyectos" index="03" title={t(ui.sections.projects)} Icon={FolderGit2}>
          <div className="projects">
            {projects.map((p, i) => (
              <Reveal as="article" key={p.slug} className="project-card" delay={i * 80}>
                <h3>{t(p.name)}</h3>
                {p.tagline && <p className="project-tagline">{t(p.tagline)}</p>}
                <p>{t(p.description)}</p>
                <ul className="chips">
                  {p.stack.map((s) => (
                    <li key={s} className="chip chip-quiet">
                      {s}
                    </li>
                  ))}
                </ul>
                <Link to={`/proyectos/${p.slug}`} className="project-link">
                  {t(ui.labels.caseStudy)} <ArrowUpRight size={16} className="arrow" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="certificaciones"
          index="04"
          title={t(ui.sections.certifications)}
          Icon={BadgeCheck}
          note={
            <>
              {(generated.badges?.length || certifications.length)} {t(ui.labels.certsVerified)} ·{' '}
              <a href={profile.links.credly} target="_blank" rel="noreferrer">
                Credly
              </a>
            </>
          }
        >
          {generated.badges && generated.badges.length > 0 ? (
            <Reveal as="ul" className="badge-grid">
              {generated.badges.map((b) => (
                <li key={b.id} className="badge-item">
                  <a href={b.verifyUrl} target="_blank" rel="noreferrer" title={b.name}>
                    <img src={b.image} alt={b.name} loading="lazy" width="88" height="88" />
                    <span className="badge-name">{b.name}</span>
                  </a>
                </li>
              ))}
            </Reveal>
          ) : (
            ['AWS', 'Google Cloud', 'Otros'].map((g, gi) => {
              const items = certifications.filter((c) => c.group === g)
              if (items.length === 0) return null
              return (
                <Reveal key={g} className="cert-group" delay={gi * 60}>
                  <h3 className="cert-group-title">{g}</h3>
                  <ul className="cert-list">
                    {items.map((c) => (
                      <li key={c.name} className="cert-item">
                        <span className="cert-name">
                          <BadgeCheck size={15} className="cert-check" /> {c.name}
                        </span>
                        <span className="cert-meta">
                          {c.issuer} · {c.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })
          )}
        </Section>

        <Section id="educacion" index="05" title={t(ui.sections.education)} Icon={GraduationCap}>
          <ol className="timeline">
            {education.map((e, i) => (
              <Reveal as="li" key={e.institution} className="timeline-item" delay={i * 60}>
                <div className="timeline-meta">{t(e.period)}</div>
                <div className="timeline-body">
                  <h3>{e.institution}</h3>
                  <p className="timeline-org">{t(e.degree)}</p>
                  <ul>
                    {e.highlights.map((h, j) => (
                      <li key={j}>{t(h)}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>

        <Section id="comunidad" index="06" title={t(ui.sections.community)} Icon={Users}>
          <ol className="timeline">
            {extracurricular.map((x, i) => (
              <Reveal as="li" key={i} className="timeline-item" delay={i * 60}>
                <div className="timeline-meta">{t(x.period)}</div>
                <div className="timeline-body">
                  <h3>{t(x.role)}</h3>
                  <p className="timeline-org">{x.org}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>
      </main>
    </>
  )
}
