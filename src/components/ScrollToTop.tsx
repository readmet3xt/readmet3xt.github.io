import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try to scroll immediately
      if (!scrollToElement()) {
        // Retry after page animations/mounting delays
        setTimeout(scrollToElement, 100);
        setTimeout(scrollToElement, 500);
      }
    } else {
      // Scroll to top on route change if no hash
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Use 'auto' for instant scroll to avoid delays
      });
    }
  }, [pathname, hash]);

  return null;
};