import Section from '@/components/site/Section';
import Pending from '@/components/site/Pending';
import { ui, type Locale } from '@/lib/i18n';
import { ABOUT, IDENTITY, isEmpty, t } from '@/lib/content';

export default function AboutSection({ locale }: { locale: Locale }) {
  const copy = ui(locale);

  return (
    <Section id="about" label={copy.sections.about}>
      <div className="measure copy text-muted">
        {isEmpty(ABOUT.bio) ? (
          <Pending
            locale={locale}
            what="80–120 words in his own voice: Tashkent, the encyclopedia, his four languages, and what he wants to study."
          />
        ) : (
          <p className="text-lg leading-relaxed text-ink">{t(ABOUT.bio, locale)}</p>
        )}
      </div>

      {/* Email and nothing else. No phone, no address, no schedule. */}
      <div className="mt-9">
        <h3 className="eyebrow">{copy.email}</h3>
        {IDENTITY.email ? (
          <p className="mt-2">
            <a href={`mailto:${IDENTITY.email}`} className="link font-display text-2xl">
              {IDENTITY.email}
            </a>
          </p>
        ) : (
          <div className="mt-3">
            <Pending locale={locale} what="A contact email." />
          </div>
        )}
      </div>
    </Section>
  );
}
