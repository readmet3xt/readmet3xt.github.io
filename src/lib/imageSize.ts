import sizes from '@/data/image-sizes.json';

const SIZES: Record<string, number[]> = sizes;

/**
 * Intrinsic width/height for a public image (written by scripts/optimize-images.py),
 * so the browser reserves space before the file arrives. Returns {} if unknown.
 */
export const imageSize = (src: string): { width?: number; height?: number } => {
  const s = SIZES[src];
  return s ? { width: s[0], height: s[1] } : {};
};

/**
 * srcset and sizes for an image that has a 960px copy (scripts/make-responsive.py),
 * so phones download the smaller file. Empty when there is no copy.
 */
export const responsive = (src: string, sizes: string): { srcSet?: string; sizes?: string } => {
  const full = SIZES[src];
  const smallSrc = src.replace(/\.webp$/, '-960w.webp');
  const small = SIZES[smallSrc];
  if (!full || !small || smallSrc === src) return {};
  return { srcSet: `${smallSrc} ${small[0]}w, ${src} ${full[0]}w`, sizes };
};

export const SIZES_WIDE = '(min-width: 1100px) 1024px, 100vw';
export const SIZES_HALF = '(min-width: 640px) 50vw, 100vw';
