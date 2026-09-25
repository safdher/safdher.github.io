export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className="flex h-9 items-center border border-line px-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-bg"
    >
      <span aria-hidden="true">{isDark ? '[ dark ]' : '[ light ]'}</span>
    </button>
  )
}
