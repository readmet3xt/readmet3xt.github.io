import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { WelcomeIntro } from '@/components/WelcomeIntro';
import { HeroStories, STORIES_KEY, type StoriesDone } from '@/components/HeroStories';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { Recommendations } from '@/components/Recommendations';
import { ContactSection } from '@/components/ContactSection';
import { useSitePrefs } from '@/lib/sitePrefs';

const storiesPlayed = () => {
  try {
    return !!localStorage.getItem(STORIES_KEY);
  } catch {
    return true;
  }
};

export const Portfolio = () => {
  const { motion } = useSitePrefs();
  const location = useLocation();
  const replay = !!(location.state as { replayIntro?: boolean } | null)?.replayIntro;
  // The stories play once per visitor; after that the intro sits on top.
  const [showStories, setShowStories] = useState(() => replay || !storiesPlayed());
  const scrollBack = useRef(0);

  useEffect(() => {
    const again = () => setShowStories(true);
    window.addEventListener('replay-intro', again);
    return () => window.removeEventListener('replay-intro', again);
  }, []);

  // When the stories are removed above the reader, keep the page still under them.
  useLayoutEffect(() => {
    if (!showStories && scrollBack.current) {
      window.scrollBy(0, -scrollBack.current);
      scrollBack.current = 0;
    }
  }, [showStories]);

  const onDone = ({ scrollBack: by }: StoriesDone) => {
    scrollBack.current = by;
    setShowStories(false);
  };

  const stories = showStories && motion;

  return (
    <PageLayout>
      <SEO />
      <WelcomeIntro />
      {stories && <HeroStories onDone={onDone} />}
      <HeroSection first={!stories} />
      <ProjectsGrid />
      <Recommendations />
      <ContactSection />
    </PageLayout>
  );
};
