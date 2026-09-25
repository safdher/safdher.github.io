import { useState } from 'react'
import Page from '../components/Page.jsx'
import { projectGroups, profile } from '../data/content.js'

const tabs = [
  { id: 'projects', label: 'projects', rows: [...projectGroups[0].rows, ...projectGroups[1].rows] },
  { id: 'apps', label: 'google play apps', rows: projectGroups[2].rows },
]

function Row({ p }) {
  const inner = (
    <div className="grid gap-x-5 gap-y-3 px-4 py-5 sm:grid-cols-[7rem_1fr_auto]">
      <div className="flex h-16 w-28 items-center justify-center overflow-hidden border border-hair bg-panel font-mono text-xs text-muted">
        {p.img ? (
          <img src={p.img} alt="" loading="lazy" className={`h-full w-full object-cover ${p.link ? 'object-center' : 'object-top'}`} />
        ) : (
          <span aria-hidden="true">{'{ }'}</span>
        )}
      </div>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="font-mono text-base font-bold">{p.name}</h2>
          <span className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="border border-hair px-1.5 py-0.5 font-mono text-[11px] text-muted">{t}</span>
            ))}
          </span>
        </div>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{p.text}</p>
      </div>
      {p.link && (
        <span className="hidden self-center font-mono text-xs text-accent sm:block" aria-hidden="true">play -&gt;</span>
      )}
    </div>
  )
  return (
    <li className="border-b border-hair last:border-b-0 hover:bg-panel">
      {p.link ? (
        <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on Google Play`} className="block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  )
}

export default function Work() {
  const [active, setActive] = useState('projects')
  const tab = tabs.find((t) => t.id === active)

  return (
    <Page index="03" label="work" title="What I've built.">
      <div role="tablist" aria-label="Work categories" className="flex border border-b-0 border-line font-mono text-xs uppercase tracking-wider">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls="work-panel"
            onClick={() => setActive(t.id)}
            className={`flex-1 border-r border-line px-4 py-3 text-left last:border-r-0 sm:flex-none sm:px-6 ${
              active === t.id ? 'bg-ink text-bg' : 'text-muted hover:text-ink'
            }`}
          >
            {t.label} <span className={active === t.id ? '' : 'text-accent'}>({t.rows.length})</span>
          </button>
        ))}
      </div>
      <div id="work-panel" role="tabpanel" aria-labelledby={`tab-${tab.id}`} className="border border-line">
        <ul>
          {tab.rows.map((p) => (
            <Row key={p.name} p={p} />
          ))}
        </ul>
      </div>

      <p className="mt-6 font-mono text-xs text-muted">
        <a href={profile.playStore} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
          all HoverMinds apps on Google Play -&gt;
        </a>
        {'  '}
        <a href={profile.multimedia} className="hover:underline" target="_blank" rel="noopener noreferrer">
          sahaimultimedia.com -&gt;
        </a>
      </p>
    </Page>
  )
}
