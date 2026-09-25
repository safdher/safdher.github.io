import Page from '../components/Page.jsx'
import { profile } from '../data/content.js'

const links = [
  ['email', profile.email, `mailto:${profile.email}`],
  ['whatsapp', '+91 95268 83699', profile.whatsapp],
  ['github', 'github.com/safdher', profile.github],
  ['linkedin', 'in/safdher-sahai', profile.linkedin],
  ['instagram', '@safdher_sahai', profile.instagram],
  ['cv', 'Safdher.pdf', profile.cv],
]

export default function Contact() {
  return (
    <Page
      index="05"
      label="contact"
      title="Let's ship something."
      intro="Tell me what you are building and when it needs to be live. I reply within one working day."
    >
      <dl className="border border-line font-mono text-sm">
        {links.map(([k, label, href]) => (
          <div key={k} className="border-b border-hair last:border-b-0">
            <a
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="grid grid-cols-[6rem_1fr_auto] items-center gap-4 px-4 py-3 hover:bg-ink hover:text-bg"
            >
              <dt className="text-muted">{k}</dt>
              <dd className="truncate">{label}</dd>
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        ))}
      </dl>
    </Page>
  )
}
