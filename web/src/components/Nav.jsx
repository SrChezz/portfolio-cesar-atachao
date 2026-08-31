import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/blog', label: 'Blog' },
]

export default function Nav() {
  return (
    <nav className="topnav" aria-label="Navegación principal">
      <Link to="/" className="topnav-brand">
        <span className="brand-mark">CA</span>
        <span className="brand-name">Cesar Atachao</span>
      </Link>
      <div className="topnav-links">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              `topnav-link ${isActive ? 'is-active' : ''}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
