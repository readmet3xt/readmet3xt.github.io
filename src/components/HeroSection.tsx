import { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { DECK_URL, DECK_TITLE, DECK_AUDIO_URL, PRESENTATION_CUES } from '@/data/presentation';
import { imageSize } from '@/lib/imageSize';
import { cn } from '@/lib/utils';
import { RotatingGreeting } from '@/components/RotatingGreeting';
import { SayHi } from '@/components/SayHi';

// Phones: full-width rows under the buttons. Larger screens: a line of links.
const MORE_LINK = 'link-ink max-sm:flex max-sm:w-full max-sm:min-h-[48px] max-sm:items-center max-sm:justify-between max-sm:gap-4 max-sm:border-b max-sm:border-border max-sm:no-underline';
const MORE_ICON = 'h-4 w-4 shrink-0 text-text-tertiary sm:hidden';

// The deck viewer only loads when someone asks for it.
const PresentationModal = lazy(() => import('@/components/PresentationModal').then((m) => ({ default: m.PresentationModal })));

/** The intro: greeting, who I am, the ways in, and the portrait. "say hi" swaps it for a message box. */
export const HeroSection = ({ first = false }: { first?: boolean }) => {
  const [deckOpen, setDeckOpen] = useState(false);
  const [writing, setWriting] = useState(false);

  return (
    <>
      <section aria-label="Introduction" className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start lg:items-center pt-6 lg:pt-12 pb-16 lg:pb-24">
        <div className="relative lg:col-span-7">
          <div
            className={cn('transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]', writing && 'pointer-events-none -translate-y-2 opacity-0')}
            aria-hidden={writing}
          >
            <h1 className="text-6xl sm:text-7xl leading-[1.02]" aria-label="hi, I'm Amaan">
              <span aria-hidden="true"><RotatingGreeting /><br />i’m amaan<span className="text-accent-primary">.</span></span>
            </h1>
            <p className="mt-5 font-mono text-sm text-text-tertiary">Amaan Khan · Service &amp; Product Designer</p>

            <div className="mt-8 max-w-[60ch] space-y-4 text-lg leading-relaxed text-text-primary">
              <p>
                I design end-to-end services, and then I build them. I trained in service design at the Royal College of
                Art and worked on research-led projects with VISA Innovation Centre, BCG and WWT × Airbnb.
              </p>
              <p className="text-text-secondary">
                After the RCA I was founding designer at KoinBasket, a crypto investing platform that grew past 70,000
                users, and I've since designed and built products of my own, including Otagon, an AI companion for gamers.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <a href="#work" className="btn-ink justify-center">See the work</a>
              <button type="button" onClick={() => setWriting(true)} className="btn-outline justify-center">Say hi</button>
            </div>
            <nav aria-label="More about me" className="mt-6 flex flex-col border-t border-border sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 sm:border-0 sm:text-sm">
              <Link to="/about" className={MORE_LINK}>
                About me<ArrowRight className={MORE_ICON} aria-hidden="true" />
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={MORE_LINK}>
                Résumé<ArrowUpRight className={MORE_ICON} aria-hidden="true" />
              </a>
              <button type="button" onClick={() => setDeckOpen(true)} className={`${MORE_LINK} text-left`}>
                Watch the presentation<Play className={MORE_ICON} aria-hidden="true" />
              </button>
            </nav>
          </div>

          {writing && (
            <div className="absolute inset-0 animate-fade-in">
              <SayHi onClose={() => setWriting(false)} />
            </div>
          )}
        </div>

        {/* Phones: the portrait spans the text column above it, same left and right edges. */}
        <figure className="lg:col-span-5 lg:justify-self-end w-full sm:max-w-sm">
          <img
            src="/images/amaan-portrait.webp"
            {...imageSize('/images/amaan-portrait.webp')}
            alt="Amaan Khan"
            className="w-full aspect-[4/5] object-cover rounded-xl"
            loading={first ? 'eager' : 'lazy'}
            decoding="async"
          />
          <figcaption className="mt-2 font-mono text-xs text-text-tertiary">Hyderabad, India. Open to roles across India.</figcaption>
        </figure>
      </section>

      {deckOpen && (
        <Suspense fallback={null}>
          <PresentationModal
            open={deckOpen}
            onClose={() => setDeckOpen(false)}
            src={DECK_URL}
            audioUrl={DECK_AUDIO_URL}
            cues={PRESENTATION_CUES}
            title={DECK_TITLE}
          />
        </Suspense>
      )}
    </>
  );
};
