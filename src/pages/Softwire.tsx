import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyParagraph,
  CaseStudyInsight,
  CaseStudyList,
  CaseStudyImageGrid,
  CaseStudyCard,
  CaseStudyCardGrid,
  CaseStudyStatsGrid,
} from '@/components/case-study';

export const Softwire = () => {
  return (
    <>
      <CaseStudyLayout title="LNER App Clip">
        <CaseStudyHero
          eyebrow="Softwire × LNER, London, 2022"
          title="Designing for people running for a train"
          subtitle="An instant-ticket App Clip for LNER, co-led during my Softwire design internship"
          intro="Picture yourself hurrying through the station, checking the departure boards. There's a queue at the ticket machine, and the full app is a 200 MB download. During my internship at Softwire, another design intern and I co-led UX for LNER's App Clip: an under-10 MB experience that opens instantly, for exactly this moment."
          overview={{
            role: [
              'UX/UI designer, co-leading the project with one other design intern',
              'Drove the design process for a team of 7 developers',
              'Co-facilitated a 13-person ideation workshop',
              'Ran usability testing with 9 participants',
            ],
            timeline: '8-week summer internship, July to August 2022',
            recognition: 'Core booking flow tested and handed to engineering within the internship',
            tools: ['Ideation workshop', 'Field observation', 'Flow mapping', 'Usability testing', 'Figma', 'Apple App Clips', 'National Rail guidelines'],
          }}
          heroImage="/images/casestudies/softwire/14-5-product-final-landing.webp"
          heroImageAlt="LNER App Clip landing screen, final design"
        />

        <CaseStudySection title="Context">
          <CaseStudyParagraph lead>
            App Clips are Apple's instant experiences: under 10 MB, nothing to install, one task. That suits
            people in a hurry, but designing for someone running for a train is its own problem.
          </CaseStudyParagraph>

          <CaseStudyList items={[
            { title: 'A 10 MB limit', description: 'meant hard choices about what to include' },
            { title: 'Instant launch', description: 'meant no onboarding at all' },
            { title: 'National Rail rules', description: 'added industry requirements on top' },
          ]} />

          <CaseStudyParagraph>
            Two questions shaped the work: what information is essential, and what's too much? And how do you
            earn enough trust for someone to pay in 30 seconds?
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/softwire/10-opportunity.webp', alt: 'Journey map showing where the App Clip fits', caption: 'Where an App Clip could help in the station journey.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="Research">
          <CaseStudyParagraph lead>
            We started with an ideation workshop for 13 people: LNER stakeholders, designers, developers and
            project managers. Then we went to the station.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/softwire/3-2-workshop-crazy-8.webp', alt: 'Crazy 8s sketching in the ideation workshop', caption: 'Crazy 8s in the ideation workshop.' },
            ]}
          />

          <CaseStudyImageGrid
            columns={2}
            images={[
              { src: '/images/casestudies/softwire/4-results-of-workshop.webp', alt: 'Sketches from the workshop on the wall', caption: 'The sketches that came out of it.' },
              { src: '/images/casestudies/softwire/5-results-of-workshop-activity-2.webp', alt: 'Sticky notes sorting what information is useful', caption: 'Sorting what information people find useful, and what they would do with it.' },
            ]}
          />

          <CaseStudyParagraph>
            Desk research gave us a baseline: travellers already rated buying a ticket as easy, at{' '}
            <strong>82%</strong> (Department for Transport / TfL). So the gap wasn't paying. It was getting live
            journey information you can trust while under pressure. Passengers kept asking for information that
            was "demonstrably live".
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            Watching people at a London mainline station confirmed it. They checked the departure boards again
            and again, got anxious when the platform wasn't announced until the last minute, and fumbled with
            paper tickets or slow apps.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/softwire/9-fly-on-the-wall-pics.webp', alt: 'Photos from our station observations', caption: 'Photos from our observations at the station.' },
              { src: '/images/casestudies/softwire/8-problems-found.webp', alt: 'What users prioritised: live updates, disruptions, platform, prices and checkout', caption: 'What people told us mattered most.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="Insight">
          <CaseStudyInsight>
            On the platform, people need five things: live times, delays, the platform, the price and the journey length.
          </CaseStudyInsight>
          <CaseStudyParagraph>
            Everything else could wait, so the design started from those five.
          </CaseStudyParagraph>
        </CaseStudySection>

        <CaseStudySection title="What we made">
          <CaseStudyStatsGrid
            stats={[
              { value: '8', label: 'Weeks', sublabel: 'The whole project' },
              { value: '13', label: 'People', sublabel: 'In the ideation workshop' },
              { value: '9', label: 'Participants', sublabel: 'In usability testing' },
              { value: '7', label: 'Developers', sublabel: 'On the build team' },
            ]}
          />

          <CaseStudyCardGrid columns={2}>
            <CaseStudyCard title="Weeks 1 and 2: understanding">
              <CaseStudyParagraph>
                The workshop, affinity mapping and sketching gave one clear direction: a minimal screen with only
                the essential journey information and one fast way to buy.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Weeks 3 and 4: prototyping and testing">
              <CaseStudyParagraph>
                We tested interactive Figma prototypes with 9 people (4 friends and family, 5 Softwire
                colleagues). The task: book a return to Birmingham for one adult and one child on a 16–25
                Railcard, as if standing on the platform. Two serious problems showed up straight away.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/softwire/11-app-clip-flow-chart.webp', alt: 'App Clip booking flow chart', caption: 'Mapping the booking flow end to end.' },
              { src: '/images/casestudies/softwire/12-lofi-wireframe.webp', alt: 'Low-fidelity wireframes of the booking screens', caption: 'Low-fidelity wireframes.' },
              { src: '/images/casestudies/softwire/13-usability-testing.webp', alt: 'A remote usability testing session with the prototype', caption: 'A usability test session with the prototype.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="What changed after testing">
          <CaseStudyCardGrid columns={2}>
            <CaseStudyCard title="The ticket confirmation screen">
              <CaseStudyParagraph>
                People found the first version overwhelming: too much at once, an unclear hierarchy and
                confusing options for saving the ticket. I cut it back and rebuilt it around what people need at
                that moment, the platform number and the QR code, both visible straight away.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="The journey planning flow">
              <CaseStudyParagraph>
                The multi-step flow felt too long for an App Clip, and people couldn't easily change journey
                details halfway through. We redesigned it as one overview with inline editing: fewer taps and
                less going back.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyParagraph>
            We only found both problems by testing. From inside the team, neither was visible.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={2}
            images={[
              { src: '/images/casestudies/softwire/14-4-product-initial.webp', alt: 'The first design, before testing', caption: 'The first design, before testing.' },
              { src: '/images/casestudies/softwire/16-feedback-form.webp', alt: 'The feedback form used in each session', caption: 'How we captured feedback in each session.' },
              { src: '/images/casestudies/softwire/14-1-product-final.webp', alt: 'Reworked confirmation screen with platform number and QR code', caption: 'The reworked confirmation screen.' },
              { src: '/images/casestudies/softwire/18-notifications.webp', alt: 'Live journey notifications', caption: 'Live journey notifications.' },
            ]}
          />

          <CaseStudyParagraph>
            The final flow follows four principles:
          </CaseStudyParagraph>

          <CaseStudyList items={[
            { title: 'Open instantly', description: 'from an NFC tag or QR code at the station, with no download and no account' },
            { title: 'Show only the essentials', description: 'upcoming trains with time, price, duration, changes and delay status' },
            { title: 'Pay in one step', description: 'with Apple Pay and a single confirmation' },
            { title: 'Make the ticket easy to find', description: 'a large QR code, the platform number and Apple Wallet on the confirmation screen' },
          ]} />

          <CaseStudyImageGrid
            columns={3}
            images={[
              { src: '/images/casestudies/softwire/14-6-product-ticket-selection.webp', alt: 'Ticket selection screen', caption: 'Ticket selection' },
              { src: '/images/casestudies/softwire/14-7-product-selecting-train.webp', alt: 'Choosing a train', caption: 'Choosing a train' },
              { src: '/images/casestudies/softwire/14-8-product-checkout-page.webp', alt: 'Checkout screen with Apple Pay', caption: 'Checkout' },
              { src: '/images/casestudies/softwire/14-2-product-final.webp', alt: 'Ticket screen after purchase', caption: 'Your ticket' },
              { src: '/images/casestudies/softwire/14-3-product-final.webp', alt: 'Plan your journey screen', caption: 'Planning a journey' },
            ]}
          />

          <CaseStudyParagraph>
            In the usability sessions, the changes cut ticket checkout time by <strong>40%</strong>. The core
            booking flow passed National Rail compliance review and went to the engineering team within the
            8 weeks.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            The deadline also forced honest cuts. Multiple payment methods, editing the journey from the review
            screen, and the onboarding and Seat Finder ideas were scoped out and written up as next steps. A
            tested core was worth more than an unfinished everything.
          </CaseStudyParagraph>
        </CaseStudySection>

        <CaseStudySection title="An idea for later: the Seat Finder">
          <CaseStudyParagraph lead>
            People buying at the last minute often have no reserved seat, and finding one on a busy train is
            one more stress. I explored a Seat Finder as part of onboarding.
          </CaseStudyParagraph>

          <CaseStudyCardGrid columns={2}>
            <CaseStudyCard title="Side view">
              <CaseStudyParagraph>
                Like standing on the platform looking at the train, scrolling sideways. Possibly easier to orient
                yourself in the moment.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Plan view">
              <CaseStudyParagraph>
                The standard carriage layout, scrolling down. More information visible at once.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyParagraph>
            This was set up for an A/B test: which view would people read faster under pressure? The feature was
            parked, but the question stayed with me. Small visual decisions change how usable something is when
            people are stressed.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={2}
            images={[
              { src: '/images/casestudies/softwire/15-seat-finder.webp', alt: 'Seat Finder, first version', caption: 'Seat Finder, one version.' },
              { src: '/images/casestudies/softwire/17-seat-finder-2.webp', alt: 'Seat Finder, alternative version', caption: 'Seat Finder, the alternative.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="What I learned">
          <CaseStudyCardGrid columns={3}>
            <CaseStudyCard title="Context changes the design">
              <CaseStudyParagraph>
                What works when people are calm fails under pressure. Designing for people in a hurry needs
                different thinking, and simplifying the screens is only part of it.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Constraints help">
              <CaseStudyParagraph>
                The 10 MB limit forced decisions I wouldn't otherwise have made. Every screen had to earn its
                place, and the product was better for it.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Test in context">
              <CaseStudyParagraph>
                Both failures stayed hidden until people tried the prototype under realistic conditions. Internal
                review wouldn't have caught either.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>
        </CaseStudySection>
      </CaseStudyLayout>
    </>
  );
};
