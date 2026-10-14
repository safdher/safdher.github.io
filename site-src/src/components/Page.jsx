// Shared page frame: eyebrow label, big title, optional intro.
export default function Page({ label, title, intro, children }) {
  return (
    <div className="relative">
      <div className="hero-bg pointer-events-none absolute inset-x-0 top-0 h-72" aria-hidden="true" />
      <div className="container-x relative py-14 sm:py-20">
        <header className="rise max-w-2xl">
          <p className="eyebrow">{label}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </div>
  )
}
