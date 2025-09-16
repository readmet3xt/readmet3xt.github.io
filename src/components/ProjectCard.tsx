import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
        className="w-full h-48 sm:h-52 object-cover flex-shrink-0"
        loading="lazy"
      />
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold font-dm-sans text-foreground break-words">{title}</h3>
        <p className="text-sm mt-1 text-text-secondary break-words">{description}</p>
        {summary && (
          <p className="text-xs mt-3 text-text-secondary/80 leading-relaxed flex-1 break-words">{summary}</p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto pt-3" role="list" aria-label={`${title} project tags`}>
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded break-words"
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