import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ProjectOverviewCard } from '@/components/ProjectOverviewCard';

interface CaseStudyHeroProps {
  title: string;
  subtitle?: string;
  pills: string[];
  intro: string;
  externalLink?: string;
  externalLabel?: string;
  overview: {
    role: string[];
    team?: string;
    timeline: string;
    recognition?: string;
    tools: string[];
  };
  heroImage?: string;
  heroImageAlt?: string;
}

const heroVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const pillVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.3,
    },
  }),
};

export const CaseStudyHero = ({
  title,
  subtitle,
  pills,
  intro,
  externalLink,
  externalLabel,
  overview,
  heroImage,
  heroImageAlt,
}: CaseStudyHeroProps) => {
  return (
    <header className="space-y-6">
      {/* Title & Subtitle */}
      <motion.div variants={heroVariants}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-text-secondary font-medium">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* External Link */}
      {externalLink && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent-primary)/0.1)] text-[hsl(var(--accent-primary))] hover:bg-[hsl(var(--accent-primary)/0.2)] transition-colors text-sm font-semibold uppercase tracking-wide"
          >
            <ExternalLink className="w-4 h-4" />
            {externalLabel || externalLink.replace(/^https?:\/\//, '')}
          </a>
        </motion.div>
      )}

      {/* Pills */}
      <motion.div
        className="flex flex-wrap gap-2"
        initial="initial"
        animate="animate"
      >
        {pills.map((pill, i) => (
          <motion.span
            key={pill}
            className="case-study-pill"
            variants={pillVariants}
            custom={i}
          >
            {pill}
          </motion.span>
        ))}
      </motion.div>

      {/* Introduction */}
      <motion.p
        className="text-base sm:text-lg leading-relaxed text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {intro}
      </motion.p>

      {/* Project Overview Card */}
      <motion.div
        className="pt-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ProjectOverviewCard
          role={overview.role}
          team={overview.team}
          timeline={overview.timeline}
          recognition={overview.recognition}
          tools={overview.tools}
        />
      </motion.div>

      {/* Hero Image */}
      {heroImage && (
        <motion.figure
          className="group relative overflow-hidden rounded-xl pt-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <div className="w-full aspect-[16/9] rounded-xl flex items-center justify-center overflow-hidden shadow-[0_18px_48px_hsl(var(--bg-primary)/0.2)] relative bg-gradient-to-br from-card via-card to-bg-secondary">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--accent-primary)/0.16),_transparent_60%)]" />
            <motion.img
              src={heroImage}
              alt={heroImageAlt || title}
              data-lightbox-caption={heroImageAlt || title}
              className="w-full h-full object-cover object-top absolute inset-0 z-10 lightbox-image cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.015]"
              loading="eager"
              onClick={() => window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src: heroImage } }))}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
              whileTap={{ scale: 0.96, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
            />
          </div>
        </motion.figure>
      )}
    </header>
  );
};
