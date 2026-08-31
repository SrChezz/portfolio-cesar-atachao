import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Background from './components/Background.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import { profile } from './data/profile.js'

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
  return (
    <footer className="footer">
      <span>
        &copy; {new Date().getFullYear()} {profile.name}
      </span>
      <span className="footer-loc">{profile.location}</span>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <HashScroll />
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos/:slug" element={<ProjectPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
