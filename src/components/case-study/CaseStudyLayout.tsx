import { ReactNode, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { getNextProject, getProject } from '@/data/projectData';
import { MotionStage } from '@/motion/MotionStage';
import { TILES, TILE_SIZE } from '@/motion/registry';
import { ChapterBar } from './ChapterBar';
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
  const nextTile = nextProject ? TILES[nextProject.href] : undefined;
  const article = useRef<HTMLElement>(null);

  return (
    <PageLayout>
      <SEO
        title={title ?? project?.seoTitle}
        description={description ?? project?.seoDescription}
        image={image}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="mb-6">
          <Link to={backLink} className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{backLabel}</span>
          </Link>
        </nav>

        <ChapterBar article={article} />

        <article ref={article} className="case-study-article space-y-16">{children}</article>

        {externalLink && (
          <p className="mt-16 text-lg">
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="link-ink">
              {externalLabel || 'View the project'} ↗
            </a>
          </p>
        )}

        {nextProject && (
          <Link to={nextProject.href} className="group mt-20 pt-8 border-t border-border grid gap-6 sm:grid-cols-[minmax(0,280px)_1fr] sm:items-center">
            {nextTile && (
              <div className="overflow-hidden rounded-2xl bg-bg-secondary">
                <MotionStage
                  component={nextTile.component}
                  width={TILE_SIZE.width}
                  height={TILE_SIZE.height}
                  durationInFrames={nextTile.durationInFrames}
                  poster={nextTile.poster}
                  loop
                  label={nextTile.label}
                />
              </div>
            )}
            <div>
              <p className="font-mono text-xs text-text-tertiary mb-2">Next case study</p>
              <span className="inline-flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary group-hover:text-accent-primary transition-colors">
                  {nextProject.title}
                </span>
                <ArrowRight className="w-6 h-6 text-text-tertiary group-hover:text-accent-primary transition-colors" />
              </span>
              <p className="mt-2 max-w-[60ch] font-mono text-xs text-text-tertiary">{nextProject.context}</p>
            </div>
          </Link>
        )}
      </div>
      <ImageLightbox />
    </PageLayout>
  );
};
