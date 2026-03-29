import { memo, lazy, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsGrid } from '@/components/ProjectsGrid';
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

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let accumulatedDelta = 0;
    let lockUntil = 0;
    let resetTimer: number | null = null;

    const THRESHOLD = 90;
    const LOCK_MS = 850;
    const ACCUMULATION_RESET_MS = 140;

    const getSnapTargets = () => Array.from(document.querySelectorAll<HTMLElement>('[data-work-snap="true"]'));

    const getClosestIndex = (tops: number[], currentY: number) => {
      let currentIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      tops.forEach((top, i) => {
        const distance = Math.abs(top - currentY);
        if (distance < minDistance) {
          minDistance = distance;
          currentIndex = i;
        }
      });

      return currentIndex;
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;
      e.preventDefault();

      const now = Date.now();
      if (now < lockUntil) return;

      if (Math.abs(e.deltaY) < 2) return;
      accumulatedDelta += e.deltaY;

      if (resetTimer !== null) {
        window.clearTimeout(resetTimer);
      }
      resetTimer = window.setTimeout(() => {
        accumulatedDelta = 0;
      }, ACCUMULATION_RESET_MS);

      if (Math.abs(accumulatedDelta) < THRESHOLD) return;

      const direction = accumulatedDelta > 0 ? 1 : -1;
      accumulatedDelta = 0;

      const targets = getSnapTargets();
      if (targets.length < 2) return;

      const currentY = window.scrollY;
      const tops = targets.map((el) => el.getBoundingClientRect().top + window.scrollY);
      const currentIndex = getClosestIndex(tops, currentY);
      const targetIndex = Math.max(0, Math.min(tops.length - 1, currentIndex + direction));

      if (targetIndex === currentIndex) return;

      lockUntil = now + LOCK_MS;
      targets[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (resetTimer !== null) {
        window.clearTimeout(resetTimer);
      }
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
    </PageLayout>
  );
});

Portfolio.displayName = 'Portfolio';