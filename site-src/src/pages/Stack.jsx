import Page from '../components/Page.jsx'
import { stack, skills } from '../data/content.js'

export default function Stack() {
  return (
    <Page index="02" label="stack" title="Tools I ship with.">
      <div className="border border-line font-mono text-sm">
        <div className="hidden grid-cols-[3rem_1.4fr_1fr_1.6fr] border-b border-line bg-panel px-4 py-2 text-xs uppercase tracking-wider text-muted sm:grid">
          <span>#</span>
          <span>tool</span>
          <span>category</span>
          <span>use</span>
        </div>
        <ul>
          {stack.map((s, i) => (
            <li
              key={s.tool}
              className="grid gap-x-4 gap-y-1 border-b border-hair px-4 py-4 last:border-b-0 hover:bg-panel sm:grid-cols-[3rem_1.4fr_1fr_1.6fr]"
            >
              <span className="text-muted">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-medium">{s.tool}</span>
              <span className="text-accent">{s.category}</span>
              <span className="font-sans text-muted">{s.use}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border border-line font-mono text-sm">
        <div className="border-b border-line bg-panel px-4 py-2 text-xs uppercase tracking-wider text-muted">also / skills</div>
        <dl>
          {skills.map(([k, v]) => (
            <div key={k} className="grid gap-x-4 border-b border-hair px-4 py-3 last:border-b-0 sm:grid-cols-[10rem_1fr]">
              <dt className="text-accent">{k}</dt>
              <dd className="font-sans text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Page>
  )
}
