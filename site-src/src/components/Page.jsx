// Shared page frame: mono breadcrumb, big title, optional intro.
export default function Page({ index, label, title, intro, children }) {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">
        <span className="text-accent">{index}</span> / {label}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {intro && <p className="mt-4 max-w-lg text-muted">{intro}</p>}
      <div className="mt-10">{children}</div>
    </div>
  )
}
