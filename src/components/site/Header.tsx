import Link from 'next/link';
import LanguageSwitch from '@/components/site/LanguageSwitch';
import ThemeToggle from '@/components/site/ThemeToggle';
import { localePath, type Locale } from '@/lib/i18n';
import { navItems } from '@/lib/nav';
import { IDENTITY } from '@/lib/content';

/**
 * The section buttons from the brief, as anchors into the single scrolling page.
 * They are absolute (locale root + hash) so they work from the paper page too.
 */
export default function Header({ locale }: { locale: Locale }) {
  const home = localePath(locale);
  const items = navItems(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur-sm">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link
          href={home}
          className="shrink-0 font-display text-base tracking-tight no-underline"
        >
          {IDENTITY.name || '—'}
        </Link>

        <nav aria-label="Sections" className="hidden items-center gap-5 sm:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-ui text-[0.8125rem] text-muted no-underline transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitch locale={locale} />
          <span aria-hidden="true" className="h-4 w-px bg-rule" />
          <ThemeToggle />
        </div>
      </div>

      {/* The four buttons stay reachable on phones, below the bar. */}
      <nav
        aria-label="Sections"
        className="flex items-center gap-4 overflow-x-auto border-t border-rule px-6 py-2 sm:hidden"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap font-ui text-[0.8125rem] text-muted no-underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
