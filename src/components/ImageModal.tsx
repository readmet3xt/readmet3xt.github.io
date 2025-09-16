import { useEffect, useRef, useState, useCallback } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageModal = ({ isOpen, images, currentIndex, onClose, onNext, onPrev }: ImageModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [wasResizing, setWasResizing] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 'auto', height: 'auto' });
  const resizeDataRef = useRef<{
    initialX: number;
    initialY: number;
    initialWidth: number;
    initialHeight: number;
  } | null>(null);

  const MIN_WIDTH = 300;
  const MIN_HEIGHT = 200;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);

  // Handle body overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Reset dimensions when opening modal
  useEffect(() => {
    if (isOpen && images[currentIndex]) {
      setDimensions({ width: 'auto', height: 'auto' });
      
      // Calculate optimal size based on image
      const tempImg = new Image();
      tempImg.onload = () => {
        const ratio = tempImg.naturalWidth / tempImg.naturalHeight;
        let w = Math.min(tempImg.naturalWidth, window.innerWidth * 0.85);
        let h = w / ratio;
        
        if (h > window.innerHeight * 0.85) {
          h = window.innerHeight * 0.85;
          w = h * ratio;
        }
        
        setDimensions({ width: `${w}px`, height: `${h}px` });
      };
      tempImg.src = images[currentIndex];
    }
  }, [isOpen, currentIndex, images]);

  const handleResize = useCallback((e: MouseEvent) => {
    if (!isResizing || !resizeDataRef.current || !contentRef.current) return;
    
    const { initialX, initialY, initialWidth, initialHeight } = resizeDataRef.current;
    const newWidth = Math.max(MIN_WIDTH, initialWidth + (e.clientX - initialX));
    const newHeight = Math.max(MIN_HEIGHT, initialHeight + (e.clientY - initialY));
    
    setDimensions({ width: `${newWidth}px`, height: `${newHeight}px` });
  }, [isResizing]);

  const stopResize = useCallback(() => {
    if (isResizing) {
      setWasResizing(true);
      setTimeout(() => setWasResizing(false), 10);
    }
    setIsResizing(false);
    document.body.style.userSelect = 'auto';
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', stopResize);
  }, [isResizing, handleResize]);

  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!contentRef.current) return;
    
    setIsResizing(true);
    resizeDataRef.current = {
      initialX: e.clientX,
      initialY: e.clientY,
      initialWidth: contentRef.current.offsetWidth,
      initialHeight: contentRef.current.offsetHeight,
    };
    
    document.body.style.userSelect = 'none';
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', stopResize);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current && !wasResizing) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="modal-container active"
      onClick={handleModalClick}
    >
      <div
        ref={contentRef}
        className="modal-content"
        style={dimensions}
      >
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        
        <button
          className="prev-btn"
          onClick={onPrev}
          aria-label="Previous image"
        >
          &#10094;
        </button>
        
        <button
          className="next-btn"
          onClick={onNext}
          aria-label="Next image"
        >
          &#10095;
        </button>
        
        <img
          src={images[currentIndex]}
          alt={`Artwork ${currentIndex + 1}`}
          className="modal-image-content"
        />
        
        <div
          className="resize-handle"
          onMouseDown={startResize}
          aria-label="Resize modal"
        />
      </div>
    </div>
  );
};