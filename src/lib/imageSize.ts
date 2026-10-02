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
