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
    <div className="theme-ivi contents">
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
          heroImage="/images/casestudies/ivi/1 (3).jpg"
        />

        <CaseStudySection>
          <div className="flex flex-col gap-4 mt-8">
            <div className="relative overflow-hidden rounded-lg bg-white border border-border aspect-video shadow-sm">
              <iframe
                src="https://player.vimeo.com/video/502127128?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
                title="I.V.I program"
                allowFullScreen>
              </iframe>
            </div>
            <CaseStudyImageGrid
              columns={1}
              images={[
                { src: '/images/casestudies/ivi/2 (3).jpg', alt: 'Hero image 2' }
              ]}
            />
          </div>
        </CaseStudySection>

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

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/33 (2).jpg', alt: 'The invisible workload problem 1' },
              { src: '/images/casestudies/ivi/10 (3).jpg', alt: 'The invisible workload problem 2' },
              { src: '/images/casestudies/ivi/4.jpg', alt: 'The invisible workload problem 3' },
              { src: '/images/casestudies/ivi/5.jpg', alt: 'The invisible workload problem 4' },
              { src: '/images/casestudies/ivi/6.jpg', alt: 'The invisible workload problem 5' },
              { src: '/images/casestudies/ivi/7.jpg', alt: 'The invisible workload problem 6' }
            ]}
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

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/8 (2).jpg', alt: 'Research approach 1' },
              { src: '/images/casestudies/ivi/Term4_Final presentation.003.jpeg', alt: 'Research approach 2' },
              { src: '/images/casestudies/ivi/13 (2).jpg', alt: 'Research approach 3' }
            ]}
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

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/17 (3).jpg', alt: 'Sensei platform 1' }
            ]}
          />
          <div className="mt-8">
            <CaseStudyImageGrid
              columns={2}
              images={[
                { src: '/images/casestudies/ivi/Term4_Final presentation.008.jpeg', alt: 'Sensei UI 1' },
                { src: '/images/casestudies/ivi/Term4_Final presentation.009.jpeg', alt: 'Sensei UI 2' }
              ]}
            />
          </div>
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

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/Term4_Final presentation.012.jpeg', alt: 'Validation 1' },
              { src: '/images/casestudies/ivi/18.jpg', alt: 'Validation 2' },
              { src: '/images/casestudies/ivi/20.jpg', alt: 'Validation 3' },
              { src: '/images/casestudies/ivi/19.jpg', alt: 'Validation 4' }
            ]}
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

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/29 (2).jpg', alt: 'Impact 1' },
              { src: '/images/casestudies/ivi/Screenshot 2026-03-08 081421.png', alt: 'Impact 2' }
            ]}
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

          <div className="flex flex-col gap-4 mt-8">
            <div className="relative overflow-hidden rounded-lg bg-white border border-border aspect-video shadow-sm">
              <iframe
                src="https://player.vimeo.com/video/500506619?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
                title="How do participants feel about the I.V.I program so far"
                allowFullScreen>
              </iframe>
            </div>

            <CaseStudyImageGrid
              columns={1}
              images={[
                { src: '/images/casestudies/ivi/Term4_Final presentation.004.jpeg', alt: 'Learning 1' },
                { src: '/images/casestudies/ivi/25 (2).jpg', alt: 'Learning 2' },
                { src: '/images/casestudies/ivi/15 (2).jpg', alt: 'Learning 3' }
              ]}
            />
          </div>
        </CaseStudySection>
      </CaseStudyLayout>
    </div>
  );
};