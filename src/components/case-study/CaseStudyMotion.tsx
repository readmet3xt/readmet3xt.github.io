import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RotateCcw } from 'lucide-react';
import { MotionStage } from '@/motion/MotionStage';
import { PROJECT_COLORS } from '@/motion/colors';
import { FIGURE_SIZE } from '@/motion/figures/kit';
import type { MotionEntry } from '@/motion/registry';
import { openLightbox } from './CaseStudySection';

interface CaseStudyMotionProps {
  figure: MotionEntry;
  caption?: string;
  /** the image this figure redraws: kept one tap away in the image viewer */
  original?: { src: string; alt: string };
  /** column = text width (default); wide = full article width */
  size?: 'column' | 'wide';
  className?: string;
}

/**
 * A motion figure inside a case study. It plays once when scrolled into view
 * and rests on its last frame; Replay plays it again. When it redraws an image,
 * "See the original" opens that image, which loads only then.
 */
export const CaseStudyMotion = ({ figure, caption, original, size = 'column', className = '' }: CaseStudyMotionProps) => {
  const { pathname } = useLocation();
  const [run, setRun] = useState(0);
  const [done, setDone] = useState(false);
  const end = figure.poster ?? figure.durationInFrames - 1;

  return (
    <figure className={`my-10 ${size === 'column' ? 'max-w-[68ch]' : ''} ${className}`}>
      <div className="overflow-hidden rounded-xl border border-border">
        <MotionStage
          component={figure.component}
          {...FIGURE_SIZE}
          durationInFrames={figure.durationInFrames}
          poster={end}
          endAt={end}
          initialFrame={0}
          replayKey={run}
          accent={PROJECT_COLORS[pathname]}
          label={figure.label}
          onEnded={() => setDone(true)}
        />
      </div>
      <div className="mt-2 flex items-start justify-between gap-4">
        <figcaption className="pt-1 text-sm text-text-tertiary leading-relaxed">
          {caption}
          {original && (
            <>
              {caption && ' '}
              <button type="button" className="link-ink text-text-secondary" onClick={() => openLightbox(original.src)}>
                See the original
              </button>
            </>
          )}
        </figcaption>
        {done && (
          <button
            type="button"
            aria-label="Replay"
            onClick={() => {
              setDone(false);
              setRun((r) => r + 1);
            }}
            className="-mr-2 -mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        )}
      </div>
      {original && (
        <img src={original.src} alt={original.alt} data-lightbox-caption={original.alt} className="lightbox-image hidden" loading="lazy" decoding="async" />
      )}
    </figure>
  );
};
