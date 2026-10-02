import { Link } from 'react-router-dom';
import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyParagraph,
  CaseStudyInsight,
  CaseStudyList,
  CaseStudyImage,
  CaseStudyCard,
  CaseStudyCardGrid,
} from '@/components/case-study';

export const ScreenShot = () => {
  return (
    <CaseStudyLayout title="ScreenShot" externalLink="https://otagon2.github.io/ScreenShot/" externalLabel="Try ScreenShot">
      <CaseStudyHero
        eyebrow="Side project, 2026"
        title="ScreenShot: from your PC to your phone with one key"
        subtitle="A pairing-code screenshot tool that sends what's on your PC screen to a gallery on your phone"
        intro="A spin-off from Otagon. ScreenShot pairs with a small Windows app using a 6-digit code. Press one key on the PC and the screenshot lands in a gallery on your phone, sorted into folders and installable as an app."
        overview={{
          role: [
            'Designer and developer, on my own',
            'Product scope, UX and visual identity',
            'Front end in React and TypeScript',
            'Supabase storage, security rules and sign-in',
          ],
          timeline: 'May to June 2026; first version (v0) in about two weeks',
          recognition: 'Folders, batch select, move and delete, installable on Android, iOS and desktop',
          tools: ['Vite, React and TypeScript', 'Tailwind CSS', 'Supabase (Auth, Storage, Postgres)', 'WebSocket relay shared with Otagon', 'Electron desktop app', 'PWA'],
        }}
        externalLink="https://otagon2.github.io/ScreenShot/"
        externalLabel="otagon2.github.io/ScreenShot"
        heroImage="/images/casestudies/screenshot/1-landing-page-hero.webp"
        heroImageAlt="ScreenShot landing page"
      />

      <CaseStudySection title="Context">
        <CaseStudyParagraph lead>
          You often need a PC screenshot when you're away from the PC. Getting one to your phone takes five steps:
          open Discord, attach the file, send it to yourself, unlock your phone and save it.
        </CaseStudyParagraph>

        <CaseStudyList items={[
          { title: 'Messaging yourself', description: 'is cluttered and compresses the image' },
          { title: 'Cloud sync folders', description: 'are slow, and files end up everywhere' },
          { title: 'The Snipping Tool', description: 'keeps the image on the PC' },
        ]} />

        <CaseStudyInsight>
          It should take one key. Pairing, uploading and sorting should stay out of the way.
        </CaseStudyInsight>
      </CaseStudySection>

      <CaseStudySection title="What I made">
        <CaseStudyImage
          src="/images/casestudies/screenshot/2-after-login-gallery.webp"
          alt="The gallery after signing in"
          caption="The gallery after signing in, ready for new screenshots."
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Pairing">
            <CaseStudyParagraph>
              I reused Otagon's 6-digit pairing: the desktop app shows a code, you type it into the web app, and
              both join the same relay room. No accounts to link and nothing to install on the phone.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Gallery and folders">
            <CaseStudyParagraph>
              Everything lands in an inbox unless you file it. Folders are there when you want them. Selection
              checkboxes and an action bar appear only when you need them, like in Mail or Photos.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Careful deleting">
            <CaseStudyParagraph>
              Deleting a file or a whole folder goes through a confirmation that shows exactly how many screenshots
              will go. It's slower on purpose.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Installable everywhere">
            <CaseStudyParagraph>
              It installs as a PWA on Android, iOS and desktop. iOS Safari has no install prompt, so iPhone users
              get a short "Share, then Add to Home Screen" guide instead of a broken button.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/images/casestudies/screenshot/3-connector-wifi.webp"
          alt="The desktop app pairing with the web app"
          caption="The desktop app pairing with the web app."
        />

        <CaseStudyImage
          src="/images/casestudies/screenshot/4-gallery-websocket.webp"
          alt="The gallery filling up as screenshots arrive"
          caption="The gallery filling up as screenshots arrive through the relay."
        />
      </CaseStudySection>

      <CaseStudySection title="Decisions and hard parts">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Reuse the Otagon relay">
            <CaseStudyParagraph>
              A second WebSocket server would have doubled the infrastructure. Reusing the relay I already run for{' '}
              <Link to="/otagon" className="link-ink">Otagon</Link> meant the first version needed no new
              operations work.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Storage that can't leak">
            <CaseStudyParagraph>
              Every file is stored under the owner's user ID, and storage rules enforce it. Even if a check in the
              app failed, one person's screenshots couldn't reach another.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="No orphaned files">
            <CaseStudyParagraph>
              Deleting a folder removes the stored files first, then the database rows cascade, so no file is left
              taking up storage with nothing pointing at it.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Offline shell, live sign-in">
            <CaseStudyParagraph>
              Caching the app for offline use risked caching sign-in state. The service worker only caches public
              files and leaves sessions to Supabase.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      <CaseStudySection title="Where it is now">
        <CaseStudyParagraph>
          The first version is live and tested end to end with the Otagon desktop client. The open question is
          whether it stays a separate tool or becomes part of Otagon Pro.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/images/casestudies/screenshot/5-mobile-pwa-install.webp"
          alt="The gallery installed as an app on a phone"
          caption="The gallery installed on a phone."
        />
      </CaseStudySection>

      <CaseStudySection title="What I learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Reuse before you build a platform">
            <CaseStudyParagraph>
              Borrowing Otagon's relay made a quick first version possible. Splitting the infrastructure can wait
              until usage calls for it.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Good defaults beat options">
            <CaseStudyParagraph>
              With the inbox as the default, folders never felt compulsory, and the first visit stayed simple.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
