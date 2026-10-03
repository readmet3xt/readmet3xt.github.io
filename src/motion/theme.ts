// Palettes mirror the site's colour tokens in index.css (dark by default,
// light via the sidebar switch). Fonts are Geist and Geist Mono.

export type Palette = {
  mode: 'dark' | 'light';
  bg: string;
  panel: string;
  ink: string;
  muted: string;
  faint: string;
  line: string;
  /** "you are here": the person moving through a service */
  accent: string;
  onAccent: string;
};

export const DARK: Palette = {
  mode: 'dark',
  bg: '#0B0B0C',
  panel: '#151517',
  ink: '#F2F2F3',
  muted: '#A3A3A8',
  faint: '#6B6B70',
  line: 'rgba(242, 242, 243, 0.16)',
  accent: '#3E8BFF',
  onAccent: '#FFFFFF',
};

export const LIGHT: Palette = {
  mode: 'light',
  bg: '#FAFAF9',
  panel: '#EFEFED',
  ink: '#1D1D1F',
  muted: '#5F5F64',
  faint: '#9A9A9F',
  line: 'rgba(29, 29, 31, 0.16)',
  accent: '#0A66D8',
  onAccent: '#FFFFFF',
};

export type Fonts = { display: string; text: string; mono: string; displayWeight: number; displayTracking: number };

export const FONTS: Fonts = {
  display: '"Geist", system-ui, sans-serif',
  text: '"Geist", system-ui, sans-serif',
  mono: '"Geist Mono", ui-monospace, monospace',
  displayWeight: 600,
  displayTracking: -0.035,
};

export type LookProps = { palette: Palette; fonts: Fonts };
