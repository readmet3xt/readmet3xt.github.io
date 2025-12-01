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
      description="Designing for Users Running to Catch Trains - How I led UX design for LNER's instant ticket booking experience during my Softwire internship."
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
        intro="You're sprinting through the station, dodging crowds, watching platform boards nervously. You reach the ticket kiosk—there's a queue. You try downloading the app—it's 200MB. The departure countdown ticks. During my Softwire internship, I led design for LNER's App Clip—a sub-10MB, instant-launch solution for this exact nightmare."
        overview={{
          role: [
            'Solo UX/UI Designer',
            'Led 7 developers through design process',
            'Facilitated workshop with 13 stakeholders',
            'Conducted usability testing with 9 participants',
          ],
          timeline: '8-week Summer Internship',
          recognition: 'Core booking flow validated and developed',
          tools: [
            'Figma',
            'Usability Testing',
            'Apple App Clip',
            'National Rail Guidelines',
          ],
        }}
        heroImage="/softwire/heroimage.webp"
        heroImageAlt="LNER App Clip interface"
      />

      {/* The Context */}
      <CaseStudySection title="The Challenge">
        <CaseStudyParagraph lead>
          App Clips are Apple's answer to instant-launch experiences: sub-10MB, focused 
          on single tasks, requiring no installation. Perfect for time-pressured contexts. 
          But how do you design for users literally running to catch trains?
        </CaseStudyParagraph>

        <CaseStudyQuote>
          What information is essential versus overwhelming? How do you build trust for 
          payment in 30 seconds? These became the core design questions that shaped every decision.
        </CaseStudyQuote>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="User Research Insights">
            <CaseStudyList items={[
              { title: 'Information Overload', description: 'Travelers craved "demonstrably live" data, not generic info' },
              { title: 'Key Priorities', description: 'Live times, delays, platform details, prices, duration' },
              { title: 'Station Stress', description: 'Queues, late platform announcements, navigation anxiety' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Design Constraints">
            <CaseStudyList items={[
              { title: 'Sub-10MB Size', description: 'Ruthless prioritization required' },
              { title: 'Instant Launch', description: 'No onboarding, no learning curve' },
              { title: 'National Rail Compliance', description: 'Industry guidelines to follow' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Research */}
      <CaseStudySection title="Research & Discovery">
        <CaseStudyParagraph lead>
          I started with an ideation workshop involving 13 participants—LNER stakeholders, 
          designers, developers, and project managers. Then took research to the field.
        </CaseStudyParagraph>

        <CaseStudyImageGrid
          images={[
            { src: '/softwire/fieldresearch1.webp', alt: 'Field Research', caption: 'Station observation at St. Pancras' },
            { src: '/softwire/fieldresearch2.webp', alt: 'Research Notes', caption: 'User journey mapping' },
          ]}
          columns={2}
        />

        <CaseStudyParagraph>
          "Fly-on-the-wall" observations at St. Pancras confirmed the stress points: users 
          checking platform boards repeatedly, anxiety spiking when platforms weren't 
          announced until the last minute, fumbling with paper tickets or slow apps.
        </CaseStudyParagraph>
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

        <CaseStudyImage
          src="/softwire/ideationworkshop1.webp"
          alt="Ideation Workshop"
          caption="Workshop affinity mapping with cross-functional team"
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Week 1-2: Understanding">
            <CaseStudyParagraph>
              Ideation workshop, affinity mapping, sketching exercises. A key idea emerged: 
              simple interface showing essential journey info with quick buy option.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Week 3-4: Prototyping">
            <CaseStudyParagraph>
              Interactive Figma prototypes tested with 9 participants. Task: book a return 
              ticket to Birmingham for 1 adult, 1 child with railcard. Revealed crucial pain points.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/softwire/appflow.webp"
          alt="User Flow"
          caption="Task flow evolution from low-fidelity to high-fidelity screens"
        />
      </CaseStudySection>

      {/* Key Iterations */}
      <CaseStudySection title="Key Iterations">
        <CaseStudyParagraph lead>
          Usability testing revealed critical issues. Two areas required major rethinking:
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Ticket Confirmation Screen">
            <CaseStudyParagraph>
              Users found the initial screen overwhelming. They needed clearer platform 
              information and simpler ticket-saving options. I refined the hierarchy and 
              streamlined calls to action.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Journey Planning Flow">
            <CaseStudyParagraph>
              The initial multi-step flow felt too long for an App Clip. Users couldn't 
              easily edit journey details. Redesigned to a quicker, single-overview approach 
              with inline editing.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* The Solution */}
      <CaseStudySection title="The Solution">
        <CaseStudyImage
          src="/softwire/earlyconcept.webp"
          alt="Final App Clip Design"
          caption="Streamlined booking flow designed for speed"
        />

        <CaseStudyList items={[
          { title: 'Instant Access', description: 'Launch via NFC tags or QR codes at station—no download required' },
          { title: 'Quick Journey Planning', description: 'Simplified interface with pre-filled location data where possible' },
          { title: 'Clear Options', description: 'Upcoming trains with key info: time, price, duration, changes. Filters for cheapest/fastest' },
          { title: 'Effortless Payment', description: 'Apple Pay integration for rapid checkout' },
          { title: 'Accessible Ticket', description: 'Prominent QR code, platform number, Apple Wallet integration' },
        ]} />
      </CaseStudySection>

      {/* Seat Finder Concept */}
      <CaseStudySection title="Beyond Booking: Seat Finder Concept">
        <CaseStudyParagraph lead>
          Last-minute buyers often don't have reserved seats. Finding an available seat 
          on a busy train adds stress. I explored a Seat Finder feature as part of the 
          onboarding experience.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Option A: Side Profile">
            <CaseStudyParagraph>
              Mimics user's view standing on the platform. Horizontal scrolling across 
              the train. Potentially easier orientation for matching real-world view.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Option B: Plan View">
            <CaseStudyParagraph>
              Industry-standard layout showing internal structure. Vertical scrolling 
              through carriages. More information on screen at once.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          This presented a perfect A/B testing opportunity—which graphical representation 
          would users interpret more quickly in real-world stress conditions?
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Learnings */}
      <CaseStudySection title="Key Learnings">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Context is King">
            <CaseStudyParagraph>
              Designing for stressed, rushing users requires extreme simplification. 
              What works in relaxed settings fails under pressure.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="App Clips Demand Focus">
            <CaseStudyParagraph>
              The sub-10MB limit forces ruthless prioritization. Every screen, every 
              interaction must serve the core task efficiently.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Visual Choices Matter">
            <CaseStudyParagraph>
              The Seat Finder exploration showed how "small" visual choices (side vs. 
              plan view) significantly impact usability. Test assumptions in context.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Iteration Isn't Optional">
            <CaseStudyParagraph>
              Direct user feedback identified flaws I couldn't see. The confusing 
              confirmation screen and lengthy journey planning only surfaced through testing.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Reflection */}
      <CaseStudySection title="Reflection">
        <CaseStudyParagraph lead>
          This internship taught me that designing for context-specific needs—especially 
          under time pressure—requires fundamentally different thinking than standard 
          app design.
        </CaseStudyParagraph>

        <CaseStudyParagraph>
          The core booking flow was successfully developed and met National Rail guidelines. 
          Some features like Seat Finder were parked for future development, but the 
          foundation was solid. Collaborating with a cross-functional team to take an 
          idea from research through functional prototype was an invaluable experience.
        </CaseStudyParagraph>

        <CaseStudyQuote>
          Grounding design in user research—from workshop insights to station observations 
          to usability testing—we created a streamlined experience tailored to the stressful 
          station environment. Hopefully making future journeys a little less stressful.
        </CaseStudyQuote>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};