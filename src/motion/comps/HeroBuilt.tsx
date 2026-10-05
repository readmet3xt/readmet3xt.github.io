import { AbsoluteFill, useCurrentFrame, useVideoConfig } from '../core';
import { TRAVEL, fadeUp, mix, tween } from '../helpers';
import { PROJECT_COLORS, readableOn } from '../colors';
import type { LookProps } from '../theme';

// Story 3, "Built it myself" (8 s). Otagon, from a sketch to a live product:
// the phone app, desktop connector and backend are sketched, then become solid
// and connected; 30+ features fill the phone; it goes live. A timeline beside
// it: Aug 2025, 3 parts, 30+ features, Jul 2026. Facts only, from the case study.
// Landscape 1280×720; portrait 600×800 for phones.

export const BUILT_FRAMES = 240;

// The drawing, in its own 540×520 box.
const MONITOR = { x: 10, y: 100, w: 230, h: 150 };
const PHONE = { x: 330, y: 20, w: 180, h: 360 };
const BACKEND = { x: 170, y: 420, w: 220, h: 64 };
// the desktop's wire leaves from its lower right, clear of its label
const C_MON = { x: MONITOR.x + MONITOR.w * 0.95, y: MONITOR.y + MONITOR.h - 6 };
const C_BACK = { x: BACKEND.x + BACKEND.w / 2, y: BACKEND.y + BACKEND.h / 2 };
const C_PHONE = { x: PHONE.x + PHONE.w / 2, y: PHONE.y + PHONE.h / 2 };
const FEATURES = 30;

const STEPS = [
  { at: 6, label: 'Aug 2025', text: 'the idea' },
  { at: 64, label: '3 parts', text: 'phone, desktop and backend' },
  { at: 122, label: '30+', text: 'features' },
  { at: 182, label: 'Jul 2026', text: 'live, public launch' },
];

export const HeroBuilt: React.FC<LookProps> = ({ palette: p, fonts }) => {
  const f = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const portrait = H > W;
  const accent = readableOn(PROJECT_COLORS['/otagon'], p.bg, 3);
  // Phones show the 600×800 cut at about 0.6, so its text starts at 24 (about 14px on screen).
  const ls = portrait ? 24 : 20;
  const chip = portrait ? 22 : 18;

  const sketch = tween(f, 2, 40);
  const solid = tween(f, 56, 18);
  const wires = tween(f, 80, 22, 0, 1, TRAVEL);
  const flow = (start: number) => tween(f, start, 34, 0, 1, TRAVEL);
  const features = tween(f, 122, 54, 0, 1, (x) => x);
  const live = tween(f, 182, 14);
  const ring = tween(f, 186, 20);

  // The sketch is drawn on as a thin pen line; once solid, it becomes a plain border.
  const pen = (len: number) => (solid >= 1 ? {} : { strokeDasharray: `${len} ${len}`, strokeDashoffset: len * (1 - sketch) });
  const box = (b: { x: number; y: number; w: number; h: number }, r: number, key: string) => {
    const len = 2 * (b.w + b.h);
    return (
      <g key={key}>
        <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={r} fill={p.panel} opacity={solid} />
        <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={r} fill="none" stroke={solid > 0 ? p.line : p.muted} strokeWidth={1.5} style={pen(len)} />
      </g>
    );
  };
  // a travelling dot: desktop → backend → phone
  const dot = (t: number) => {
    const half = t < 0.5;
    const u = half ? t * 2 : (t - 0.5) * 2;
    const a = half ? C_MON : C_BACK;
    const b = half ? C_BACK : C_PHONE;
    return { x: mix(a.x, b.x, u), y: mix(a.y, b.y, u), on: t > 0 && t < 1 };
  };
  const d1 = dot(flow(102));
  const d2 = dot(flow(196));
  const screen = { x: PHONE.x + 14, y: PHONE.y + 14, w: PHONE.w - 28, h: PHONE.h - 28 };
  const grid = { cols: 3, w: 40, h: 18, gx: 8, gy: 8, x: screen.x + 8, y: screen.y + 56 };

  const drawing = (
    <svg width={540} height={520} viewBox="0 0 540 520" style={{ overflow: 'visible' }}>
      {/* wires, behind the parts */}
      <g stroke={accent} strokeWidth={2} opacity={0.8}>
        <line x1={C_MON.x} y1={C_MON.y} x2={mix(C_MON.x, C_BACK.x, wires)} y2={mix(C_MON.y, C_BACK.y, wires)} />
        <line x1={C_BACK.x} y1={C_BACK.y} x2={mix(C_BACK.x, C_PHONE.x, wires)} y2={mix(C_BACK.y, C_PHONE.y, wires)} />
      </g>

      {/* desktop: the connector app, waiting for F1 */}
      {box(MONITOR, 10, 'monitor')}
      <g opacity={solid}>
        <rect x={MONITOR.x + 18} y={MONITOR.y + 22} width={110} height={10} rx={5} fill={p.line} />
        <rect x={MONITOR.x + 18} y={MONITOR.y + 44} width={150} height={10} rx={5} fill={p.line} />
        <rect x={MONITOR.x + MONITOR.w - 66} y={MONITOR.y + MONITOR.h - 50} width={48} height={32} rx={6} fill={p.bg} stroke={accent} strokeWidth={1.5} />
        <text x={MONITOR.x + MONITOR.w - 42} y={MONITOR.y + MONITOR.h - 27} textAnchor="middle" style={{ fontFamily: fonts.mono, fontSize: chip }} fill={p.ink}>F1</text>
      </g>
      <rect x={MONITOR.x + MONITOR.w / 2 - 20} y={MONITOR.y + MONITOR.h} width={40} height={22} fill={p.panel} stroke={p.line} strokeWidth={1.5} opacity={solid} />
      <rect x={MONITOR.x + MONITOR.w / 2 - 45} y={MONITOR.y + MONITOR.h + 22} width={90} height={8} rx={4} fill={p.panel} stroke={p.line} strokeWidth={1.5} opacity={solid} />
      {/* backend */}
      {box(BACKEND, 32, 'backend')}
      {/* phone */}
      {box(PHONE, 28, 'phone')}

      {/* sketch marks inside the phone, gone once it's real */}
      <g stroke={p.muted} strokeWidth={1.5} strokeDasharray="6 6" opacity={(1 - solid) * sketch}>
        <line x1={screen.x + 10} x2={screen.x + screen.w - 10} y1={screen.y + 30} y2={screen.y + 30} />
        <rect x={screen.x + 10} y={screen.y + 60} width={screen.w - 20} height={120} rx={8} fill="none" />
        <line x1={screen.x + 10} x2={screen.x + screen.w - 40} y1={screen.y + 210} y2={screen.y + 210} />
        <line x1={screen.x + 10} x2={screen.x + screen.w - 70} y1={screen.y + 236} y2={screen.y + 236} />
      </g>

      {/* 30+ features fill the phone */}
      {Array.from({ length: FEATURES }, (_, k) => {
        const on = tween(f, 122 + (k / FEATURES) * 50, 8);
        const col = k % grid.cols;
        const row = Math.floor(k / grid.cols);
        return (
          <rect
            key={k}
            x={grid.x + col * (grid.w + grid.gx)}
            y={grid.y + row * (grid.h + grid.gy)}
            width={grid.w}
            height={grid.h}
            rx={4}
            fill={accent}
            opacity={on * (0.35 + 0.65 * (((k * 7) % 10) / 10))}
            transform={`translate(0 ${(1 - on) * 6})`}
          />
        );
      })}

      {/* it goes live */}
      <g opacity={live}>
        <rect x={screen.x + 8} y={screen.y + 12} width={portrait ? 90 : 78} height={30} rx={15} fill={p.bg} stroke={p.line} strokeWidth={1} />
        <circle cx={screen.x + 26} cy={screen.y + 27} r={5} fill={accent} />
        <circle cx={screen.x + 26} cy={screen.y + 27} r={mix(5, 18, ring)} fill="none" stroke={accent} strokeWidth={1.5} opacity={ring > 0 && ring < 1 ? 1 - ring : 0} />
        <text x={screen.x + 38} y={screen.y + (portrait ? 34 : 33)} style={{ fontFamily: fonts.mono, fontSize: chip }} fill={p.ink}>live</text>
      </g>

      {/* data flowing: desktop → backend → phone */}
      {[d1, d2].map((d, i) => d.on && <circle key={i} cx={d.x} cy={d.y} r={7} fill={accent} />)}

      {/* part labels */}
      <g style={{ fontFamily: fonts.text, fontSize: ls }} fill={p.muted} opacity={tween(f, 64, 14)}>
        <text x={MONITOR.x} y={MONITOR.y + MONITOR.h + 64}>desktop connector</text>
        <text x={C_PHONE.x} y={PHONE.y + PHONE.h + 30} textAnchor="middle">phone app</text>
      </g>
      <text x={C_BACK.x} y={C_BACK.y + ls * 0.36} textAnchor="middle" style={{ fontFamily: fonts.text, fontSize: ls }} fill={p.ink} opacity={tween(f, 64, 14)}>backend</text>
    </svg>
  );

  // the timeline beside (or under) the drawing
  const T = portrait
    ? { x: 40, top: 556, step: 46, label: 24, text: 24, labelW: 130, close: 748, closeSize: 30 }
    : { x: 700, top: 150, step: 92, label: 19, text: 24, labelW: 110, close: 560, closeSize: 40 };
  const current = STEPS.reduce((n, s, i) => (f >= s.at ? i : n), 0);
  const prevAt = current > 0 ? STEPS[current].at : 0;
  const lineY = (i: number) => T.top + i * T.step + (portrait ? 15 : 14);
  const dotY = mix(lineY(Math.max(0, current - 1)), lineY(current), tween(f, prevAt, 14, 0, 1, TRAVEL));
  const featureCount = `${Math.round(30 * features)}${features >= 1 ? '+' : ''}`;

  return (
    <AbsoluteFill style={{ background: p.bg, color: p.ink, fontFamily: fonts.text }}>
      <div style={{ position: 'absolute', ...(portrait ? { left: 30, top: 12 } : { left: 96, top: 110 }) }}>{drawing}</div>

      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        <line x1={T.x + 5} x2={T.x + 5} y1={lineY(0)} y2={lineY(STEPS.length - 1)} stroke={p.line} strokeWidth={2} opacity={tween(f, 4, 12)} />
        <circle cx={T.x + 5} cy={dotY} r={6} fill={accent} opacity={tween(f, 6, 10)} />
      </svg>
      {STEPS.map((s, i) => (
        <div key={s.label} style={{ position: 'absolute', left: T.x + 28, top: T.top + i * T.step, display: 'flex', alignItems: 'baseline', gap: 16, ...fadeUp(f, s.at, { dur: 14, dist: 8 }) }}>
          <span style={{ width: T.labelW, flexShrink: 0, fontFamily: fonts.mono, fontSize: T.label, color: p.muted }}>{i === 2 ? featureCount : s.label}</span>
          <span style={{ fontSize: T.text, fontWeight: 500, color: p.ink, letterSpacing: '-0.01em' }}>{s.text}</span>
        </div>
      ))}

      <div style={{ position: 'absolute', left: portrait ? 40 : T.x, top: T.close, width: portrait ? 520 : 480, fontFamily: fonts.display, fontWeight: fonts.displayWeight, letterSpacing: `${fonts.displayTracking}em`, fontSize: T.closeSize, lineHeight: 1.1, ...fadeUp(f, 200, { dur: 18, dist: 10 }) }}>
        Designed and built {!portrait && <br />}on my own.
      </div>
    </AbsoluteFill>
  );
};
