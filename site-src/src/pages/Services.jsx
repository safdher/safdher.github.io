import Page from '../components/Page.jsx'
import { services, process } from '../data/content.js'

export default function Services() {
  return (
    <Page index="01" label="services" title="How I can help." intro="Every option starts with a free 20-minute call.">
      <ul className="grid border border-line md:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.title} className="border-b border-hair p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
            <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</p>
            <h2 className="mt-2 text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ul>

      <h2 className="mb-3 mt-10 font-mono text-xs uppercase tracking-wider text-muted">// how it works</h2>
      <ol className="grid border border-line font-mono text-sm md:grid-cols-4">
        {process.map(([t, d], i) => (
          <li key={t} className="border-b border-hair p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
            <span className="text-accent">{i + 1}.</span> <span className="font-bold">{t}</span>
            <p className="mt-1 font-sans text-xs leading-relaxed text-muted">{d}</p>
          </li>
        ))}
      </ol>
    </Page>
  )
}
