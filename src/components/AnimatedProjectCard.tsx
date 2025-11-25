import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCardHoverEffect } from '@/hooks/useCardHoverEffect';

interface AnimatedProjectCardProps {
  href: string;
  title: string;
  description: string;
  images: string[]; // Array of image paths
  className?: string;
  summary?: string;
  tags?: string[];
}

export const AnimatedProjectCard = ({ href, title, description, images, className = "", summary, tags }: AnimatedProjectCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use optimized hover effect hook
  useCardHoverEffect(cardRef, {
    maxRotation: 10,
    transitionDuration: 100,
  });

  // Auto-animate between images with preloading
  useEffect(() => {
    if (images.length <= 1) return;

    // Preload next image for smooth transitions
    const preloadNextImage = () => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      const img = new Image();
      img.src = images[nextIndex];
    };

    preloadNextImage();

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length, currentImageIndex, images]);

  return (
    <Link
      ref={cardRef}
      to={href}
      className={`project-card reveal-on-scroll rounded-xl overflow-hidden group bg-card block min-h-[340px] flex flex-col w-full max-w-full ${className}`}
      aria-label={`View ${title} project details`}
    >
      <div className="relative w-full h-48 sm:h-52 flex-shrink-0 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} project preview ${index + 1} of ${images.length}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        ))}
      </div>
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold font-dm-sans text-foreground break-words">{title}</h3>
        <p className="text-base sm:text-lg mt-1 text-text-secondary break-words">{description}</p>
        {summary && (
          <p className="text-sm sm:text-base mt-3 text-text-secondary/80 leading-relaxed flex-1 break-words">{summary}</p>
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