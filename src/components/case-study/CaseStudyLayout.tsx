import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { ReadingProgressBar } from './ReadingProgressBar';

interface CaseStudyLayoutProps {
  children: ReactNode;
  title: string;
  backLink?: string;
  backLabel?: string;
  externalLink?: string;
  externalLabel?: string;
}

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
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
  backLink = '/',
  backLabel = 'Back to Work',
  externalLink,
  externalLabel,
}: CaseStudyLayoutProps) => {
  return (
    <PageLayout className="px-4 sm:px-6 md:px-8 lg:px-12 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pb-24 lg:pt-12 lg:pb-12 overflow-x-hidden">
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

        {/* Footer Navigation */}
        <motion.footer 
          className="mt-16 pt-8 border-t border-border"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-hover transition-colors"
              >
                <span>{externalLabel || 'View Project'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.footer>
      </motion.div>
    </PageLayout>
  );
};
