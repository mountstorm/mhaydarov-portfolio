import type { Metadata } from 'next';
import Home from '@/components/home/Home';
import { alternates } from '@/lib/site';
import type { Locale } from '@/lib/i18n';
import { IDENTITY, t } from '@/lib/content';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const { locale } = params;

  return {
    title: { absolute: IDENTITY.name },
    description: t(IDENTITY.tagline, locale),
    alternates: alternates(locale),
    openGraph: {
      title: IDENTITY.name,
      description: t(IDENTITY.tagline, locale),
      images: [{ url: '/og/home', width: 1200, height: 630, alt: IDENTITY.name }]
    }
  };
}

export default function Page({ params }: { params: { locale: Locale } }) {
  return <Home locale={params.locale} />;
}
