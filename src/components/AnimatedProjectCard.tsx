import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
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
  pill?: 'ongoing' | 'launched';
  brandColor?: string; // Accent color of the case study
}

// Frosted status pills — same language as the cinematic stack
const PILL_STYLES = {
  ongoing: {
    label: 'Ongoing',
    dot: 'bg-amber-400',
    ping: true,
  },
  launched: {
    label: 'Launched',
    dot: 'bg-emerald-400',
    ping: false,
  },
} as const;

// Ken Burns + crossfade: the active image slowly zooms/pans to stay alive
// between changes, and dissolves into the next one. Calm across a grid of
// many cards advancing at once, unlike directional motion.
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const kenBurnsVariants = {
  enter: {
    opacity: 0,
    scale: prefersReducedMotion ? 1 : 1.04,
  },
  center: {
    opacity: 1,
    // Slow drift across the 5s the image is on screen
    scale: prefersReducedMotion ? 1 : 1.1,
    transition: {
      opacity: { duration: 0.9, ease: 'easeInOut' },
      scale: { duration: 6, ease: 'linear' },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.9, ease: 'easeInOut' },
    },
  },
};

export const AnimatedProjectCard = ({ 
  href, 
  title, 
  description, 
  images, 
  className = "", 
  summary, 
  tags, 
  index = 0, 
  pill,
  brandColor
}: AnimatedProjectCardProps) => {
  const pillStyle = pill ? PILL_STYLES[pill] : null;

  const cardRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen } = useSidebar();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const controls = useAnimation();
  const isNavigating = useRef(false);

  const themeColor = brandColor || '#ff4757';

  // Use optimized hover effect hook — restrained tilt
  useCardHoverEffect(cardRef, {
    maxRotation: 4,
    transitionDuration: 100,
  });

  // Preload all images on mount
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Advance to the next image (still in order, so every image gets shown)
  const advanceImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Randomized timing: a random start offset, then a jittered gap before each
  // change. Cards never advance in a wave or in lockstep — the grid feels alive.
  useEffect(() => {
    if (images.length <= 1) return;

    let timer: NodeJS.Timeout;
    // Jittered gap: 4–7s
    const nextGap = () => 4000 + Math.random() * 3000;

    const schedule = (delay: number) => {
      timer = setTimeout(() => {
        advanceImage();
        schedule(nextGap());
      }, delay);
    };

    // Random initial offset (0–5s) so cards start out of phase with each other
    schedule(Math.random() * 5000);

    return () => clearTimeout(timer);
  }, [images.length, advanceImage]);

  const handleClick = useCallback(async (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (isNavigating.current) return;
    isNavigating.current = true;

    // Play press-down animation with custom brand shadow glow
    await controls.start({
      scale: 0.96,
      boxShadow: `0 0 60px ${themeColor}66`,
      transition: { duration: 0.12, ease: "easeOut" },
    });

    // Brief hold so user sees the press
    await new Promise(resolve => setTimeout(resolve, 80));

    // Navigate
    navigate(href);
  }, [controls, navigate, href, themeColor]);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "project-card rounded-xl overflow-hidden group bg-card block flex flex-col w-full max-w-full cursor-pointer shadow-none transition-all duration-300",
        className
      )}
      role="link"
      tabIndex={0}
      aria-label={`View ${title} project details`}
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(e as unknown as React.MouseEvent); }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      animate={controls}
      whileHover={{
        boxShadow: `0 24px 60px -24px ${themeColor}40`,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{
        scale: 0.96,
        boxShadow: `0 0 60px ${themeColor}66`,
        transition: { duration: 0.12, ease: "easeOut" }
      }}
    >
      {/* Image carousel — cascading top-to-bottom reveal, no controls */}
      <div
        className={cn(
          "relative w-full aspect-[2/1] flex-shrink-0 overflow-hidden bg-card transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        )}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${title} project preview ${currentImageIndex + 1} of ${images.length}`}
            className="absolute inset-0 w-full h-full object-cover object-top"
            variants={kenBurnsVariants}
            initial="enter"
            animate="center"
            exit="exit"
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-1">
            <h3 className="text-xl sm:text-xl font-bold font-dm-sans text-foreground break-words">{title}</h3>
            {pillStyle && (
              <div className="flex-shrink-0 mt-1 flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/[0.05] border border-foreground/10 backdrop-blur-md">
                <span className="relative flex w-1.5 h-1.5">
                  {pillStyle.ping && (
                    <span className={`absolute inline-flex h-full w-full rounded-full ${pillStyle.dot} opacity-60 animate-ping`} />
                  )}
                  <span className={`relative inline-flex w-1.5 h-1.5 rounded-full ${pillStyle.dot}`} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-primary leading-none">
                  {pillStyle.label}
                </span>
              </div>
            )}
          </div>
          <p className="text-base sm:text-base mt-0.5 text-text-secondary break-words">{description}</p>
          {summary && (
            <p className="text-sm sm:text-sm mt-2 text-text-secondary/80 leading-relaxed line-clamp-2 break-words">{summary}</p>
          )}
        </div>
        <div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3" role="list" aria-label={`${title} project tags`}>
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-text-primary rounded-full border break-words"
                  style={{
                    backgroundColor: `${themeColor}14`,
                    borderColor: `${themeColor}30`,
                  }}
                  role="listitem"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className={cn(
            "flex items-center gap-1.5 pt-4 mt-3 border-t border-foreground/[0.15]",
            !(tags && tags.length > 0) && "mt-auto"
          )}>
            <span className="font-ibm-plex-mono text-[11px] uppercase tracking-widest text-text-tertiary group-hover:text-accent-primary transition-colors duration-300">
              View case study
            </span>
            <svg
              className="w-3.5 h-3.5 text-text-tertiary group-hover:text-accent-primary transition-all duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};