import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCardHoverEffect } from '@/hooks/useCardHoverEffect';
import { useSidebar } from '@/components/SidebarContext';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface AnimatedProjectCardProps {
  href: string;
  title: string;
  description: string;
  images: string[]; // Array of image paths
  className?: string;
  summary?: string;
  tags?: string[];
  index?: number;
}

// Create motion-enabled Link component (Framer Motion v11+ syntax)
const MotionLink = motion.create(Link);

// Cascading top-to-bottom flip: the image flips down from the top edge
// like a panel hinged at the top, revealing the new image underneath
const flipVariants = {
  enter: {
    clipPath: 'inset(0 0 100% 0)',
    opacity: 1,
  },
  center: {
    clipPath: 'inset(0 0 0% 0)',
    opacity: 1,
    transition: {
      clipPath: {
        duration: 0.35,
      },
      opacity: { duration: 0.2 },
    },
  },
  exit: {
    clipPath: 'inset(0 0 0% 0)',
    opacity: 0,
    transition: {
      opacity: { duration: 0.25, delay: 0.2 },
    },
  },
};

export const AnimatedProjectCard = ({ href, title, description, images, className = "", summary, tags, index = 0 }: AnimatedProjectCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isOpen } = useSidebar();
  const isMobile = useIsMobile();

  // Use optimized hover effect hook
  useCardHoverEffect(cardRef, {
    maxRotation: 10,
    transitionDuration: 100,
  });

  // Preload all images on mount
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Auto-advance every 5 seconds, staggered by card index
  const advanceImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;

    // Stagger the start time by 600ms per card to create a top-to-bottom wave
    const staggerDelay = index * 600;
    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      interval = setInterval(advanceImage, 5000);
    }, staggerDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [images.length, advanceImage, index]);

  return (
    <MotionLink
      ref={cardRef}
      to={href}
      className={cn(
        "project-card rounded-xl overflow-hidden group bg-card block flex flex-col w-full max-w-full transition-all duration-300 shadow-none hover:shadow-[0_0_50px_rgba(255,71,87,0.4)]",
        isOpen ? "min-h-[340px]" : "min-h-[300px]",
        className
      )}
      aria-label={`View ${title} project details`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{
        scale: 0.98,
        boxShadow: isMobile ? "0 0 60px rgba(255, 71, 87, 0.6)" : "none",
        transition: { duration: 0.1 }
      }}
    >
      {/* Image carousel — cascading top-to-bottom reveal, no controls */}
      <div
        className={cn(
          "relative w-full flex-shrink-0 overflow-hidden transition-all duration-300 bg-card",
          isOpen ? "h-48 sm:h-52" : "h-40 sm:h-44"
        )}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${title} project preview ${currentImageIndex + 1} of ${images.length}`}
            className="absolute inset-0 w-full h-full object-cover object-top"
            variants={flipVariants}
            initial="enter"
            animate="center"
            exit="exit"
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-2xl sm:text-2xl font-bold font-dm-sans text-foreground break-words">{title}</h3>
        <p className="text-lg sm:text-lg mt-1 text-text-secondary break-words">{description}</p>
        {summary && (
          <p className="text-base sm:text-base mt-3 text-text-secondary/80 leading-relaxed flex-1 break-words">{summary}</p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3" role="list" aria-label={`${title} project tags`}>
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-sm bg-accent-primary/10 text-accent-primary rounded break-words"
                role="listitem"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </MotionLink>
  );
};