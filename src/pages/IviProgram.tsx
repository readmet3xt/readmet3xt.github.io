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

export const IviProgram = () => {
  return (
    <CaseStudyLayout
      title="Invisible Value Income Program"
      description="The Hidden Workload: Reimagining Women's Work-Life Balance for 2040 — A Core77-awarded speculative service that makes invisible domestic labour economically visible."
    >
      <CaseStudyHero
        title="The Hidden Workload: Reimagining Women's Work-Life Balance for 2040"
        subtitle="A Core77-awarded speculative service that makes invisible domestic labour economically visible"
        pills={[
          'Speculative Design',
          "Women's Wellbeing",
          'Invisible Labour',
          'Future of Work',
          'Systemic Design',
          'Core77 Award Winner',
        ]}
        intro="What if the invisible labour women perform at home could be economically valued and compensated? As project lead at the Royal College of Art, I designed a Core77-award-winning speculative service that reimagines work-life balance by 2040. Through research with 79 working women and co-creation with BCG, we developed the Invisible Value Income Program — a future-facing system that makes unpaid domestic work visible, measurable, and compensated."
        overview={{
          role: [
            'Project Lead & Design Strategist',
            'Led research design and synthesis (79 participant interviews)',
            'Facilitated co-creation workshops with BCG stakeholders',
            'Designed speculative service system and Sensei platform UI',
          ],
          team: 'Guoxing Song, Jing Qian, Kotoko Kimura, Zhiyuan Zheng. Partners: Fuzzy Design Studio, Royal Society of Medicine, BCG',
          timeline: '4 months, Royal College of Art, October–December 2020',
          recognition: 'Core77 Design Awards 2021 — Notable Honor, Speculative Design. Research framework adopted internally by BCG.',
          tools: [
            'Speculative Design',
            'Service Design',
            'Systems Thinking',
            'Ethnographic Research',
            'Figma',
          ],
        }}
        heroImage="/images/casestudies/iviprogram/hero.png"
        heroImageAlt="I.V.I. Program overview"
      />

      {/* The Problem */}
      <CaseStudySection title="The Problem">
        <CaseStudyParagraph lead>
          The modern working woman carries two jobs. One is paid and visible. The other — childcare,
          domestic management, emotional labour — is invisible to every economic system that exists today.
        </CaseStudyParagraph>

        <CaseStudyParagraph>
          Our research with 79 working women across sectors and countries mapped the systemic pressure
          clearly: workplace stress compounded by unpaid domestic workload, blurred boundaries between
          professional and personal life, and what we came to call the "Working Mom Penalty" — the
          systematic devaluation of contributions both at home and at work.
        </CaseStudyParagraph>

        <CaseStudyQuote>
          What if invisible value could be evaluated economically?
        </CaseStudyQuote>

        <CaseStudyImage
          src="/images/casestudies/iviprogram/image-1.png"
          alt="The invisible workload problem"
          caption="Mapping the systemic pressures on working women"
        />
      </CaseStudySection>

      {/* Our Approach */}
      <CaseStudySection title="Our Approach">
        <CaseStudyParagraph lead>
          We believed designing for systemic inequality required understanding it at a human level first.
          So before any solution work, we built a genuine research foundation.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="Phase 1 — Discovery">
            <CaseStudyParagraph>
              79 working women interviewed across diverse sectors and countries, plus 4 wellbeing specialists.
              <strong> Key findings:</strong> stress is both external (workload, societal pressure) and internal
              (self-doubt, fear of obsolescence). A sense of control significantly decreases stress.
              Prevention is more effective than cure, yet chronically underfunded.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 2 — Persona & Problem">
            <CaseStudyParagraph>
              We developed Johanna — a 36-year-old working mother. No time for herself. Loss of control.
              Constant adjustment to competing demands. No space for deep communication. Her root problem
              wasn't time management. It was that her domestic work had no recognised value.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 3 — Future Speculation">
            <CaseStudyParagraph>
              We projected Johanna's needs into a 2040 scenario — accounting for advances in AI, IoT,
              evolving family structures, and shifting work cultures. The question became: if technology
              can measure almost anything, why are we choosing not to measure this?
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/iviprogram/image-2.png"
          alt="Research approach and persona development"
          caption="From 79 interviews to the Johanna persona and future speculation"
        />
      </CaseStudySection>

      {/* The Solution */}
      <CaseStudySection title="The Solution: The I.V.I. Program">
        <CaseStudyParagraph lead>
          The Invisible Value Income Program is a speculative governmental service for 2040. It recognises,
          measures, and compensates for the invisible value created by individuals — primarily women —
          outside of formal employment.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="Makes invisible value visible">
            <CaseStudyParagraph>
              IoT devices collect data on domestic contributions, the Sensei platform visualises that work,
              and it translates into potential income. The act of measurement alone shifts perception.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Enhances sense of control">
            <CaseStudyParagraph>
              Users gain data and insight into their full life-work landscape, enabling better planning
              and genuine decision-making autonomy.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Promotes systemic equity">
            <CaseStudyParagraph>
              By compensating unpaid work at a governmental level (not employer level — a critical design
              decision from stakeholder validation), the program avoids creating new workplace discrimination
              while addressing the structural inequality directly.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyParagraph>
          <strong>The Sensei Platform</strong> is the central touchpoint: a digital interface that collects
          invisible value data via IoT, facilitates self-monitoring of physical and mental health,
          connects users to professional support pathways, and facilitates planning conversations with
          managers, HR, and family members.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/iviprogram/image-3.png"
          alt="The Sensei Platform interface"
          caption="Central digital interface for measuring and compensating invisible value"
        />
      </CaseStudySection>

      {/* Validation with Stakeholders */}
      <CaseStudySection title="Validation with Stakeholders">
        <CaseStudyParagraph lead>
          We prototyped the I.V.I. Program and tested it with 9 stakeholders — working mothers and
          fathers, managers, and HR specialists across multiple countries. The feedback sharpened our
          thinking significantly.
        </CaseStudyParagraph>

        <CaseStudyQuote author="Miao" role="Working Mother, China">
          The invisible value should be paid for by the government, not companies — women are
          discriminated against more if the company pays for it.
        </CaseStudyQuote>

        <CaseStudyQuote author="Saanya" role="Manager, India">
          This will help us plan and manage our employees' workload to ensure lack of productivity is addressed.
        </CaseStudyQuote>

        <CaseStudyQuote author="Miriam" role="Germany">
          It would need to be very easy to access, otherwise only educated women would benefit.
        </CaseStudyQuote>

        <CaseStudyCard title="Design Principles from Validation">
          <CaseStudyList items={[
            'Government funding only — to prevent workplace discrimination',
            'Partial employer data access with user consent',
            'Trust-based service design with minimal tracking',
            'Careful consideration of unintended consequences — particularly domestic work becoming transactional',
          ]} />
        </CaseStudyCard>

        <CaseStudyImage
          src="/images/casestudies/iviprogram/image-4.png"
          alt="Stakeholder validation workshop"
          caption="9 stakeholders across countries refined the design through candid feedback"
        />
      </CaseStudySection>

      {/* Impact & Recognition */}
      <CaseStudySection title="Impact & Recognition">
        <CaseStudyStatsGrid
          stats={[
            { value: '79', label: 'Women Interviewed' },
            { value: 'Core77', label: 'Award', sublabel: 'Notable Honor' },
            { value: 'BCG', label: 'Framework Adopted' },
            { value: '9', label: 'Stakeholders', sublabel: 'Validated' },
          ]}
        />

        <CaseStudyParagraph>
          Core77 Design Awards 2021 — Notable Honor in Speculative Design. The "6 Dimensions of
          Workplace Wellbeing" framework developed during this project was adopted by BCG for their
          internal employee affiliation workshops — demonstrating that speculative design, done rigorously,
          produces frameworks with immediate real-world applicability.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/iviprogram/image-5.png"
          alt="Core77 Award recognition"
          caption="Core77 Design Awards Notable Honor and BCG framework adoption"
        />
      </CaseStudySection>

      {/* What I Learned */}
      <CaseStudySection title="What I Learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Speculative design is a tool for real dialogue">
            <CaseStudyParagraph>
              Designing a 2040 scenario didn't make the work abstract. It made the conversations about
              current inequality sharper and more honest. People engage differently when you remove
              the constraints of "what's feasible now."
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Wellbeing is systemic, not individual">
            <CaseStudyParagraph>
              The instinct in most wellness products is to help individuals cope better. The harder,
              more important question is: what systemic conditions are producing the stress in the first place?
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Making the invisible visible is itself an act of design">
            <CaseStudyParagraph>
              The most powerful thing the I.V.I. Program does isn't the income. It's the measurement.
              Quantifying domestic labour changes how it's perceived, discussed, and valued — by institutions,
              by families, and by women themselves.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          images={[
            { src: '/images/casestudies/iviprogram/image-6.png', alt: 'Service blueprint', caption: 'I.V.I. Service Blueprint' },
            { src: '/images/casestudies/iviprogram/image-7.png', alt: '2040 vision scenario', caption: '2040 Future Vision' },
          ]}
          columns={2}
        />
      </CaseStudySection>
    </CaseStudyLayout>
  );
};