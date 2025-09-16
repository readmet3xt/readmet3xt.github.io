import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

export const ImagePreloader = ({ images, priority = false }: ImagePreloaderProps) => {
  useEffect(() => {
    if (!priority && images.length > 3) {
      // For non-priority images, preload only the first few to avoid blocking
      return;
    }

    const preloadImages = images.slice(0, priority ? images.length : 3);
    
    preloadImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Cleanup function to remove preload links when component unmounts
    return () => {
      preloadImages.forEach((src) => {
        const existingLink = document.querySelector(`link[href="${src}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, [images, priority]);

  return null;
};

// Hook for programmatic image preloading
export const useImagePreloader = () => {
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  };

  const preloadImages = async (sources: string[]): Promise<void[]> => {
    return Promise.all(sources.map(preloadImage));
  };

  return { preloadImage, preloadImages };
};