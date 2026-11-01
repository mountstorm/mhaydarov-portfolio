import { ImageResponse } from 'next/og';
import { IDENTITY, RESEARCH, t } from '@/lib/content';
import { SITE } from '@/lib/site';

export const runtime = 'edge';

/** One image per page. Set in the page's generateMetadata as `/og/<key>`. */
export function GET(_request: Request, { params }: { params: { page: string } }) {
  const page = params.page.toLowerCase();
  const isPaper = page === 'research';

  const heading = isPaper ? RESEARCH.title : IDENTITY.name;
  const sub = isPaper ? t(RESEARCH.process, 'en') : t(IDENTITY.tagline, 'en');
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
          background: '#f7f3ea',
          color: '#1f1c17',
          fontFamily: 'serif'
        }}
      >
        {/* The same ochre rule the site uses to open a section. */}
        <div style={{ width: 64, height: 2, background: '#9a7324' }} />
        <div
          style={{
            fontSize: isPaper ? 60 : 84,
            lineHeight: 1.08,
            letterSpacing: '-0.015em',
            marginTop: 34,
            maxWidth: 1000
          }}
        >
          {heading}
        </div>
        <div style={{ fontSize: 30, color: '#6a6253', marginTop: 28, maxWidth: 940 }}>
          {sub}
        </div>
        <div style={{ display: 'flex', marginTop: 52, fontSize: 22, color: '#8a8172' }}>
          {host}
          {isPaper ? '/research' : ''}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
