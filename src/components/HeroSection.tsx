import { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { DECK_URL, DECK_TITLE, DECK_AUDIO_URL, PRESENTATION_CUES } from '@/data/presentation';
import { imageSize } from '@/lib/imageSize';

// The deck viewer only loads when someone asks for it.
const PresentationModal = lazy(() => import('@/components/PresentationModal').then((m) => ({ default: m.PresentationModal })));

export const HeroSection = () => {
  const [deckOpen, setDeckOpen] = useState(false);

  return (
    <>
      <section aria-label="Introduction" className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start pt-6 pb-16 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-7">
          <h1 className="text-5xl sm:text-6xl">Amaan Khan</h1>
          <p className="mt-3 text-xl text-text-secondary">Service &amp; Product Designer</p>

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

          <nav aria-label="Quick links" className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#work" className="btn-ink">See the work</a>
            <Link to="/about" className="link-ink">About me</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-ink">Résumé</a>
            <button type="button" onClick={() => setDeckOpen(true)} className="link-ink">Watch the presentation</button>
          </nav>
        </div>

        <figure className="lg:col-span-5 lg:justify-self-end w-full max-w-[260px] sm:max-w-sm">
          <img
            src="/images/amaan-portrait.webp"
            {...imageSize('/images/amaan-portrait.webp')}
            alt="Amaan Khan"
            className="w-full aspect-[4/5] object-cover rounded-sm"
            loading="eager"
            decoding="async"
          />
          <figcaption className="mt-2 text-sm text-text-tertiary">Hyderabad, India. Open to roles across India.</figcaption>
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
