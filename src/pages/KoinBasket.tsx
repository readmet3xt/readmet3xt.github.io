import { PageLayout } from '@/components/PageLayout';
import { useScrollReveal } from '@/components/ScrollReveal';
import { OptimizedImage } from '@/components/OptimizedImage';

// Import case study images
import darkDashboard from '@/assets/koinbasket-dark-dashboard.jpg';
import mobileUI from '@/assets/koinbasket-mobile-ui.jpg';
import sipFlow from '@/assets/koinbasket-sip-flow.jpg';
import exchangeConnection from '@/assets/koinbasket-exchange-connection.jpg';
import lightRebrand from '@/assets/koinbasket-light-rebrand.jpg';
import liveTrading from '@/assets/koinbasket-live-trading.jpg';

export const KoinBasket = () => {
  useScrollReveal();

  return (
    <PageLayout className="px-3 sm:px-4 md:px-6 lg:px-12 pt-24 pb-16 sm:pb-20 md:pb-24 lg:pt-12 lg:pb-12 overflow-x-hidden">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 case-study-section">
              
              <div className="reveal-on-scroll">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">From MVP to Market Leader: The Strategic Design Evolution of KoinBasket</h1>
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  <span className="case-study-pill">Fintech</span>
                  <span className="case-study-pill">MVP Design</span>
                  <span className="case-study-pill">UX Strategy</span>
                  <span className="case-study-pill">Rebranding</span>
                  <span className="case-study-pill">Design Leadership</span>
                </div>

                <p className="text-base sm:text-lg leading-relaxed">
                  This case study chronicles my journey with KoinBasket, from being the Founding Designer who architected its initial MVP in a one-week design sprint to becoming a Senior UX Designer who hired and led a team to execute a strategic rebrand and launch a live trading ecosystem. It's a single story of how strategic design guided a platform from a foundational concept to a mature, market-leading product that attracted over 70,000 users and fostered trust, engagement, and community.
                </p>
              </div>

              {/* Phase 1 */}
              <section className="reveal-on-scroll">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-12 sm:mt-14 md:mt-16">Phase 1: Building the Foundation – The KoinBasket MVP</h2>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 mt-6 sm:mt-8">The Initial Challenge: Demystifying Crypto's Complexity</h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4">The cryptocurrency market was a maze for new investors—complex, intimidating, and perceived as high-risk. My initial mission as the Founding Designer at KoinBasket was to solve this. We needed to lower the barrier to entry by making diversified crypto investing exceptionally simple, demonstrably secure, and genuinely engaging.</p>
                <p className="mt-4">Our solution centered on a powerful, user-centric idea: curated crypto "baskets." Instead of forcing users to pick individual coins, we would offer diversified, thematic portfolios they could invest in instantly. Critically, we adopted a non-custodial model, allowing users to trade securely via their own trusted exchange accounts (like Binance) without ever handing over their funds to us. This became the cornerstone of our trust strategy.</p>

                <h3 className="text-2xl font-bold mb-2 mt-8">My Role & Approach: Lean, Solo, and Focused</h3>
                <p>As the solo founding designer, I embraced a lean, agile strategy, beginning with an intense one-week design sprint to create the first version of the web app. Working closely with the CEO, program manager, and other key stakeholders, my role encompassed the full spectrum of design:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Rapid, Iterative Design:</strong> I quickly moved from low-fidelity wireframes using Balsamiq to high-fidelity, interactive UIs. This included a full redesign of the dashboard and all core components, establishing a modern, dark-themed UI with vibrant accents.</li>
                  <li><strong>Comprehensive Design Ownership:</strong> My responsibilities went beyond the app's UI/UX. I also designed custom icons for different baskets, created email templates, and developed marketing content.</li>
                  <li><strong>User-Centric Strategy:</strong> I mapped the critical user journey and even designed checklists to guide users through key actions like trying the demo and connecting an exchange. I also conducted regular internal usability testing sessions with the team to iteratively refine the user experience.</li>
                  <li><strong>Cross-Platform Design:</strong> From the outset, I designed a responsive web app and the foundational designs for the native iOS and Android apps. The mobile UI was optimized for clarity and quick discovery of baskets.</li>
                </ul>

                <div className="case-study-grid-image">
                  <img src={darkDashboard} alt="High-fidelity dark theme dashboard UI for the MVP" />
                  <img src={mobileUI} alt="Mobile UI of the KoinBasket MVP showing basket discovery" />
                </div>

                <h3 className="text-2xl font-bold mb-2 mt-8">The MVP Solution: Key Foundational Features</h3>
                <p>The MVP was engineered to be feature-rich yet intuitive, with an end-to-end experience that I designed from the ground up.</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Curated Baskets & Flexible Investing:</strong> The core of the platform was the discovery of thematic baskets like the "G.O.A.T. Basket" and "NFT Basket". I designed the interface to not only allow for one-time investments but also for users to set up a Systematic Investment Plan (SIP) for disciplined, recurring investments. Transparency was key, so users could view detailed data for each coin within a basket in a simple pop-up.</li>
                  <li><strong>Trust by Design: Secure Non-Custodial Integration:</strong> The entire experience was built on user control. I designed a clear, simple flow for users to connect their preferred exchanges like Coinbase and Binance and a dedicated page to manage these connections, giving them full authority over their accounts.</li>
                  <li><strong>Comprehensive Portfolio Tracking:</strong> To give users a complete picture of their investments, I designed detailed portfolio and history pages. These allowed them to see a breakdown of their holdings, track performance, and view a full history of their buy/sell transactions.</li>
                  <li><strong>Gamification & Engagement:</strong> To attract and educate users, we launched the Crypto Fantasy League, a feature I designed to let users compete by creating their own baskets. This was complemented by a multi-tiered rewards and referral system.</li>
                </ul>

                <div className="case-study-grid-image">
                  <img src={sipFlow} alt="Interface for setting up a Systematic Investment Plan (SIP)" />
                  <img src={exchangeConnection} alt="UI for securely connecting a Binance or Coinbase account" />
                </div>

                <h3 className="text-2xl font-bold mb-2 mt-8">MVP Outcome: Resounding Validation and Explosive Growth</h3>
                <p>The MVP was a phenomenal success. It validated our core hypothesis and, most importantly, resonated with the market, growing our user base from 0 to 70,000 members. This foundational work and demonstrated traction set the stage for KoinBasket's next major evolution.</p>
              </section>

              {/* Phase 2 */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Phase 2: Scaling for Growth – The Rebrand and Live Launch</h2>
                
                <h3 className="text-2xl font-bold mb-2 mt-8">The New Strategic Imperative: Maturing the Platform</h3>
                <p>The success of the MVP created a new set of challenges and opportunities. It was time to evolve from a promising product into a mature, market-leading platform. Our strategic goals were clear:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                   <li><strong>Elevate Brand Perception:</strong> Execute a major rebranding and UI rework to project a more professional and trustworthy image.</li>
                   <li><strong>Launch Live Trading:</strong> Meet the overwhelming user demand for a real-money trading experience that was robust, secure, and engaging.</li>
                   <li><strong>Foster a Community:</strong> Differentiate ourselves by building an ecosystem around expert insights, leading to the creation of the "BitBuddy" influencer platform.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-2 mt-8">My Evolving Role & Process: From Soloist to Leader</h3>
                <p>My role evolved to Senior UX Designer. With this promotion came the responsibility of hiring and managing our first Junior UX Designer. Our design process matured accordingly, becoming more structured and collaborative as we tackled more complex initiatives.</p>
                
                <h3 className="text-2xl font-bold mb-2 mt-8">The Evolved Solution: A Sophisticated Trading Ecosystem</h3>
                <p>We transformed KoinBasket with a suite of powerful, interconnected products built upon a fresh brand identity.</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                   <li><strong>A Fresh, Trustworthy Rebrand:</strong> I led the complete visual overhaul of the web and mobile experiences. We moved from the initial dark theme to a cleaner, lighter aesthetic with green accents to feel more professional and inviting. This was reflected in the new web dashboards and a conversion-focused landing page.</li>
                   <li><strong>The "BitBuddy" Influencer Ecosystem:</strong> This was our major strategic move to build a community. I designed this new product to be a two-sided platform for Influencers ("Bitpals") to create content and for users to discover and invest alongside them.</li>
                   <li><strong>The Immersive Live Trading Experience:</strong> Building on the BitBuddy concept, this flagship product was a game-changer. I designed a dashboard where users could watch live video streams hosted by influencers and purchase cryptocurrencies directly from the same page, integrating live video, real-time market data, and seamless trade execution.</li>
                   <li><strong>A Refined Mobile Experience:</strong> The native mobile app was completely reimagined with the new brand identity. We enhanced its core functionality, providing users with powerful tools like simple screeners to filter coins and baskets, a clear view of how to diversify their portfolio, and a transparent, assured rewards system.</li>
                </ul>

                <div className="case-study-grid-image">
                  <img src={lightRebrand} alt="The rebranded KoinBasket platform with a light theme and green accents" />
                  <img src={liveTrading} alt="Dashboard showing live video stream next to trading interface" />
                </div>
              </section>

              {/* Conclusion */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Conclusion: A Unified Design Journey and Key Learnings</h2>
                <p>My journey at KoinBasket was a microcosm of a startup's life cycle—from validating a core idea to scaling it into a market-leading product that onboarded 70,000 users. This two-phase evolution provided invaluable strategic learnings.</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                    <li><strong>Speed in the Beginning, Structure for Scale:</strong> An initial one-week design sprint was perfect for the MVP, but scaling required a more structured process, a robust design system, and team delegation.</li>
                    <li><strong>Trust is the Ultimate Currency in FinTech:</strong> From the MVP's non-custodial model to the live platform's professional rebrand and transparent UI, every major decision was anchored in building and maintaining user trust.</li>
                    <li><strong>Build Ecosystems, Not Just Features:</strong> The "BitBuddy" platform, which combined content, community, and commerce, transformed KoinBasket from a simple tool into a dynamic ecosystem with a powerful competitive advantage.</li>
                    <li><strong>Design Leadership is about Growth:</strong> My personal evolution from a solo designer to a senior designer hiring and managing a team reflects how design leadership must adapt to a company's growing needs.</li>
                </ul>
                <p className="mt-4">Ultimately, by grounding our evolution in a deep understanding of user needs and business goals, we successfully transformed KoinBasket from a simple MVP into a sophisticated, trusted, and community-driven platform poised for market leadership.</p>
              </section>

              <div className="text-center mt-12">
                <a 
                  href="/" 
                  className="inline-block px-8 py-3 rounded-lg border border-border bg-card text-foreground hover:border-accent-primary hover:shadow-lg transition-all duration-300"
                >
                  Back to Work
                </a>
              </div>
            </div>
    </PageLayout>
  );
};