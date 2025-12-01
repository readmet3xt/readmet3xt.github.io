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

export const Stampede = () => {
  return (
    <CaseStudyLayout
      title="Stampede"
      description="Designing Strategic Partnerships for Conservation Impact - A methodology that transforms random conservation partnerships into designed collaborations with Airbnb & WWT."
    >
      <CaseStudyHero
        title="Stampede: Designing Strategic Partnerships for Conservation Impact"
        pills={[
          'Conservation',
          'Strategic Partnerships',
          'Design Thinking',
          'Workshop Facilitation',
          'Systems Design',
          'Royal College of Art',
        ]}
        intro={`"This was 100 times more productive than any partnership meeting I've had." That's how WWT's Senior Partnerships Manager described my facilitation framework. As project lead at the Royal College of Art, I designed Stampede—a strategic matchmaking methodology that transforms random conservation partnerships into designed collaborations. Using Power/Pace matrices and animal archetypes, I facilitated the WWT × Airbnb partnership that stakeholders called revolutionary for conservation collaboration.`}
        overview={{
          role: [
            'Project Lead & Service Designer',
            'Led research with WWF, WWT, Imperial College stakeholders',
            'Designed Stampede methodology (Power/Pace matrix, animal archetypes)',
            'Facilitated 3-hour WWT × Airbnb co-creation workshop',
          ],
          team: 'Collaborated with Anahita Pradhan, Andrew Seetoh, Constance Cheung (RCA)',
          timeline: 'Royal College of Art collaborative project • 4 months',
          recognition: 'WWT × Airbnb partnership created; stakeholders reported "100x more productive" meetings using framework',
          tools: [
            'Service Design',
            'Systems Thinking',
            'Workshop Facilitation',
            'Stakeholder Research',
            'Framework Design',
            'Co-creation Methods',
            'Service Blueprinting',
          ],
        }}
      />

      {/* Hero Image */}
      <CaseStudySection>
        <Image
          src="/lovable-uploads/stampede-hero.jpg"
          alt="Stampede Conservation Partnership Workshop"
          aspectRatio="16/9"
          priority
        />
      </CaseStudySection>

      {/* Introduction */}
      <CaseStudySection title="Introduction" delay={0.1}>
        <Paragraph>
          Wildlife conservation has a hidden crisis: billions in unspent funding, game-changing partnerships formed by "happy accidents," and corporate advocates who disappear when they change jobs. The sector is passionate and driven, yet systematically inefficient at connecting resources to impact. As project lead for a Royal College of Art team, I saw this as a design challenge: <em>What if strategic partnerships could be designed, not left to luck?</em>
        </Paragraph>
        <Paragraph>
          I led the creation of "Stampede"—a matchmaking methodology that transforms how conservation organizations find and forge partnerships. Through research with WWF, WWT, and Imperial College, plus facilitation of a landmark WWT × Airbnb collaboration workshop, we developed a framework using Power/Pace matrices and animal archetypes to strategically connect unlikely partners. The result: stakeholders reporting "100x more productive" meetings and a methodology adopted for ongoing partnership development.
        </Paragraph>
      </CaseStudySection>

      {/* Impact Stats */}
      <CaseStudySection delay={0.15}>
        <StatsGrid
          stats={[
            { value: '100x', label: 'More Productive Meetings' },
            { value: 'WWT × Airbnb', label: 'Partnership Facilitated' },
            { value: '7', label: 'Animal Archetypes Created' },
            { value: '3hrs', label: 'Workshop Sprint Format' },
          ]}
        />
      </CaseStudySection>

      {/* The Challenge */}
      <CaseStudySection title="The Challenge: Unlocking Latent Potential in Conservation" delay={0.2}>
        <Paragraph>
          Our investigation into the conservation sector, which included interviews with leaders from organizations like WWF, Wildfowl Wetlands Trust (WWT), and academics from Imperial College, revealed a landscape ripe with opportunity but also fraught with systemic friction. This became the "spark" for our project.
        </Paragraph>

        <Card title="Untapped Financial Resources">
          <Paragraph>
            A significant insight was that "a lot of money [is] lying around which isn't being spent." Large organizations often struggle with the effective allocation of funds to the most pressing causes or the most capable parties.
          </Paragraph>
          <Quote author="WWF, Head of Strategic Communications and Partnerships">
            A lot of big organisations like the WWF or DEFRA struggle with allocating funds… The money is left unspent.
          </Quote>
        </Card>

        <Card title="Collaboration is Standard, but Ad Hoc">
          <Paragraph>
            While partnerships are the norm and crucial for success, many "form out of luck" or "happy accidents" rather than through a structured, strategic approach.
          </Paragraph>
          <Quote author="Visitor Centre Development, Wildfowl Wetlands Trust">
            Happy accidents lead to partnerships e.g. with HSBC.
          </Quote>
        </Card>

        <Card title="The Matchmaking Dilemma">
          <Paragraph>
            Finding the right people and organizations to team up with is a significant hurdle in the sector.
          </Paragraph>
          <Quote author="Wildlife Biologist, Founder of Key Conservation">
            There are so many people out there who have similar interests, but connecting them is tough.
          </Quote>
        </Card>

        <Card title="The Fragility of Advocacy">
          <Paragraph>
            Corporate support often depends heavily on individual champions within those companies. If an advocate leaves, the partnership and funding can dissolve.
          </Paragraph>
          <Quote author="Ecosystem Researcher, Wildfowl Wetlands Trust">
            We had a great relationship with a corporate, but when that person left the organisation, we lost the advocate and support.
          </Quote>
        </Card>

        <Paragraph>
          Our problem statement therefore became: How can Stampede spur innovative action by catalysing partnerships within the conservation industry? And in doing so, how could it link previously disconnected organizations, utilize restricted income, and create long-term advocates?
        </Paragraph>
      </CaseStudySection>

      {/* Stakeholder Research */}
      <CaseStudySection delay={0.25}>
        <Image
          src="/lovable-uploads/stampede-research.jpg"
          alt="Stakeholder Research & Interviews"
          aspectRatio="16/9"
        />
      </CaseStudySection>

      {/* Our Approach */}
      <CaseStudySection title="Our Approach: A Design-Led Framework for Catalysing Partnerships" delay={0.3}>
        <Paragraph>
          Inspired by the way Stampede (the client) had teamed up with the RCA for innovative solutions, we proposed that Stampede could play a similar facilitation and match-making role within the conservation sector itself. Our approach was to develop a service that could intelligently connect and facilitate meaningful collaborations between curated parties for targeted conservation causes.
        </Paragraph>

        <Card title="1. Conceptualizing the 'Stampede' Methodology">
          <Paragraph>
            We envisioned "Stampede" not just as a one-off event, but as a holistic process. This involved a "People, Experience, Outcome, Follow-up" framework:
          </Paragraph>
          <List
            items={[
              'People: Connecting organizations and inspiring individuals',
              'Experience: Curating impactful engagements like expeditions, hackathons, and workshops',
              'Outcome: Enabling tangible results like new solutions, action plans, and proposals',
              'Follow-up: Ensuring momentum through continued engagement',
            ]}
          />
        </Card>

        <Card title="2. Creative Match-Making: The Power/Pace Matrix & Animal Archetypes">
          <Paragraph>
            A core part of our strategy was "Creative Match-Making." We recognized that different organizations operate with varying levels of Power (influence, resources) and Pace (speed of decision-making and execution). To make these characteristics more tangible and relatable, we developed a set of animal archetypes:
          </Paragraph>
        </Card>

        <ImageGrid
          images={[
            { src: '/lovable-uploads/stampede-matrix.jpg', alt: 'Power/Pace Matrix Visualization', aspectRatio: '1/1' },
            { src: '/lovable-uploads/stampede-archetypes.jpg', alt: 'Animal Archetype Icons', aspectRatio: '1/1' },
          ]}
        />

        <CardGrid columns={2}>
          <Card title="🦭 Walrus (e.g., WWF)">
            Global charitable organization; large, careful of brand, sometimes slow due to layers.
          </Card>
          <Card title="🐅 Tiger (e.g., Apple)">
            Large tech company; fast-moving, innovative, resource-rich.
          </Card>
          <Card title="🐑 Sheep (e.g., Thames Water)">
            Large traditional corporate; often follows others, slower decision-making.
          </Card>
          <Card title="🐝 Bumblebee (e.g., Giki)">
            Small conservation startup; innovative, agile, but limited reach/cash flow.
          </Card>
          <Card title="🪱 Worm (e.g., WWT)">
            Grassroots conservation organization; local reach, cash-strapped, vital on-the-ground impact.
          </Card>
          <Card title="🐙 Octopus (e.g., EY)">
            Large multinational corporate; analytical, many arms, can move quickly on projects.
          </Card>
        </CardGrid>

        <Paragraph>
          The insight here was that Stampede should target partnerships that complement the Power and Pace of different organizations, often connecting those who wouldn't typically collaborate (e.g., a high-power, low-pace "Walrus" with a low-power, high-pace "Bumblebee").
        </Paragraph>

        <Card title="3. Tailoring the Service: Partnership Stages">
          <Paragraph>
            We understood that organizations need help at various stages of the partnership journey. Stampede's service was designed to be flexible, offering support in:
          </Paragraph>
          <List
            items={[
              'Purpose Finding',
              'Match-Making',
              'Connecting',
              'Kicking-Off (Running a Stampede workshop)',
              'Project Execution',
              'Measuring Outcome',
            ]}
          />
        </Card>

        <Image
          src="/lovable-uploads/stampede-framework.jpg"
          alt="Service Framework & Partnership Stages"
          aspectRatio="21/9"
        />
      </CaseStudySection>

      {/* Prototyping in Action */}
      <CaseStudySection title="Prototyping in Action: The WWT × Airbnb Workshop" delay={0.35}>
        <Paragraph>
          To test and refine our methodology, we prototyped a "Stampede" kick-off workshop. WWT had expressed that Airbnb was a "dream partner." We facilitated a 3-hour session with key representatives: Holly Bland (Social Impact Experience Manager, Airbnb) and Nick Appleby (Senior Partnerships Manager, WWT).
        </Paragraph>

        <CardGrid columns={3}>
          <Card title="Unpacking (40 mins)">
            Introductions, building trust, goal setting, reflecting on organizational strengths.
          </Card>
          <Card title="Sketching (60 mins)">
            Idea generation using Crazy 8's on "How might Airbnb and WWT create an authentic wetlands experience?"
          </Card>
          <Card title="Solutioning (70 mins)">
            Developing an action plan, discussing practical considerations, and identifying challenges.
          </Card>
        </CardGrid>

        <ImageGrid
          images={[
            { src: '/lovable-uploads/stampede-workshop1.jpg', alt: 'Workshop in Progress', aspectRatio: '16/9' },
            { src: '/lovable-uploads/stampede-workshop2.jpg', alt: 'Workshop Outputs & Ideation', aspectRatio: '16/9' },
          ]}
        />

        <Quote author="Nick Appleby, Senior Partnerships Manager, WWT">
          This was 100 times more productive than any partnership meeting I have had.
        </Quote>

        <Quote author="Holly Bland, Social Impact Experience Manager, Airbnb">
          This has been an opportunity for me to think of the different things we do and could do. We will be following up — I have your details.
        </Quote>

        <Card title="Design Recommendations from the Prototype">
          <List
            items={[
              'Acknowledge and Address Monetary Value: Don\'t shy away from discussing revenue, even with non-profits',
              'Flexibility in Approach: Go in with a "hook" idea, but allow partnerships to evolve organically',
              'The Power of Third-Party Facilitation: A neutral facilitator helps level the playing field',
              'Invite the Right Decision-Makers: Ensure those who can make decisions are present',
              'Adapt to Time Constraints: Develop shorter "power hour" versions of Stampede workshops',
            ]}
          />
        </Card>
      </CaseStudySection>

      {/* The Solution */}
      <CaseStudySection title="The Solution: Stampede — A Service for Strategic Conservation Impact" delay={0.4}>
        <Paragraph>
          Based on our research and prototyping, Stampede is proposed as a service that strategically connects conservation organizations with unlikely but high-potential partners.
        </Paragraph>

        <CardGrid columns={2}>
          <Card title="Identifies Opportunities">
            Uses industry knowledge and networking to find pressing causes and untapped partnership opportunities.
          </Card>
          <Card title="Creative Match-Making">
            Applies the Power/Pace matrix to connect unlikely but high-potential partners (e.g., NASA × WWF for real-time "Red List" animal tracking).
          </Card>
          <Card title="Bespoke Experiences">
            Designs and facilitates everything from immersive expeditions for influential individuals to joint design sprints for co-created solutions.
          </Card>
          <Card title="Actionable Outcomes">
            Drives concrete plans, proposals, and ensures continued momentum beyond ideation.
          </Card>
        </CardGrid>

        <ImageGrid
          images={[
            { src: '/lovable-uploads/stampede-blueprint.jpg', alt: 'Service Blueprint', aspectRatio: '21/9' },
            { src: '/lovable-uploads/stampede-nasa.jpg', alt: 'NASA × WWF Concept - Real-time Red List Tracking', aspectRatio: '16/9' },
          ]}
        />
      </CaseStudySection>

      {/* Key Learnings */}
      <CaseStudySection title="Key Learnings & Insights" delay={0.45}>
        <CardGrid columns={2}>
          <Card title="Collaboration Can Be Designed">
            A structured approach can significantly increase the likelihood of successful collaborations by strategically matching complementary strengths.
          </Card>
          <Card title="Unlocking 'Stuck' Resources">
            A neutral catalyst can help identify siloed resources and co-create viable pathways for their use.
          </Card>
          <Card title="Speed & Agility as Currencies">
            The contrast in operational speeds (e.g., WWT vs. Airbnb) highlights the need for processes that can accelerate decision-making.
          </Card>
          <Card title="Person-to-Person Connection">
            The enthusiasm and trust built between key individuals during facilitated sessions are critical drivers of success.
          </Card>
        </CardGrid>

        <Paragraph>
          My personal key learning from leading the Stampede project was the immense potential that lies at the intersection of design thinking and complex systemic challenges. Applying a structured yet creative facilitation process can unlock novel solutions and foster genuine buy-in from diverse stakeholders, even in sectors as established as conservation.
        </Paragraph>
      </CaseStudySection>

      {/* The Future */}
      <CaseStudySection title="The Future of Stampede" delay={0.5}>
        <Paragraph>
          The immediate next steps for developing Stampede would involve:
        </Paragraph>
        <List
          items={[
            'Refining Brand Strategy & Collaterals: Creating pitch decks and toolkits',
            'Developing a Sustainable Business Model & Financing Plan',
            'Defining Organizational Structure & Roles',
            'Running More Prototype Workshops: To further test and iterate the collaboration process',
          ]}
        />
      </CaseStudySection>

      {/* Conclusion */}
      <CaseStudySection title="Conclusion" delay={0.55}>
        <Paragraph>
          The Stampede project demonstrated a clear need and a viable, design-led approach to accelerating conservation efforts by fostering innovative and strategic partnerships. By understanding the unique challenges and operational styles of different organizations within the sector, and by applying a facilitated, co-creative methodology, Stampede offers a pathway to unlock unspent resources, connect disparate expertise, and ultimately drive more impactful conservation outcomes.
        </Paragraph>
        <Quote>
          It's about moving from "happy accidents" to "designed impact."
        </Quote>
      </CaseStudySection>

      {/* The Team */}
      <CaseStudySection title="The Team" delay={0.6}>
        <CardGrid columns={4}>
          <Card title="Amaan Khan">Project Lead & Service Designer</Card>
          <Card title="Anahita Pradhan">RCA Collaborator</Card>
          <Card title="Andrew Seetoh">RCA Collaborator</Card>
          <Card title="Constance Cheung">RCA Collaborator</Card>
        </CardGrid>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};