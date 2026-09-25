import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import { links } from '../components/Header.jsx'

const blurb = {
  services: 'MVP builds, fractional tech lead, app rescue',
  stack: 'GCP, Docker, GitHub CI/CD, Gemini API, Postman',
  work: 'Trensight, client apps and 11 apps on Google Play',
  experience: 'Lead Engineer at Trenser, 6+ years in mobile',
  contact: 'Email, WhatsApp, LinkedIn, CV',
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-t border-line">
        <div className="border-b border-line bg-panel px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted sm:px-6">
          $ ls pages/
        </div>
        <ul className="font-mono text-sm">
          {links.map(([n, label, to]) => (
            <li key={to} className="border-b border-hair last:border-b-0">
              <Link
                to={to}
                className="grid grid-cols-[2rem_7rem_1fr_auto] items-center gap-3 px-4 py-3 hover:bg-ink hover:text-bg sm:px-6"
              >
                <span className="text-accent">{n}</span>
                <span className="font-bold">{label}</span>
                <span className="hidden truncate font-sans text-muted sm:block">{blurb[label]}</span>
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
