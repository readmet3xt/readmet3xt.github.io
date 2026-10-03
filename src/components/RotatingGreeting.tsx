import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSitePrefs } from '@/lib/sitePrefs';

const WORDS = ['hi', 'aadab', 'namaste'];
const HOLD = 3200; // ms each word stays
const OUT = 360; // ms for a letter to leave
const OUT_STAGGER = 26;
const IN = 900; // ms for a letter to arrive and settle
const IN_DELAY = 140;
const IN_STAGGER = 48;
const CALM = 'cubic-bezier(0.23, 1, 0.32, 1)';

const accent = () => `hsl(${getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim()})`;

/** One word, split into letters that animate in or out one after another. */
const Word = ({ text, mode, onDone }: { text: string; mode: 'still' | 'in' | 'out'; onDone?: () => void }) => {
  const letters = useRef<(HTMLSpanElement | null)[]>([]);
  const done = useRef(onDone);
  done.current = onDone;

  useLayoutEffect(() => {
    if (mode === 'still') return;
    const els = letters.current.filter(Boolean) as HTMLSpanElement[];
    const ink = getComputedStyle(els[0]).color;
    const anims = els.map((el, i) =>
      mode === 'out'
        ? el.animate(
            [
              { transform: 'none', opacity: 1, filter: 'blur(0px)' },
              { transform: 'translateY(-0.32em)', opacity: 0, filter: 'blur(8px)' },
            ],
            { duration: OUT, delay: i * OUT_STAGGER, easing: 'cubic-bezier(0.55, 0, 1, 0.45)', fill: 'forwards' },
          )
        : el.animate(
            [
              { transform: 'translateY(0.32em) rotateX(-75deg)', opacity: 0, filter: 'blur(8px)', color: accent() },
              { transform: 'none', opacity: 1, filter: 'blur(0px)', color: accent(), offset: 0.55 },
              { transform: 'none', opacity: 1, filter: 'blur(0px)', color: ink },
            ],
            { duration: IN, delay: IN_DELAY + i * IN_STAGGER, easing: CALM, fill: 'backwards' },
          ),
    );
    const last = anims[anims.length - 1];
    if (last) last.onfinish = () => done.current?.();
    return () => anims.forEach((a) => a.cancel());
  }, [mode]);

  return (
    <span className="col-start-1 row-start-1 whitespace-nowrap">
      {[...text].map((ch, i) => (
        <span key={i} ref={(el) => (letters.current[i] = el)} className="inline-block [backface-visibility:hidden] [transform-origin:50%_100%]">
          {ch}
        </span>
      ))}
    </span>
  );
};

/**
 * The first line of "hi / i'm amaan.", turning through hi, aadab and namaste:
 * the old word lifts away letter by letter while the new one flips up in the
 * accent colour and settles. Static ("hi") when the visitor prefers less motion.
 */
export const RotatingGreeting = () => {
  const { motion } = useSitePrefs();
  const [i, setI] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [turn, setTurn] = useState(0);
  const current = useRef(0);

  useEffect(() => {
    if (!motion) {
      current.current = 0;
      setI(0);
      setLeaving(null);
      return;
    }
    const timer = setInterval(() => {
      const previous = current.current;
      current.current = (previous + 1) % WORDS.length;
      setLeaving(previous);
      setI(current.current);
      setTurn((t) => t + 1);
    }, HOLD);
    return () => clearInterval(timer);
  }, [motion]);

  return (
    <span className="inline-grid align-baseline [perspective:700px]">
      {leaving !== null && <Word key={`out-${turn}`} text={WORDS[leaving]} mode="out" onDone={() => setLeaving(null)} />}
      <Word key={`in-${turn}`} text={WORDS[i]} mode={turn === 0 ? 'still' : 'in'} />
    </span>
  );
};
