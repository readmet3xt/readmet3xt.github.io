// Colours: the site accent comes from the presentation deck (#FF4757), and each
// case study keeps the colour it had before. Any colour is nudged lighter or
// darker, never re-hued, until it reads on the ground it sits on.

export const DECK_ACCENT = '#FF4757';
export const DECK_ACCENT_HOVER = '#FF5C69';

/** Each case study's own colour, keyed by route. */
export const PROJECT_COLORS: Record<string, string> = {
  '/pebble': '#26A69A',
  '/stampede': '#A8A9A1',
  '/iviprogram': '#7A8EB1',
  '/softwire': '#E3000F',
  '/koinbasket': '#8B5CF6',
  '/otagon': '#FF8C00',
  '/lawx': '#EAB308',
  '/versus': '#ADFF2F',
  '/screenshot': '#F59E0B',
};

const toRgb = (hex: string) => {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const luminance = (hex: string) => {
  const [r, g, b] = toRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

export const toHsl = (hex: string): [number, number, number] => {
  const [r, g, b] = toRgb(hex).map((v) => v / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h * 60, s * 100, l * 100];
};

const fromHsl = (h: number, s: number, l: number) => {
  const sat = s / 100;
  const lig = l / 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = sat * Math.min(lig, 1 - lig);
  const f = (n: number) => lig - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return `#${[f(0), f(8), f(4)].map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('')}`.toUpperCase();
};

/** The same hue, lightened on dark grounds or darkened on light ones, until it reaches `ratio`. */
export const readableOn = (hex: string, ground: string, ratio: number) => {
  const [h, s, start] = toHsl(hex);
  const lighten = luminance(ground) < 0.5;
  let l = start;
  let out = hex.toUpperCase();
  for (let i = 0; i < 80 && contrast(out, ground) < ratio; i++) {
    l = lighten ? Math.min(100, l + 1) : Math.max(0, l - 1);
    out = fromHsl(h, s, l);
  }
  return out;
};

/** "h s% l%" for the site's hsl(var(--token)) colour tokens. */
export const hslToken = (hex: string) => {
  const [h, s, l] = toHsl(hex);
  return `${h.toFixed(0)} ${s.toFixed(1)}% ${l.toFixed(1)}%`;
};
