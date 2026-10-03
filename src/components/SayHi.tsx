import { useEffect, useRef, useState } from 'react';

const EMAIL = 'mdamkhan.work@gmail.com';

/** "say hi": a message box that takes the intro's place, then hands the message to the visitor's email app. */
export const SayHi = ({ onClose }: { onClose: () => void }) => {
  const [message, setMessage] = useState('');
  const box = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const t = setTimeout(() => box.current?.focus(), 200);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Hello from your portfolio');
    const body = encodeURIComponent(message.trim());
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={send} className="flex h-full min-h-[320px] flex-col" aria-label="Write to Amaan">
      <label htmlFor="say-hi-message" className="font-mono text-sm text-text-tertiary">Write to Amaan</label>
      <textarea
        id="say-hi-message"
        ref={box}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message…"
        className="mt-4 flex-1 min-h-[180px] w-full resize-none bg-transparent font-mono text-lg leading-relaxed text-text-primary placeholder:text-text-tertiary outline-none"
      />
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" className="btn-ink" disabled={!message.trim()}>Send with email</button>
        <button type="button" className="link-ink" onClick={onClose}>Go back</button>
        <span className="text-sm text-text-tertiary">Opens your email app with this message, to {EMAIL}.</span>
      </div>
    </form>
  );
};
