import { useState, useEffect, useRef, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certificate {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "London Business School - Brand Management Certificate",
    image: "/lovable-uploads/2a61f154-ffd9-4cf1-94c4-485003fa7bf7.png",
    alt: "London Business School Certificate of Attendance for Brand Management"
  },
  {
    id: 2,
    title: "Think Design - Design Research Internship Certificate",
    image: "/lovable-uploads/5db3cc76-4297-4638-857d-e6c393a2301f.png",
    alt: "Think Design Certificate of Internship for Design Research"
  },
  {
    id: 3,
    title: "Core77 Design Awards - Student Notable",
    image: "/lovable-uploads/656f68a3-f2e8-46d8-b948-1d4067ef6177.png",
    alt: "Core77 Design Awards 2021 Student Notable for Invisible Value Income Program"
  }
];

const CertificateCard = memo(({ certificate, isActive }: { certificate: Certificate; isActive: boolean }) => (
  <div className={`w-full max-w-full flex-shrink-0 px-1 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-95'}`}>
    <div className="bg-card backdrop-blur-sm border border-border/30 rounded-lg overflow-hidden">
      <img 
        src={certificate.image} 
        alt={certificate.alt}
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
));

CertificateCard.displayName = 'CertificateCard';

export const CertificatesCarousel = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-ticker functionality with 3 seconds interval
  useEffect(() => {
    if (!isPaused && !isTransitioning) {
      intervalRef.current = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % certificates.length);
          setIsTransitioning(false);
        }, 300); // Fade transition duration
      }, 3000); // 3 seconds interval
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [currentIndex, isPaused, isTransitioning]);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="relative w-full max-w-full overflow-hidden px-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">Certificates & Awards</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            className="h-8 w-8 p-0 flex-shrink-0"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            className="h-8 w-8 p-0 flex-shrink-0"
            aria-label="Next certificate"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className={`flex transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)` 
          }}
          role="tabpanel"
          aria-live="polite"
        >
          {certificates.map((certificate, index) => (
            <CertificateCard 
              key={certificate.id}
              certificate={certificate}
              isActive={index === currentIndex}
            />
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Certificate navigation">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              index === currentIndex 
                ? 'bg-primary w-6' 
                : 'bg-text-secondary/30 hover:bg-text-secondary/50'
            }`}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to certificate ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

CertificatesCarousel.displayName = 'CertificatesCarousel';