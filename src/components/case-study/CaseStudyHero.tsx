import { ReactNode } from 'react';
import { imageSize } from '@/lib/imageSize';

interface CaseStudyHeroProps {
  title: string;
  subtitle?: string;
  /** Plain context line above the title, e.g. "RCA × VISA Innovation Centre, 2021". */
  eyebrow?: string;
  /** @deprecated no longer rendered; kept so existing pages compile. */
  pills?: string[];
  intro: string;
  externalLink?: string;
  externalLabel?: string;
  overview: {
    role: string[];
    team?: string;
    timeline: string;
    recognition?: string;
    tools: string[];
  };
  heroImage?: string;
  heroImageAlt?: string;
}

const Fact = ({ term, children }: { term: string; children: ReactNode }) => (
  <div>
    <dt className="text-sm text-text-tertiary">{term}</dt>
    <dd className="mt-1 text-text-primary">{children}</dd>
  </div>
);

export const CaseStudyHero = ({
  title,
  subtitle,
  eyebrow,
  intro,
  externalLink,
  externalLabel,
  overview,
  heroImage,
  heroImageAlt,
}: CaseStudyHeroProps) => {
  const [role, ...whatIDid] = overview.role;

  return (
    <header className="space-y-8">
      <div className="max-w-[68ch]">
        {eyebrow && <p className="text-sm text-text-tertiary mb-4">{eyebrow}</p>}
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-xl text-text-secondary leading-snug">{subtitle}</p>}
      </div>

      {externalLink && (
        <p>
          <a href={externalLink} target="_blank" rel="noopener noreferrer" className="link-ink">
            {externalLabel || externalLink.replace(/^https?:\/\//, '')} ↗
          </a>
        </p>
      )}

      <p className="max-w-[68ch] text-lg leading-relaxed text-text-primary">{intro}</p>

      <dl className="grid gap-x-12 gap-y-6 sm:grid-cols-2 border-t border-border pt-6">
        {role && <Fact term="Role">{role}</Fact>}
        <Fact term="When">{overview.timeline}</Fact>
        {whatIDid.length > 0 && (
          <Fact term="What I did">
            <ul className="list-disc pl-5 space-y-1 text-text-secondary">
              {whatIDid.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Fact>
        )}
        {overview.team && <Fact term="Team">{overview.team}</Fact>}
        {overview.recognition && <Fact term="Recognition">{overview.recognition}</Fact>}
        {overview.tools.length > 0 && <Fact term="Methods and tools">{overview.tools.join(', ')}</Fact>}
      </dl>

      {heroImage && (
        <figure>
          <img
            src={heroImage}
            {...imageSize(heroImage)}
            alt={heroImageAlt || title}
            data-lightbox-caption={heroImageAlt || title}
            className="w-full aspect-[16/9] object-cover object-top rounded-sm lightbox-image cursor-zoom-in"
            loading="eager"
            {...({ fetchpriority: 'high' } as Record<string, string>)}
            decoding="async"
            onClick={() => window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src: heroImage } }))}
          />
        </figure>
      )}
    </header>
  );
};
