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

export const Versus = () => {
  return (
    <CaseStudyLayout
      title="Versus"
      description="A pro tournament tracker for FIFA/FC nights — leagues, knockouts, and groups with live scoring, brackets, and shareable spectator links."
      externalLink="https://otagon2.github.io/FC26/"
      externalLabel="Visit Versus"
    >
      <CaseStudyHero
        title="Versus: A Tournament Tracker Built for Couch Co-op"
        subtitle="Designing and shipping a live FIFA/FC tournament platform — leagues, knockouts, groups, and spectator links"
        pills={[
          'Product Design',
          'Vanilla JS',
          'WebRTC',
          'Supabase',
          'PWA',
          'Real-time',
        ]}
        intro="Every FIFA night ended the same way: a paper bracket, a forgotten scoreline, and a debate over who actually advanced. I built Versus so my friends and I could stop arguing about standings and just play — auto-generated fixtures, live scoring, and a share link spectators could open on their phones."
        overview={{
          role: [
            'Solo Designer & Developer',
            'Product, UX, and visual identity',
            'Frontend engineering (vanilla JS)',
            'Realtime sync via PeerJS + Supabase',
          ],
          timeline: '~6 weeks, evenings & weekends',
          recognition: 'Three formats, two-leg ties, live spectator mode, and a never-ending league mode',
          tools: [
            'HTML / CSS / Vanilla JS',
            'Supabase (Auth + Postgres)',
            'PeerJS (WebRTC signaling)',
            'Google OAuth',
            'Render (signaling server)',
            'Lucide icons',
          ],
        }}
        externalLink="https://otagon2.github.io/FC26/"
        externalLabel="Visit Versus"
        heroImage="/versus/hero.png"
        heroImageAlt="Versus tournament dashboard hero"
      />

      {/* The Problem */}
      <CaseStudySection title="The Problem">
        <CaseStudyParagraph lead>
          Group FIFA nights have always lived on paper, group chats, and memory.
          Brackets get smudged, group-stage tiebreakers spark arguments, and nobody
          ever agrees on whose turn it is next.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="The Friction">
            <CaseStudyList items={[
              { title: 'Paper brackets', description: 'Lost between matches, illegible halfway through' },
              { title: 'Manual standings', description: 'GD, head-to-head, and points all done by hand' },
              { title: 'No spectator view', description: 'People in the room had no way to follow along on their phones' },
              { title: 'Restarting is painful', description: 'Add a late player and the entire bracket falls apart' },
            ]} />
          </CaseStudyCard>

          <CaseStudyCard title="The Core Insight">
            <CaseStudyParagraph>
              The fun is in the matches. Everything around them — fixtures, scoring,
              standings, share links — should disappear into the background.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/versus/problem.png"
          alt="Paper-bracket friction"
          caption="The mess of manual brackets, scribbled scoresheets, and missing fixtures"
        />
      </CaseStudySection>

      {/* The Vision */}
      <CaseStudySection title="The Vision">
        <CaseStudyParagraph lead>
          A tournament tracker that feels closer to a broadcast graphic than a
          spreadsheet. Pick a format, drop in players, and the rest takes care
          of itself — fixtures, standings, knockouts, and a public share link
          spectators can open instantly.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/versus/vision.png"
          alt="Versus vision — broadcast-style tournament UI"
          caption="A live, sport-flavoured interface for casual tournaments at home"
        />
      </CaseStudySection>

      {/* How It Was Built */}
      <CaseStudySection title="How It Was Built">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Phase 1 — Setup & Formats">
            <CaseStudyParagraph>
              The first call: support three formats without three separate codebases.
              League (round robin), Knockout, and Hybrid (groups + KO) all share a
              single match state machine, with format-specific generators sitting on top.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 2 — Live Match Hub">
            <CaseStudyParagraph>
              The Match Hub is the moment-to-moment surface — active matches, pending
              fixtures, and live standings side-by-side. Designed so the host can score
              a goal in one tap without losing the bracket.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 3 — Share Live + Public Links">
            <CaseStudyParagraph>
              Two ways to share: <strong>Share Live</strong> opens a WebRTC channel via PeerJS
              for instant updates while the host is online; <strong>Share Public</strong> publishes
              a read-only edge function snapshot that anyone can open, refreshed every 5s.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 4 — Archives & Hardening">
            <CaseStudyParagraph>
              Owner-scoped RLS on every tournament, hardened OAuth redirects, and an
              Archives view so completed seasons stop cluttering the active list.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/versus/build.png"
          alt="Build phases for Versus"
          caption="From paper brackets to a live, shareable tournament app"
        />
      </CaseStudySection>

      {/* Key Design Decisions */}
      <CaseStudySection title="Key Design Decisions">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Single Match State, Three Formats">
            <CaseStudyParagraph>
              Instead of branching the data model per format, every fixture — group game,
              league round, KO leg — is the same record with different metadata.
              This made standings, share links, and archives trivial to build once.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Never-Ending League Mode">
            <CaseStudyParagraph>
              Casual nights rarely follow a fixed table. Never-Ending League auto-generates
              the next set of fixtures the moment the current ones finish — the table just
              keeps updating until the host ends it manually.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Two-Leg Ties, First-Class">
            <CaseStudyParagraph>
              Home/Away matters for the people who care. The knockout engine handles
              aggregate scoring as a built-in option, not an afterthought.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Spectator-First Sharing">
            <CaseStudyParagraph>
              Spectators are mostly on phones, in the same room. The share-link viewer
              is read-only, requires no signup, and loads in under a second.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          columns={2}
          images={[
            { src: '/versus/design-1.png', alt: 'League standings view' },
            { src: '/versus/design-2.png', alt: 'Knockout bracket view', caption: 'League and knockout views sharing the same underlying match model' },
          ]}
        />
      </CaseStudySection>

      {/* The Hard Problems */}
      <CaseStudySection title="The Hard Problems">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Live Sync Without a Backend Per Match">
            <CaseStudyParagraph>
              Running a persistent WebSocket per tournament would explode hosting costs.
              Solved with PeerJS over a single shared signaling server, plus a Supabase
              edge function as the fallback read path.
              <strong> Idle tournaments cost nothing.</strong>
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Tiebreakers That Match FIFA Conventions">
            <CaseStudyParagraph>
              Points → GD → goals scored → head-to-head — encoded as a deterministic
              comparator that runs client-side after every score change.
              <strong> No more arguments at 2am.</strong>
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Mid-Tournament Player Drops">
            <CaseStudyParagraph>
              Someone always rage-quits. Versus handles drops by marking remaining
              fixtures as walkovers without rebuilding the bracket — standings update,
              the rest of the night continues.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="OAuth on a Static Site">
            <CaseStudyParagraph>
              Versus is a static SPA, no Node backend. Supabase + Google OAuth was wired
              up with strict redirect allow-lists, so production and preview deploys can
              share an auth project without leaking sessions.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/versus/hard-problems.png"
          alt="Live sync architecture"
          caption="Architecture: static SPA + Supabase + PeerJS signaling, no per-tournament backend"
        />
      </CaseStudySection>

      {/* Results */}
      <CaseStudySection title="Results">
        <CaseStudyStatsGrid
          stats={[
            { value: '3', label: 'Formats supported', sublabel: 'League, Knockout, Hybrid' },
            { value: '2', label: 'Share modes', sublabel: 'Live (WebRTC) + Public read-only' },
            { value: '0', label: 'Backend servers per match', sublabel: 'Static SPA + signaling' },
            { value: '< 1s', label: 'Spectator load time', sublabel: 'Read-only edge function' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Shipped">
            <CaseStudyList items={[
              'Three tournament formats with shared match model',
              'Google OAuth + Supabase RLS on every tournament',
              'PeerJS live sharing + public read-only viewer',
              'Never-ending league + two-leg ties',
              'Archives view for completed tournaments',
            ]} />
          </CaseStudyCard>

          <CaseStudyCard title="Status">
            <CaseStudyParagraph>
              Live and used at every FIFA night since. The architecture stays cheap
              even as the number of tournaments grows — most of the cost is just static hosting.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/versus/results.png"
          alt="Versus results dashboard"
          caption="Live dashboard during a tournament night"
        />
      </CaseStudySection>

      {/* What I Learned */}
      <CaseStudySection title="What I Learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="One match model beats three">
            <CaseStudyParagraph>
              Resisting per-format code paths paid off everywhere — standings, sharing,
              archives, and analytics all became one implementation.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Real-time doesn't have to mean expensive">
            <CaseStudyParagraph>
              WebRTC for the host-online case, edge function snapshots for everyone else.
              Cheap, fast, and the spectator never sees a spinner.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Social products live or die on share friction">
            <CaseStudyParagraph>
              The single most important UI feedback I got: "Can I just send my mate the link?"
              The Share buttons sit at the top of the page for a reason.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Static SPAs are still underrated">
            <CaseStudyParagraph>
              Vanilla JS, no build, no framework lock-in. Versus loads on a cold cache
              in under a second on 4G — and there's no Node server to keep alive.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* What's Next */}
      <CaseStudySection title="What's Next">
        <CaseStudyParagraph lead>
          Next on deck: a season mode that strings tournaments together, a stats page
          that finally answers "who's the best at FIFA in this group chat," and a
          lightweight commentary layer so spectators can react in real time.
        </CaseStudyParagraph>

        <CaseStudyQuote>
          The goal was never a perfect tournament app — it was a tournament night
          where no one has to fetch a pen.
        </CaseStudyQuote>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
