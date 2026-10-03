import type { FC } from 'react';
import { useCurrentFrame } from '../core';
import { TRAVEL, mix, span, tween } from '../helpers';
import type { LookProps } from '../theme';
import { Beats, Frame, Phone, figure, mono, sans } from './kit';

// Versus, in two figures: the two ways to share, and the tiebreaker at work.
// Values come from the Laund Cup screens (Safi 4–1 Amaan, matchday 1).

/* Share Live while the host is online → the host closes the laptop → the public link keeps refreshing. */
const Sharing: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const laptop = { x: 32, y: 96, w: 232, h: 144 };
  const hub = { x: 350, y: 140 };
  const snap = { x: 350, y: 318 };
  const phones = [{ x: 440, y: 64 }, { x: 532, y: 64 }];
  const PW = 80;
  const PH = 150;
  const goal = f >= 30;
  const pulse = tween(f, 32, 18, 0, 1, TRAVEL);
  const live = 1 - tween(f, 76, 14);
  const lid = tween(f, 80, 18, 0, 1, TRAVEL);
  const snapOn = tween(f, 140, 14);
  const spin = tween(f, 150, 50, 0, 1, (x) => x);
  const score = (s: string) => <span style={{ ...mono(look, 24, p.ink), fontVariantNumeric: 'tabular-nums' }}>{s}</span>;

  return (
    <Frame {...look}>
      {/* the host's laptop */}
      <div style={{ position: 'absolute', left: laptop.x, top: laptop.y - 34, ...mono(look, 20, p.muted) }}>host</div>
      <div style={{ position: 'absolute', left: laptop.x, top: laptop.y, width: laptop.w, height: laptop.h, borderRadius: 12, background: p.bg, border: `1.5px solid ${p.line}`, transformOrigin: 'bottom', transform: `scaleY(${mix(1, 0.08, lid)})`, opacity: mix(1, 0.6, lid) }}>
        <div style={{ position: 'absolute', left: 16, top: 14, height: 26, borderRadius: 13, padding: '0 10px', display: 'flex', alignItems: 'center', background: p.accent, ...mono(look, 20, p.onAccent), opacity: live }}>LIVE</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 62, display: 'flex', justifyContent: 'center', gap: 14, alignItems: 'baseline', opacity: 1 - tween(f, 76, 8) }}>
          <span style={sans(look, 20, p.ink, 600)}>Safi</span>
          {score(goal ? '4 : 1' : '3 : 1')}
          <span style={sans(look, 20, p.ink, 600)}>Amaan</span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: laptop.x - 14, top: laptop.y + laptop.h - 2, width: laptop.w + 28, height: 10, borderRadius: 5, background: p.line }} />
      <div style={{ position: 'absolute', left: laptop.x, top: laptop.y + laptop.h + 22, ...mono(look, 20, p.muted), opacity: lid }}>offline</div>

      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        {/* live: PeerJS while the host is online */}
        <g opacity={live}>
          <line x1={laptop.x + laptop.w} y1={hub.y} x2={hub.x - 24} y2={hub.y} stroke={p.accent} strokeWidth={1.75} />
          {phones.map((ph) => (
            <line key={ph.x} x1={hub.x + 24} y1={hub.y} x2={ph.x} y2={ph.y + PH / 2} stroke={p.accent} strokeWidth={1.75} />
          ))}
          {pulse > 0 && pulse < 1 && (
            <circle
              cx={pulse < 0.5 ? mix(laptop.x + laptop.w, hub.x, pulse * 2) : mix(hub.x, phones[0].x, (pulse - 0.5) * 2)}
              cy={pulse < 0.5 ? hub.y : mix(hub.y, phones[0].y + PH / 2, (pulse - 0.5) * 2)}
              r={6}
              fill={p.accent}
            />
          )}
        </g>
        {/* public: a snapshot that refreshes every 5 s */}
        <g opacity={snapOn}>
          {phones.map((ph) => (
            <line key={ph.x} x1={snap.x + 24} y1={snap.y} x2={ph.x + PW / 2} y2={ph.y + PH} stroke={p.accent} strokeWidth={1.75} strokeDasharray="3 6" />
          ))}
          <circle cx={snap.x} cy={snap.y} r={34} fill="none" stroke={p.accent} strokeWidth={2.5} strokeDasharray={`${spin * 213} 213`} transform={`rotate(-90 ${snap.x} ${snap.y})`} />
        </g>
      </svg>
      <div style={{ position: 'absolute', left: hub.x - 24, top: hub.y - 24, width: 48, height: 48, borderRadius: 24, background: p.bg, border: `1.5px solid ${p.accent}`, opacity: live }} />
      <div style={{ position: 'absolute', left: hub.x - 80, width: 160, top: hub.y - 62, textAlign: 'center', ...mono(look, 20, p.muted), opacity: live }}>live</div>
      <div style={{ position: 'absolute', left: snap.x - 24, top: snap.y - 24, width: 48, height: 48, borderRadius: 24, background: p.bg, border: `1.5px solid ${p.line}`, opacity: snapOn }} />
      <div style={{ position: 'absolute', left: snap.x - 160, width: 108, top: snap.y - 24, textAlign: 'right', ...mono(look, 20, p.ink), opacity: snapOn }}>public</div>
      <div style={{ position: 'absolute', left: snap.x - 160, width: 108, top: snap.y + 2, textAlign: 'right', ...mono(look, 20, p.muted), opacity: snapOn }}>every 5 s</div>

      {/* the viewers */}
      <div style={{ position: 'absolute', left: phones[0].x, top: phones[0].y - 34, ...mono(look, 20, p.muted) }}>friends</div>
      {phones.map((ph) => (
        <Phone key={ph.x} {...look} x={ph.x} y={ph.y} w={PW} h={PH}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ ...mono(look, 22, p.ink), fontVariantNumeric: 'tabular-nums' }}>{f >= 48 ? '4:1' : '3:1'}</span>
          </div>
        </Phone>
      ))}

      <Beats {...look} beats={['host online: goals go live', 'the host closes the laptop', 'the public link keeps going']} starts={[0, 72, 140]} />
    </Frame>
  );
};

/* The host finishes the match → the table recalculates → goal difference breaks the tie at 0 points. */
type Row = { name: string; before: number[]; after: number[] };
const COLS = ['P', 'W', 'D', 'L', 'GD', 'PTS'];
const ROWS: Row[] = [
  { name: 'Safi', before: [0, 0, 0, 0, 0, 0], after: [1, 1, 0, 0, 3, 3] },
  { name: 'Shanwaz', before: [0, 0, 0, 0, 0, 0], after: [0, 0, 0, 0, 0, 0] },
  { name: 'Rahil', before: [0, 0, 0, 0, 0, 0], after: [0, 0, 0, 0, 0, 0] },
  { name: 'Amaan', before: [0, 0, 0, 0, 0, 0], after: [1, 0, 0, 1, -3, 0] },
];
const show = (v: number, col: string) => (col === 'GD' && v > 0 ? `+${v}` : col === 'GD' && v < 0 ? `−${-v}` : String(v));

const Tiebreak: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const tap = Math.sin(Math.PI * tween(f, 34, 12));
  const done = f >= 40;
  const table = { x: 32, y: 150, w: 576 };
  const colX = (i: number) => table.x + 200 + i * 62;
  const rowY = (r: number) => table.y + 48 + r * 46;
  const ptsOn = span(f, 84, 136, 8);
  const gdOn = tween(f, 146, 10);
  const lastOn = tween(f, 164, 12);

  return (
    <Frame {...look}>
      {/* the match card */}
      <div style={{ position: 'absolute', left: 32, top: 30, width: 576, height: 92, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}` }}>
        <div style={{ position: 'absolute', left: 24, top: 0, bottom: 0, display: 'flex', alignItems: 'center', gap: 18 }}>
          <span style={sans(look, 22, p.ink, 600)}>Safi</span>
          <span style={{ ...mono(look, 34, p.ink), fontVariantNumeric: 'tabular-nums' }}>4 : 1</span>
          <span style={sans(look, 22, p.ink, 600)}>Amaan</span>
        </div>
        <div style={{ position: 'absolute', right: 20, top: 24, height: 44, borderRadius: 22, padding: '0 18px', display: 'flex', alignItems: 'center', background: done ? p.line : p.accent, ...mono(look, 20, done ? p.ink : p.onAccent), transform: `scale(${1 - tap * 0.06})` }}>
          {done ? 'finished' : 'finish match'}
        </div>
      </div>

      {/* the league table */}
      {COLS.map((c, i) => (
        <div key={c} style={{ position: 'absolute', left: colX(i) - 25, width: 50, top: table.y, textAlign: 'center', ...mono(look, 20, p.muted) }}>{c}</div>
      ))}
      <div style={{ position: 'absolute', left: colX(5) - 27, width: 54, top: table.y - 8, height: 46 * 4 + 48, borderRadius: 10, border: `2px solid ${p.accent}`, opacity: ptsOn }} />
      <div style={{ position: 'absolute', left: colX(4) - 27, width: 54, top: table.y - 8, height: 46 * 4 + 48, borderRadius: 10, border: `2px solid ${p.accent}`, opacity: gdOn }} />
      {ROWS.map((r, ri) => {
        const vals = done ? r.after : r.before;
        const changed = tween(f, 44 + ri * 4, 10);
        return (
          <div key={r.name}>
            <div style={{ position: 'absolute', left: table.x, top: rowY(ri) - 10, width: table.w, height: 42, borderRadius: 10, background: ri === 3 ? p.bg : 'transparent', border: `1.5px solid ${ri === 3 ? p.accent : 'transparent'}`, opacity: ri === 3 ? lastOn : 0 }} />
            <div style={{ position: 'absolute', left: table.x + 14, top: rowY(ri), ...mono(look, 20, p.muted) }}>{ri + 1}</div>
            <div style={{ position: 'absolute', left: table.x + 46, top: rowY(ri) - 1, ...sans(look, 21, p.ink, 600) }}>{r.name}</div>
            {vals.map((v, ci) => (
              <div key={ci} style={{ position: 'absolute', left: colX(ci) - 25, width: 50, top: rowY(ri), textAlign: 'center', ...mono(look, 20, v !== 0 || ci === 5 ? p.ink : p.muted), fontVariantNumeric: 'tabular-nums', opacity: done && r.after[ci] !== r.before[ci] ? changed : 1 }}>
                {show(v, COLS[ci])}
              </div>
            ))}
          </div>
        );
      })}

      <Beats {...look} beats={['the host finishes the match', 'points first: three on 0', 'goal difference breaks the tie']} starts={[0, 76, 142]} />
    </Frame>
  );
};

export const FIGURES = {
  sharing: figure(Sharing, 210, 'While the host is online, Share Live sends each goal straight to friends watching. When the host closes the laptop, the Share Public link keeps working, refreshing a snapshot every five seconds.'),
  tiebreak: figure(Tiebreak, 210, 'The host finishes Safi 4–1 Amaan. The table recalculates: Safi has 3 points; Shanwaz, Rahil and Amaan have 0, and goal difference (0, 0, −3) puts Amaan fourth.'),
};
