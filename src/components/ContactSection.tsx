import { useState } from 'react';

const EMAIL = 'mdamkhan.work@gmail.com';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can fail in insecure contexts; the address is on screen anyway.
    }
  };

  return (
    <section aria-labelledby="contact-heading" className="border-t border-border py-16">
      <h2 id="contact-heading" className="text-3xl sm:text-4xl">Contact</h2>
      <p className="mt-4 max-w-[60ch] text-lg text-text-secondary">
        The quickest way to reach me is email:{' '}
        <a href={`mailto:${EMAIL}`} className="link-ink">{EMAIL}</a>
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="button" onClick={copyEmail} className="btn-ink">
          {copied ? 'Copied' : 'Copy email'}
        </button>
        <a href="https://www.linkedin.com/in/readmetxt/" target="_blank" rel="noopener noreferrer" className="link-ink">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-ink">Résumé</a>
        <span aria-live="polite" className="sr-only">{copied ? 'Email copied to clipboard' : ''}</span>
      </div>
    </section>
  );
};
