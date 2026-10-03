import type { CSSProperties } from 'react';
import { useSitePrefs } from '@/lib/sitePrefs';
import { PROJECT_COLORS, hslToken, readableOn } from '@/motion/colors';
import { DARK, LIGHT } from '@/motion/theme';

/**
 * CSS variables that make a case study's links, focus rings and chapter line use
 * the project's own colour, adjusted to 4.5:1 on the current theme's ground.
 */
export const useProjectAccent = (route?: string): CSSProperties | undefined => {
  const { theme } = useSitePrefs();
  const color = route ? PROJECT_COLORS[route] : undefined;
  if (!color) return undefined;
  const ground = theme === 'light' ? LIGHT.bg : DARK.bg;
  const text = readableOn(color, ground, 4.5);
  const hover = readableOn(color, ground, 6);
  return { '--accent-primary': hslToken(text), '--accent-hover': hslToken(hover), '--ring': hslToken(text) } as CSSProperties;
};
