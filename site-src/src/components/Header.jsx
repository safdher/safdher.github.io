import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

export const links = [
  ['services', '/services'],
  ['stack', '/stack'],
  ['work', '/work'],
  ['experience', '/experience'],
  ['contact', '/contact'],
]

const desktop = ({ isActive }) =>
  `rounded-full px-3.5 py-1.5 text-sm font-medium capitalize transition ${
    isActive ? 'bg-ink/[0.07] text-ink' : 'text-muted hover:text-ink'
  }`

export default function Header({ theme, onToggle }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/75 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-sm font-bold text-accent-ink">
            S
          </span>
          Safdher Sahai
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map(([label, to]) => (
              <li key={to}>
                <NavLink to={to} className={desktop}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <Link to="/contact" className="btn-primary ml-1 hidden !py-2 md:inline-flex">
            Hire me
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panel md:hidden"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>
      </div>

      {open && (
        <div id="mobile-menu" className="container-x pb-4 md:hidden">
          <ul className="card overflow-hidden p-1.5">
            {links.map(([label, to]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium capitalize ${
                      isActive ? 'bg-ink/[0.07] text-ink' : 'text-muted'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
