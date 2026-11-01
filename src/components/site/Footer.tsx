import { ui, type Locale } from '@/lib/i18n';
import { IDENTITY } from '@/lib/content';

export default function Footer({ locale }: { locale: Locale }) {
  const copy = ui(locale);

  return (
    <footer className="mt-10 border-t border-rule">
      <div className="wrap flex flex-col gap-2 py-10 font-ui text-xs text-faint xs:flex-row xs:items-center xs:justify-between">
        <p>
          © {new Date().getFullYear()} {IDENTITY.name}
        </p>
        {IDENTITY.email ? (
          <a href={`mailto:${IDENTITY.email}`} className="text-faint hover:text-ink">
            {IDENTITY.email}
          </a>
        ) : (
          <span>{copy.toAdd}: {copy.email}</span>
        )}
      </div>
    </footer>
  );
}
