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

export const ScreenShot = () => {
  return (
    <CaseStudyLayout
      title="ScreenShot"
      description="Press F1 on your PC, see it on your phone — a universal hotkey-driven screenshot grabber with per-user folders, lightbox, and PWA install."
      externalLink="https://otagon2.github.io/ScreenShot/"
      externalLabel="Visit ScreenShot"
    >
      <CaseStudyHero
        title="ScreenShot: Hotkey to Cloud, in One Step"
        subtitle="A pairing-code screenshot grabber that pipes from PC to web in a single tap"
        pills={[
          'Product Design',
          'React + TypeScript',
          'Vite',
          'Supabase',
          'WebSocket',
          'PWA',
        ]}
        intro="A spin-off from the Otagon platform: a focused, standalone web app that pairs with the Otagon PC client over a 6-digit code, lets you press a single hotkey, and drops the screenshot into a cloud gallery — organised by folder, viewable anywhere, installable as a PWA."
        overview={{
          role: [
            'Solo Designer & Developer',
            'Product scope, UX, and visual identity',
            'Frontend engineering (Vite + React + TS)',
            'Supabase storage + RLS + auth',
          ],
          timeline: '2 weeks — v0 release',
          recognition: 'Per-user folders, batch select/move/delete, PWA install on iOS/Android/Desktop',
          tools: [
            'Vite + React + TypeScript',
            'Tailwind CSS',
            'Supabase (Auth + Storage + Postgres)',
            'WebSocket relay (shared with Otagon)',
            'vite-plugin-pwa',
            'GitHub Pages',
          ],
        }}
        externalLink="https://otagon2.github.io/ScreenShot/"
        externalLabel="Visit ScreenShot"
        heroImage="/screenshot/hero.png"
        heroImageAlt="ScreenShot gallery hero"
      />

      {/* The Problem */}
      <CaseStudySection title="The Problem">
        <CaseStudyParagraph lead>
          PC screenshots are useful exactly when you're not at your PC.
          Sending them to your phone is a process: open Discord, attach,
          send to yourself, switch device, download, save. Five steps for
          something that should be one.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Current Pain Points">
            <CaseStudyList items={[
              { title: 'Self-DMs in Discord', description: 'Cluttered, compressed, not searchable' },
              { title: 'Cloud sync folders', description: 'Sync is slow, files end up everywhere' },
              { title: 'Snipping Tool', description: 'Stays on the PC, doesn\'t leave the device' },
              { title: 'No mobile pickup', description: 'Nothing optimised for grabbing screens on the go' },
            ]} />
          </CaseStudyCard>

          <CaseStudyCard title="The Core Insight">
            <CaseStudyParagraph>
              The hotkey is the magic. Everything else — pairing, uploading, organising —
              should melt into one button on the PC and one gallery on the phone.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/screenshot/problem.png"
          alt="The friction of moving screenshots between devices"
          caption="From PC capture to phone gallery, the journey today is way too long"
        />
      </CaseStudySection>

      {/* The Vision */}
      <CaseStudySection title="The Vision">
        <CaseStudyParagraph lead>
          Press <strong>F1</strong>. The screenshot appears in your phone gallery within seconds —
          organised, searchable, deletable, and shareable.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/screenshot/vision.png"
          alt="ScreenShot vision — F1 to phone gallery"
          caption="One key press on PC, one synced gallery everywhere else"
        />
      </CaseStudySection>

      {/* How It Was Built */}
      <CaseStudySection title="How It Was Built">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Phase 1 — Pairing Flow">
            <CaseStudyParagraph>
              Reused Otagon's 6-digit pairing-code pattern: the desktop client generates
              the code; the web app enters it; both join the same WebSocket relay room.
              No accounts to link, no servers to install.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 2 — Gallery & Folders">
            <CaseStudyParagraph>
              Inbox + named folders, hover-to-reveal selection checkboxes, and a top
              action bar that only appears when you have something selected. Designed
              around the muscle memory of Mail and Photos apps.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 3 — Lightbox & Destructive Actions">
            <CaseStudyParagraph>
              Click a thumb to open full-size; arrow keys to navigate; Esc to close.
              Every destructive action — delete, cascade-delete folder — runs through
              a typed confirmation dialog that surfaces the exact count.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Phase 4 — PWA & GH Pages Deploy">
            <CaseStudyParagraph>
              Installable PWA via vite-plugin-pwa, auto-deployed on every push to main
              with the SPA-on-Pages 404 redirect trick so deep links survive a hard refresh.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/screenshot/build.png"
          alt="Build phases"
          caption="Four focused phases — pairing, gallery, lightbox, install"
        />
      </CaseStudySection>

      {/* Key Design Decisions */}
      <CaseStudySection title="Key Design Decisions">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Reuse the Otagon Relay">
            <CaseStudyParagraph>
              Standing up a second WebSocket server would have doubled the infra and
              halved the testing velocity. Reusing the existing relay let ScreenShot
              ship in v0 with zero ops overhead, by piggybacking on a proven protocol.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Folders Optional, Inbox by Default">
            <CaseStudyParagraph>
              Every screenshot lands in Inbox unless filed. Power users get folders;
              new users get a single, scrollable wall of recent grabs. The same UI
              works for both.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Selection Mode, Not Right-Click">
            <CaseStudyParagraph>
              Mobile-first means no right-click. Hover-to-reveal checkboxes promote into
              a persistent selection bar — the same gesture works on touch and on desktop.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Storage RLS by User Prefix">
            <CaseStudyParagraph>
              Every file lives at <code>&lt;user_id&gt;/…</code>, with bucket-level RLS
              policies enforcing that prefix. No way to leak a screenshot to another user,
              even if the client-side check breaks.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          columns={2}
          images={[
            { src: '/screenshot/design-1.png', alt: 'Folder sidebar with live counts' },
            { src: '/screenshot/design-2.png', alt: 'Selection mode + action bar', caption: 'Folder sidebar and selection-mode action bar' },
          ]}
        />
      </CaseStudySection>

      {/* The Hard Problems */}
      <CaseStudySection title="The Hard Problems">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Cascade Deletes Without Orphan Files">
            <CaseStudyParagraph>
              Deleting a folder needs to remove every screenshot inside <em>and</em> the
              associated storage objects. Solved by listing storage children first, then
              relying on <code>ON DELETE CASCADE</code> at the row level.
              <strong> Zero orphan files since launch.</strong>
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Deep Links on GitHub Pages">
            <CaseStudyParagraph>
              GH Pages doesn't know about SPA routes. The site uses the canonical
              404 → query-string → history.replaceState trick so <code>/gallery</code>
              survives a hard refresh.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="iOS Install Hint UX">
            <CaseStudyParagraph>
              iOS Safari doesn't expose the install prompt. ScreenShot detects the
              platform and shows a dedicated Share → Add to Home Screen hint dialog
              instead of a broken install button.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Service Worker + Auth Tokens">
            <CaseStudyParagraph>
              Pre-caching the app shell was a foot-gun for auth state. Solved by
              scoping the SW to public assets only and letting Supabase auth handle
              its own session storage outside the cache.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/screenshot/hard-problems.png"
          alt="Architecture diagram"
          caption="ScreenShot architecture: PC client → relay → web app → Supabase storage"
        />
      </CaseStudySection>

      {/* Results */}
      <CaseStudySection title="Results">
        <CaseStudyStatsGrid
          stats={[
            { value: '1 key', label: 'PC to phone', sublabel: 'F1 = upload + sync' },
            { value: '< 2s', label: 'Capture to gallery', sublabel: 'Over a typical home WiFi' },
            { value: '3', label: 'Install targets', sublabel: 'Android, iOS, Desktop PWA' },
            { value: '2', label: 'Migrations', sublabel: 'Init + Folders, both RLS-protected' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Shipped">
            <CaseStudyList items={[
              'Pairing-code flow shared with Otagon desktop client',
              'Per-user folders with cascade delete',
              'Multi-select with batch move + batch delete',
              'Lightbox with keyboard navigation',
              'Installable PWA with offline app shell',
            ]} />
          </CaseStudyCard>

          <CaseStudyCard title="Status">
            <CaseStudyParagraph>
              v0 shipped, end-to-end tested with the existing Otagon desktop client.
              Live on GitHub Pages, ready to fold back into Otagon Pro once the
              namespace decision is made.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/screenshot/results.png"
          alt="Gallery results"
          caption="The gallery in action — folders, selection mode, and lightbox"
        />
      </CaseStudySection>

      {/* What I Learned */}
      <CaseStudySection title="What I Learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Piggyback before you platform">
            <CaseStudyParagraph>
              Reusing Otagon's relay made v0 possible in a fortnight. The "right" answer
              of namespacing or splitting infra can come once usage justifies it.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Confirmation is a feature, not friction">
            <CaseStudyParagraph>
              Typed confirmation dialogs on destructive actions are slower — and
              users immediately said they felt safer. Speed isn't always the goal.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Defaults beat customisation">
            <CaseStudyParagraph>
              Inbox-by-default meant folders never felt mandatory. The first-run
              experience stayed empty-state friendly without sacrificing power users.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="PWAs still pay off">
            <CaseStudyParagraph>
              Installable, offline shell, and a real icon on the home screen — without
              an app-store submission. For a tool like this, native would have been overkill.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* What's Next */}
      <CaseStudySection title="What's Next">
        <CaseStudyParagraph lead>
          Next milestones: drag-and-drop foldering, an F2 capture flow for region
          selection, and a paywall path that lines up with the broader Otagon Pro
          vision. The infra is built to scale once the product earns it.
        </CaseStudyParagraph>

        <CaseStudyQuote>
          The win was making the hotkey feel like magic — everything else is just
          plumbing that should stay out of the way.
        </CaseStudyQuote>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
