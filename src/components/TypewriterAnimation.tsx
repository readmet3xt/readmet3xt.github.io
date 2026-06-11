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
  "https://lottie.host/d9a36635-1610-48ec-8863-7670f674ecb4/RplOYxCSbD.lottie"
];

const PREFIX = "How might we";

// Human-like typing constants
const BASE_SPEED = 25;
const JITTER = 15;
const PUNCTUATION_PAUSE = 150;

const getNaturalDelay = (char: string) => {
  let delay = BASE_SPEED + Math.random() * JITTER;

  if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
    delay *= 0.8;
  }

  if (['.', ',', '?', '!'].includes(char)) {
    delay += PUNCTUATION_PAUSE * (0.9 + Math.random() * 0.2);
  }

  return delay;
};

interface TypewriterAnimationProps {
  className?: string;
}

// Compact "How might we" card — Lottie + rotating question.
// Lives inside the hero's right column; clicking it advances to the next question.
export const TypewriterAnimation = ({ className }: TypewriterAnimationProps) => {
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

    if (isTypingPrefix) {
      if (displayText.length < PREFIX.length) {
        const nextChar = PREFIX[displayText.length];
        timeoutRef.current = setTimeout(() => {
          setDisplayText(prev => prev + nextChar);
        }, getNaturalDelay(nextChar));
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsTypingPrefix(false);
          setDisplayText('');
        }, 500);
      }
    } else {
      const suffix = currentFullText.substring(PREFIX.length);
      if (displayText.length < suffix.length) {
        const nextChar = suffix[displayText.length];
        timeoutRef.current = setTimeout(() => {
          setDisplayText(prev => prev + nextChar);
        }, getNaturalDelay(nextChar));
      } else {
        setIsComplete(true);
      }
    }

    return () => clearCurrentTimeout();
  }, [displayText, isTypingPrefix, currentQuestionIndex, isComplete, isPaused]);

  // Transition to next question after completion
  useEffect(() => {
    if (!isComplete || isPaused) return;

    const timeout = setTimeout(() => {
      startNextQuestion();
    }, 4000);

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
      className={cn(
        "flex flex-col items-center justify-center text-center cursor-pointer select-none group",
        className
      )}
      onClick={startNextQuestion}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') startNextQuestion();
      }}
      aria-label="Show the next design question"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Lottie Animation */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-60 lg:h-60 xl:w-72 xl:h-72 mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-[1.03]">
            <DotLottieReact
              src={lottieSources[currentQuestionIndex]}
              loop
              autoplay
            />
          </div>

          {/* Question Text */}
          <p
            className="font-bricolage text-lg sm:text-xl lg:text-2xl leading-snug text-text-primary min-h-[4.5rem] px-2 max-w-md"
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

      <p className="mt-3 text-[10px] uppercase tracking-widest font-ibm-plex-mono text-text-tertiary opacity-0 group-hover:opacity-60 transition-opacity duration-300">
        Tap for another question
      </p>
    </div>
  );
};
