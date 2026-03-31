import { useEffect, useRef, useCallback } from 'react';

interface ImageGridItemProps {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
}

export const ImageGridItem = ({ src, alt, onClick, className = "" }: ImageGridItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isPressing = useRef(false);

  const handlePressStart = useCallback(() => {
    const item = itemRef.current;
    if (!item) return;
    isPressing.current = true;
    item.style.transition = 'transform 0.15s cubic-bezier(0.2, 0, 0.4, 1)';
    item.style.transform = 'perspective(1000px) scale(0.95)';
  }, []);

  const handlePressEnd = useCallback(() => {
    const item = itemRef.current;
    if (!item || !isPressing.current) return;
    isPressing.current = false;
    item.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
  }, []);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (isPressing.current) return; // Don't override press animation
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 15;
      const rotateY = (rect.width / 2 - x) / 15;

      item.style.transition = 'transform 0.1s ease';
      item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    };

    const handleMouseLeave = () => {
      if (isPressing.current) {
        isPressing.current = false;
      }
      item.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
      item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    };

    item.addEventListener('mousemove', handleMouseMove);
    item.addEventListener('mouseleave', handleMouseLeave);
    item.addEventListener('mousedown', handlePressStart);
    item.addEventListener('mouseup', handlePressEnd);
    item.addEventListener('touchstart', handlePressStart, { passive: true });
    item.addEventListener('touchend', handlePressEnd);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
      item.removeEventListener('mouseleave', handleMouseLeave);
      item.removeEventListener('mousedown', handlePressStart);
      item.removeEventListener('mouseup', handlePressEnd);
      item.removeEventListener('touchstart', handlePressStart);
      item.removeEventListener('touchend', handlePressEnd);
    };
  }, [handlePressStart, handlePressEnd]);

  return (
    <div
      ref={itemRef}
      className={`image-grid-item ${className}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
      />
    </div>
  );
};