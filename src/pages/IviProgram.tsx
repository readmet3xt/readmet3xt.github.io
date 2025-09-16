import { PageLayout } from '@/components/PageLayout';
import { useScrollReveal } from '@/components/ScrollReveal';

export const IviProgram = () => {
  useScrollReveal();

  return (
    <PageLayout className="p-6 lg:p-12 pt-24 lg:pt-12">
            <div className="max-w-4xl mx-auto space-y-12 case-study-section">
              
              <div className="reveal-on-scroll">
                <h1 className="text-5xl font-bold mb-4">The Hidden Workload: A Collaborative Project to Improve Women's Work-Life Balance</h1>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="case-study-pill">Speculative Design</span>
                  <span className="case-study-pill">Women's Wellbeing</span>
                  <span className="case-study-pill">Invisible Labor</span>
                  <span className="case-study-pill">Future of Work</span>
                  <span className="case-study-pill">Systemic Design</span>
                  <span className="case-study-pill">Award-Winning</span>
                </div>

                <p className="text-lg leading-relaxed">
                  Our project, "A Soul at Work," undertaken as Group 5 at the Royal College of Art, in collaboration with Fuzzy Design Studio, The Royal Society of Medicine (R.S.M.), and with co-creation involving B.C.G., aimed to deeply explore and re-imagine the complex relationship between working women and their professional and personal lives.
                </p>
              </div>

              {/* Introduction */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Introduction</h2>
                <p>The modern working woman often stands at a challenging crossroads, navigating professional ambitions, societal expectations, personal wellbeing, and the often-unseen, unpaid labor at home. Our project, "A Soul at Work," undertaken as Group 5 (Amaan Khan, Guoxing Song, Jing Qian, Kotoko Kimura, and Zhiyuan Zheng) at the Royal College of Art, in collaboration with Fuzzy Design Studio, The Royal Society of Medicine (R.S.M.), and with co-creation involving B.C.G., aimed to deeply explore and re-imagine this complex relationship. As the project lead, focusing on design strategy, I guided our team through this speculative design journey.</p>

                <p className="mt-4">This case study delves into our speculative design journey towards the "Invisible Value Income (I.V.I.) Program" — a future-facing concept for 2040 designed to support women's mental health and create healthier, happier, and more productive working lives by acknowledging and valuing their often-invisible contributions. Our brief was clear: How might we re-imagine our relationship with work for women and create new ways of working and workplace cultures that support good mental health? This exploration was honored for its forward-thinking approach, receiving a Notable Honor in the Speculative Design category at the Core77 Design Awards in 2021.</p>
              </section>

              {/* The Challenge & Context */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Challenge & Context: The Weight of Invisible Burdens</h2>
                <p>Our initial exploration focused on understanding the multifaceted pressures affecting working women's mental health. The "spark" for our project wasn't a single incident but an amalgamation of research highlighting systemic issues:</p>

                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>The Mental Health Crisis:</strong> Globally, and particularly for women, workplace stress, anxiety, and depression are significant. We learned that many women, especially those juggling multiple roles (worker, mother, partner), face immense pressure, often without adequate support or recognition.</li>
                  <li><strong>The Unpaid Work Pandemic:</strong> A critical theme was the disproportionate burden of unpaid domestic work and childcare falling on women. This "invisible work" is economically undervalued yet crucial for societal function and directly impacts women's time, energy, and career progression.</li>
                  <li><strong>Blurred Boundaries & Role Conflict:</strong> The lines between private life and work domains often lead to stress. Women frequently navigate conflicting expectations from their various roles, leading to cognitive overload and a diminished sense of control.</li>
                  <li><strong>The "Working Mom" Penalty:</strong> Our research highlighted specific pain points for working mothers, such as the "invisible sacrifice" of career development for family, the devaluation of their contributions in the workplace due to perceived divided attention, and the inequality in household responsibilities.</li>
                </ul>

                <p className="mt-4">These challenges are not just personal; they are systemic, rooted in societal norms, workplace cultures, and economic structures that often fail to recognize and support the full spectrum of women's contributions.</p>
              </section>

              {/* Our Approach */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Our Approach: Deep Empathy and Future-Focused Speculation</h2>
                <p>Our design process was rooted in deep empathy, extensive research, and a speculative approach to envision a more equitable future.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">1. Understanding the User (Discover Phase)</h3>
                <p>We conducted comprehensive research, including interviews and surveys with 79 participants (working women across diverse sectors and countries) and 4 wellbeing specialists.</p>

                <p className="mt-4">Key insights from this phase included:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li>Stress arises from both external (e.g., workload, societal pressure) and internal (e.g., self-doubt, fear of skill obsolescence) stressors.</li>
                  <li>A sense of control significantly decreases stress.</li>
                  <li>Prevention of mental health issues is more effective than cure, yet often underfunded and under-acknowledged.</li>
                  <li>Working mothers, in particular, lack time for self-reflection.</li>
                  <li>The desire for Flexibility, Independence, Inclusion, Control, Support, and Self-Progress were key themes in women's aspirations for their future work and life.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-8">2. Defining the Persona & Problem Space</h3>
                <p>To make these challenges tangible, we developed the persona of "Johanna," a 36-year-old mother to a young daughter, juggling remote work, childcare, and household responsibilities with little personal time and a blurred work-life boundary.</p>

                <p className="mt-4">Johanna's pain points — no time for herself, loss of control, constant adjustment to surroundings, and lack of deep communication — encapsulated the core issues we aimed to address. The root cause often circled back to the devaluation of her work at home and the sacrifices made for her family being invisible in traditional economic and workplace evaluations.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">3. Speculating on the Future (2040)</h3>
                <p>We then projected these needs and challenges into a 2040 scenario, considering technological advancements (AI, IoT), evolving family structures, and changing work styles. This led to the central "What if…?" question:</p>

                <blockquote className="border-l-4 border-accent-primary pl-4 italic text-lg my-6">
                  What if invisible value could be evaluated economically?
                </blockquote>

                <p>This question became the cornerstone of our proposed solution. Our design principles focused on: throwing light on invisible value, encouraging equal family participation, empowering working mothers, and fostering an inclusive perspective.</p>
              </section>

              {/* The Solution */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Solution: The Invisible Value Income (I.V.I.) Program</h2>
                <p>The "Invisible Value Income (I.V.I.) Program" is a speculative governmental public program for 2040. It aims to recognize, measure, and compensate for the "invisible value" created by individuals, particularly women, outside of their formal employment — primarily in housework and childcare.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">How the I.V.I. Program Aims to Improve Wellbeing:</h3>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Makes Invisible Value Visible:</strong> By quantifying and assigning economic worth to domestic contributions, the program seeks to shift societal perceptions and empower individuals.</li>
                  <li><strong>Enhances Sense of Control:</strong> Provides individuals with data and insights into their overall life-work landscape, enabling better planning and decision-making.</li>
                  <li><strong>Promotes Clear Self-Cognition:</strong> Encourages reflection on personal wellbeing, workload distribution, and life goals.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Key Touchpoints & The "Sensei" Platform:</h3>
                <p>The I.V.I. Program would be facilitated through several touchpoints, with a central digital platform called "Sensei":</p>
                
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Collect Invisible Value (IoT & Sensei):</strong> Work value at home (e.g., hours spent on childcare, cleaning) is collected via IoT devices and visualized on the Sensei platform, translating into a potential "invisible value income."</li>
                  <li><strong>Self-Check (Sensei, GP, I.V.I. Specialist):</strong> Users monitor their physical and mental health via Sensei, with pathways to professional support.</li>
                  <li><strong>Life & Work Plan (Sensei, Manager, HR, Family):</strong> The platform facilitates conversations and planning around work-life expectations, family contributions, and career development, using data-driven reports.</li>
                  <li><strong>Receive Invisible Value Income (I.V.I. Department):</strong> Financial compensation for the recognized invisible value.</li>
                </ul>
              </section>

              {/* Prototyping & Validation */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Prototyping & Validation with Stakeholders</h2>
                <p>We prototyped the I.V.I. Program concept and the Sensei platform, then validated it through interviews and workshops with 9 diverse stakeholders, including working mothers, working fathers, managers, and HR specialists from different countries.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Key Feedback & Insights:</h3>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Funding Responsibility</h4>
                    <p>Strong debate arose about who should fund the I.V.I. — government or companies. Many felt the government was solely responsible to avoid discrimination if companies paid.</p>
                    <blockquote className="border-l-4 border-accent-primary pl-4 italic my-2">
                      "The invisible value should be paid for by the government/institutions, and that women are discriminated against more if the company pays for it." — Miao, working mother, China
                    </blockquote>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Usefulness for Planning</h4>
                    <p>Managers saw value in the program for better workload planning and understanding employee commitment.</p>
                    <blockquote className="border-l-4 border-accent-primary pl-4 italic my-2">
                      "This will help us plan and manage our employees workload and timings to ensure lack of productivity at work." — Saanya, manager, India
                    </blockquote>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Ease of Access & Equity</h4>
                    <p>Concerns were raised that such a program must be easily accessible to all, not just the highly educated.</p>
                    <blockquote className="border-l-4 border-accent-primary pl-4 italic my-2">
                      "It would need to be very easy to access, otherwise it would only be the very educated women that get access to these money…" — Miriam, Germany
                    </blockquote>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Potential Side Effects</h4>
                    <p>Participants also highlighted potential negative consequences, such as domestic work becoming purely transactional, increased peer pressure, or privacy concerns.</p>
                    <blockquote className="border-l-4 border-accent-primary pl-4 italic my-2">
                      "Love is hard to be quantified, if family values are also quantified, the warmth of the family might be lost."
                    </blockquote>
                  </div>
                </div>

                <p className="mt-4">These insights led to design recommendations such as ensuring government funding, allowing partial data access for employers (with user consent), and emphasizing trust-based service design with minimal data tracking.</p>
              </section>

              {/* Key Learnings */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Key Learnings & Bold Insights</h2>
                <p>This speculative design project offered profound learnings:</p>

                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>The Power of Making the Invisible, Visible:</strong> Quantifying and acknowledging unpaid domestic labor has the potential to fundamentally shift societal valuations, individual self-worth, and power dynamics within families and workplaces.</li>
                  <li><strong>Speculative Design as a Catalyst for Dialogue:</strong> Envisioning a future scenario like the I.V.I. Program, even if ambitious, opens up critical conversations about current inequalities and desired societal changes.</li>
                  <li><strong>Wellbeing is Systemic:</strong> Individual mental health is deeply intertwined with broader social, cultural, and economic systems. Addressing it effectively requires systemic interventions, not just individual coping mechanisms.</li>
                  <li><strong>Technology as an Enabler, Not Just a Solution:</strong> While platforms like Sensei can facilitate awareness and planning, the true impact comes from the policy changes and cultural shifts they support.</li>
                  <li><strong>Navigating Ethical Complexities is Crucial:</strong> When designing systems that touch upon personal data, financial incentives for domestic work, and intimate family dynamics, a deep and ongoing consideration of ethical implications and potential unintended consequences is paramount.</li>
                </ul>

                <p className="mt-4">My personal key learning from this project was the transformative potential of service design to not only solve existing problems but also to provoke thought and inspire visions for a more equitable and human-centered future. The process of deeply understanding user narratives and then projecting them into a speculative future to challenge current norms was incredibly powerful.</p>
              </section>

              {/* The Future Vision & Impact */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Future Vision & Impact</h2>
                <p>The I.V.I. Program, as a concept for 2040, aims to create a society where:</p>

                <ul className="list-disc list-inside space-y-2 my-4">
                  <li>Working parents, especially mothers, have a greater sense of control and recognition.</li>
                  <li>Conversations about domestic labor and work-life balance are more open and equitable, both at home and in the workplace.</li>
                  <li>Companies can foster more inclusive and genuinely supportive environments, leading to higher talent retention and productivity.</li>
                  <li>Societally, there's a reduced strain on mental healthcare systems and a boost in the overall happiness index due to a less stressed, more empowered populace.</li>
                </ul>

                <p className="mt-4">While ambitious, the principles behind the I.V.I. Program — valuing all contributions, fostering self-awareness, and enabling better life-work integration — can inspire actions and policy considerations even today. Significantly, the foundational research and the "6 dimensions of workplace wellbeing" framework developed during this project were utilized by B.C.G. for their internal employee affiliation workshops, demonstrating the immediate relevance and applicability of our insights.</p>
              </section>

              {/* Conclusion */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Conclusion</h2>
                <p>"A Soul at Work" and the conceptual Invisible Value Income Program challenged us to look beyond current paradigms of work and value. By focusing on the lived experiences of working women, particularly mothers like our persona Johanna, and by speculating on a future where their "invisible" contributions are recognized and compensated, we aimed to design not just a service, but a catalyst for profound societal and personal wellbeing. The journey underscored the vital role of design in questioning norms, envisioning preferable futures, and striving for a world where everyone's work, in all its forms, is truly valued. The significance of this exploration was recognized with a Notable Honor in the Speculative Design category at the Core77 Design Awards in 2021.</p>
              </section>

              {/* The Team & Partners */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Team & Partners</h2>
                <p><strong>RCA Group 5:</strong> Amaan Khan, Guoxing Song, Jing Qian, Kotoko Kimura, Zhiyuan Zheng</p>
                <p><strong>Project Partners:</strong> Fuzzy Design Studio, The Royal Society of Medicine (R.S.M.)</p>
                <p><strong>Co-creation:</strong> B.C.G.</p>
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