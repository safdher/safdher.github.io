import { useLocation } from 'react-router-dom'
import { profile } from '../data/content.js'

// Tiny IDE-style status bar. Purely decorative, hidden from assistive tech.
export default function StatusBar({ theme }) {
  const { pathname } = useLocation()
  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 bottom-0 z-20 hidden h-6 items-center justify-between border-t border-line bg-bg px-3 font-mono text-[11px] text-muted sm:flex"
    >
      <span>
        <span className="text-accent">main</span> &nbsp;~{pathname === '/' ? '/home' : pathname} &nbsp;{profile.base}
      </span>
      <span>UTF-8 &nbsp;React &nbsp;theme: {theme}</span>
    </div>
  )
}
