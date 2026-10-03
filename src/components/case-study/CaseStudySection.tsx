import { CSSProperties, ReactNode } from 'react';
import { imageSize } from '@/lib/imageSize';

/* Case-study building blocks. Prose stays at a readable measure (68ch);
   images run the full article width. No motion: everything is visible on load. */

const openLightbox = (src: string) =>
  window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src } }));

interface CaseStudySectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export const CaseStudySection = ({ children, title, subtitle, className = '', id }: CaseStudySectionProps) => (
  <section id={id} className={`case-study-section scroll-mt-32 space-y-5 ${className}`}>
    {(title || subtitle) && (
      <div className="max-w-[68ch] space-y-2">
        {title && <h2 className="text-3xl">{title}</h2>}
        {subtitle && <p className="text-lg text-text-secondary">{subtitle}</p>}
      </div>
    )}
    <div className="space-y-5">{children}</div>
  </section>
);

interface CaseStudyParagraphProps {
  children: ReactNode;
  className?: string;
  lead?: boolean;
}

export const CaseStudyParagraph = ({ children, className = '', lead = false }: CaseStudyParagraphProps) => (
  <p className={`max-w-[68ch] leading-relaxed ${lead ? 'text-lg text-text-primary' : 'text-text-secondary'} ${className}`}>
    {children}
  </p>
);

/** One sentence that carries the section's insight. */
export const CaseStudyInsight = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <p className={`max-w-[40ch] text-2xl font-medium tracking-tight leading-snug text-text-primary ${className}`}>{children}</p>
);

interface CaseStudyQuoteProps {
  children: ReactNode;
  author?: string;
  role?: string;
}

export const CaseStudyQuote = ({ children, author, role }: CaseStudyQuoteProps) => (
  <blockquote className="max-w-[60ch] border-l-2 border-text-primary pl-5 py-1">
    <p className="text-xl font-medium tracking-tight leading-snug text-text-primary">"{children}"</p>
    {(author || role) && (
      <footer className="mt-2 text-sm text-text-secondary">
        {[author, role].filter(Boolean).join(', ')}
      </footer>
    )}
  </blockquote>
);

interface CaseStudyListProps {
  items: (string | { title: string; description: string })[];
  ordered?: boolean;
  className?: string;
}

export const CaseStudyList = ({ items, ordered = false, className = '' }: CaseStudyListProps) => {
  const ListTag = ordered ? 'ol' : 'ul';
  return (
    <ListTag className={`max-w-[68ch] pl-5 space-y-2 text-text-secondary ${ordered ? 'list-decimal' : 'list-disc'} marker:text-text-tertiary ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="pl-1">
          {typeof item === 'string' ? item : (
            <>
              <strong className="font-semibold text-text-primary">{item.title}:</strong> {item.description}
            </>
          )}
        </li>
      ))}
    </ListTag>
  );
};

const ratio = (src: string) => {
  const { width, height } = imageSize(src);
  return width && height ? width / height : 1;
};

/** Caps an image's width so its height stays within maxHeight. The box stays the
    size of the picture (no letterboxing) and keeps its reserved space before load. */
const fitHeight = (src: string, maxHeight: string): CSSProperties => ({
  maxWidth: `min(100%, calc(${maxHeight} * ${ratio(src).toFixed(4)}))`,
});

interface CaseStudyImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  objectPosition?: string;
  /** column = text width; wide (default) = full article width. */
  size?: 'column' | 'wide';
}

export const CaseStudyImage = ({
  src,
  alt,
  caption,
  className = '',
  priority = false,
  aspectRatio = 'aspect-auto',
  objectPosition = 'object-top',
  size = 'wide',
}: CaseStudyImageProps) => (
  <figure className={`my-10 ${size === 'column' ? 'max-w-[68ch]' : ''} ${className}`}>
    <img
      src={src}
      alt={alt}
      {...imageSize(src)}
      data-lightbox-caption={caption || alt}
      className={`w-full rounded-sm lightbox-image cursor-zoom-in ${aspectRatio === 'aspect-auto' ? 'h-auto' : `${aspectRatio} object-cover ${objectPosition}`}`}
      style={aspectRatio === 'aspect-auto' ? fitHeight(src, '85vh') : undefined}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onClick={() => openLightbox(src)}
    />
    {caption && <figcaption className="mt-3 max-w-[68ch] text-sm text-text-tertiary leading-relaxed">{caption}</figcaption>}
  </figure>
);

interface GridImage { src: string; alt: string; caption?: string }

const GridImageCard = ({ image, aspectRatio, objectPosition, maxHeight }: { image: GridImage; aspectRatio: string; objectPosition: string; maxHeight: string }) => (
  <figure className="h-full">
    <img
      src={image.src}
      alt={image.alt}
      {...imageSize(image.src)}
      data-lightbox-caption={image.caption || image.alt}
      className={`w-full rounded-sm lightbox-image cursor-zoom-in ${aspectRatio === 'aspect-auto' ? 'h-auto' : `${aspectRatio} object-cover ${objectPosition}`}`}
      style={aspectRatio === 'aspect-auto' ? fitHeight(image.src, maxHeight) : undefined}
      loading="lazy"
      decoding="async"
      onClick={() => openLightbox(image.src)}
    />
    {image.caption && <figcaption className="mt-2 text-sm text-text-tertiary leading-relaxed">{image.caption}</figcaption>}
  </figure>
);

const GAP_REM = 1.5; // gap-6
const ROW_MAX_HEIGHT = 'min(680px, 75vh)';

/** One line of images whose widths follow their aspect ratios, so they share a
    height. With `reference` (the first row's ratios), it matches that row's height. */
const ImageRow = ({ images, reference }: { images: GridImage[]; reference?: number[] }) => {
  const ratios = images.map(({ src }) => ratio(src));
  const sum = ratios.reduce((a, b) => a + b, 0);
  const gaps = (images.length - 1) * GAP_REM;
  // The row's width when it reaches ROW_MAX_HEIGHT (and, with a reference, when
  // it is as tall as the reference row at this container width).
  let rowMax = `calc(${ROW_MAX_HEIGHT} * ${sum.toFixed(4)} + ${gaps}rem)`;
  if (reference) {
    const refSum = reference.reduce((a, b) => a + b, 0);
    const refGaps = (reference.length - 1) * GAP_REM;
    rowMax = `min(${rowMax}, calc((100% - ${refGaps}rem) * ${(sum / refSum).toFixed(4)} + ${gaps}rem))`;
  }
  return (
    <div
      className="grid grid-cols-1 sm:[grid-template-columns:var(--row-cols)] sm:max-w-[var(--row-max)] gap-6 items-start"
      // fr values are scaled up because grid leaves space unused when they sum to less than 1.
      style={{ '--row-cols': ratios.map((r) => `minmax(0, ${(r * 1000).toFixed(1)}fr)`).join(' '), '--row-max': rowMax } as CSSProperties}
    >
      {images.map((image) => (
        <figure key={image.src}>
          <img
            src={image.src}
            alt={image.alt}
            {...imageSize(image.src)}
            data-lightbox-caption={image.caption || image.alt}
            className="w-full h-auto rounded-sm lightbox-image cursor-zoom-in"
            style={fitHeight(image.src, ROW_MAX_HEIGHT)}
            loading="lazy"
            decoding="async"
            onClick={() => openLightbox(image.src)}
          />
          {image.caption && <figcaption className="mt-2 text-sm text-text-tertiary leading-relaxed">{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
};

interface CaseStudyImageGridProps {
  images: GridImage[];
  /** grid: columns at full width (default 2). row: images per row (default all). */
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  aspectRatio?: string;
  objectPosition?: string;
  /** row = images sized by aspect ratio so each row shares one height, with no
      cropping; later rows match the first row's height. Stacks below sm. */
  layout?: 'grid' | 'row';
}

export const CaseStudyImageGrid = ({
  images,
  columns,
  className = '',
  aspectRatio = 'aspect-auto',
  objectPosition = 'object-top',
  layout = 'grid',
}: CaseStudyImageGridProps) => {
  if (layout === 'row') {
    const perRow = columns ?? images.length;
    const rows: GridImage[][] = [];
    for (let i = 0; i < images.length; i += perRow) rows.push(images.slice(i, i + perRow));
    const first = rows[0].map(({ src }) => ratio(src));
    return (
      <div className={`my-10 space-y-6 ${className}`}>
        {rows.map((row, r) => (
          <ImageRow key={r} images={row} reference={r > 0 ? first : undefined} />
        ))}
      </div>
    );
  }

  const colClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  }[columns ?? 2];

  return (
    <div className={`my-10 grid ${colClass} gap-6 items-start ${className}`}>
      {images.map((image, i) => (
        <GridImageCard key={i} image={image} aspectRatio={aspectRatio} objectPosition={objectPosition} maxHeight="75vh" />
      ))}
    </div>
  );
};

interface CaseStudyCardProps {
  children: ReactNode;
  title?: string;
  /** @deprecated icons are no longer rendered. */
  icon?: ReactNode;
  className?: string;
}

/** A titled sub-section (formerly a boxed card). */
export const CaseStudyCard = ({ children, title, className = '' }: CaseStudyCardProps) => (
  <div className={className}>
    {title && <h3 className="text-xl mb-2">{title}</h3>}
    <div className="text-text-secondary leading-relaxed">{children}</div>
  </div>
);

interface CaseStudyCardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const CaseStudyCardGrid = ({ children, columns = 2, className = '' }: CaseStudyCardGridProps) => {
  const colClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return <div className={`grid ${colClass} gap-x-10 gap-y-8 ${className}`}>{children}</div>;
};

interface CaseStudyStatProps {
  value: string;
  label: string;
  sublabel?: string;
}

/** A single fact: the number, what it measures, and its source or scope. */
export const CaseStudyStat = ({ value, label, sublabel }: CaseStudyStatProps) => (
  <div>
    <dt className="text-sm text-text-secondary">{label}</dt>
    <dd className="mt-1 font-serif text-3xl text-text-primary">{value}</dd>
    {sublabel && <dd className="mt-1 text-sm text-text-tertiary">{sublabel}</dd>}
  </div>
);

interface CaseStudyStatsGridProps {
  stats: CaseStudyStatProps[];
  className?: string;
}

export const CaseStudyStatsGrid = ({ stats, className = '' }: CaseStudyStatsGridProps) => (
  <dl className={`grid grid-cols-2 ${stats.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-x-8 gap-y-6 border-y border-border py-6 ${className}`}>
    {stats.map((stat, i) => <CaseStudyStat key={i} {...stat} />)}
  </dl>
);
