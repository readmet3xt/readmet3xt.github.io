import type { FC } from 'react';
import { useCurrentFrame } from '../core';
import { TRAVEL, mix, span, tween } from '../helpers';
import type { LookProps } from '../theme';
import { Beats, Frame, Phone, figure, mono, sans } from './kit';

// ScreenShot, in two figures: five steps become one key, and how pairing and
// the two transfer paths work (same Wi-Fi direct and free; elsewhere the relay).

const STEPS = ['open Discord', 'attach the file', 'send it to yourself', 'unlock your phone', 'save it'];

/** A drawn gallery: an Inbox count and a grid with `filled` tiles; `fresh` marks the newest. */
const Gallery: FC<LookProps & { count: number; filled: number; fresh: number; top?: number }> = ({ palette: p, fonts, count, filled, fresh, top = 18 }) => (
  <>
    <div style={{ position: 'absolute', left: 14, top, ...sans({ palette: p, fonts }, 20, p.ink, 600) }}>Inbox {count}</div>
    {Array.from({ length: 6 }, (_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: 14 + (i % 2) * 64,
          top: top + 40 + Math.floor(i / 2) * 54,
          width: 56,
          height: 46,
          borderRadius: 8,
          background: i < filled ? p.bg : 'transparent',
          border: `1.5px ${i < filled ? 'solid' : 'dashed'} ${i === 0 && fresh > 0.5 ? p.accent : p.line}`,
          opacity: i === 0 ? Math.max(fresh, filled > 0 ? 1 : 0.6) : 0.6,
          transform: i === 0 ? `scale(${mix(0.8, 1, fresh)})` : undefined,
        }}
      />
    ))}
  </>
);

/* Five steps to move one screenshot → one key → it's in the Inbox. */
const OneKey: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const collapse = tween(f, 78, 22, 0, 1, TRAVEL);
  const key = tween(f, 92, 14);
  const press = Math.sin(Math.PI * tween(f, 150, 14));
  const lit = span(f, 150, 190, 6);
  const fly = tween(f, 158, 22, 0, 1, TRAVEL);
  const landed = tween(f, 178, 10);
  const phone = { x: 420, y: 44, w: 180, h: 326 };
  const keyBox = { x: 120, y: 160, s: 96 };
  const sx = mix(keyBox.x + keyBox.s / 2, phone.x + 7 + 14 + 28, fly);
  const sy = mix(keyBox.y, phone.y + 7 + 58 + 23, fly) - Math.sin(Math.PI * fly) * 60;

  return (
    <Frame {...look}>
      {STEPS.map((s, i) => {
        const y = 52 + i * 56;
        const inn = tween(f, 6 + i * 11, 10);
        return (
          <div
            key={s}
            style={{
              position: 'absolute',
              left: 32,
              top: mix(y, keyBox.y + 30, collapse),
              width: 318,
              height: 44,
              borderRadius: 12,
              background: p.bg,
              border: `1.5px solid ${p.line}`,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '0 14px',
              boxSizing: 'border-box',
              opacity: inn * (1 - collapse),
              transform: `translateX(${(1 - inn) * -10}px) scale(${mix(1, 0.6, collapse)})`,
            }}
          >
            <span style={mono(look, 20, p.muted)}>{i + 1}</span>
            <span style={mono(look, 20, p.ink)}>{s}</span>
          </div>
        );
      })}

      <div style={{ position: 'absolute', left: keyBox.x, top: keyBox.y + press * 8, width: keyBox.s, height: keyBox.s, borderRadius: 20, background: p.bg, border: `1.5px solid ${lit > 0.05 ? p.accent : p.line}`, boxShadow: `0 ${10 - press * 8}px 0 ${p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono(look, 34, p.ink), opacity: key, transform: `scale(${mix(0.85, 1, key)})` }}>
        F1
      </div>

      <div style={{ position: 'absolute', left: phone.x, top: phone.y - 34, ...mono(look, 20, p.muted) }}>your phone</div>
      <Phone {...look} {...phone}>
        <Gallery {...look} count={landed > 0.5 ? 1 : 0} filled={landed > 0.5 ? 1 : 0} fresh={landed} />
      </Phone>
      {f >= 158 && fly < 1 && <div style={{ position: 'absolute', left: sx - 28, top: sy - 23, width: 56, height: 46, borderRadius: 8, border: `2px solid ${p.accent}`, background: p.panel }} />}

      <Beats {...look} beats={['five steps for one image', 'one key instead', 'it lands in the Inbox']} starts={[0, 76, 146]} />
    </Frame>
  );
};

/* The desktop app shows a code → typed into the web app, both join the relay
   room → F1: on the same Wi-Fi it goes direct and free; elsewhere via the relay. */
const CODE = 'Q5FFQC';

const Pairing: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const desk = { x: 24, y: 64, w: 240, h: 176 };
  const phone = { x: 456, y: 44, w: 160, h: 326 };
  const relay = { x: 360, y: 104 };
  const typed = Math.floor(tween(f, 72, 30, 0, CODE.length + 0.99, (x) => x));
  const joined = tween(f, 104, 14);
  const press = Math.sin(Math.PI * tween(f, 146, 14));
  const lit = span(f, 146, 186, 6);
  const fly = tween(f, 154, 24, 0, 1, TRAVEL);
  const landed = tween(f, 176, 10);
  const wifi = tween(f, 140, 12);
  // the Wi-Fi path: a low curve from the desktop to the phone
  const a = { x: desk.x + desk.w, y: 214 };
  const b = { x: phone.x, y: 250 };
  const c = { x: 360, y: 300 };
  const q = (t: number) => ({
    x: (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * c.x + t * t * b.x,
    y: (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * c.y + t * t * b.y,
  });
  const shot = q(fly);

  return (
    <Frame {...look}>
      {/* the desktop app */}
      <div style={{ position: 'absolute', left: desk.x, top: desk.y - 34, ...mono(look, 20, p.muted) }}>desktop app</div>
      <div style={{ position: 'absolute', left: desk.x, top: desk.y, width: desk.w, height: desk.h, borderRadius: 12, background: p.bg, border: `1.5px solid ${p.line}` }}>
        <div style={{ margin: '20px 0 0 20px', ...mono(look, 20, p.muted) }}>pairing code</div>
        <div style={{ margin: '8px 0 0 20px', ...mono(look, 36, p.ink), letterSpacing: '0.14em', opacity: tween(f, 8, 12) }}>{CODE}</div>
        <div style={{ position: 'absolute', left: 20, bottom: 18, display: 'flex', alignItems: 'center', gap: 8, opacity: joined }}>
          <span style={{ width: 9, height: 9, borderRadius: 5, background: p.accent }} />
          <span style={mono(look, 20, p.ink)}>connected</span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: desk.x, top: 262 + press * 6, width: 60, height: 60, borderRadius: 14, background: p.bg, border: `1.5px solid ${lit > 0.05 ? p.accent : p.line}`, boxShadow: `0 ${8 - press * 6}px 0 ${p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono(look, 22, p.ink), opacity: tween(f, 136, 10) }}>
        F1
      </div>

      {/* the relay room both devices join */}
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <line x1={desk.x + desk.w} y1={relay.y} x2={relay.x - 28} y2={relay.y} stroke={joined > 0.5 ? p.accent : p.line} strokeWidth={1.5} opacity={tween(f, 70, 10)} strokeDasharray={wifi > 0.5 ? '3 6' : undefined} />
        <line x1={relay.x + 28} y1={relay.y} x2={phone.x} y2={relay.y} stroke={joined > 0.5 ? p.accent : p.line} strokeWidth={1.5} opacity={tween(f, 70, 10)} strokeDasharray={wifi > 0.5 ? '3 6' : undefined} />
        <path d={`M ${a.x} ${a.y} Q ${c.x} ${c.y} ${b.x} ${b.y}`} fill="none" stroke={p.accent} strokeWidth={2} opacity={wifi} />
      </svg>
      <div style={{ position: 'absolute', left: relay.x - 28, top: relay.y - 28, width: 56, height: 56, borderRadius: 28, background: p.bg, border: `1.5px solid ${joined > 0.5 ? p.accent : p.line}`, opacity: tween(f, 70, 10) }} />
      <div style={{ position: 'absolute', left: relay.x - 80, width: 160, top: relay.y - 64, textAlign: 'center', ...mono(look, 20, p.muted), opacity: tween(f, 70, 10) }}>relay</div>
      <div style={{ position: 'absolute', left: relay.x - 90, width: 180, top: relay.y + 36, textAlign: 'center', ...mono(look, 20, p.muted), opacity: wifi }}>anywhere · $1</div>
      <div style={{ position: 'absolute', left: c.x - 90, width: 180, top: 272, textAlign: 'center', ...mono(look, 20, p.ink), opacity: wifi }}>Wi-Fi · free</div>

      {/* the web app on the phone */}
      <div style={{ position: 'absolute', left: phone.x, top: phone.y - 34, ...mono(look, 20, p.muted) }}>web app</div>
      <Phone {...look} {...phone}>
        <div style={{ position: 'absolute', left: 14, right: 14, top: 18, height: 40, borderRadius: 10, border: `1.5px solid ${typed > 0 ? p.ink : p.line}`, display: 'flex', alignItems: 'center', padding: '0 10px', boxSizing: 'border-box', opacity: 1 - landed, ...mono(look, 22, p.ink), letterSpacing: '0.12em' }}>
          {CODE.slice(0, typed)}
          {typed < CODE.length && <span style={{ width: 2, height: 22, background: p.ink, opacity: f % 20 < 10 ? 1 : 0 }} />}
        </div>
        <div style={{ position: 'absolute', left: 14, top: 72, display: 'flex', alignItems: 'center', gap: 8, opacity: tween(f, 100, 10) * (1 - landed) }}>
          <span style={{ width: 9, height: 9, borderRadius: 5, background: joined > 0.5 ? p.accent : p.line }} />
          <span style={mono(look, 20, p.ink)}>{joined > 0.5 ? 'connected' : 'pairing…'}</span>
        </div>
        <div style={{ opacity: landed }}>
          <Gallery {...look} count={landed > 0.5 ? 1 : 0} filled={landed > 0.5 ? 1 : 0} fresh={landed} />
        </div>
      </Phone>
      {f >= 154 && fly < 1 && <div style={{ position: 'absolute', left: shot.x - 24, top: shot.y - 18, width: 48, height: 36, borderRadius: 7, border: `2px solid ${p.accent}`, background: p.panel }} />}

      <Beats {...look} beats={['the desktop app shows a code', 'typed in, both join the relay', 'F1: same Wi-Fi goes direct']} starts={[0, 66, 136]} />
    </Frame>
  );
};

export const FIGURES = {
  oneKey: figure(OneKey, 210, 'Five steps to move a PC screenshot to a phone (open Discord, attach the file, send it to yourself, unlock your phone, save it) become one key, F1, and the screenshot lands in the Inbox.'),
  pairing: figure(Pairing, 210, 'The desktop app shows the pairing code Q5FFQC; it is typed into the web app and both join the relay room. Pressing F1 on the same Wi-Fi sends the screenshot directly and free; elsewhere it goes through the relay, which needs the $1 subscription.'),
};
