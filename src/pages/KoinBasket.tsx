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
      description="From One-Week MVP to 70,000 Users - How I built a crypto investing platform that democratized portfolio diversification as the founding designer."
    >
      <CaseStudyHero
        title="From One-Week MVP to 70,000 Users"
        subtitle="How I built a crypto investing platform that democratized portfolio diversification"
        pills={[
          'Fintech',
          'Founding Designer',
          'MVP Design',
          'Design Leadership',
          'Rebranding',
        ]}
        intro="When I joined as KoinBasket's founding designer, cryptocurrency felt like an exclusive club for tech-savvy investors. My mission: make diversified crypto investing so intuitive that first-time investors could participate confidently within minutes, not months. One week, one intense sprint, and soon—70,000 users."
        overview={{
          role: [
            'Founding Designer (MVP phase)',
            'Senior UX Designer & Design Lead (Scale phase)',
            'Hired and mentored Junior UX Designer',
            'Led complete platform rebrand',
          ],
          timeline: 'Founding Designer → Senior Design Lead',
          recognition: '0 → 70,000 users; Complete rebrand; Live trading launch',
          tools: [
            'Figma',
            'Balsamiq',
            'Design Systems',
            'iOS/Android Design',
            'Brand Design',
          ],
        }}
        heroImage="/koinbasket/placeholder-hero.png"
        heroImageAlt="KoinBasket platform interface"
      />

      {/* The Story */}
      <CaseStudySection title="The Origin Story">
        <CaseStudyParagraph lead>
          Cryptocurrency in 2020 was a labyrinth—complex terminology, overwhelming choices, 
          and legitimate security fears. New investors faced a steep learning curve just to 
          make their first purchase, let alone build a diversified portfolio.
        </CaseStudyParagraph>

        <CaseStudyParagraph>
          Our breakthrough insight was radical simplification: curated crypto "baskets." 
          Instead of forcing users to research hundreds of individual coins, we offered 
          thematic portfolios—the "G.O.A.T. Basket" (top 5 coins), "NFT Basket," "DeFi 
          Basket"—that users could invest in with one click.
        </CaseStudyParagraph>

        <CaseStudyQuote author="Core Design Principle">
          Trust is the ultimate currency in fintech. We adopted a non-custodial model—users 
          traded through their own Binance or Coinbase accounts, never surrendering control 
          of funds to us. This trust-first architecture became our competitive moat.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Phase 1: MVP */}
      <CaseStudySection title="Phase 1: The One-Week MVP">
        <CaseStudyParagraph lead>
          As the solo founding designer, I had one week to design a fully functional MVP. 
          No time for perfection—just relentless focus on what would validate our hypothesis: 
          Can we make crypto investing accessible?
        </CaseStudyParagraph>

        <CaseStudyStatsGrid
          stats={[
            { value: '1', label: 'Week', sublabel: 'Design sprint' },
            { value: '1', label: 'Designer', sublabel: 'Solo founding' },
            { value: '0→70K', label: 'Users', sublabel: 'Growth achieved' },
          ]}
        />

        <CaseStudyList items={[
          { 
            title: 'Rapid Iteration', 
            description: 'Balsamiq wireframes → high-fidelity UI in days. Dark theme with vibrant accents established the visual language.' 
          },
          { 
            title: 'Comprehensive Ownership', 
            description: 'Beyond UI/UX: custom basket icons, email templates, marketing content, onboarding checklists.' 
          },
          { 
            title: 'Cross-Platform from Day 1', 
            description: 'Responsive web app plus foundational iOS/Android designs optimized for mobile discovery.' 
          },
          { 
            title: 'User-Centric Strategy', 
            description: 'Mapped critical user journeys, designed demo experiences, conducted internal usability sessions.' 
          },
        ]} />

        <CaseStudyImageGrid
          images={[
            { src: '/koinbasket/mvp-dashboard.png', alt: 'MVP Dashboard', caption: 'Dark theme dashboard' },
            { src: '/koinbasket/mvp-mobile.png', alt: 'Mobile UI', caption: 'Mobile basket discovery' },
          ]}
          columns={2}
        />
      </CaseStudySection>

      {/* MVP Features */}
      <CaseStudySection title="MVP: Core Features I Designed">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🧺 Curated Baskets & SIP">
            <CaseStudyParagraph>
              Thematic portfolios like "G.O.A.T. Basket" and "NFT Basket" with one-click 
              investing. Designed Systematic Investment Plans for recurring investments. 
              Transparent coin breakdown in simple pop-ups.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🔐 Non-Custodial Integration">
            <CaseStudyParagraph>
              Clear, simple flows for connecting Coinbase and Binance accounts. Users 
              never surrendered fund control. Dedicated connection management page for 
              full account authority.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="📊 Portfolio Tracking">
            <CaseStudyParagraph>
              Comprehensive holdings breakdown, performance tracking, and complete 
              transaction history. Users could see their entire investment picture at a glance.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🎮 Gamification">
            <CaseStudyParagraph>
              Crypto Fantasy League: users competed by creating their own baskets. 
              Multi-tiered rewards and referral system to drive engagement and education.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Phase 2: Scale */}
      <CaseStudySection title="Phase 2: Scaling to Market Leadership">
        <CaseStudyParagraph lead>
          MVP success created new challenges. 70,000 users validated the concept, but now 
          we needed to evolve from promising startup to mature, trusted platform. My role 
          evolved too—from solo designer to design leader.
        </CaseStudyParagraph>

        <CaseStudyCard title="Strategic Imperatives">
          <CaseStudyList items={[
            { title: 'Elevate Brand Perception', description: 'Major rebranding to project professional, trustworthy image' },
            { title: 'Launch Live Trading', description: 'Real-money trading experience that was robust and engaging' },
            { title: 'Build Community', description: 'Create ecosystem around expert insights with "BitBuddy" influencer platform' },
          ]} />
        </CaseStudyCard>
      </CaseStudySection>

      {/* The Rebrand */}
      <CaseStudySection title="The Complete Rebrand">
        <CaseStudyParagraph lead>
          I led the complete visual overhaul across web and mobile. We transitioned from 
          the initial dark theme to a cleaner, lighter aesthetic with green accents—more 
          professional, more inviting, more trustworthy.
        </CaseStudyParagraph>

        <CaseStudyImageGrid
          images={[
            { src: '/koinbasket/rebrand-web.png', alt: 'Rebranded Web', caption: 'Light theme with green accents' },
            { src: '/koinbasket/rebrand-mobile.png', alt: 'Rebranded Mobile', caption: 'Refined mobile experience' },
          ]}
          columns={2}
        />
      </CaseStudySection>

      {/* BitBuddy */}
      <CaseStudySection title="BitBuddy: The Influencer Ecosystem">
        <CaseStudyParagraph lead>
          Our major strategic move: building a community. I designed BitBuddy as a 
          two-sided platform—influencers ("Bitpals") create content, users discover 
          and invest alongside them.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/koinbasket/bitbuddy-live.png"
          alt="BitBuddy Live Trading"
          caption="Live video streams integrated with real-time trading"
        />

        <CaseStudyCard title="🎬 Live Trading Experience">
          <CaseStudyParagraph>
            The flagship feature: users watch live video streams hosted by influencers 
            and purchase cryptocurrencies directly from the same page. Live video, 
            real-time market data, and seamless trade execution—all in one dashboard.
          </CaseStudyParagraph>
        </CaseStudyCard>
      </CaseStudySection>

      {/* Results */}
      <CaseStudySection title="Results & Impact">
        <CaseStudyStatsGrid
          stats={[
            { value: '70K+', label: 'Users', sublabel: 'From zero' },
            { value: '1→2', label: 'Team Size', sublabel: 'Design growth' },
            { value: '2', label: 'Platforms', sublabel: 'Web + Mobile' },
            { value: 'Live', label: 'Trading', sublabel: 'Ecosystem launched' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Platform Achievements">
            <CaseStudyList items={[
              'MVP to 70,000 users',
              'Complete platform rebrand',
              'Live trading ecosystem launch',
              'BitBuddy influencer platform',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Personal Growth">
            <CaseStudyList items={[
              'Founding designer → Senior Lead',
              'Hired and mentored junior designer',
              'Built design system from scratch',
              'Led cross-functional design decisions',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Learnings */}
      <CaseStudySection title="Key Learnings">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Speed vs. Structure">
            <CaseStudyParagraph>
              One-week design sprint was perfect for MVP validation. Scaling required 
              structured process, robust design system, and team delegation. Know when 
              each approach is appropriate.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Trust is Currency">
            <CaseStudyParagraph>
              From non-custodial model to professional rebrand—every major decision 
              anchored in building user trust. In fintech, trust isn't a feature; 
              it's the foundation.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Ecosystems > Features">
            <CaseStudyParagraph>
              BitBuddy combined content, community, and commerce. Transformed KoinBasket 
              from a tool into a dynamic ecosystem with competitive advantage.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Leadership Evolves">
            <CaseStudyParagraph>
              My journey from solo designer to hiring and managing a team reflects how 
              design leadership must adapt to company growth. Building people, not just products.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          By grounding our evolution in deep understanding of user needs and business goals, 
          we transformed KoinBasket from a simple MVP into a sophisticated, trusted, 
          community-driven platform poised for market leadership.
        </CaseStudyQuote>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};