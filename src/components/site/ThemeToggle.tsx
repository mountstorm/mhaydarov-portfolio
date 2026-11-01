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
      className="font-ui text-[0.6875rem] font-medium tracking-[0.12em] text-faint transition-colors hover:text-ink"
    >
      {theme === 'dark' ? 'LIGHT' : 'DARK'}
    </button>
  );
}
