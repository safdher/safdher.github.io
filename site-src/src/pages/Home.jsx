import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { apps, services, profile } from '../data/content.js'

function SectionHead({ eyebrow, title, to, cta }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {to && (
        <Link to={to} className="text-sm font-medium text-accent hover:underline">
          {cta} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  )
}

export default function Home() {
  // Apps with real backend/site details first, then the rest.
  const featured = [...apps].sort((a, b) => Number(Boolean(b.backend)) - Number(Boolean(a.backend))).slice(0, 6)

  return (
    <>
      <Hero />

      <section className="container-x pt-20">
        <SectionHead eyebrow="Featured apps" title="Live on Google Play." to="/work" cta="All work" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </ul>
      </section>

      <section className="container-x pt-24">
        <SectionHead eyebrow="Services" title="How I can help." to="/services" cta="How it works" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title} className="card card-hover p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 font-mono text-sm text-accent">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x pt-24">
        <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-12">
          <div className="hero-bg pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Have an app in mind?</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Tell me what you are building and when it needs to be live. Free discovery call, reply within one
              working day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">Start a project</Link>
              <a href={`mailto:${profile.email}`} className="btn-ghost">{profile.email}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
