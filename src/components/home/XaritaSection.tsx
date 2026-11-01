import Image from 'next/image';
import Section from '@/components/site/Section';
import Pending from '@/components/site/Pending';
import { ui, type Locale } from '@/lib/i18n';
import { XARITA, isEmpty, t } from '@/lib/content';

export default function XaritaSection({ locale }: { locale: Locale }) {
  const copy = ui(locale);

  return (
    <Section id="xarita" label={copy.sections.xarita}>
      <div className="measure copy text-muted">
        {isEmpty(XARITA.what) ? (
          <Pending locale={locale} what="What Xarita does, in two sentences." />
        ) : (
          <p className="text-lg text-ink">{t(XARITA.what, locale)}</p>
        )}
      </div>

      <div className="measure mt-6">
        {isEmpty(XARITA.role) ? (
          <Pending
            locale={locale}
            what="His role specifically, with his brother credited as co-creator."
          />
        ) : (
          <p className="text-muted">{t(XARITA.role, locale)}</p>
        )}
      </div>

      {/* Screenshots: old map over modern, the year slider, the language switch. */}
      {XARITA.shots.length > 0 ? (
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {XARITA.shots.map((shot) => (
            <li key={shot.src} className="overflow-hidden rounded border border-rule">
              <Image
                src={shot.src}
                alt={t(shot.alt, locale)}
                width={720}
                height={480}
                className="h-auto w-full"
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10">
          <Pending
            locale={locale}
            what="Two or three screenshots: an old map laid over a modern one, the year slider, the language switch."
          />
        </div>
      )}

      {XARITA.stats.length > 0 ? (
        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-rule pt-8">
          {XARITA.stats.map((stat) => (
            <div key={t(stat.label, locale)}>
              <dt className="eyebrow">{t(stat.label, locale)}</dt>
              <dd className="mt-1 font-display text-3xl text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <div className="mt-10">
          <Pending
            locale={locale}
            what="Real numbers — users, organizations — matching the activities list exactly."
          />
        </div>
      )}

      {!isEmpty(XARITA.quote.text) ? (
        <figure className="measure mt-10 border-l-2 border-gold pl-5">
          <blockquote className="font-display text-xl leading-snug text-ink">
            “{t(XARITA.quote.text, locale)}”
          </blockquote>
          <figcaption className="mt-3 font-ui text-sm text-faint">
            {t(XARITA.quote.attribution, locale)}
          </figcaption>
        </figure>
      ) : null}

      <p className="mt-10">
        <a
          href={XARITA.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link font-ui text-sm"
        >
          {copy.visitXarita} ↗
        </a>
      </p>
    </Section>
  );
}
