import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is ready after route transition
    const timeoutId = setTimeout(() => {
      const scrollElements = document.querySelectorAll('.reveal-on-scroll');

      const observer = new IntersectionObserver((entries) => {
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
        observer.observe(el);
      });

      return () => {
        scrollElements.forEach(el => observer.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
};