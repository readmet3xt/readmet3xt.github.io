import { motion } from 'framer-motion';
import { Copy, Linkedin, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mdamkhan.work@gmail.com');
      toast({
        title: 'Email copied to clipboard!',
        description: 'You can now paste it anywhere.',
      });
    } catch {
      // Clipboard can fail in insecure contexts; the address is still visible on screen
    }
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 sm:px-12 sm:py-16 text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--accent-primary)/0.08),_transparent_60%)]" />

      <div className="relative">
        <p className="font-ibm-plex-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent-primary mb-3">
          Contact
        </p>
        <h2 className="font-dm-sans font-bold tracking-tight text-3xl sm:text-4xl text-text-primary mb-4 text-balance">
          Have a product that needs designing — and building?
        </h2>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto mb-8">
          I'm open to full-time roles and select contracts. Based in Hyderabad,
          comfortable remote — and I reply fast at{' '}
          <span className="text-text-primary font-medium">mdamkhan.work@gmail.com</span>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-primary text-white font-semibold hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_30px_hsl(var(--accent-primary)/0.25)]"
          >
            <Copy className="w-4 h-4" />
            Copy email
          </button>
          <a
            href="https://www.linkedin.com/in/readmetxt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-primary font-semibold hover:border-accent-primary hover:text-accent-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1YtQLJCELLWw8P2Djfzf0A0Xtt5VfrCqk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-primary font-semibold hover:border-accent-primary hover:text-accent-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};
