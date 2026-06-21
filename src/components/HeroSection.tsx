import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Presentation } from 'lucide-react';
import { useCardHoverEffect } from '@/hooks/useCardHoverEffect';
import { PresentationModal } from '@/components/PresentationModal';
import { PRESENTATION_SLIDES, PRESENTATION_TITLE } from '@/data/presentation';

const istFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Asia/Kolkata',
});

// Live local time for the profile card caption
const LocalTime = () => {
  const [time, setTime] = useState(() => istFormatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(istFormatter.format(new Date())), 30_000);
    return () => clearInterval(id);
  }, []);

  return <>{time}</>;
};

const proofPoints = [
  { value: '0 → 70K', label: 'users as founding designer' },
  { value: 'Core77', label: 'Design Award winner' },
  { value: 'Web & PWA', label: 'shipped solo' },
  { value: 'VISA · BCG', label: 'adopted my concepts' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [deckOpen, setDeckOpen] = useState(false);

  useCardHoverEffect(cardRef, {
    maxRotation: 4,
    transitionDuration: 100,
  });

  const scrollToWork = () => {
    const grid = document.getElementById('work');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    <section
      className="relative flex flex-col justify-center h-full min-h-[calc(100svh-6rem)] lg:min-h-0 pt-4 lg:pt-8 pb-8 lg:pb-12 scroll-mt-20 lg:scroll-mt-0"
      aria-label="Introduction"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center w-full">
        {/* Identity block */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-5"
            {...fadeUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-500">Available for work</span>
            </span>
            <span className="font-ibm-plex-mono text-[11px] sm:text-xs uppercase tracking-widest text-text-tertiary">
              Product Designer &amp; Engineer
            </span>
          </motion.div>

          <motion.h1
            className="font-dm-sans font-bold tracking-[-0.025em] text-[2.65rem] sm:text-[3.4rem] lg:text-[3.25rem] xl:text-[4.15rem] leading-[1.03] text-text-primary mb-4 lg:mb-5 text-balance"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          >
            I design products end-to-end —{' '}
            <span className="font-serif-accent italic font-normal tracking-normal text-accent-primary">
              then I build them.
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-base xl:text-lg text-text-secondary leading-relaxed max-w-xl mb-6 lg:mb-6 xl:mb-8"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
          >
            I'm <span className="text-text-primary font-medium">Amaan Khan</span> — an
            RCA-trained product designer who writes production React. Founding designer
            behind a fintech that grew to 70,000 users, and solo builder of Otagon, an AI
            gaming companion live on web and PWA.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6 lg:mb-6 xl:mb-10"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.24, ease: 'easeOut' }}
          >
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-primary text-white font-semibold hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_30px_hsl(var(--accent-primary)/0.25)]"
            >
              View my work
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeckOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-primary font-semibold hover:border-accent-primary hover:text-accent-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              View presentation
              <Presentation className="w-4 h-4" />
            </button>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-primary font-semibold hover:border-accent-primary hover:text-accent-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              About me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Proof row */}
          <motion.dl
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 w-full max-w-2xl border-t border-border pt-6"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.32, ease: 'easeOut' }}
          >
            {proofPoints.map(({ value, label }) => (
              <div key={value}>
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block font-dm-sans font-bold text-xl sm:text-2xl text-text-primary tabular-nums tracking-tight">
                    {value}
                  </span>
                  <span className="block font-ibm-plex-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary leading-snug mt-1.5">
                    {label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Profile Card image block with tilt */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <Link
            to="/about"
            ref={cardRef}
            className="project-card rounded-xl overflow-hidden group bg-gradient-to-br from-accent-primary/10 via-accent-primary/5 to-card border border-accent-primary/20 w-full max-w-xs xl:max-w-sm lg:max-h-[55vh] aspect-[3/4] relative hover:border-accent-primary/40 cursor-pointer select-none transition-all duration-300 shadow-xl block"
          >
            <img
              src="/lovable-uploads/6bba6c1a-b7f8-404a-b8c3-367c42cbc2a0.png"
              alt="Amaan Khan - Product Designer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Caption strip */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 pb-3.5 pt-14 bg-gradient-to-t from-black/75 via-black/30 to-transparent">
              <span className="font-ibm-plex-mono text-[10px] uppercase tracking-[0.18em] text-white/90">
                Amaan Khan
              </span>
              <span className="font-ibm-plex-mono text-[10px] uppercase tracking-[0.18em] text-white/60 tabular-nums whitespace-nowrap">
                Hyderabad · <LocalTime /> IST
              </span>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint (desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none"
      >
        <p className="text-[10px] uppercase tracking-widest font-ibm-plex-mono text-text-tertiary opacity-60">
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-3 rounded-full bg-accent-primary opacity-40"
        />
      </motion.div>
    </section>

    <PresentationModal
      open={deckOpen}
      onClose={() => setDeckOpen(false)}
      slides={PRESENTATION_SLIDES}
      title={PRESENTATION_TITLE}
    />
    </>
  );
};
