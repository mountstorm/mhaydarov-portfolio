import type { Locale } from '@/lib/i18n';

/**
 * Everything the site says, in one file.
 *
 * Two rules for this file:
 *
 *  1. Nothing here is invented. Where a fact was not supplied it is an empty
 *     string, and the page renders a visible "To add" slot instead of filler.
 *     Do not put plausible-sounding placeholder prose in these fields — on a
 *     site whose whole argument is "measuring before believing", invented
 *     detail is the one unrecoverable mistake.
 *  2. `uz` and `ru` fall back to `en` when empty, so the site is never broken
 *     by a missing translation. Fill them in as they are written.
 */
export type LocalizedText = { en: string; uz?: string; ru?: string };

export const t = (text: LocalizedText | undefined, locale: Locale): string => {
  if (!text) return '';
  return (text[locale] ?? '').trim() || text.en.trim();
};

/** True when a slot still needs content in any language. */
export const isEmpty = (text: LocalizedText | undefined) => !text || !text.en.trim();

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const IDENTITY = {
  /** TODO: the site owner's name, as he writes it. */
  name: '',
  /** One line, under the name. The brief's example is kept as a model. */
  tagline: {
    en: 'Student researcher from Tashkent working at the intersection of history, languages, and maps.',
    uz: '',
    ru: ''
  } as LocalizedText,
  /** TODO: contact email. An email and nothing else — no phone, no address. */
  email: '',
  /** Optional portrait in /public. Leave empty to omit it entirely. */
  portrait: '',
  portraitAlt: { en: '' } as LocalizedText
};

/* ------------------------------------------------------------------ */
/* Research                                                            */
/* ------------------------------------------------------------------ */

export const RESEARCH = {
  title:
    'Measuring Before Believing: The Khwarazmian Origins of al-Biruni’s Comparative Method',
  /** TODO: 100–150 words, plain language. His words, not a summary of them. */
  abstract: { en: '', uz: '', ru: '' } as LocalizedText,
  process: {
    en: '14-month independent project; revised with guidance from Dr. Rahimjon Abdugafurov (Emory).',
    uz: '',
    ru: ''
  } as LocalizedText,
  /**
   * The Concord Review only accepts unpublished work, so while `underReview`
   * is true the site shows the abstract and nothing more. Set it to false and
   * add `pdf` once that is settled.
   */
  underReview: true,
  /** e.g. '/papers/measuring-before-believing.pdf' */
  pdf: ''
};

/* ------------------------------------------------------------------ */
/* Xarita                                                              */
/* ------------------------------------------------------------------ */

export const XARITA = {
  url: 'https://xarita-learn.online',
  /** TODO: two sentences on what it does. */
  what: { en: '', uz: '', ru: '' } as LocalizedText,
  /** TODO: his role specifically, with his brother credited as co-creator. */
  role: { en: '', uz: '', ru: '' } as LocalizedText,
  /**
   * TODO: real numbers only, matching the activities list exactly.
   * e.g. { value: '—', label: { en: 'students reached' } }
   */
  stats: [] as { value: string; label: LocalizedText }[],
  /** TODO: one quote from a teacher or organizer, if he can get one. */
  quote: { text: { en: '' } as LocalizedText, attribution: { en: '' } as LocalizedText },
  /** TODO: screenshots in /public. Old map over modern, year slider, language switch. */
  shots: [] as { src: string; alt: LocalizedText }[]
};

/* ------------------------------------------------------------------ */
/* Teaching & community — deliberately short. It supports the story.    */
/* ------------------------------------------------------------------ */

export const TEACHING = [
  {
    name: 'Tutash',
    gloss: { en: 'Intersection', uz: '', ru: '' } as LocalizedText,
    facts: ['32 sessions', '40 members'],
    /** TODO: one line on the Biruni-inspired format. */
    note: { en: '', uz: '', ru: '' } as LocalizedText
  },
  {
    name: 'English tutoring',
    gloss: { en: '' } as LocalizedText,
    facts: ['15 students'],
    /** TODO: the AREA method in one line. */
    note: { en: '', uz: '', ru: '' } as LocalizedText
  },
  {
    name: 'Student Body President',
    gloss: { en: '' } as LocalizedText,
    facts: [],
    /** TODO: one sentence. */
    note: { en: '', uz: '', ru: '' } as LocalizedText
  }
];

/* ------------------------------------------------------------------ */
/* Writing                                                             */
/* ------------------------------------------------------------------ */

export const WRITING = {
  about: {
    en: 'A novel in progress about a young police cadet, exploring redemption and the two sides of human nature.',
    uz: '',
    ru: ''
  } as LocalizedText,
  /** TODO: one polished excerpt, about a page. The strongest scene, not the opening. */
  excerpt: { en: '', uz: '', ru: '' } as LocalizedText,
  /** Optional scene label, e.g. 'From chapter four'. */
  excerptNote: { en: '' } as LocalizedText
};

/* ------------------------------------------------------------------ */
/* Music                                                               */
/* ------------------------------------------------------------------ */

export const MUSIC = {
  note: {
    en: 'I also perform publicly when I can, including in restaurants while traveling with my family.',
    uz: '',
    ru: ''
  } as LocalizedText,
  /**
   * TODO: two or three recordings. `url` can be a YouTube/SoundCloud link or a
   * file in /public; `embed` is an iframe src where one exists.
   */
  pieces: [] as { title: string; composer: string; url: string; embed?: string }[]
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  /** TODO: 80–120 words in his own voice — Tashkent, the encyclopedia, his
   *  four languages, what he wants to study. */
  bio: { en: '', uz: '', ru: '' } as LocalizedText
};
