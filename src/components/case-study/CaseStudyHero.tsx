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
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium"
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
          className="relative overflow-hidden rounded-xl pt-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <img
            src={heroImage}
            alt={heroImageAlt || title}
            className="w-full h-auto object-contain rounded-xl"
            loading="eager"
          />
        </motion.figure>
      )}
    </header>
  );
};
