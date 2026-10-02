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
  CaseStudyStatsGrid,
} from '@/components/case-study';

export const Otagon = () => {
  return (
    <CaseStudyLayout title="Otagon" externalLink="https://otagon2.github.io/" externalLabel="Try Otagon">
      <CaseStudyHero
        eyebrow="Otalabs, 2025–present"
        title="Otagon: help for gamers that doesn't spoil the game"
        subtitle="How I designed and built an AI gaming companion on my own, from idea to a live product on phone and desktop"
        intro="I had an idea, no co-founder, and a choice: design it or build it. I did both. Otagon is a phone app (PWA), a Windows desktop connector and a backend on Supabase, with Gemini reading your screenshots. It launched publicly in July 2026 and is still early on users. This is how it got here, including what broke."
        externalLink="https://otagon2.github.io/"
        externalLabel="otagon2.github.io"
        overview={{
          role: [
            'Founder, Otalabs',
            'Everything from research to launch',
            'Design, front-end engineering and AI integration',
            'Backend, billing, packaging and go-to-market',
          ],
          timeline: 'August 2025 to now; public launch July 2026',
          recognition: '30+ features, free and paid tiers, installable PWA with desktop pairing',
          tools: [
            'React 18',
            'TypeScript',
            'Vite',
            'PWA',
            'Supabase (Auth, Postgres, Edge Functions)',
            'Google Gemini 2.x',
            'Electron (desktop connector)',
            'IGDB API',
            'Lemon Squeezy',
            'Tailwind CSS',
          ],
        }}
        heroImage="/images/casestudies/otagon/1-home-page-landing.webp"
        heroImageAlt="Otagon landing page"
      />

      <CaseStudySection title="Context">
        <CaseStudyParagraph lead>
          Players often need help with a boss, a puzzle or a bit of lore, and every way of getting it either pulls
          them out of the game or risks spoilers.
        </CaseStudyParagraph>

        <CaseStudyList items={[
          { title: 'Searching the web', description: 'means alt-tabbing out and explaining where you are every time' },
          { title: 'Video walkthroughs', description: 'are long, linear and full of spoilers' },
          { title: 'General AI chatbots', description: 'have no idea where you are in the game' },
        ]} />

        <CaseStudyParagraph>
          Nearly every player I interviewed alt-tabbed mid-game to look something up, and a lot of them avoided
          asking for help at all because they were afraid of spoilers. Either way, the game stops.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/otagon/10-user-query-on-home-page.webp"
          alt="A player asking Otagon a question about their game"
          caption="The player asks Otagon instead of leaving the game."
        />
      </CaseStudySection>

      <CaseStudySection title="Insight">
        <CaseStudyInsight>
          Players don't need more information. They need help that knows where they are, and stops there.
        </CaseStudyInsight>

        <CaseStudyParagraph>
          So Otagon looks at what you see. Upload a screenshot, or press F1 on your PC, and it works out the game,
          where you are and how far you've got, then answers without going past that point.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/otagon/11-ai-response.webp"
          alt="Otagon answering with a hint that matches the player's progress"
          caption="A hint matched to the player's progress."
        />
      </CaseStudySection>

      <CaseStudySection title="What I made">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="1. Research and direction">
            <CaseStudyParagraph>
              I interviewed players with different play styles and looked at the existing tools. Three personas
              came out of it, the Casual Gamer, the Story Seeker and the Completionist, and they shaped the tiers
              and what I built first.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="2. MVP">
            <CaseStudyParagraph>
              An early decision: a PWA instead of native apps, so one codebase reached every device. I built the
              core: screenshot analysis with Gemini, game detection, conversation history, a game hub, and PC-to-phone
              sync through a WebSocket relay.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="3. Pro features and pricing">
            <CaseStudyParagraph>
              I chose query-based limits instead of locked features. Pro adds Lore and Insights subtabs, Google
              Search grounding for current strategies, and Playing and Planning modes with session summaries.
              Checkout runs through a Supabase Edge Function.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="4. Polish and cost">
            <CaseStudyParagraph>
              Players can correct Otagon when it gets something wrong. A hands-free mode reads hints aloud for
              console players. Caching cut AI API costs by about 40%, and a shared game-knowledge cache stops the
              same IGDB and search lookups being repeated across players.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="5. PWA, gamification and hardening">
            <CaseStudyParagraph>
              Responsive layouts for phone and desktop, achievements and XP tied to how you actually play,
              row-level security on every user-data table, and a full security audit.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="6. Launch">
            <CaseStudyParagraph>
              Public launch in July 2026, with Lemon Squeezy checkout through a server-side Edge Function and a
              deploy pipeline I run myself.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/otagon/8-pc-connector.webp"
          alt="The Otagon desktop connector that pairs a PC with the phone app"
          caption="The desktop connector: press F1 on your PC and the screenshot reaches your phone through the relay."
        />

        <CaseStudyImageGrid
          layout="row"
          columns={3}
          images={[
            { src: '/images/casestudies/otagon/3-mobile-logged-in-home.webp', alt: 'Otagon home on a phone after signing in', caption: 'Home on a phone' },
            { src: '/images/casestudies/otagon/5-gaming-hq-home-page.webp', alt: 'The game hub', caption: 'The game hub' },
            { src: '/images/casestudies/otagon/7-connected-to-pc.webp', alt: 'The phone app connected to the PC', caption: 'Connected to the PC' },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection title="Design decisions">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="A structured output format for the AI">
            <CaseStudyParagraph>
              Early on, the AI's answers were free-form text that the app couldn't rely on. I designed a structured
              format, the OTAGON tags, that pulls the game, location, progress, spoiler risk and confidence out of
              every screenshot. The app reads the tags, not the prose, which made the whole product more stable.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Spoiler-aware answers">
            <CaseStudyParagraph>
              Answers are matched to how far you've got, and you choose how much you're willing to see. This is
              what makes Otagon different from a general chatbot for games.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Playing and Planning modes">
            <CaseStudyParagraph>
              <strong>Playing</strong> gives short, immediate tips. <strong>Planning</strong> goes deeper and writes
              a session summary when you switch. Two clear modes match how people actually use it.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Companion personas">
            <CaseStudyParagraph>
              Generic answers were the first big problem. Players can pick one of five companion personas (Lore
              Scholar, Strategist, Hype Friend, Minimalist or Balanced) to set how Otagon talks to them.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Subtabs that last">
            <CaseStudyParagraph>
              The AI builds lasting panels for each game, such as a build guide, a collectibles map or a boss
              strategy, so one-off answers become a workspace you come back to.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Progress that reflects how you play">
            <CaseStudyParagraph>
              Achievements follow the kind of questions you ask. Ask a lot about lore and you move towards "Lore
              Seeker", so XP reflects your play style.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          layout="row"
          columns={3}
          images={[
            { src: '/images/casestudies/otagon/12-subtabs-1.webp', alt: 'A game-specific subtab', caption: 'A subtab' },
            { src: '/images/casestudies/otagon/13-subtabs-2.webp', alt: 'Another game-specific subtab', caption: 'Another subtab' },
            { src: '/images/casestudies/otagon/18-ai-response-with-suggestion-tabs.webp', alt: 'An answer with suggested subtabs', caption: 'An answer that suggests subtabs' },
          ]}
        />

        <CaseStudyImage
          src="/images/casestudies/otagon/17-subtabs-in-desktop.webp"
          alt="Subtabs in the desktop layout"
          caption="The same subtabs on desktop."
        />
      </CaseStudySection>

      <CaseStudySection title="How I built it with AI tools">
        <CaseStudyParagraph lead>
          I built Otagon with AI coding tools, mostly Claude Code. Of the 920 commits in the repository, 259 were
          written or co-written by Claude. My part was deciding what to build, writing the specs, reviewing every
          change and testing it on real games.
        </CaseStudyParagraph>

        <CaseStudyParagraph>
          The tools made me fast at writing code. They didn't notice what was wrong. Each of these fixes started
          with me watching a real session:
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Wrong game tabs">
            <CaseStudyParagraph>
              Screenshots of the desktop or a game launcher were opening new game tabs. I combined several
              detection signals into one decision, and when confidence is low, Otagon now asks the player which
              game they mean instead of guessing.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Long chats breaking">
            <CaseStudyParagraph>
              Long sessions ran past the model's context limit and costs climbed. I added a summariser that
              condenses older history to 300 words and keeps the last 8 messages as they are, so cost stays flat
              however long you play.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Messages vanishing">
            <CaseStudyParagraph>
              Moving messages into a new tab could lose them if tab creation and saving raced each other. I rewrote
              the move as one atomic transaction, so each message ends up in exactly one place.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Empty panels">
            <CaseStudyParagraph>
              Pro panels were generated in the background, so they first appeared blank. Now they appear straight
              away in a loading state and fill in as the content arrives.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Keeping secrets off the browser">
            <CaseStudyParagraph>
              Checkout couldn't run in the browser without exposing the payment API key. Every checkout goes
              through a Supabase Edge Function with server-side secrets and a strict list of allowed origins.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Row-level security everywhere">
            <CaseStudyParagraph>
              I audited the schema and added policies scoped to the signed-in user on every user-data table:
              conversations, messages, subtabs and achievements. A front-end bug can't expose one player's data
              to another.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          layout="row"
          columns={3}
          images={[
            { src: '/images/casestudies/otagon/14-sidebar.webp', alt: 'Otagon sidebar navigation', caption: 'Navigation' },
            { src: '/images/casestudies/otagon/4-control-sheet.webp', alt: 'Controls for each answer', caption: 'Controls for each answer' },
            { src: '/images/casestudies/otagon/15-game-info-modal.webp', alt: 'Game details from IGDB', caption: 'Game details from IGDB' },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection title="Where it is now">
        <CaseStudyStatsGrid
          stats={[
            { value: '30+', label: 'Features', sublabel: 'Designed and built by me' },
            { value: '3', label: 'Parts', sublabel: 'Phone PWA, desktop connector, backend' },
            { value: '~40%', label: 'AI API cost cut', sublabel: 'Caching and shared knowledge' },
            { value: 'Jul 2026', label: 'Public launch', sublabel: 'Early on users' },
          ]}
        />

        <CaseStudyParagraph>
          Otagon is live and still early on users, so I don't claim results from usage yet. The next work is
          growing the player base, community features such as shared builds and strategies, and performance.
        </CaseStudyParagraph>

        <CaseStudyImageGrid
          layout="row"
          columns={3}
          images={[
            { src: '/images/casestudies/otagon/16b-game-library.webp', alt: 'The library of games a player has played', caption: 'Game library' },
            { src: '/images/casestudies/otagon/16-gallery.webp', alt: 'Gallery of captured screenshots', caption: 'Screenshot gallery' },
            { src: '/images/casestudies/otagon/9-pro-features.webp', alt: 'Overview of the Pro features', caption: 'Pro features' },
          ]}
        />

        <CaseStudyImage
          src="/images/casestudies/otagon/6-credits-modal.webp"
          alt="Query-based credits and the Pro upgrade"
          caption="Query-based credits: limits on use instead of locked features."
        />
      </CaseStudySection>

      <CaseStudySection title="What I learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Structure beats cleverness">
            <CaseStudyParagraph>
              Free-form AI output is unpredictable. The structured tags were the most important technical
              decision I made.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Speed is a feeling">
            <CaseStudyParagraph>
              For a player mid-game, five seconds feels broken and under three feels instant.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Early database shortcuts compound">
            <CaseStudyParagraph>
              An early schema decision forced me to write subtabs in two places (JSON and normalised tables). It
              works, but next time I'd start normalised.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Secrets belong on the server">
            <CaseStudyParagraph>
              Moving checkout into an Edge Function was when Otagon stopped feeling like a side project. I treat
              every API key as if it's already leaking.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
