import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCardHoverEffect } from '@/hooks/useCardHoverEffect';

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  image: string;
  className?: string;
  summary?: string;
  tags?: string[];
}

export const ProjectCard = ({ href, title, description, image, className = "", summary, tags }: ProjectCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  
  // Use optimized hover effect hook
  useCardHoverEffect(cardRef, {
    maxRotation: 10,
    transitionDuration: 100,
  });

  return (
    <Link
      ref={cardRef}
      to={href}
      className={`project-card reveal-on-scroll rounded-xl overflow-hidden group bg-card block min-h-[340px] flex flex-col w-full max-w-full ${className}`}
      aria-label={`View ${title} project details`}
    >
      <img
        src={image}
        alt={`${title} project preview showing ${description}`}
        className="w-full h-48 sm:h-52 object-scale-down bg-card flex-shrink-0 object-top"
        loading="lazy"
      />
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-2xl sm:text-2xl font-bold font-dm-sans text-foreground break-words">{title}</h3>
        <p className="text-lg sm:text-lg mt-1 text-text-secondary break-words">{description}</p>
        {summary && (
          <p className="text-base sm:text-base mt-3 text-text-secondary/80 leading-relaxed flex-1 break-words">{summary}</p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3" role="list" aria-label={`${title} project tags`}>
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 text-sm bg-accent-primary/10 text-accent-primary rounded break-words"
                role="listitem"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};