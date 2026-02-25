import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  "How might we make it easy to see if online information is trustworthy?",
  "How might we design social apps that leave people feeling happy and connected, not anxious?",
  "How might we make choosing the sustainable option the most convenient choice every day?",
  "How might we help people learn new skills easily throughout their entire lives?",
  "How might we use technology to help neighbors with different views solve local problems together?",
  "How might we create services that are just as easy for an 80-year-old to use as an 18-year-old?",
  "How might we give people simple, honest control over how their personal data is used?"
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
    }, 3000);

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
      className="relative flex items-center justify-center w-full max-w-full min-h-[160px] sm:min-h-[200px] lg:min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-100px)] bg-bg-primary rounded-xl px-4 sm:pl-0 sm:pr-6 mb-12 cursor-pointer overflow-hidden group"
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
      <motion.p
        key={currentQuestionIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`${fontClasses[currentQuestionIndex]} text-center sm:text-left text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-tight break-words w-full max-w-full overflow-hidden text-text-primary px-4 sm:px-8 lg:px-12`}
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
      </motion.p>

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
    </div >
  );
};