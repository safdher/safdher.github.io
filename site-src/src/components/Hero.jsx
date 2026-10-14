import { Link } from 'react-router-dom'
import { profile, apps, yearsExperience } from '../data/content.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="hero-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open for freelance · replies within one working day
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tightest sm:text-7xl">
            I build mobile apps
            <br />
            that <span className="gradient-text">ship and scale.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.role} in {profile.base.split(',')[0]}. I take products from idea to launch: Flutter and Android
            (Kotlin) apps, the backends behind them, and the pipelines that release them.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">Start a project</Link>
            <Link to="/work" className="btn-ghost">See my work</Link>
            <a href={profile.cv} download className="btn px-3 text-muted hover:text-ink">
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              [`${yearsExperience}+`, 'years in mobile'],
              [String(apps.length), 'apps on Google Play'],
              ['2', 'stacks: Flutter, Kotlin'],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="text-3xl font-semibold tracking-tight">{n}</dt>
                <dd className="mt-1 text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise mx-auto w-full max-w-sm [animation-delay:120ms] lg:max-w-none">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent2/40 opacity-70 blur-2xl"
              aria-hidden="true"
            />
            <figure className="card relative overflow-hidden rounded-[1.75rem] p-2">
              <img
                src={profile.photo}
                alt="Portrait of Safdher Sahai"
                width="735"
                height="735"
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-top"
              />
            </figure>
            <p className="card absolute -bottom-4 left-4 flex items-center gap-2 px-4 py-2.5 text-sm font-medium">
              <span className="gradient-text font-semibold">{profile.role}</span>
              <span className="text-muted">@ Trenser</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
