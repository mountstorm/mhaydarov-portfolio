import { localePath, ui, type Locale } from '@/lib/i18n';

/** The buttons from the brief, as anchors into the single scrolling page. */
export function navItems(locale: Locale) {
  const copy = ui(locale);
  const home = localePath(locale);
  const at = (hash: string) => `${home === '/' ? '' : home}/#${hash}`.replace('//#', '/#');

  return [
    { href: at('research'), label: copy.nav.research },
    { href: at('xarita'), label: copy.nav.xarita },
    { href: at('community'), label: copy.nav.community },
    { href: at('writing'), label: copy.nav.writing },
    { href: at('music'), label: copy.nav.music }
  ];
}
