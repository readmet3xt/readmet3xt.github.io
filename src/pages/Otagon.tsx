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

export const Otagon = () => {
  return (
    <CaseStudyLayout
      title="Otagon"
      description="How I designed and built Otagon, an AI gaming companion, on my own: a phone app, a desktop connector and the backend."
      externalLink="https://otagon2.github.io/"
      externalLabel="Visit Otagon"
    >
      <CaseStudyHero
        eyebrow="Otalabs, 2025–present"
        title="Never Get Stuck Again"
        subtitle="How I designed and built an AI gaming companion on my own, from idea to a live product on phone and desktop"
        pills={[
          'Product Management',
          'React 18',
          'TypeScript',
          'AI / Gemini',
          'Web + PWA',
          'Supabase',
          'Lemon Squeezy',
        ]}
        intro="I had an idea, no co-founder, and a decision to make: design it or build it. I chose both. Otagon went from concept to a live product: a PWA, a desktop pairing client, free and paid tiers, and an AI stack on Gemini and Supabase. It launched publicly in July 2026 and is still early on users. This is the story of how it got here."
        externalLink="https://otagon2.github.io/"
        externalLabel="otagon2.github.io"
        overview={{
          role: [
            'Founder, Otalabs',
            'Full ownership from research to launch',
            'Design, frontend engineering, AI integration',
            'Backend, billing, mobile packaging, GTM',
          ],
          timeline: 'August 2025 – present',
          recognition: '30+ features, free and paid tiers, installable PWA with desktop pairing. Public launch July 2026.',
          tools: [
            'React 18',
            'TypeScript',
            'Vite',
            'PWA Development',
            'Supabase (Auth, DB, Edge Functions)',
            'Google Gemini 2.x',
            'Electron (desktop connector)',
            'IGDB API',
            'Lemon Squeezy',
            'Tailwind CSS',
            'Framer Motion',
          ],
        }}
        heroImage="/images/casestudies/otagon/1-home-page-landing.webp"
        heroImageAlt="Otagon landing page — Never Get Stuck Again"
      />

      {/* The Problem */}
      <CaseStudySection title="The Problem">
        <CaseStudyParagraph lead>
          Gamers constantly need help — boss strategies, lore context, build optimisation — but
          every existing solution breaks immersion or risks spoilers.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Current Pain Points">
            <CaseStudyList items={[
              { title: 'Alt-tabbing to Google', description: 'Re-explaining your context every time' },
              { title: 'YouTube walkthroughs', description: 'Linear and spoiler-heavy' },
              { title: 'ChatGPT and Claude', description: 'No idea where you are in a game' },
            ]} />
          </CaseStudyCard>

          <CaseStudyCard title="The Core Insight">
            <CaseStudyParagraph>
              Gamers don't need more information — they need <strong>contextual help that knows where they are</strong>.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          Nearly every gamer I interviewed alt-tabbed mid-game to look something up — and a striking number
          avoided seeking help at all, for fear of spoilers. Either way, the flow of play breaks.
        </CaseStudyQuote>

        <CaseStudyImage
          src="/images/casestudies/otagon/10-user-query-on-home-page.webp"
          alt="Otagon home — a user asking a question about their game"
          caption="Instead of alt-tabbing to Google, the player asks Otagon in-context"
          aspectRatio="aspect-auto"
        />
      </CaseStudySection>

      {/* The Vision */}
      <CaseStudySection title="The Vision">
        <CaseStudyParagraph lead>
          An AI companion that sees what you see. Upload a screenshot, or hit F1 on your PC,
          and Otagon instantly knows your game, your location, your progress — and responds without spoilers.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/otagon/11-ai-response.webp"
          alt="Otagon AI response with spoiler-aware, context-aware guidance"
          caption="Otagon reads your game context and responds without spoilers"
          aspectRatio="aspect-auto"
        />
      </CaseStudySection>

      {/* How It Was Built */}
      <CaseStudySection title="How It Was Built">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Phase 1 — Research & Direction">
            <CaseStudyParagraph>
              I interviewed gamers across play styles and mapped the competitive landscape.
              Three distinct personas emerged — the Casual Gamer, the Story Seeker, and the Completionist —
              which directly shaped the tiered product strategy and every feature prioritization decision after.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 2 — MVP">
            <CaseStudyParagraph>
              I made a key early decision: a PWA instead of native apps, so one codebase reached every device.
              That call defined the product's trajectory. I shipped the core: screenshot analysis via
              Gemini 2.x, game detection, conversation history, Game Hub, and PC-to-Mobile sync
              via WebSocket relay.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 3 — Pro Features & Monetization">
            <CaseStudyParagraph>
              Usage patterns revealed the right pricing model: query-based limits, not arbitrary feature gates.
              I built Pro-tier features — Lore & Insights Subtabs, Google Search Grounding for real-time
              meta strategies, Playing vs Planning modes with session summaries — and shipped Lemon Squeezy
              checkout through a hardened Supabase Edge Function.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 4 — Polish & Advanced Systems">
            <CaseStudyParagraph>
              AI Behavior Training — users teach Otagon correct responses when it gets something wrong.
              Hands-Free Mode with TTS for console players. Smart caching that reduced API costs by ~40%.
              A shared <code>game_knowledge_cache</code> that deduplicates IGDB and grounding lookups across users.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 5 — PWA, Gamification & Hardening">
            <CaseStudyParagraph>
              Optimised the PWA for responsive mobile/desktop layouts. Layered in a full gamification
              system — achievements, XP, intent classification, Bronze → Pro tiers. Hardened RLS across
              every user-data table and ran a top-to-bottom security audit.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 6 — Production & Live Ops">
            <CaseStudyParagraph>
              Live, with Lemon Squeezy checkout running through a server-side Edge Function and a
              deploy pipeline I run end to end myself.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/otagon/8-pc-connector.webp"
          alt="Otagon desktop PC connector — pairs your PC to the mobile app"
          caption="The desktop pairing client: hit F1 on PC and the capture syncs to mobile via WebSocket relay"
          aspectRatio="aspect-auto"
        />

        <CaseStudyImageGrid
          columns={3}
          aspectRatio="aspect-auto"
          images={[
            { src: '/images/casestudies/otagon/3-mobile-logged-in-home.webp', alt: 'Otagon mobile home screen once logged in' },
            { src: '/images/casestudies/otagon/5-gaming-hq-home-page.webp', alt: 'Gaming HQ home page', caption: 'Game Hub' },
            { src: '/images/casestudies/otagon/7-connected-to-pc.webp', alt: 'Mobile app showing it is connected to the PC', caption: 'PC-to-mobile sync, live' },
          ]}
        />
      </CaseStudySection>

      {/* Key Design Decisions */}
      <CaseStudySection title="Key Design Decisions">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="The OTAGON Tag System">
            <CaseStudyParagraph>
              Early on, AI responses were generic and unreliable to parse. I designed a structured output format —
              OTAGON tags — that extract game title, location, progress estimate, spoiler risk, and confidence
              level from every screenshot. This made AI output predictable and the entire product more stable.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Before:</strong> free-form text, unparseable. <strong>After:</strong> structured, reliable, product-grade.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Spoiler-Aware Responses">
            <CaseStudyParagraph>
              The most emotionally important feature. Progress-aware AI calibrated to how far you are
              in the game, with user-configurable spoiler tolerance. This was the insight that made Otagon
              feel different from just "ChatGPT for games."
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Playing vs Planning Mode">
            <CaseStudyParagraph>
              A simple mental model with real product impact. <strong>Playing Mode:</strong> concise, immediate
              tactical tips. <strong>Planning Mode:</strong> deeper strategy, auto-generates a session summary
              when you switch. Clean modes map to real user behaviour and reduce prompt engineering complexity.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Genre-Specific Personas">
            <CaseStudyParagraph>
              Generic AI responses were the first major failure point. I built 8+ genre-specific tone profiles —
              the AI feels different helping you with a Soulslike versus an open-world RPG. This single
              change drove a qualitative improvement in perceived response relevance.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Subtabs as First-Class Surfaces">
            <CaseStudyParagraph>
              The AI doesn't just answer — it builds persistent, game-specific panels (Build Guide,
              Collectible Map, Boss Strategy). Subtabs turn one-off answers into a long-lived workspace
              the user keeps returning to.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Gamification That Tracks Intent">
            <CaseStudyParagraph>
              Achievements aren't arbitrary — they're tied to AI intent classification. Ask lore-heavy
              questions and you progress toward "Lore Seeker." This makes XP feel like a reflection of
              your real play style, not a checklist.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          columns={3}
          aspectRatio="aspect-auto"
          images={[
            { src: '/images/casestudies/otagon/12-subtabs-1.webp', alt: 'Subtabs surface — persistent game-specific panel' },
            { src: '/images/casestudies/otagon/13-subtabs-2.webp', alt: 'A second subtabs view with more game-specific content' },
            { src: '/images/casestudies/otagon/18-ai-response-with-suggestion-tabs.webp', alt: 'AI response with suggested subtabs to open', caption: 'AI answers spawn persistent, game-specific subtabs' },
          ]}
        />

        <CaseStudyImage
          src="/images/casestudies/otagon/17-subtabs-in-desktop.webp"
          alt="Subtabs as first-class surfaces in the desktop layout"
          caption="The same subtab workspace, laid out for desktop"
          aspectRatio="aspect-auto"
        />
      </CaseStudySection>

      {/* The Hard Problems */}
      <CaseStudySection title="The Hard Problems">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Screenshot Misclassification">
            <CaseStudyParagraph>
              AI was creating new game tabs for desktop screenshots and launchers.
              Fixed by combining detection signals and, when confidence is low, asking the player
              which game they mean.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Context Loss in Long Conversations">
            <CaseStudyParagraph>
              Long sessions caused token overflow and cost spikes. Built a context summarization service:
              AI condenses history to 300 words, preserves the last 8 messages, triggers before overflow.
              <strong> Consistent costs regardless of session length.</strong>
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Empty Subtabs">
            <CaseStudyParagraph>
              Async AI generation meant Pro users saw blank panels on first load. Switched to a template-first
              approach: subtabs appear immediately in a loading state, populate in the background.
              <strong> Eliminated the complaint entirely.</strong>
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Race Conditions in Message Migration">
            <CaseStudyParagraph>
              Messages were occasionally lost when tab creation competed with message saving. Solved with
              atomic migration: one transaction for creating the tab and moving the messages.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Secure Lemon Squeezy Checkout">
            <CaseStudyParagraph>
              Checkout could not happen client-side without leaking the API key. Routed every checkout
              through a Supabase Edge Function with secrets-scoped env vars and strict origin allow-lists.
              <strong> No secret ever ships to the browser.</strong>
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="RLS on Every User-Data Table">
            <CaseStudyParagraph>
              Audited the schema and added <code>auth_user_id</code>-scoped policies on every user-data
              table — conversations, messages, subtabs, gamification, achievements. A client-side leak
              can no longer turn into a cross-account data leak.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          columns={3}
          aspectRatio="aspect-auto"
          images={[
            { src: '/images/casestudies/otagon/14-sidebar.webp', alt: 'Otagon sidebar navigation' },
            { src: '/images/casestudies/otagon/4-control-sheet.webp', alt: 'Control sheet giving users more controls', caption: 'Per-response controls' },
            { src: '/images/casestudies/otagon/15-game-info-modal.webp', alt: 'Game info modal with IGDB-sourced details' },
          ]}
        />
      </CaseStudySection>

      {/* Results */}
      <CaseStudySection title="Results">
        <CaseStudyStatsGrid
          stats={[
            { value: '30+', label: 'Features shipped', sublabel: 'End-to-end, solo' },
            { value: 'Web & PWA', label: 'Platform coverage', sublabel: 'Desktop, Mobile, PWA' },
            { value: '~40%', label: 'API cost reduction', sublabel: 'Caching + shared knowledge' },
            { value: '8+', label: 'Genre personas', sublabel: 'Souls, RPG, FPS, more' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Shipped">
            <CaseStudyList items={[
              '30+ features end-to-end',
              'Lemon Squeezy payment integration (Edge Function-secured)',
              'WebSocket-based PC-to-Mobile sync',
              'PWA installation and mobile optimisation',
              'Achievements, XP, and tiered progression',
              '~40% API cost reduction via caching',
              'Strict RLS on every user-data table',
            ]} />
          </CaseStudyCard>

          <CaseStudyCard title="Status">
            <CaseStudyParagraph>
              Live since the July 2026 public launch, still early on users. Payments run through
              Lemon Squeezy and a server-side Edge Function, and a security audit is done.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          columns={3}
          aspectRatio="aspect-auto"
          images={[
            { src: '/images/casestudies/otagon/16b-game-library.webp', alt: 'Game library of titles the user has played' },
            { src: '/images/casestudies/otagon/16-gallery.webp', alt: 'Gallery of captured game screenshots', caption: 'Screenshot gallery' },
            { src: '/images/casestudies/otagon/9-pro-features.webp', alt: 'Pro features overview' },
          ]}
        />
      </CaseStudySection>

      {/* What I Learned */}
      <CaseStudySection title="What I Learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Structure beats intelligence">
            <CaseStudyParagraph>
              Free-form AI output is unpredictable at scale. The OTAGON tag system was the single
              most important technical decision I made.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Speed is emotional, not just functional">
            <CaseStudyParagraph>
              Even 5 seconds feels broken for gamers. {"<"}3 seconds feels magic.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Freemium works when free genuinely delivers">
            <CaseStudyParagraph>
              Feature gates feel punitive. Query limits feel fair. That framing changes conversion behaviour.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Early database shortcuts compound">
            <CaseStudyParagraph>
              I built dual-write subtabs (JSONB + normalized tables) because of an early schema decision.
              It worked, but added complexity I'd avoid next time by starting normalized.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Secrets belong on the server, always">
            <CaseStudyParagraph>
              Moving checkout into an Edge Function was the moment Otagon stopped being a side project
              and became a real product. Treat every API key like it's already leaking.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="PWA-first builds cross-platform leverage">
            <CaseStudyParagraph>
              The PWA-first decision paid back twice: it bought me a year of iteration, and allowed
              delivering a near-native experience on both mobile and desktop without a rewrite.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* What's Next */}
      <CaseStudySection title="What's Next">
        <CaseStudyParagraph lead>
          Lemon Squeezy payments are live. The web and PWA builds are fully optimised and ready. In active
          development: performance work, video capture, hands-free TTS conversations, and a ScreenShot
          spin-off that surfaces the same pairing flow as a focused utility. Community features —
          shared builds and strategy sharing — are on the next roadmap. The architecture is built to scale.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/otagon/6-credits-modal.webp"
          alt="Otagon credits modal — query-based usage and Pro upgrade"
          caption="Query-based credits power the freemium model — fair limits over feature gates"
          aspectRatio="aspect-auto"
        />
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
