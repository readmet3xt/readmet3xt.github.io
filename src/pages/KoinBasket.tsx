import { useEffect, useState } from 'react';
import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyParagraph,
  CaseStudyQuote,
  CaseStudyList,
  CaseStudyImage,
  CaseStudyImageGrid,
  CaseStudyCard,
  CaseStudyCardGrid,
  CaseStudyStatsGrid,
} from '@/components/case-study';

export const KoinBasket = () => {
  const [isPastChapter2, setIsPastChapter2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const chapter2Element = document.getElementById('chapter-2');
      if (chapter2Element) {
        const rect = chapter2Element.getBoundingClientRect();
        // Trigger when Chapter 2 is 50% or more into the viewport
        if (rect.top <= window.innerHeight * 0.5) {
          setIsPastChapter2(true);
        } else {
          setIsPastChapter2(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`transition-colors duration-300 ${isPastChapter2 ? 'theme-kb-deep' : 'theme-kb-dark'}`}>
      <CaseStudyLayout
        title="KoinBasket"
        description="From a One-Week MVP Contract to 70,000 Users — How I built a crypto investing platform that democratized portfolio diversification."
        externalLink="https://otagon2.github.io/Koinbasket/"
        externalLabel="KoinBasket"
        ctaClassName={isPastChapter2 ? 'bg-accent-primary text-card hover:bg-accent-hover' : undefined}
      >
        <CaseStudyHero
          eyebrow="Case Study · KoinBasket · Fintech · 2022 — 2025"
          title="From a One-Week MVP Contract to 70,000 Users"
          subtitle="How I built a crypto investing platform that democratized portfolio diversification"
          pills={[
            'Fintech',
            'Founding Designer',
            'MVP Design',
            'Design Leadership',
            'Rebranding',
          ]}
          intro="When I joined KoinBasket as founding designer, crypto felt like an exclusive club for the tech-savvy. My brief: make diversified investing so intuitive that a first-timer could participate confidently in minutes. A one-week MVP contract became a full-time lead role — and the product scaled to 70,000 users."
          externalLink="https://otagon2.github.io/Koinbasket/"
          externalLabel="KoinBasket"
          overview={{
            role: [
              'Founding Designer → returned as Senior UX Designer',
              'Designed the MVP solo, end-to-end',
              'Mentored and managed a junior designer',
              'Led the rebrand and later product initiatives',
            ],
            timeline: 'Founding Designer (Oct 2022–May 2023) → Senior Design Lead (Jun 2024–Mar 2025)',
            recognition: '0 → 70,000 users; Complete rebrand; Live trading ecosystem',
            tools: [
              'Figma',
              'Balsamiq',
              'iOS/Android Design',
              'Design Systems',
              'Brand Design',
            ],
          }}
          heroImage="/images/casestudies/koinbasket/2-home-page.jpg"
          heroImageAlt="KoinBasket home page"
        />

        {/* The Origin Story */}
        <CaseStudySection title="The Origin Story">
          <CaseStudyParagraph lead>
            Crypto in 2020 was a labyrinth — complex terminology, overwhelming choices, legitimate
            security fears. New investors faced a steep learning curve just to make their first purchase,
            let alone build a diversified portfolio.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            The breakthrough insight was radical simplification: curated crypto "baskets." Instead of
            forcing users to research hundreds of coins individually, we offered thematic portfolios —
            the G.O.A.T. Basket (top 5 coins), NFT Basket, DeFi Basket — that users could invest in
            with one click.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            Trust was the other non-negotiable. We adopted a non-custodial model — users traded through
            their own Binance or Coinbase accounts, never surrendering control of funds to us. That
            architecture became our competitive moat.
          </CaseStudyParagraph>

          <CaseStudyQuote>
            Trust is the ultimate currency in fintech. Non-custodial wasn't just a technical decision —
            it was the design principle that shaped everything.
          </CaseStudyQuote>

          <CaseStudyImage
            src="/images/casestudies/koinbasket/12-new-product-dashboard-live-trading.png"
            alt="KoinBasket product dashboard with live trading"
            caption="The product dashboard — curated baskets and live trading in one view."
            aspectRatio="aspect-auto"
          />
        </CaseStudySection>

        {/* Chapter 1: The One-Week MVP */}
        <CaseStudySection title="Chapter 1: The One-Week MVP">
          <CaseStudyParagraph lead>
            As the sole founding designer, I had one week to design a fully functional MVP. No time
            for perfection — just relentless focus on one question: can we make crypto investing accessible?
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            I moved from Balsamiq wireframes to high-fidelity UI in days. The dark theme with vibrant
            accents established the visual language immediately. Beyond UI, I owned everything — custom
            basket icons, email templates, marketing content, onboarding flows. Cross-platform from day
            one: responsive web plus foundational iOS and Android designs.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={2}
            aspectRatio="aspect-auto"
            images={[
              { src: '/images/casestudies/koinbasket/3-lofi-home.png', alt: 'Low-fidelity home page concept' },
              { src: '/images/casestudies/koinbasket/4-lofi-2.png', alt: 'Low-fidelity layout concept' }
            ]}
          />

          <CaseStudyCard title="Core Features Shipped in One-Week Sprint">
            <CaseStudyList items={[
              'Curated baskets with one-click investing and transparent coin breakdowns',
              'Non-custodial Coinbase and Binance account connection',
              'Portfolio tracking with full transaction history',
              'Gamification layer — a Crypto Fantasy League where users competed by building their own baskets',
            ]} />
          </CaseStudyCard>

          <CaseStudyParagraph>
            <strong>The result:</strong> The hypothesis was validated. That one-week contract turned into a full-time offer, eventually scaling to 70,000 users.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            aspectRatio="aspect-auto"
            images={[
              { src: '/images/casestudies/koinbasket/1-login.png', alt: 'Login screen' },
              { src: '/images/casestudies/koinbasket/5-login-verification.png', alt: 'Login verification screen' },
              { src: '/images/casestudies/koinbasket/7-checkout.png', alt: 'Checkout flow' },
              { src: '/images/casestudies/koinbasket/8-basket-management.png', alt: 'Basket management dashboard' },
              { src: '/images/casestudies/koinbasket/9-fantasy-league-team-creator.png', alt: 'Crypto Fantasy League team creator' },
              { src: '/images/casestudies/koinbasket/10-fantasy-league-home.png', alt: 'Crypto Fantasy League home' }
            ]}
          />

          <div className="mt-8">
            <CaseStudyImageGrid
              columns={3}
              aspectRatio="aspect-auto"
              images={[
                { src: '/images/casestudies/koinbasket/6-mobile-basket-page.png', alt: 'Mobile basket page' },
                { src: '/images/casestudies/koinbasket/10-mobile-home.jpg', alt: 'Mobile home screen' },
                { src: '/images/casestudies/koinbasket/11-mobile-onboarding.jpg', alt: 'Mobile onboarding flow' }
              ]}
            />
          </div>

          <div className="mt-8">
            <CaseStudyImage
              src="/images/casestudies/koinbasket/11-email-template.png"
              alt="KoinBasket email template"
              caption="One of the custom email templates I designed as part of owning the full brand experience."
              aspectRatio="aspect-auto"
            />
          </div>
        </CaseStudySection>

        {/* Light Theme Section */}
        <div className={`text-foreground relative pt-16 mt-16 pb-16 transition-colors duration-300 ${isPastChapter2 ? 'theme-kb-deep' : 'theme-kb-light'}`}>
          {/* Full Bleed Background Element using Box Shadow to avoid 100vw scrollbar issue */}
          <div className="absolute inset-0 bg-bg-primary -z-10 transition-colors duration-300" style={{ boxShadow: '0 0 0 100vmax hsl(var(--bg-primary))', clipPath: 'inset(0 -100vmax)' }}></div>

          <div className="space-y-12">

            {/* Chapter 2: Scaling */}
            <CaseStudySection id="chapter-2" title="Chapter 2: Scaling to Market Leadership">
              <CaseStudyParagraph lead>
                70,000 users created new problems. The MVP had done its job — now we needed to evolve from
                promising startup to mature, trusted platform. My role evolved with it.
              </CaseStudyParagraph>

              <CaseStudyCard title="The Rebrand">
                <CaseStudyParagraph>
                  I led a complete visual overhaul across web and mobile. We moved away from the dark MVP
                  aesthetic to a cleaner, lighter interface with green accents — more professional, more
                  trustworthy, more inviting to the mainstream investor we were now targeting. Not just a
                  cosmetic change — the rebrand signalled a new chapter of the company.
                </CaseStudyParagraph>
              </CaseStudyCard>

              <CaseStudyImageGrid
                columns={1}
                aspectRatio="aspect-auto"
                images={[
                  { src: '/images/casestudies/koinbasket/16-new-homescreen.png', alt: 'Rebranded home screen' },
                  { src: '/images/casestudies/koinbasket/17-new-product-live-trading.png', alt: 'Rebranded product with live trading' },
                  { src: '/images/casestudies/koinbasket/14-checkout-successful-page.png', alt: 'Successful checkout confirmation page' }
                ]}
              />

              <CaseStudyCard title="BitBuddy: Building an Ecosystem">
                <CaseStudyParagraph>
                  Our major strategic move was community. I designed BitBuddy as a two-sided platform —
                  influencers ("Bitpals") create content, users discover and invest alongside them.
                  The flagship feature: live video streams where users could watch influencers trade in
                  real time and execute their own purchases directly from the same screen. Live video,
                  real-time market data, and seamless trade execution in one dashboard.
                </CaseStudyParagraph>
                <CaseStudyParagraph>
                  This transformed KoinBasket from a tool into an ecosystem — content, community, and
                  commerce in one place.
                </CaseStudyParagraph>
              </CaseStudyCard>

              <CaseStudyImageGrid
                columns={2}
                aspectRatio="aspect-auto"
                images={[
                  {
                    src: '/images/casestudies/koinbasket/13-bitbuddy-create-a-basket-influencer.png',
                    alt: 'BitBuddy influencer creating a basket',
                  },
                  {
                    src: '/images/casestudies/koinbasket/15-mobile-new-design.png',
                    alt: 'Rebranded mobile design',
                  },
                ]}
              />

              <CaseStudyCard title="Design Leadership">
                <CaseStudyParagraph>
                  This phase also meant building a team. I mentored and managed a junior designer, built our
                  design system from scratch, and led cross-functional design decisions across product,
                  marketing, and engineering. The recommendation my junior left when I moved on is something
                  I'm genuinely proud of.
                </CaseStudyParagraph>
              </CaseStudyCard>
            </CaseStudySection>

            {/* Results */}
            <CaseStudySection title="Results">
              <CaseStudyStatsGrid
                stats={[
                  { value: '70K+', label: 'Users', sublabel: 'From zero' },
                  { value: '1→Lead', label: 'Team', sublabel: 'Solo → Design Lead' },
                  { value: 'Web+Mobile', label: 'Platforms', sublabel: 'Cross-platform' },
                ]}
              />

              <CaseStudyImage
                src="/images/casestudies/koinbasket/17-new-product-live-trading.png"
                alt="Live trading dashboard in the rebranded product"
                caption="The mature platform — live trading, real-time market data, and community in one dashboard."
                aspectRatio="aspect-auto"
              />

              <div className="mt-8">
                <CaseStudyImageGrid
                  columns={3}
                  aspectRatio="aspect-auto"
                  images={[
                    { src: '/images/casestudies/koinbasket/18-1-mobile-feature-highlight-1.png', alt: 'Mobile feature highlight 1' },
                    { src: '/images/casestudies/koinbasket/18-2-mobile-feature-highlight-2.png', alt: 'Mobile feature highlight 2' },
                    { src: '/images/casestudies/koinbasket/18-3-mobile-feature-highlight-3.png', alt: 'Mobile feature highlight 3' },
                    { src: '/images/casestudies/koinbasket/18-4-mobile-feature-highlight-4.png', alt: 'Mobile feature highlight 4' },
                    { src: '/images/casestudies/koinbasket/18-5-mobile-feature-highlight-5.png', alt: 'Mobile feature highlight 5' },
                    { src: '/images/casestudies/koinbasket/18-6-mobile-feature-highlight-6.png', alt: 'Mobile feature highlight 6' }
                  ]}
                />
              </div>
            </CaseStudySection>

            {/* What I Learned */}
            <CaseStudySection title="What I Learned">
              <CaseStudyCardGrid columns={2}>
                <CaseStudyCard title="Speed vs. Structure">
                  <CaseStudyParagraph>
                    A one-week sprint is perfect for validation. Scaling requires process, systems, and
                    delegation. Knowing which mode you're in changes every decision you make.
                  </CaseStudyParagraph>
                </CaseStudyCard>

                <CaseStudyCard title="Trust is a design decision">
                  <CaseStudyParagraph>
                    From non-custodial architecture to the rebrand, every major call anchored in one question:
                    does this make users feel safer? In fintech, trust isn't a feature. It's the foundation.
                  </CaseStudyParagraph>
                </CaseStudyCard>

                <CaseStudyCard title="Leadership is about people, not just products">
                  <CaseStudyParagraph>
                    My most lasting output from this company wasn't a screen. It was a designer who grew
                    under my mentorship and went on to do great work.
                  </CaseStudyParagraph>
                </CaseStudyCard>
              </CaseStudyCardGrid>

              <CaseStudyImageGrid
                columns={1}
                aspectRatio="aspect-auto"
                images={[
                  { src: '/images/casestudies/koinbasket/2-home-page.jpg', alt: 'KoinBasket home page' },
                  { src: '/images/casestudies/koinbasket/12-new-product-dashboard-live-trading.png', alt: 'Product dashboard with live trading' }
                ]}
              />
            </CaseStudySection>
          </div>
        </div>
      </CaseStudyLayout>
    </div>
  );
};