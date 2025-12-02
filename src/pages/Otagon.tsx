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
      description="AI-Powered Gaming Companion Platform - Full product ownership from conception to launch. Built with React, TypeScript, and Google Gemini AI."
      externalLink="https://otagon.app"
      externalLabel="Visit otagon.app"
    >
      <CaseStudyHero
        title="AI-Powered Gaming Companion Platform"
        subtitle="Full product ownership from conception to launch"
        pills={[
          'Product Management',
          'React',
          'TypeScript',
          'AI/ML',
          'PWA',
          'Supabase',
          'Google Gemini',
        ]}
        intro="Otagon is an AI-powered gaming companion that helps gamers get real-time assistance, strategy tips, and game-specific insights through screenshot analysis and natural conversation. As the Product Manager & Solo Developer with full ownership, I led the product from conception to launch over 6+ months of continuous development and iteration, building a production-ready PWA serving 3 user tiers with 25+ core features and advanced AI integration with Google Gemini 2.5 Flash."
        externalLink="https://otagon.app"
        externalLabel="otagon.app"
        overview={{
          role: [
            'Product Manager & Solo Developer',
            'Full product ownership from conception to launch',
            'User research and persona development',
            'Feature specification and prioritization',
            'Go-to-market strategy and pricing',
          ],
          timeline: '6+ months of continuous development (Started August 2025)',
          recognition: '25+ features shipped, <3s AI response time, 99%+ uptime',
          tools: [
            'React 18',
            'TypeScript',
            'Vite',
            'Supabase',
            'Google Gemini 2.5 Flash',
            'PostgreSQL',
            'Tailwind CSS',
            'PWA',
            'Web Speech API',
          ],
        }}
        heroImage="/otagon/workinprogess.png"
        heroImageAlt="Otagon Gaming Companion Interface"
      />

      {/* Problem Statement */}
      <CaseStudySection title="Problem Statement">
        <CaseStudyParagraph lead>
          Gamers frequently need help during gameplay—whether it's boss strategies, storyline context, 
          item locations, or build optimization. Current solutions create significant friction that 
          breaks immersion and creates anxiety around spoilers.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Current Solutions & Problems">
            <CaseStudyList items={[
              { title: 'Alt-Tab to Browser', description: 'Breaks immersion, risk of spoilers, requires context explanation' },
              { title: 'YouTube Walkthroughs', description: 'Time-consuming, linear format, often contains spoilers' },
              { title: 'Gaming Wikis', description: 'Outdated information, overwhelming detail, spoiler-heavy structure' },
              { title: 'Discord/Reddit', description: 'Wait time for responses, inconsistent quality, requires asking repeatedly' },
              { title: 'ChatGPT/Claude', description: 'No game context, generic responses, no image understanding for games' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="User Research Insights">
            <CaseStudyList items={[
              { title: '78%', description: 'of gamers alt-tab during gameplay sessions' },
              { title: '3-5 minutes', description: 'average time spent searching for game help per query' },
              { title: '45%', description: 'avoid seeking help due to spoiler anxiety' },
              { title: '65%', description: 'prefer mobile companion apps for console/PC gaming' },
              { title: 'Key insight', description: 'Gamers want contextual help that understands WHERE they are in the game' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="The Otagon Advantage">
          <CaseStudyList items={[
            { title: 'Context Understanding', description: 'Screenshot analysis knows exactly where you are' },
            { title: 'Spoiler Protection', description: 'Progress-aware responses with configurable tolerance' },
            { title: 'Speed', description: '<3 second responses, no waiting for humans' },
            { title: 'Accessibility', description: 'Mobile companion for console/PC, hands-free mode with TTS' },
            { title: 'Continuity', description: 'Conversation history, session summaries, subtab insights' },
          ]} />
        </CaseStudyCard>

        <CaseStudyQuote author="Product Vision" role="The Spark">
          Create an AI companion that sees what you see and knows where you are—no spoilers, no context switching, just instant help.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Product Development Journey */}
      <CaseStudySection title="Product Development Journey">
        <CaseStudyParagraph lead>
          As an avid gamer, I experienced the frustration firsthand—constantly alt-tabbing to search for 
          boss strategies, missing story elements, and accidentally encountering spoilers. The existing 
          solutions were either too slow, too spoiler-heavy, or required too much context switching.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Phase 1: Ideation & Research (Weeks 1-3)">
            <CaseStudyList items={[
              'Conducted user research with gamers across different play styles',
              'Identified key pain points: alt-tabbing, spoilers, context switching',
              'Defined initial vision for contextual AI gaming assistance',
              'Mapped competitive landscape and gaps in existing solutions',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 2: MVP Development (Weeks 4-12)">
            <CaseStudyList items={[
              'Core technical decisions: PWA over Native (2-week vs 2-month launch)',
              'Chose Supabase for real-time subscriptions, auth, storage, Edge Functions',
              'Integrated Google Gemini 2.5 Flash for multimodal AI with web search grounding',
              'Shipped MVP: Screenshot analysis, chat, Game Hub, progress tracking, PC-to-Mobile sync',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 3: Pro Features & Monetization (Weeks 13-20)">
            <CaseStudyList items={[
              'Developed query-based pricing model from usage pattern analysis',
              'Built Lore & Insights Subtabs with auto-generated, context-aware panels',
              'Implemented Google Search Grounding for real-time game news and meta strategies',
              'Created Playing/Planning Modes with session summaries',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 4: Polish & Advanced Features (Weeks 21-28)">
            <CaseStudyList items={[
              'AI Behavior Training System: Users can teach AI correct responses',
              'Hands-Free Mode with TTS, wake lock, and background audio',
              'Smart Caching Architecture: 40% reduction in API costs',
              'Player Profile System: Hint style, focus, tone, spoiler tolerance',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Early Challenges & Pivots">
          <CaseStudyList items={[
            { title: 'AI responses too generic', description: 'Pivoted to genre-specific personas with immersion context → 40% improvement in relevance' },
            { title: 'Screenshot misclassification', description: 'Added OTAGON tag system with IS_FULLSCREEN detection → 80% reduction in false tabs' },
            { title: 'Context loss in long conversations', description: 'Implemented context summarization service (300-word limit) → Consistent token costs' },
            { title: 'Subtabs appearing empty', description: 'Template-first approach with async AI population → Eliminated empty subtab complaints' },
          ]} />
        </CaseStudyCard>
      </CaseStudySection>

      {/* Product Vision & Strategy */}
      <CaseStudySection title="Product Vision & Strategy">
        <CaseStudyQuote>
          Be the ultimate AI gaming companion that understands where you are in any game and 
          provides exactly the help you need, without spoilers.
        </CaseStudyQuote>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🎯 Instant Context Understanding">
            <CaseStudyList items={[
              { title: 'Screenshot Analysis', description: 'Automatic game detection, location identification, UI element recognition' },
              { title: 'Progress Tracking', description: 'AI estimates completion percentage, tracks current objectives' },
              { title: 'Spoiler-Aware Responses', description: 'Responses calibrated to player\'s progress and spoiler tolerance' },
              { title: 'OTAGON Tag System', description: 'Structured AI output for reliable data extraction' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="📱 Multi-Platform Accessibility">
            <CaseStudyList items={[
              { title: 'PWA Architecture', description: 'Install on any device, offline-capable with service workers' },
              { title: 'PC Companion App', description: 'Native Electron app for seamless screenshot capture' },
              { title: 'WebSocket Sync', description: 'Real-time PC-to-Mobile screenshot transfer' },
              { title: '6-Digit Pairing', description: 'Simple connection flow with code-based authentication' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="🧠 Personalized Intelligence">
            <CaseStudyList items={[
              { title: 'Player Profiles', description: 'Customizable hint style, focus, tone, and spoiler preferences' },
              { title: 'Genre-Specific Personas', description: 'Character immersion service adapts AI personality' },
              { title: 'Conversation Memory', description: 'Context summarization maintains continuity' },
              { title: 'Teachable AI', description: 'User corrections improve future responses' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="💰 Sustainable Business Model">
            <CaseStudyList items={[
              { title: 'Query-Based Limits', description: 'Fair, predictable pricing (not arbitrary feature gates)' },
              { title: 'Clear Value Differentiation', description: 'Pro features genuinely enhance experience' },
              { title: 'Vanguard Program', description: 'Founding member incentives for early adopters' },
              { title: 'Freemium Funnel', description: '7-day trial converts users through demonstrated value' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* User Personas */}
      <CaseStudySection title="User Personas & Journeys">
        <CaseStudyParagraph lead>
          Through user research, I identified three primary personas that shaped our tiered 
          product strategy and feature prioritization.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="🎮 The Casual Gamer">
            <CaseStudyParagraph>
              <strong>"Weekend Warrior"</strong><br/>
              25-35, plays 5-10 hours/week<br/><br/>
              <strong>Pain Point:</strong> Gets stuck on bosses, loses momentum between sessions<br/>
              <strong>Need:</strong> Quick tips without deep research, session continuity<br/>
              <strong>Tier:</strong> Free (55 text + 25 image queries/month)<br/>
              <strong>Key Features:</strong> Screenshot help, quick tips, Game Hub
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="⚔️ The Dedicated Player">
            <CaseStudyParagraph>
              <strong>"Story Seeker"</strong><br/>
              20-30, plays 15-25 hours/week<br/><br/>
              <strong>Pain Point:</strong> Wants to experience full story without missing content<br/>
              <strong>Need:</strong> Lore context, hidden secrets, optimal narrative paths<br/>
              <strong>Tier:</strong> Pro ($3.99/month)<br/>
              <strong>Key Features:</strong> Story So Far subtab, character insights, spoiler-strict mode
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🏆 The Completionist">
            <CaseStudyParagraph>
              <strong>"Achievement Hunter"</strong><br/>
              18-35, plays 30+ hours/week<br/><br/>
              <strong>Pain Point:</strong> Needs comprehensive guides for 100% completion<br/>
              <strong>Need:</strong> Detailed checklists, missable items, build optimization<br/>
              <strong>Tier:</strong> Vanguard Pro ($20/year)<br/>
              <strong>Key Features:</strong> All subtabs, Google Search grounding, multiple game tabs
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Feature Specification */}
      <CaseStudySection title="Complete Feature Set (25+ Features)">
        <CaseStudyParagraph lead>
          I designed and shipped 25+ core features with clear tier differentiation, 
          implementing advanced AI systems and comprehensive user experience enhancements.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Core Features (All Tiers)">
            <CaseStudyList items={[
              { title: 'Screenshot Analysis', description: 'AI-powered game detection and context extraction with Gemini 2.5 Flash' },
              { title: 'Game Detection', description: 'Automatic identification with 20+ genre classifications' },
              { title: 'Game Tabs', description: 'Organized conversations per game with atomic tab creation' },
              { title: 'Game Hub', description: 'Central hub for cross-game conversations with different prompt system' },
              { title: 'PC-to-Mobile Sync', description: 'WebSocket relay with 6-digit pairing codes' },
              { title: 'Progress Tracking', description: 'AI-estimated 0-100% completion with objective tracking' },
              { title: 'Playing/Planning Modes', description: 'Mode-specific prompts with session summaries' },
              { title: 'Player Profiles', description: '4-dimension profile (hint style, focus, tone, spoiler tolerance)' },
              { title: 'Hands-Free Mode', description: 'TTS with wake lock and background audio playback' },
              { title: 'Offline Support', description: 'Service worker with IndexedDB caching' },
              { title: 'Gaming Focus Guardrails', description: 'Polite redirection for non-gaming queries' },
              { title: 'Suggested Prompts', description: 'AI-generated with usage tracking and daily reset' },
              { title: 'Markdown Rendering', description: 'Custom renderer with code blocks, lists, formatting' },
              { title: 'Image Expansion', description: 'Modal viewer with download option' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Pro Features">
            <CaseStudyList items={[
              { title: 'Lore & Insights Subtabs', description: 'Genre-specific tabs (Story So Far, Characters, Boss Strategy, Tips)' },
              { title: 'Google Search Grounding', description: 'Real-time web info: patch notes, meta strategies, news' },
              { title: '28x More Text Queries', description: '1,583 vs 55 per month—unlimited-feeling experience' },
              { title: '13x More Image Queries', description: '328 vs 25 per month—analyze every screenshot' },
              { title: 'Ad-Free Experience', description: 'Clean, immersive interface with no interruptions' },
              { title: 'Session Summaries', description: 'AI-generated highlights and objectives on mode switch' },
              { title: 'Subtab Management', description: '@command system for direct control over insight content' },
              { title: 'AI Behavior Training', description: 'Teach correct responses with validated corrections (3/day limit)' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Advanced Systems">
          <CaseStudyList items={[
            { title: 'Context Summarization', description: 'AI summarizes history to 300 words when exceeding 900, preserving last 8 messages' },
            { title: 'Character Immersion', description: '8+ genre-specific tone profiles adapting AI personality' },
            { title: 'Daily News Cache', description: '24-hour cache with tier-based refresh, reducing API costs' },
            { title: 'IGDB Integration', description: 'Rich game metadata: cover art, ratings, platforms via Edge Function' },
            { title: 'Error Recovery', description: 'Exponential backoff with graceful degradation and fallback responses' },
            { title: 'Rate Limiting', description: 'Per-user query tracking with monthly reset' },
          ]} />
        </CaseStudyCard>

        <CaseStudyImage
          src="/otagon/aiprocessing.png"
          alt="Screenshot Analysis Flow"
          caption="The AI processing pipeline that powers real-time screenshot analysis"
        />
      </CaseStudySection>

      {/* Feature Deep Dives */}
      <CaseStudySection title="Feature Deep Dives">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🔍 Screenshot Analysis & Game Detection">
            <CaseStudyParagraph>
              When users upload a screenshot, the AI (Gemini 2.5 Flash multimodal) analyzes it to extract 
              game title, location, enemies, and UI elements. It generates structured OTAGON tags 
              including game ID, confidence level (high/medium/low), genre classification (20+ genres), 
              progress estimate, and current objective.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Key Innovation:</strong> IS_FULLSCREEN detection distinguishes actual gameplay 
              from menus/launchers, and GAME_STATUS prevents tabs for unreleased games.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="📁 Dynamic Game Tabs & Insight Subtabs">
            <CaseStudyParagraph>
              Pro users get organized tabs for each game with auto-generated insight panels. 
              Subtabs vary by genre—Action RPGs get "Story So Far," "Characters," "Build Optimization," and 
              "Boss Strategy," while FPS games get "Loadout Analysis" and "Map Strategies."
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Technical:</strong> Dual-write system (JSONB + normalized table) with 
              template-first approach—subtabs created immediately with "Loading..." state, 
              then populated via background AI generation.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🎮 Playing vs. Planning Mode">
            <CaseStudyParagraph>
              <strong>Playing Mode:</strong> Concise, actionable tips for immediate tactical help. 
              "How do I beat this boss NOW?" Quick responses optimized for in-session use.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Planning Mode:</strong> Detailed strategic advice for session preparation. 
              "What build should I prepare?" Auto-generates session summary cards with gradient 
              theming when switching modes.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🧠 AI Behavior Training System">
            <CaseStudyParagraph>
              Users can "teach" the AI correct responses when it makes mistakes. Corrections are 
              validated by AI before applying to prevent abuse. Supports both game-specific and 
              global corrections, rate-limited to 3 corrections/day.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Impact:</strong> Creates a continuously improving AI experience personalized 
              to each user's preferences and gaming knowledge.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="📲 PC-to-Mobile Sync">
            <CaseStudyParagraph>
              PC gamers can use their phone as a second screen for AI assistance without alt-tabbing. 
              PC app generates a 6-digit code, mobile app connects via WebSocket relay server, 
              enabling real-time screenshot transfer with code-based authentication.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🔊 Hands-Free Mode with TTS">
            <CaseStudyParagraph>
              Full text-to-speech for AI responses using Web Speech API. Features voice selection 
              and speed controls, wake lock to prevent screen sleep during TTS, and background 
              audio session for uninterrupted playback while gaming.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          images={[
            { src: '/otagon/chatinput.png', alt: 'Chat Interface', caption: 'AI Conversation' },
            { src: '/otagon/insightstabs.png', alt: 'Analysis View', caption: 'Insight Subtabs' },
            { src: '/otagon/playerprofile.png', alt: 'Player Profile', caption: 'Profile System' },
            { src: '/otagon/sidebarsorting.png', alt: 'Navigation', caption: 'Game Library' },
          ]}
          columns={2}
        />
      </CaseStudySection>

      {/* Technical Architecture */}
      <CaseStudySection title="Technical Architecture">
        <CaseStudyParagraph lead>
          I designed a scalable architecture handling real-time AI processing across frontend, 
          backend, and AI layers—built and deployed entirely by myself with comprehensive 
          caching and security measures.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="Frontend">
            <CaseStudyList items={[
              'React 18 + TypeScript',
              'Vite with 8-chunk code splitting',
              'Tailwind CSS Design System',
              'PWA with Service Worker',
              'IndexedDB for offline storage',
              'Web Speech API for TTS',
              'Embla Carousel for UI',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Backend">
            <CaseStudyList items={[
              'Supabase PostgreSQL with JSONB',
              'Row Level Security (RLS)',
              'Edge Functions for AI proxy',
              'Real-time subscriptions',
              'Cloudflare R2 for assets',
              'Google, Discord, Email auth',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="AI Layer">
            <CaseStudyList items={[
              'Google Gemini 2.5 Flash',
              'Multimodal (text + image)',
              'Web search grounding (Pro)',
              'OTAGON structured output',
              '3 prompt personas',
              'Custom tag parser',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Key Technical Decisions">
          <CaseStudyList items={[
            { title: 'PWA over native app', description: '2-week launch vs 2-month for native—faster iteration, cross-platform from day one' },
            { title: 'Supabase for backend', description: 'All-in-one platform: real-time, auth, storage, Edge Functions—50% reduced complexity' },
            { title: 'Edge Functions for AI', description: 'API keys protected, sophisticated rate limiting, secure proxy layer' },
            { title: 'OTAGON tag system', description: 'Structured AI output format ensures reliable, predictable data extraction' },
            { title: 'Dual-write subtabs', description: 'Migration-ready design with JSONB + normalized tables for flexibility' },
            { title: 'Context summarization', description: 'AI summarizes to 300 words—consistent token costs regardless of conversation length' },
          ]} />
        </CaseStudyCard>

        <CaseStudyCard title="Infrastructure">
          <CaseStudyList items={[
            { title: 'GitHub Pages', description: 'Static hosting for PWA frontend' },
            { title: 'Supabase', description: 'Dynamic backend with PostgreSQL and Edge Functions' },
            { title: 'Render', description: 'WebSocket relay server for PC-to-Mobile sync' },
            { title: 'Cloudflare', description: 'CDN and R2 storage for assets and screenshots' },
          ]} />
        </CaseStudyCard>
      </CaseStudySection>

      {/* Challenges & Solutions */}
      <CaseStudySection title="Challenges & Solutions">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Challenge 1: AI Response Quality">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Generic responses that don't feel game-specific or immersive.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution Stack:</strong> OTAGON tag system for structured extraction, 
              genre-specific personas (8+ tone profiles), player profile injection, 
              Google Search grounding for current info, and user behavior training.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> Qualitative improvement in response relevance and user satisfaction.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge 2: Screenshot Misclassification">
            <CaseStudyParagraph>
              <strong>Problem:</strong> AI creating new game tabs for non-gameplay screenshots (menus, launchers, desktop).
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution Stack:</strong> IS_FULLSCREEN tag to detect actual gameplay, 
              confidence scoring (high/medium/low), pre-game routing to Game Hub, 
              GAME_STATUS tag for unreleased game detection.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> 80% reduction in false tab creation.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge 3: Message Migration Race Conditions">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Messages lost when background tab creation competed with message saving.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution Stack:</strong> Atomic migration service with single transaction for 
              tab creation + message move, conversation existence checks, fresh data reads after 
              async operations, dual-write subtab system.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> Zero data loss in message migration.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge 4: Context Management at Scale">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Long conversations caused token overflow and increased costs.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution Stack:</strong> Context summarization service (AI summarizes to 300 words), 
              last 8 messages preserved unsummarized, trigger at 3x target (900 words), 
              incremental summary updates.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> Consistent token costs regardless of conversation length.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge 5: Subtab Generation Timing">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Empty subtabs appearing because AI generation is async.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution Stack:</strong> Template-first approach with "Loading..." state immediately, 
              background AI population, auto-expand on content update, content signature tracking.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> Eliminated "empty subtab" user complaints.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Smart Caching Architecture">
            <CaseStudyParagraph>
              <strong>Implementation:</strong> Daily news cache (24-hour TTL) for gaming news queries, 
              IGDB game data cache with localStorage persistence, AI response deduplication.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> ~40% reduction in API costs.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Go-to-Market Strategy */}
      <CaseStudySection title="Go-to-Market Strategy">
        <CaseStudyParagraph lead>
          I developed a phased launch strategy with a freemium pricing model designed to 
          convert users through clear value differentiation and demonstrated value during trial.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="Phase 1: Early Access (Current)">
            <CaseStudyList items={[
              'Invite-only waitlist',
              '7-day Pro trial for all new users',
              'PC companion app launched',
              'Gather feedback and iterate rapidly',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 2: Public Beta">
            <CaseStudyList items={[
              'Open registration',
              'Stripe payment integration',
              'Limited marketing push',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 3: Full Launch">
            <CaseStudyList items={[
              'Mobile app store listings (iOS/Android PWA wrapper)',
              'Influencer partnerships (gaming YouTubers, Twitch)',
              'Expanded game database and genre coverage',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Pricing Strategy & Psychology">
          <CaseStudyList items={[
            { title: 'Free ($0)', description: 'Low barrier to try, demonstrate value—55 text + 25 image queries/month' },
            { title: 'Pro ($3.99/mo)', description: 'Less than one Starbucks drink—1,583 text + 328 image queries/month' },
            { title: 'Vanguard ($20/year)', description: '"Founding member" exclusivity, lifetime price lock—$1.67/month effective (66% savings)' },
          ]} />
          <CaseStudyParagraph>
            <strong>Vanguard Psychology:</strong> "Founding member" exclusivity creates urgency, 
            lifetime price lock (never increases) drives early conversion, early access to new features, 
            significant savings vs. monthly Pro.
          </CaseStudyParagraph>
        </CaseStudyCard>
      </CaseStudySection>

      {/* Metrics & Analytics */}
      <CaseStudySection title="Metrics & Analytics">
        <CaseStudyParagraph lead>
          I established a metrics framework centered on our North Star Metric: 
          Active Gaming Sessions per User per Week.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Key Performance Indicators">
            <CaseStudyList items={[
              { title: 'Acquisition', description: '500 weekly new users target' },
              { title: 'Activation', description: '60% first screenshot analysis rate' },
              { title: 'Retention', description: '40% D7 retention target' },
              { title: 'Revenue', description: '5% Pro conversion rate target' },
              { title: 'Engagement', description: '5+ queries per session target' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Technical Metrics">
            <CaseStudyList items={[
              { title: 'AI Response Time', description: 'Target <3s ✅ Achieved' },
              { title: 'Game Detection Accuracy', description: 'Target 95%+ ✅ Achieved' },
              { title: 'Uptime', description: 'Target 99%+ ✅ Maintained' },
              { title: 'Critical Bugs in Prod', description: 'Target 0 ✅ Zero' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Results & Impact */}
      <CaseStudySection title="Results & Impact">
        <CaseStudyStatsGrid
          stats={[
            { value: '25+', label: 'Features Shipped', sublabel: 'End-to-end' },
            { value: '3', label: 'User Tiers', sublabel: 'Differentiated value' },
            { value: '<3s', label: 'Response Time', sublabel: 'AI processing' },
            { value: '99%+', label: 'Uptime', sublabel: 'Maintained' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Quantitative Results">
            <CaseStudyList items={[
              'Built production-ready PWA serving 3 user tiers',
              'Implemented 25+ core features with advanced AI integration',
              'Integrated Google Gemini 2.5 Flash with web search grounding',
              'Designed scalable PostgreSQL schema with Row Level Security (RLS)',
              'Achieved <3 second AI response times with comprehensive caching',
              '~40% reduction in API costs through smart caching architecture',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Technical Achievements">
            <CaseStudyList items={[
              'Idempotent tab creation (no duplicates regardless of race conditions)',
              'Atomic message migration (zero data loss in tab transitions)',
              'Dual-write subtab system (migration-ready normalized + JSONB)',
              'Code splitting with 8 optimized chunks for fast loading',
              'Row Level Security for multi-tenant data isolation',
              'Zero critical bugs in production',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Lessons Learned */}
      <CaseStudySection title="Lessons Learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="What Worked Well">
            <CaseStudyList items={[
              { title: 'Structured AI output (OTAGON tags)', description: 'Made AI responses predictable and parseable' },
              { title: 'Progressive enhancement', description: 'Free users get value, Pro gets more—not feature gates' },
              { title: 'Edge Function proxy', description: 'Kept API keys secure, enabled sophisticated rate limiting' },
              { title: 'Playing/Planning modes', description: 'Simple mental model that maps to user behavior' },
              { title: 'Genre-specific personas', description: 'Immersion that feels natural for each game type' },
              { title: 'Player profile system', description: 'Personalization without overwhelming setup' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="What I'd Do Differently">
            <CaseStudyList items={[
              { title: 'Database design', description: 'Start with normalized tables; dual-write was necessary but complex' },
              { title: 'User testing', description: 'Earlier testing would have caught UX issues before build' },
              { title: 'Loading states', description: 'Users need more feedback during async operations' },
              { title: 'Mobile-first', description: 'Some desktop patterns don\'t translate well to mobile' },
              { title: 'Error messages', description: 'More user-friendly error explanations earlier' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          AI products need structured output formats—free-form text is unpredictable. Gaming users 
          expect instant responses—even 5 seconds feels slow. Freemium conversion requires clear 
          value gaps, not arbitrary limits. Context is everything in gaming—generic AI help isn't enough.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Future Roadmap */}
      <CaseStudySection title="Future Roadmap">
        <CaseStudyParagraph lead>
          The product roadmap focuses on payment integration, platform expansion, 
          enhanced AI capabilities, and community features.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Q1 2026">
            <CaseStudyList items={[
              'Stripe payment integration',
              'Mobile app store deployment (iOS/Android)',
              'Ad monetization for free tier',
              'Expanded IGDB integration',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Q2 2026">
            <CaseStudyList items={[
              'Voice input for hands-free queries',
              'Automatic game progress detection',
              'Community features (shared builds, strategies)',
              'Achievement tracking integration',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Q3 2026">
            <CaseStudyList items={[
              'Multi-language support',
              'Console screenshot capture solutions',
              'Real-time game event detection',
              'Personalized game recommendations',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Q4 2026">
            <CaseStudyList items={[
              'Social features (friends, sharing)',
              'Streaming integration (Twitch, YouTube)',
              'Advanced analytics dashboard',
              'API for third-party integrations',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Active Development">
          <CaseStudyList items={[
            'Payment integration (Stripe)',
            'Mobile app store deployment',
            'Ad monetization for free tier',
            'Community features roadmap',
          ]} />
        </CaseStudyCard>
      </CaseStudySection>

      {/* Technology Stack */}
      <CaseStudySection title="Technology Stack">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Frontend">
            <CaseStudyList items={[
              'React 18, TypeScript, Tailwind CSS, Vite',
              'PWA with Service Worker',
              'IndexedDB for offline support',
              'Web Speech API for TTS',
              'Embla Carousel for UI components',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Backend & Infrastructure">
            <CaseStudyList items={[
              'Supabase (PostgreSQL, Auth, Storage, Edge Functions)',
              'Row Level Security for multi-tenancy',
              'Real-time subscriptions',
              'GitHub Pages (static hosting)',
              'Render (WebSocket relay)',
              'Cloudflare (CDN, R2 storage)',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="AI & Integrations">
            <CaseStudyList items={[
              'Google Gemini 2.5 Flash (multimodal + web grounding)',
              'IGDB API for game metadata',
              'WebSocket relay server for PC sync',
              'Custom OTAGON tag parser',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Authentication">
            <CaseStudyList items={[
              'Google OAuth',
              'Discord OAuth',
              'Email (Magic Link)',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyParagraph>
          <strong>Key Takeaways:</strong> The OTAGON tag system was crucial for reliability. 
          Understanding game progress is essential—generic AI isn't enough. Progressive enhancement 
          works: free tier demonstrates value, Pro enhances it. Technical debt is real: early 
          shortcuts required later refactoring. Persistence pays off: many features required 2-3 
          iterations to get right.
        </CaseStudyParagraph>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
