import { NavLink, Link } from 'react-router-dom'
import { Languages } from 'lucide-react'
import { useLang, useT } from '../i18n/LanguageContext.jsx'
import { ui } from '../data/content.js'

export default function Nav() {
  const { lang, toggle } = useLang()
  const t = useT()

  const links = [
    { to: '/', label: t(ui.nav.home), end: true },
    { to: '/proyectos', label: t(ui.nav.projects) },
    { to: '/blog', label: t(ui.nav.blog) },
  ]

  return (
    <nav className="topnav" aria-label="Navegación principal">
      <Link to="/" className="topnav-brand">
        <img className="brand-logo" src="/favicon.svg" alt="" width="30" height="30" />
        <span className="brand-name">Cesar Atachao</span>
      </Link>
      <div className="topnav-right">
        <div className="topnav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `topnav-link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <button
          type="button"
          className="lang-toggle"
          onClick={toggle}
          aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
          title={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
        >
          <Languages size={15} />
          <span>{lang === 'es' ? 'EN' : 'ES'}</span>
        </button>
      </div>
    </nav>
  )
}
