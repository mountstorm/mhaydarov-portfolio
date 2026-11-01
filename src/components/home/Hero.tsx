import Image from 'next/image';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { navItems } from '@/lib/nav';
import { IDENTITY, t } from '@/lib/content';

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="reveal py-20 sm:py-28">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
        {IDENTITY.portrait ? (
          <Image
            src={IDENTITY.portrait}
            alt={t(IDENTITY.portraitAlt, locale)}
            width={132}
            height={132}
            priority
            className="h-28 w-28 shrink-0 rounded-full border border-rule object-cover sm:h-32 sm:w-32"
          />
        ) : null}

        <div>
          <h1 className="font-display text-[2.6rem] leading-[1.08] tracking-tight sm:text-6xl">
            {IDENTITY.name}
          </h1>
          <p className="measure mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            {t(IDENTITY.tagline, locale)}
          </p>

          <nav aria-label="Sections" className="mt-9 flex flex-wrap gap-2.5">
            {navItems(locale).map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="rounded border border-rule-strong bg-surface px-4 py-2 font-ui text-sm text-ink no-underline transition-colors hover:border-accent hover:text-accent"
              >
                {b.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
