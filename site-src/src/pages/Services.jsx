import Page from '../components/Page.jsx'
import { services, process } from '../data/content.js'

export default function Services() {
  return (
    <Page label="Services" title="How I can help." intro="Every option starts with a free 20-minute call.">
      <ul className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.title} className="card card-hover p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 font-mono text-sm text-accent">
              {i + 1}
            </span>
            <h2 className="mt-4 text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-20 text-2xl font-semibold tracking-tight">How it works</h2>
      <ol className="mt-8 grid gap-5 md:grid-cols-4">
        {process.map(([t, d], i) => (
          <li key={t} className="relative border-t-2 border-accent/60 pt-5">
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-1 font-semibold">{t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{d}</p>
          </li>
        ))}
      </ol>
    </Page>
  )
}
