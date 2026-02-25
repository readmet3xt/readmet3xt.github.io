import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let isMounted = true;
    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    // Small delay to ensure DOM is ready after route transition
    timeoutId = setTimeout(() => {
      if (!isMounted) return;

      const scrollElements = document.querySelectorAll('.reveal-on-scroll');
      if (scrollElements.length === 0) return;

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it enters view
      });

      scrollElements.forEach(el => {
        // If already visible (e.g. at the top of page), add class immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('is-visible');
        }
        if (observer) observer.observe(el);
      });
    }, 100);

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, [pathname]);
};