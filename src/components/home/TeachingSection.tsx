import Section from '@/components/site/Section';
import { ui, type Locale } from '@/lib/i18n';
import { TEACHING, isEmpty, t } from '@/lib/content';

/** Short by design. It supports the story; it isn't the story. */
export default function TeachingSection({ locale }: { locale: Locale }) {
  const copy = ui(locale);

  return (
    <Section id="teaching" label={copy.sections.teaching}>
      <ul className="measure divide-y divide-rule">
        {TEACHING.map((item) => (
          <li key={item.name} className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="font-display text-xl text-ink">{item.name}</h3>
              {!isEmpty(item.gloss) ? (
                <span className="font-ui text-sm italic text-faint">
                  “{t(item.gloss, locale)}”
                </span>
              ) : null}
              {item.facts.length > 0 ? (
                <span className="font-ui text-sm text-muted">
                  {item.facts.join(' · ')}
                </span>
              ) : null}
            </div>
            {isEmpty(item.note) ? (
              <p className="font-ui text-sm text-faint">
                <span className="uppercase tracking-[0.14em] text-gold">
                  {copy.toAdd}
                </span>{' '}
                · one line
              </p>
            ) : (
              <p className="text-muted">{t(item.note, locale)}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
