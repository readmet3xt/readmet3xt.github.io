import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Loader2, PanelLeftOpen, PanelLeftClose } from 'lucide-react';

interface PresentationModalProps {
  open: boolean;
  onClose: () => void;
  /** URL of the interactive HTML deck (served from public/). */
  src: string;
  /** Narration audio for the full deck. */
  audioUrl: string;
  /** Start time (seconds) of each slide within the audio. cues[i] → slide i+1. */
  cues: number[];
  title?: string;
}

export const PresentationModal = ({
  open,
  onClose,
  src,
  audioUrl,
  cues,
  title = 'Presentation',
}: PresentationModalProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSlide = useRef(0);
  const currentImg = useRef(0);
  // slideNumber → number of carousel images on that slide (built once the deck loads).
  const carouselCounts = useRef<Record<number, number>>({});
  const deckReady = useRef(false);
  // Self-healing navigation: one running loop converges the deck to navTarget,
  // re-checking the real slide after each step so lost arrow events are retried.
  const navTarget = useRef(0);
  const navTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navAttempts = useRef(0);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [speedMenu, setSpeedMenu] = useState(false);
  // On a portrait phone the landscape deck is tiny, so we rotate the whole stage
  // (deck + controls) 90° to fill the screen and read it in landscape.
  const [rotated, setRotated] = useState(false);
  // The deck's built-in slide thumbnail rail eats the left ~190px and shoves the
  // slide off-centre on small screens. We hide it by default there and toggle it
  // back as an overlay on top of the (now centred) deck.
  const [railOpen, setRailOpen] = useState(false);

  const total = cues.length;
  const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

  // Speed (slides/carousels follow automatically — they're driven by audio time).
  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = speed;
  }, [speed]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px) and (orientation: portrait)');
    const update = () => setRotated(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Move the deck to an absolute slide (1-based). The deck ignores external hash
  // assignment but advances exactly one slide per Arrow key and reflects the
  // current slide in its hash. We step ONE slide at a time and re-read the real
  // slide after each step, so a lost/early arrow event is simply retried instead
  // of letting the gap grow and then multi-step (which looks like skipping).
  const goToSlide = useCallback((target: number) => {
    if (!deckReady.current) return;
    navTarget.current = target;
    if (navTimer.current) return; // a loop is already running; it picks up the new target
    navAttempts.current = 0;
    const step = () => {
      navTimer.current = null;
      const win = iframeRef.current?.contentWindow;
      if (!win) return;
      if (navAttempts.current++ > 80) return; // safety stop
      let cur = 1;
      try {
        cur = parseInt((win.location.hash || '#1').replace('#', ''), 10) || 1;
      } catch {
        return;
      }
      const delta = navTarget.current - cur;
      if (delta === 0) return;
      const key = delta > 0 ? 'ArrowRight' : 'ArrowLeft';
      try {
        win.document.dispatchEvent(new win.KeyboardEvent('keydown', { key, code: key, bubbles: true }));
      } catch {
        return;
      }
      navTimer.current = setTimeout(step, 130);
    };
    step();
  }, []);

  // Drive a slide's in-image carousel (<img-carousel> custom element) to image
  // `img` (1-based). We stop its own auto-advance timer so the audio clock is the
  // single source of truth, then call its go() method (0-based).
  const setCarouselImage = useCallback((slideN: number, img: number) => {
    const win = iframeRef.current?.contentWindow;
    const doc = iframeRef.current?.contentDocument;
    if (!win || !doc) return;
    const sec = doc.querySelectorAll('section')[slideN - 1];
    const car = sec?.querySelector('img-carousel') as
      | (Element & { go?: (i: number) => void; _timer?: number | null })
      | null;
    if (!car) return;
    try {
      if (car._timer) {
        win.clearInterval(car._timer);
        car._timer = null;
      }
      car.go?.(img - 1);
    } catch {
      /* carousel not ready */
    }
  }, []);

  const computeSlide = useCallback(
    (t: number) => {
      let idx = 0;
      for (let i = 0; i < cues.length; i++) {
        if (t >= cues[i]) idx = i;
        else break;
      }
      return idx + 1;
    },
    [cues],
  );

  // Audio clock → slide + carousel image. Driven by the audio's own time, so it
  // is correct under play, pause, seek and restart with no separate timers.
  const sync = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !deckReady.current) return;
    const t = audio.currentTime;
    const n = computeSlide(t);
    if (n !== currentSlide.current) {
      currentSlide.current = n;
      currentImg.current = 0;
      goToSlide(n);
    }
    // In-slide carousel: reset to image 1 on entry and step through all images
    // evenly across this slide's narration window so the cycle finishes in time.
    const m = carouselCounts.current[n] || 0;
    if (m > 1) {
      const start = cues[n - 1];
      const end = n < total ? cues[n] : audio.duration || start + 12;
      const dur = Math.max(0.001, end - start);
      const elapsed = t - start;
      let img = Math.floor(elapsed / (dur / m)) + 1;
      img = Math.min(m, Math.max(1, img));
      if (img !== currentImg.current) {
        currentImg.current = img;
        setCarouselImage(n, img);
      }
    }
  }, [cues, total, computeSlide, goToSlide, setCarouselImage]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  }, []);

  const restart = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    currentSlide.current = 1;
    currentImg.current = 0;
    goToSlide(1);
    audio.play().catch(() => {});
  }, [goToSlide]);

  // The deck's hash is the source of truth for the current slide number.
  const deckCurrentSlide = useCallback(() => {
    const win = iframeRef.current?.contentWindow;
    const h = win ? parseInt((win.location.hash || '#1').replace('#', ''), 10) : 0;
    return h || currentSlide.current || 1;
  }, []);

  // Move to a slide AND move the audio to match so narration stays in sync
  // (keeps playing if playing, paused if paused). The carousel follows via sync().
  const seekToSlide = useCallback(
    (n: number) => {
      const audio = audioRef.current;
      const target = Math.min(total, Math.max(1, n));
      currentSlide.current = target;
      currentImg.current = 0;
      if (audio) audio.currentTime = cues[target - 1] + 0.05;
      goToSlide(target);
    },
    [cues, total, goToSlide],
  );

  const prevSlide = useCallback(() => seekToSlide(deckCurrentSlide() - 1), [seekToSlide, deckCurrentSlide]);
  const nextSlide = useCallback(() => seekToSlide(deckCurrentSlide() + 1), [seekToSlide, deckCurrentSlide]);

  // The deck's custom element (light-DOM host whose shadow root holds the rail).
  const deckStage = useCallback(
    () => (iframeRef.current?.contentDocument?.querySelector('deck-stage') as HTMLElement | null) ?? null,
    [],
  );

  // Inject a stylesheet into the deck's shadow root: below lg, hide the thumbnail
  // rail and re-centre the slide; when the host carries `.rail-open`, bring the
  // rail back as an overlay on top of the deck (deck stays put underneath).
  const injectRailCss = useCallback(() => {
    const stage = deckStage();
    const sr = stage?.shadowRoot;
    const doc = iframeRef.current?.contentDocument;
    if (!sr || !doc || sr.getElementById('rail-overrides')) return;
    const style = doc.createElement('style');
    style.id = 'rail-overrides';
    style.textContent = `
@media (max-width: 1024px) {
  .rail, .rail-resize { display: none !important; }
  .stage { left: 0 !important; right: 0 !important; width: 100% !important; }
  :host(.rail-open) .rail {
    display: flex !important;
    z-index: 99999 !important;
    box-shadow: 8px 0 40px rgba(0,0,0,0.7);
  }
}`;
    sr.appendChild(style);
  }, [deckStage]);

  // Reflect railOpen onto the deck host so the injected CSS shows/hides the rail.
  useEffect(() => {
    deckStage()?.classList.toggle('rail-open', railOpen);
  }, [railOpen, deckStage, loading]);

  // While the rail overlay is open, picking a thumbnail should align the audio to
  // that slide (so playback doesn't snap back) and dismiss the overlay.
  useEffect(() => {
    if (!railOpen) return;
    const rail = deckStage()?.shadowRoot?.querySelector('.rail');
    if (!rail) return;
    const onPick = () => {
      setTimeout(() => {
        seekToSlide(deckCurrentSlide());
        setRailOpen(false);
      }, 60);
    };
    rail.addEventListener('click', onPick);
    return () => rail.removeEventListener('click', onPick);
  }, [railOpen, deckStage, seekToSlide, deckCurrentSlide]);

  // The deck is heavy (single self-contained HTML). Wait for it to load before
  // starting — otherwise early navigation events are lost and slides appear to
  // skip. Show a loading state until then, then start audio + slide 1 together.
  const handleIframeLoad = useCallback(() => {
    // The load event can fire before the deck's slides + key handlers are ready.
    // Poll until the 33 <section> slides exist, then start — so the first
    // navigation isn't dispatched into a deck that can't yet receive it.
    let tries = 0;
    const begin = () => {
      const doc = iframeRef.current?.contentDocument;
      const sections = doc ? doc.querySelectorAll('section') : ([] as unknown as NodeListOf<HTMLElement>);
      if (sections.length < 33 && tries++ < 60) {
        setTimeout(begin, 100);
        return;
      }
      const counts: Record<number, number> = {};
      sections.forEach((s, i) => {
        const dots = s.querySelectorAll('button[aria-label^="Show image"]').length;
        if (dots > 1) counts[i + 1] = dots;
      });
      carouselCounts.current = counts;
      deckReady.current = true;
      injectRailCss();
      setLoading(false);
      currentSlide.current = 1;
      currentImg.current = 0;
      goToSlide(1);
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.playbackRate = speed;
        const p = audio.play();
        if (p && typeof p.then === 'function') p.then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    };
    begin();
  }, [goToSlide, speed]);

  // Reset playback state whenever the deck opens/closes. The iframe remounts on
  // open, so handleIframeLoad will (re)start things once it has loaded.
  useEffect(() => {
    const audio = audioRef.current;
    setRailOpen(false);
    if (open) {
      deckReady.current = false;
      currentSlide.current = 1;
      currentImg.current = 0;
      setLoading(true);
      setPlaying(false);
      if (audio) audio.currentTime = 0;
    } else {
      deckReady.current = false;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      setPlaying(false);
    }
  }, [open]);

  // Keyboard: Esc closes, Space toggles play, arrows move slides (+ audio).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (!loading) nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (!loading) prevSlide();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, loading, onClose, togglePlay, nextSlide, prevSlide]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      {/* Mounted once, always — never inside AnimatePresence — so there is only
          ever one audio stream (no overlap/echo on close+reopen). */}
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="none"
        onTimeUpdate={sync}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
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
                onLoad={handleIframeLoad}
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

              {/* Slide-selection toggle — only below lg, where the rail is hidden
                  by default. Opens the thumbnail rail as an overlay on the deck. */}
              {!loading && (
                <button
                  onClick={() => setRailOpen((v) => !v)}
                  className={`lg:hidden absolute top-3 sm:top-5 z-[60] text-white/80 flex items-center justify-center hover:text-white bg-black/60 rounded-full p-2 transition-[left] duration-200 ${
                    railOpen ? 'left-[196px]' : 'left-3 sm:left-5'
                  }`}
                  aria-label={railOpen ? 'Hide slide list' : 'Show slide list'}
                  aria-expanded={railOpen}
                >
                  {railOpen ? <PanelLeftClose className="w-6 h-6" /> : <PanelLeftOpen className="w-6 h-6" />}
                </button>
              )}

              {/* Playback controls — hidden until the deck has loaded */}
              {!loading && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 px-2 py-1.5">
                  <button
                    onClick={prevSlide}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={togglePlay}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/15 transition-colors"
                    aria-label={playing ? 'Pause' : 'Play'}
                  >
                    {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </button>
                  <button
                    onClick={nextSlide}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={restart}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors"
                    aria-label="Restart from beginning"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                  <span className="mx-1 w-px h-5 bg-white/15" aria-hidden="true" />
                  {/* Playback speed (YouTube-style) */}
                  <div className="relative">
                    <button
                      onClick={() => setSpeedMenu((v) => !v)}
                      className="flex items-center justify-center min-w-[44px] h-10 px-2 rounded-full text-white/90 text-xs font-semibold tabular-nums hover:bg-white/15 transition-colors"
                      aria-label="Playback speed"
                      aria-haspopup="true"
                      aria-expanded={speedMenu}
                    >
                      {speed}×
                    </button>
                    {speedMenu && (
                      <div className="absolute bottom-full right-0 mb-2 flex flex-col rounded-lg bg-black/90 border border-white/15 overflow-hidden min-w-[64px] shadow-xl">
                        {SPEEDS.map((s) => (
                          <button
                            key={s}
                            onClick={() => {
                              setSpeed(s);
                              setSpeedMenu(false);
                            }}
                            className={`px-4 py-1.5 text-xs text-right tabular-nums transition-colors hover:bg-white/15 ${
                              s === speed ? 'text-white font-bold' : 'text-white/70'
                            }`}
                          >
                            {s}×
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Loading overlay — kept upright (outside the rotated stage) and
                centred on screen while the deck loads. */}
            {loading && (
              <div className="absolute inset-0 z-[60] flex flex-col items-center justify-center gap-3 pointer-events-none">
                <Loader2 className="w-9 h-9 text-white/80 animate-spin" />
                <span className="text-white/70 text-sm font-medium tracking-wide">Loading presentation…</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
