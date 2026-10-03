import { AbsoluteFill, useCurrentFrame, useVideoConfig } from '../core';
import { TRAVEL, fadeUp, mix, tween } from '../helpers';
import { PROJECT_COLORS, readableOn } from '../colors';
import type { LookProps } from '../theme';

// Story 4, "My path so far" (11 s). One line, station by station, with the
// camera following: left to right on wide screens, top to bottom on phones.
// Facts only, from the CV.

export const PATH_FRAMES = 330;

// Stations that are case studies carry their project's colour; the rest use the accent.
const STATIONS: [string, string, string, string?][] = [
  ['2017', 'Mechanical engineering', 'B.E., Osmania University, Hyderabad'],
  ['2018', 'Royal College of Art', 'M.A. Service Design, London'],
  ['2019–21', 'Research with partners', 'VISA Innovation Centre · BCG · WWT × Airbnb'],
  ['2022', 'Softwire, London', 'LNER App Clip', PROJECT_COLORS['/softwire']],
  ['2022–25', 'KoinBasket', 'Founding designer · grew past 70,000 users', PROJECT_COLORS['/koinbasket']],
  ['2025', 'Otagon', 'Designed and built it, for players like me', PROJECT_COLORS['/otagon']],
  ['Now', 'Service & Product Designer', 'Designing services, and building them'],
];
const SEG = 42;
const START = 10;
const LAST = STATIONS.length - 1;

export const HeroPath: React.FC<LookProps> = ({ palette: p, fonts }) => {
  const f = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const portrait = H > W;

  // Station positions along the line, and where the newest one sits on screen.
  const gap = portrait ? 200 : 380;
  const first = portrait ? 230 : 200;
  const view = portrait ? 560 : 820;
  const pos = (i: number) => first + i * gap;
  const cam = (i: number) => Math.max(0, pos(i) - view);
  let camera = 0;
  for (let i = 1; i < STATIONS.length; i++) {
    const t = tween(f, START + i * SEG - 4, 26, 0, 1, TRAVEL);
    if (t <= 0) break;
    camera = mix(cam(i - 1), cam(i), t);
  }
  const future = tween(f, START + LAST * SEG + 34, 26);
  const along = (i: number) => (portrait ? { x: 64, y: pos(i) } : { x: pos(i), y: 318 });
  const worldLen = pos(LAST) + 900;

  return (
    <AbsoluteFill style={{ background: p.bg, color: p.ink, fontFamily: fonts.text, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: portrait ? W : worldLen, height: portrait ? worldLen : H, transform: portrait ? `translateY(${-camera}px)` : `translateX(${-camera}px)` }}>
        <svg width={portrait ? W : worldLen} height={portrait ? worldLen : H} style={{ position: 'absolute', inset: 0 }}>
          {STATIONS.map((_, i) => {
            const to = along(i);
            const from = i === 0 ? (portrait ? { x: 64, y: first - 120 } : { x: first - 160, y: 318 }) : along(i - 1);
            const d = tween(f, START + i * SEG, 22, 0, 1, TRAVEL);
            return <line key={i} x1={from.x} y1={from.y} x2={mix(from.x, to.x, d)} y2={mix(from.y, to.y, d)} stroke={p.ink} strokeWidth={3} strokeLinecap="round" />;
          })}
          {(() => {
            const a = along(LAST);
            const b = portrait ? { x: 64, y: a.y + 14 + 420 * future } : { x: a.x + 14 + 546 * future, y: 318 };
            return <line x1={portrait ? 64 : a.x + 14} y1={portrait ? a.y + 14 : 318} x2={b.x} y2={b.y} stroke={p.ink} strokeWidth={3} strokeDasharray="2 12" strokeLinecap="round" opacity={0.45} />;
          })()}
          {STATIONS.map(([, , , color], i) => {
            const at = START + i * SEG + 18;
            const pop = tween(f, at, 12);
            const newest = f < START + (i + 1) * SEG + 18 || i === LAST;
            const { x, y } = along(i);
            const hue = color ? readableOn(color, p.bg, 3) : p.accent;
            return (
              <g key={i}>
                {i === LAST && <circle cx={x} cy={y} r={mix(12, 42, tween(f, at + 6, 30))} fill="none" stroke={p.accent} strokeWidth={1.5} opacity={tween(f, at + 6, 3) * (1 - tween(f, at + 6, 30))} />}
                <circle cx={x} cy={y} r={10 * pop} fill={newest || color ? hue : p.bg} stroke={newest || color ? hue : p.ink} strokeWidth={3} opacity={pop} />
              </g>
            );
          })}
        </svg>

        {STATIONS.map(([year, title, detail], i) => {
          const at = START + i * SEG + 20;
          const { x, y } = along(i);
          const box = portrait ? { left: 104, top: y - 26, width: W - 140 } : { left: x - 10, top: y - 58, width: 330 };
          return (
            <div key={title} style={{ position: 'absolute', ...box }}>
              <div style={{ fontFamily: fonts.mono, fontSize: portrait ? 19 : 16, color: p.muted, fontVariantNumeric: 'tabular-nums', ...fadeUp(f, at, { dur: 12, dist: 6 }) }}>{year}</div>
              <div style={{ marginTop: portrait ? 6 : 74, fontFamily: fonts.display, fontWeight: fonts.displayWeight, letterSpacing: `${fonts.displayTracking}em`, fontSize: portrait ? 34 : 30, lineHeight: 1.15, ...fadeUp(f, at + 4, { dur: 14, dist: 10 }) }}>{title}</div>
              <div style={{ marginTop: 10, fontSize: portrait ? 21 : 18, lineHeight: 1.45, color: p.muted, maxWidth: portrait ? 420 : 300, ...fadeUp(f, at + 8, { dur: 14, dist: 8 }) }}>{detail}</div>
            </div>
          );
        })}
      </div>

      {portrait && <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 150, background: `linear-gradient(${p.bg} 62%, transparent)` }} />}
      <div style={{ position: 'absolute', left: portrait ? 40 : 96, top: portrait ? 56 : 92, fontSize: portrait ? 40 : 30, fontWeight: 500, letterSpacing: '-0.015em', ...fadeUp(f, 4, { dur: 16, dist: 10 }) }}>My path so far</div>
    </AbsoluteFill>
  );
};
