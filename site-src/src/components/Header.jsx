import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

export const links = [
  ['01', 'services', '/services'],
  ['02', 'stack', '/stack'],
  ['03', 'work', '/work'],
  ['04', 'experience', '/experience'],
  ['05', 'contact', '/contact'],
]

const cls = ({ isActive }) =>
  isActive ? 'text-ink underline decoration-accent decoration-2 underline-offset-8' : 'hover:text-ink'

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
    <header className="sticky top-0 z-20 border-b border-line bg-bg">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between border-x border-line px-4 sm:px-6">
        <NavLink to="/" className="font-mono text-sm font-bold tracking-tight">
          ~/safdher<span className="text-accent">_</span>
        </NavLink>
        <nav aria-label="Primary" className="flex items-center gap-5">
          <ul className="hidden gap-5 font-mono text-xs uppercase tracking-wider text-muted md:flex">
            {links.map(([n, label, to]) => (
              <li key={to}>
                <NavLink to={to} className={cls}>
                  <span className="text-accent">{n}</span> {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-bg md:hidden"
          >
            {open ? '[ close ]' : '[ menu ]'}
          </button>
        </nav>
      </div>
      {/* phone: full-width dropdown menu */}
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-bg font-mono text-sm uppercase tracking-wider md:hidden">
          {links.map(([n, label, to]) => (
            <li key={to} className="border-b border-hair last:border-b-0">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex gap-3 px-4 py-3.5 ${isActive ? 'bg-panel text-ink' : 'text-muted hover:bg-panel hover:text-ink'}`
                }
              >
                <span className="text-accent">{n}</span> {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
