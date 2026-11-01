import { DEFAULT_LOCALE, LOCALES, localePath, type Locale } from '@/lib/i18n';

/** Production origin. Set NEXT_PUBLIC_SITE_URL once a custom domain is attached. */
const url =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://mhaydarov-portfolio.vercel.app';

export const SITE = {
  url,
  xarita: 'https://xarita-learn.online',
  locale: DEFAULT_LOCALE
} as const;

/** Absolute URL for a site-relative path. */
export const abs = (path: string) => new URL(path, SITE.url).toString();

/**
 * Canonical + hreflang for one page, in every language. Search engines need
 * all three to understand that these are the same page, not duplicates.
 */
export function alternates(locale: Locale, path = '') {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = localePath(l, path);
  languages['x-default'] = localePath(DEFAULT_LOCALE, path);

  return { canonical: localePath(locale, path), languages };
}
