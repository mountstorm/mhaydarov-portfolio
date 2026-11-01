import type { Locale } from '@/lib/i18n';

/**
 * Everything the site says, in one file.
 *
 * Two rules for this file:
 *
 *  1. Nothing here is invented. Where a fact was not supplied it is an empty
 *     string and the page renders a visible "To add" slot instead of filler.
 *     On a site whose argument is "measuring before believing", invented
 *     detail is the one unrecoverable mistake.
 *  2. `uz` and `ru` fall back to `en` when empty, so a missing translation can
 *     never break a page. Fill them in as they are written, and keep them
 *     consistent with the English.
 */
export type LocalizedText = { en: string; uz?: string; ru?: string };

export const t = (text: LocalizedText | undefined, locale: Locale): string => {
  if (!text) return '';
  return (text[locale] ?? '').trim() || text.en.trim();
};

/** True when a slot still needs content. */
export const isEmpty = (text: LocalizedText | undefined) => !text || !text.en.trim();

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const IDENTITY = {
  /**
   * Passport / Common App spelling, used everywhere — resume, site,
   * application. Note the resume reads "Muhammad Sodik Khaydarov" while an
   * earlier draft had "Muhammadsodik"; this is the spelling to standardise on.
   */
  name: 'Muhammad Sodik Khaydarov',
  tagline: {
    en: 'Student researcher from Tashkent, working where history, languages, and maps meet.',
    uz: '',
    ru: ''
  } as LocalizedText,
  /** Contact is an email and nothing else — no phone, no address, no schedule. */
  email: 'muhammadsodiqx2009@gmail.com',
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
  meta: {
    en: 'Independent research, August 2025 – October 2026 · ~5,500 words',
    uz: '',
    ru: ''
  } as LocalizedText,
  abstract: {
    en: 'Al-Biruni’s Kitab al-Hind is admired for describing Indian religion and science through Indian sources before judging them. This paper asks where that method came from. It argues that Biruni’s approach formed earlier, in Khwarazm, a frontier region where trade routes, calendars, and faiths met, and that it is already visible in his Chronology of Ancient Nations. There, he compared the calendars of many peoples, tested oral testimony, and refused to describe the Indian calendar because he had no reliable informants. Kitab al-Hind shows what he did once he gained that access. The paper also weighs other influences, including Greek science, exile, and court patronage.',
    uz: '',
    ru: ''
  } as LocalizedText,
  mentor: {
    en: 'Mentored by Dr. Rahimjon Abdugafurov, Emory University.',
    uz: '',
    ru: ''
  } as LocalizedText,
  /**
   * The Concord Review only accepts unpublished work, so while this is true
   * the site shows the abstract and "available on request" and nothing more.
   * Set to false and fill in `pdf` if he is not submitting there.
   */
  underReview: true,
  /** e.g. '/papers/measuring-before-believing.pdf' */
  pdf: ''
};

/* ------------------------------------------------------------------ */
/* Xarita                                                              */
/* ------------------------------------------------------------------ */

export const XARITA = {
  url: 'https://xarita-learn.online/',
  title: { en: 'Xarita: Old Maps Atlas', uz: '', ru: '' } as LocalizedText,
  what: {
    en: 'Xarita means “map” in Uzbek. It’s an interactive atlas where you slide through history with year-accurate borders, then lay scanned historical maps from libraries such as the Library of Congress over today’s map. It works in English, Uzbek, and Russian, and includes guided tours for students.',
    uz: '',
    ru: ''
  } as LocalizedText,
  role: {
    en: 'I co-created Xarita with my brother, Muzaffar Khaydarov, who built the code. I sourced the maps, researched historical borders, and wrote the tours.',
    uz: '',
    ru: ''
  } as LocalizedText,
  /**
   * Only numbers that are settled. The draft offered "5 organizations" or
   * "10 history teachers" as alternatives — that one is still undecided, so it
   * is not here. Every number must match the resume and the Common App.
   */
  stats: [{ value: '150+', label: { en: 'users', uz: '', ru: '' } as LocalizedText }] as {
    value: string;
    label: LocalizedText;
  }[],
  /** TODO: decide between "5 organizations" and "10 history teachers", then add it. */
  reach: { en: '', uz: '', ru: '' } as LocalizedText,
  /** TODO: one quote from a teacher or organizer, if he can get one. */
  quote: { text: { en: '' } as LocalizedText, attribution: { en: '' } as LocalizedText },
  /** TODO: screenshots in /public. Old map over modern, year slider, language switch. */
  shots: [] as { src: string; alt: LocalizedText }[]
};

/* ------------------------------------------------------------------ */
/* Community — short by design. It supports the story, it isn't it.     */
/* ------------------------------------------------------------------ */

export const COMMUNITY = [
  {
    name: 'Tutash',
    gloss: { en: 'Intersection', uz: '', ru: '' } as LocalizedText,
    role: { en: 'Founder & President', uz: '', ru: '' } as LocalizedText,
    dates: 'Sep 2025 – present',
    body: {
      en: 'A club at my lyceum where students teach each other what they know, from robotics to chess gambits. We follow one rule borrowed from al-Biruni: let each speaker explain fully before anyone judges. 32 sessions, 40 members.',
      uz: '',
      ru: ''
    } as LocalizedText
  },
  {
    name: 'English Tutoring',
    gloss: { en: '' } as LocalizedText,
    role: { en: '' } as LocalizedText,
    dates: 'Aug 2024 – May 2026',
    body: {
      en: 'I tutored 15 students preparing for the IELTS. I learned that no two students need the same method. Some needed memory techniques, others a structure for speaking, like AREA (Answer, Reason, Example, Alternative).',
      uz: '',
      ru: ''
    } as LocalizedText
  },
  {
    name: 'Student Body President',
    gloss: { en: '' } as LocalizedText,
    role: { en: '' } as LocalizedText,
    dates: 'Sep 2023 – May 2025',
    body: {
      en: 'Led a 6-member council at State Specialized School No. 9, organized 12 school events, and launched peer tutoring that reached 90+ students.',
      uz: '',
      ru: ''
    } as LocalizedText
  },
  {
    name: 'Zakovat',
    gloss: { en: '' } as LocalizedText,
    role: { en: 'Captain', uz: '', ru: '' } as LocalizedText,
    dates: '',
    body: {
      en: 'Led my team to 6 inter-school wins in Uzbekistan’s team quiz game.',
      uz: '',
      ru: ''
    } as LocalizedText
  }
];

/* ------------------------------------------------------------------ */
/* Writing                                                             */
/* ------------------------------------------------------------------ */

export const WRITING = {
  title: 'Flesh and Bones',
  titleNote: { en: 'novel in progress', uz: '', ru: '' } as LocalizedText,
  about: {
    en: 'A novel about a young police cadet on a coastal island, exploring redemption and the two sides of human nature.',
    uz: '',
    ru: ''
  } as LocalizedText,
  /**
   * TODO: one polished excerpt, about a page — the strongest scene, not the
   * opening. Translated idioms want a pass first (e.g. "as clearly as the palm
   * of one's hand"). Separate paragraphs with a blank line.
   */
  excerpt: { en: '', uz: '', ru: '' } as LocalizedText,
  excerptNote: { en: '' } as LocalizedText
};

/* ------------------------------------------------------------------ */
/* Music                                                               */
/* ------------------------------------------------------------------ */

export const MUSIC = {
  note: {
    en: 'I play piano for joy and to unwind, and I perform whenever I can, including in restaurants while traveling with my family.',
    uz: '',
    ru: ''
  } as LocalizedText,
  /**
   * The pieces are settled; the recordings are not. Add `url` (a link, or a
   * file in /public) or `embed` (an iframe src) and the card becomes playable.
   */
  pieces: [
    { title: 'Amélie', composer: 'Yann Tiersen', url: '', embed: '' },
    { title: 'Swan Lake', composer: 'Pyotr Ilyich Tchaikovsky', url: '', embed: '' },
    { title: 'Moonlight Sonata', composer: 'Ludwig van Beethoven', url: '', embed: '' }
  ] as { title: string; composer: string; url: string; embed?: string }[]
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  /** Deliberately tells the story differently from his college essays. */
  bio: {
    en: 'I grew up in Tashkent, Uzbekistan, a city that has sat at the crossroads of empires, languages, and faiths for more than two thousand years. At eleven, a neighbor gave me my first encyclopedia, and I filled stacks of paper with medieval helmets, extinct animals, and the years when distant histories collided.\n\nThat habit became research. I study how Central Asian scholars understood other cultures, especially al-Biruni, who insisted on learning from a people’s own texts before judging them. With my brother, I built Xarita, a trilingual atlas that lets anyone lay old maps over today’s world.\n\nI speak Uzbek and Russian at home, English fluently, and I read Arabic. I’m interested in history, comparative literature, and the digital tools that open archives to everyone.',
    uz: '',
    ru: ''
  } as LocalizedText
};
