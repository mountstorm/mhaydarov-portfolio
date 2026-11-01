'use client';

import { useEffect } from 'react';

/**
 * Opts the document into scroll reveals, and only then. See globals.css: the
 * CSS cannot hide anything until `data-reveal="ready"` is on <html>, so if
 * this component never mounts the page simply renders opaque.
 *
 * Mounted once in the root layout.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (targets.length === 0) return;

    root.setAttribute('data-reveal', 'ready');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = 'true';
          observer.unobserve(entry.target);
        }
      },
      // Positive bottom margin: reveal just BEFORE the section scrolls in, so
      // fast scrolling never shows an empty band.
      { rootMargin: '0px 0px 12% 0px', threshold: 0 }
    );

    targets.forEach((t) => observer.observe(t));

    // Last-resort unblank: if anything goes wrong, show everything.
    const failsafe = window.setTimeout(() => {
      targets.forEach((t) => (t.dataset.revealed = 'true'));
    }, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
      root.removeAttribute('data-reveal');
    };
  }, []);

  return null;
}
