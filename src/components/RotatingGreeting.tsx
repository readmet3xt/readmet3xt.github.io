import { useEffect, useState } from 'react';
import { useSitePrefs } from '@/lib/sitePrefs';

const WORDS = ['hi', 'aadab', 'namaste'];
const EVERY = 3000;
const SWAP = 380;

/** The first word of "hi. i'm amaan.", turning through hi, aadab and namaste. */
export const RotatingGreeting = () => {
  const { motion } = useSitePrefs();
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<'shown' | 'out' | 'in'>('shown');

  useEffect(() => {
    if (!motion) {
      setI(0);
      setPhase('shown');
      return;
    }
    let swap: ReturnType<typeof setTimeout>;
    let settle: ReturnType<typeof setTimeout>;
    const timer = setInterval(() => {
      setPhase('out');
      swap = setTimeout(() => {
        setI((n) => (n + 1) % WORDS.length);
        setPhase('in');
        settle = setTimeout(() => setPhase('shown'), 30);
      }, SWAP);
    }, EVERY);
    return () => {
      clearInterval(timer);
      clearTimeout(swap);
      clearTimeout(settle);
    };
  }, [motion]);

  const style =
    phase === 'out'
      ? { opacity: 0, transform: 'translateY(-0.28em)' }
      : phase === 'in'
        ? { opacity: 0, transform: 'translateY(0.28em)', transition: 'none' }
        : { opacity: 1, transform: 'none' };

  return (
    <span
      className="inline-block transition-[opacity,transform] duration-[380ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
      style={style}
    >
      {WORDS[i]}
    </span>
  );
};
