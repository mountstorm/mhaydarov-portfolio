import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

/** Add a route here the moment it ships; the OG map in app/og keys off the same names. */
const routes: { path: string; priority: number }[] = [{ path: '', priority: 1 }];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority
  }));
}
