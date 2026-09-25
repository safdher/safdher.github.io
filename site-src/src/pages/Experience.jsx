import Page from '../components/Page.jsx'
import { experience, education } from '../data/content.js'

export default function Experience() {
  return (
    <Page index="04" label="experience" title="Where I've worked." intro="Currently on Android with Jetpack Compose alongside Flutter.">
      <div className="border border-line">
        <ul>
          {experience.map(([when, role, org, text]) => (
            <li key={when + role} className="grid gap-x-6 gap-y-1 border-b border-hair px-4 py-5 last:border-b-0 hover:bg-panel md:grid-cols-[11rem_1fr]">
              <span className="font-mono text-xs text-muted md:pt-1">{when}</span>
              <div>
                <h2 className="font-semibold">
                  {role} <span className="font-mono text-sm font-normal text-accent">@ {org}</span>
                </h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border border-line font-mono text-sm">
        <div className="border-b border-line bg-panel px-4 py-2 text-xs uppercase tracking-wider text-muted">education</div>
        {education.map(([when, deg, school]) => (
          <div key={deg} className="grid gap-x-6 border-b border-hair px-4 py-3 last:border-b-0 md:grid-cols-[11rem_1fr]">
            <span className="text-xs text-muted md:pt-0.5">{when}</span>
            <span>
              {deg} <span className="text-muted">/ {school}</span>
            </span>
          </div>
        ))}
      </div>
    </Page>
  )
}
