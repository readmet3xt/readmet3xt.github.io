import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyParagraph,
  CaseStudyInsight,
  CaseStudyQuote,
  CaseStudyList,
  CaseStudyImageGrid,
  CaseStudyCard,
  CaseStudyCardGrid,
  CaseStudyStatsGrid,
} from '@/components/case-study';

export const Pebble = () => {
  return (
    <>
      <CaseStudyLayout title="Pebble">
        <CaseStudyHero
          eyebrow="RCA × VISA Innovation Centre, 2021"
          title="Pebble: designing for wellbeing in remote teams"
          subtitle="A wellbeing companion for remote workers, designed with the people who would use it"
          intro="Remote work gave people more freedom and, for many, more isolation. With two RCA classmates and the VISA Innovation Centre, I led a project to design a service that helps remote teams look after their wellbeing. We built it on 1,200+ survey responses and 24 co-creation workshops. One concept from that work, the Virtual Café, went into VISA Innovation Centre's collaboration roadmap."
          overview={{
            role: [
              'Project lead and UX researcher',
              'Designed and facilitated 24 co-creation workshops',
              'Led research synthesis across 1,200+ responses',
              'Owned the UI/UX design of the Pebble companion',
            ],
            team: 'Jing Qian and Zhiyuan Zheng, Royal College of Art. Partner: VISA Innovation Centre',
            timeline: 'January to June 2021',
            recognition: 'Virtual Café concept adopted into VISA Innovation Centre’s collaboration roadmap',
            tools: ['Surveys', 'Co-creation workshops', 'Personas', 'Prototyping', 'User testing', 'Figma'],
          }}
          heroImage="/images/casestudies/pebble/1-cover-pic.webp"
          heroImageAlt="Pebble, a wellbeing companion for remote teams"
        />

        <CaseStudySection>
          <div className="relative overflow-hidden rounded-sm bg-bg-secondary aspect-video">
            <iframe
              loading="lazy"
              src="https://player.vimeo.com/video/561000617?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
              title="Pebble project film"
              allowFullScreen>
            </iframe>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Context">
          <CaseStudyParagraph lead>
            Before we designed anything, the numbers already showed a problem.
          </CaseStudyParagraph>

          <CaseStudyStatsGrid
            stats={[
              { value: '43%', label: 'Reported poor mental health', sublabel: 'Employees surveyed' },
              { value: '13%', label: 'Completely happy at work', sublabel: 'Down from 26%' },
              { value: '12%', label: 'More productive', sublabel: 'When employees are happy' },
              { value: '147%', label: 'Higher earnings per share', sublabel: 'Engaged teams (Gallup)' },
            ]}
          />

          <CaseStudyParagraph>
            We used published engagement research (Gallup and academic wellbeing studies) to show
            stakeholders how big the problem was, and our own survey of 1,200+ people to understand what it
            felt like from the inside.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/pebble/2-problem.webp', alt: 'The problem: workplace wellbeing in decline', caption: 'Why happiness at work matters, after J. Pryce-Jones (2013).' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="Research">
          <CaseStudyParagraph lead>
            You can't design for how people feel without spending time with them first, so we did the research
            before any solution work.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/pebble/7-co-creation-workshop.webp', alt: 'Co-creation workshop boards for work and life scenarios', caption: 'Co-creation boards. Participants worked through a work scenario and a life scenario with our persona.' },
              { src: '/images/casestudies/pebble/3-workshop.webp', alt: 'Our design process', caption: 'Our design process.' },
            ]}
          />

          <CaseStudyList items={[
            { title: '1,200+ survey responses', description: 'about emotional ups and downs and what people needed' },
            { title: '24 co-creation workshops', description: 'with members of the public and VISA Innovation Centre employees' },
            { title: 'Emotional journey mapping', description: '"How was your week?" exercises that showed the weekly rhythm of remote-work stress' },
            { title: 'Personas', description: 'built from the synthesis of all of the research' },
          ]} />

          <CaseStudyParagraph>
            The workshops were design sessions as much as research. Participants shaped the direction with us,
            so the people the service was for helped write it.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/pebble/6-research.webp', alt: 'A co-creation ideation workshop with VISA Innovation Centre staff', caption: 'A co-creation ideation workshop with VISA Innovation Centre staff, from entry level to leadership.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="Insight">
          <CaseStudyInsight>
            Design for the Explorer: someone who knows their wellbeing is slipping but doesn't know what to do about it.
          </CaseStudyInsight>

          <CaseStudyParagraph>
            This came out of our validation workshop. The Explorer turned out not to be a niche group. Almost
            everyone we spoke to passes through an Explorer phase at some point.
          </CaseStudyParagraph>

          <CaseStudyCard title="Meet James">
            <CaseStudyParagraph>
              A 28-year-old product designer working remotely. He's frustrated, distracted and lonely. He knows
              something is off, and he doesn't know how to fix it.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyParagraph>
            Our question became: how might we help the Explorer build a foundation of good wellbeing? That led to
            the idea of different Pebbles, companions with their own personalities.
          </CaseStudyParagraph>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/pebble/4-why-explorer.webp', alt: 'Why we focused on the Explorer', caption: 'The segmentation workshop that pointed us to the Explorer.' },
              { src: '/images/casestudies/pebble/5-persona.webp', alt: 'The Explorer persona, James', caption: 'James, our Explorer persona.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="What we made">
          <CaseStudyParagraph lead>
            Pebble is a companion that supports remote workers through personalisation, focus and social
            connection. There are four Pebble personalities. An onboarding quiz matches you to one, and daily
            check-ins keep tuning it.
          </CaseStudyParagraph>

          <CaseStudyCardGrid columns={2}>
            <CaseStudyCard title="Matching">
              <CaseStudyParagraph>
                A quiz matches you with a companion, and the match adapts over time. The relationship builds
                through continuity.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Deep work">
              <CaseStudyParagraph>
                One-minute exercises and tools that cut distraction, so it's easier to get into focused work.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Virtual Café">
              <CaseStudyParagraph>
                Informal coffee-chat rooms that bring back the chance conversations remote work removes. Anyone
                can join or start a room. This is the concept VISA Innovation Centre took into its
                collaboration roadmap.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Healthy boundaries">
              <CaseStudyParagraph>
                Gentle prompts to take a break, log off and reflect, so looking after yourself becomes a habit.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/pebble/9-cafe.webp', alt: 'The Virtual Café concept', caption: 'The Virtual Café.' },
              { src: '/images/casestudies/pebble/8-how-deep-work-works.webp', alt: 'How deep work connects individual and workplace happiness', caption: 'How deep work connects individual and workplace happiness.' },
              { src: '/images/casestudies/pebble/10-how-it-works.webp', alt: 'The three ways Pebble supports people', caption: 'Three ways Pebble helps: deep work, the Virtual Café and work-life boundaries.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="What changed after testing">
          <CaseStudyParagraph lead>
            Five people tested the prototype, and it showed us three things we had got wrong.
          </CaseStudyParagraph>

          <CaseStudyCardGrid columns={3}>
            <CaseStudyCard title="Connection came first">
              <CaseStudyParagraph>
                People valued the focus tools, but the coffee catch-up features resonated most. We had bet on
                focus; people wanted company.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Personalisation had to keep going">
              <CaseStudyParagraph>
                People wanted daily mood tracking and support that adapts. A one-off onboarding quiz wasn't
                enough.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Another app is a cost">
              <CaseStudyParagraph>
                The most common worry was adding yet another tool. A wellbeing product that doesn't work inside
                Teams, Slack and people's calendars gets abandoned, however good it is.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/pebble/11-feedback.webp', alt: 'Prototype takeaways from testing', caption: 'Prototype takeaways: what testers liked, wished for and wondered about.' },
              { src: '/images/casestudies/pebble/12-iterate-again.webp', alt: 'Iterating towards Microsoft Teams and Slack integrations', caption: 'The next iteration: working inside Microsoft Teams and Slack.' },
            ]}
          />

          <CaseStudyParagraph>
            The Virtual Café went into VISA Innovation Centre's roadmap for team chat features. VISA's designers
            singled out the research and the co-creation method, as well as the result.
          </CaseStudyParagraph>

          <CaseStudyQuote author="Elin Sjursen" role="Senior Design Strategy Director, Visa">
            Amaan was not only proactive in managing his stakeholders and bringing together the right
            people at the right time in the design thinking process, his thoughts, analysis of the
            insight and creative output was thoughtful, articulate and incredibly creative.
          </CaseStudyQuote>

          <CaseStudyImageGrid
            columns={1}
            images={[
              { src: '/images/casestudies/pebble/13-highlight-of-workshops-in-total.webp', alt: 'Highlights from the co-creation workshops', caption: 'Highlights from the workshops.' },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection title="What I learned">
          <CaseStudyCardGrid columns={2}>
            <CaseStudyCard title="Wellbeing is personal">
              <CaseStudyParagraph>
                Everyone experiences stress differently, so one design for everyone fails. In this area,
                adapting to the person is the product.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Co-creation changes the result">
              <CaseStudyParagraph>
                24 workshops sounds like a lot. The output was much better because people shaped the solution
                with us instead of reacting to it afterwards.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Small nudges work">
              <CaseStudyParagraph>
                The features that mattered most were small and well timed: a coffee-chat invite, a reminder to
                log off. Changing behaviour doesn't need a dramatic design.
              </CaseStudyParagraph>
            </CaseStudyCard>

            <CaseStudyCard title="Make wellbeing a business case">
              <CaseStudyParagraph>
                Opening stakeholder conversations with Gallup's data on engagement and performance is what got
                a wellbeing concept onto a product roadmap.
              </CaseStudyParagraph>
            </CaseStudyCard>
          </CaseStudyCardGrid>
        </CaseStudySection>

        <CaseStudySection title="Team">
          <CaseStudyParagraph>
            I worked with Jing Qian and Zhiyuan Zheng at the Royal College of Art. Thanks to our tutor David,
            project partners Elin and Annie, LBS student Yurika, wellbeing specialists Hugo Alistair and Keyun
            Ruan, Mental Health Studio, and the VISA Innovation team.
          </CaseStudyParagraph>
        </CaseStudySection>
      </CaseStudyLayout>
    </>
  );
};
