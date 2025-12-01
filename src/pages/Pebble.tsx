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
        intro="Remote work promised freedom. It delivered isolation. As project lead at the Royal College of Art, I created Pebble—a virtual wellbeing companion born from 1,200+ worker interviews and 24 co-creation workshops. Our 'Virtual Café' concept influenced VISA's internal collaboration roadmap, proving that proactive wellbeing design drives measurable business impact."
        overview={{
          role: [
            'Project Lead & UX Researcher',
            'Designed 24 co-creation workshops',
            'Led research synthesis (1,200+ responses)',
            'UI/UX design for Pebble companion',
          ],
          timeline: 'RCA + VISA Innovation Centre (3 months)',
          recognition: 'Virtual Café influenced VISA product roadmap',
          tools: [
            'Service Design',
            'Co-creation Workshops',
            'Figma',
            'User Testing',
          ],
        }}
        heroImage="/pebble/placeholder-hero.png"
        heroImageAlt="Pebble virtual wellbeing companion"
      />

      {/* Context */}
      <CaseStudySection title="The Crisis We're Designing For">
        <CaseStudyParagraph lead>
          The numbers told a troubling story. Our research revealed that 43% of employees 
          rated their mental health between "very bad" and "fair." The percentage feeling 
          "completely happy" at work had nosedived from 26% to just 13% since February 2020.
        </CaseStudyParagraph>

        <CaseStudyStatsGrid
          stats={[
            { value: '43%', label: 'Poor Mental Health', sublabel: 'Employees surveyed' },
            { value: '13%', label: 'Completely Happy', sublabel: 'Down from 26%' },
            { value: '12%', label: 'Productivity Gain', sublabel: 'With happy employees' },
            { value: '147%', label: 'Profit Increase', sublabel: 'With engaged teams' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="The Emotional Toll">
            <CaseStudyParagraph>
              Employees reported significant stress, isolation, distraction, and feeling 
              overwhelmed. The lack of casual, in-person interactions and intensity of 
              remote work were taking a heavy toll.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="The Business Impact">
            <CaseStudyParagraph>
              Happier employees are up to 12% more productive and demonstrate 3x more 
              creativity. Engaged, happy employees enhance business profitability by up 
              to 147%.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          Our challenge: How might we proactively design for workplace happiness rather 
          than reactively treating burnout? Wellbeing isn't an HR checklist—it's a 
          competitive advantage when designed systemically.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Research */}
      <CaseStudySection title="Research & Co-Creation">
        <CaseStudyParagraph lead>
          As project lead, I guided our team through an intensive, research-driven design 
          process. We believed that truly impactful solutions require deep understanding 
          and continuous co-creation with users and stakeholders.
        </CaseStudyParagraph>

        <CaseStudyList items={[
          { title: 'Surveys & Interviews', description: '1,200+ individual responses capturing emotional journeys and core needs' },
          { title: '24 Workshops', description: 'Public and VISA Innovation Centre employees exploring happiness together' },
          { title: 'Emotional Journey Mapping', description: '"How was your week?" tools to understand the ebbs and flows' },
          { title: 'Persona Development', description: 'Data-backed personas to guide design decisions' },
        ]} />

        <CaseStudyImage
          src="/pebble/workshop.png"
          alt="Co-creation Workshop"
          caption="Co-creation session at VISA Innovation Centre"
        />
      </CaseStudySection>

      {/* The Explorer Persona */}
      <CaseStudySection title="The Explorer Persona">
        <CaseStudyParagraph lead>
          A key decision from our validation workshop: focus on the "Explorer" persona—
          someone aware of their mental status but unsure how to improve it. We found 
          other user groups often pass through an Explorer phase.
        </CaseStudyParagraph>

        <CaseStudyCard title="Meet James">
          <CaseStudyParagraph>
            James is a 28-year-old remote product designer who embodies the Explorer's 
            challenges: frustration, lack of focus, and social isolation. He knows 
            something's off but doesn't know what to do about it.
          </CaseStudyParagraph>
        </CaseStudyCard>

        <CaseStudyQuote author="Workshop Insight">
          How might we help the Explorer build a foundation of high wellbeing? This 
          question led to the core concept of different "Pebble types"—virtual companions 
          with distinct personalities.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* The Solution */}
      <CaseStudySection title="Pebble: A Tailored Happiness Assistant">
        <CaseStudyParagraph lead>
          Pebble is a virtual assistant promoting happiness and productivity through 
          personalization, focus enhancement, and social connection. Four distinct 
          Pebble personalities match different user needs.
        </CaseStudyParagraph>

        <CaseStudyImageGrid
          images={[
            { src: '/pebble/onboarding.png', alt: 'Onboarding', caption: 'Personality matching quiz' },
            { src: '/pebble/focus.png', alt: 'Focus Mode', caption: 'Deep work features' },
            { src: '/pebble/cafe.png', alt: 'Virtual Café', caption: 'Social connection' },
          ]}
          columns={3}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🎯 Personalized Matchmaking">
            <CaseStudyParagraph>
              Users find their unique Pebble companion via quiz-based matchmaking. 
              The Pebble learns and adapts through daily check-ins, building emotional 
              engagement over time.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🧠 Deep Work & Flow">
            <CaseStudyParagraph>
              Pebble helps users enter "flow" state with 1-minute cognitive exercises 
              and distraction-reducing tools, linking focused work to lasting happiness.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="☕ Virtual Café">
            <CaseStudyParagraph>
              Combats isolation by allowing employees to join or create informal coffee 
              chat rooms, recreating spontaneous office interactions. This concept 
              influenced VISA's internal roadmap.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="⏰ Healthy Boundaries">
            <CaseStudyParagraph>
              Acts as a "Happiness Assistant," gently prompting users to set work-life 
              boundaries with reminders to take breaks, log off, and reflect.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Testing Insights */}
      <CaseStudySection title="What We Learned from Testing">
        <CaseStudyParagraph lead>
          We tested our prototype with 5 participants. Their feedback shaped our 
          understanding of what remote workers actually need versus what we assumed.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="❤️ Connection Craved">
            <CaseStudyParagraph>
              Focus and coffee catch-up features resonated strongly. Employees crave 
              belonging—digital tools must actively facilitate it.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="📊 Deeper Personalization">
            <CaseStudyParagraph>
              Users wanted daily emotion checks and data tracking. They seek continuous, 
              adaptive support—not a one-off tool.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🔗 Seamless Integration">
            <CaseStudyParagraph>
              Concerns about platform fatigue. A wellbeing tool must integrate into 
              existing workflows—Teams, Slack, calendars.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Impact */}
      <CaseStudySection title="Impact & Recognition">
        <CaseStudyParagraph lead>
          Our Virtual Café concept directly influenced VISA's internal collaboration 
          feature development. Senior designers praised our research-driven approach 
          and the quality of our co-creation methodology.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="VISA Adoption">
            <CaseStudyParagraph>
              The Virtual Café concept was adopted into VISA Innovation Centre's 
              roadmap for team chat feature development, validating our approach.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Future Vision">
            <CaseStudyParagraph>
              Seamless integrations with Microsoft Teams and Slack. Enhanced features: 
              daily mood tracking, team-generated personalization, social games.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Learnings */}
      <CaseStudySection title="Key Learnings">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Wellbeing is Personal">
            <CaseStudyParagraph>
              Solutions must be adaptable and personalizable. One-size-fits-all 
              approaches fail because everyone experiences stress differently.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Co-creation is Essential">
            <CaseStudyParagraph>
              Involving users and stakeholders throughout was critical for relevance. 
              Our 24 workshops weren't just research—they were design sessions.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Small Nudges, Big Shifts">
            <CaseStudyParagraph>
              Gentle, well-timed prompts can significantly influence work culture. 
              We don't need grand interventions—just thoughtful micro-moments.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="The ROI of Happiness">
            <CaseStudyParagraph>
              Investing in wellbeing isn't soft—it's strategic. The data proves 
              that happy employees drive measurable business outcomes.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          Pebble represents more than a concept—it's a testament to design's power 
          to address complex human challenges. By starting with empathy and grounding 
          our process in research, we developed a vision for genuine workplace happiness.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Team */}
      <CaseStudySection title="Team & Acknowledgements">
        <CaseStudyParagraph>
          This project was a collaboration with Jing Qian and Zhiyuan Zheng at the 
          Royal College of Art. Special thanks to our tutor David, project partners 
          Elin and Annie, LBS student Yurika, wellbeing specialists Hugo Alistair 
          and Keyun Ruan, Mental Health Studio, and the entire VISA Innovation Team.
        </CaseStudyParagraph>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
