export const LOCALES = ['en', 'uz', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** English lives at the root; the other two get a prefix. */
export const localePath = (locale: Locale, path = '') =>
  locale === DEFAULT_LOCALE ? path || '/' : `/${locale}${path}`;

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  uz: 'UZ',
  ru: 'RU'
};

/** BCP-47 tags for <html lang> and hreflang. */
export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  uz: 'uz',
  ru: 'ru'
};

export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  uz: 'uz_UZ',
  ru: 'ru_RU'
};

/**
 * Interface strings only — section names, buttons, state labels. The
 * substantive content lives in content.ts, because it is his to write.
 *
 * The uz/ru strings here are a first pass and want a native read-through
 * before launch.
 */
export const UI = {
  en: {
    skip: 'Skip to content',
    nav: {
      research: 'Research',
      xarita: 'Xarita',
      community: 'Community',
      writing: 'Writing',
      music: 'Music'
    },
    sections: {
      research: 'Research',
      xarita: 'Xarita',
      community: 'Community',
      writing: 'Writing',
      music: 'Music',
      about: 'About & Contact'
    },
    abstract: 'Abstract',
    underReview: 'Under review',
    underReviewNote: 'Currently under review. Full paper available on request.',
    readPaper: 'Read the full paper',
    downloadPdf: 'Download the PDF',
    backHome: 'Back to the homepage',
    visitXarita: 'Visit xarita-learn.online',
    email: 'Email',
    language: 'Language',
    toAdd: 'To add',
    openXarita: 'Open Xarita',
    listen: 'Listen'
  },
  uz: {
    skip: 'Asosiy qismga o‘tish',
    nav: {
      research: 'Tadqiqot',
      xarita: 'Xarita',
      community: 'Jamoa',
      writing: 'Yozuvlar',
      music: 'Musiqa'
    },
    sections: {
      research: 'Tadqiqot',
      xarita: 'Xarita',
      community: 'Jamoa',
      writing: 'Yozuvlar',
      music: 'Musiqa',
      about: 'Men haqimda va aloqa'
    },
    abstract: 'Annotatsiya',
    underReview: 'Ko‘rib chiqilmoqda',
    underReviewNote:
      'Hozirda ko‘rib chiqilmoqda. To‘liq maqolani so‘rov asosida olish mumkin.',
    readPaper: 'To‘liq maqolani o‘qish',
    downloadPdf: 'PDF yuklab olish',
    backHome: 'Bosh sahifaga qaytish',
    visitXarita: 'xarita-learn.online saytiga o‘tish',
    email: 'Elektron pochta',
    language: 'Til',
    toAdd: 'Qo‘shilishi kerak',
    openXarita: 'Xarita’ni ochish',
    listen: 'Tinglash'
  },
  ru: {
    skip: 'Перейти к содержанию',
    nav: {
      research: 'Исследование',
      xarita: 'Xarita',
      community: 'Сообщество',
      writing: 'Проза',
      music: 'Музыка'
    },
    sections: {
      research: 'Исследование',
      xarita: 'Xarita',
      community: 'Сообщество',
      writing: 'Проза',
      music: 'Музыка',
      about: 'Обо мне и контакты'
    },
    abstract: 'Аннотация',
    underReview: 'На рассмотрении',
    underReviewNote:
      'Сейчас на рассмотрении. Полный текст доступен по запросу.',
    readPaper: 'Читать полную работу',
    downloadPdf: 'Скачать PDF',
    backHome: 'Вернуться на главную',
    visitXarita: 'Перейти на xarita-learn.online',
    email: 'Электронная почта',
    language: 'Язык',
    toAdd: 'Добавить',
    openXarita: 'Открыть Xarita',
    listen: 'Слушать'
  }
} as const;

export const ui = (locale: Locale) => UI[locale];
