/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class', // theme is controlled by the "dark" class on <html>
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      // Semantic tokens. The actual values live in src/index.css as CSS variables,
      // so components never need `dark:` prefixes and both themes stay in sync.
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        hair: 'rgb(var(--hair) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accent2: 'rgb(var(--accent2) / <alpha-value>)',
        'accent-ink': 'rgb(var(--accent-ink) / <alpha-value>)',
      },
      letterSpacing: { tightest: '-0.045em' },
      boxShadow: {
        card: '0 1px 2px rgb(var(--shadow) / 0.06), 0 8px 24px -12px rgb(var(--shadow) / 0.18)',
        lift: '0 2px 4px rgb(var(--shadow) / 0.08), 0 20px 40px -16px rgb(var(--shadow) / 0.35)',
      },
    },
  },
  plugins: [],
}
