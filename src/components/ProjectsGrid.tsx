import { useRef } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { CATEGORY_LABELS, projectsByCategory, type ProjectCategory } from '@/data/projectData';

const INTROS: Record<ProjectCategory, string> = {
  service: 'Research-led projects where I worked with the people the service was for: workshops, interviews, prototypes and testing.',
  product: 'Products I designed, and from 2025 also built, from fintech to AI tools.',
};

/** A soft highlight that slides between tiles under the pointer (computers only). */
const usePointerHighlight = () => {
  const grid = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const moveTo = (tile: HTMLElement, color?: string) => {
    const g = grid.current?.getBoundingClientRect();
    const t = tile.getBoundingClientRect();
    const el = glow.current;
    if (!g || !el) return;
    el.style.transform = `translate(${t.left - g.left - 8}px, ${t.top - g.top - 8}px)`;
    el.style.width = `${t.width + 16}px`;
    el.style.height = `${t.height + 16}px`;
    el.style.backgroundColor = color ? `${color}2E` : '';
    el.style.opacity = '1';
  };
  const hide = () => {
    if (glow.current) glow.current.style.opacity = '0';
  };
  return { grid, glow, moveTo, hide };
};

const ProjectSection = ({ category }: { category: ProjectCategory }) => {
  const { grid, glow, moveTo, hide } = usePointerHighlight();

  return (
    <section aria-labelledby={`work-${category}`} className="py-12">
      <div className="max-w-[60ch] mb-10">
        <h2 id={`work-${category}`} className="text-3xl sm:text-4xl">{CATEGORY_LABELS[category]}</h2>
        <p className="mt-3 text-text-secondary">{INTROS[category]}</p>
      </div>
      <div ref={grid} onPointerLeave={hide} className="relative grid gap-x-10 gap-y-14 md:grid-cols-2">
        <div ref={glow} aria-hidden="true" className="tile-glow" />
        {projectsByCategory(category).map((project) => (
          <ProjectCard key={project.href} project={project} onTileEnter={moveTo} />
        ))}
      </div>
    </section>
  );
};

export const ProjectsGrid = () => (
  <div id="work" className="scroll-mt-24 border-t border-border">
    <ProjectSection category="service" />
    <div className="border-t border-border" />
    <ProjectSection category="product" />
  </div>
);
