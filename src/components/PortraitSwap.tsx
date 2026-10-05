import { useRef, useState } from 'react';
import { imageSize } from '@/lib/imageSize';
import { cn } from '@/lib/utils';

const DRAWING = '/images/amaan-illustration.webp';
const PHOTO = '/images/amaan-portrait.webp';

type Point = { clientX: number; clientY: number } | null;

/**
 * My portrait: the illustration first. Hovering (computers) or tapping (phones)
 * reveals the photo in a circle that grows from the pointer, and closes back to
 * where the pointer leaves. A click or tap keeps it; another brings the drawing
 * back. Keyboard: Enter or Space, from the centre.
 */
export const PortraitSwap = ({ className, eager = false }: { className?: string; eager?: boolean }) => {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const frame = useRef<HTMLButtonElement>(null);
  const shown = pinned || hovered;

  // Where the circle grows from, kept inside the frame so an open circle always covers it.
  const aim = (p: Point) => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const at = (v: number) => `${Math.min(100, Math.max(0, v * 100))}%`;
    el.style.setProperty('--x', p ? at((p.clientX - r.left) / r.width) : '50%');
    el.style.setProperty('--y', p ? at((p.clientY - r.top) / r.height) : '50%');
  };

  return (
    <button
      ref={frame}
      type="button"
      aria-label="Portrait of Amaan Khan: show the photo"
      aria-pressed={shown}
      onPointerEnter={(e) => {
        if (e.pointerType !== 'mouse') return;
        if (!pinned) aim(e);
        setHovered(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== 'mouse') return;
        if (!pinned) aim(e);
        setHovered(false);
      }}
      onClick={(e) => {
        // detail is 0 for Enter or Space. A click while hovering only pins or unpins; the photo is already open.
        if (!hovered) aim(e.detail === 0 ? null : e);
        setPinned((p) => !p);
      }}
      className={cn('relative block w-full overflow-hidden', className)}
    >
      <img
        src={DRAWING}
        {...imageSize(DRAWING)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
      <img
        src={PHOTO}
        {...imageSize(PHOTO)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-[clip-path] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ clipPath: `circle(${shown ? 150 : 0}% at var(--x, 50%) var(--y, 50%))` }}
        loading="lazy"
        decoding="async"
      />
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute bottom-3 left-3 rounded-full bg-bg-primary/85 px-3 py-1.5 font-mono text-xs text-text-primary backdrop-blur transition-opacity duration-300',
          shown && 'opacity-0',
        )}
      >
        <span className="[@media(hover:hover)]:hidden">Tap for the photo</span>
        <span className="hidden [@media(hover:hover)]:inline">Hover for the photo</span>
      </span>
    </button>
  );
};
