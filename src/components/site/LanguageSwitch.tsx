'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DEFAULT_LOCALE, LOCALES, LOCALE_LABELS, ui, type Locale } from '@/lib/i18n';

/** Strips any locale prefix, leaving the shared part of the route. */
function basePath(pathname: string): string {
  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (pathname === `/${locale}`) return '';
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname === '/' ? '' : pathname;
}

/**
 * Three languages, always all three visible. The switch is part of the
 * argument the site is making, so it is not hidden behind a dropdown.
 */
export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || '/';
  const base = basePath(pathname);

  return (
    <nav aria-label={ui(locale).language} className="flex items-center gap-1">
      {LOCALES.map((l) => {
        const href = l === DEFAULT_LOCALE ? base || '/' : `/${l}${base}`;
        const active = l === locale;

        return (
          <Link
            key={l}
            href={href}
            hrefLang={l}
            aria-current={active ? 'true' : undefined}
            className={`rounded px-1.5 py-1 font-ui text-[0.6875rem] font-medium tracking-[0.12em] transition-colors ${
              active ? 'text-ink' : 'text-faint hover:text-ink'
            }`}
          >
            {LOCALE_LABELS[l]}
          </Link>
        );
      })}
    </nav>
  );
}
