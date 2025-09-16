import { PageLayout } from '@/components/PageLayout';
import { useScrollReveal } from '@/components/ScrollReveal';

export const Pebble = () => {
  useScrollReveal();

  return (
    <PageLayout className="p-6 lg:p-12 pt-24 lg:pt-12">
            <div className="max-w-4xl mx-auto space-y-12 case-study-section">
              
              <div className="reveal-on-scroll">
                <h1 className="text-5xl font-bold mb-4">Pebble: Nurturing Workplace Happiness in the Age of Remote Work</h1>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="case-study-pill">Service Design</span>
                  <span className="case-study-pill">Employee Wellbeing</span>
                  <span className="case-study-pill">Remote Work</span>
                  <span className="case-study-pill">Virtual Companion</span>
                  <span className="case-study-pill">VISA Collaboration</span>
                  <span className="case-study-pill">Human-Centered Design</span>
                </div>

                <p className="text-lg leading-relaxed">
                  A Royal College of Art & VISA collaboration on how we designed a virtual companion to combat stress and foster connection for a thriving workforce.
                </p>
              </div>

              {/* Introduction */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Introduction</h2>
                <p>The way we work has fundamentally changed. While remote and hybrid models offer unprecedented flexibility, they've also cast a long shadow, revealing a workforce increasingly grappling with stress, isolation, and the challenging blur between professional and personal lives. As a project lead and designer on a collaborative initiative between the Royal College of Art and VISA, I, Amaan Khan, along with my colleagues Jing Qian and Zhiyuan Zheng, saw an urgent need. How could we move beyond reactive measures and proactively design for genuine happiness and connection in this new, often distant, working world?</p>
                
                <p className="mt-4">This case study details the journey of Pebble, a virtual companion designed to do just that. We'll explore how we leveraged a human-centered design process — from in-depth research and collaborative workshops to iterative prototyping and user testing — to create a service aimed at boosting employee wellbeing and productivity. Our central mission: to cultivate a thriving, happy, and genuinely connected workforce, regardless of physical location.</p>
              </section>

              {/* The Challenge & Context */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Challenge & Context</h2>
                <p>Our core challenge was born from a stark observation: the silent but pervasive decline in employee wellbeing. The "spark" for this project was the overwhelming data emerging, particularly during and after the pandemic, that painted a clear picture of a workforce under strain.</p>
                
                <p className="mt-4">Our initial research, including surveys of over 1200 individuals and specific insights from VISA Innovation Centre employees, highlighted several critical issues:</p>
                
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>The Emotional Toll:</strong> Employees reported significant feelings of Stress, Isolation, Distraction, and being Overwhelmed. The lack of casual, in-person interactions and the intensity of remote work were taking a heavy toll.</li>
                  <li><strong>Erosion of Boundaries:</strong> The lines between work and personal life had become dangerously blurred, leading to longer working hours and a constant sense of being "on."</li>
                  <li><strong>Plummeting Happiness:</strong> The statistics were undeniable. 43% of employees rated their mental health between 'very bad' and 'fair,' and the number of those feeling 'completely happy' at work had nosedived from 26% to just 13% since February 2020.</li>
                </ul>
                
                <p className="mt-4">But this wasn't just about feelings; it had a tangible business impact. We found compelling evidence that:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li>Happier employees are up to 12% more productive.</li>
                  <li>They demonstrate 3 times more creativity.</li>
                  <li>Crucially, engaged and happy employees can enhance business profitability by up to 147%.</li>
                </ul>
                
                <p className="mt-4">This context defined our brief: How might we leverage design to proactively foster happiness and wellbeing in the workplace, transforming it from a reactive HR concern into a core, integrated part of the employee experience? We needed a solution that understood diverse employee needs and could adapt to the evolving landscape of work.</p>
              </section>

              {/* Our Approach */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Our Approach: Research-Driven Iteration</h2>
                <p>As the project lead, I guided our team through an intensive, research-driven design process. My responsibilities included facilitating and designing workshops, conducting research interviews, shaping the design strategy, and leading the UI design and user prototyping efforts. We believed that to create a truly impactful solution, we needed to deeply understand the nuances of employee experiences and co-create with our users and stakeholders every step of the way.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">1. Understanding & Ideation</h3>
                <p>Our journey began with a broad exploration of "happiness" itself. We conducted initial surveys (70 responses) and 24 workshops with the public and VISA Innovation Centre (VIC) employees. These were crucial for:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li>Mapping Emotional Journeys: We used tools like "How was your week?" journey maps to understand the emotional ebbs and flows of employees.</li>
                  <li>Uncovering Core Needs: We identified a need for informal catch-ups, personalized stress regulation, and tailored wellbeing programs.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-8">2. Defining Personas</h3>
                <p>Our research led to data-backed personas. A key decision from a validation workshop was to focus on the <strong>"Explorer"</strong> persona—someone aware of their mental status but unsure how to improve it. We found other user groups often passed through an "Explorer" phase, making this a foundational experience to design for.</p>
                <p className="mt-4">Our primary persona, "James," a 28-year-old remote product designer, embodied the Explorer's challenges: frustration, lack of focus, and social isolation.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">3. Co-creating Pebble</h3>
                <p>We ran co-creation workshops with VISA, asking: <em>How might we help the explorer build a foundation of high wellbeing?</em> This led to the core concept of different "Pebble types"—virtual companions with distinct personalities (Explorer, Mentor, Feeler, Doer) to match user needs.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">4. Prototyping & Testing</h3>
                <p>We translated concepts into interactive prototypes, focusing on an empathetic and engaging UI. We then conducted user testing with 5 participants to gather initial feedback.</p>
              </section>

              {/* The Solution */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Solution: Pebble — A Tailored Happiness Assistant</h2>
                <p>Pebble is a virtual assistant promoting happiness and productivity in three key ways:</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Personalized Matchmaking & Onboarding</h3>
                <p>Users find their unique Pebble companion via a quiz-based matchmaking process. The Pebble then learns and adapts through daily check-ins, building emotional engagement.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Fostering Deep Work & Productivity</h3>
                <p>Pebble helps users enter a "flow" state with 1-minute cognitive exercises and distraction-reducing tools, linking focused work to lasting happiness.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Enhancing Social Connection</h3>
                <p>The "Virtual Café" combats isolation by allowing employees to join or create informal coffee chat rooms, recreating spontaneous office interactions.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Building Healthy Boundaries</h3>
                <p>Pebble acts as a "Happiness Assistant," gently prompting users to set work-life boundaries with reminders to take breaks or log off, and to reflect on their day.</p>
              </section>

              {/* Iteration & Key Insights */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Iteration & Key Insights from Testing</h2>
                <p>Initial prototype testing with 5 participants was invaluable:</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Users Loved Connection</h3>
                <p>Features for "focus" and "coffee catch-ups" resonated strongly.</p>
                <p className="italic">Insight: Employees crave belonging. Digital tools must actively facilitate it.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Users Wished for Deeper Personalization</h3>
                <p>Feedback included desires for daily emotion checks and data tracking.</p>
                <p className="italic">Insight: Users seek continuous, adaptive support, not a one-off tool.</p>

                <h3 className="text-2xl font-semibold mb-3 mt-8">Users Wondered About Cohesion</h3>
                <p>Concerns were raised about integration with existing software to avoid platform fatigue.</p>
                <p className="italic">Insight: A wellbeing tool must integrate seamlessly into existing workflows.</p>

                <p className="mt-4">These insights heavily influenced our future vision, emphasizing robust integration capabilities.</p>
              </section>

              {/* The Bigger Picture */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Bigger Picture: Ecosystem and Future Vision</h2>
                <p>Pebble is designed to benefit a wide range of stakeholders. Our future vision includes:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Seamless Integrations:</strong> Integrating with platforms like Microsoft Teams and Slack.</li>
                  <li><strong>Enhanced Features:</strong> Daily mood tracking, team-generated personalization, and social games.</li>
                  <li><strong>Strategic Growth:</strong> A B2B marketing approach, followed by onboarding through internal platforms and user retention via new features and AI.</li>
                </ul>
              </section>

              {/* Results and Learnings */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Results and Learnings</h2>
                <p>My key personal learning was realizing the profound impact of proactively addressing diverse wellbeing needs in modern work environments.</p>
                
                <p className="mt-4">Other bold insights our team gained include:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Wellbeing is Not One-Size-Fits-All:</strong> Solutions must be adaptable and personalizable.</li>
                  <li><strong>Co-creation is Non-Negotiable:</strong> Involving users and stakeholders was critical for relevance.</li>
                  <li><strong>Small Nudges Create Big Shifts:</strong> Gentle, timed prompts can significantly influence work culture.</li>
                  <li><strong>The ROI of Happiness is Real:</strong> Investing in wellbeing is a strategic business imperative.</li>
                </ul>
              </section>

              {/* Conclusion */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Conclusion</h2>
                <p>Pebble represents more than a concept; it's a testament to design's power to address complex human challenges. By starting with empathy, grounding our process in research, and focusing on nuanced employee needs, we developed a vision for a service that could genuinely bring more happiness and connection to the workday. As work evolves, solutions like Pebble will be vital for building resilient, productive, and thriving teams.</p>
              </section>

              {/* Acknowledgements */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Acknowledgements</h2>
                <p>This project would not have been possible without the guidance and support of our tutor, David; our project partners Elin and Annie; LBS student Yurika; wellbeing specialists Hugo Alistair and Keyun Ruan; Mental Health Studio; our Fellows; and the entire Visa Innovation Team. Their insights and collaboration were invaluable.</p>
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