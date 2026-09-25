import { NavLink } from 'react-router-dom'
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
        </nav>
      </div>
      {/* phone: scrollable page links */}
      <ul className="flex gap-5 overflow-x-auto border-t border-hair px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted md:hidden">
        {links.map(([n, label, to]) => (
          <li key={to} className="shrink-0">
            <NavLink to={to} className={cls}>
              <span className="text-accent">{n}</span> {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  )
}
