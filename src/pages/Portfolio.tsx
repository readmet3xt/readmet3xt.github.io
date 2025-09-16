import { memo, lazy, Suspense } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { useScrollReveal } from '@/components/ScrollReveal';

// Lazy load testimonials carousel for better performance  
const TestimonialsCarousel = lazy(() => import('@/components/TestimonialsCarousel').then(m => ({ default: m.TestimonialsCarousel })));

const Portfolio = memo(() => {
  useScrollReveal();

  return (
    <PageLayout className="max-w-7xl mx-auto w-full">
      <HeroSection />
      <ProjectsGrid />

      {/* Testimonials Section */}
      <section className="mb-16 lg:mb-20 reveal-on-scroll" aria-label="Client testimonials">
        <Suspense fallback={
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        }>
          <TestimonialsCarousel />
        </Suspense>
      </section>
    </PageLayout>
  );
});

Portfolio.displayName = 'Portfolio';

export { Portfolio };