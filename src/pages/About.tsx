import { useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { TimelineItem } from '@/components/TimelineItem';
import { CopyToast } from '@/components/CopyToast';
import { useScrollReveal } from '@/components/ScrollReveal';
import { CertificatesCarousel } from '@/components/CertificatesCarousel';
import amaanHero from '/lovable-uploads/22366376-40f2-492f-989a-067de0fdb01f.png';

const TestimonialsCarousel = lazy(() => import('@/components/TestimonialsCarousel').then(m => ({ default: m.TestimonialsCarousel })));

export const About = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate();

  useScrollReveal();

  const navigateToProject = (projectPath: string) => {
    navigate(projectPath);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mdamkhan.work@gmail.com');
      setToastVisible(true);
    } catch {
      // Silently ignore clipboard failures (e.g., insecure context)
    }
  };

  return (
    <>
      <PageLayout>
        {/* Overview Section */}
        <section id="overview" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3">
              <h2 className="heading-2 mb-8">About Me</h2>

              {/* Introduction */}
              <div className="mb-8">
                <h3 className="font-ibm-plex-mono text-xl md:text-2xl font-semibold text-text-primary mb-4">Product Designer & Engineer</h3>
                <p className="text-lg md:text-xl mb-4 leading-relaxed">
                  Based in <span className="font-medium">Hyderabad</span>, open to Bangalore / Mumbai / Remote. M.A. Service Design from the <span className="font-medium">Royal College of Art (RCA), London</span> — ranked #1 art & design school globally.
                </p>
                <p className="text-base md:text-lg text-text-secondary leading-[1.8]">
                  I design and build products end-to-end — from user research and service blueprinting to React architecture and AI integration. Most recently solo-shipped Otagon, a production AI SaaS, in 6 months across 25+ features and a 150K+ game library.
                </p>
              </div>

              {/* Philosophy & Recognition */}
              <div className="mb-8">
                <h3 className="font-ibm-plex-mono text-xl md:text-2xl font-semibold text-text-primary mb-4">Design Philosophy & Recognition</h3>
                <p className="text-base md:text-lg text-text-secondary mb-4 leading-[1.8]">
                  I'm passionate about building products that encourage people to lead more creative, curious, and thoughtful lives.
                </p>
                <div className="bg-accent-primary/5 border border-accent-primary/20 rounded-lg p-4 mb-4">
                  <p className="text-base md:text-lg text-text-secondary leading-[1.8]">
                    <span className="text-accent-primary font-semibold">🏆 Core77 Design Awards 2021</span> - Notable Honor in Speculative Design category for my IVI (Invisible Value Income) project—a forward-thinking exploration of how we might better value and support women's work-life balance in the future.
                  </p>
                </div>
              </div>

              {/* Experience Highlight */}
              <div className="mb-8">
                <h3 className="font-ibm-plex-mono text-xl md:text-2xl font-semibold text-text-primary mb-4">Experience Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base md:text-lg text-text-secondary leading-[1.8]">
                      Solo-shipped <span className="font-semibold text-text-primary">Otagon</span> — production AI PWA — in 6 months: 25+ features, 3 subscription tiers, 95%+ detection accuracy, 70–80% API cost reduction
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base md:text-lg text-text-secondary leading-[1.8]">
                      Founding designer at KoinBasket — scaled from MVP to <span className="font-semibold text-text-primary">70,000+ users</span>, led full rebrand, drove 42% engagement increase
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base md:text-lg text-text-secondary leading-[1.8]">
                      Academic partnerships with <span className="font-semibold text-text-primary">VISA Innovation Centre, BCG, and Airbnb × WWT</span> — all three outcomes adopted or implemented
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonials Section */}
              <div className="mb-12 reveal-on-scroll">
                <Suspense fallback={
                  <div className="min-h-[200px] flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                }>
                  <TestimonialsCarousel showTitle={false} />
                </Suspense>
              </div>

              {/* Desktop Contact Buttons */}
              <div className="hidden md:flex flex-wrap gap-4">
                <button
                  onClick={copyEmail}
                  className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Email
                </button>
                <a
                  href="https://www.linkedin.com/in/readmetxt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  LinkedIn
                </a>
                <a
                  href="https://drive.google.com/file/d/1YtQLJCELLWw8P2Djfzf0A0Xtt5VfrCqk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <img
                src={amaanHero}
                alt="Amaan Khan - Product Designer"
                className="w-full h-auto rounded-lg object-cover max-w-sm mx-auto md:mx-0"
              />
              
              {/* Mobile Contact Buttons */}
              <div className="flex md:hidden flex-wrap gap-4 mt-8">
                <button
                  onClick={copyEmail}
                  className="flex-1 min-w-[120px] border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Email
                </button>
                <a
                  href="https://www.linkedin.com/in/readmetxt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  LinkedIn
                </a>
                <a
                  href="https://drive.google.com/file/d/1YtQLJCELLWw8P2Djfzf0A0Xtt5VfrCqk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-8">Professional Experience</h2>
          <div className="timeline-container relative">
            <TimelineItem
              title="Founder & Product Designer"
              company="Otagon · Hyderabad, India"
              period="Aug 2025 - Present"
              actionLabel="View Case Study →"
              onAction={() => navigateToProject('/otagon')}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Building Otagon, an AI-powered gaming companion that provides real-time screenshot analysis and context-aware gaming assistance.</li>
                <li>Architected the full-stack solution using React 18, TypeScript, Supabase, and Google Gemini, with a structured OTAGON tag system for reliable AI output.</li>
                <li>Designed and developed comprehensive design system with 40+ reusable components and PWA capabilities.</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              title="User Experience Consultant (Contract)"
              company="Law.X · 1-Month Contract"
              period="Mar 2025 - Apr 2025"
              actionLabel="View Case Study →"
              onAction={() => navigateToProject('/lawx')}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Independently drove the UX design process, from initial concepts to interactive prototypes, for a generative AI tool</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              title="Senior UX Designer"
              company="KoinBasket | Remote, India"
              period="June 2024 - Mar 2025"
              actionLabel="View Case Study →"
              onAction={() => navigateToProject('/koinbasket')}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Led the strategic rebrand and UI rework for web and mobile, transitioning to a cleaner, more professional aesthetic to enhance user trust.</li>
                <li>Hired and managed the company's first Junior UX Designer, scaling the design process for more complex initiatives.</li>
                <li>Designed the "BitBuddy" influencer ecosystem, a two-sided platform for experts to curate content and users to follow their insights.</li>
                <li>Architected the immersive Live Trading Experience, a flagship dashboard integrating live video streams with real-time market data and trade execution.</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              title="Founding Designer"
              company="KoinBasket | Remote, India"
              period="October 2022 - June 2023"
              actionLabel="View Case Study →"
              onAction={() => navigateToProject('/koinbasket')}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>As the solo designer, led the strategy and design of the MVP in a one-week sprint, growing the user base from 0 to 70,000.</li>
                <li>Owned the end-to-end design process, from wireframes to high-fidelity responsive UI for web and mobile apps.</li>
                <li>Established the core user-centric value proposition: simplified crypto investing through curated "baskets" and a secure, non-custodial model.</li>
                <li>Designed key engagement features, including a Crypto Fantasy League and a multi-tiered rewards system, to drive user adoption and education.</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              title="Design Intern"
              company="Softwire | London, UK"
              period="July 2022 - August 2022"
              actionLabel="View Case Study →"
              onAction={() => navigateToProject('/softwire')}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Conducted foundational user research and usability testing for an LNER App Clip, uncovering key insights that directly informed the final UI design.</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              title="Design Research Intern"
              company="Think Design | Remote, India"
              period="April 2020 - May 2020"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Conducted in-depth design research utilizing various qualitative methods to understand the shift in communication norms during the COVID-19 pandemic.</li>
                <li>Analyzed research findings to inform strategic insights on the "new normal" of user interaction, providing valuable data for future design strategies.</li>
              </ul>
            </TimelineItem>
          </div>
        </section>

        {/* Academic Experience */}
        <section id="academic-experience" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-8">Academic Experience</h2>
          <div className="timeline-container relative">
            <TimelineItem
              title="Pebble (VISA Innovation Centre Project)"
              company="RCA | London, U.K"
              period="January 2021 – June 2021"
              actionLabel="View Case Study →"
              onAction={() => navigateToProject('/pebble')}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Led a service design project focused on enhancing employee well-being and productivity through innovative digital solutions within the VISA Innovation Centre.</li>
                <li>Employed user research, workshops, and iterative design processes to develop a solution that addressed key employee challenges.</li>
                <li>Developed a well-received digital service concept focused on improving focus, communication, and overall support within the workplace.</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              title="Invisible Value Income Program (Fuzzy Design x BCG x RSM Collaboration)"
              company="RCA | London, U.K"
              period="October 2020 – December 2020"
              actionLabel="View Case Study →"
              onAction={() => navigateToProject('/iviprogram')}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Co-created a program aimed at addressing work-life balance disparities for women, utilizing design thinking methodologies.</li>
                <li>Designed speculative service solutions that challenged existing societal norms and proposed innovative approaches to work-life balance.</li>
                <li>Recognized with a Core 77 Design Award 2021 Student Notable for the innovative and impactful nature of the project.</li>
                <li>Project research and findings were utilized by BCG for further analysis and implementation strategies.</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              title="Stampede"
              company="RCA | London, U.K"
              period="January 2019 – March 2019"
              actionLabel="View Case Study →"
              onAction={() => navigateToProject('/stampede')}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Developed the 'Stampede' workshop methodology, aimed at creating impactful conservation partnerships using core design principles.</li>
                <li>Created inclusive design solutions for an Airbnb-WWT collaboration, driving tangible environmental impact through strategic partnerships.</li>
              </ul>
            </TimelineItem>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-8">Education</h2>
          <div className="timeline-container relative">
            <TimelineItem title="M.A in Service Design" company="Royal College of Art | London, U.K" />
            <TimelineItem title="Brand Management" company="London Business School | London, U.K" />
            <TimelineItem title="B.E in Mechanical Engineering" company="Osmania University | Hyderabad, India" />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-8">Skills</h2>
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="heading-4 mb-4">Design</h3>
              <ul className="space-y-2 body-base">
                <li>Service Design</li>
                <li>UI/UX Design</li>
                <li>User Research</li>
                <li>Interaction Design</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
                <li>Info Architecture</li>
                <li>Usability Testing</li>
                <li>Journey Mapping</li>
              </ul>
            </div>
            <div>
              <h3 className="heading-4 mb-4">Engineering</h3>
              <ul className="space-y-2 body-base">
                <li>React 18 / 19</li>
                <li>TypeScript</li>
                <li>Supabase</li>
                <li>AI Integration</li>
                <li>Gemini / OpenAI APIs</li>
                <li>PWA Development</li>
                <li>Full-Stack Dev</li>
                <li>Performance Optimisation</li>
                <li>Database Design</li>
              </ul>
            </div>
            <div>
              <h3 className="heading-4 mb-4">Tools</h3>
              <ul className="space-y-2 body-base">
                <li>Figma</li>
                <li>Framer</li>
                <li>Webflow</li>
                <li>Pencil.dev</li>
                <li>Miro</li>
                <li>VS Code</li>
                <li>Cursor</li>
                <li>Claude Code CLI</li>
                <li>Vercel</li>
              </ul>
            </div>
            <div>
              <h3 className="heading-4 mb-4">Leadership</h3>
              <ul className="space-y-2 body-base">
                <li>Facilitation</li>
                <li>Stakeholder Management</li>
                <li>Team Leadership</li>
                <li>Project Management</li>
                <li>Hiring & Mentoring</li>
                <li>Workshop Design</li>
                <li>Presentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certificates & Awards */}
        <section id="certificates" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <CertificatesCarousel />
        </section>

        {/* Interests */}
        <section id="interests" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-8">Interests</h2>
          <div className="flex flex-wrap gap-4">
            {['Football', 'Travelling', 'Stargazing', 'Indie Music', 'Casual Gaming', 'Photography'].map((interest) => (
              <span key={interest} className="bg-accent-primary/10 text-accent-primary px-4 py-2 rounded-lg font-medium">
                {interest}
              </span>
            ))}
          </div>
        </section>
      </PageLayout>

      {/* Copy Toast */}
      <CopyToast
        message="Email Copied!"
        isVisible={toastVisible}
        onHide={() => setToastVisible(false)}
      />
    </>
  );
};
