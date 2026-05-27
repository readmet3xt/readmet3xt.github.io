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
      description="Never Get Stuck Again — How I designed and built an AI gaming companion from zero to a live, multi-platform product, solo."
      externalLink="https://otagon.app"
      externalLabel="Visit otagon.app"
    >
      <CaseStudyHero
        title="Otagon: Never Get Stuck Again"
        subtitle="How I designed and built an AI gaming companion from zero to a live, multi-platform product — solo"
        pills={[
          'Product Management',
          'React 18',
          'TypeScript',
          'AI / Gemini',
          'PWA + iOS + Android',
          'Supabase',
          'Lemon Squeezy',
        ]}
        intro="I had an idea, no co-founder, and a decision to make: design it or build it. I chose both. Over the past year I've gone from concept to a production product spanning a PWA, a Capacitor-packaged iOS and Android app, a desktop pairing client, paid tiers via Lemon Squeezy, gamification, and an AI stack built on Gemini and Supabase. This case study is the story of how it actually got here."
        externalLink="https://otagon.app"
        externalLabel="otagon.app"
        overview={{
          role: [
            'Product Manager & Solo Developer',
            'Full ownership from research to launch',
            'Design, frontend engineering, AI integration',
            'Backend, billing, mobile packaging, GTM',
          ],
          timeline: '12+ months, August 2025 – present',
          recognition: '30+ shipped features, paid tier live on Lemon Squeezy, iOS & Android packaged via Capacitor',
          tools: [
            'React 18',
            'TypeScript',
            'Vite',
            'Capacitor (iOS + Android)',
            'Supabase (Auth, DB, Edge Functions)',
            'Google Gemini 2.x',
            'IGDB API',
            'Lemon Squeezy',
            'Tailwind CSS',
            'Framer Motion',
          ],
        }}
        heroImage="/otagon/otagon3.png"
        heroImageAlt="Otagon Gaming Companion Interface"
      />

      {/* The Problem */}
      <CaseStudySection title="The Problem">
        <CaseStudyParagraph lead>
          Gamers constantly need help — boss strategies, lore context, build optimization — but
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
          78% of gamers alt-tab during gameplay. 45% avoid seeking help entirely due to spoiler anxiety.
          3–5 minutes lost per query.
        </CaseStudyQuote>

        <CaseStudyImage
          src="/otagon/workinprogess.png"
          alt="The Problem — Alt-tabbing and spoiler anxiety"
          caption="The friction gamers face when seeking help during gameplay"
        />
      </CaseStudySection>

      {/* The Vision */}
      <CaseStudySection title="The Vision">
        <CaseStudyParagraph lead>
          An AI companion that sees what you see. Upload a screenshot, or hit F1 on your PC,
          and Otagon instantly knows your game, your location, your progress — and responds without spoilers.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/otagon/aiprocessing.png"
          alt="Otagon Vision — Screenshot analysis flow"
          caption="How Otagon understands your game context from a single screenshot"
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
              I made a key early decision: PWA over native app. 2 weeks to launch versus 2 months.
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

          <CaseStudyCard title="Phase 5 — Mobile, Gamification & Hardening">
            <CaseStudyParagraph>
              Packaged the PWA into iOS and Android builds via Capacitor. Layered in a full gamification
              system — achievements, XP, intent classification, Bronze → Pro tiers. Hardened RLS across
              every user-data table and ran a top-to-bottom security audit.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 6 — Production & Live Ops">
            <CaseStudyParagraph>
              Live in production with Lemon Squeezy checkout, a deployed Edge Function on the
              production Supabase project, and a deploy pipeline I run end-to-end alone.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/otagon/vision/1.png"
          alt="Development phases timeline"
          caption="Six phases from concept to a live, multi-platform product"
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
              when you switch. Clean modes map to real user behavior and reduce prompt engineering complexity.
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
          columns={2}
          images={[
            { src: '/otagon/vision/2.png', alt: 'OTAGON Tag System and design decisions 1' },
            { src: '/otagon/vision/3.png', alt: 'OTAGON Tag System and design decisions 2', caption: 'Structured AI output format that powers reliable game context extraction' },
          ]}
        />
      </CaseStudySection>

      {/* The Hard Problems */}
      <CaseStudySection title="The Hard Problems">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Screenshot Misclassification">
            <CaseStudyParagraph>
              AI was creating new game tabs for desktop screenshots and launchers.
              Fixed with IS_FULLSCREEN detection and confidence scoring.
              <strong> 80% reduction in false tabs.</strong>
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
              atomic migration — single transaction for tab creation and message move.
              <strong> Zero data loss since.</strong>
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

        <CaseStudyImage
          src="/otagon/vision/4.png"
          alt="Technical challenges and solutions"
          caption="Hard engineering problems that required creative solutions"
        />
      </CaseStudySection>

      {/* Results */}
      <CaseStudySection title="Results">
        <CaseStudyStatsGrid
          stats={[
            { value: '30+', label: 'Features shipped', sublabel: 'End-to-end, solo' },
            { value: '3', label: 'Platforms live', sublabel: 'PWA, iOS, Android' },
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
              'iOS + Android builds via Capacitor',
              'Achievements, XP, and tiered progression',
              '~40% API cost reduction via caching',
              'Strict RLS on every user-data table',
            ]} />
          </CaseStudyCard>

          <CaseStudyCard title="Status">
            <CaseStudyParagraph>
              Live in production with Lemon Squeezy payments, the Edge Function deployed to the
              production Supabase project, mobile builds packaged, and the security audit closed out.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/otagon/vision/5.png"
          alt="Results dashboard and metrics"
          caption="Production metrics and achievement milestones"
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
              Feature gates feel punitive. Query limits feel fair. That framing changes conversion behavior.
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

          <CaseStudyCard title="PWA-first earns you mobile for free">
            <CaseStudyParagraph>
              The PWA-first decision paid back twice: it bought me a year of iteration, and Capacitor
              turned the same codebase into iOS and Android builds without a rewrite.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* What's Next */}
      <CaseStudySection title="What's Next">
        <CaseStudyParagraph lead>
          Lemon Squeezy payments are live. iOS and Android builds are packaged and ready. In active
          development: performance work, video capture, hands-free TTS conversations, and a ScreenShot
          spin-off that surfaces the same pairing flow as a focused utility. Community features —
          shared builds and strategy sharing — are on the next roadmap. The architecture is built to scale.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/otagon/vision/6.png"
          alt="Future roadmap"
          caption="Upcoming features and platform expansion plans"
        />
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
