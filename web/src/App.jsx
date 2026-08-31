import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Background from './components/Background.jsx'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Blog from './pages/Blog.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import { profile } from './data/content.js'
import { useT } from './i18n/LanguageContext.jsx'

/* Scrolls to a #hash target on the home route (e.g. /#proyectos). */
function HashScroll() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (pathname === '/' && hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [pathname, hash])
  return null
}

function Footer() {
  const t = useT()
  return (
    <footer className="footer">
      <span>
        &copy; {new Date().getFullYear()} {profile.name}
      </span>
      <span className="footer-loc">{t(profile.location)}</span>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <HashScroll />
      <div className="app">
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/proyectos/:slug" element={<ProjectPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
