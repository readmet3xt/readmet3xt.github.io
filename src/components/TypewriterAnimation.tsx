import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const questions = [
  "How might we make it easy to see if online information is trustworthy?",
  "How might we design social apps that leave people feeling happy and connected, not anxious?",
  "How might we make choosing the sustainable option the most convenient choice every day?",
  "How might we help people learn new skills easily throughout their entire lives?",
  "How might we use technology to help neighbors with different views solve local problems together?",
  "How might we create services that are just as easy for an 80-year-old to use as an 18-year-old?",
  "How might we give people simple, honest control over how their personal data is used?"
];

const lottieSources = [
  "https://lottie.host/afe6274d-7b48-43b1-a540-411910f70e36/c4puYH1f3t.lottie",
  "https://lottie.host/a33a3510-b739-4550-af87-67e2a2a3515e/A7Nej50tFT.lottie",
  "https://lottie.host/db276e0e-2f94-401d-8a52-c4d9ee665b90/s1LJRYPtPV.lottie",
  "https://lottie.host/de500585-e8a6-4318-9f61-db16e471403a/E09Bpjn0np.lottie",
  "https://lottie.host/d4940733-ce24-4dbb-a14e-9dfef936316a/k5M6KkI6Jr.lottie",
  "https://lottie.host/336f0a07-f047-4bac-bb05-560de2528843/RlgpAr0cgg.lottie",
  "https://lottie.host/d9a36635-1610-48ec-8863-7670f674ecb4/RplOYxCSbD.lottie"
];

const fontClasses = [
  'font-outfit',
  'font-playfair',
  'font-bricolage',
  'font-syne',
  'font-instrument',
  'font-jetbrains-mono',
  'font-inter'
];

const PREFIX = "How might we";

// Human-like typing constants
const BASE_SPEED = 25; // Faster base typing speed
const JITTER = 15; // Less variation between characters
const PUNCTUATION_PAUSE = 150; // Shorter pause at punctuation

const getNaturalDelay = (char: string) => {
  let delay = BASE_SPEED + Math.random() * JITTER;

  // Faster for vowels (easier to flow)
  if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
    delay *= 0.8;
  }

  // Pause slightly for punctuation
  if (['.', ',', '?', '!'].includes(char)) {
    delay += PUNCTUATION_PAUSE * (0.9 + Math.random() * 0.2);
  }

  return delay;
};

export const TypewriterAnimation = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTypingPrefix, setIsTypingPrefix] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearCurrentTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const startNextQuestion = useCallback(() => {
    clearCurrentTimeout();
    setIsComplete(false);
    setIsTypingPrefix(true);
    setDisplayText('');
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  }, []);

  useEffect(() => {
    if (isPaused || isComplete) return;

    const currentFullText = questions[currentQuestionIndex];

    const type = async () => {
      if (isTypingPrefix) {
        if (displayText.length < PREFIX.length) {
          const nextChar = PREFIX[displayText.length];
          const delay = getNaturalDelay(nextChar);

          timeoutRef.current = setTimeout(() => {
            setDisplayText(prev => prev + nextChar);
          }, delay);
        } else {
          // Pause briefly after prefix
          timeoutRef.current = setTimeout(() => {
            setIsTypingPrefix(false);
            setDisplayText(''); // Reset for suffix typing
          }, 500);
        }
      } else {
        const suffix = currentFullText.substring(PREFIX.length);
        if (displayText.length < suffix.length) {
          const nextChar = suffix[displayText.length];
          const delay = getNaturalDelay(nextChar);

          timeoutRef.current = setTimeout(() => {
            setDisplayText(prev => prev + nextChar);
          }, delay);
        } else {
          // Typing complete
          setIsComplete(true);
        }
      }
    };

    type();

    return () => clearCurrentTimeout();
  }, [displayText, isTypingPrefix, currentQuestionIndex, isComplete, isPaused, startNextQuestion]);

  // Transition to next question after completion
  useEffect(() => {
    if (!isComplete || isPaused) return;

    const timeout = setTimeout(() => {
      startNextQuestion();
    }, 4000); // Slightly longer delay to look at the Lottie

    return () => clearTimeout(timeout);
  }, [isComplete, isPaused, startNextQuestion]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearCurrentTimeout();
    };
  }, []);

  const scrollToNext = () => {
    const intro = document.querySelector('[aria-label="Introduction"]');
    if (intro) {
      intro.scrollIntoView({ behavior: 'auto', block: 'start' });
    } else {
      startNextQuestion();
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Transparent full-area overlay bleeding to viewport edges to capture clicks in side margins */}
      <div
        className="absolute top-0 bottom-0 z-10 cursor-pointer"
        style={{ left: '-50vw', right: '-50vw' }}
        onClick={scrollToNext}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') scrollToNext(); }}
        role="button"
        tabIndex={0}
        aria-label="Click to explore projects"
      />
      
      <div
        id="text-animation-container"
        className={cn(
          "relative flex flex-col items-center w-full max-w-full h-full min-h-[500px]",
          "bg-transparent rounded-xl overflow-hidden group"
        )}
      >

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-5xl mx-auto flex-1 min-h-0"
        >
          {/* Top spacer — h-48 on mobile clears the fixed header; lg:h-[16%] halves
              the prior whitespace above the lottie on desktop */}
          <div className="h-48 sm:h-40 lg:h-[16%] shrink-0" />

          {/* Lottie — shrink-0 keeps it fixed as text grows below */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-[25vh] lg:h-[25vh] xl:w-[28vh] xl:h-[28vh] max-w-[280px] max-h-[280px] lg:max-w-[300px] lg:max-h-[300px] shrink-0 mb-6 sm:mb-8">
            <DotLottieReact
              src={lottieSources[currentQuestionIndex]}
              loop
              autoplay
            />
          </div>

          {/* Question Text — text grows downward into the bottom spacer, lottie never moves */}
          <p
            className={`${fontClasses[currentQuestionIndex]} text-center text-2xl sm:text-3xl lg:text-[clamp(1.75rem,3.5vh,3rem)] xl:text-[clamp(2rem,4vh,3.5rem)] leading-tight break-words px-4 sm:px-8 lg:px-12 xl:px-16 text-text-primary`}
            aria-live="polite"
          >
            {isTypingPrefix ? (
              <span className="text-accent-primary">
                {displayText}
                {!isComplete && <span className="typewriter-cursor"></span>}
              </span>
            ) : (
              <>
                <span className="text-accent-primary">{PREFIX}</span> {displayText}
                {!isComplete && <span className="typewriter-cursor"></span>}
              </>
            )}
          </p>

          {/* Bottom spacer absorbs space so text grows down without pushing lottie up */}
          <div className="flex-1" />
        </motion.div>
      </AnimatePresence>

      </div>

      {/* Explore CTA — anchored to the full hero height (not the inner min-h-[500px]
          container) so it always stays within the first viewport. Prominent,
          highlighted and clickable. */}
      <motion.button
        type="button"
        onClick={scrollToNext}
        aria-label="Click to explore projects"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6, ease: 'easeOut' }}
        className="group/explore absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2.5 rounded-full border border-accent-primary/50 bg-accent-primary/10 px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:bg-accent-primary hover:border-accent-primary hover:shadow-[0_0_36px_hsl(var(--accent-primary)/0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary"
      >
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-ibm-plex-mono font-semibold text-accent-primary transition-colors duration-300 group-hover/explore:text-black">
          Click to explore
        </span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-accent-primary transition-colors duration-300 group-hover/explore:text-black"
        >
          <ChevronDown size={16} strokeWidth={2.5} />
        </motion.span>
      </motion.button>
    </div>
  );
};