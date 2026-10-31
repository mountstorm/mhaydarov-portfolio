import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const runtime = 'edge';

/**
 * One dynamic OG image per page: /og/home, /og/about, and so on. Add the page
 * key here when you add the route, and reference `/og/<key>` from that page's
 * generateMetadata. Intentionally plain — it will be redrawn with the rest of
 * the visual identity.
 */
const SUBTITLES: Record<string, string> = {
  home: 'A personal site about history'
};

export function GET(_request: Request, { params }: { params: { page: string } }) {
  const page = params.page.toLowerCase();
  const subtitle = SUBTITLES[page] ?? SUBTITLES.home;
  const path = page === 'home' ? '' : `/${page}`;
  const host = SITE.url.replace(/^https?:\/\//, '');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#fcfcfb',
          color: '#16181b',
          fontFamily: 'serif'
        }}
      >
        <div
          style={{
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: '-0.02em'
          }}
        >
          {SITE.name}
        </div>
        <div style={{ fontSize: 34, color: '#5b626b', marginTop: 28, maxWidth: 940 }}>
          {subtitle}
        </div>
        <div style={{ display: 'flex', marginTop: 56, fontSize: 24, color: '#767d86' }}>
          {host}
          {path}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
