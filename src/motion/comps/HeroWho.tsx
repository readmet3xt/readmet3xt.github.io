import { AbsoluteFill, useCurrentFrame, useVideoConfig } from '../core';
import { EASE, fadeUp, tween } from '../helpers';
import { PROJECT_COLORS, readableOn } from '../colors';
import type { LookProps } from '../theme';

// Story 2, "Who I design for" (8 s). One sentence, with the audience rotating
// through five real projects, ending on the one he built for players like
// himself, then the second half of the positioning.

export const WHO_FRAMES = 240;

// Each audience is set in its project's colour.
const AUDIENCES: [string, string, string][] = [
  ['remote teams.', 'pebble · rca × visa innovation centre', PROJECT_COLORS['/pebble']],
  ['rail passengers.', 'lner app clip · softwire, london', PROJECT_COLORS['/softwire']],
  ['conservation partners.', 'stampede · wwt × airbnb', PROJECT_COLORS['/stampede']],
  ['first-time crypto investors.', 'koinbasket · founding designer', PROJECT_COLORS['/koinbasket']],
  ['players stuck in a game.', 'otagon · designed and built', PROJECT_COLORS['/otagon']],
];
const START = 22;
const STEP = 34;
const IN = 12;
const OUT = 9;

export const HeroWho: React.FC<LookProps> = ({ palette: p, fonts }) => {
  const f = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const portrait = H > W;
  const size = portrait ? 44 : 68;
  const lineH = Math.round(size * 1.14);
  const rows = portrait ? 2 : 1;
  const display = { fontFamily: fonts.display, fontWeight: fonts.displayWeight, letterSpacing: `${fonts.displayTracking}em`, fontSize: size, lineHeight: `${lineH}px` };

  return (
    <AbsoluteFill style={{ background: p.bg, color: p.ink, fontFamily: fonts.text, padding: portrait ? '0 40px' : '0 96px', justifyContent: 'center' }}>
      <div style={{ ...display, ...fadeUp(f, 4, { dur: 18, dist: 14 }) }}>I design services for</div>

      <div style={{ position: 'relative', height: lineH * rows + 8, overflow: 'hidden', marginTop: 4 }}>
        {AUDIENCES.map(([text, , color], i) => {
          const at = START + i * STEP;
          const last = i === AUDIENCES.length - 1;
          const inn = tween(f, at, IN);
          const out = last ? 0 : tween(f, at + STEP - OUT, OUT, 0, 1, EASE);
          return (
            <div
              key={text}
              style={{
                ...display,
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                whiteSpace: portrait ? 'normal' : 'nowrap',
                color: readableOn(color, p.bg, 3),
                opacity: inn * (1 - out),
                transform: `translateY(${(1 - inn) * size * 0.8 - out * size * 0.7}px)`,
                filter: `blur(${(1 - inn) * 6 + out * 5}px)`,
              }}
            >
              {text}
            </div>
          );
        })}
      </div>

      <div style={{ position: 'relative', height: portrait ? 30 : 26, marginTop: portrait ? 14 : 18 }}>
        {AUDIENCES.map(([text, tag], i) => {
          const at = START + i * STEP + 4;
          const last = i === AUDIENCES.length - 1;
          return (
            <div key={text} style={{ position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap', fontFamily: fonts.mono, fontSize: portrait ? 19 : 17, color: p.muted, ...fadeUp(f, at, { dur: 12, dist: 8, outAt: last ? undefined : at + STEP - OUT - 4, outDur: 8 }) }}>
              {tag}
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: portrait ? 32 : 40 }}>
        {AUDIENCES.map(([text, , color], i) => (
          <div key={text} style={{ width: portrait ? 40 : 28, height: 3, borderRadius: 2, background: p.line, overflow: 'hidden' }}>
            <div style={{ width: `${tween(f, START + i * STEP, STEP, 0, 1, (x) => x) * 100}%`, height: '100%', background: readableOn(color, p.bg, 3) }} />
          </div>
        ))}
      </div>

      <div style={{ marginTop: portrait ? 44 : 56, fontSize: portrait ? 32 : 34, fontWeight: 500, letterSpacing: '-0.015em', color: p.ink, ...fadeUp(f, 196, { dur: 22, dist: 12 }) }}>
        And then I build them.
      </div>
    </AbsoluteFill>
  );
};
