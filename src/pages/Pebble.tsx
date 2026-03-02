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

export const Pebble = () => {
  return (
    <CaseStudyLayout
      title="Pebble"
      description="What If Workplace Happiness Was Designed, Not Hoped For? A VISA-backed virtual companion that transforms how remote teams combat isolation."
    >
      <CaseStudyHero
        title="What If Workplace Happiness Was Designed, Not Hoped For?"
        subtitle="A VISA-backed virtual companion that transforms how remote teams combat isolation"
        pills={[
          'Service Design',
          'Employee Wellbeing',
          'VISA Innovation',
          'RCA Group Project',
          'Virtual Companion',
        ]}
        intro="Remote work promised freedom. It delivered isolation. As project lead at the Royal College of Art, I created Pebble — a virtual wellbeing companion born from 1,200+ worker interviews and 24 co-creation workshops. Our Virtual Café concept influenced VISA's internal collaboration roadmap, proving that proactive wellbeing design drives measurable business impact."
        overview={{
          role: [
            'Project Lead & UX Researcher',
            'Designed and facilitated 24 co-creation workshops',
            'Led research synthesis across 1,200+ responses',
            'Owned UI/UX design for the Pebble companion',
          ],
          timeline: '3 months, RCA + VISA Innovation Centre, January–June 2021',
          recognition: 'Virtual Café concept adopted into VISA roadmap',
          tools: [
            'Service Design',
            'Co-creation Workshops',
            'Figma',
            'User Testing',
          ],
        }}
        heroImage="/images/casestudies/pebble/hero.png"
        heroImageAlt="Pebble virtual wellbeing companion"
      />

      {/* The Crisis */}
      <CaseStudySection title="The Crisis We Were Designing For">
        <CaseStudyParagraph lead>
          The numbers told a troubling story before we'd designed a single screen.
        </CaseStudyParagraph>

        <CaseStudyStatsGrid
          stats={[
            { value: '43%', label: 'Poor Mental Health', sublabel: 'Employees surveyed' },
            { value: '13%', label: 'Completely Happy', sublabel: 'Down from 26%' },
            { value: '12%', label: 'More Productive', sublabel: 'With happy employees' },
            { value: '147%', label: 'Higher Profitability', sublabel: 'With engaged teams' },
          ]}
        />

        <CaseStudyQuote>
          How might we proactively design for workplace happiness rather than reactively treating burnout?
          Wellbeing isn't an HR checklist — it's a competitive advantage when designed systemically.
        </CaseStudyQuote>

        <CaseStudyImage
          src="/images/casestudies/pebble/image-1.png"
          alt="The remote work wellbeing crisis"
          caption="Data-driven understanding of the remote work mental health challenge"
        />
      </CaseStudySection>

      {/* Research & Co-Creation */}
      <CaseStudySection title="Research & Co-Creation">
        <CaseStudyParagraph lead>
          We believed you can't design for emotional needs without deeply understanding them first.
          So before any solution work, we built a research foundation I'm still proud of.
        </CaseStudyParagraph>

        <CaseStudyList items={[
          { title: '1,200+ survey responses', description: 'Capturing emotional journeys and core needs' },
          { title: '24 co-creation workshops', description: 'Public participants and VISA Innovation Centre employees' },
          { title: 'Emotional journey mapping', description: '"How was your week?" tools to understand weekly rhythm of remote work stress' },
          { title: 'Data-backed personas', description: 'Developed from synthesis across all research' },
        ]} />

        <CaseStudyParagraph>
          The workshops weren't just research — they were design sessions. Participants shaped the direction
          alongside us, which meant the eventual solution had genuine co-authorship from the people it was built for.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/pebble/image-2.png"
          alt="Co-creation workshops at VISA"
          caption="24 co-creation workshops with participants and VISA Innovation Centre employees"
        />
      </CaseStudySection>

      {/* The Explorer Persona */}
      <CaseStudySection title="The Explorer Persona">
        <CaseStudyParagraph lead>
          A pivotal decision from our validation workshop: focus on the "Explorer" — someone aware
          their mental wellbeing is suffering but unsure what to do about it. We found this wasn't
          a niche user type. Almost every other user group passes through an Explorer phase at some point.
        </CaseStudyParagraph>

        <CaseStudyCard title="Meet James">
          <CaseStudyParagraph>
            A 28-year-old remote product designer. Frustrated, distracted, socially isolated.
            He knows something's off. He doesn't know how to fix it.
          </CaseStudyParagraph>
        </CaseStudyCard>

        <CaseStudyQuote>
          How might we help the Explorer build a foundation of high wellbeing? This question led directly
          to the concept of different Pebble types — virtual companions with distinct personalities.
        </CaseStudyQuote>

        <CaseStudyImage
          src="/images/casestudies/pebble/image-3.png"
          alt="The Explorer persona — James"
          caption="Persona development driven by data synthesis across 1,200+ responses"
        />
      </CaseStudySection>

      {/* The Solution: Pebble */}
      <CaseStudySection title="The Solution: Pebble">
        <CaseStudyParagraph lead>
          Pebble is a virtual assistant that promotes happiness and productivity through personalisation,
          focus enhancement, and social connection. Four distinct Pebble personalities match different
          user needs — matched through an onboarding quiz that continues learning through daily check-ins.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🎯 Personalised Matchmaking">
            <CaseStudyParagraph>
              Quiz-based companion matching that adapts over time. Emotional engagement built through
              continuity, not novelty.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="🧠 Deep Work & Flow">
            <CaseStudyParagraph>
              1-minute cognitive exercises and distraction-reducing tools to help users enter flow state.
              Connecting focused work to lasting happiness rather than treating them as opposites.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="☕ Virtual Café">
            <CaseStudyParagraph>
              The feature that changed everything. Informal coffee chat rooms that recreate the spontaneous
              social interactions remote work eliminates. Employees join or create rooms, conversations happen,
              isolation decreases. This concept directly influenced VISA's internal collaboration roadmap.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="⏰ Healthy Boundaries">
            <CaseStudyParagraph>
              Gentle prompts to take breaks, log off, and reflect. Wellbeing as ongoing habit, not one-off intervention.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/pebble/image-4.png"
          alt="Pebble companion interface"
          caption="Four core features emerged directly from research, not assumptions"
        />
      </CaseStudySection>

      {/* What Testing Taught Us */}
      <CaseStudySection title="What Testing Taught Us">
        <CaseStudyParagraph lead>
          Five participants tested the prototype. Three things we assumed were wrong.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="❤️ Connection was the priority">
            <CaseStudyParagraph>
              Focus tools were valued, but coffee catch-up features resonated most strongly.
              People crave belonging. Digital tools have to actively create it, not just enable it.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="📊 Personalisation needed to be continuous">
            <CaseStudyParagraph>
              Users wanted daily emotion tracking and adaptive support over time. A one-off
              onboarding quiz wasn't enough. Pebble needed to keep learning.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="🔗 Platform fatigue is real">
            <CaseStudyParagraph>
              The most consistent concern was adding yet another tool. A wellbeing product that
              doesn't integrate into Teams, Slack, and existing calendars will be abandoned regardless
              of how good it is.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/pebble/image-5.png"
          alt="User testing insights"
          caption="Testing revealed what remote workers actually need versus what we assumed"
        />
      </CaseStudySection>

      {/* Impact & Recognition */}
      <CaseStudySection title="Impact & Recognition">
        <CaseStudyParagraph lead>
          Our Virtual Café concept was adopted into VISA Innovation Centre's roadmap for team chat
          feature development. Senior designers at VISA praised both the research-driven approach
          and the co-creation methodology specifically — not just the output, but how we got there.
        </CaseStudyParagraph>

        <CaseStudyQuote author="Elin Sjursen" role="Senior Design Strategy Director, VISA">
          Amaan was not only proactive in managing his stakeholders and bringing together the right
          people at the right time in the design thinking process, his thoughts, analysis of the
          insight and creative output was thoughtful, articulate and incredibly creative.
        </CaseStudyQuote>

        <CaseStudyImage
          src="/images/casestudies/pebble/image-6.png"
          alt="VISA Innovation Centre collaboration"
          caption="Virtual Café concept adopted into VISA's internal collaboration roadmap"
        />
      </CaseStudySection>

      {/* What I Learned */}
      <CaseStudySection title="What I Learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Wellbeing is personal, not universal">
            <CaseStudyParagraph>
              One-size-fits-all fails because stress is experienced differently by everyone.
              Adaptability isn't a nice-to-have in this space. It's the product.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Co-creation is not a methodology, it's a mindset">
            <CaseStudyParagraph>
              24 workshops sounds like a lot until you see how much better the output is when users
              shape the solution alongside you rather than react to it afterwards.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Small nudges, big shifts">
            <CaseStudyParagraph>
              The most impactful features weren't grand interventions. They were gentle, well-timed
              micro-moments. A coffee chat invite. A reminder to log off. Design doesn't have to be
              dramatic to change behaviour.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="The ROI of happiness is measurable">
            <CaseStudyParagraph>
              147% profit increase with engaged teams isn't a soft claim. Framing wellbeing as a
              business outcome, not just an HR concern, was what got VISA's attention.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* The Team */}
      <CaseStudySection title="The Team">
        <CaseStudyParagraph>
          Collaboration with Jing Qian and Zhiyuan Zheng at the Royal College of Art. With thanks to
          tutor David, project partners Elin and Annie, LBS student Yurika, wellbeing specialists Hugo
          Alistair and Keyun Ruan, Mental Health Studio, and the VISA Innovation Team.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/pebble/image-7.png"
          alt="The Pebble team"
          caption="A collaborative effort across RCA, VISA, and wellbeing specialists"
        />
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
