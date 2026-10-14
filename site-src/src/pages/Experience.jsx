import Page from '../components/Page.jsx'
import { experience, education } from '../data/content.js'

export default function Experience() {
  return (
    <Page label="Experience" title="Where I've worked." intro="Currently on Android with Jetpack Compose alongside Flutter.">
      <ol className="relative ml-2 border-l border-line">
        {experience.map(([when, role, org, text], i) => (
          <li key={when + role} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg ${
                i === 0 ? 'bg-gradient-to-br from-accent to-accent2' : 'bg-line'
              }`}
            />
            <p className="font-mono text-xs text-muted">{when}</p>
            <h2 className="mt-1 text-lg font-semibold">
              {role} <span className="font-normal text-accent">@ {org}</span>
            </h2>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{text}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-20 text-2xl font-semibold tracking-tight">Education</h2>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {education.map(([when, deg, school]) => (
          <li key={deg} className="card p-6">
            <p className="font-mono text-xs text-muted">{when}</p>
            <h3 className="mt-1 font-semibold">{deg}</h3>
            <p className="text-sm text-muted">{school}</p>
          </li>
        ))}
      </ul>
    </Page>
  )
}
