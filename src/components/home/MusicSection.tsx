import Section from '@/components/site/Section';
import Pending from '@/components/site/Pending';
import { ui, type Locale } from '@/lib/i18n';
import { MUSIC, t } from '@/lib/content';

export default function MusicSection({ locale }: { locale: Locale }) {
  const copy = ui(locale);

  return (
    <Section id="music" label={copy.sections.music}>
      {MUSIC.pieces.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2">
          {MUSIC.pieces.map((piece) => (
            <li
              key={piece.url}
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
              ) : (
                <p className="mt-4">
                  <a
                    href={piece.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link font-ui text-sm"
                  >
                    {piece.title} ↗
                  </a>
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <Pending
          locale={locale}
          what="Two or three recordings — Tiersen, Swan Lake, Moonlight Sonata — embedded or linked."
        />
      )}

      <p className="measure mt-8 text-muted">{t(MUSIC.note, locale)}</p>
    </Section>
  );
}
