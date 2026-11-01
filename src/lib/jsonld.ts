import { SITE } from '@/lib/site';
import { localePath, type Locale } from '@/lib/i18n';
import { IDENTITY, ABOUT, isEmpty, t } from '@/lib/content';

/**
 * Structured data. Every field is conditional on the content actually
 * existing — an empty name or bio is omitted rather than emitted blank.
 */
export const personSchema = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  ...(IDENTITY.name ? { name: IDENTITY.name } : {}),
  url: SITE.url,
  ...(IDENTITY.email ? { email: `mailto:${IDENTITY.email}` } : {}),
  ...(isEmpty(ABOUT.bio) ? {} : { description: t(ABOUT.bio, locale) }),
  knowsLanguage: ['en', 'uz', 'ru'],
  sameAs: [SITE.xarita]
});

export const websiteSchema = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  ...(IDENTITY.name ? { name: IDENTITY.name } : {}),
  url: `${SITE.url}${localePath(locale) === '/' ? '' : localePath(locale)}`,
  description: t(IDENTITY.tagline, locale),
  inLanguage: locale,
  ...(IDENTITY.name ? { author: { '@type': 'Person', name: IDENTITY.name } } : {})
});

/** Renders a JSON-LD block, escaping the one character that can break out. */
export const jsonLd = (schema: unknown) => JSON.stringify(schema).replace(/</g, '\\u003c');
