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

export const Softwire = () => {
  return (
    <CaseStudyLayout
      title="LNER App Clip"
      description="Designing for Users Running to Catch Trains — How I led UX design for LNER's instant ticket booking experience."
    >
      <CaseStudyHero
        title="Designing for Users Running to Catch Trains"
        subtitle="How I led UX design for LNER's instant ticket booking experience"
        pills={[
          'App Clip',
          'Mobile Design',
          'Usability Testing',
          'LNER',
          'Internship',
        ]}
        intro="You're sprinting through the station, dodging crowds, watching platform boards nervously. You reach the ticket kiosk — there's a queue. You try downloading the app — it's 200MB. The departure countdown ticks. During my Softwire internship, I led UX design for LNER's App Clip: a sub-10MB, instant-launch solution for exactly this situation."
        overview={{
          role: [
            'Solo UX/UI Designer',
            'Led 7 developers through the design process',
            'Facilitated workshop with 13 stakeholders',
            'Conducted usability testing with 9 participants',
          ],
          timeline: '8-week summer internship, July–August 2022',
          recognition: 'Core booking flow validated and developed within internship timeline',
          tools: [
            'Figma',
            'Usability Testing',
            'Apple App Clip',
            'National Rail Guidelines',
          ],
        }}
        heroImage="/images/casestudies/softwire/hero.png"
        heroImageAlt="LNER App Clip interface"
      />

      {/* The Challenge */}
      <CaseStudySection title="The Challenge">
        <CaseStudyParagraph lead>
          App Clips are Apple's answer to instant-launch experiences: sub-10MB, no installation,
          focused on a single task. Perfect for time-pressured contexts in theory. But designing
          for users literally running to catch trains is a different problem entirely.
        </CaseStudyParagraph>

        <CaseStudyList items={[
          { title: '10MB size limit', description: 'Demanded ruthless prioritisation' },
          { title: 'Instant launch', description: 'Meant zero onboarding' },
          { title: 'National Rail compliance', description: 'Added a layer of industry requirements on top' },
        ]} />

        <CaseStudyQuote>
          What information is essential versus overwhelming? How do you build trust for payment in 30 seconds?
        </CaseStudyQuote>

        <CaseStudyImage
          src="/images/casestudies/softwire/image-1.png"
          alt="The challenge of designing for stressed travelers"
          caption="The constraints that shaped every design decision"
        />
      </CaseStudySection>

      {/* Research & Discovery */}
      <CaseStudySection title="Research & Discovery">
        <CaseStudyParagraph lead>
          I started with an ideation workshop — 13 participants across LNER stakeholders, designers,
          developers, and project managers — then took the research to the field.
        </CaseStudyParagraph>

        <CaseStudyParagraph>
          Fly-on-the-wall observations at St. Pancras told the real story. Users checking platform
          boards repeatedly. Anxiety spiking when platforms weren't announced until the last minute.
          Fumbling with paper tickets or slow apps under pressure. The stress wasn't hypothetical —
          it was visible and consistent.
        </CaseStudyParagraph>

        <CaseStudyParagraph>
          From research, five priorities emerged that users consistently named as non-negotiable:
          <strong> live times, delays, platform details, prices, and journey duration</strong>. Everything else was noise.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/softwire/image-2.png"
          alt="Field research at St. Pancras"
          caption="Station observations revealed the real stress points"
        />
      </CaseStudySection>

      {/* Design Process */}
      <CaseStudySection title="Design Process">
        <CaseStudyStatsGrid
          stats={[
            { value: '8', label: 'Weeks', sublabel: 'Total timeline' },
            { value: '13', label: 'Stakeholders', sublabel: 'In workshop' },
            { value: '9', label: 'Users', sublabel: 'Tested with' },
            { value: '7', label: 'Developers', sublabel: 'Collaborated' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Weeks 1–2: Understanding">
            <CaseStudyParagraph>
              Ideation workshop, affinity mapping, sketching. One clear direction: a minimal interface
              showing only essential journey information with a single, fast purchase path.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Weeks 3–4: Prototyping & Testing">
            <CaseStudyParagraph>
              Interactive Figma prototypes tested with 9 participants. The task: book a return ticket
              to Birmingham for 1 adult and 1 child with a railcard. Two critical failures surfaced immediately.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/softwire/image-3.png"
          alt="Design process and prototyping"
          caption="From workshop insights to interactive prototypes"
        />
      </CaseStudySection>

      {/* Key Iterations */}
      <CaseStudySection title="Key Iterations">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Ticket Confirmation Screen">
            <CaseStudyParagraph>
              Users found the initial design overwhelming. Too much information at once, unclear hierarchy,
              confusing ticket-saving options. I stripped it back, clarified the primary action, and
              restructured the information hierarchy around what users actually needed in that moment:
              platform number and QR code, visible immediately.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Journey Planning Flow">
            <CaseStudyParagraph>
              The original multi-step flow felt too long for an App Clip context. Users couldn't easily
              edit journey details mid-flow. Redesigned to a single-overview approach with inline editing —
              fewer taps, less backtracking, faster to purchase.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyParagraph>
          Both issues only surfaced through testing. Neither was visible from the inside.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/softwire/image-4.png"
          alt="Key iterations and before/after"
          caption="Critical improvements driven by usability testing"
        />
      </CaseStudySection>

      {/* The Solution */}
      <CaseStudySection title="The Solution">
        <CaseStudyParagraph lead>
          A streamlined booking flow built around four principles:
        </CaseStudyParagraph>

        <CaseStudyList items={[
          { title: 'Instant Access', description: 'Launch via NFC tag or QR code at the station. No download, no account creation to start.' },
          { title: 'Radical Simplification', description: 'Upcoming trains shown with only the five things users asked for: time, price, duration, changes, and delay status.' },
          { title: 'Frictionless Payment', description: 'Apple Pay integration. One confirmation tap to purchase.' },
          { title: 'Accessible Ticket', description: 'Prominent QR code, platform number, and Apple Wallet integration on the confirmation screen.' },
        ]} />

        <CaseStudyImage
          src="/images/casestudies/softwire/image-5.png"
          alt="The final booking flow solution"
          caption="Streamlined booking designed for speed and clarity"
        />
      </CaseStudySection>

      {/* Seat Finder Concept */}
      <CaseStudySection title="Beyond Booking: The Seat Finder Concept">
        <CaseStudyParagraph lead>
          Last-minute buyers often have no reserved seat. Finding a free seat on a busy train adds
          a final layer of stress. I explored a Seat Finder feature as part of the onboarding experience.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Side Profile View">
            <CaseStudyParagraph>
              Mimics standing on the platform looking at the train. Horizontal scrolling,
              potentially easier spatial orientation in context.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Plan View">
            <CaseStudyParagraph>
              Industry-standard carriage layout. More information visible at once, vertical scrolling.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          This was a perfect A/B testing opportunity — which representation would users interpret faster
          under real-world pressure?
        </CaseStudyQuote>

        <CaseStudyParagraph>
          The feature was parked for future development, but the question it raised — how small visual
          decisions change usability under stress — became one of the most important things I took from
          the project.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/softwire/image-6.png"
          alt="Seat Finder concept explorations"
          caption="Two approaches to seat finding: side profile vs plan view"
        />
      </CaseStudySection>

      {/* Outcome */}
      <CaseStudySection title="Outcome">
        <CaseStudyParagraph>
          The core booking flow was validated through usability testing, developed by the engineering
          team, and met National Rail compliance guidelines. Delivered within the 8-week internship timeline.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/softwire/image-7.png"
          alt="Final validated design"
          caption="The complete App Clip experience — from scan to ticket"
        />
      </CaseStudySection>

      {/* What I Learned */}
      <CaseStudySection title="What I Learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Context changes everything">
            <CaseStudyParagraph>
              What works in a calm setting fails under pressure. Designing for stressed,
              time-constrained users requires fundamentally different thinking, not just simplified UI.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Constraints are clarifying">
            <CaseStudyParagraph>
              The 10MB limit forced decisions I wouldn't have made otherwise. Every screen had to
              justify its existence. That discipline made the product better.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Test your assumptions in context">
            <CaseStudyParagraph>
              The confirmation screen and journey flow failures were invisible until real users tried
              them under realistic task conditions. No amount of internal review would have caught either.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};