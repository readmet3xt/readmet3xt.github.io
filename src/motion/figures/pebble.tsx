import type { FC } from 'react';
import { assetUrl, useCurrentFrame } from '../core';
import { TRAVEL, mix, tween } from '../helpers';
import type { LookProps } from '../theme';
import { Beats, Frame, Window, figure, mono, sans } from './kit';

// Pebble, in three figures: the segmentation map that pointed to the
// Explorer, the two routes to deep work, and what testing changed.

const IMG = '/images/casestudies/pebble';

/* Five phases from the validation workshop (19 participants) → people move
   between them → every other group was once an Explorer. */
const NODES = {
  feeler: { x: 196, y: 92, label: 'Feeler' },
  mentor: { x: 444, y: 92, label: 'Mentor' },
  apprentices: { x: 78, y: 318, label: 'Apprentices' },
  explorer: { x: 320, y: 318, label: 'Explorer' },
  doer: { x: 562, y: 318, label: 'Doer' },
};
type NodeKey = keyof typeof NODES;
const EDGES: [NodeKey, NodeKey][] = [
  ['apprentices', 'feeler'],
  ['feeler', 'explorer'],
  ['explorer', 'mentor'],
  ['mentor', 'doer'],
  ['apprentices', 'explorer'],
  ['explorer', 'doer'],
  ['feeler', 'mentor'],
];

const Explorer: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const flow = (f % 60) / 60;
  const moving = tween(f, 70, 10) * (1 - tween(f, 136, 8));
  const origin = tween(f, 146, 30, 0, 1, TRAVEL);
  const hero = tween(f, 140, 12);

  return (
    <Frame {...look}>
      <div style={{ position: 'absolute', right: 32, top: 22, height: 34, borderRadius: 17, padding: '0 14px', display: 'flex', alignItems: 'center', background: p.bg, border: `1.5px solid ${p.line}`, ...mono(look, 20, p.ink), opacity: tween(f, 30, 10) }}>19 participants</div>
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        {EDGES.map(([a, b], i) => {
          const A = NODES[a];
          const B = NODES[b];
          const draw = tween(f, 8 + i * 5, 14);
          const t = (flow + i * 0.37) % 1;
          const back = i % 2 === 1;
          const dx = back ? mix(B.x, A.x, t) : mix(A.x, B.x, t);
          const dy = back ? mix(B.y, A.y, t) : mix(A.y, B.y, t);
          return (
            <g key={`${a}-${b}`}>
              <line x1={A.x} y1={A.y} x2={mix(A.x, B.x, draw)} y2={mix(A.y, B.y, draw)} stroke={p.line} strokeWidth={2} />
              <circle cx={dx} cy={dy} r={6} fill={p.ink} opacity={moving} />
            </g>
          );
        })}
        {/* every other group came through the Explorer */}
        {(['feeler', 'mentor', 'apprentices', 'doer'] as NodeKey[]).map((k) => {
          const E = NODES.explorer;
          const N = NODES[k];
          return (
            <g key={k} opacity={hero}>
              <line x1={E.x} y1={E.y} x2={mix(E.x, N.x, origin)} y2={mix(E.y, N.y, origin)} stroke={p.accent} strokeWidth={3} />
              {origin > 0 && origin < 1 && <circle cx={mix(E.x, N.x, origin)} cy={mix(E.y, N.y, origin)} r={7} fill={p.accent} />}
            </g>
          );
        })}
      </svg>
      {(Object.keys(NODES) as NodeKey[]).map((k, i) => {
        const n = NODES[k];
        const big = k === 'explorer';
        const r = big ? 34 : 24;
        return (
          <div key={k} style={{ opacity: tween(f, 4 + i * 4, 10) }}>
            <div style={{ position: 'absolute', left: n.x - r, top: n.y - r, width: r * 2, height: r * 2, borderRadius: r, background: big && hero > 0.5 ? p.accent : p.bg, border: `2px solid ${big ? p.accent : p.ink}` }} />
            <div style={{ position: 'absolute', left: n.x - 90, width: 180, top: n.y + r + 8, textAlign: 'center', ...(big ? sans(look, 22, p.ink, 600) : mono(look, 20, p.ink)) }}>{n.label}</div>
          </div>
        );
      })}

      <Beats {...look} beats={['five phases, 19 people', 'people move between them', 'every group was once an Explorer']} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* Individual happiness: prepare the mind → flow. Workplace happiness: reduce
   distractions → productivity. Deep work, "in the zone", links both. */
const DeepWork: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const L = { x: 32, w: 184 };
  const C = { x: 228, w: 184 };
  const R = { x: 424, w: 184 };
  const left = (at: number) => tween(f, at, 12);
  const right = (at: number) => tween(f, at, 12);
  const join = tween(f, 146, 24, 0, 1, TRAVEL);
  const box = (col: { x: number; w: number }, y: number, h: number, text: string, opacity: number, strong = false) => (
    <div style={{ position: 'absolute', left: col.x, top: y, width: col.w, height: h, borderRadius: 12, background: strong ? p.accent : p.bg, border: `1.5px solid ${strong ? p.accent : p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 10px', boxSizing: 'border-box', ...(strong ? sans(look, 22, p.onAccent, 600) : sans(look, 20, p.ink, 500)), lineHeight: 1.2, opacity }}>
      {text}
    </div>
  );
  const down = (col: { x: number; w: number }, y1: number, y2: number, opacity: number) => (
    <line x1={col.x + col.w / 2} y1={y1} x2={col.x + col.w / 2} y2={y2} stroke={p.muted} strokeWidth={1.75} strokeDasharray="4 6" opacity={opacity} />
  );

  return (
    <Frame {...look}>
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        {down(L, 106, 150, left(16))}
        {down(L, 214, 262, left(30))}
        {down(R, 106, 150, right(84))}
        {down(R, 214, 262, right(98))}
        <line x1={L.x + L.w} y1={294} x2={mix(L.x + L.w, C.x, join)} y2={294} stroke={p.accent} strokeWidth={2.5} />
        <line x1={C.x + C.w} y1={294} x2={mix(C.x + C.w, R.x, join)} y2={294} stroke={p.accent} strokeWidth={2.5} />
      </svg>
      {box(L, 40, 66, 'individual happiness', left(4))}
      {box(L, 150, 64, 'prepare the mind', left(20))}
      {box(L, 262, 64, 'flow', left(36), f >= 40)}
      {box(R, 40, 66, 'workplace happiness', right(72))}
      {box(R, 150, 64, 'reduce distractions', right(88))}
      {box(R, 262, 64, 'productivity', right(104), f >= 108)}
      <div style={{ position: 'absolute', left: C.x + 20, width: C.w - 40, top: 176, height: 40, borderRadius: 10, background: p.bg, border: `1.5px solid ${p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...sans(look, 20, p.ink, 400), opacity: tween(f, 156, 10) }}>in the zone</div>
      {box(C, 262, 64, 'deep work', tween(f, 142, 12), true)}

      <Beats {...look} beats={['prepare the mind, find flow', 'reduce distractions', 'deep work links both']} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* Five testers: I like / I wish / I wonder → the three things we got wrong → Pebble moves into Teams and Slack. */
const COLUMNS: { head: string; cluster: string; notes: string[] }[] = [
  { head: 'I like…', cluster: 'Connection', notes: ['focus', 'coffee catch up', 'different statuses'] },
  { head: 'I wish…', cluster: 'Personalisation', notes: ['emotion check at the start of the day', 'track the data after a few days', 'more control over groups'] },
  { head: 'I wonder…', cluster: 'Integration', notes: ['integrate it within the team', 'integration with existing software', 'too many ways to communicate'] },
];

const Testing: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const cluster = tween(f, 72, 18, 0, 1, TRAVEL);
  const next = tween(f, 140, 18, 0, 1, TRAVEL);
  const colX = (i: number) => 32 + i * 196;

  return (
    <Frame {...look}>
      <div style={{ opacity: 1 - next }}>
        {COLUMNS.map((c, i) => (
          <div key={c.head}>
            <div style={{ position: 'absolute', left: colX(i), top: 24, ...sans(look, 22, p.ink, 500), opacity: tween(f, 4 + i * 6, 10) }}>{c.head}</div>
            <div style={{ position: 'absolute', left: colX(i), top: 62, height: 36, borderRadius: 18, padding: '0 14px', display: 'flex', alignItems: 'center', background: p.accent, ...sans(look, 20, p.onAccent, 600), opacity: cluster, transform: `translateY(${(1 - cluster) * 8}px)` }}>{c.cluster}</div>
            {c.notes.map((n, j) => {
              const spreadY = 74 + j * 98;
              const packedY = 112 + j * 92;
              return (
                <div key={n} style={{ position: 'absolute', left: colX(i), top: mix(spreadY, packedY, cluster), width: 180, minHeight: 80, borderRadius: 10, padding: '8px 12px', boxSizing: 'border-box', background: p.bg, border: `1.5px solid ${cluster > 0.5 ? p.accent : p.line}`, ...sans(look, 20, p.ink, 400), lineHeight: 1.2, opacity: tween(f, 12 + i * 10 + j * 5, 10) }}>
                  {n}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <Window {...look} x={64} y={mix(80, 40, next)} w={512} h={310} style={{ opacity: next }}>
        <img src={assetUrl(`${IMG}/12-iterate-again-960w.webp`)} alt="" decoding="async" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      </Window>

      <Beats {...look} beats={['5 testers: like, wish, wonder', 'three things we got wrong', 'Pebble moves into Teams, Slack']} starts={[0, 70, 140]} />
    </Frame>
  );
};

export const FIGURES = {
  explorer: figure(Explorer, 210, 'The segmentation map from the validation workshop with 19 participants: five phases (Feeler, Mentor, Apprentices, Explorer, Doer) with people moving between them. Every other group was once an Explorer.'),
  deepWork: figure(DeepWork, 210, 'Individual happiness: prepare the mind, which leads to flow. Workplace happiness: reduce distractions, which leads to productivity. Deep work, being in the zone, links the two.'),
  testing: figure(Testing, 210, "Five testers' notes under I like, I wish and I wonder cluster into the three things we got wrong: connection, personalisation and integration. Pebble's next iteration works inside Microsoft Teams and Slack."),
};
