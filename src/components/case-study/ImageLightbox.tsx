import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const ImageLightbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState<{ src: string, alt: string, caption?: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const closeButton = useRef<HTMLButtonElement>(null);
    const opener = useRef<HTMLElement | null>(null);
    const swipeStart = useRef<{ x: number; y: number } | null>(null);
    const swiped = useRef(false);

    useEffect(() => {
        const handleOpen = (e: Event) => {
            const customEvent = e as CustomEvent;
            const src = customEvent.detail.src;
            const decodedEventSrc = decodeURIComponent(src);

            // Find all lightbox images on the page
            const imgElements = document.querySelectorAll('img.lightbox-image');
            const imgArray = Array.from(imgElements).map(img => ({
                src: (img as HTMLImageElement).src,
                alt: (img as HTMLImageElement).alt || '',
                caption: (img as HTMLImageElement).dataset.lightboxCaption || ''
            }));

            // Use decoded URLs for accurate matching
            const index = imgArray.findIndex(img => {
                const decodedImgSrc = decodeURIComponent(img.src);
                return decodedImgSrc === decodedEventSrc || decodedImgSrc.endsWith(decodedEventSrc);
            });

            if (imgArray.length > 0) {
                opener.current = document.activeElement as HTMLElement | null;
                setImages(imgArray);
                setCurrentIndex(index >= 0 ? index : 0);
                setIsOpen(true);
            }
        };

        window.addEventListener('open-lightbox', handleOpen);
        return () => window.removeEventListener('open-lightbox', handleOpen);
    }, []);

    const handleClose = () => setIsOpen(false);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        // the viewer loops, so the arrows (and keyboard focus on them) never disappear
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') handleClose();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleNext, handlePrev]);

    // Focus moves into the viewer, and back to whatever opened it when it closes.
    useEffect(() => {
        if (isOpen) closeButton.current?.focus();
        else opener.current?.focus();
    }, [isOpen]);

    // Swipe left or right on touch screens to move between images.
    const onPointerDown = (e: React.PointerEvent) => {
        swipeStart.current = { x: e.clientX, y: e.clientY };
        swiped.current = false;
    };
    const onPointerUp = (e: React.PointerEvent) => {
        const start = swipeStart.current;
        swipeStart.current = null;
        if (!start) return;
        const dx = e.clientX - start.x;
        const dy = e.clientY - start.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            swiped.current = true;
            if (dx < 0) handleNext();
            else handlePrev();
        }
    };

    // lock body scroll
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset' };
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image viewer"
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 animate-[lightbox-fade_0.25s_ease-out]"
                    style={{ touchAction: 'pan-y' }}
                    onPointerDown={onPointerDown}
                    onPointerUp={onPointerUp}
                    onClick={() => {
                        // a swipe ends in a click; it moves between images rather than closing
                        if (swiped.current) swiped.current = false;
                        else handleClose();
                    }}
                >
                    <button
                        ref={closeButton}
                        onClick={handleClose}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 flex items-center justify-center hover:text-white bg-black/50 rounded-full z-50 p-2"
                        aria-label="Close image lightbox"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {images.length > 1 && (
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 sm:left-4 text-white/70 hover:text-white bg-black/50 rounded-full z-50 p-2"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                    )}

                    {images.length > 1 && (
                        <button
                            onClick={handleNext}
                            className="absolute right-2 sm:right-4 text-white/70 hover:text-white bg-black/50 rounded-full z-50 p-2"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    )}

                    <img
                        key={currentIndex}
                        draggable={false}
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="max-w-full max-h-[90vh] object-contain rounded-md animate-[lightbox-in_0.35s_cubic-bezier(0.23,1,0.32,1)]"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {images[currentIndex]?.caption && (
                        <div
                            className="absolute bottom-12 left-1/2 -translate-x-1/2 max-w-[min(90vw,56rem)] rounded-md bg-black/55 px-4 py-2 text-center text-sm text-white/90"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {images[currentIndex].caption}
                        </div>
                    )}

                    <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
};
