import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyParagraph,
  CaseStudyInsight,
  CaseStudyQuote,
  CaseStudyList,
  CaseStudyImageGrid,
  CaseStudyCard,
  CaseStudyCardGrid,
  CaseStudyStatsGrid,
  CaseStudyMotion,
} from '@/components/case-study';
import { FIGURES } from '@/motion/figures/ivi';
import { VideoEmbed } from '@/components/case-study/VideoEmbed';

export const IviProgram = () => {
  return (
    <>
      <CaseStudyLayout title="Invisible Value Income Program">
        <CaseStudyHero
          eyebrow="RCA × BCG Platinion, 2020"
          title="The hidden workload: valuing women's unpaid work in 2040"
          subtitle="A speculative public service that makes unpaid domestic work economically visible. Core77 Design Awards 2021, Student Notable."
          intro="What if the unpaid work women do at home had an economic value? At the Royal College of Art, with four classmates, I led a speculative service set in 2040. We built it on 26 in-depth interviews and 53 questionnaire responses from working women in 12 countries, then tested it with working parents, managers and HR specialists. The Invisible Value Income (I.V.I.) Program makes unpaid domestic work visible, measurable and paid for."
          overview={{
            role: [
              'Project lead and design strategist',
              'Led research design and synthesis (26 interviews and 53 questionnaires, 12 countries)',
              'Facilitated co-creation and prototyping sessions',
              'Designed the service system and the Sensei platform UI',
            ],
            team: 'Guoxing Song, Jing Qian, Kotoko Kimura and Zhiyuan Zheng. Partners: Fuzzy Studio, Royal Society of Medicine, BCG Platinion',
            timeline: 'October to December 2020, Royal College of Art',
            recognition: 'Core77 Design Awards 2021, Student Notable, Speculative Design. BCG used the wellbeing framework in internal workshops.',
            tools: ['In-depth interviews', 'Questionnaires', 'Persona from real schedules', 'Speculative scenario', 'Service blueprint', 'Prototype testing', 'Figma'],
          }}
          heroImage="/images/casestudies/ivi/1-bad-health.webp"
          heroImageAlt="What drives poor mental health for working women"
        />

        <CaseStudySection>
          <VideoEmbed provider="vimeo" id="502127128" title="I.V.I. Program film" />
        </CaseStudySection>

        <CaseStudySection title="Context">
          <CaseStudyParagraph lead>
            Many working women have two jobs. One is paid and visible. The other, childcare, running the home
            and emotional labour, doesn't show up in any economic system.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            We spoke with working women in 12 countries, including the UK, Germany, France, Japan, India and
            China, and with 4 wellbeing specialists. The same pressures kept coming up: work stress on top of
            unpaid work at home, no clear line between work and personal life, and what we called the "working
            mom penalty", where women's contributions are undervalued both at home and at work.
          </CaseStudyParagraph>

          <CaseStudyQuote author="Interview participant" role="Working mother">
            Married men with children still work overtime, but women with children find it hard to, which makes
            it difficult to compete and get promoted.
          </CaseStudyQuote>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/2-good-mental-health.webp', alt: 'What good mental health looks like for working women', caption: 'What good mental health looks like, from our background research.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="Research">
          <CaseStudyParagraph lead>
            To design for a systemic inequality, we first had to understand it at a human level, so the research
            came before any solution work.
          </CaseStudyParagraph>

          <CaseStudyMotion
            figure={FIGURES.needs}
            caption="What 26 interviews and 53 questionnaire responses told us: six needs, which BCG later reused as the 6 dimensions of workplace wellbeing."
            original={{ src: '/images/casestudies/ivi/5-research-findings.webp', alt: 'Research findings from 26 interviews and 53 questionnaires' }}
          />

          <CaseStudyCardGrid columns={3}>
            <CaseStudyCard title="Discovery">
              <CaseStudyParagraph>
                26 in-depth interviews and 53 questionnaires with working women in 12 countries, plus 4 wellbeing
                specialists. Stress came from outside (workload, social pressure) and inside (self-doubt, fear of
                falling behind). Feeling in control reduced it. Prevention works better than cure, and it's
                rarely funded.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Persona">
              <CaseStudyParagraph>
                We built Johanna from six mothers' real daily schedules: 36, a one-year-old daughter, just back
                from maternity leave. <em>"I don't have one minute to myself. I'm 100% productive at work in
                back-to-back meetings, and when the meetings stop, it's 100% parenting time."</em> Her problem
                wasn't time management. Her work at home had no recognised value.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Speculation">
              <CaseStudyParagraph>
                We moved Johanna's needs into a 2040 scenario that accounts for AI, connected devices, new family
                structures and changing work cultures. If technology can measure almost anything by then, why
                would we choose not to measure this?
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/3-initial-hmw.webp', alt: 'Our first how-might-we question', caption: 'Our first how-might-we question.' },
              { src: '/images/casestudies/ivi/15-2.webp', alt: 'Future prediction from policy, company and individual signals', caption: 'Building the 2040 scenario from real signals in policy, companies and individuals.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="Insight">
          <CaseStudyInsight>
            Measuring unpaid work changes how it's seen, before any money changes hands.
          </CaseStudyInsight>

          <CaseStudyMotion
            figure={FIGURES.hours}
            caption="Why it happens, and the question at the centre of the project: why is this invisible value not paid for?"
            original={[
              { src: '/images/casestudies/ivi/4-why-this-happens.webp', alt: 'Why this happens: inequality between parents' },
              { src: '/images/casestudies/ivi/term4-final-presentation-004.webp', alt: 'The question: why is this invisible value not paid for?' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="What we made">
          <CaseStudyParagraph lead>
            The Invisible Value Income Program is a speculative government service for 2040. It recognises,
            measures and pays for the value people, mostly women, create outside formal employment.
          </CaseStudyParagraph>

          <CaseStudyCardGrid columns={3}>
            <CaseStudyCard title="Making the work visible">
              <CaseStudyParagraph>
                Connected devices record contributions at home, the Sensei platform shows that work, and it
                turns into potential income.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="More control">
              <CaseStudyParagraph>
                People see their whole picture of work and life, which makes planning and real choices easier.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Paid by government">
              <CaseStudyParagraph>
                The payment comes from government, not employers. That decision came from testing: employer
                funding would have created new discrimination at work.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyParagraph>
            The <strong>Sensei platform</strong> is the main touchpoint. It collects the data, helps people keep
            track of their physical and mental health, connects them to professional support, and supports
            planning conversations with managers, HR and family.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/7-sensei.webp', alt: 'The Sensei platform', caption: 'The Sensei platform.' },
            ]}
          />

          <CaseStudyMotion
            figure={FIGURES.journey}
            caption="Johanna's journey through the program: four stages and seven touchpoints, from recording work at home to invisible value income."
            original={[
              { src: '/images/casestudies/ivi/6-1-journey-map-1.webp', alt: 'User journey, part one: collecting invisible value, self-check and planning' },
              { src: '/images/casestudies/ivi/6-2-journey-map-2.webp', alt: 'User journey, part two: workplace conversations and invisible value income' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="Testing">
          <CaseStudyParagraph lead>
            We prototyped the service in 9 sessions covering 5 perspectives: HR, a manager and her team, a
            working dad, a working mom and a woman in employment. The feedback changed the design.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/term4-final-presentation-012.webp', alt: 'Validation sessions: 9 prototypes, 5 perspectives', caption: 'The validation sessions.' },
              { src: '/images/casestudies/ivi/18.webp', alt: 'Prototyping with stakeholders and the topics we covered', caption: 'What we talked about in the sessions.' },
            ]}
          />

          <CaseStudyQuote author="Miao" role="Working mother, China">
            The invisible value should be paid for by the government, not companies. Women are discriminated
            against more if the company pays for it.
          </CaseStudyQuote>

          <CaseStudyQuote author="Saanya" role="Manager, India">
            This will help us plan and manage our employees' workload to ensure lack of productivity is addressed.
          </CaseStudyQuote>

          <CaseStudyQuote author="Miriam" role="Germany">
            It would need to be very easy to access, otherwise only educated women would benefit.
          </CaseStudyQuote>

          <CaseStudyCard title="What testing changed">
            <CaseStudyList items={[
              'Funding comes from government only, to avoid discrimination at work',
              'Employers see only some data, and only with consent',
              'A trust-based service with as little tracking as possible',
              'A watch for unintended effects, especially care starting to feel transactional',
            ]} />
          </CaseStudyCard>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/20.webp', alt: 'Quotes from the prototyping sessions', caption: 'Quotes from the sessions.' },
              { src: '/images/casestudies/ivi/19.webp', alt: 'More quotes from the prototyping sessions', caption: 'More quotes from the sessions.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="What changed">
          <CaseStudyStatsGrid
            stats={[
              { value: '79', label: 'Women', sublabel: 'Interviews and questionnaires, 12 countries' },
              { value: 'Core77', label: 'Award', sublabel: 'Student Notable, 2021' },
              { value: 'BCG', label: 'Used the framework', sublabel: 'Internal affiliation workshops' },
              { value: '9', label: 'Prototype sessions', sublabel: '5 perspectives' },
            ]}
          />

          <CaseStudyParagraph>
            The project received a Core77 Design Awards 2021 Student Notable in Speculative Design. BCG later used
            the "6 dimensions of workplace wellbeing" framework from this project in its internal employee
            affiliation workshops, to look at changes before and after the pandemic.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/29-2.webp', alt: 'The 6 dimensions of workplace wellbeing, used in BCG’s affiliation workshop', caption: 'The framework BCG used.' },
              { src: '/images/casestudies/ivi/core77-student-notable-listing.webp', alt: 'Core77 Design Awards 2021 Student Notable listing for the I.V.I. Program', caption: 'The Core77 listing.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="What I learned">
          <CaseStudyCardGrid columns={3}>
            <CaseStudyCard title="Speculation makes conversations honest">
              <CaseStudyParagraph>
                Setting the service in 2040 made the conversations about today's inequality sharper. People talk
                differently once "what's feasible now" is off the table.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Look at the system">
              <CaseStudyParagraph>
                Most wellness products help individuals cope. The harder question is what in the system is
                producing the stress in the first place.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Measurement is a design choice">
              <CaseStudyParagraph>
                The income matters less than the measurement. Counting domestic work changes how institutions,
                families and women themselves see it.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <VideoEmbed provider="vimeo" id="500506619" title="How participants feel about the I.V.I. Program" />

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/ivi/25-2.webp', alt: 'Conclusion: prototyping interviews and the public showcase workshop', caption: 'The conclusion: prototyping interviews and a public showcase workshop.' },
            ]}
          />
        </CaseStudySection>
      </CaseStudyLayout>
    </>
  );
};
