import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyParagraph,
  CaseStudyInsight,
  CaseStudyQuote,
  CaseStudyList,
  CaseStudyImage,
  CaseStudyImageGrid,
  CaseStudyCard,
  CaseStudyCardGrid,
  CaseStudyStatsGrid,
} from '@/components/case-study';

const ARCHETYPES: [string, string][] = [
  ['Walrus (e.g. WWF)', 'Large and globally influential, careful about its brand, slow because of layers of approval.'],
  ['Tiger (e.g. Apple)', 'A large tech company: fast, inventive and well resourced.'],
  ['Sheep (e.g. Thames Water)', 'A large traditional company that follows others and decides slowly.'],
  ['Bumblebee (e.g. Giki)', 'A small conservation startup: inventive and quick, with limited reach.'],
  ['Worm (e.g. WWT)', 'A grassroots organisation with vital work on the ground and very little money.'],
  ['Octopus (e.g. EY)', 'A large multinational with arms everywhere, analytical, quick to act on data.'],
  ['Giant tortoise (e.g. Dept of Education)', 'A government body with huge reach and long-term impact, slowed by hierarchy and regulation.'],
];

export const Stampede = () => {
  return (
    <>
      <CaseStudyLayout title="Stampede">
        <CaseStudyHero
          eyebrow="RCA × WWT × Airbnb, 2019"
          title="Stampede: designing partnerships for conservation"
          subtitle="A method for matching organisations that would otherwise meet by accident, tested live with WWT and Airbnb"
          intro={`Conservation partnerships tend to form by luck and fall apart when one person leaves. With three RCA classmates I designed Stampede, a way to match organisations by how they work and a facilitated workshop to start the partnership. We tested it with WWT and Airbnb, two organisations that had never formally worked together. At the end, WWT's Senior Partnerships Manager, Nick Appleby, said it was "100 times more productive than any partnership meeting I've had."`}
          overview={{
            role: [
              'Project lead and service designer',
              'Led stakeholder research with WWF, WWT and Imperial College',
              'Designed the method, including the Power/Pace matrix and the animal archetypes',
              'Facilitated the live WWT × Airbnb workshop',
            ],
            team: 'Anahita Pradhan, Andrew Seetoh and Constance Chung (RCA Team 9)',
            timeline: 'January to March 2019, Royal College of Art',
            recognition: 'The first workshop started the WWT × Airbnb collaboration',
            tools: ['Stakeholder research', 'Journey mapping', 'Workshop design', 'Facilitation', 'Co-creation'],
          }}
          heroImage="/images/casestudies/stampede/1-problem-statement.webp"
          heroImageAlt="Stampede problem statement for conservation partnerships"
        />

        <CaseStudySection title="Context">
          <CaseStudyParagraph lead>
            Conservation has a connection problem as much as a money problem.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            Our interviews with people at WWF, WWT and Imperial College kept returning to the same three issues:
          </CaseStudyParagraph>

          <CaseStudyList items={[
            { title: 'Only 3% of charitable giving', description: 'goes to wildlife conservation (Imperial College), so every partnership has to work hard' },
            { title: 'Partnerships by luck', description: 'one WWT interviewee described their HSBC collaboration as a lucky encounter' },
            { title: 'One advocate away from collapse', description: '"When that person left the organisation, we lost the advocate and support." Years of relationship-building can go with one resignation.' },
          ]} />

          <CaseStudyQuote author="Wildlife biologist" role="Founder of Key Conservation">
            There are so many people out there who have similar interests, but connecting them is tough.
          </CaseStudyQuote>

          <CaseStudyParagraph>
            The people in this sector are committed. What's missing is a reliable way to connect resources to
            the work, and that's something you can design.
          </CaseStudyParagraph>

          <CaseStudyImage
            src="/images/casestudies/stampede/2-how-the-service-works.webp"
            alt="How the Stampede service works"
            caption="How the service works across the partnership journey."
          />
        </CaseStudySection>

        <CaseStudySection title="Insight">
          <CaseStudyInsight>
            Organisations differ in how they work as much as in what they want. The best partners complement each other.
          </CaseStudyInsight>

          <CaseStudyParagraph>
            We described this with two measures: Power (influence and resources) and Pace (how fast decisions get
            made). WWF moves slowly and carefully. A startup like Giki moves fast with limited reach. Pairing
            organisations at random creates friction; pairing them on purpose lets each cover what the other lacks.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            To make the idea easy to use, we gave each profile an animal archetype. A chart of Power and Pace
            would have been accurate; the animals were what people actually picked up and talked about.
          </CaseStudyParagraph>

          <CaseStudyCardGrid columns={3}>
            {ARCHETYPES.map(([name, text]) => (
              <CaseStudyCard key={name} title={name}>
                <CaseStudyParagraph>{text}</CaseStudyParagraph>
              </CaseStudyCard>
            ))}
          </CaseStudyCardGrid>

          <CaseStudyParagraph>
            The strongest pairs have different Power and Pace profiles. A Walrus and a Bumblebee can do together
            what neither can do alone.
          </CaseStudyParagraph>

          <CaseStudyImage
            src="/images/casestudies/stampede/3-all-animals.webp"
            alt="The seven animal archetypes on the Power/Pace matrix"
            caption="The seven archetypes on the Power/Pace matrix."
          />

          <CaseStudyImage
            src="/images/casestudies/stampede/4-how-they-match.webp"
            alt="How organisations are matched by complementary Power/Pace profiles"
            caption="How complementary archetypes are matched."
          />
        </CaseStudySection>

        <CaseStudySection title="What we made">
          <CaseStudyParagraph lead>
            Stampede covers the whole partnership journey in six stages: purpose finding, matchmaking,
            connecting, the kick-off, delivery and measuring the outcome. Our interviews showed organisations want
            help at different moments, so there isn't one way in.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            The centre of it is the kick-off, a facilitated workshop in five steps: unpacking, sketching,
            solutioning, prototyping and validating. It comes with a toolkit, so the momentum lasts after
            everyone leaves the room.
          </CaseStudyParagraph>

          <CaseStudyImage
            src="/images/casestudies/stampede/5-how-the-workshop-works.webp"
            alt="The five steps of the Stampede kick-off workshop"
            caption="The kick-off workshop, step by step."
          />
        </CaseStudySection>

        <CaseStudySection title="Testing it: the WWT × Airbnb workshop">
          <CaseStudyParagraph lead>
            WWT had called Airbnb a "dream partner". We ran a 3-hour Stampede workshop to see whether the method
            could turn that hope into a working relationship.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={3}
            images={[
              { src: '/images/casestudies/stampede/6-workshop-1.webp', alt: 'Co-creation notes on memorable experiences with animals', caption: 'Co-creation: memorable experiences with animals.' },
              { src: '/images/casestudies/stampede/7-workshop-2.webp', alt: 'A participant holding up a 30 Circles sheet', caption: '30 Circles warm-up.' },
              { src: '/images/casestudies/stampede/8-workshop-3.webp', alt: 'Another participant holding up a 30 Circles sheet', caption: '30 Circles warm-up.' },
            ]}
          />

          <CaseStudyCardGrid columns={3}>
            <CaseStudyCard title="Unpacking, 40 minutes">
              <CaseStudyParagraph>
                Introductions, building trust, setting goals and an honest look at each organisation's strengths.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Sketching, 60 minutes">
              <CaseStudyParagraph>
                Crazy 8s around one question: how might Airbnb and WWT create an authentic wetlands experience?
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Solutioning, 70 minutes">
              <CaseStudyParagraph>
                An action plan, the practical constraints and agreed next steps.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyParagraph>
            The Power/Pace gap showed up in the room. Asked how long a first project would take, Airbnb said{' '}
            <strong>"7 days"</strong> and WWT said <strong>"6 months"</strong>: the same goal, at roughly 25 times
            the pace. Saying it out loud let them plan around the gap instead of hitting it months later.
          </CaseStudyParagraph>

          <CaseStudyParagraph>
            Airbnb's Social Impact team left with WWT's contacts, a named first project idea (an authentic wetlands
            experience) and an agreement that the pace gap had to be planned for. To be precise about what this
            was: three hours produced a warm handover and an agreed next step between two organisations that had
            never formally met. It wasn't a signed partnership. The method claims to compress months of
            relationship-building into an afternoon, and in this test it did.
          </CaseStudyParagraph>

          <CaseStudyQuote author="Holly Bland" role="Social Impact Experience Manager, Airbnb">
            This has been an opportunity for me to think of the different things we do and could do.
            We will be following up. I have your details.
          </CaseStudyQuote>

          <CaseStudyImageGrid
            columns={3}
            images={[
              { src: '/images/casestudies/stampede/9-1-workshop-activity-1.webp', alt: 'Unpacking: reflecting on each organisation’s strengths', caption: 'Unpacking: each organisation’s strengths.' },
              { src: '/images/casestudies/stampede/9-2-workshop-activity-2.webp', alt: 'Sketching: Crazy 8s sheets on the wall', caption: 'Sketching: Crazy 8s, with two more designers joining.' },
              { src: '/images/casestudies/stampede/9-3-workshop-activity-3.webp', alt: 'Solutioning: both organisations’ methods side by side', caption: 'Solutioning: methods side by side, with prompts for marketing and KPIs.' },
            ]}
          />

          <CaseStudyImage
            src="/images/casestudies/stampede/10-workshop-in-progress.webp"
            alt="The WWT × Airbnb workshop in progress"
            caption="The drawing warm-up at the start of the workshop."
          />

          <CaseStudyCard title="What the test taught us about the format">
            <CaseStudyList items={[
              'Bring a starting idea, then let the partnership change it',
              'A neutral facilitator puts both organisations on an equal footing',
              'Only invite people who can make decisions',
              'Have a shorter "power hour" version for people who can’t give three hours',
            ]} />
          </CaseStudyCard>
        </CaseStudySection>

        <CaseStudySection title="What changed">
          <CaseStudyStatsGrid
            stats={[
              { value: '2', label: 'Organisations', sublabel: 'WWT and Airbnb, first formal contact' },
              { value: '3 hrs', label: 'To a named next project', sublabel: 'Instead of months of relationship-building' },
              { value: '25×', label: 'Pace gap, named in the room', sublabel: 'Airbnb 7 days, WWT 6 months' },
              { value: '7', label: 'Animal archetypes', sublabel: 'Power/Pace profiles' },
            ]}
          />

          <CaseStudyParagraph>
            One workshop with one pair of organisations is a prototype, not proof. It produced WWT and Airbnb's
            first formal working session, a named candidate project and a toolkit the team could hand over. Nick
            Appleby's "100 times more productive" is an opinion, not a measurement, and it's why we think the
            format is worth running more widely.
          </CaseStudyParagraph>

          <div className="relative overflow-hidden rounded-sm bg-bg-secondary aspect-video">
            <iframe
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/RnNxUVHPOA4"
              title="Stampede results video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>

          <CaseStudyImage
            src="/images/casestudies/stampede/11-results.webp"
            alt="Key moments and quotes from the WWT × Airbnb workshop"
            caption="Key moments from the workshop, in the participants’ words."
          />
        </CaseStudySection>

        <CaseStudySection title="What I learned">
          <CaseStudyCardGrid columns={2}>
            <CaseStudyCard title="Collaboration can be designed">
              <CaseStudyParagraph>
                Conservation partnerships form by accident because nobody has designed a way for the right
                organisations to find each other. People have plenty of goodwill.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Give abstract ideas a handle">
              <CaseStudyParagraph>
                The Power/Pace matrix could have stayed a chart. Turning it into animals changed how people
                engaged with it.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="A neutral facilitator matters">
              <CaseStudyParagraph>
                A third party in the room lets both sides speak honestly. The Walrus and the Worm can only have
                that conversation if someone else is holding the space.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Matchmaking is the gap">
              <CaseStudyParagraph>
                Applied to a system like this, service design moves partnerships from luck to intent. The sector
                has enough passion; it needs better matchmaking.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyImage
            src="/images/casestudies/stampede/12-team.webp"
            alt="The Stampede team, RCA Team 9"
            caption="RCA Team 9: Amaan Khan, Anahita Pradhan, Andrew Seetoh and Constance Chung."
          />
        </CaseStudySection>
      </CaseStudyLayout>
    </>
  );
};
