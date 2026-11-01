import Section from '@/components/site/Section';
import Pending from '@/components/site/Pending';
import { ui, type Locale } from '@/lib/i18n';
import { ABOUT, IDENTITY, t } from '@/lib/content';

export default function AboutSection({ locale }: { locale: Locale }) {
  const copy = ui(locale);
  const bio = t(ABOUT.bio, locale);

  return (
    <Section id="about" label={copy.sections.about}>
      <div className="measure copy text-lg leading-relaxed text-muted">
        {bio.split(/\n{2,}/).map((para, i) => (
          <p key={i} className={i === 0 ? 'text-ink' : undefined}>
            {para.trim()}
          </p>
        ))}
      </div>

      {/* Email and nothing else. No phone, no address, no schedule. */}
      <div className="mt-10">
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
