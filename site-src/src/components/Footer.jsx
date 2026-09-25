import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 border-x border-line px-4 py-4 font-mono text-xs text-muted sm:px-6">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span className="flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-ink">email</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">github</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">linkedin</a>
        </span>
      </div>
    </footer>
  )
}
