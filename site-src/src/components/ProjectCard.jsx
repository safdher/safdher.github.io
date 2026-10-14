const chipClass = (tag) => {
  if (tag === 'Flutter') return 'chip chip-flutter'
  if (tag.includes('Kotlin')) return 'chip chip-kotlin'
  return 'chip'
}

function Tile({ p }) {
  if (p.icon) {
    return <img src={p.icon} alt="" width="48" height="48" loading="lazy" className="h-12 w-12 shrink-0 rounded-xl border border-line object-cover" />
  }
  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-lg font-bold text-accent-ink"
    >
      {p.name.charAt(0)}
    </span>
  )
}

// One card for both client projects (banner image) and Play Store apps (icon).
export default function ProjectCard({ p }) {
  const banner = p.img && !p.icon

  return (
    <li className="card card-hover flex flex-col overflow-hidden">
      {banner && (
        <div className="aspect-[16/9] overflow-hidden border-b border-line bg-bg">
          <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          {!banner && <Tile p={p} />}
          <div className="min-w-0">
            <h2 className="font-semibold leading-snug">{p.name}</h2>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className={chipClass(t)}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{p.text}</p>

        {p.backend && (
          <dl className="mt-4 space-y-1.5 border-t border-line pt-4 text-xs">
            <div className="grid grid-cols-[4.25rem_1fr] gap-2">
              <dt className="font-mono uppercase tracking-wider text-muted">backend</dt>
              <dd>{p.backend}</dd>
            </div>
          </dl>
        )}

        {(p.link || p.site) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} on Google Play`}
                className="btn-ghost !px-3.5 !py-1.5 !text-xs"
              >
                Google Play
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {p.site && (
              <a
                href={p.site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} website`}
                className="btn-ghost !px-3.5 !py-1.5 !text-xs"
              >
                Website
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  )
}
