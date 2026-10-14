import Page from '../components/Page.jsx'
import { profile } from '../data/content.js'

const links = [
  ['Email', profile.email, `mailto:${profile.email}`],
  ['WhatsApp', '+91 95268 83699', profile.whatsapp],
  ['GitHub', 'github.com/safdher', profile.github],
  ['LinkedIn', 'in/safdher-sahai', profile.linkedin],
  ['Instagram', '@safdher_sahai', profile.instagram],
  ['CV', 'Download Safdher.pdf', profile.cv],
]

const body = ['Hi Safdher,', '', 'What I want to build:', 'Platform (Android / iOS / both):', 'Target launch date:', 'Budget range:'].join('\n')
const enquiry = `mailto:${profile.email}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(body)}`

export default function Contact() {
  return (
    <Page
      label="Contact"
      title="Let's ship something."
      intro="Tell me what you are building and when it needs to be live. I reply within one working day."
    >
      <div className="card relative mb-10 overflow-hidden p-6 sm:p-8">
        <div className="hero-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative flex flex-wrap items-center gap-4">
          <a href={enquiry} className="btn-primary">Start a project</a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            WhatsApp me
          </a>
          <p className="flex items-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.status}. Free discovery call.
          </p>
        </div>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {links.map(([k, label, href]) => (
          <li key={k}>
            <a
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="card card-hover flex items-center justify-between gap-4 px-5 py-4"
            >
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wider text-muted">{k}</span>
                <span className="block truncate font-medium">{label}</span>
              </span>
              <span aria-hidden="true" className="text-accent">→</span>
            </a>
          </li>
        ))}
      </ul>
    </Page>
  )
}
