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
} from '@/components/case-study';

export const JollyAI = () => {
  return (
    <CaseStudyLayout title="Jolly AI">
      <CaseStudyHero
        title="Designing Transparency into Legal AI"
        subtitle="How I transformed a 'black box' chatbot into a trusted legal workspace"
        pills={[
          'Legal Tech',
          'AI UX',
          'Transparency Design',
          'Freelance',
          'Figma',
        ]}
        intro="Legal professionals don't trust AI—and for good reason. When I took on this freelance project, my challenge was clear: design an AI assistant that lawyers would actually use. The answer wasn't better AI; it was better transparency. By visualizing the AI's reasoning process, I turned skepticism into trust."
        overview={{
          role: [
            'Freelance Product Designer',
            'UX Strategy & Information Architecture',
            'Interface Design & Visual Identity',
            'User Flow & Interaction Design',
          ],
          timeline: 'Freelance Project',
          tools: [
            'Figma',
            'User Research',
            'Interaction Design',
            'Design Systems',
          ],
        }}
        heroImage="/jollyai/jollyai8.png"
        heroImageAlt="Jolly AI transparent legal assistant workspace"
      />

      {/* The Challenge */}
      <CaseStudySection title="The Challenge">
        <CaseStudyParagraph lead>
          Legal professionals are deeply skeptical of AI. "Hallucinations"—confidently stated 
          falsehoods—could end careers. My client needed a design that prioritized trust, 
          accuracy, and customization for lawyers practicing in India's complex legal system.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Trust Problem">
            <CaseStudyParagraph>
              Standard AI chatbots are "black boxes"—you get an answer but have no idea how it 
              arrived there. For lawyers, citing a non-existent case or misinterpreting a statute 
              isn't just embarrassing; it's malpractice.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Design Requirements">
            <CaseStudyList items={[
              { title: 'Build Trust', description: 'Visualize AI reasoning so lawyers can verify accuracy' },
              { title: 'Ensure Precision', description: 'Control legal tone for different contexts' },
              { title: 'Handle Jurisdiction', description: 'Account for India\'s state-specific laws' },
              { title: 'Streamline Workflow', description: 'Reduce friction in common legal tasks' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* The Key Insight */}
      <CaseStudySection title="The Key Insight: Glass Box UX">
        <CaseStudyParagraph lead>
          The breakthrough came when I realized the problem wasn't AI accuracy—it was AI 
          opacity. Lawyers don't need AI to be perfect; they need to verify it themselves. 
          I designed a "Glass Box" experience that shows its work.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/jollyai/jollyai1.png"
          alt="The Thinking Panel showing AI's internal workflow"
          caption="The 'Thinking' Panel displays the AI's reasoning process in real-time"
        />

        <CaseStudyCard title="The 'Thinking' Panel">
          <CaseStudyParagraph>
            Before generating an answer, the UI displays the AI's internal workflow: Query 
            Reframing, Clarification, and Legal Index Framework Review. Lawyers can see 
            exactly which statutes the AI is referencing (e.g., Section 56(2) of the Income 
            Tax Act) before trusting the output.
          </CaseStudyParagraph>
        </CaseStudyCard>

        <CaseStudyQuote>
          The moment I showed lawyers they could watch the AI "think"—and catch mistakes 
          before they happened—their skepticism transformed into genuine interest.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Context & Customization */}
      <CaseStudySection title="Context & Customization">
        <CaseStudyParagraph lead>
          Law requires precise tone control. A generic "helpful" response won't work for a 
          stern legal notice, a client email, or a court filing. I designed systems that 
          give lawyers complete control.
        </CaseStudyParagraph>

        <CaseStudyImageGrid
          images={[
            { src: '/jollyai/jollyai2.png', alt: 'Instruction Modal', caption: 'Custom tone and context settings' },
            { src: '/jollyai/jollyai3.png', alt: 'State Onboarding', caption: 'Jurisdictional accuracy from day one' },
          ]}
          columns={2}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Instruction Modal">
            <CaseStudyParagraph>
              I designed an "Add Instructions" feature directly in the chat input. Users can 
              set global parameters like "Keep it concise" or "Use formal legal terminology" 
              that the AI remembers across sessions.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="State-Specific Onboarding">
            <CaseStudyParagraph>
              Laws in India vary significantly by state. The onboarding flow includes mandatory 
              state selection (e.g., Telangana) to ensure jurisdictional accuracy from the 
              very first query.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Streamlined Workflow */}
      <CaseStudySection title="Streamlined Workflow">
        <CaseStudyParagraph lead>
          Legal professionals juggle dozens of cases simultaneously. I designed features 
          that eliminate the "blank page problem" and make case management effortless.
        </CaseStudyParagraph>

        <CaseStudyImageGrid
          images={[
            { src: '/jollyai/jollyai5.png', alt: 'Prompt Gallery', caption: 'Curated legal-specific prompts' },
            { src: '/jollyai/jollyai6.png', alt: 'Side Panel Navigation', caption: 'Quick case switching' },
          ]}
          columns={2}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Prompt Gallery">
            <CaseStudyParagraph>
              The home screen features curated legal-specific prompts: "Draft IT notice 
              response," "Outline M&A due diligence," "Summarize contract risks." No 
              more staring at an empty chat wondering where to start.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Side Panel Navigation">
            <CaseStudyParagraph>
              A clean, collapsible sidebar allows lawyers to jump between different cases 
              and chat threads instantly. Essential for professionals managing multiple 
              clients with overlapping deadlines.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Visual Identity */}
      <CaseStudySection title="Visual Identity">
        <CaseStudyImage
          src="/jollyai/jollyai7.png"
          alt="Jolly AI Visual Identity"
          caption="Minimalist, high-contrast design conveying professionalism and authority"
        />

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="Minimalist & Professional">
            <CaseStudyParagraph>
              Stark black, white, and gray palette conveys the seriousness legal 
              professionals expect. No playful colors or casual aesthetics.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Functional Typography">
            <CaseStudyParagraph>
              High readability for long-form legal content. Typography prioritizes 
              clarity over personality—lawyers read thousands of words daily.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Status Indicators">
            <CaseStudyParagraph>
              Subtle color cues (the yellow "Thinking..." pill) provide immediate 
              system feedback without cluttering the clean interface.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Outcome */}
      <CaseStudySection title="The Outcome">
        <CaseStudyParagraph lead>
          The final Figma prototypes delivered a cohesive experience that addresses 
          the specific pain points of legal practitioners: verifiable accuracy and 
          stylistic control. A generic chatbot became a specialized legal workspace.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🔍 Transparency First">
            <CaseStudyParagraph>
              Created a "glass box" experience where lawyers verify AI reasoning before 
              trusting outputs—addressing the core trust issue in legal AI.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🎯 Precise Control">
            <CaseStudyParagraph>
              Customization features give exact control over tone, terminology, and 
              context for different legal scenarios.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="📍 Jurisdictional Accuracy">
            <CaseStudyParagraph>
              State-specific onboarding ensures legal advice is accurate for India's 
              varied regional legal frameworks from the first interaction.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="⚡ Workflow Optimization">
            <CaseStudyParagraph>
              Prompt galleries and efficient navigation streamline common tasks 
              and multi-case management.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Reflection */}
      <CaseStudySection title="Reflection">
        <CaseStudyQuote>
          This project taught me that designing for trust is fundamentally different from 
          designing for usability. Sometimes the best UX isn't hiding complexity—it's 
          revealing it in a way that empowers users to make informed decisions.
        </CaseStudyQuote>

        <CaseStudyParagraph>
          The legal tech space is growing rapidly, but adoption hinges on trust. By 
          prioritizing transparency over polish, Jolly AI demonstrates how thoughtful 
          UX design can bridge the gap between AI capability and professional confidence.
        </CaseStudyParagraph>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
