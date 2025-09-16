import { useEffect, useRef, useState } from 'react';

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
  'font-satoshi', 'font-inter', 'font-figtree', 
  'font-dm-sans', 'font-calistoga', 'font-jetbrains-mono', 'font-urbanist'
];

// Faster typing speeds for better responsiveness
const getRandomTypeSpeed = () => 20 + Math.random() * 30; // 20-50ms
const getRandomPause = () => 50 + Math.random() * 100; // 50-150ms for natural pauses
const getWordPause = () => 75 + Math.random() * 50; // 75-125ms after words
const getSentencePause = () => 150 + Math.random() * 100; // 150-250ms after sentences

export const TypewriterAnimation = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<boolean>(true);

  const cycleToNextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
    // Restart the animation with the new question
    animationRef.current = false;
    setTimeout(() => {
      animationRef.current = true;
    }, 100);
  };

  useEffect(() => {
    let questionIndex = currentQuestionIndex;

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const runAnimation = async () => {
      while (animationRef.current) {
        const question = questions[questionIndex];
        const font = fontClasses[questionIndex];
        const prefix = "How might we";
        const suffix = question.substring(prefix.length);

        if (questionRef.current && animationRef.current) {
          questionRef.current.className = `${font} text-center sm:text-left text-lg md:text-xl lg:text-2xl leading-tight transition-opacity duration-500 break-words w-full max-w-full overflow-hidden`;
          questionRef.current.style.opacity = '1';
          
          // Type prefix with natural variations
          for (let i = 0; i <= prefix.length; i++) {
            if (!animationRef.current) break;
            
            const typedText = prefix.substring(0, i);
            if (questionRef.current) {
              questionRef.current.innerHTML = `<span class="text-accent-primary">${typedText}</span><span class="typewriter-cursor"></span>`;
            }
            
            // Natural typing rhythm with variations
            const delay = getRandomTypeSpeed();
            await sleep(delay);
            
            // Add natural pauses after spaces
            if (prefix[i] === ' ') {
              await sleep(getWordPause());
            }
          }

          // Small pause before continuing with suffix
          await sleep(200);

          // Type suffix with natural rhythm
          for (let i = 0; i <= suffix.length; i++) {
            if (!animationRef.current) break;
            
            const typedSuffix = suffix.substring(0, i);
            
            if (questionRef.current) {
              questionRef.current.innerHTML = `<span class="text-accent-primary">${prefix}</span>${typedSuffix}<span class="typewriter-cursor"></span>`;
            }
            
            // Natural typing with more variation
            let delay = getRandomTypeSpeed();
            
            // Slow down for punctuation
            if (suffix[i] === ',' || suffix[i] === '.' || suffix[i] === '?') {
              delay += getSentencePause();
            }
            // Pause after spaces
            else if (suffix[i] === ' ') {
              delay += getWordPause();
            }
            
            await sleep(delay);
          }
          
          // Pause after typing complete, remove cursor
          await sleep(1500);
          
          if (questionRef.current && animationRef.current) {
            questionRef.current.innerHTML = questionRef.current.innerHTML.replace('<span class="typewriter-cursor"></span>', '');
          }

          // Smooth fade out
          if (questionRef.current && animationRef.current) {
            questionRef.current.style.opacity = '0';
          }
          await sleep(400);
          
          // Prepare for next loop
          questionIndex = (questionIndex + 1) % questions.length;
          
          if (questionRef.current && animationRef.current) {
            questionRef.current.innerHTML = '<span class="typewriter-cursor"></span>';
          }
          
          // Brief pause before starting next question
          await sleep(300);
        }
      }
    };

    runAnimation();

    return () => {
      animationRef.current = false;
    };
  }, [currentQuestionIndex]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        animationRef.current = false;
      } else {
        animationRef.current = true;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div
      ref={containerRef}
      id="text-animation-container"
      className="relative flex items-center justify-center w-full max-w-full h-[120px] sm:h-[140px] bg-bg-primary rounded-xl px-4 sm:pl-0 sm:pr-6 mb-6 cursor-pointer overflow-hidden"
      onClick={cycleToNextQuestion}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          cycleToNextQuestion();
        }
      }}
      aria-label="Click to cycle to the next design question"
    >
      <p
        ref={questionRef}
        id="animated-question"
        className="text-center sm:text-left text-lg md:text-xl lg:text-2xl leading-tight text-text-primary transition-opacity duration-500 break-words w-full max-w-full overflow-hidden"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="typewriter-cursor"></span>
      </p>
    </div>
  );
};