import { SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="wrap flex flex-col gap-2 py-8 font-mono text-xs text-faint xs:flex-row xs:items-center xs:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <a href={`mailto:${SITE.email}`} className="text-faint hover:text-ink">
          {SITE.email}
        </a>
      </div>
    </footer>
  );
}
