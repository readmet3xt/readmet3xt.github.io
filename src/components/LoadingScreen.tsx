import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Optimized loading - check for critical resources
    const checkCriticalResources = () => {
      // Check if fonts are loaded
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          setIsVisible(false);
          setTimeout(onComplete, 200);
        });
      } else {
        // Fallback timer for browsers without font loading API
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 200);
        }, 600);
      }
    };

    // Small delay to allow initial render
    const timer = setTimeout(checkCriticalResources, 100);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
        <div className="w-8 h-8 border-2 border-accent rounded-full border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent rounded-full border-t-transparent animate-spin" />
    </div>
  );
};