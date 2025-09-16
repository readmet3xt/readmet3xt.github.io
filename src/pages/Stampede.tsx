import { PageLayout } from '@/components/PageLayout';
import { useScrollReveal } from '@/components/ScrollReveal';

export const Stampede = () => {
  useScrollReveal();

  return (
    <PageLayout className="p-6 lg:p-12 pt-24 lg:pt-12">
            <div className="max-w-4xl mx-auto space-y-12 case-study-section">
              
              <div className="reveal-on-scroll">
                <h1 className="text-5xl font-bold mb-4">Speeding Up Solutions: Using Strategic Partnerships and Design Thinking to Boost Conservation Efforts</h1>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="case-study-pill">Conservation</span>
                  <span className="case-study-pill">Partnerships</span>
                  <span className="case-study-pill">Design Thinking</span>
                  <span className="case-study-pill">Royal College of Art</span>
                </div>

                <p className="text-lg leading-relaxed">
                  A Royal College of Art collaborative project on how we envisioned "Stampede" to forge innovative partnerships and unlock impactful action within the conservation sector.
                </p>
              </div>

              {/* Introduction */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Introduction</h2>
                <p>The world of wildlife conservation is passionate and driven, yet often faces complex hurdles in maximizing its impact. Funding can be difficult to allocate, impactful partnerships can be serendipitous rather than strategic, and connecting the right expertise to the right cause at the right time is a persistent challenge. As part of a Royal College of Art collaborative team (Team: Amaan Khan, Anahita Pradhan, Andrew Seetoh, Constance Cheung), I embarked on the "Stampede" project to explore these very issues. My role involved conducting research, contributing to the design strategy, facilitating collaborative sessions, leading the project, and conceptualizing the proposed solution.</p>

                <p className="mt-4">This case study outlines our journey in envisioning "Stampede," a service designed to act as a catalyst for innovative action by forging strategic partnerships within the conservation industry. We aimed to develop a design-based methodology that could not only connect disparate organizations but also inspire influential advocates and unlock stagnant resources for targeted conservation causes.</p>
              </section>

              {/* The Challenge & Context */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Challenge & Context: Unlocking Latent Potential in Conservation</h2>
                <p>Our investigation into the conservation sector, which included interviews with leaders from organizations like WWF, Wildfowl Wetlands Trust (WWT), and academics from Imperial College, revealed a landscape ripe with opportunity but also fraught with systemic friction. This became the "spark" for our project.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Initial & Deeper Findings:</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Untapped Financial Resources</h4>
                    <p>A significant insight was that "a lot of money [is] lying around which isn't being spent." Large organizations often struggle with the effective allocation of funds to the most pressing causes or the most capable parties.</p>
                    <blockquote className="border-l-4 border-accent-primary pl-4 italic my-2">
                      "A lot of big organisations like the WWF or DEFRA struggle with allocating funds… The money is left unspent." — WWF, Head of Strategic Communications and Partnerships
                    </blockquote>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Collaboration is Standard, but Ad Hoc</h4>
                    <p>While partnerships are the norm and crucial for success, many "form out of luck" or "happy accidents" rather than through a structured, strategic approach.</p>
                    <blockquote className="border-l-4 border-accent-primary pl-4 italic my-2">
                      "Happy accidents lead to partnerships e.g. with HSBC." — Visitor Centre Development, Wildfowl Wetlands Trust
                    </blockquote>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">The Matchmaking Dilemma</h4>
                    <p>Finding the right people and organizations to team up with is a significant hurdle.</p>
                    <blockquote className="border-l-4 border-accent-primary pl-4 italic my-2">
                      "There are so many people out there who have similar interests, but connecting them is tough." — Wildlife Biologist, Founder of Key Conservation
                    </blockquote>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">The Fragility of Advocacy</h4>
                    <p>Corporate support often depends heavily on individual champions within those companies. If an advocate leaves, the partnership and funding can dissolve.</p>
                    <blockquote className="border-l-4 border-accent-primary pl-4 italic my-2">
                      "We had a great relationship with a corporate, but when that person left the organisation, we lost the advocate and support." — Ecosystem Researcher, Wildfowl Wetlands Trust
                    </blockquote>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Demand for "Ready-Made" Solutions</h4>
                    <p>Funding entities increasingly prefer to see well-developed proposals, creating a barrier for nascent ideas that require collaborative incubation.</p>
                    <blockquote className="border-l-4 border-accent-primary pl-4 italic my-2">
                      "The way the funding world is going is that companies or organisations with money want ready proposals to sanction releases for." — Head of Strategic Communications and Engagements, WWF
                    </blockquote>
                  </div>
                </div>

                <p className="mt-6">Our problem statement therefore became: How can Stampede spur innovative action by catalysing partnerships within the conservation industry? And in doing so, how could it link previously disconnected organizations, utilize restricted income, and create long-term advocates?</p>
              </section>

              {/* Our Approach */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Our Approach: A Design-Led Framework for Catalysing Partnerships</h2>
                <p>Inspired by the way Stampede (the client) had teamed up with the RCA for innovative solutions, we proposed that Stampede could play a similar facilitation and match-making role within the conservation sector itself. Our approach was to develop a service that could intelligently connect and facilitate meaningful collaborations between curated parties for targeted conservation causes.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">1. Conceptualizing the "Stampede" Methodology</h3>
                <p>We envisioned "Stampede" not just as a one-off event, but as a holistic process. This involved a "People, Experience, Outcome, Follow-up" framework:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>People:</strong> Connecting organizations and inspiring individuals.</li>
                  <li><strong>Experience:</strong> Curating impactful engagements like expeditions, hackathons, and workshops.</li>
                  <li><strong>Outcome:</strong> Enabling tangible results like new solutions, action plans, and proposals.</li>
                  <li><strong>Follow-up:</strong> Ensuring momentum through continued engagement.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-8">2. Creative Match-Making: The Power/Pace Matrix & Animal Archetypes</h3>
                <p>A core part of our strategy was "Creative Match-Making." We recognized that different organizations operate with varying levels of Power (influence, resources) and Pace (speed of decision-making and execution). To make these characteristics more tangible and relatable, we developed a set of animal archetypes:</p>

                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Walrus (e.g., WWF):</strong> Global charitable organization; large, careful of brand, sometimes slow due to layers.</li>
                  <li><strong>Tiger (e.g., Apple):</strong> Large tech company; fast-moving, innovative, resource-rich.</li>
                  <li><strong>Sheep (e.g., Thames Water):</strong> Large traditional corporate; often follows others, slower decision-making.</li>
                  <li><strong>Bumblebee (e.g., Giki):</strong> Small conservation startup; innovative, agile, but limited reach/cash flow.</li>
                  <li><strong>Worm (e.g., WWT):</strong> Grassroots conservation organization; local reach, cash-strapped, vital on-the-ground impact.</li>
                  <li><strong>Octopus (e.g., EY):</strong> Large multinational corporate; analytical, many arms, can move quickly on projects.</li>
                  <li><strong>Giant Tortoise (e.g., Government Depts):</strong> Slow to start but steady once moving, impactful long-term.</li>
                </ul>

                <p className="mt-4">The insight here was that Stampede should target partnerships that complement the Power and Pace of different organizations, often connecting those who wouldn't typically collaborate (e.g., a high-power, low-pace "Walrus" with a low-power, high-pace "Bumblebee").</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">3. Tailoring the Service: Addressing Different Stages of Partnership</h3>
                <p>We understood that organizations need help at various stages of the partnership journey. Stampede's service was designed to be flexible, offering support in: Purpose Finding, Match-Making, Connecting, Kicking-Off (Running a Stampede workshop), Project Execution, and Measuring Outcome.</p>
              </section>

              {/* Prototyping in Action */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Prototyping in Action: The WWT x Airbnb "Stampede" Workshop</h2>
                <p>To test and refine our methodology, we prototyped a "Stampede" kick-off workshop. WWT had expressed that Airbnb was a "dream partner." We facilitated a 3-hour session with key representatives: Holly Bland (Social Impact Experience Manager, Airbnb) and Nick Appleby (Senior Partnerships Manager, WWT).</p>

                <p className="mt-4">The workshop followed a condensed design sprint structure:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Unpacking (40 mins):</strong> Introductions, building trust, goal setting, reflecting on organizational strengths.</li>
                  <li><strong>Sketching (60 mins):</strong> Idea generation (e.g., Crazy 8's on "How might Airbnb and WWT create an authentic wetlands experience?").</li>
                  <li><strong>Solutioning (70 mins):</strong> Developing an action plan, discussing practical considerations, and identifying challenges.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Key Moments & Learnings from the Workshop</h3>
                <p>The session was highly productive and generated significant enthusiasm, highlighting the value of facilitated collaboration:</p>
                <blockquote className="border-l-4 border-accent-primary pl-4 italic my-4">
                  <p>"This was 100 times more productive than any partnership meeting I have had."</p>
                  <p>"This has been an opportunity for me to think of the different things we do and could do."</p>
                  <p>"We will be following up — I have your details."</p>
                </blockquote>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Design Recommendations from the Prototype</h3>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Acknowledge and Address Monetary Value:</strong> Don't shy away from discussing revenue, even with non-profits.</li>
                  <li><strong>Flexibility in Approach:</strong> Go in with a "hook" idea, but allow partnerships to evolve organically based on mutual strengths.</li>
                  <li><strong>The Power of Third-Party Facilitation:</strong> A neutral facilitator like Stampede helps level the playing field and fosters genuine collaboration.</li>
                  <li><strong>Invite the Right Decision-Makers:</strong> Ensure those who can make decisions are present.</li>
                  <li><strong>Adapt to Time Constraints:</strong> Develop shorter "power hour" versions of Stampede workshops.</li>
                </ul>
              </section>

              {/* The Solution */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Solution: Stampede — A Service for Strategic Conservation Impact</h2>
                <p>Based on our research and prototyping, Stampede is proposed as a service that:</p>

                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Identifies Pressing Causes & Untapped Opportunities:</strong> Through industry knowledge and networking.</li>
                  <li><strong>Conducts Creative & Strategic Match-Making:</strong> Using frameworks like the Power/Pace matrix to connect unlikely but high-potential partners (e.g., NASA x WWF for real-time "Red List" animal tracking).</li>
                  <li><strong>Designs & Facilitates Bespoke "Stampede" Experiences:</strong> Ranging from immersive expeditions for influential individuals to generate advocacy, to joint design sprints for organizations to co-create solutions.</li>
                  <li><strong>Drives Actionable Outcomes & Ensures Follow-Up:</strong> Moving beyond ideation to concrete plans, proposals, and continued momentum.</li>
                  <li><strong>Operates with Key Value Adds:</strong> A disruptive mindset, strong network, neutrality, and a small, agile team focused on rapid action.</li>
                </ul>
              </section>

              {/* Key Learnings */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Key Learnings & Insights</h2>
                <p>This project offered several profound learnings about fostering collaboration for conservation:</p>

                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>The "Chemistry" of Collaboration Can Be Designed:</strong> A structured approach can significantly increase the likelihood of successful collaborations by strategically matching complementary strengths.</li>
                  <li><strong>Unlocking "Stuck" Resources Requires a Nudge (and a Plan):</strong> A neutral catalyst can help identify siloed resources and co-create viable pathways for their use.</li>
                  <li><strong>Speed & Agility are Currencies in a Slow-Moving Sector:</strong> The contrast in operational speeds (e.g., WWT vs. Airbnb) highlights the need for processes that can accelerate decision-making.</li>
                  <li><strong>Person-to-Person Connection is Paramount:</strong> The enthusiasm and trust built between key individuals during facilitated sessions are critical drivers of success.</li>
                </ul>

                <p className="mt-4">My personal key learning from leading and contributing to the Stampede project was the immense potential that lies at the intersection of design thinking and complex systemic challenges. Applying a structured yet creative facilitation process can unlock novel solutions and foster genuine buy-in from diverse stakeholders, even in sectors as established as conservation.</p>
              </section>

              {/* The Future of Stampede */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Future of Stampede</h2>
                <p>The immediate next steps for developing Stampede would involve:</p>

                <ul className="list-disc list-inside space-y-2 my-4">
                  <li>Refining Brand Strategy & Collaterals: Creating pitch decks and toolkits.</li>
                  <li>Developing a Sustainable Business Model & Financing Plan.</li>
                  <li>Defining Organizational Structure & Roles.</li>
                  <li>Running More Prototype Workshops: To further test and iterate the Stampede collaboration process.</li>
                </ul>
              </section>

              {/* Conclusion */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Conclusion</h2>
                <p>The Stampede project demonstrated a clear need and a viable, design-led approach to accelerating conservation efforts by fostering innovative and strategic partnerships. By understanding the unique challenges and operational styles of different organizations within the sector, and by applying a facilitated, co-creative methodology, Stampede offers a pathway to unlock unspent resources, connect disparate expertise, and ultimately drive more impactful conservation outcomes. It's about moving from "happy accidents" to "designed impact."</p>
              </section>

              {/* The Team */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Team</h2>
                <p>Amaan Khan, Anahita Pradhan, Andrew Seetoh, Constance Cheung (Royal College of Art)</p>
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