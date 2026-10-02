import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { Recommendations } from '@/components/Recommendations';
import { ContactSection } from '@/components/ContactSection';

export const Portfolio = () => (
  <PageLayout>
    <SEO />
    <HeroSection />
    <ProjectsGrid />
    <Recommendations variant="excerpts" />
    <ContactSection />
  </PageLayout>
);
