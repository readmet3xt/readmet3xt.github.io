import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PresentationModalProps {
  open: boolean;
  onClose: () => void;
  /** URL of the interactive HTML deck (served from public/). */
  src: string;
  title?: string;
}

export const PresentationModal = ({ open, onClose, src, title = 'Presentation' }: PresentationModalProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // On a portrait phone the landscape deck is tiny, so we rotate the whole stage
  // (deck + controls) 90° to fill the screen and read it in landscape.
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px) and (orientation: portrait)');
    const update = () => setRotated(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Drive the deck's own slide navigation by replaying arrow keys into its iframe.
  const sendKey = useCallback((key: string) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    try {
      win.document.dispatchEvent(new win.KeyboardEvent('keydown', { key, code: key, bubbles: true }));
    } catch {
      /* deck not ready yet — ignore */
    }
  }, []);

  // Parent-level keys: Esc closes; arrows forward to the deck (when focus is
  // inside the iframe the deck handles its own arrows natively).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') sendKey('ArrowRight');
      else if (e.key === 'ArrowLeft') sendKey('ArrowLeft');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, sendKey]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

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
        >
          {/* Stage — rotates to a landscape frame on portrait phones so the deck
              and its controls share one orientation. */}
          <div
            className="absolute left-1/2 top-1/2"
            style={
              rotated
                ? { width: '100vh', height: '100vw', transform: 'translate(-50%, -50%) rotate(90deg)' }
                : { width: '100%', height: '100%', transform: 'translate(-50%, -50%)' }
            }
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              ref={iframeRef}
              src={src}
              title={title}
              className="w-full h-full border-0 bg-black"
              allow="fullscreen; autoplay"
            />

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 text-white/80 flex items-center justify-center hover:text-white bg-black/60 rounded-full p-2"
              aria-label="Close presentation"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev slide */}
            <button
              onClick={() => sendKey('ArrowLeft')}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-black/60 rounded-full p-2"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next slide */}
            <button
              onClick={() => sendKey('ArrowRight')}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-black/60 rounded-full p-2"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
