import type { CSSProperties, FC, ReactNode } from 'react';
import { AbsoluteFill, assetUrl } from '../core';
import { Beats as SharedBeats } from '../beats';
import type { MotionEntry } from '../registry';
import type { LookProps } from '../theme';

/* Shared parts for the figures inside case studies. A figure is 640×480 and
   reads at phone width: captions 24 px, labels at least 20 px. It tells one
   idea in three captioned beats, plays once and rests on its last frame.
   Text is ink or muted (never faint, never the accent, which can't reach
   4.5:1 in both themes); the accent marks shapes, or fills behind onAccent text. */

export const FIGURE_SIZE = { width: 640, height: 480 };

export const figure = (component: FC<LookProps>, durationInFrames: number, label: string): MotionEntry => ({
  component,
  durationInFrames,
  poster: durationInFrames - 1,
  label,
});

export const Frame: FC<LookProps & { children: ReactNode }> = ({ palette: p, children }) => (
  <AbsoluteFill style={{ background: p.panel, overflow: 'hidden' }}>{children}</AbsoluteFill>
);

export const mono = (look: LookProps, size: number, color: string): CSSProperties => ({ fontFamily: look.fonts.mono, fontSize: size, color });
export const sans = (look: LookProps, size: number, color: string, weight = 500): CSSProperties => ({
  fontFamily: look.fonts.text,
  fontSize: size,
  color,
  fontWeight: weight,
  letterSpacing: '-0.01em',
});

/** Three captions along the bottom, with progress marks. */
export const Beats: FC<LookProps & { beats: [string, string, string]; starts: [number, number, number] }> = (props) => (
  <SharedBeats {...props} size={24} inset={32} bottom={26} />
);

type FrameProps = LookProps & { x: number; y: number; w: number; h: number; src?: string; position?: string; style?: CSSProperties; children?: ReactNode };

const Screen = ({ src, position }: { src: string; position: string }) => (
  <img
    src={assetUrl(src)}
    alt=""
    decoding="async"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: position }}
  />
);

/** A drawn phone; `src` puts a real screen inside, cropped from the top. */
export const Phone: FC<FrameProps> = ({ palette: p, x, y, w, h, src, position = 'top', style, children }) => (
  <div style={{ position: 'absolute', left: x, top: y, width: w, height: h, borderRadius: 26, background: p.bg, border: `1.5px solid ${p.line}`, padding: 7, boxSizing: 'border-box', ...style }}>
    <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 19, overflow: 'hidden', background: p.panel }}>
      {src && <Screen src={src} position={position} />}
      {children}
    </div>
  </div>
);

/** A drawn desktop window; `src` puts a real screen inside. */
export const Window: FC<FrameProps> = ({ palette: p, x, y, w, h, src, position = 'top', style, children }) => (
  <div style={{ position: 'absolute', left: x, top: y, width: w, height: h, borderRadius: 12, background: p.bg, border: `1.5px solid ${p.line}`, overflow: 'hidden', ...style }}>
    <div style={{ height: 22, display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 10, borderBottom: `1px solid ${p.line}` }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ width: 7, height: 7, borderRadius: 4, background: p.line }} />
      ))}
    </div>
    <div style={{ position: 'relative', height: h - 22 }}>
      {src && <Screen src={src} position={position} />}
      {children}
    </div>
  </div>
);
