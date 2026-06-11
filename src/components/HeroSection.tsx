import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { useCardHoverEffect } from '@/hooks/useCardHoverEffect';

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

  useCardHoverEffect(cardRef, {
    maxRotation: 10,
    transitionDuration: 100,
  });

  const scrollToWork = () => {
    // Preserve the sidebar auto-open behavior tied to this event
    window.dispatchEvent(new CustomEvent('typewriter-clicked'));
    const grid = document.getElementById('work');
    if (grid) {
      grid.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  return (
    <section
      className="relative flex flex-col justify-center min-h-[calc(100svh-6rem)] lg:min-h-[calc(100vh-3rem)] lg:-mt-12 pt-4 lg:pt-12"
      aria-label="Introduction"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center w-full">
        {/* Identity block */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-5"
            {...fadeUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/90 rounded-full border border-emerald-400/30">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-medium text-white">Available for work</span>
            </span>
            <span className="font-ibm-plex-mono text-[11px] sm:text-xs uppercase tracking-widest text-text-tertiary">
              Product Designer &amp; Engineer
            </span>
          </motion.div>

          <motion.h1
            className="font-dm-sans font-bold tracking-tight text-4xl sm:text-5xl xl:text-6xl leading-[1.06] text-text-primary mb-5 text-balance"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          >
            I design products end-to-end —{' '}
            <span className="text-accent-primary">then I build them.</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mb-8"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
          >
            I'm <span className="text-text-primary font-medium">Amaan Khan</span> — an
            RCA-trained product designer who writes production React. Founding designer
            behind a fintech that grew to 70,000 users, and solo builder of Otagon, an AI
            gaming companion live on web and PWA.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 mb-10"
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
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-text-primary font-semibold hover:border-accent-primary hover:text-accent-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              About me
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
                  <span className="block font-dm-sans font-bold text-lg sm:text-xl text-text-primary">
                    {value}
                  </span>
                  <span className="block text-xs text-text-tertiary leading-snug mt-1">
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
            className="project-card rounded-xl overflow-hidden group bg-gradient-to-br from-accent-primary/10 via-accent-primary/5 to-card border border-accent-primary/20 w-full max-w-sm aspect-[3/4] relative hover:border-accent-primary/40 cursor-pointer select-none transition-all duration-300 shadow-xl block"
          >
            <img
              src="/lovable-uploads/6bba6c1a-b7f8-404a-b8c3-367c42cbc2a0.png"
              alt="Amaan Khan - Product Designer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-accent-primary/10 rounded-full blur-xl" />
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-accent-primary/10 rounded-full blur-lg" />
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
  );
};
