import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Code2,
  Calendar,
  UserCog,
  ChevronsDown,
  Sparkles,
  Boxes,
  FolderTree,
  Workflow,
  Circle,
  Database,
  Zap,
  ArrowLeftRight,
  Layers,
  Cog,
  Warehouse,
  BarChart3,
  CalendarClock,
} from 'lucide-react'
import { projectDetails } from '../data/profile.js'
import { useReveal } from '../hooks/useReveal.js'

// Map icon names used in the data module to imported components (tree-shakeable).
const ICON_MAP = {
  Database,
  Zap,
  ArrowLeftRight,
  Layers,
  Cog,
  Warehouse,
  BarChart3,
  Workflow,
  CalendarClock,
}

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

// Resolve a lucide icon by name from the explicit map, with a safe fallback.
function DynIcon({ name, ...props }) {
  const Cmp = ICON_MAP[name] || Circle
  return <Cmp {...props} />
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projectDetails[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="project-page">
        <p className="section-note">Proyecto no encontrado.</p>
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <article className="project-page">
      <Link to="/#proyectos" className="back-link reveal-hero" style={{ '--i': 0 }}>
        <ArrowLeft size={16} /> Volver
      </Link>

      <header className="project-hero">
        <p className="hero-eyebrow reveal-hero" style={{ '--i': 1 }}>
          <Boxes size={15} /> Caso de estudio
        </p>
        <h1 className="project-title reveal-hero" style={{ '--i': 2 }}>
          {project.name}
        </h1>
        <p className="project-subtitle reveal-hero" style={{ '--i': 3 }}>
          {project.tagline}
        </p>
        <div className="project-meta reveal-hero" style={{ '--i': 4 }}>
          <span>
            <Calendar size={14} /> {project.year}
          </span>
          <span>
            <UserCog size={14} /> {project.role}
          </span>
          <a href={project.repo} target="_blank" rel="noreferrer">
            <Code2 size={14} /> Repositorio
          </a>
        </div>
        <p className="project-intro reveal-hero" style={{ '--i': 5 }}>
          {project.intro}
        </p>
      </header>

      {/* Architecture diagram */}
      <Reveal className="project-figure">
        <img
          src={project.architectureImage}
          alt="Diagrama de arquitectura del pipeline en AWS"
          loading="lazy"
        />
        <figcaption>Arquitectura general del pipeline en AWS</figcaption>
      </Reveal>

      {/* Data flow */}
      <section className="project-block">
        <Reveal as="h2" className="block-title">
          <ChevronsDown size={20} strokeWidth={1.75} /> Flujo de datos
        </Reveal>
        <ol className="flow">
          {project.flow.map((step, i) => (
            <Reveal as="li" key={step.title} className="flow-step" delay={i * 70}>
              <div className="flow-node">
                <DynIcon name={step.icon} size={20} strokeWidth={1.75} />
              </div>
              <div className="flow-body">
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Orchestration */}
      <section className="project-block">
        <Reveal as="h2" className="block-title">
          <Workflow size={20} strokeWidth={1.75} /> Orquestación
        </Reveal>
        <div className="orch-grid">
          {project.orchestration.map((o, i) => (
            <Reveal key={o.label} className="orch-card" delay={i * 80}>
              <DynIcon name={o.icon} size={22} strokeWidth={1.75} />
              <div>
                <h3>{o.label}</h3>
                <p>{o.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="project-block">
        <Reveal as="h2" className="block-title">
          <Sparkles size={20} strokeWidth={1.75} /> Puntos clave
        </Reveal>
        <ul className="highlight-list">
          {project.highlights.map((h, i) => (
            <Reveal as="li" key={i} delay={i * 60}>
              <Sparkles size={15} className="hl-icon" /> {h}
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Power BI */}
      <Reveal className="project-figure">
        <img
          src={project.powerBiImage}
          alt="Modelo de datos en Power BI"
          loading="lazy"
        />
        <figcaption>Modelo de datos conectado a Redshift en Power BI</figcaption>
      </Reveal>

      {/* Stack */}
      <section className="project-block">
        <Reveal as="h2" className="block-title">
          <Boxes size={20} strokeWidth={1.75} /> Stack tecnológico
        </Reveal>
        <Reveal as="ul" className="chips">
          {project.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </Reveal>
      </section>

      {/* Repo structure */}
      <section className="project-block">
        <Reveal as="h2" className="block-title">
          <FolderTree size={20} strokeWidth={1.75} /> Estructura del repositorio
        </Reveal>
        <ul className="structure-list">
          {project.structure.map((s, i) => (
            <Reveal as="li" key={s.path} className="structure-item" delay={i * 40}>
              <code>{s.path}</code>
              <span>{s.note}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <Reveal className="project-cta">
        <a href={project.repo} target="_blank" rel="noreferrer" className="cta-button">
          <Code2 size={18} /> Ver el código en GitHub
        </a>
        <Link to="/#proyectos" className="back-link">
          <ArrowLeft size={16} /> Volver al portafolio
        </Link>
      </Reveal>
    </article>
  )
}
