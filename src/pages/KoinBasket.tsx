import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyParagraph,
  CaseStudyInsight,
  CaseStudyList,
  CaseStudyImage,
  CaseStudyImageGrid,
  CaseStudyCard,
  CaseStudyCardGrid,
  CaseStudyStatsGrid,
} from '@/components/case-study';

export const KoinBasket = () => {
  return (
    <>
      <CaseStudyLayout
        title="KoinBasket"
        externalLink="https://otagon2.github.io/Koinbasket/"
        externalLabel="See the KoinBasket landing page"
      >
        <CaseStudyHero
          eyebrow="Founding and senior designer, 2022–2025"
          title="KoinBasket: making crypto investing simple enough to trust"
          subtitle="Founding designer from a one-week MVP, then senior designer for the redesign, the rebrand and a social trading layer"
          intro="When I joined KoinBasket as founding designer in 2022, crypto investing felt like a club for experts. The brief was to make diversified investing simple enough that a first-timer could start with confidence in minutes. A one-week MVP contract became a full-time role, and the platform grew past 70,000 users. I came back in 2024, part-time, as senior UX designer."
          overview={{
            role: [
              'Founding designer, then senior UX designer (part-time)',
              'Designed the MVP on my own, end to end',
              'Managed and mentored the company’s first junior designer',
              'Led the rebrand and later product work, including BitBuddy',
            ],
            timeline: 'Founding designer Oct 2022 to Jun 2023; senior UX designer Jun 2024 to Mar 2025',
            recognition: 'Platform grew past 70,000 users; full rebrand; live trading layer',
            tools: ['Figma', 'Balsamiq', 'iOS and Android design', 'Design systems', 'Brand design'],
          }}
          heroImage="/images/casestudies/koinbasket/2-home-page.webp"
          heroImageAlt="KoinBasket home page"
        />

        <CaseStudySection title="Context">
          <CaseStudyParagraph lead>
            In 2022, crypto was confusing: unfamiliar terms, too many choices and real worries about security.
            New investors had a lot to learn before their first purchase, let alone a diversified portfolio.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            Our answer was curated crypto "baskets". Instead of researching hundreds of coins, people could
            invest in a themed portfolio with one click: the G.O.A.T. Basket (the top 5 coins), an NFT Basket or a
            DeFi Basket.
          </CaseStudyParagraph>
        </CaseStudySection>

        <CaseStudySection title="Insight">
          <CaseStudyInsight>
            In fintech, the product is trust. People needed to stay in control of their money.
          </CaseStudyInsight>

          <CaseStudyParagraph>
            So KoinBasket was non-custodial: people traded through their own Binance or Coinbase accounts and
            never handed their funds to us. That decision shaped the rest of the design.
          </CaseStudyParagraph>

          <CaseStudyImage
            src="/images/casestudies/koinbasket/12-new-product-dashboard-live-trading.webp"
            alt="KoinBasket dashboard with live trading"
            caption="The dashboard: live trading, market data and news in one view."
          />
        </CaseStudySection>

        <CaseStudySection title="What I made, part one: the one-week MVP">
          <CaseStudyParagraph lead>
            As the only designer, I had one week to design a working MVP. The question was simple: can we make
            crypto investing accessible?
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            I went from Balsamiq wireframes to high-fidelity UI in days, with a dark theme and bright accents.
            I also did the basket icons, email templates, marketing content and onboarding, and designed for
            responsive web plus early iOS and Android from the start.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            layout="row"
            columns={2}
            images={[
              { src: '/images/casestudies/koinbasket/3-lofi-home.webp', alt: 'Low-fidelity home page sketch', caption: 'Low-fidelity home page.' },
              { src: '/images/casestudies/koinbasket/4-lofi-2.webp', alt: 'Low-fidelity layout sketch', caption: 'An early layout.' },
            ]}
          />

          <CaseStudyCard title="What shipped in the one-week sprint">
            <CaseStudyList items={[
              'Curated baskets with one-click investing and a clear breakdown of the coins inside',
              'Non-custodial connection to Coinbase and Binance accounts',
              'Portfolio tracking with full transaction history',
              'A Crypto Fantasy League where people competed by building their own baskets',
            ]} />
          </CaseStudyCard>

          <CaseStudyParagraph>
            The idea held up. The one-week contract turned into a full-time role, and the platform went on to
            grow past 70,000 users.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            layout="row"
            columns={2}
            images={[
              { src: '/images/casestudies/koinbasket/1-login.webp', alt: 'Login screen', caption: 'Login' },
              { src: '/images/casestudies/koinbasket/5-login-verification.webp', alt: 'Login verification screen', caption: 'Verification' },
              { src: '/images/casestudies/koinbasket/7-checkout.webp', alt: 'Checkout flow', caption: 'Checkout' },
              { src: '/images/casestudies/koinbasket/8-basket-management.webp', alt: 'Basket management dashboard', caption: 'Managing baskets' },
              { src: '/images/casestudies/koinbasket/9-fantasy-league-team-creator.webp', alt: 'Crypto Fantasy League team creator', caption: 'Fantasy League: building a team' },
              { src: '/images/casestudies/koinbasket/10-fantasy-league-home.webp', alt: 'Crypto Fantasy League home', caption: 'Fantasy League home' },
            ]}
          />

          <CaseStudyImageGrid
            layout="row"
            columns={3}
            images={[
              { src: '/images/casestudies/koinbasket/6-mobile-basket-page.webp', alt: 'Mobile basket page', caption: 'A basket on mobile' },
              { src: '/images/casestudies/koinbasket/10-mobile-home.webp', alt: 'Mobile home screen', caption: 'Mobile home' },
              { src: '/images/casestudies/koinbasket/11-mobile-onboarding.webp', alt: 'Mobile onboarding flow', caption: 'Mobile onboarding' },
            ]}
          />

          <CaseStudyImage
            src="/images/casestudies/koinbasket/11-email-template.webp"
            alt="KoinBasket email template"
            caption="One of the email templates I designed."
          />
        </CaseStudySection>

        <CaseStudySection id="chapter-2" title="What I made, part two: growing up">
          <CaseStudyParagraph lead>
            70,000 users brought new problems. The MVP had done its job, and the product now needed to look and
            feel like a platform people could trust with their savings.
          </CaseStudyParagraph>

          <CaseStudyCard title="The rebrand">
            <CaseStudyParagraph>
              I led a visual overhaul across web and mobile. We moved from the dark MVP look to a lighter
              interface with green accents, which read as more professional and trustworthy to the mainstream
              investors we were now trying to reach.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/koinbasket/16-new-homescreen.webp', alt: 'Rebranded home screen', caption: 'The rebranded home screen.' },
              { src: '/images/casestudies/koinbasket/17-new-product-live-trading.webp', alt: 'Rebranded product with live trading', caption: 'The rebranded product with live trading.' },
              { src: '/images/casestudies/koinbasket/14-checkout-successful-page.webp', alt: 'Successful checkout confirmation', caption: 'Checkout confirmation.' },
            ]}
          />

          <CaseStudyCard title="BitBuddy">
            <CaseStudyParagraph>
              Our biggest bet was community. I designed BitBuddy as a two-sided platform: influencers
              ("Bitpals") share content and baskets, and users discover them and invest alongside them. The main
              feature was live video, where users could watch an influencer trade in real time and buy from the
              same screen, with live market data alongside.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyImageGrid
            layout="row"
            columns={2}
            images={[
              { src: '/images/casestudies/koinbasket/13-bitbuddy-create-a-basket-influencer.webp', alt: 'BitBuddy: an influencer creating a basket', caption: 'An influencer creating a basket.' },
              { src: '/images/casestudies/koinbasket/15-mobile-new-design.webp', alt: 'Rebranded mobile design', caption: 'The rebranded mobile design.' },
            ]}
          />

          <CaseStudyCard title="Building the team">
            <CaseStudyParagraph>
              This phase also meant growing design beyond one person. I managed and mentored a junior designer,
              built our design system from scratch and led design decisions across product, marketing and
              engineering. The recommendation my junior designer wrote when I left is something I'm proud of.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudySection>

        <CaseStudySection title="What changed">
          <CaseStudyStatsGrid
            stats={[
              { value: '70K+', label: 'Users', sublabel: 'Platform users, 2022–2025' },
              { value: '+42%', label: 'User engagement', sublabel: 'After the cross-platform redesign' },
              { value: '−20%', label: 'Transaction friction', sublabel: 'Simpler onboarding and payments' },
            ]}
          />

          <CaseStudyImage
            src="/images/casestudies/koinbasket/17-new-product-live-trading.webp"
            alt="Live trading dashboard in the rebranded product"
            caption="The mature product: live trading, market data and community in one dashboard."
          />

          <CaseStudyImageGrid
            columns={3}
            images={[
              { src: '/images/casestudies/koinbasket/18-1-mobile-feature-highlight-1.webp', alt: 'The rebranded mobile app', caption: 'The rebranded app' },
              { src: '/images/casestudies/koinbasket/18-3-mobile-feature-highlight-3.webp', alt: 'Rebranded mobile app, rewards', caption: 'Rewards' },
              { src: '/images/casestudies/koinbasket/18-4-mobile-feature-highlight-4.webp', alt: 'Rebranded mobile app, coin screeners', caption: 'Screeners' },
              { src: '/images/casestudies/koinbasket/18-5-mobile-feature-highlight-5.webp', alt: 'Rebranded mobile app, basket orders', caption: 'Basket orders: several coins in one click' },
              { src: '/images/casestudies/koinbasket/18-6-mobile-feature-highlight-6.webp', alt: 'Rebranded mobile app, portfolio health check', caption: 'Health check' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="What I learned">
          <CaseStudyCardGrid columns={3}>
            <CaseStudyCard title="Speed and structure are different modes">
              <CaseStudyParagraph>
                A one-week sprint is right for testing an idea. Growing a product needs process, systems and
                delegation. Knowing which mode you're in changes every decision.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Trust is a design decision">
              <CaseStudyParagraph>
                From the non-custodial model to the rebrand, the big calls all came back to one question: does
                this make people feel safer?
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="People last longer than screens">
              <CaseStudyParagraph>
                The thing I'm proudest of from KoinBasket is a designer who grew with my mentoring and went on to
                do great work.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/koinbasket/2-home-page.webp', alt: 'KoinBasket home page', caption: 'The KoinBasket home page.' },
            ]}
          />
        </CaseStudySection>
      </CaseStudyLayout>
    </>
  );
};
