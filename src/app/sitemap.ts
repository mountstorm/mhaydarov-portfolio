import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { LOCALES, localePath } from '@/lib/i18n';

const PATHS = [
  { path: '', priority: 1 },
  { path: '/research', priority: 0.9 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  /* Every path in every language, each entry listing the others as
     alternates — the sitemap half of the hreflang signal. */
  return PATHS.flatMap(({ path, priority }) =>
    LOCALES.map((locale) => ({
      url: `${SITE.url}${localePath(locale, path) === '/' ? '/' : localePath(locale, path)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${SITE.url}${localePath(l, path)}`])
        )
      }
    }))
  );
}
