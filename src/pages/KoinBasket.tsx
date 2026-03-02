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
  return (
    <CaseStudyLayout
      title="KoinBasket"
      description="From a One-Week MVP Contract to 70,000 Users — How I built a crypto investing platform that democratized portfolio diversification."
      externalLink="https://otagon2.github.io/Koinbasket/"
      externalLabel="KoinBasket"
    >
      <CaseStudyHero
        title="From a One-Week MVP Contract to 70,000 Users"
        subtitle="How I built a crypto investing platform that democratized portfolio diversification"
        pills={[
          'Fintech',
          'Founding Designer',
          'MVP Design',
          'Design Leadership',
          'Rebranding',
        ]}
        intro="When I joined KoinBasket as founding designer, cryptocurrency felt like an exclusive club for tech-savvy investors. My mission: make diversified crypto investing so intuitive that first-time investors could participate confidently within minutes, not months. What started as a one-week MVP contract evolved into a full-time lead role, scaling the product to 70,000 users."
        externalLink="https://otagon2.github.io/Koinbasket/"
        externalLabel="KoinBasket"
        overview={{
          role: [
            'Founding Designer → Senior UX Designer & Design Lead',
            'Built the MVP solo, grew into design leader',
            'Hired and mentored a junior designer',
            'Led a complete platform rebrand',
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
        heroImage="/images/casestudies/koinbasket/hero.png"
        heroImageAlt="KoinBasket platform interface"
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
          src="/images/casestudies/koinbasket/image-1.png"
          alt="The origin story of KoinBasket"
          caption="Radical simplification: curated crypto baskets for one-click investing"
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

        <CaseStudyImage
          src="/images/casestudies/koinbasket/image-2.png"
          alt="MVP dashboard design"
          caption="The one-week MVP that validated the entire concept"
        />
      </CaseStudySection>

      {/* Chapter 2: Scaling */}
      <CaseStudySection title="Chapter 2: Scaling to Market Leadership">
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

        <CaseStudyImage
          src="/images/casestudies/koinbasket/image-3.png"
          alt="KoinBasket rebrand"
          caption="From dark MVP aesthetic to clean, professional design language"
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

        <CaseStudyImage
          src="/images/casestudies/koinbasket/image-4.png"
          alt="BitBuddy live trading ecosystem"
          caption="Live video streams integrated with real-time trading"
        />

        <CaseStudyCard title="Design Leadership">
          <CaseStudyParagraph>
            This phase also meant building a team. I hired and mentored a junior designer, built our
            design system from scratch, and led cross-functional design decisions across product,
            marketing, and engineering. The recommendation my junior left when I was let go is something
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
          src="/images/casestudies/koinbasket/image-5.png"
          alt="KoinBasket results and growth"
          caption="MVP, full rebrand, live trading ecosystem, BitBuddy influencer platform, design system"
        />
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
          images={[
            { src: '/images/casestudies/koinbasket/image-6.png', alt: 'Design system components', caption: 'Design system' },
            { src: '/images/casestudies/koinbasket/image-7.png', alt: 'Mobile platform views', caption: 'Mobile experience' },
          ]}
          columns={2}
        />
      </CaseStudySection>
    </CaseStudyLayout>
  );
};