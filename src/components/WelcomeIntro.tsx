import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSitePrefs } from '@/lib/sitePrefs';
import { cn } from '@/lib/utils';
import { MotionStage } from '@/motion/MotionStage';
import { WELCOME } from '@/motion/registry';
import { setWelcomeActive } from '@/motion/ticker';

const KEY = 'welcomed';
const seen = () => {
  try {
    return !!localStorage.getItem(KEY);
  } catch {
    return true; // storage blocked: don't risk showing it on every visit
  }
};

/** First-visit welcome on the home page. Plays once, can always be skipped, and the page loads underneath. */
export const WelcomeIntro = () => {
  const { motion } = useSitePrefs();
  const location = useLocation();
  const navigate = useNavigate();
  const replayRequested = !!(location.state as { replayIntro?: boolean } | null)?.replayIntro;
  const [show, setShow] = useState(() => replayRequested || !seen());
  const [leaving, setLeaving] = useState(false);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useLayoutEffect(() => {
    setWelcomeActive(show && !leaving);
    return () => setWelcomeActive(false);
  }, [show, leaving]);

  const finish = useCallback(() => {
    setLeaving(true);
    try {
      localStorage.setItem(KEY, '1');
    } catch {
      // storage blocked
    }
    setTimeout(() => {
      setShow(false);
      setLeaving(false);
    }, 550);
  }, []);

  // A replay request arrives as navigation state; clear it so a reload doesn't replay again.
  useEffect(() => {
    if (replayRequested) navigate(location.pathname + location.hash, { replace: true, state: null });
  }, [replayRequested, navigate, location.pathname, location.hash]);

  // "Replay the intro" from the footer while already on the home page.
  useEffect(() => {
    const replay = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
      setLeaving(false);
      setShow(true);
    };
    window.addEventListener('replay-intro', replay);
    return () => window.removeEventListener('replay-intro', replay);
  }, []);

  useEffect(() => {
    if (!show || leaving) return;
    const skip = () => finish();
    window.addEventListener('keydown', skip);
    window.addEventListener('wheel', skip, { passive: true });
    window.addEventListener('touchmove', skip, { passive: true });
    // With animations off, show the greeting for a moment, without movement.
    const timer = motion ? undefined : setTimeout(finish, 1400);
    return () => {
      window.removeEventListener('keydown', skip);
      window.removeEventListener('wheel', skip);
      window.removeEventListener('touchmove', skip);
      clearTimeout(timer);
    };
  }, [show, leaving, motion, finish]);

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome"
      onClick={finish}
      className={cn(
        'fixed inset-0 z-[80] bg-bg-primary transition-opacity duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
        leaving && 'pointer-events-none opacity-0',
      )}
    >
      <MotionStage
        key={`${size.width}x${size.height}`}
        component={WELCOME.component}
        width={size.width}
        height={size.height}
        durationInFrames={WELCOME.durationInFrames}
        autoPlay="mount"
        fill
        onEnded={() => setTimeout(finish, 700)}
        label={WELCOME.label}
      />
      <button
        type="button"
        onClick={finish}
        className="absolute right-4 top-4 rounded-full border border-border px-4 py-2 font-mono text-xs text-text-secondary hover:text-text-primary"
        style={{ top: 'calc(env(safe-area-inset-top, 0px) + 1rem)' }}
      >
        Skip
      </button>
    </div>
  );
};
