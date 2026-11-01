import Section from '@/components/site/Section';
import { ui, type Locale } from '@/lib/i18n';
import { MUSIC, t } from '@/lib/content';

export default function MusicSection({ locale }: { locale: Locale }) {
  const copy = ui(locale);

  return (
    <Section id="music" label={copy.sections.music}>
      <p className="measure text-lg text-ink">{t(MUSIC.note, locale)}</p>

      <ul className="mt-9 grid gap-5 sm:grid-cols-3">
        {MUSIC.pieces.map((piece) => (
          <li
            key={`${piece.composer}-${piece.title}`}
            className="rounded border border-rule bg-surface p-5"
          >
            <h3 className="font-display text-xl text-ink">{piece.title}</h3>
            <p className="mt-1 font-ui text-sm text-faint">{piece.composer}</p>

            {piece.embed ? (
              <div className="mt-4 aspect-video overflow-hidden rounded">
                <iframe
                  src={piece.embed}
                  title={`${piece.title} — ${piece.composer}`}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            ) : piece.url ? (
              <p className="mt-4">
                <a
                  href={piece.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link font-ui text-sm"
                >
                  {copy.listen} ↗
                </a>
              </p>
            ) : (
              /* The piece is settled, the recording is not. */
              <p className="mt-4 font-ui text-xs uppercase tracking-[0.14em] text-gold">
                {copy.toAdd}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
