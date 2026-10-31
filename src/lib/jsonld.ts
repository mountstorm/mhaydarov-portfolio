import { SITE, abs } from '@/lib/site';

/** Person graph. Claims only what is verifiable; no subject matter asserted yet. */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  homeLocation: { '@type': 'Place', name: SITE.location },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Mississippi',
    sameAs: 'https://olemiss.edu'
  },
  sameAs: [SITE.github, SITE.linkedin]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.shortName,
  url: SITE.url,
  description: SITE.description,
  inLanguage: 'en',
  author: { '@type': 'Person', name: SITE.name, url: SITE.url }
};

/** Renders a JSON-LD block. Kept in one place so escaping is handled once. */
export const jsonLd = (schema: unknown) => JSON.stringify(schema).replace(/</g, '\\u003c');

export { abs };
