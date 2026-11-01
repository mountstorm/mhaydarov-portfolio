import { ui, type Locale } from '@/lib/i18n';

/**
 * A content slot that has not been filled in yet. Rendering this — rather than
 * inventing plausible copy — is the point: the site should never assert
 * anything its author did not write.
 */
export default function Pending({
  locale,
  what
}: {
  locale: Locale;
  what: string;
}) {
  return (
    <p className="slot measure">
      <span className="font-medium uppercase tracking-[0.14em] text-gold">
        {ui(locale).toAdd}
      </span>
      <span aria-hidden="true"> · </span>
      {what}
    </p>
  );
}
