import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext({ lang: 'es', setLang: () => {}, toggle: () => {} })

const SUPPORTED = ['es', 'en']
const STORAGE_KEY = 'portfolio-lang'

function detectInitialLang() {
  if (typeof window === 'undefined') return 'es'
  // 1. Explicit user choice wins.
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && SUPPORTED.includes(saved)) return saved
  // 2. Otherwise detect from the browser; default to Spanish if unclear.
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'es'
  return nav.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('es')

  useEffect(() => {
    setLangState(detectInitialLang())
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  const setLang = (next) => {
    if (!SUPPORTED.includes(next)) return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore storage errors */
    }
  }

  const toggle = () => setLang(lang === 'es' ? 'en' : 'es')

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

/** Pick a localized value from a { es, en } object; falls back gracefully. */
export function useT() {
  const { lang } = useLang()
  return (obj) => {
    if (obj == null) return ''
    if (typeof obj === 'string') return obj
    return obj[lang] ?? obj.es ?? obj.en ?? ''
  }
}
