import Link from 'next/link';
import Section from '@/components/site/Section';
import { localePath, ui, type Locale } from '@/lib/i18n';
import { RESEARCH, t } from '@/lib/content';

export default function ResearchSection({ locale }: { locale: Locale }) {
  const copy = ui(locale);

  return (
    <Section id="research" label={copy.sections.research}>
      <h3 className="measure font-display text-3xl leading-tight sm:text-[2.6rem]">
        {RESEARCH.title}
      </h3>

      <p className="mt-4 font-ui text-sm text-faint">{t(RESEARCH.meta, locale)}</p>

      <div className="measure copy mt-7 text-muted">
        <p>{t(RESEARCH.abstract, locale)}</p>
      </div>

      <p className="measure mt-7 border-l-2 border-gold pl-4 font-ui text-sm text-faint">
        {t(RESEARCH.mentor, locale)}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        {RESEARCH.underReview ? (
          <span className="rounded border border-gold bg-gold-soft px-3 py-1.5 font-ui text-xs font-medium uppercase tracking-[0.14em] text-gold">
            {copy.underReview}
          </span>
        ) : null}
        <Link href={localePath(locale, '/research')} className="link font-ui text-sm">
          {copy.readPaper} →
        </Link>
      </div>
    </Section>
  );
}
