import { memo, lazy, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { ContactSection } from '@/components/ContactSection';
import { useScrollReveal } from '@/components/ScrollReveal';

// Lazy load testimonials carousel for better performance  
const TestimonialsCarousel = lazy(() => import('@/components/TestimonialsCarousel').then(m => ({ default: m.TestimonialsCarousel })));

export const Portfolio = memo(() => {
  useScrollReveal();

  useEffect(() => {
    document.documentElement.classList.add('work-scroll-snap');
    document.body.classList.add('work-scroll-snap');

    return () => {
      document.documentElement.classList.remove('work-scroll-snap');
      document.body.classList.remove('work-scroll-snap');
    };
  }, []);

  return (
    <PageLayout className="max-w-7xl mx-auto w-full">
      <div className="snap-start snap-always" data-work-snap="true">
        <HeroSection />
      </div>

      <div className="snap-start snap-always pt-8 sm:pt-10 lg:pt-12" data-work-snap="true">
        <ProjectsGrid />
      </div>

      {/* Testimonials Section */}
      <section className="mb-16 lg:mb-20 reveal-on-scroll snap-start snap-always" aria-label="Client testimonials" data-work-snap="true">
        <Suspense fallback={
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        }>
          <TestimonialsCarousel />
        </Suspense>
      </section>

      {/* Contact Section */}
      <section className="mb-16 lg:mb-20 snap-start snap-always" aria-label="Contact" data-work-snap="true">
        <ContactSection />
      </section>
    </PageLayout>
  );
});

Portfolio.displayName = 'Portfolio';