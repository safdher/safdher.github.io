import { Link } from 'react-router-dom'
import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="container-x flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.role} · {profile.base}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="hover:text-ink">Email</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
          <a href={profile.playStore} target="_blank" rel="noopener noreferrer" className="hover:text-ink">Google Play</a>
          <Link to="/contact" className="hover:text-ink">Contact</Link>
        </nav>
      </div>
      <div className="border-t border-line/60 py-4 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  )
}
