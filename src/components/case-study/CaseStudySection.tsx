import { ReactNode } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface CaseStudySectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const CaseStudySection = ({
  children,
  title,
  subtitle,
  className = '',
  id,
}: CaseStudySectionProps) => {
  return (
    <motion.section
      id={id}
      className={`space-y-4 ${className}`}
      variants={sectionVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-100px' }}
    >
      {(title || subtitle) && (
        <div className="space-y-2">
          {title && (
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base sm:text-lg text-text-secondary">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="space-y-4 text-text-primary">
        {children}
      </div>
    </motion.section>
  );
};

// Sub-components for common patterns
interface CaseStudyParagraphProps {
  children: ReactNode;
  className?: string;
  lead?: boolean;
}

export const CaseStudyParagraph = ({
  children,
  className = '',
  lead = false,
}: CaseStudyParagraphProps) => (
  <p className={`
    ${lead ? 'text-base sm:text-lg leading-relaxed' : 'text-sm sm:text-base leading-relaxed'}
    text-text-primary
    ${className}
  `}>
    {children}
  </p>
);

interface CaseStudyQuoteProps {
  children: ReactNode;
  author?: string;
  role?: string;
}

export const CaseStudyQuote = ({ children, author, role }: CaseStudyQuoteProps) => (
  <motion.blockquote
    className="border-l-4 border-accent-primary pl-4 sm:pl-6 py-2 bg-card/50 rounded-r-lg"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-base sm:text-lg italic text-text-primary leading-relaxed">
      "{children}"
    </p>
    {(author || role) && (
      <footer className="mt-2 text-sm text-text-secondary">
        {author && <span className="font-medium">{author}</span>}
        {author && role && <span className="mx-1">—</span>}
        {role && <span>{role}</span>}
      </footer>
    )}
  </motion.blockquote>
);

interface CaseStudyListProps {
  items: (string | { title: string; description: string })[];
  ordered?: boolean;
  className?: string;
}

export const CaseStudyList = ({ items, ordered = false, className = '' }: CaseStudyListProps) => {
  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag className={`space-y-2 ${ordered ? 'list-decimal' : ''} ${className}`}>
      {items.map((item, i) => (
        <motion.li
          key={i}
          className="flex gap-3 text-sm sm:text-base text-text-primary"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
        >
          {!ordered && (
            <span className="text-accent-primary mt-1.5 flex-shrink-0">•</span>
          )}
          <span className="flex-1">
            {typeof item === 'string' ? (
              item
            ) : (
              <>
                <strong className="text-foreground">{item.title}:</strong>{' '}
                <span className="text-text-secondary">{item.description}</span>
              </>
            )}
          </span>
        </motion.li>
      ))}
    </ListTag>
  );
};

interface CaseStudyImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  objectPosition?: string;
}

export const CaseStudyImage = ({
  src,
  alt,
  caption,
  className = '',
  priority = false,
  aspectRatio = 'aspect-auto',
  objectPosition = 'object-top',
}: CaseStudyImageProps) => {
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, { stiffness: 300, damping: 30 });

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const currentScale = scale.get();
    const newScale = Math.min(Math.max(1, currentScale - e.deltaY * 0.005), 4);
    scale.set(newScale);
  };

  return (
    <motion.figure
      className={`my-10 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`relative overflow-hidden rounded-lg bg-white border border-border w-full h-full min-h-[300px] ${aspectRatio} shadow-sm flex items-center justify-center`}
        onWheel={handleWheel}
      >
        <span className="text-text-tertiary font-medium text-sm Select-none tracking-wide uppercase opacity-40 absolute z-0">
          Work in Progress
        </span>
        <motion.img
          src={src}
          alt={alt}
          style={{ scale: scaleSpring }}
          className={`w-full ${aspectRatio === 'aspect-auto' ? 'h-auto max-h-[70vh] md:max-h-[80vh] object-contain relative' : `h-full absolute inset-0 object-cover ${objectPosition}`} z-10 lightbox-image cursor-grab active:cursor-grabbing hover:opacity-90`}
          loading={priority ? 'eager' : 'lazy'}
          drag
          dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
          dragElastic={0.2}
          dragSnapToOrigin={true}
          onDoubleClick={() => window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src } }))}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-text-tertiary text-center italic">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
};

interface CaseStudyImageGridProps {
  images: { src: string; alt: string; caption?: string }[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

interface GridImageCardProps {
  image: { src: string; alt: string; caption?: string };
  index: number;
  aspectRatio?: string;
  objectPosition?: string;
}

const GridImageCard = ({ image, index, aspectRatio = 'aspect-auto', objectPosition = 'object-top' }: GridImageCardProps) => {
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, { stiffness: 300, damping: 30 });

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const currentScale = scale.get();
    const newScale = Math.min(Math.max(1, currentScale - e.deltaY * 0.005), 4);
    scale.set(newScale);
  };

  return (
    <motion.figure
      className="relative overflow-hidden rounded-lg bg-bg-secondary h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div
        className={`w-full h-full min-h-[300px] ${aspectRatio} bg-white border border-border flex items-center justify-center overflow-hidden relative`}
        onWheel={handleWheel}
      >
        <span className="text-text-tertiary font-medium text-xs Select-none tracking-wide uppercase opacity-40 absolute z-0">
          Work in Progress
        </span>
        <motion.img
          src={image.src}
          alt={image.alt}
          style={{ scale: scaleSpring }}
          className={`w-full ${aspectRatio === 'aspect-auto' ? 'h-auto max-h-[60vh] md:max-h-[75vh] object-contain relative' : `h-full absolute inset-0 object-cover ${objectPosition}`} z-10 lightbox-image cursor-grab active:cursor-grabbing hover:opacity-90`}
          loading="lazy"
          drag
          dragConstraints={{ left: -250, right: 250, top: -250, bottom: 250 }}
          dragElastic={0.2}
          dragSnapToOrigin={true}
          onDoubleClick={() => window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src: image.src } }))}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        />
      </div>
      {image.caption && (
        <figcaption className="p-2 text-xs text-text-tertiary text-center">
          {image.caption}
        </figcaption>
      )}
    </motion.figure>
  );
};

export const CaseStudyImageGrid = ({
  images,
  columns = 2,
  className = '',
  aspectRatio = 'aspect-auto',
  objectPosition = 'object-top',
}: CaseStudyImageGridProps & { aspectRatio?: string; objectPosition?: string }) => {
  const colClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`my-10 grid ${colClass} gap-6 ${className}`}>
      {images.map((image, i) => (
        <GridImageCard key={i} image={image} index={i} aspectRatio={aspectRatio} objectPosition={objectPosition} />
      ))}
    </div>
  );
};

interface CaseStudyCardProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  className?: string;
}

export const CaseStudyCard = ({
  children,
  title,
  icon,
  className = '',
}: CaseStudyCardProps) => (
  <motion.div
    className={`bg-card p-4 sm:p-6 rounded-lg border border-border ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    {(title || icon) && (
      <div className="flex items-center gap-3 mb-3">
        {icon && <span className="text-accent-primary">{icon}</span>}
        {title && (
          <h3 className="text-base sm:text-lg font-semibold text-foreground">
            {title}
          </h3>
        )}
      </div>
    )}
    <div className="text-sm sm:text-base text-text-secondary">
      {children}
    </div>
  </motion.div>
);

interface CaseStudyCardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const CaseStudyCardGrid = ({
  children,
  columns = 2,
  className = '',
}: CaseStudyCardGridProps) => {
  const colClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${colClass} gap-4 ${className}`}>
      {children}
    </div>
  );
};

interface CaseStudyStatProps {
  value: string;
  label: string;
  sublabel?: string;
}

export const CaseStudyStat = ({ value, label, sublabel }: CaseStudyStatProps) => (
  <motion.div
    className="text-center p-4 sm:p-6 bg-card rounded-lg border border-border"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="text-2xl sm:text-3xl font-bold text-accent-primary mb-1 sm:mb-2 break-words">
      {value}
    </div>
    <div className="text-xs sm:text-sm text-text-secondary">{label}</div>
    {sublabel && (
      <div className="text-xs text-text-tertiary mt-1">{sublabel}</div>
    )}
  </motion.div>
);

interface CaseStudyStatsGridProps {
  stats: CaseStudyStatProps[];
  className?: string;
}

export const CaseStudyStatsGrid = ({ stats, className = '' }: CaseStudyStatsGridProps) => (
  <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
    {stats.map((stat, i) => (
      <CaseStudyStat key={i} {...stat} />
    ))}
  </div>
);
