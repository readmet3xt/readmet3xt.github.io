import { useState, useEffect, useRef, memo } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  relationship: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chandana Gowda",
    title: "UI/UX Designer",
    company: "KoinBasket",
    relationship: "February 26, 2025, Chandana reported directly to Amaan",
    content: "I had the pleasure of working with Amaan Khan, and he was an incredible mentor throughout my role. He generously shared materials, provided valuable tips, and guided me in refining my skills. What truly stands out about Amaan is his meticulous attention to detail and his ability to explore multiple solutions to meet both client expectations and design requirements. He consistently strives to enhance products through thorough research and innovative ideas while keeping a company's budget in mind. Overall, he is not only a talented designer but also a great person to work with. I'm grateful to have had the opportunity to learn from him and highly recommend him to anyone looking for a skilled and thoughtful professional."
  },
  {
    id: 2,
    name: "Khaleelulla Baig",
    title: "Founder",
    company: "KoinBasket",
    relationship: "October 7, 2023, Khaleelulla managed Amaan directly",
    content: "Amaan is a great talent in the UI UX design space. He thinks out of the box and follows the most appropriate research and implementation process. All the best and look forward to collaborating again"
  },
  {
    id: 3,
    name: "Deljo Joseph",
    title: "Founder",
    company: "Getter",
    relationship: "October 3, 2023, Deljo was Amaan's client",
    content: "I worked closely with Amaan at KoinBasket on various projects. He consistently delivered impressive UI/UX work, even on tight deadlines. He's a genuine team player and a great asset to any team."
  },
  {
    id: 4,
    name: "Elin Sjursen",
    title: "Senior Design Strategy Director",
    company: "Visa",
    relationship: "May 4, 2022, Elin was Amaan's mentor",
    content: "Amaan delivered his final student work at RCA as an employee experience project in collaboration with Visa. He and his team did an amazing job exploring ways of creating happy environments for our remotely working employees. Amaan was not only proactive in managing his stakeholders and bringing together the right people at the right time in the design thinking process, his thoughts, analysis of the insight and creative output was thoughtful, articulate and incredibly creative. Check out the Pebbles project in his portfolio and you will be very impressed. Dependable, smart, insightful and driven, I highly recommend you snap up Amaan on your team."
  }
];

const TestimonialCard = memo(({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) => (
  <Card className={`w-full max-w-full bg-card backdrop-blur-sm border-primary/20 overflow-hidden shadow-none`}>
    <CardContent className="p-4 sm:p-5 md:p-6 text-center lg:text-left">
      <div className="mb-4">
        <h3 className="font-bold text-xl sm:text-2xl text-primary break-words">{testimonial.name}</h3>
        <p className="text-base sm:text-lg text-text-secondary font-medium break-words">
          {testimonial.title}
          {testimonial.company && ` @ ${testimonial.company}`}
        </p>
        <p className="text-sm sm:text-base text-text-secondary/80 mt-1 break-words">{testimonial.relationship}</p>
      </div>
      <p className="text-base sm:text-lg text-text-secondary leading-relaxed break-words">{testimonial.content}</p>
      <a
        href="https://www.linkedin.com/in/readmetxt/details/recommendations/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-[10px] font-ibm-plex-mono uppercase tracking-widest text-foreground/70 hover:text-accent-primary transition-colors hover:opacity-100 group"
      >
        <Linkedin className="w-3 h-3 transition-transform group-hover:scale-110" />
        View on LinkedIn
      </a>
    </CardContent>
  </Card>
));

TestimonialCard.displayName = 'TestimonialCard';

interface TestimonialsCarouselProps {
  showTitle?: boolean;
}

export const TestimonialsCarousel = memo(({ showTitle = true }: TestimonialsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate reading time based on text length (average 200 words per minute)
  const getReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(' ').length;
    const readingTimeMs = (words / wordsPerMinute) * 60 * 1000;
    return Math.max(4000, Math.min(8000, readingTimeMs)); // Min 4s, max 8s
  };

  // Auto-ticker functionality with dynamic timing
  useEffect(() => {
    if (!isPaused) {
      const currentTestimonial = testimonials[currentIndex];
      const readingTime = getReadingTime(currentTestimonial.content);

      intervalRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, readingTime);
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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
        {showTitle && <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Testimonials</h2>}
        <div className={`flex gap-2 ${!showTitle ? 'ml-auto' : ''}`}>
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            className="h-8 w-8 p-0 flex-shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            className="h-8 w-8 p-0 flex-shrink-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="min-h-[300px] flex items-center justify-center relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="w-full"
            role="tabpanel"
            aria-live="polite"
          >
            <TestimonialCard
              testimonial={testimonials[currentIndex]}
              isActive={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
});

TestimonialsCarousel.displayName = 'TestimonialsCarousel';
