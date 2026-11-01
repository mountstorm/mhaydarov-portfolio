import Hero from '@/components/home/Hero';
import ResearchSection from '@/components/home/ResearchSection';
import XaritaSection from '@/components/home/XaritaSection';
import CommunitySection from '@/components/home/CommunitySection';
import WritingSection from '@/components/home/WritingSection';
import MusicSection from '@/components/home/MusicSection';
import AboutSection from '@/components/home/AboutSection';
import type { Locale } from '@/lib/i18n';

/**
 * One scrolling page, in the order the brief sets out. Readers should not have
 * to hunt through menus, so everything except the full paper lives here.
 */
export default function Home({ locale }: { locale: Locale }) {
  return (
    <div className="wrap">
      <Hero locale={locale} />
      <ResearchSection locale={locale} />
      <XaritaSection locale={locale} />
      <CommunitySection locale={locale} />
      <WritingSection locale={locale} />
      <MusicSection locale={locale} />
      <AboutSection locale={locale} />
    </div>
  );
}
