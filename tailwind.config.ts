import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: { xs: '450px' },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'ui-serif', 'Georgia', 'serif'],
        ui: ['var(--font-ui)', 'system-ui', 'sans-serif']
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        rule: 'var(--rule)',
        'rule-strong': 'var(--rule-strong)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        'accent-soft': 'var(--accent-soft)',
        gold: 'var(--gold)',
        'gold-soft': 'var(--gold-soft)'
      },
      maxWidth: { measure: 'var(--measure)' },
      borderRadius: { DEFAULT: 'var(--radius)' }
    }
  },
  plugins: []
} satisfies Config;

export default config;
