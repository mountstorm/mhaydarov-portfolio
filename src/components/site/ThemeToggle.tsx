'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/** Reads the theme the pre-hydration script already applied, then flips it. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const el = document.documentElement;
    el.setAttribute('data-theme', next);
    el.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode — the toggle still works for this page view */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className="rounded border border-rule px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-rule-strong hover:text-ink"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
