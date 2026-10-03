import type { FC } from 'react';
import { useCurrentFrame } from '../core';
import { TRAVEL, mix, tween } from '../helpers';
import type { LookProps } from '../theme';
import { Beats, Frame, figure, mono, sans } from './kit';

// I.V.I., in three figures: where her hours go, the user journey with its
// seven touchpoints, and the six needs that BCG later reused.

/** A person: head and shoulders. */
const Person: FC<LookProps & { x: number; y: number; lit?: boolean; opacity?: number }> = ({ palette: p, x, y, lit = false, opacity = 1 }) => (
  <div style={{ position: 'absolute', left: x - 26, top: y - 32, width: 52, height: 64, opacity }}>
    <div style={{ position: 'absolute', left: 13, top: 0, width: 26, height: 26, borderRadius: 13, background: lit ? p.accent : p.bg, border: `2px solid ${lit ? p.accent : p.ink}` }} />
    <div style={{ position: 'absolute', left: 0, top: 32, width: 52, height: 30, borderRadius: '26px 26px 6px 6px', border: `2px solid ${lit ? p.accent : p.ink}`, borderBottom: 'none' }} />
  </div>
);

/** An office building. */
const Office: FC<LookProps & { x: number; y: number; glow: number; dim: number }> = ({ palette: p, x, y, glow, dim }) => (
  <div style={{ position: 'absolute', left: x - 44, top: y - 60, width: 88, height: 120, borderRadius: 8, background: p.bg, border: `2px solid ${glow > 0.5 ? p.accent : p.ink}`, opacity: 1 - dim * 0.55 }}>
    {Array.from({ length: 6 }, (_, i) => (
      <div key={i} style={{ position: 'absolute', left: 16 + (i % 2) * 34, top: 16 + Math.floor(i / 2) * 32, width: 22, height: 18, borderRadius: 3, background: glow > 0.5 && i < Math.ceil(glow * 6) ? p.accent : p.line }} />
    ))}
  </div>
);

/* Her time and work go into the home → his office gains the hours → her value stays invisible. */
const Hours: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const her = { x: 150, y: 300 };
  const him = { x: 490, y: 300 };
  const herOffice = { x: 150, y: 100 };
  const hisOffice = { x: 490, y: 100 };
  const give = tween(f, 14, 30, 0, 1, TRAVEL);
  const hours = tween(f, 76, 30, 0, 1, TRAVEL);
  const invisible = tween(f, 144, 14);

  return (
    <Frame {...look}>
      <Office {...look} {...herOffice} glow={0} dim={hours} />
      <Office {...look} {...hisOffice} glow={hours} dim={0} />
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <line x1={her.x} y1={her.y - 40} x2={herOffice.x} y2={herOffice.y + 66} stroke={p.ink} strokeWidth={1.75} />
        <line x1={him.x} y1={him.y - 40} x2={hisOffice.x} y2={hisOffice.y + 66} stroke={p.ink} strokeWidth={1.75} />
        <line x1={her.x + 40} y1={her.y} x2={mix(her.x + 40, him.x - 40, give)} y2={him.y} stroke={p.accent} strokeWidth={2} strokeDasharray="5 6" />
        <line x1={herOffice.x + 50} y1={herOffice.y} x2={mix(herOffice.x + 50, hisOffice.x - 50, hours)} y2={hisOffice.y} stroke={p.accent} strokeWidth={2} strokeDasharray="5 6" />
      </svg>
      <div style={{ position: 'absolute', left: 200, width: 240, top: her.y - 44, textAlign: 'center', ...sans(look, 20, p.ink, 500), lineHeight: 1.2, opacity: give }}>her time and work, at home</div>
      <div style={{ position: 'absolute', left: 200, width: 240, top: herOffice.y - 52, textAlign: 'center', ...sans(look, 20, p.ink, 500), lineHeight: 1.2, opacity: hours }}>working time and productivity</div>

      <Person {...look} {...her} lit={invisible > 0.5} />
      <Person {...look} {...him} />
      <div style={{ position: 'absolute', left: her.x - 80, width: 160, top: her.y + 40, textAlign: 'center', ...mono(look, 20, p.muted) }}>her</div>
      <div style={{ position: 'absolute', left: him.x - 80, width: 160, top: him.y + 40, textAlign: 'center', ...mono(look, 20, p.muted) }}>her partner</div>
      <div style={{ position: 'absolute', left: her.x - 110, width: 220, top: her.y + 64, height: 34, borderRadius: 17, display: 'flex', alignItems: 'center', justifyContent: 'center', background: p.accent, ...mono(look, 20, p.onAccent), opacity: invisible }}>invisible value</div>

      <Beats {...look} beats={['her time and work go home', 'his office gains the hours', "why isn't this value paid for?"]} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* Recorded at home → checked and planned with others → paid by the I.V.I. Department. */
const TOUCH: { x: number; label: string; up: boolean }[] = [
  { x: 50, label: 'IoT', up: true },
  { x: 150, label: 'GP, specialist', up: false },
  { x: 240, label: 'expectations', up: true },
  { x: 316, label: 'family', up: false },
  { x: 392, label: 'manager, HR', up: true },
  { x: 468, label: 'peers', up: false },
  { x: 590, label: 'I.V.I. Dept', up: true },
];
const STAGES: { from: number; to: number; n: string; name: string }[] = [
  { from: 0, to: 0, n: '01', name: 'collect' },
  { from: 1, to: 1, n: '02', name: 'self-check' },
  { from: 2, to: 5, n: '03', name: 'life & work plan' },
  { from: 6, to: 6, n: '04', name: 'income' },
];

const Journey: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const lineY = 262;
  // the touchpoints reached so far
  const at = f < 70 ? 0 : f < 140 ? 1 + tween(f, 74, 56, 0, 4.999, (t) => t) : 5 + tween(f, 142, 30, 0, 1.999, TRAVEL);
  const reached = Math.floor(at);
  const person = mix(TOUCH[Math.min(reached, 6)].x, TOUCH[Math.min(reached + 1, 6)].x, at - reached);
  const paid = tween(f, 172, 12);

  return (
    <Frame {...look}>
      {STAGES.map((s, i) => {
        const x1 = TOUCH[s.from].x;
        const x2 = TOUCH[s.to].x;
        const cx = (x1 + x2) / 2;
        const on = tween(f, i === 0 ? 4 : i === 1 ? 70 : i === 2 ? 90 : 140, 12);
        return (
          <div key={s.n} style={{ opacity: on }}>
            <div style={{ position: 'absolute', left: cx - 100, width: 200, top: 40, textAlign: 'center', ...mono(look, 20, p.muted) }}>{s.n}</div>
            <div style={{ position: 'absolute', left: cx - 100, width: 200, top: 66, textAlign: 'center', ...sans(look, 20, p.ink, 600) }}>{s.name}</div>
            {s.to > s.from && <div style={{ position: 'absolute', left: x1, width: x2 - x1, top: 100, height: 10, borderTop: `1.5px solid ${p.line}`, borderLeft: `1.5px solid ${p.line}`, borderRight: `1.5px solid ${p.line}` }} />}
          </div>
        );
      })}

      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <line x1={24} y1={lineY} x2={616} y2={lineY} stroke={p.line} strokeWidth={2} />
        <line x1={24} y1={lineY} x2={person} y2={lineY} stroke={p.accent} strokeWidth={3} />
      </svg>
      {TOUCH.map((t, i) => {
        const on = i <= at ? 1 : 0;
        const lbl = tween(f, [6, 74, 86, 98, 110, 122, 150][i], 10);
        return (
          <div key={t.label}>
            <div style={{ position: 'absolute', left: t.x - 9, top: lineY - 9, width: 18, height: 18, borderRadius: 9, background: on ? p.accent : p.panel, border: `2px solid ${on ? p.accent : p.ink}` }} />
            <div style={{ position: 'absolute', left: i === 6 ? 616 - 180 : t.x - 90, width: 180, top: t.up ? lineY - 50 : lineY + 22, textAlign: i === 6 ? 'right' : 'center', ...mono(look, 20, p.ink), opacity: lbl, whiteSpace: 'nowrap' }}>{t.label}</div>
          </div>
        );
      })}
      {/* Johanna, moving along her journey */}
      <div style={{ position: 'absolute', left: person - 14, top: lineY + 64, width: 28, height: 28, borderRadius: 14, background: p.accent }} />
      <div style={{ position: 'absolute', left: person - 60, width: 120, top: lineY + 98, textAlign: 'center', ...mono(look, 20, p.muted) }}>Johanna</div>
      <div style={{ position: 'absolute', right: 640 - person + 26, top: lineY + 60, height: 34, borderRadius: 17, padding: '0 14px', display: 'flex', alignItems: 'center', background: p.accent, ...mono(look, 20, p.onAccent), opacity: paid }}>paid</div>

      <Beats {...look} beats={['work at home is recorded', 'checked, then planned with others', 'paid by the I.V.I. Department']} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* 26 interviews and 53 responses → six needs, in two triangles → BCG reused the six dimensions. */
const Needs: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const c = { x: 320, y: 214 };
  const R = 118;
  const pt = (deg: number) => ({ x: c.x + R * Math.cos((deg * Math.PI) / 180), y: c.y + R * Math.sin((deg * Math.PI) / 180) });
  // upward triangle: Freedom; downward: Self-esteem
  const up = [-90, 30, 150].map(pt);
  const down = [90, -30, -150].map(pt);
  const count = tween(f, 6, 40, 0, 1, (t) => t);
  const tri = tween(f, 72, 26, 0, 1, TRAVEL);
  const bcg = tween(f, 146, 22, 0, 1, TRAVEL);
  // labels: [ours, BCG's, angle, which triangle]
  const LABELS: [string, string, number, 'up' | 'down'][] = [
    ['Flexibility', 'Flexibility', -90, 'up'],
    ['Inclusion', 'Inclusion', 150, 'up'],
    ['Control', 'Control', 30, 'up'],
    ['Independence', 'Companionship', -150, 'down'],
    ['Self-progress', 'Self-progress', -30, 'down'],
    ['Support', 'Independence', 90, 'down'],
  ];
  const poly = (ps: { x: number; y: number }[]) => ps.map((q) => `${q.x},${q.y}`).join(' ');

  return (
    <Frame {...look}>
      {/* the research behind it */}
      <div style={{ position: 'absolute', left: 32, top: 70, opacity: 1 - tri }}>
        <div style={{ ...sans(look, 40, p.ink, 600), fontVariantNumeric: 'tabular-nums' }}>{Math.round(26 * count)}</div>
        <div style={mono(look, 20, p.muted)}>interviews</div>
        <div style={{ marginTop: 18, ...sans(look, 40, p.ink, 600), fontVariantNumeric: 'tabular-nums' }}>{Math.round(53 * count)}</div>
        <div style={mono(look, 20, p.muted)}>responses</div>
      </div>

      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <polygon points={poly(up)} fill={p.accent} fillOpacity={0.16 * tri} stroke={p.accent} strokeWidth={2} strokeDasharray={`${tri * 620} 620`} />
        <polygon points={poly(down)} fill={p.ink} fillOpacity={0.08 * tri} stroke={p.ink} strokeWidth={2} strokeDasharray={`${tri * 620} 620`} />
      </svg>
      <div style={{ position: 'absolute', left: c.x - 80, width: 160, top: c.y - 30, textAlign: 'center', ...sans(look, 20, p.ink, 600), opacity: tri }}>Freedom</div>
      <div style={{ position: 'absolute', left: c.x - 80, width: 160, top: c.y + 2, textAlign: 'center', ...sans(look, 20, p.ink, 600), opacity: tri }}>Self-esteem</div>
      {LABELS.map(([ours, theirs, deg], i) => {
        const q = { x: c.x + (R + 26) * Math.cos((deg * Math.PI) / 180), y: c.y + (R + 26) * Math.sin((deg * Math.PI) / 180) };
        const changed = ours !== theirs;
        const right = Math.cos((deg * Math.PI) / 180) > 0.2;
        const left = Math.cos((deg * Math.PI) / 180) < -0.2;
        return (
          <div
            key={ours}
            style={{
              position: 'absolute',
              left: right ? q.x : left ? q.x - 170 : q.x - 85,
              width: 170,
              top: q.y - 13,
              textAlign: right ? 'left' : left ? 'right' : 'center',
              ...mono(look, 20, p.ink),
              opacity: tween(f, 84 + i * 6, 10),
            }}
          >
            <span style={{ borderBottom: changed && bcg > 0.5 ? `2px solid ${p.accent}` : 'none' }}>{changed && bcg > 0.5 ? theirs : ours}</span>
          </div>
        );
      })}
      <div style={{ position: 'absolute', right: 24, top: 24, height: 34, borderRadius: 17, padding: '0 14px', display: 'flex', alignItems: 'center', background: p.accent, ...mono(look, 20, p.onAccent), opacity: bcg }}>BCG workshop</div>

      <Beats {...look} beats={['26 interviews, 53 responses', 'six needs, in two triangles', 'BCG reused the six dimensions']} starts={[0, 70, 140]} />
    </Frame>
  );
};

export const FIGURES = {
  hours: figure(Hours, 210, 'A working mother gives her time and work to the home; her working time and productivity flow to her partner’s office. Her contribution is invisible value: why isn’t it paid for?'),
  journey: figure(Journey, 210, 'Johanna’s journey through the I.V.I. Program: work at home recorded by connected devices; a self-check with her GP and an I.V.I. specialist; planning with expectations, family, manager and HR, and peers; then invisible value income paid by the I.V.I. Department.'),
  needs: figure(Needs, 210, '26 interviews and 53 questionnaire responses gave six needs in two triangles: Flexibility, Inclusion and Control (Freedom); Independence, Self-progress and Support (Self-esteem). BCG later reused the six dimensions in its own workshop.'),
};
