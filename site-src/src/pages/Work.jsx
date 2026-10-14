import { useState } from 'react'
import Page from '../components/Page.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { apps, clientProjects, profile } from '../data/content.js'

const tabs = [
  { id: 'apps', label: 'Google Play apps', rows: apps },
  { id: 'projects', label: 'Client projects', rows: clientProjects },
]

export default function Work() {
  const [active, setActive] = useState('apps')
  const tab = tabs.find((t) => t.id === active)

  return (
    <Page
      label="Work"
      title="What I've built."
      intro="Apps I publish under HoverMinds, and products I built for clients. Each app lists its stack and backend."
    >
      <div
        role="tablist"
        aria-label="Work categories"
        className="inline-flex rounded-full border border-line bg-panel p-1 shadow-card"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls="work-panel"
            onClick={() => setActive(t.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 ${
              active === t.id
                ? 'bg-gradient-to-r from-accent to-accent2 text-accent-ink'
                : 'text-muted hover:text-ink'
            }`}
          >
            {t.label} <span className={active === t.id ? 'opacity-80' : 'text-accent'}>{t.rows.length}</span>
          </button>
        ))}
      </div>

      <div id="work-panel" role="tabpanel" aria-labelledby={`tab-${tab.id}`} className="mt-8">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tab.rows.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </ul>
      </div>

      <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a href={profile.playStore} className="font-medium text-accent hover:underline" target="_blank" rel="noopener noreferrer">
          All HoverMinds apps on Google Play →
        </a>
        <a href={profile.multimedia} className="text-muted hover:text-ink" target="_blank" rel="noopener noreferrer">
          sahaimultimedia.com →
        </a>
      </p>
    </Page>
  )
}
