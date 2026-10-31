/**
 * Single source of truth for site-wide constants. Everything that needs the
 * canonical origin (metadata, sitemap, robots, JSON-LD, OG images) reads it
 * from here so there is exactly one place to change when the domain lands.
 */

/** Production origin. Set NEXT_PUBLIC_SITE_URL once a custom domain is attached. */
const url =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://mhaydarov-portfolio.vercel.app';

export const SITE = {
  url,
  name: 'Muzaffar Khaydarov',
  shortName: 'M. Haydarov',
  // TODO: title, description and theme are placeholders until the history
  // direction is set. Nothing below claims a subject or a thesis.
  title: 'Muzaffar Khaydarov',
  description: 'A personal site about history. Currently being written.',
  email: 'mkhaydar@go.olemiss.edu',
  github: 'https://github.com/mountstorm',
  linkedin: 'https://www.linkedin.com/in/muzaffar-',
  location: 'Oxford, MS',
  locale: 'en_US'
} as const;

/** Absolute URL for a site-relative path. */
export const abs = (path: string) => new URL(path, SITE.url).toString();
