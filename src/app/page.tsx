import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export function generateMetadata(): Metadata {
  return {
    title: { absolute: SITE.title },
    description: SITE.description,
    alternates: { canonical: '/' },
    openGraph: {
      title: SITE.title,
      description: SITE.description,
      url: SITE.url,
      images: [{ url: '/og/home', width: 1200, height: 630, alt: SITE.title }]
    }
  };
}

export default function HomePage() {
  return (
    <div className="wrap">
      <section className="reveal py-24 sm:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Scaffolding
        </p>
        <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {SITE.name}
        </h1>
        <p className="prose-measure mt-6 text-lg leading-relaxed text-muted">
          This site is set up but not yet written. The structure, theme and
          content are still to be decided.
        </p>
      </section>

      <section className="reveal border-t border-rule py-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          What is already in place
        </h2>
        <ul className="prose-measure mt-6 space-y-2 text-muted">
          <li>Next.js App Router, TypeScript and Tailwind, with a src/ layout.</li>
          <li>Design tokens as CSS custom properties, light and dark.</li>
          <li>Metadata, canonical URLs, sitemap, robots, OG images, JSON-LD.</li>
          <li>Skip link, visible focus rings, reduced-motion support.</li>
        </ul>
      </section>
    </div>
  );
}
