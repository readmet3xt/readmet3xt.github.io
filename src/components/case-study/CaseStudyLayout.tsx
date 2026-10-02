import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { getNextProject, getProject } from '@/data/projectData';
import { ImageLightbox } from './ImageLightbox';

interface CaseStudyLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  backLink?: string;
  backLabel?: string;
  externalLink?: string;
  externalLabel?: string;
  /** @deprecated kept so existing pages compile; the CTA is always an ink link now. */
  ctaClassName?: string;
}

export const CaseStudyLayout = ({
  children,
  title,
  description,
  image,
  backLink = '/#work',
  backLabel = 'All work',
  externalLink,
  externalLabel,
}: CaseStudyLayoutProps) => {
  const { pathname } = useLocation();
  const project = getProject(pathname);
  const nextProject = getNextProject(pathname);

  return (
    <PageLayout>
      <SEO
        title={title ?? project?.seoTitle}
        description={description ?? project?.seoDescription}
        image={image}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="mb-10">
          <Link to={backLink} className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{backLabel}</span>
          </Link>
        </nav>

        <article className="space-y-16">{children}</article>

        {externalLink && (
          <p className="mt-16 text-lg">
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="link-ink">
              {externalLabel || 'View the project'} ↗
            </a>
          </p>
        )}

        {nextProject && (
          <div className="mt-20 pt-8 border-t border-border">
            <p className="text-sm text-text-tertiary mb-2">Next case study</p>
            <Link to={nextProject.href} className="group inline-flex items-baseline gap-3">
              <span className="font-serif text-3xl sm:text-4xl font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                {nextProject.title}
              </span>
              <ArrowRight className="w-6 h-6 text-text-tertiary group-hover:text-accent-primary transition-colors self-center" />
            </Link>
            <p className="mt-2 max-w-[60ch] text-text-secondary">{nextProject.context}</p>
          </div>
        )}
      </div>
      <ImageLightbox />
    </PageLayout>
  );
};
