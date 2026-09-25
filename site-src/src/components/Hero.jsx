import { Link } from 'react-router-dom'
import { profile } from '../data/content.js'

function S({ children }) {
  return <span className="text-accent">{children}</span>
}

const code = [
  <span className="text-muted">// hello, world</span>,
  <>const <b>engineer</b> = {'{'}</>,
  <>&nbsp;&nbsp;name: <S>"{profile.name}"</S>,</>,
  <>&nbsp;&nbsp;role: <S>"{profile.role}"</S>,</>,
  <>&nbsp;&nbsp;base: <S>"{profile.base}"</S>,</>,
  <>&nbsp;&nbsp;years: <S>"6+"</S>,</>,
  <>&nbsp;&nbsp;appsPublished: <S>11</S>,</>,
  <>&nbsp;&nbsp;status: <S>"{profile.status}"</S>,</>,
  <>{'}'};</>,
]

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-[1.1fr_1fr]">
      <div className="px-4 py-14 sm:px-6 sm:py-20">
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted">
          <span className="text-accent">$</span> whoami
        </p>
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-tightest sm:text-7xl">{profile.name}</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
          {profile.role}. I take mobile and web products from idea to launch: Flutter and Android apps, the
          cloud they run on, and the pipelines that ship them.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-sm">
          <Link
            to="/contact"
            className="border border-accent bg-accent px-4 py-2.5 font-medium text-accent-ink hover:bg-transparent hover:text-accent"
          >
            ./hire-me
          </Link>
          <a href={profile.cv} download className="border border-line px-4 py-2.5 hover:bg-ink hover:text-bg">
            ./download-cv
          </a>
          <span className="cursor-blink ml-1" aria-hidden="true" />
        </div>
      </div>

      <div className="border-t border-line lg:border-l lg:border-t-0">
        <figure className="border-b border-line">
          <div className="flex items-center justify-between border-b border-line bg-panel px-4 py-2 font-mono text-xs text-muted">
            <span>safdher.png</span>
            <span>{profile.base}</span>
          </div>
          <img
            src={profile.photo}
            alt="Portrait of Safdher Sahai"
            width="735"
            height="735"
            className="aspect-square max-h-[380px] w-full object-cover object-top"
          />
        </figure>
        <div className="bg-panel" aria-label="Profile as code">
          <div className="flex items-center justify-between border-b border-line px-4 py-2 font-mono text-xs text-muted">
            <span>profile.ts</span>
            <span>TypeScript</span>
          </div>
          <pre className="overflow-x-auto py-4 font-mono text-[13px] leading-7">
            {code.map((line, i) => (
              <div key={i} className="flex">
                <span className="w-10 shrink-0 select-none pr-4 text-right text-muted/70">{i + 1}</span>
                <code className="whitespace-pre pr-4 [&_b]:font-bold">{line}</code>
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  )
}
