import { PageLayout } from '@/components/PageLayout';
import { useScrollReveal } from '@/components/ScrollReveal';
import { OptimizedImage } from '@/components/OptimizedImage';
import { ProjectOverviewCard } from '@/components/ProjectOverviewCard';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';

export const KoinBasket = () => {
  useScrollReveal();

  return (
    <PageLayout className="px-3 sm:px-4 md:px-6 lg:px-12 pt-24 pb-16 sm:pb-20 md:pb-24 lg:pt-12 lg:pb-12 overflow-x-hidden">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 case-study-section">
              
              <div className="reveal-on-scroll">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">From MVP to Market Leader: The Strategic Design Evolution of KoinBasket</h1>
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  <span className="case-study-pill">Fintech</span>
                  <span className="case-study-pill">MVP Design</span>
                  <span className="case-study-pill">UX Strategy</span>
                  <span className="case-study-pill">Rebranding</span>
                  <span className="case-study-pill">Design Leadership</span>
                </div>

                <p className="text-base sm:text-lg leading-relaxed">
                  As Founding Designer, I transformed crypto investing from intimidating to accessible—architecting KoinBasket's MVP in one intense week that scaled to 70,000+ users. I led design strategy from conception through major rebrand, built and mentored the design team, and created a live trading ecosystem with influencer integration that fundamentally changed how users discover and invest in cryptocurrency.
                </p>
              </div>

              <ProjectOverviewCard
                role={[
                  "Founding Designer (MVP phase)",
                  "Senior UX Designer & Design Lead (Scale phase)",
                  "Hired and mentored Junior UX Designer",
                  "Led complete platform rebrand and feature expansion"
                ]}
                team="Collaborated with CEO, Product Manager, development team; hired and led Junior UX Designer"
                timeline="Founding Designer role - MVP to 70k users growth"
                recognition="0 to 70,000+ users; complete platform rebrand; live trading ecosystem launched"
                tools={[
                  "Figma",
                  "Balsamiq",
                  "Design Systems",
                  "Responsive Design",
                  "iOS/Android Design",
                  "Brand Design",
                  "User Research",
                  "Design Leadership"
                ]}
              />

              {/* Phase 1 */}
              <section className="reveal-on-scroll">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-12 sm:mt-14 md:mt-16">Phase 1: Building the Foundation – The KoinBasket MVP</h2>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 mt-6 sm:mt-8">The Challenge: Demystifying Crypto for 70,000 New Investors</h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4">Cryptocurrency was a labyrinth for new investors in 2020—complex terminology, overwhelming choices, and legitimate security fears. My founding mission was radical simplification: make diversified crypto investing so intuitive that first-time investors could confidently participate within minutes, not months.</p>
                <p className="mt-4">Our breakthrough solution: curated crypto "baskets." Instead of forcing users to research hundreds of individual coins, we offered thematic portfolios like the "G.O.A.T. Basket" (top 5 coins) or "NFT Basket" that users could invest in with one click. Crucially, we adopted a non-custodial model—users traded through their own Binance or Coinbase accounts, never surrendering control of funds to us. This trust-first architecture became our competitive moat.</p>

                <h3 className="text-2xl font-bold mb-2 mt-8">My Role & Approach: Lean, Solo, and Focused</h3>
                <p>As the solo founding designer, I embraced a lean, agile strategy, beginning with an intense one-week design sprint to create the first version of the web app. Working closely with the CEO, program manager, and other key stakeholders, my role encompassed the full spectrum of design:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Rapid, Iterative Design:</strong> I quickly moved from low-fidelity wireframes using Balsamiq to high-fidelity, interactive UIs. This included a full redesign of the dashboard and all core components, establishing a modern, dark-themed UI with vibrant accents.</li>
                  <li><strong>Comprehensive Design Ownership:</strong> My responsibilities went beyond the app's UI/UX. I also designed custom icons for different baskets, created email templates, and developed marketing content.</li>
                  <li><strong>User-Centric Strategy:</strong> I mapped the critical user journey and even designed checklists to guide users through key actions like trying the demo and connecting an exchange. I also conducted regular internal usability testing sessions with the team to iteratively refine the user experience.</li>
                  <li><strong>Cross-Platform Design:</strong> From the outset, I designed a responsive web app and the foundational designs for the native iOS and Android apps. The mobile UI was optimized for clarity and quick discovery of baskets.</li>
                </ul>

                <div className="case-study-grid-image grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <ImagePlaceholder 
                    label="High-fidelity dark theme dashboard UI for the MVP"
                    aspectRatio="16/10"
                    dimensions="1200x750"
                  />
                  <ImagePlaceholder 
                    label="Mobile UI of the KoinBasket MVP showing basket discovery"
                    aspectRatio="9/16"
                    dimensions="390x844"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2 mt-8">The MVP Solution: Key Foundational Features</h3>
                <p>The MVP was engineered to be feature-rich yet intuitive, with an end-to-end experience that I designed from the ground up.</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Curated Baskets & Flexible Investing:</strong> The core of the platform was the discovery of thematic baskets like the "G.O.A.T. Basket" and "NFT Basket". I designed the interface to not only allow for one-time investments but also for users to set up a Systematic Investment Plan (SIP) for disciplined, recurring investments. Transparency was key, so users could view detailed data for each coin within a basket in a simple pop-up.</li>
                  <li><strong>Trust by Design: Secure Non-Custodial Integration:</strong> The entire experience was built on user control. I designed a clear, simple flow for users to connect their preferred exchanges like Coinbase and Binance and a dedicated page to manage these connections, giving them full authority over their accounts.</li>
                  <li><strong>Comprehensive Portfolio Tracking:</strong> To give users a complete picture of their investments, I designed detailed portfolio and history pages. These allowed them to see a breakdown of their holdings, track performance, and view a full history of their buy/sell transactions.</li>
                  <li><strong>Gamification & Engagement:</strong> To attract and educate users, we launched the Crypto Fantasy League, a feature I designed to let users compete by creating their own baskets. This was complemented by a multi-tiered rewards and referral system.</li>
                </ul>

                <div className="case-study-grid-image grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <ImagePlaceholder 
                    label="Interface for setting up a Systematic Investment Plan (SIP)"
                    aspectRatio="16/10"
                    dimensions="1200x750"
                  />
                  <ImagePlaceholder 
                    label="UI for securely connecting a Binance or Coinbase account"
                    aspectRatio="16/10"
                    dimensions="1200x750"
                  />
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

                <div className="case-study-grid-image grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <ImagePlaceholder 
                    label="The rebranded KoinBasket platform with a light theme and green accents"
                    aspectRatio="16/10"
                    dimensions="1200x750"
                  />
                  <ImagePlaceholder 
                    label="Dashboard showing live video stream next to trading interface"
                    aspectRatio="16/10"
                    dimensions="1200x750"
                  />
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