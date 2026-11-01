import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE, LOCALES } from '@/lib/i18n';

/**
 * English is served at the root, the other languages behind a prefix. Pages
 * all live under app/[locale], so `/` is rewritten to `/en` — a rewrite, not
 * a redirect, so the clean URL is what the reader and the crawler both see.
 *
 * `/en/...` is redirected away permanently, otherwise every English page
 * would be reachable at two URLs.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || '/';
    return NextResponse.redirect(url, 308);
  }

  const first = pathname.split('/')[1];
  if ((LOCALES as readonly string[]).includes(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  /* Everything except Next internals, the OG route and the metadata files. */
  matcher: ['/((?!_next|og/|sitemap.xml|robots.txt|favicon.ico|.*\\..*).*)']
};
