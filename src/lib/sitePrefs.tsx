import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { DARK, FONTS, LIGHT, type LookProps } from '@/motion/theme';

/* Visitor preferences: dark (default) or light theme, remembered on the device,
   and whether animations play, which follows the system's reduced-motion setting. */

export type Theme = 'dark' | 'light';

type Prefs = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  motion: boolean;
  setMotion: (on: boolean) => void;
  look: LookProps;
};

const THEME_COLOR: Record<Theme, string> = { dark: '#0B0B0C', light: '#FAFAF9' };

const readTheme = (): Theme => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

const REDUCE = '(prefers-reduced-motion: reduce)';

/** Animations follow the visitor's system setting (there is no on-site switch). */
const readMotion = () => !window.matchMedia(REDUCE).matches;

const save = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage blocked: the choice lasts for this page view only
  }
};

const PrefsContext = createContext<Prefs | null>(null);

export const SitePrefsProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(readTheme);
  const [motion, setMotionState] = useState(readMotion);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[next]);
    save('theme', next);
  }, []);

  const setMotion = useCallback((on: boolean) => setMotionState(on), []);

  // Follow the system setting if it changes, and drop the choice the old on-site switch saved.
  useEffect(() => {
    try {
      localStorage.removeItem('motion');
    } catch {
      // storage blocked
    }
    const mq = window.matchMedia(REDUCE);
    const update = () => setMotionState(!mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
  }, [theme]);

  const look = useMemo<LookProps>(() => ({ palette: theme === 'light' ? LIGHT : DARK, fonts: FONTS }), [theme]);
  const value = useMemo(() => ({ theme, setTheme, motion, setMotion, look }), [theme, setTheme, motion, setMotion, look]);

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
};

export const useSitePrefs = () => {
  const prefs = useContext(PrefsContext);
  if (!prefs) throw new Error('useSitePrefs must be used inside SitePrefsProvider');
  return prefs;
};
