import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyParagraph,
  CaseStudyQuote,
  CaseStudyList,
  CaseStudyImageGrid,
  CaseStudyCard,
  CaseStudyCardGrid,
  CaseStudyStatsGrid,
} from '@/components/case-study';

export const Stampede = () => {
  return (
    <div className="theme-stampede contents">
      <CaseStudyLayout
        title="Stampede"
        description="Designing Strategic Partnerships for Conservation Impact — A facilitation methodology that turned 'happy accidents' into designed collaborations."
      >
        <CaseStudyHero
          title="Stampede: Designing Strategic Partnerships for Conservation Impact"
          subtitle="A facilitation methodology that turned 'happy accidents' into designed collaborations"
          pills={[
            'Conservation',
            'Strategic Partnerships',
            'Design Thinking',
            'Workshop Facilitation',
            'Systems Design',
            'Royal College of Art',
          ]}
          intro={`"This was 100 times more productive than any partnership meeting I've had." — Nick Appleby, Senior Partnerships Manager, WWT. That quote came at the end of a 3-hour workshop we designed and facilitated between WWT and Airbnb — two organisations that had never formally collaborated. It's the best summary of what Stampede does: transforms conservation partnerships from happy accidents into designed outcomes.`}
          overview={{
            role: [
              'Project Lead & Service Designer',
              'Led stakeholder research with WWF, WWT, and Imperial College',
              'Designed the Stampede methodology including Power/Pace matrix and animal archetypes',
              'Facilitated live WWT × Airbnb co-creation workshop',
            ],
            team: 'Anahita Pradhan, Andrew Seetoh, Constance Cheung (RCA)',
            timeline: '4 months, Royal College of Art, January–March 2019',
            recognition: 'WWT × Airbnb partnership initiated; "100x more productive" methodology',
            tools: [
              'Service Design',
              'Systems Thinking',
              'Workshop Facilitation',
              'Stakeholder Research',
              'Co-creation Methods',
            ],
          }}
          heroImage="/images/casestudies/stampede/1.jpg"
          heroImageAlt="Stampede Conservation Partnership Workshop"
        />

        <CaseStudySection>
          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/stampede/1.1.jpg', alt: 'Hero image 2' },
              { src: '/images/casestudies/stampede/1.2.jpg', alt: 'Hero image 3' }
            ]}
          />
        </CaseStudySection>

        {/* The Problem */}
        <CaseStudySection title="The Problem">
          <CaseStudyParagraph lead>
            Wildlife conservation has a hidden crisis. It's not lack of funding — it's lack of connection.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            Our research with leaders from WWF, WWT, and Imperial College revealed three systemic failures
            happening simultaneously:
          </CaseStudyParagraph>

          <CaseStudyList items={[
            { title: 'Billions in unspent funding', description: 'Sitting in large organisations unable to allocate it effectively' },
            { title: 'Partnerships by "happy accident"', description: 'An HSBC collaboration cited as a lucky encounter, not a designed outcome' },
            { title: 'Fragile corporate advocacy', description: 'Dissolves the moment an individual champion leaves their role — taking years of relationship-building with them' },
          ]} />

          <CaseStudyQuote author="Wildlife Biologist" role="Founder of Key Conservation">
            There are so many people out there who have similar interests, but connecting them is tough.
          </CaseStudyQuote>

          <CaseStudyParagraph>
            The sector is passionate and driven. It's systematically inefficient at connecting resources
            to impact. That's a design problem.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/stampede/2.jpg', alt: 'Conservation partnership challenges 1', caption: 'Systemic failures in how conservation organisations connect' },
              { src: '/images/casestudies/stampede/2.1.jpg', alt: 'Conservation partnership challenges 2' }
            ]}
          />
        </CaseStudySection>

        {/* The Insight */}
        <CaseStudySection title="The Insight: Collaboration Can Be Designed">
          <CaseStudyParagraph lead>
            The breakthrough was recognising that organisations don't just differ in mission — they differ
            in how they operate. Power (influence, resources) and Pace (speed of decision-making) vary
            enormously across the conservation ecosystem.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            A WWF moves slowly and carefully. A startup like Giki moves fast with limited reach.
            Matching them randomly produces friction. Matching them strategically produces leverage.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            To make this tangible, we developed <strong>animal archetypes</strong> — a tool for quickly
            mapping an organisation's operational character before attempting to partner them.
          </CaseStudyParagraph>

          <CaseStudyCardGrid columns={3}>
            <CaseStudyCard title="🦭 Walrus (e.g., WWF)">
              <CaseStudyParagraph>
                Large, globally influential, brand-cautious, slow due to layers of approval.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="🐅 Tiger (e.g., Apple)">
              <CaseStudyParagraph>
                Large tech company, fast-moving, innovative, resource-rich.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="🐑 Sheep (e.g., Thames Water)">
              <CaseStudyParagraph>
                Large traditional corporate, follows others, slower decision-making.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="🐝 Bumblebee (e.g., Giki)">
              <CaseStudyParagraph>
                Small conservation startup, innovative and agile, limited reach.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="🪱 Worm (e.g., WWT)">
              <CaseStudyParagraph>
                Grassroots organisation, vital on-the-ground impact, cash-strapped.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="🐙 Octopus (e.g., EY)">
              <CaseStudyParagraph>
                Large multinational, analytical, many arms, can move quickly.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyParagraph>
            <strong>The key insight:</strong> the most powerful partnerships connect organisations with
            complementary Power/Pace profiles — not similar ones. A Walrus and a Bumblebee achieve
            together what neither can alone.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/stampede/3.1.jpg', alt: 'Power/Pace matrix 1' },
              { src: '/images/casestudies/stampede/3.2.jpg', alt: 'Power/Pace matrix 2' },
              { src: '/images/casestudies/stampede/3.3.jpg', alt: 'Power/Pace matrix 3' }
            ]}
          />
        </CaseStudySection>

        {/* The Stampede Methodology */}
        <CaseStudySection title="The Stampede Methodology">
          <CaseStudyParagraph lead>
            Stampede is a facilitation service built around four stages: People (connecting the right
            organisations and individuals), Experience (curating the right format — expedition, hackathon,
            workshop), Outcome (enabling tangible plans and proposals), and Follow-up (maintaining
            momentum beyond the room).
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            The service is designed to support organisations at any stage of the partnership journey —
            from Purpose Finding and Match-Making through to Project Execution and Outcome Measurement.
            It's not a one-off event. It's a designed relationship infrastructure.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/stampede/4.1.jpg', alt: 'Stampede methodology framework 1' },
              { src: '/images/casestudies/stampede/4.2.jpg', alt: 'Stampede methodology framework 2' }
            ]}
          />
        </CaseStudySection>

        {/* WWT × Airbnb Workshop */}
        <CaseStudySection title="Prototyping in Action: The WWT × Airbnb Workshop">
          <CaseStudyParagraph lead>
            WWT had described Airbnb as a "dream partner." We designed a 3-hour Stampede workshop to
            test whether the methodology could turn that aspiration into a real working relationship.
          </CaseStudyParagraph>

          <CaseStudyCardGrid columns={3}>
            <CaseStudyCard title="Unpacking (40 mins)">
              <CaseStudyParagraph>
                Introductions, trust-building, goal setting, and mapping each organisation's strengths honestly.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Sketching (60 mins)">
              <CaseStudyParagraph>
                Crazy 8s ideation around a single question: "How might Airbnb and WWT create an authentic
                wetlands experience?"
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Solutioning (70 mins)">
              <CaseStudyParagraph>
                Developing an action plan, identifying practical constraints, and agreeing next steps.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyParagraph>
            <strong>The result</strong> wasn't just a good meeting. It was a genuine partnership commitment.
          </CaseStudyParagraph>

          <CaseStudyQuote author="Holly Bland" role="Social Impact Experience Manager, Airbnb">
            This has been an opportunity for me to think of the different things we do and could do.
            We will be following up — I have your details.
          </CaseStudyQuote>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/stampede/5.1 (1).jpg', alt: 'WWT × Airbnb workshop 1' },
              { src: '/images/casestudies/stampede/5.1 (2).jpg', alt: 'WWT × Airbnb workshop 2' },
              { src: '/images/casestudies/stampede/5.1 (3).jpg', alt: 'WWT × Airbnb workshop 3' },
              { src: '/images/casestudies/stampede/5.2.jpg', alt: 'WWT × Airbnb workshop 4' },
              { src: '/images/casestudies/stampede/5.4.jpg', alt: 'WWT × Airbnb workshop 5' }
            ]}
          />

          <CaseStudyCard title="Design Principles from the Prototype">
            <CaseStudyList items={[
              'Government or neutral funding prevents power imbalances',
              'Go in with a hook idea but let the partnership evolve',
              'Third-party facilitation levels the playing field',
              'Only invite people who can actually make decisions',
              'Always build a shorter "power hour" version for time-constrained stakeholders',
            ]} />
          </CaseStudyCard>
        </CaseStudySection>

        {/* Results */}
        <CaseStudySection title="Results">
          <CaseStudyStatsGrid
            stats={[
              { value: '100x', label: 'More Productive', sublabel: 'Than standard meetings' },
              { value: 'WWT × Airbnb', label: 'Partnership', sublabel: 'Initiated' },
              { value: '6', label: 'Animal Archetypes', sublabel: 'Created' },
              { value: '3hrs', label: 'Workshop', sublabel: 'Sprint format' },
            ]}
          />

          <CaseStudyParagraph>
            WWT × Airbnb partnership initiated from a single facilitated workshop. Stakeholders described
            the methodology as "100x more productive" than standard partnership meetings. The framework was
            adopted for ongoing partnership development within the conservation sector.
          </CaseStudyParagraph>

          <div className="flex flex-col gap-4 mt-8">
            <div className="relative overflow-hidden rounded-lg bg-white border border-border aspect-video shadow-sm">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/RnNxUVHPOA4"
                title="Stampede Results Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
              </iframe>
            </div>
            <CaseStudyImageGrid
              columns={1}
              images={[
                { src: '/images/casestudies/stampede/6.1.jpg', alt: 'Workshop results 1' },
                { src: '/images/casestudies/stampede/6.2.jpg', alt: 'Workshop results 2' },
                { src: '/images/casestudies/stampede/6.3.jpg', alt: 'Workshop results 3' }
              ]}
            />
          </div>
        </CaseStudySection>

        {/* What I Learned */}
        <CaseStudySection title="What I Learned">
          <CaseStudyCardGrid columns={2}>
            <CaseStudyCard title="Collaboration is a design problem">
              <CaseStudyParagraph>
                The reason conservation partnerships form by accident isn't that people lack goodwill.
                It's that no one has designed the infrastructure for strategic connection. Stampede is
                that infrastructure.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Archetypes beat analysis">
              <CaseStudyParagraph>
                The Power/Pace matrix could have been a dry quadrant chart. Making it animal archetypes
                changed how stakeholders engaged with it. Abstract concepts need tangible handles.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="The facilitator changes the dynamic">
              <CaseStudyParagraph>
                A neutral third party levels the playing field in ways that neither organisation can do
                for themselves. The Walrus and the Worm can only have an honest conversation if someone
                else is holding the space.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="From happy accidents to designed impact">
              <CaseStudyParagraph>
                That shift is the entire value of service design applied to systemic problems. The sector
                doesn't need more passion. It needs better matchmaking.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/stampede/1_page-0069.jpg', alt: 'Service blueprint' },
              { src: '/images/casestudies/stampede/1_page-0045.jpg', alt: 'Partnership framework' },
              { src: '/images/casestudies/stampede/8-Stampede.jpg', alt: 'Learnings' }
            ]}
          />
        </CaseStudySection>
      </CaseStudyLayout>
    </div>
  );
};