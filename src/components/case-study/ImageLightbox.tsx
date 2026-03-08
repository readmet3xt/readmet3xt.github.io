import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const ImageLightbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState<{ src: string, alt: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleOpen = (e: Event) => {
            const customEvent = e as CustomEvent;
            const src = customEvent.detail.src;
            const decodedEventSrc = decodeURIComponent(src);

            // Find all lightbox images on the page
            const imgElements = document.querySelectorAll('img.lightbox-image');
            const imgArray = Array.from(imgElements).map(img => ({
                src: (img as HTMLImageElement).src,
                alt: (img as HTMLImageElement).alt || ''
            }));

            // Use decoded URLs for accurate matching
            const index = imgArray.findIndex(img => {
                const decodedImgSrc = decodeURIComponent(img.src);
                return decodedImgSrc === decodedEventSrc || decodedImgSrc.endsWith(decodedEventSrc);
            });

            if (imgArray.length > 0) {
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
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
    }, [images.length]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

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

    // lock body scroll
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset' };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
                    onClick={handleClose}
                >
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 flex items-center justify-center hover:text-white bg-black/50 rounded-full z-50 p-2"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {images.length > 1 && currentIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 sm:left-4 text-white/70 hover:text-white bg-black/50 rounded-full z-50 p-2"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                    )}

                    {images.length > 1 && currentIndex < images.length - 1 && (
                        <button
                            onClick={handleNext}
                            className="absolute right-2 sm:right-4 text-white/70 hover:text-white bg-black/50 rounded-full z-50 p-2"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    )}

                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="max-w-full max-h-[90vh] object-contain rounded-md"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
