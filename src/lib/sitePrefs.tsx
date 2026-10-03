import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { DARK, FONTS, LIGHT, type LookProps } from '@/motion/theme';

/* Visitor preferences: dark (default) or light theme, and whether animations
   play. Both are remembered on the device; animations start off for anyone who
   has asked their system for reduced motion. */

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

const readMotion = () => {
  try {
    const saved = localStorage.getItem('motion');
    if (saved === 'on' || saved === 'off') return saved === 'on';
  } catch {
    // storage blocked: fall back to the system setting
  }
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

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

  const setMotion = useCallback((on: boolean) => {
    setMotionState(on);
    save('motion', on ? 'on' : 'off');
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
