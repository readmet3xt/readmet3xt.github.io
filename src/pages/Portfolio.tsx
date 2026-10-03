import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { WelcomeIntro } from '@/components/WelcomeIntro';
import { HeroStories } from '@/components/HeroStories';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { Recommendations } from '@/components/Recommendations';
import { ContactSection } from '@/components/ContactSection';

export const Portfolio = () => (
  <PageLayout>
    <SEO />
    <WelcomeIntro />
    <HeroStories />
    <HeroSection />
    <ProjectsGrid />
    <Recommendations variant="excerpts" />
    <ContactSection />
  </PageLayout>
);
