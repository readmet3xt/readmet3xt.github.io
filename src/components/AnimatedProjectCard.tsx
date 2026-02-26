import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
}

// Create motion-enabled Link component (Framer Motion v11+ syntax)
const MotionLink = motion.create(Link);

export const AnimatedProjectCard = ({ href, title, description, images, className = "", summary, tags }: AnimatedProjectCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isOpen } = useSidebar();
  const isMobile = useIsMobile();

  // Use optimized hover effect hook
  useCardHoverEffect(cardRef, {
    maxRotation: 10,
    transitionDuration: 100,
  });

  // Auto-animate between images with preloading
  useEffect(() => {
    if (images.length <= 1) return;

    // Preload next image for smooth transitions
    const preloadNextImage = () => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      const img = new Image();
      img.src = images[nextIndex];
    };

    preloadNextImage();

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length, currentImageIndex, images]);

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
      <div className={cn(
        "relative w-full flex-shrink-0 overflow-hidden transition-all duration-300",
        isOpen ? "h-48 sm:h-52" : "h-40 sm:h-44"
      )}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} project preview ${index + 1} of ${images.length}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            loading="lazy"
          />
        ))}
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