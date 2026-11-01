import Section from '@/components/site/Section';
import { ui, type Locale } from '@/lib/i18n';
import { COMMUNITY, isEmpty, t } from '@/lib/content';

/** Short by design. It supports the story; it isn't the story. */
export default function CommunitySection({ locale }: { locale: Locale }) {
  const copy = ui(locale);

  return (
    <Section id="community" label={copy.sections.community}>
      <ul className="measure divide-y divide-rule">
        {COMMUNITY.map((item) => (
          <li key={item.name} className="py-6 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl text-ink">
                {item.name}
                {!isEmpty(item.gloss) ? (
                  <span className="font-body text-base italic text-faint">
                    {' '}
                    (“{t(item.gloss, locale)}”)
                  </span>
                ) : null}
              </h3>
              {!isEmpty(item.role) ? (
                <span className="font-ui text-sm text-muted">{t(item.role, locale)}</span>
              ) : null}
              {item.dates ? (
                <span className="font-ui text-sm text-faint">{item.dates}</span>
              ) : null}
            </div>
            <p className="mt-2 text-muted">{t(item.body, locale)}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
