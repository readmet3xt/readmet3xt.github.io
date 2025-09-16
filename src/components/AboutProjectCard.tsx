import { useEffect, useRef } from 'react';

interface AboutProjectCardProps {
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
}

export const AboutProjectCard = ({ title, description, onClick, className = "" }: AboutProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 20;
      const rotateY = (rect.width / 2 - x) / 20;
      
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
    <div
      ref={cardRef}
      className={`project-card rounded-lg shadow-md overflow-hidden cursor-pointer bg-card border border-border hover:border-accent-primary p-6 ${className}`}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
};