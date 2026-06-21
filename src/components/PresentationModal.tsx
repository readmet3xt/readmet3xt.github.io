import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PresentationModalProps {
  open: boolean;
  onClose: () => void;
  slides: string[];
  title?: string;
}

const slideVariants = {
  enter: (d: number) => ({ opacity: 0, scale: 0.98, x: d * 60 }),
  center: { opacity: 1, scale: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, scale: 0.98, x: d * -60 }),
};

export const PresentationModal = ({ open, onClose, slides, title = 'Presentation' }: PresentationModalProps) => {
  const [index, setIndex] = useState(0);
  // +1 forward, -1 back — drives the slide-in direction of the cross-fade.
  const [direction, setDirection] = useState(0);
  // On a portrait phone the landscape slides are tiny when fit normally, so we
  // rotate them 90° to fill the screen — the user reads them in landscape
  // without having to physically rotate the device.
  const [rotated, setRotated] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px) and (orientation: portrait)');
    const update = () => setRotated(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const total = slides.length;
  const atFirst = index === 0;
  const atLast = index === total - 1;

  // Always start from the first slide when the deck is (re)opened.
  useEffect(() => {
    if (open) {
      setIndex(0);
      setDirection(0);
    }
  }, [open]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i < total - 1 ? i + 1 : i));
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i > 0 ? i - 1 : i));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose, next, prev]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Warm the neighbouring slides so left/right feels instant
  useEffect(() => {
    if (!open) return;
    [index - 1, index + 1].forEach((i) => {
      if (i >= 0 && i < total) {
        const img = new Image();
        img.src = slides[i];
      }
    });
  }, [open, index, slides, total]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Stage — on a portrait phone this becomes a rotated landscape frame, so
              the slide AND its controls share one orientation (the buttons rotate
              with the deck instead of staying upright in portrait). */}
          <div
            className="absolute left-1/2 top-1/2 flex items-center justify-center"
            style={
              rotated
                ? { width: '100vh', height: '100vw', transform: 'translate(-50%, -50%) rotate(90deg)' }
                : { width: '100%', height: '100%', transform: 'translate(-50%, -50%)' }
            }
          >
            {/* Close */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 text-white/70 flex items-center justify-center hover:text-white bg-black/50 rounded-full z-50 p-2"
              aria-label="Close presentation"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev */}
            {!atFirst && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 rounded-full z-50 p-2"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {/* Next */}
            {!atLast && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 rounded-full z-50 p-2"
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Slide */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={index}
                src={slides[index]}
                alt={`${title} — slide ${index + 1} of ${total}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                className={`rounded-md shadow-2xl object-contain ${rotated ? 'max-w-full max-h-full' : 'max-w-[92vw] max-h-[88vh]'}`}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>

            {/* Slide counter */}
            <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 text-center text-white/70 text-sm font-medium pointer-events-none">
              {index + 1} / {total}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
