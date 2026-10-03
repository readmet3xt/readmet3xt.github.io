import { useCurrentFrame } from './core';
import { fadeUp, tween } from './helpers';
import type { LookProps } from './theme';

type BeatsProps = LookProps & {
  beats: string[];
  /** the frame each beat starts */
  starts: number[];
  /** when the last caption leaves (default: it stays) */
  end?: number;
  size?: number;
  inset?: number;
  bottom?: number;
};

/** A beat's caption (bottom left) and one progress mark per beat (bottom right). */
export const Beats: React.FC<BeatsProps> = ({ palette: p, fonts, beats, starts, end, size = 21, inset = 32, bottom = 26 }) => {
  const f = useCurrentFrame();
  const ends = starts.map((_, i) => (i < starts.length - 1 ? starts[i + 1] - 6 : end));
  return (
    <>
      {beats.map((text, i) => (
        <div key={i} style={{ position: 'absolute', left: inset, bottom, whiteSpace: 'nowrap', fontFamily: fonts.mono, fontSize: size, color: p.ink, ...fadeUp(f, starts[i] + 4, { dur: 12, dist: 8, outAt: ends[i], outDur: 8 }) }}>
          {text}
        </div>
      ))}
      <div style={{ position: 'absolute', right: inset, bottom: bottom + Math.round(size * 0.43), display: 'flex', gap: 6 }}>
        {starts.map((s, i) => {
          const leave = ends[i];
          const on = tween(f, s, 8) * (leave === undefined ? 1 : 1 - tween(f, leave + 2, 8));
          return <div key={i} style={{ width: 6 + 14 * on, height: 6, borderRadius: 3, background: on > 0.5 ? p.accent : p.line }} />;
        })}
      </div>
    </>
  );
};
