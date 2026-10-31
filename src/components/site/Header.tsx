import Link from 'next/link';
import ThemeToggle from '@/components/site/ThemeToggle';
import { SITE } from '@/lib/site';

export default function Header() {
  return (
    <header className="border-b border-rule">
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-ink no-underline"
        >
          {SITE.shortName}
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
