import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { TimelineItem } from '@/components/TimelineItem';
import { CertificatesCarousel } from '@/components/CertificatesCarousel';
import { Recommendations } from '@/components/Recommendations';
import { imageSize } from '@/lib/imageSize';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl sm:text-4xl mb-8">{children}</h2>
);

export const About = () => (
  <PageLayout>
    <SEO title="About" />

    {/* Overview */}
    <section id="overview" className="pb-16 scroll-mt-24">
      <div className="grid gap-10 md:grid-cols-5 items-start">
        <div className="md:col-span-3">
          <h1 className="text-5xl mb-8">About</h1>

          <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed">
            <p className="text-text-primary">
              I'm a service and product designer based in Hyderabad, open to roles across India. I studied M.A. Service
              Design at the Royal College of Art in London, ranked first in the world for art and design (QS World
              University Rankings).
            </p>
            <p className="text-text-secondary">
              I design end-to-end services and products, from user research and service blueprints to working
              software. Since 2025 I also build what I design in React and TypeScript; most recently Otagon, an AI
              gaming companion with 30+ features.
            </p>
            <p className="text-text-secondary">
              I'm passionate about building products that encourage people to lead more creative, curious and
              thoughtful lives.
            </p>
            <p className="text-text-secondary">
              <span className="text-text-primary font-medium">Core77 Design Awards 2021, Student Notable</span> in
              Speculative Design for the I.V.I. (Invisible Value Income) Program, an exploration of how we might better
              value and support women's work in the future.
            </p>
          </div>

          <h2 className="text-2xl mt-12 mb-4">Highlights</h2>
          <ul className="max-w-[62ch] list-disc pl-5 space-y-3 text-text-secondary marker:text-text-tertiary">
            <li>
              Designed and built <span className="text-text-primary font-medium">Otagon</span>, an AI companion on web
              and PWA: 30+ features and a ~40% cut in AI API costs.
            </li>
            <li>
              Founding designer at KoinBasket, from a one-week MVP to a platform that grew past{' '}
              <span className="text-text-primary font-medium">70,000 users</span>. Later led the rebrand and mentored the
              company's first junior designer.
            </li>
            <li>
              Research partnerships with{' '}
              <span className="text-text-primary font-medium">VISA Innovation Centre, BCG and WWT × Airbnb</span> during
              my time at the RCA.
            </li>
          </ul>

          <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            <a href="mailto:mdamkhan.work@gmail.com" className="link-ink">mdamkhan.work@gmail.com</a>
            <a href="https://www.linkedin.com/in/readmetxt/" target="_blank" rel="noopener noreferrer" className="link-ink">LinkedIn</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-ink">Résumé</a>
          </p>
        </div>

        <figure className="md:col-span-2">
          <img
            src="/images/amaan-portrait.webp"
            {...imageSize('/images/amaan-portrait.webp')}
            alt="Amaan Khan"
            className="w-full max-w-sm h-auto rounded-sm object-cover"
            decoding="async"
          />
        </figure>
      </div>
    </section>

    {/* Experience */}
    <section id="experience" className="border-t border-border py-16 scroll-mt-24">
      <SectionTitle>Experience</SectionTitle>
      <div className="timeline-container">
        <TimelineItem title="Product Builder" company="Esberi, AI startup · Remote" period="Jul 2026 – Present">
          <p>I own design through to front-end code at an early-stage AI startup. Product details are under NDA.</p>
        </TimelineItem>

        <TimelineItem title="Founder" company="Otalabs · Hyderabad, India" period="Aug 2025 – Present" href="/otagon">
          <ul className="list-disc pl-5 space-y-2">
            <li>Designing and building Otagon, an AI gaming companion that reads a screenshot and gives context-aware, spoiler-free help.</li>
            <li>Built with React 18, TypeScript, Supabase and Google Gemini, using a structured output format so the AI's answers are reliable to work with.</li>
            <li>Designed and built a design system with 40+ reusable components, and an installable PWA.</li>
          </ul>
        </TimelineItem>

        <TimelineItem title="Product Designer (Contract)" company="Pixel+Form · Law.X" period="Mar 2025 – Apr 2025" href="/lawx">
          <ul className="list-disc pl-5 space-y-2">
            <li>Independently drove the UX design process, from first concepts to interactive prototypes, for a generative AI legal tool.</li>
          </ul>
        </TimelineItem>

        <TimelineItem title="Senior UX Designer (Part-time)" company="KoinBasket · Remote, India" period="Jun 2024 – Mar 2025" href="/koinbasket">
          <ul className="list-disc pl-5 space-y-2">
            <li>Led the rebrand and UI rework for web and mobile, moving to a cleaner look that read as more trustworthy.</li>
            <li>Managed and mentored the company's first junior UX designer.</li>
            <li>Designed BitBuddy, a two-sided platform where experts curate content and users follow their insights.</li>
            <li>Designed the Live Trading Experience, a dashboard combining live video with real-time market data and trade execution.</li>
          </ul>
        </TimelineItem>

        <TimelineItem title="Founding Designer" company="KoinBasket · Remote, India" period="Oct 2022 – Jun 2023" href="/koinbasket">
          <ul className="list-disc pl-5 space-y-2">
            <li>As the only designer, led the strategy and design of the MVP in a one-week sprint, on a product that grew past 70,000 users.</li>
            <li>Owned the design process end to end, from wireframes to responsive UI for web and mobile.</li>
            <li>Shaped the core idea: simple crypto investing through curated "baskets" in a non-custodial model.</li>
            <li>Designed engagement features, including a Crypto Fantasy League and a tiered rewards system.</li>
          </ul>
        </TimelineItem>

        <TimelineItem title="Design Intern" company="Softwire · London, UK" period="Jul 2022 – Aug 2022" href="/softwire">
          <ul className="list-disc pl-5 space-y-2">
            <li>Co-led UX with another design intern on an LNER App Clip: user research and usability testing that shaped the final design.</li>
          </ul>
        </TimelineItem>

        <TimelineItem title="Design Research Intern" company="Think Design · Remote, India" period="2020">
          <ul className="list-disc pl-5 space-y-2">
            <li>Qualitative research on how communication norms changed during the COVID-19 pandemic.</li>
          </ul>
        </TimelineItem>
      </div>
    </section>

    {/* Academic projects */}
    <section id="academic-experience" className="border-t border-border py-16 scroll-mt-24">
      <SectionTitle>Projects at the Royal College of Art</SectionTitle>
      <div className="timeline-container">
        <TimelineItem title="Pebble, with VISA Innovation Centre" company="RCA · London, UK" period="Jan – Jun 2021" href="/pebble">
          <ul className="list-disc pl-5 space-y-2">
            <li>Led a service design project on employee wellbeing with the VISA Innovation Centre.</li>
            <li>Used user research, co-creation workshops and iterative design to shape the service.</li>
            <li>The Virtual Café concept went into VISA Innovation Centre's collaboration roadmap.</li>
          </ul>
        </TimelineItem>

        <TimelineItem title="Invisible Value Income Program" company="RCA × Fuzzy Studio × BCG Platinion × Royal Society of Medicine" period="Oct – Dec 2020" href="/iviprogram">
          <ul className="list-disc pl-5 space-y-2">
            <li>Co-created a speculative service addressing the work-life balance gap for women.</li>
            <li>Core77 Design Awards 2021, Student Notable.</li>
            <li>BCG used the research framework in its own workshops.</li>
          </ul>
        </TimelineItem>

        <TimelineItem title="Stampede" company="RCA · London, UK" period="Jan – Mar 2019" href="/stampede">
          <ul className="list-disc pl-5 space-y-2">
            <li>Developed the Stampede workshop method for forming conservation partnerships.</li>
            <li>Its first workshop started the WWT × Airbnb collaboration.</li>
          </ul>
        </TimelineItem>
      </div>
    </section>

    {/* Education */}
    <section id="education" className="border-t border-border py-16 scroll-mt-24">
      <SectionTitle>Education</SectionTitle>
      <div className="timeline-container">
        <TimelineItem title="M.A. Service Design" company="Royal College of Art · London, UK" period="2021">
          <p>Including a Brand Management elective with London Business School.</p>
        </TimelineItem>
        <TimelineItem title="B.E. Mechanical Engineering" company="Osmania University · Hyderabad, India" />
      </div>
    </section>

    {/* Skills */}
    <section id="skills" className="border-t border-border py-16 scroll-mt-24">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Service design', ['User research', 'Co-creation workshops', 'Service blueprints', 'Journey mapping', 'Facilitation', 'Usability testing']],
          ['Product design', ['UI/UX design', 'Interaction design', 'Prototyping', 'Design systems', 'Information architecture']],
          ['Build', ['React and TypeScript', 'Supabase', 'AI integration (Gemini)', 'PWA development']],
          ['Tools', ['Figma', 'Miro', 'Framer', 'Webflow', 'Claude Code', 'Cursor']],
        ].map(([group, items]) => (
          <div key={group as string}>
            <h3 className="heading-4 mb-3">{group as string}</h3>
            <ul className="space-y-1.5 body-base">
              {(items as string[]).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Recommendations */}
    <section className="border-t border-border py-16">
      <SectionTitle>Recommendations</SectionTitle>
      <Recommendations variant="full" showTitle={false} />
    </section>

    {/* Certificates */}
    <section id="certificates" className="border-t border-border py-16 scroll-mt-24">
      <CertificatesCarousel />
    </section>

    {/* Interests */}
    <section id="interests" className="border-t border-border py-16 scroll-mt-24">
      <SectionTitle>Outside work</SectionTitle>
      <p className="text-lg text-text-secondary">Football, travelling, stargazing, indie music, casual gaming and photography.</p>
    </section>
  </PageLayout>
);
