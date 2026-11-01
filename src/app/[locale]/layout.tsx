import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { EB_Garamond, Source_Serif_4, Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import ThemeScript from '@/components/site/ThemeScript';
import { personSchema, websiteSchema, jsonLd } from '@/lib/jsonld';
import { alternates, SITE } from '@/lib/site';
import { HTML_LANG, LOCALES, OG_LOCALE, ui, type Locale } from '@/lib/i18n';
import { IDENTITY, t } from '@/lib/content';

/* Garamond for the voice, Source Serif for the reading, Inter for the
   furniture — labels, buttons, captions. */
const display = EB_Garamond({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Source_Serif_4({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-ui', display: 'swap' });

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const { locale } = params;
  const name = IDENTITY.name;
  const tagline = t(IDENTITY.tagline, locale);

  return {
    metadataBase: new URL(SITE.url),
    title: { default: name, template: name ? `%s — ${name}` : '%s' },
    description: tagline,
    authors: name ? [{ name, url: SITE.url }] : undefined,
    creator: name || undefined,
    alternates: alternates(locale),
    /* The icon files live in src/app, one level above this root layout, so
       Next does not attach them automatically. Declared here instead. */
    icons: {
      icon: [{ url: '/icon.png', type: 'image/png', sizes: '512x512' }],
      shortcut: ['/icon.png'],
      apple: [{ url: '/apple-icon.png', sizes: '180x180' }]
    },
    openGraph: {
      type: 'website',
      siteName: name || undefined,
      locale: OG_LOCALE[locale],
      url: SITE.url,
      title: name,
      description: tagline,
      images: [{ url: '/og/home', width: 1200, height: 630, alt: name }]
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description: tagline,
      images: ['/og/home']
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
    }
  };
}

export default function LocaleLayout({
  children,
  params
}: Readonly<{ children: ReactNode; params: { locale: Locale } }>) {
  const { locale } = params;
  if (!LOCALES.includes(locale)) notFound();

  return (
    <html lang={HTML_LANG[locale]} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(personSchema(locale)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema(locale)) }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${sans.variable}`}
        suppressHydrationWarning
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          {ui(locale).skip}
        </a>
        <Header locale={locale} />
        <main id="content">{children}</main>
        <Footer locale={locale} />
        <Reveal />
      </body>
    </html>
  );
}
