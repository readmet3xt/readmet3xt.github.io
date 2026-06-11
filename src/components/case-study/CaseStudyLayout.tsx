import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { ReadingProgressBar } from './ReadingProgressBar';
import { SEO } from '@/components/SEO';
import { ImageLightbox } from './ImageLightbox';

// Reading order for the next-project rail (mirrors the home grid order)
const caseStudyOrder = [
  { path: '/otagon', title: 'Otagon', blurb: 'An AI gaming companion shipped solo to web and PWA' },
  { path: '/koinbasket', title: 'KoinBasket', blurb: 'From a one-week MVP contract to 70,000 users' },
  { path: '/lawx', title: 'Law.X', blurb: 'Designing transparency into legal AI' },
  { path: '/pebble', title: 'Pebble', blurb: 'A VISA-backed wellbeing companion for remote teams' },
  { path: '/iviprogram', title: 'I.V.I. Program', blurb: 'A Core77-awarded service that makes invisible labour visible' },
  { path: '/softwire', title: 'Softwire × LNER', blurb: 'Instant train tickets for people running to catch trains' },
  { path: '/stampede', title: 'Stampede', blurb: 'Turning conservation partnerships into designed outcomes' },
  { path: '/versus', title: 'Versus', blurb: 'A live tournament tracker for FIFA nights' },
  { path: '/screenshot', title: 'ScreenShot', blurb: 'Press F1 on your PC, see it on your phone' },
];

interface CaseStudyLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  image?: string;
  backLink?: string;
  backLabel?: string;
  externalLink?: string;
  externalLabel?: string;
  ctaClassName?: string;
}

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
    },
  },
};

// Stagger children animation
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const CaseStudyLayout = ({
  children,
  title,
  description,
  image,
  backLink = '/#work',
  backLabel = 'Back to Work',
  externalLink,
  externalLabel,
  ctaClassName,
}: CaseStudyLayoutProps) => {
  const { pathname } = useLocation();
  const currentIndex = caseStudyOrder.findIndex((cs) => cs.path === pathname);
  const nextProject =
    currentIndex >= 0
      ? caseStudyOrder[(currentIndex + 1) % caseStudyOrder.length]
      : null;

  return (
    <PageLayout className="px-4 sm:px-6 md:px-8 lg:px-12 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pb-24 lg:pt-12 lg:pb-12 overflow-x-hidden">
      <SEO
        title={title}
        description={description}
        image={image}
      />
      <ReadingProgressBar />

      <motion.div
        className="max-w-4xl mx-auto"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Back Navigation */}
        <motion.nav
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Link
            to={backLink}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group text-sm"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{backLabel}</span>
          </Link>
        </motion.nav>

        {/* Main Content */}
        <motion.article
          className="space-y-12"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {children}
        </motion.article>

        {/* Next Project */}
        {nextProject && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={nextProject.path}
              className="group block rounded-xl border border-border bg-card p-6 sm:p-8 hover:border-accent-primary transition-colors duration-300"
            >
              <p className="font-ibm-plex-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent-primary mb-3">
                Next case study
              </p>
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="font-dm-sans font-bold text-2xl sm:text-3xl text-foreground group-hover:text-accent-primary transition-colors duration-300">
                    {nextProject.title}
                  </h2>
                  <p className="text-sm sm:text-base text-text-secondary mt-1">
                    {nextProject.blurb}
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-text-tertiary group-hover:text-accent-primary transition-all duration-300 group-hover:translate-x-1.5 flex-shrink-0" />
              </div>
            </Link>
          </motion.div>
        )}

        {/* Footer Navigation */}
        <motion.footer
          className="mt-8 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to={backLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground hover:border-accent-primary hover:shadow-lg transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>{backLabel}</span>
            </Link>

            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${ctaClassName || 'bg-accent-primary text-white hover:bg-accent-hover'}`}
              >
                <span>{externalLabel || 'View Project'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.footer>
      </motion.div>
      <ImageLightbox />
    </PageLayout>
  );
};
