import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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
  "https://lottie.host/23f9baeb-81af-4741-89fc-463f9b0d5bee/jTZfXT1G8C.lottie"
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

  return (
    <div
      id="text-animation-container"
      className={cn(
        "relative flex flex-col items-center justify-center w-full max-w-full",
        "min-h-[500px] lg:min-h-screen lg:-mt-12", // Offset the pt-12 (3rem) from PageLayout for perfect absolute center
        "bg-bg-primary rounded-xl px-4 mb-0 cursor-pointer overflow-hidden group"
      )}
      onClick={() => {
        // Dispatch custom event for sidebar trigger
        window.dispatchEvent(new CustomEvent('typewriter-clicked'));

        // Scroll to projects grid
        const grid = document.querySelector('[aria-label="Portfolio projects"]');
        if (grid) {
          grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          startNextQuestion();
        }
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          window.dispatchEvent(new CustomEvent('typewriter-clicked'));
          const grid = document.querySelector('[aria-label="Portfolio projects"]');
          if (grid) {
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            startNextQuestion();
          }
        }
      }}
      aria-label="Click to explore projects"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto"
        >
          {/* Lottie Animation */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] mt-8 mb-6 sm:mb-8">
            <DotLottieReact
              src={lottieSources[currentQuestionIndex]}
              loop
              autoplay
            />
          </div>

          {/* Question Text */}
          <p
            className={`${fontClasses[currentQuestionIndex]} text-center text-2xl sm:text-3xl lg:text-5xl xl:text-6xl leading-tight break-words px-4 sm:px-8 lg:px-12 text-text-primary`}
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
        </motion.div>
      </AnimatePresence>

      {/* Scroll indicator for desktop focus */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hidden lg:flex"
      >
        <p className="text-[10px] uppercase tracking-widest font-ibm-plex-mono text-text-tertiary opacity-60">Click to explore</p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-3 rounded-full bg-accent-primary opacity-40"
        />
      </motion.div>
    </div>
  );
};