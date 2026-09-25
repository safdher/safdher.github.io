import { useCallback, useEffect, useState } from 'react'

const KEY = 'theme'
const query = () => window.matchMedia('(prefers-color-scheme: dark)')

const read = () => {
  try { return localStorage.getItem(KEY) } catch { return null }
}

const apply = (theme) => {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme // native scrollbars and form controls follow the theme
}

/**
 * Light/dark logic:
 * 1. Saved choice wins. 2. Otherwise follow the OS setting.
 * 3. Until the user picks manually, OS changes are followed live.
 * The inline script in index.html sets the first paint; this hook takes over after.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )

  useEffect(() => {
    const mq = query()
    const onChange = (e) => {
      if (read()) return // user made an explicit choice
      const next = e.matches ? 'dark' : 'light'
      apply(next)
      setTheme(next)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    apply(next)
    setTheme(next)
    try { localStorage.setItem(KEY, next) } catch { /* private mode: still works for this visit */ }
  }, [theme])

  return { theme, toggle }
}
