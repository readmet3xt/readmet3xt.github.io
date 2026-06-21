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
    <div className="theme-softwire contents">
      <CaseStudyLayout
        title="LNER App Clip"
        description="Designing for Users Running to Catch Trains — How I led UX design for LNER's instant ticket booking experience."
      >
        <CaseStudyHero
          eyebrow="Case Study · Softwire × LNER · App Clip · 2022"
          title="Designing for Users Running to Catch Trains"
          subtitle="How I led UX design for LNER's instant ticket booking experience"
          pills={[
            'App Clip',
            'Mobile Design',
            'Usability Testing',
            'LNER',
            'Internship',
          ]}
          intro="You're sprinting through the station, dodging crowds, watching platform boards nervously. You reach the ticket kiosk — there's a queue. You try downloading the app — it's 200MB. The departure countdown ticks. During my Softwire internship I co-led UX design — one of two design interns driving the project — for LNER's App Clip: a sub-10MB, instant-launch solution for exactly this situation."
          overview={{
            role: [
              'UX/UI Designer — co-led the project with one other design intern',
              'Drove the design process for a 7-strong developer team',
              'Co-facilitated a 13-person ideation workshop',
              'Ran usability testing with 9 participants',
            ],
            timeline: '8-week summer internship, July–August 2022',
            recognition: 'Core booking flow validated and handed to engineering within the internship timeline',
            tools: [
              'Figma',
              'Usability Testing',
              'Apple App Clip',
              'National Rail Guidelines',
            ],
          }}
          heroImage="/images/casestudies/softwire/14-5-product-final-landing.webp"
          heroImageAlt="LNER App Clip landing screen — final product design"
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

          <CaseStudyImageGrid
            columns={1}
            aspectRatio="aspect-auto"
            images={[
              { src: '/images/casestudies/softwire/1-problem.webp', alt: 'The problem — passengers running to catch trains with no fast way to buy a ticket', caption: 'The problem: time-pressured passengers with no fast, lightweight way to buy a ticket.' },
              { src: '/images/casestudies/softwire/2-solution.webp', alt: 'The solution — an instant-launch, sub-10MB App Clip', caption: 'The solution: a sub-10MB, instant-launch App Clip focused on a single task.' },
              { src: '/images/casestudies/softwire/10-opportunity.webp', alt: 'The opportunity space for an App Clip ticket experience', caption: 'The opportunity: an instant ticketing experience tailored to the station context.' }
            ]}
          />
        </CaseStudySection>

        {/* Research & Discovery */}
        <CaseStudySection title="Research & Discovery">
          <CaseStudyParagraph lead>
            We started with an ideation workshop — 13 participants across LNER stakeholders, designers,
            developers, and project managers — then took the research to the field.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            Desk research set the baseline: travellers already rated the ease of buying a ticket
            positively at <strong>82%</strong> (Department for Transport / TfL). So the real gap wasn't
            the transaction — it was getting <em>live, trustworthy</em> journey information under pressure.
            The recurring demand from passengers was that information should feel "demonstrably live."
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

          <CaseStudyImageGrid
            columns={1}
            aspectRatio="aspect-auto"
            images={[
              { src: '/images/casestudies/softwire/3-1-ideation-workshop.webp', alt: 'The 13-person ideation workshop in session', caption: 'Co-facilitating a 13-person ideation workshop with LNER stakeholders, designers and developers.' },
              { src: '/images/casestudies/softwire/3-2-workshop-crazy-8.webp', alt: 'Workshop in progress — Crazy 8s sketching exercise', caption: 'Workshop in progress: a Crazy 8s rapid-sketching exercise.' },
              { src: '/images/casestudies/softwire/4-results-of-workshop.webp', alt: 'Results of the workshop — clustered ideas', caption: 'Results of the workshop: clustered ideas and emerging directions.' },
              { src: '/images/casestudies/softwire/5-results-of-workshop-activity-2.webp', alt: 'Results of workshop activity 2', caption: 'Outputs from the second workshop activity.' },
              { src: '/images/casestudies/softwire/6-fly-on-the-wall.webp', alt: 'Fly-on-the-wall observation method at the station', caption: 'Fly-on-the-wall observations at St. Pancras to see real passenger behaviour.' },
              { src: '/images/casestudies/softwire/9-fly-on-the-wall-pics.webp', alt: 'Photographs from fly-on-the-wall station observations', caption: 'Field photographs captured during station observations.' },
              { src: '/images/casestudies/softwire/7-fly-on-the-wall-results.webp', alt: 'Synthesised results from fly-on-the-wall observations', caption: 'Synthesised observation findings: anxiety spikes around platform announcements.' },
              { src: '/images/casestudies/softwire/8-problems-found.webp', alt: 'Key problems found through research', caption: 'The core problems found: the gap was live, trustworthy journey information under pressure.' }
            ]}
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
                Interactive Figma prototypes tested with 9 participants (4 friends and family, 5 Softwire
                colleagues). The set task: book a return ticket to Birmingham for 1 adult and 1 child on a
                16–25 Railcard, as if standing on the platform. Two critical failures surfaced immediately.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyImageGrid
            columns={1}
            aspectRatio="aspect-auto"
            images={[
              { src: '/images/casestudies/softwire/11-app-clip-flow-chart.webp', alt: 'App Clip flow chart mapping the booking journey', caption: 'Mapping the App Clip booking flow end to end.' },
              { src: '/images/casestudies/softwire/12-lofi-wireframe.webp', alt: 'Low-fidelity wireframes of the booking screens', caption: 'Low-fidelity wireframes exploring screen layout and hierarchy.' },
              { src: '/images/casestudies/softwire/13-usability-testing.webp', alt: 'Usability testing setup and findings', caption: 'Usability testing with 9 participants under realistic time pressure.' }
            ]}
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

          <CaseStudyImageGrid
            columns={2}
            aspectRatio="aspect-auto"
            images={[
              { src: '/images/casestudies/softwire/14-4-product-initial.webp', alt: 'Initial product design before iteration', caption: 'The initial design — before testing surfaced the issues.' },
              { src: '/images/casestudies/softwire/16-feedback-form.webp', alt: 'Feedback form used to capture usability findings', caption: 'Capturing structured feedback from each test session.' },
              { src: '/images/casestudies/softwire/14-9-product-final-ticket.webp', alt: 'Final confirmation screen — platform number and QR code visible immediately', caption: 'The reworked confirmation screen: platform number and QR code front and centre.' },
              { src: '/images/casestudies/softwire/18-notifications.webp', alt: 'Live journey notifications design', caption: 'Live, demonstrably up-to-date journey notifications.' }
            ]}
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

          <CaseStudyImageGrid
            columns={3}
            aspectRatio="aspect-auto"
            images={[
              { src: '/images/casestudies/softwire/14-5-product-final-landing.webp', alt: 'Final product — landing screen', caption: 'Landing' },
              { src: '/images/casestudies/softwire/14-6-product-ticket-selection.webp', alt: 'Final product — ticket selection screen', caption: 'Ticket selection' },
              { src: '/images/casestudies/softwire/14-7-product-selecting-train.webp', alt: 'Final product — selecting a train', caption: 'Selecting a train' },
              { src: '/images/casestudies/softwire/14-8-product-checkout-page.webp', alt: 'Final product — checkout page', caption: 'Checkout' },
              { src: '/images/casestudies/softwire/14-9-product-final-ticket.webp', alt: 'Final product — final ticket screen', caption: 'Final ticket' },
              { src: '/images/casestudies/softwire/14-1-product-final.webp', alt: 'Final product screen', caption: 'Final UI' },
              { src: '/images/casestudies/softwire/14-2-product-final.webp', alt: 'Final product screen', caption: 'Final UI' },
              { src: '/images/casestudies/softwire/14-3-product-final.webp', alt: 'Final product screen', caption: 'Final UI' }
            ]}
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

          <CaseStudyImageGrid
            columns={2}
            aspectRatio="aspect-auto"
            images={[
              { src: '/images/casestudies/softwire/15-seat-finder.webp', alt: 'Seat Finder concept — first representation', caption: 'Seat Finder concept: one representation of the carriage.' },
              { src: '/images/casestudies/softwire/17-seat-finder-2.webp', alt: 'Seat Finder concept — alternative representation', caption: 'Seat Finder concept: an alternative view for A/B comparison.' }
            ]}
          />
        </CaseStudySection>

        {/* Outcome */}
        <CaseStudySection title="Outcome">
          <CaseStudyParagraph lead>
            The core booking flow was validated through usability testing, handed off to engineering,
            and met National Rail compliance — delivered within the 8-week internship timeline.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            Two specific design failures — an overwhelming confirmation screen and a multi-step journey
            flow — were caught early because we tested under realistic time pressure. Both fixes shipped
            into the build.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            The 8-week clock also forced honest cuts. Multiple payment methods, editing journey details
            from the review screen, and the onboarding/Seat Finder experiences were scoped out and
            documented as next steps — better to ship a validated core than a half-finished everything.
          </CaseStudyParagraph>
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
    </div>
  );
};