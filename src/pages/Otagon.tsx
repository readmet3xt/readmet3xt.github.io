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
      description="Never Get Stuck Again — How I designed and built an AI gaming companion from zero to production, solo."
      externalLink="https://otagon.app"
      externalLabel="Visit otagon.app"
    >
      <CaseStudyHero
        title="Otagon: Never Get Stuck Again"
        subtitle="How I designed and built an AI gaming companion from zero to production — solo"
        pills={[
          'Product Management',
          'React',
          'TypeScript',
          'AI/ML',
          'PWA',
          'Supabase',
          'Google Gemini',
        ]}
        intro="I had an idea, no co-founder, and a decision to make: design it or build it. I chose both. Over 6 months I went from concept to a production-ready PWA with 25+ features, 3 user tiers, real paying users, and AI response times under 3 seconds. This is the story of how that happened."
        externalLink="https://otagon.app"
        externalLabel="otagon.app"
        overview={{
          role: [
            'Product Manager & Solo Developer',
            'Full ownership from research to launch',
            'Design, frontend engineering, AI integration',
            'Go-to-market strategy',
          ],
          timeline: '6+ months, August 2025–Present',
          recognition: 'Lemon Squeezy payments live, 25+ features shipped, <3s AI response time',
          tools: [
            'React 18',
            'TypeScript',
            'Supabase',
            'Google Gemini 2.5 Flash',
            'PostgreSQL',
            'Tailwind CSS',
            'PWA',
          ],
        }}
        heroImage="/images/casestudies/otagon/hero.png"
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
          src="/images/casestudies/otagon/image-1.png"
          alt="The Problem — Alt-tabbing and spoiler anxiety"
          caption="The friction gamers face when seeking help during gameplay"
        />
      </CaseStudySection>

      {/* The Vision */}
      <CaseStudySection title="The Vision">
        <CaseStudyParagraph lead>
          An AI companion that sees what you see. Upload a screenshot, and Otagon instantly knows your game,
          your location, your progress — and responds without spoilers.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/otagon/image-2.png"
          alt="Otagon Vision — Screenshot analysis flow"
          caption="How Otagon understands your game context from a single screenshot"
        />
      </CaseStudySection>

      {/* How It Was Built */}
      <CaseStudySection title="How It Was Built">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Phase 1 — Research & Direction (Weeks 1–3)">
            <CaseStudyParagraph>
              I interviewed gamers across play styles and mapped the competitive landscape.
              Three distinct personas emerged — the Casual Gamer, the Story Seeker, and the Completionist —
              which directly shaped the tiered product strategy and every feature prioritization decision after.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 2 — MVP (Weeks 4–12)">
            <CaseStudyParagraph>
              I made a key early decision: PWA over native app. 2 weeks to launch versus 2 months.
              That call defined the product's trajectory. I shipped the core: screenshot analysis via
              Gemini 2.5 Flash, game detection, conversation history, Game Hub, and PC-to-Mobile sync
              via WebSocket relay.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 3 — Pro Features & Monetization (Weeks 13–20)">
            <CaseStudyParagraph>
              Usage patterns revealed the right pricing model: query-based limits, not arbitrary feature gates.
              I built Pro-tier features — Lore & Insights Subtabs, Google Search Grounding for real-time
              meta strategies, Playing vs Planning modes with session summaries.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 4 — Polish & Advanced Systems (Weeks 21–28)">
            <CaseStudyParagraph>
              AI Behavior Training — users can teach Otagon correct responses when it gets something wrong.
              Hands-Free Mode with TTS for console players. Smart caching that reduced API costs by 40%.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/otagon/image-3.png"
          alt="Development phases timeline"
          caption="The four phases of building Otagon from concept to production"
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
              the AI feels different helping you with a FromSouls game versus an open-world RPG. This single
              change drove a qualitative improvement in perceived response relevance.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/otagon/image-4.png"
          alt="OTAGON Tag System and design decisions"
          caption="Structured AI output format that powers reliable game context extraction"
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
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/otagon/image-5.png"
          alt="Technical challenges and solutions"
          caption="Hard engineering problems that required creative solutions"
        />
      </CaseStudySection>

      {/* Results */}
      <CaseStudySection title="Results">
        <CaseStudyStatsGrid
          stats={[
            { value: '<3s', label: 'AI Response Time', sublabel: '✅ Achieved' },
            { value: '95%+', label: 'Game Detection', sublabel: '✅ Achieved' },
            { value: '99%+', label: 'Uptime', sublabel: '✅ Maintained' },
            { value: '0', label: 'Critical Bugs', sublabel: '✅ Zero' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Shipped">
            <CaseStudyList items={[
              '25+ features end-to-end',
              '3 monetized user tiers',
              'Lemon Squeezy payment integration live',
              '~40% API cost reduction via caching',
            ]} />
          </CaseStudyCard>

          <CaseStudyCard title="Status">
            <CaseStudyParagraph>
              Fully shipped. Live PWA with active payments via Lemon Squeezy, 3 monetized user tiers,
              and real users on the platform.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/otagon/image-6.png"
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
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* What's Next */}
      <CaseStudySection title="What's Next">
        <CaseStudyParagraph lead>
          Stripe payment integration and mobile app store deployment are in active development.
          Community features — shared builds, strategy sharing — are on the Q2 roadmap.
          The architecture is built to scale.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/otagon/image-7.png"
          alt="Future roadmap"
          caption="Upcoming features and platform expansion plans"
        />
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
