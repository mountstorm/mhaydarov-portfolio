import type { Metadata } from 'next';
import Link from 'next/link';
import { alternates, abs } from '@/lib/site';
import { localePath, ui, type Locale } from '@/lib/i18n';
import { RESEARCH, IDENTITY, isEmpty, t } from '@/lib/content';
import Pending from '@/components/site/Pending';
import { jsonLd } from '@/lib/jsonld';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const { locale } = params;
  const description = isEmpty(RESEARCH.abstract)
    ? t(RESEARCH.process, locale)
    : t(RESEARCH.abstract, locale).slice(0, 200);

  return {
    title: RESEARCH.title,
    description,
    alternates: alternates(locale, '/research'),
    openGraph: {
      type: 'article',
      title: RESEARCH.title,
      description,
      url: abs(localePath(locale, '/research')),
      images: [{ url: '/og/research', width: 1200, height: 630, alt: RESEARCH.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: RESEARCH.title,
      description,
      images: ['/og/research']
    }
  };
}

export default function ResearchPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const copy = ui(locale);

  /* Described as a scholarly article so the title, author and status are
     machine-readable even while the text itself is withheld. */
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: RESEARCH.title,
    inLanguage: locale,
    url: abs(localePath(locale, '/research')),
    ...(IDENTITY.name ? { author: { '@type': 'Person', name: IDENTITY.name } } : {}),
    ...(isEmpty(RESEARCH.abstract) ? {} : { abstract: t(RESEARCH.abstract, locale) }),
    creativeWorkStatus: RESEARCH.underReview ? 'Under review' : 'Published'
  };

  return (
    <article className="wrap py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />

      <div className="rule-gold mb-6 w-10" />
      <p className="eyebrow">{copy.sections.research}</p>

      <h1 className="measure mt-6 font-display text-4xl leading-[1.1] sm:text-5xl">
        {RESEARCH.title}
      </h1>

      <p className="measure mt-7 border-l-2 border-gold pl-4 font-ui text-sm text-faint">
        {t(RESEARCH.process, locale)}
      </p>

      <section aria-labelledby="abstract" className="measure mt-12">
        <h2 id="abstract" className="eyebrow">
          {copy.abstract}
        </h2>
        <div className="copy mt-4 text-lg leading-relaxed text-ink">
          {isEmpty(RESEARCH.abstract) ? (
            <Pending locale={locale} what="Abstract, 100–150 words, in plain language." />
          ) : (
            <p>{t(RESEARCH.abstract, locale)}</p>
          )}
        </div>
      </section>

      <section className="measure mt-12 border-t border-rule pt-8">
        {RESEARCH.underReview ? (
          <>
            <span className="inline-block rounded border border-gold bg-gold-soft px-3 py-1.5 font-ui text-xs font-medium uppercase tracking-[0.14em] text-gold">
              {copy.underReview}
            </span>
            <p className="mt-4 text-muted">{copy.underReviewNote}</p>
          </>
        ) : RESEARCH.pdf ? (
          <a href={RESEARCH.pdf} className="link font-ui">
            {copy.downloadPdf} ↓
          </a>
        ) : (
          <Pending locale={locale} what="A PDF of the full paper." />
        )}
      </section>

      <p className="mt-14">
        <Link href={localePath(locale)} className="link font-ui text-sm">
          ← {copy.backHome}
        </Link>
      </p>
    </article>
  );
}
