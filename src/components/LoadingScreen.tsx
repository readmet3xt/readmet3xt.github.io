import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show for exactly 2 seconds as requested
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade animation to complete before calling onComplete
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-bg-primary z-[9999] flex items-center justify-center"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <DotLottieReact
              src="https://lottie.host/1f8a0262-d200-4867-b5ac-bdf971f4101b/bY8i1cKMl0.lottie"
              loop
              autoplay
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
