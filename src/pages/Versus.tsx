import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyParagraph,
  CaseStudyInsight,
  CaseStudyList,
  CaseStudyImage,
  CaseStudyImageGrid,
  CaseStudyCard,
  CaseStudyCardGrid,
} from '@/components/case-study';

export const Versus = () => {
  return (
    <CaseStudyLayout title="Versus" externalLink="https://otagon2.github.io/Versus/" externalLabel="Try Versus">
      <CaseStudyHero
        eyebrow="Side project, 2026"
        title="Versus: a tournament tracker for game nights"
        subtitle="Leagues, knockouts and groups with live scoring, and a link friends can open on their phones"
        intro="Our FIFA nights always ended the same way: a paper bracket, a forgotten score and an argument about who went through. I designed and built Versus so we could stop arguing and play. It generates the fixtures, keeps the score live and gives spectators a link to follow along."
        overview={{
          role: [
            'Designer and developer, on my own',
            'Product, UX and visual identity',
            'Front end in plain JavaScript',
            'Live sync with PeerJS and Supabase',
          ],
          timeline: 'About five weeks, May to June 2026, evenings and weekends',
          recognition: 'Live, with no per-match server cost',
          tools: ['HTML, CSS and JavaScript', 'Supabase (Auth and Postgres)', 'PeerJS (WebRTC)', 'Google OAuth', 'Render (signalling server)'],
        }}
        externalLink="https://otagon2.github.io/Versus/"
        externalLabel="otagon2.github.io/Versus"
        heroImage="/images/casestudies/versus/1-landing-page-desktop.webp"
        heroImageAlt="Versus landing page on desktop"
      />

      <CaseStudySection title="Context">
        <CaseStudyParagraph lead>
          Group game nights run on paper, group chats and memory. Brackets get lost, tiebreakers start
          arguments, and adding a late player breaks everything.
        </CaseStudyParagraph>

        <CaseStudyList items={[
          { title: 'Paper brackets', description: 'get lost between matches' },
          { title: 'Standings by hand', description: 'goal difference, head-to-head and points all worked out manually' },
          { title: 'No way to follow along', description: 'for the people in the room' },
          { title: 'Late players', description: 'mean rebuilding the bracket' },
        ]} />

        <CaseStudyInsight>
          The fun is in the matches. Fixtures, scores and standings should look after themselves.
        </CaseStudyInsight>
      </CaseStudySection>

      <CaseStudySection title="What I made">
        <CaseStudyParagraph lead>
          Pick a format, add players, and Versus handles the fixtures, standings and knockouts, with a public link
          spectators can open straight away.
        </CaseStudyParagraph>

        <CaseStudyImageGrid
          columns={3}
          images={[
            { src: '/images/casestudies/versus/2-tournament-creator-mobile.webp', alt: 'Creating a tournament on a phone', caption: 'Create' },
            { src: '/images/casestudies/versus/3-loading-tournament.webp', alt: 'Loading a tournament on a phone', caption: 'Load' },
            { src: '/images/casestudies/versus/4-tournament-page.webp', alt: 'The tournament page on a phone', caption: 'Play' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Three formats, one match model">
            <CaseStudyParagraph>
              League, knockout and groups-plus-knockout all use the same match record with different details, so
              standings, sharing and archives only had to be built once.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="A live match hub">
            <CaseStudyParagraph>
              Active matches, upcoming fixtures and the table side by side. The host scores a goal in one tap.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Two ways to share">
            <CaseStudyParagraph>
              <strong>Share Live</strong> streams goals as they happen while the host is online.{' '}
              <strong>Share Public</strong> posts a read-only snapshot that refreshes every five seconds and keeps
              working after the host closes their laptop.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Casual-night details">
            <CaseStudyParagraph>
              A never-ending league that adds the next fixtures when the current ones finish, two-legged ties, and
              walkovers when someone leaves halfway, without rebuilding the bracket.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/versus/6-match-started-admin.webp"
          alt="Scoring a match from the host's view"
          caption="Scoring a match from the host's view."
        />

        <CaseStudyImage
          src="/images/casestudies/versus/5-spectator-view-mobile.webp"
          alt="The read-only spectator view on a phone"
          caption="What spectators see when they open the link: read-only, no sign-up."
        />
      </CaseStudySection>

      <CaseStudySection title="Hard parts">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Live sync without a server per match">
            <CaseStudyParagraph>
              A WebSocket per tournament would have meant paying for idle time. Instead, PeerJS runs over one
              shared signalling server while the host is online, and a Supabase function serves the read-only
              snapshot. Idle tournaments cost nothing.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="FIFA-style tiebreakers">
            <CaseStudyParagraph>
              Points, then goal difference, then goals scored, then head-to-head, recalculated after every score.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Sign-in on a static site">
            <CaseStudyParagraph>
              Versus has no server of its own. Google sign-in through Supabase uses strict redirect allow-lists,
              and row-level security means each tournament belongs to its owner.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      <CaseStudySection title="What I learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="One model beats three">
            <CaseStudyParagraph>
              Avoiding separate code for each format paid off in standings, sharing and archives.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Sharing is the product">
            <CaseStudyParagraph>
              The most useful feedback was "Can I just send my mate the link?" That's why the share buttons sit at
              the top of the page.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/versus/7-tournament-home-page-admin.webp"
          alt="The tournament home in the host's view"
          caption="The host's tournament home during a game night."
        />
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
