import type { FC } from 'react';
import { useCurrentFrame } from '../core';
import { TRAVEL, mix, span, tween } from '../helpers';
import type { LookProps } from '../theme';
import { Beats, Frame, Window, figure, mono, sans } from './kit';

// Law.X, in two figures: the glass-box idea (show the AI's working so a
// lawyer can check it), and the context set before the first query.

const STEPS = ['reframe query', 'clarify', 'review statutes'];

/* A chatbot: you ask, it answers → Law.X shows its working → check the statute before you trust it. */
const GlassBox: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const q = { x: 28, y: 150, w: 116, h: 70 };
  const box = { x: 180, y: 70, w: 280, h: 230 };
  const a = { x: 496, y: 150, w: 116, h: 70 };
  const glass = tween(f, 70, 18, 0, 1, TRAVEL);
  const inFlow = tween(f, 10, 18, 0, 1, TRAVEL);
  const outFlow = tween(f, 32, 18, 0, 1, TRAVEL);
  const check = tween(f, 158, 12);
  const cursor = tween(f, 144, 16, 0, 1, TRAVEL);
  const chip = { x: box.x + 24, y: box.y + 174 };

  return (
    <Frame {...look}>
      {/* the question and the answer */}
      <div style={{ position: 'absolute', left: q.x, top: q.y, width: q.w, height: q.h, borderRadius: 12, background: p.bg, border: `1.5px solid ${p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono(look, 20, p.ink), opacity: tween(f, 2, 10) }}>question</div>
      <div style={{ position: 'absolute', left: a.x, top: a.y, width: a.w, height: a.h, borderRadius: 12, background: p.bg, border: `1.5px solid ${check > 0.5 ? p.accent : p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono(look, 20, p.ink), opacity: tween(f, 40, 10) }}>answer</div>
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <line x1={q.x + q.w} y1={185} x2={mix(q.x + q.w, box.x, inFlow)} y2={185} stroke={p.muted} strokeWidth={1.75} />
        <line x1={box.x + box.w} y1={185} x2={mix(box.x + box.w, a.x, outFlow)} y2={185} stroke={p.muted} strokeWidth={1.75} />
        {/* the reviewer's eye goes from the answer to the statute */}
        <path d={`M ${a.x + a.w / 2} ${a.y + a.h} C ${a.x + 40} ${a.y + 160}, ${chip.x + 220} ${chip.y + 60}, ${mix(a.x + a.w / 2, chip.x + 160, cursor)} ${mix(a.y + a.h, chip.y + 16, cursor)}`} fill="none" stroke={p.accent} strokeWidth={1.75} strokeDasharray="3 6" opacity={cursor > 0 ? 1 : 0} />
      </svg>

      {/* the model: opaque, then glass */}
      <div style={{ position: 'absolute', left: box.x, top: box.y, width: box.w, height: box.h, borderRadius: 18, background: p.mode === 'dark' ? mixHex(p.ink, p.panel, 1 - glass * 0.92) : mixHex(p.ink, p.panel, 1 - glass * 0.95), border: `1.5px solid ${glass > 0.5 ? p.ink : p.line}` }} />
      <div style={{ position: 'absolute', left: box.x, width: box.w, top: box.y + box.h / 2 - 14, textAlign: 'center', ...mono(look, 22, p.panel), opacity: 1 - glass }}>chatbot</div>
      {STEPS.map((s, i) => {
        const at = 92 + i * 14;
        const done = tween(f, at + 10, 8);
        return (
          <div key={s} style={{ position: 'absolute', left: box.x + 24, top: box.y + 22 + i * 48, width: box.w - 48, height: 38, borderRadius: 10, border: `1.5px solid ${done > 0.5 ? p.ink : p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', boxSizing: 'border-box', opacity: tween(f, at, 10) }}>
            <span style={mono(look, 20, p.ink)}>{s}</span>
            <span style={{ width: 9, height: 9, borderRadius: 5, background: p.accent, opacity: done }} />
          </div>
        );
      })}
      <div style={{ position: 'absolute', left: chip.x, top: chip.y, height: 34, borderRadius: 8, padding: '0 12px', display: 'flex', alignItems: 'center', gap: 10, background: check > 0.5 ? p.accent : 'transparent', border: `1.5px solid ${p.accent}`, ...mono(look, 20, check > 0.5 ? p.onAccent : p.ink), opacity: tween(f, 128, 10) }}>
        Sec 56(2)(x)
        <span style={{ opacity: check }}>✓</span>
      </div>

      <Beats {...look} beats={['a chatbot: you ask, it answers', 'Law.X shows its working', 'check it before you trust it']} starts={[0, 66, 140]} />
    </Frame>
  );
};

/** Blend two #rrggbb colours (t = share of `a`). */
const mixHex = (a: string, b: string, t: number) => {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return `rgb(${pa.map((v, i) => Math.round(v * t + pb[i] * (1 - t))).join(', ')})`;
};

/* The state is chosen first → instructions saved once → every query carries both. */
const QUERIES = ['Explain GST changes', 'Draft IT notice response'];

const Context: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const win = { x: 24, y: 20, w: 592, h: 380 };
  const composer = { x: win.x + 24, y: win.y + win.h - 70, w: win.w - 48, h: 46 };
  const stateModal = span(f, 6, 52, 10);
  const stateChip = tween(f, 54, 14, 0, 1, TRAVEL);
  const instr = span(f, 72, 120, 10);
  const typedText = 'Keep it concise';
  const typed = Math.floor(tween(f, 80, 22, 0, typedText.length + 0.99, (x) => x));
  const remember = tween(f, 106, 6);
  const instrChip = tween(f, 124, 14, 0, 1, TRAVEL);
  const chipsY = composer.y - 44;

  const chip = (text: string, x: number, y: number, opacity: number, key?: string) => (
    <div key={key} style={{ position: 'absolute', left: x, top: y, height: 32, borderRadius: 16, padding: '0 12px', display: 'flex', alignItems: 'center', background: p.bg, border: `1.5px solid ${p.accent}`, ...mono(look, 20, p.ink), opacity, whiteSpace: 'nowrap' }}>
      {text}
    </div>
  );

  return (
    <Frame {...look}>
      <Window {...look} {...win} />
      {/* the composer at the bottom of the chat */}
      <div style={{ position: 'absolute', left: composer.x, top: composer.y, width: composer.w, height: composer.h, borderRadius: 23, border: `1.5px solid ${p.line}`, display: 'flex', alignItems: 'center', padding: '0 18px', boxSizing: 'border-box' }} />

      {/* 1. jurisdiction, before anything else */}
      <div style={{ position: 'absolute', left: 120, top: 70, width: 400, height: 190, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}`, opacity: stateModal, transform: `scale(${mix(0.96, 1, stateModal)})` }}>
        <div style={{ margin: '24px 24px 0', ...sans(look, 20, p.ink, 600) }}>Which state are you from in India?</div>
        <div style={{ margin: '18px 24px 0', height: 44, borderRadius: 10, border: `1.5px solid ${p.ink}`, display: 'flex', alignItems: 'center', padding: '0 14px', ...mono(look, 20, p.ink) }}>{f >= 24 ? 'Telangana' : 'Select a state'}</div>
        <div style={{ margin: '16px 24px 0', width: 150, height: 40, borderRadius: 10, background: p.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', ...sans(look, 20, p.panel, 600), transform: `scale(${1 - Math.sin(Math.PI * tween(f, 40, 10)) * 0.05})` }}>Get Started</div>
      </div>
      {chip('Telangana', mix(220, composer.x, stateChip), mix(150, chipsY, stateChip), stateChip > 0 ? 1 : 0)}

      {/* 2. instructions, once */}
      <div style={{ position: 'absolute', left: 120, top: 70, width: 400, height: 190, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}`, opacity: instr, transform: `scale(${mix(0.96, 1, instr)})` }}>
        <div style={{ margin: '24px 24px 0', ...sans(look, 20, p.ink, 600) }}>Add Instructions</div>
        <div style={{ margin: '18px 24px 0', height: 44, borderRadius: 10, border: `1.5px solid ${p.ink}`, display: 'flex', alignItems: 'center', padding: '0 14px', ...mono(look, 20, p.ink) }}>{typedText.slice(0, typed)}</div>
        <div style={{ margin: '18px 24px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 20, height: 20, borderRadius: 5, border: `1.5px solid ${p.ink}`, background: remember > 0.5 ? p.ink : 'transparent' }} />
          <span style={sans(look, 20, p.ink, 400)}>Remember these instructions</span>
        </div>
      </div>
      {chip('Keep it concise', mix(220, composer.x + 150, instrChip), mix(150, chipsY, instrChip), instrChip > 0 ? 1 : 0)}

      {/* 3. every query carries both */}
      {QUERIES.map((text, i) => {
        const at = 146 + i * 22;
        const go = tween(f, at, 16, 0, 1, TRAVEL);
        const y = mix(chipsY, 64 + i * 100, go);
        return (
          <div key={text} style={{ position: 'absolute', right: 640 - (win.x + win.w - 24), top: y, opacity: go > 0 ? 1 : 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
            <div style={{ height: 42, borderRadius: 12, padding: '0 16px', display: 'flex', alignItems: 'center', background: p.bg, border: `1.5px solid ${p.line}`, ...sans(look, 20, p.ink, 500) }}>{text}</div>
            <div style={{ display: 'flex', gap: 8, opacity: tween(f, at + 12, 8) }}>
              {['Telangana', 'Keep it concise'].map((c) => (
                <span key={c} style={{ height: 26, borderRadius: 13, padding: '0 10px', display: 'flex', alignItems: 'center', border: `1.5px solid ${p.accent}`, ...mono(look, 20, p.ink) }}>{c}</span>
              ))}
            </div>
          </div>
        );
      })}

      <Beats {...look} beats={['the state comes first', 'instructions, set once', 'every query carries both']} starts={[0, 66, 140]} />
    </Frame>
  );
};

export const FIGURES = {
  glassBox: figure(GlassBox, 210, 'A standard chatbot takes a question and returns an answer from a closed box. Law.X opens the box: it shows the query being reframed, clarified and checked against the statutes, so a lawyer can check the cited Section 56(2)(x) before trusting the answer.'),
  context: figure(Context, 210, 'Law.X asks for the state first (Telangana) and lets the lawyer save instructions once ("Keep it concise"); every query after that carries both.'),
};
