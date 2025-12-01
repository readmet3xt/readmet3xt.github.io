import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  Paragraph,
  Quote,
  List,
  Image,
  ImageGrid,
  Card,
  CardGrid,
  StatsGrid,
} from '@/components/case-study';

export const IviProgram = () => {
  return (
    <CaseStudyLayout
      title="Invisible Value Income Program"
      description="The Hidden Workload: Reimagining Women's Work-Life Balance for 2040 - A Core77 Award-winning speculative service design project with BCG & RSM."
    >
      <CaseStudyHero
        title="The Hidden Workload: Reimagining Women's Work-Life Balance for 2040"
        pills={[
          'Speculative Design',
          'Women\'s Wellbeing',
          'Invisible Labor',
          'Future of Work',
          'Systemic Design',
          'Core77 Award Winner',
        ]}
        intro="What if the invisible labor women perform at home could be economically valued and compensated? As project lead at the Royal College of Art, I designed a Core77-award-winning speculative service that reimagines work-life balance by 2040. Through research with 79 working women and co-creation workshops with BCG, we developed the Invisible Value Income (I.V.I.) Program—a future-facing system that makes unpaid domestic work visible, measurable, and compensated."
        overview={{
          role: [
            'Project Lead & Design Strategist',
            'Led research design and synthesis (79 participant interviews)',
            'Facilitated co-creation workshops with BCG stakeholders',
            'Designed speculative service system and Sensei platform UI',
          ],
          team: 'Collaborated with 4 RCA classmates (Guoxing Song, Jing Qian, Kotoko Kimura, Zhiyuan Zheng), Fuzzy Design Studio, Royal Society of Medicine, and BCG',
          timeline: 'Royal College of Art collaborative project • 4 months',
          recognition: 'Core77 Design Awards 2021 — Notable Honor in Speculative Design',
          tools: [
            'Speculative Design',
            'Service Design',
            'Systems Thinking',
            'Ethnographic Research',
            'Co-creation Workshops',
            'Figma',
            'Journey Mapping',
            'Future Visioning',
          ],
        }}
      />

      {/* Hero Image */}
      <CaseStudySection>
        <Image
          src="/lovable-uploads/ivi-hero.jpg"
          alt="I.V.I. Program Overview"
          aspectRatio="16/9"
          priority
        />
      </CaseStudySection>

      {/* Introduction */}
      <CaseStudySection title="Introduction" delay={0.1}>
        <Paragraph>
          The modern working woman navigates a punishing intersection: professional ambitions clash with societal expectations, personal wellbeing competes with invisible domestic labor. As project lead for "A Soul at Work" at the Royal College of Art, I guided our team through an ambitious speculative design challenge: <em>How might we fundamentally reimagine our relationship with work for women by 2040?</em>
        </Paragraph>
        <Paragraph>
          I led the end-to-end research strategy, interviewing 79 working women across diverse sectors and countries to map systemic pressures. Through intensive co-creation workshops with BCG stakeholders and synthesis with wellbeing specialists, we developed the Invisible Value Income (I.V.I.) Program—a speculative government service that makes women's unpaid domestic contributions economically visible and compensated. The work earned a Core77 Design Awards Notable Honor (2021) and directly influenced BCG's internal equity research framework.
        </Paragraph>
      </CaseStudySection>

      {/* Impact Stats */}
      <CaseStudySection delay={0.15}>
        <StatsGrid
          stats={[
            { value: '79', label: 'Working Women Interviewed' },
            { value: '4', label: 'Wellbeing Specialists Consulted' },
            { value: 'Core77', label: 'Design Award Notable Honor' },
            { value: 'BCG', label: 'Framework Adopted Internally' },
          ]}
        />
      </CaseStudySection>

      {/* The Challenge */}
      <CaseStudySection title="The Challenge: The Weight of Invisible Burdens" delay={0.2}>
        <Paragraph>
          Our initial exploration focused on understanding the multifaceted pressures affecting working women's mental health. The "spark" for our project wasn't a single incident but an amalgamation of research highlighting systemic issues:
        </Paragraph>

        <CardGrid columns={2}>
          <Card title="The Mental Health Crisis">
            Globally, and particularly for women, workplace stress, anxiety, and depression are significant. Women juggling multiple roles face immense pressure, often without adequate support or recognition.
          </Card>
          <Card title="The Unpaid Work Pandemic">
            The disproportionate burden of unpaid domestic work and childcare falling on women is economically undervalued yet crucial for societal function—directly impacting women's time, energy, and career progression.
          </Card>
          <Card title="Blurred Boundaries & Role Conflict">
            The lines between private life and work domains lead to stress. Women frequently navigate conflicting expectations, leading to cognitive overload and a diminished sense of control.
          </Card>
          <Card title="The 'Working Mom' Penalty">
            The invisible sacrifice of career development for family, the devaluation of contributions in the workplace, and inequality in household responsibilities create systemic barriers.
          </Card>
        </CardGrid>

        <Paragraph>
          These challenges are not just personal—they are systemic, rooted in societal norms, workplace cultures, and economic structures that often fail to recognize and support the full spectrum of women's contributions.
        </Paragraph>

        <Image
          src="/lovable-uploads/ivi-stats.jpg"
          alt="Unpaid Work Statistics Visualization"
          aspectRatio="4/3"
        />
      </CaseStudySection>

      {/* Our Approach */}
      <CaseStudySection title="Our Approach: Deep Empathy and Future-Focused Speculation" delay={0.25}>
        <Paragraph>
          Our design process was rooted in deep empathy, extensive research, and a speculative approach to envision a more equitable future.
        </Paragraph>

        <Card title="Phase 1: Understanding the User (Discover)">
          <Paragraph>
            We conducted comprehensive research including interviews and surveys with 79 participants (working women across diverse sectors and countries) and 4 wellbeing specialists.
          </Paragraph>
          <List
            items={[
              'Stress arises from both external (workload, societal pressure) and internal (self-doubt, fear of skill obsolescence) stressors',
              'A sense of control significantly decreases stress',
              'Prevention of mental health issues is more effective than cure, yet often underfunded',
              'Working mothers lack time for self-reflection',
              'Key aspirations: Flexibility, Independence, Inclusion, Control, Support, and Self-Progress',
            ]}
          />
        </Card>

        <Image
          src="/lovable-uploads/ivi-research.jpg"
          alt="Research Process"
          aspectRatio="16/9"
        />

        <Card title="Phase 2: Defining the Persona & Problem Space">
          <Paragraph>
            To make these challenges tangible, we developed the persona of "Johanna," a 36-year-old mother juggling remote work, childcare, and household responsibilities with little personal time and a blurred work-life boundary.
          </Paragraph>
          <Paragraph>
            Johanna's pain points—no time for herself, loss of control, constant adjustment to surroundings, and lack of deep communication—encapsulated the core issues we aimed to address. The root cause circled back to the devaluation of her work at home.
          </Paragraph>
        </Card>

        <Image
          src="/lovable-uploads/ivi-persona.jpg"
          alt="Johanna Persona"
          aspectRatio="3/2"
        />

        <Card title="Phase 3: Speculating on the Future (2040)">
          <Paragraph>
            We projected these needs and challenges into a 2040 scenario, considering technological advancements (AI, IoT), evolving family structures, and changing work styles. This led to the central question:
          </Paragraph>
        </Card>

        <Quote author="Our Design Challenge">
          What if invisible value could be evaluated economically?
        </Quote>

        <Paragraph>
          This question became the cornerstone of our proposed solution. Our design principles focused on: throwing light on invisible value, encouraging equal family participation, empowering working mothers, and fostering an inclusive perspective.
        </Paragraph>
      </CaseStudySection>

      {/* The Solution */}
      <CaseStudySection title="The Solution: The Invisible Value Income (I.V.I.) Program" delay={0.3}>
        <Paragraph>
          The "Invisible Value Income (I.V.I.) Program" is a speculative governmental public program for 2040. It aims to recognize, measure, and compensate for the "invisible value" created by individuals, particularly women, outside of their formal employment—primarily in housework and childcare.
        </Paragraph>

        <CardGrid columns={3}>
          <Card title="Makes Invisible Value Visible">
            By quantifying and assigning economic worth to domestic contributions, the program seeks to shift societal perceptions and empower individuals.
          </Card>
          <Card title="Enhances Sense of Control">
            Provides individuals with data and insights into their overall life-work landscape, enabling better planning and decision-making.
          </Card>
          <Card title="Promotes Clear Self-Cognition">
            Encourages reflection on personal wellbeing, workload distribution, and life goals.
          </Card>
        </CardGrid>

        <Card title="Key Touchpoints: The 'Sensei' Platform">
          <Paragraph>
            The I.V.I. Program would be facilitated through several touchpoints, with a central digital platform called "Sensei":
          </Paragraph>
          <List
            items={[
              'Collect Invisible Value (IoT & Sensei): Work value at home is collected via IoT devices and visualized on the Sensei platform, translating into potential "invisible value income"',
              'Self-Check (Sensei, GP, I.V.I. Specialist): Users monitor their physical and mental health via Sensei, with pathways to professional support',
              'Life & Work Plan (Sensei, Manager, HR, Family): The platform facilitates conversations and planning around work-life expectations and career development',
              'Receive Invisible Value Income (I.V.I. Department): Financial compensation for the recognized invisible value',
            ]}
          />
        </Card>

        <Image
          src="/lovable-uploads/ivi-platform.jpg"
          alt="Sensei Platform Interface"
          aspectRatio="16/9"
        />

        <Image
          src="/lovable-uploads/ivi-blueprint.jpg"
          alt="I.V.I. Service Blueprint"
          aspectRatio="21/9"
        />
      </CaseStudySection>

      {/* Prototyping & Validation */}
      <CaseStudySection title="Prototyping & Validation with Stakeholders" delay={0.35}>
        <Paragraph>
          We prototyped the I.V.I. Program concept and the Sensei platform, then validated it through interviews and workshops with 9 diverse stakeholders, including working mothers, working fathers, managers, and HR specialists from different countries.
        </Paragraph>

        <Image
          src="/lovable-uploads/ivi-workshop.jpg"
          alt="Stakeholder Workshop"
          aspectRatio="3/2"
        />

        <Quote author="Miao, Working Mother, China">
          The invisible value should be paid for by the government/institutions, and that women are discriminated against more if the company pays for it.
        </Quote>

        <Quote author="Saanya, Manager, India">
          This will help us plan and manage our employees workload and timings to ensure lack of productivity at work.
        </Quote>

        <Quote author="Miriam, Germany">
          It would need to be very easy to access, otherwise it would only be the very educated women that get access to these money…
        </Quote>

        <Card title="Design Recommendations from Validation">
          <List
            items={[
              'Ensure government funding to avoid workplace discrimination',
              'Allow partial data access for employers (with user consent only)',
              'Emphasize trust-based service design with minimal data tracking',
              'Consider potential side effects: domestic work becoming transactional, privacy concerns',
            ]}
          />
        </Card>
      </CaseStudySection>

      {/* Key Learnings */}
      <CaseStudySection title="Key Learnings & Bold Insights" delay={0.4}>
        <CardGrid columns={2}>
          <Card title="The Power of Making the Invisible, Visible">
            Quantifying and acknowledging unpaid domestic labor has the potential to fundamentally shift societal valuations, individual self-worth, and power dynamics within families and workplaces.
          </Card>
          <Card title="Speculative Design as a Catalyst for Dialogue">
            Envisioning a future scenario like the I.V.I. Program, even if ambitious, opens up critical conversations about current inequalities and desired societal changes.
          </Card>
          <Card title="Wellbeing is Systemic">
            Individual mental health is deeply intertwined with broader social, cultural, and economic systems. Addressing it effectively requires systemic interventions, not just individual coping mechanisms.
          </Card>
          <Card title="Technology as an Enabler">
            While platforms like Sensei can facilitate awareness and planning, the true impact comes from the policy changes and cultural shifts they support.
          </Card>
        </CardGrid>

        <Paragraph>
          My personal key learning from this project was the transformative potential of service design to not only solve existing problems but also to provoke thought and inspire visions for a more equitable and human-centered future. The process of deeply understanding user narratives and then projecting them into a speculative future to challenge current norms was incredibly powerful.
        </Paragraph>
      </CaseStudySection>

      {/* Future Vision & Impact */}
      <CaseStudySection title="The Future Vision & Impact" delay={0.45}>
        <Paragraph>
          The I.V.I. Program, as a concept for 2040, aims to create a society where:
        </Paragraph>

        <Image
          src="/lovable-uploads/ivi-future.jpg"
          alt="2040 Vision Scenario"
          aspectRatio="16/9"
        />

        <List
          items={[
            'Working parents, especially mothers, have a greater sense of control and recognition',
            'Conversations about domestic labor and work-life balance are more open and equitable',
            'Companies foster more inclusive and genuinely supportive environments',
            'Reduced strain on mental healthcare systems and a boost in overall happiness index',
          ]}
        />

        <Quote author="Project Impact">
          The foundational research and the "6 dimensions of workplace wellbeing" framework developed during this project were utilized by B.C.G. for their internal employee affiliation workshops, demonstrating the immediate relevance and applicability of our insights.
        </Quote>
      </CaseStudySection>

      {/* Conclusion */}
      <CaseStudySection title="Conclusion" delay={0.5}>
        <Paragraph>
          "A Soul at Work" and the conceptual Invisible Value Income Program challenged us to look beyond current paradigms of work and value. By focusing on the lived experiences of working women, particularly mothers like our persona Johanna, and by speculating on a future where their "invisible" contributions are recognized and compensated, we aimed to design not just a service, but a catalyst for profound societal and personal wellbeing.
        </Paragraph>
        <Paragraph>
          The journey underscored the vital role of design in questioning norms, envisioning preferable futures, and striving for a world where everyone's work, in all its forms, is truly valued. The significance of this exploration was recognized with a Notable Honor in the Speculative Design category at the Core77 Design Awards in 2021.
        </Paragraph>
      </CaseStudySection>

      {/* The Team */}
      <CaseStudySection title="The Team & Partners" delay={0.55}>
        <CardGrid columns={3}>
          <Card title="RCA Group 5">
            Amaan Khan, Guoxing Song, Jing Qian, Kotoko Kimura, Zhiyuan Zheng
          </Card>
          <Card title="Project Partners">
            Fuzzy Design Studio, The Royal Society of Medicine (R.S.M.)
          </Card>
          <Card title="Co-creation Partner">
            B.C.G. (Boston Consulting Group)
          </Card>
        </CardGrid>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};