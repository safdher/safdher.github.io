import Page from '../components/Page.jsx'
import { stack, skills } from '../data/content.js'

export default function Stack() {
  return (
    <Page label="Stack" title="Tools I ship with.">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((s) => (
          <li key={s.tool} className="card card-hover p-6">
            <span className="chip">{s.category}</span>
            <h2 className="mt-4 text-lg font-semibold">{s.tool}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.use}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-20 text-2xl font-semibold tracking-tight">Skills</h2>
      <dl className="card mt-8 divide-y divide-line">
        {skills.map(([k, v]) => (
          <div key={k} className="grid gap-1 px-6 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <dt className="font-medium text-accent">{k}</dt>
            <dd className="text-sm leading-relaxed text-muted">{v}</dd>
          </div>
        ))}
      </dl>
    </Page>
  )
}
