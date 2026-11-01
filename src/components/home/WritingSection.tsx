import Section from '@/components/site/Section';
import Pending from '@/components/site/Pending';
import { ui, type Locale } from '@/lib/i18n';
import { WRITING, isEmpty, t } from '@/lib/content';

export default function WritingSection({ locale }: { locale: Locale }) {
  const copy = ui(locale);
  const excerpt = t(WRITING.excerpt, locale);

  return (
    <Section id="writing" label={copy.sections.writing}>
      <p className="measure text-lg text-ink">{t(WRITING.about, locale)}</p>

      {isEmpty(WRITING.excerpt) ? (
        <div className="mt-8">
          <Pending
            locale={locale}
            what="One polished excerpt, about a page — the strongest scene, not the opening."
          />
        </div>
      ) : (
        <figure className="measure mt-9 border-l border-rule-strong pl-6">
          {!isEmpty(WRITING.excerptNote) ? (
            <figcaption className="eyebrow mb-4">
              {t(WRITING.excerptNote, locale)}
            </figcaption>
          ) : null}
          <div className="copy text-[1.0625rem] leading-[1.8] text-ink">
            {excerpt.split(/\n{2,}/).map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>
        </figure>
      )}
    </Section>
  );
}
