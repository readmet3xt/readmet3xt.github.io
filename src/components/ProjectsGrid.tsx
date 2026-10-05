import { useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '@/components/ProjectCard';
import { CATEGORY_LABELS, projectsByCategory, type ProjectCategory, type ProjectData } from '@/data/projectData';
import { MotionStage } from '@/motion/MotionStage';
import { TILES, TILE_SIZE } from '@/motion/registry';
import { PROJECT_COLORS } from '@/motion/colors';

type TileEnter = (tile: HTMLElement, color?: string) => void;

type WorkCategory = Exclude<ProjectCategory, 'side'>;

const INTROS: Record<WorkCategory, string> = {
  service: 'Research-led projects where I worked with the people the service was for: workshops, interviews, prototypes and testing.',
  product: 'Products I designed, and from 2025 also built, from rail tickets to AI tools.',
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

/**
 * Project tiles in two columns, with the pointer highlight. Also used by the Play page.
 * `extra` adds a tile after the projects; `wideLast` lets the last card span both columns.
 */
export const ProjectTiles = ({ projects, extra, wideLast = false }: { projects: ProjectData[]; extra?: (onTileEnter: TileEnter) => ReactNode; wideLast?: boolean }) => {
  const { grid, glow, moveTo, hide } = usePointerHighlight();

  return (
    <div ref={grid} onPointerLeave={hide} className="relative grid gap-x-10 gap-y-14 md:grid-cols-2">
      <div ref={glow} aria-hidden="true" className="tile-glow" />
      {projects.map((project, i) => (
        <ProjectCard key={project.href} project={project} onTileEnter={moveTo} wide={wideLast && i === projects.length - 1} />
      ))}
      {extra?.(moveTo)}
    </div>
  );
};

/** The products' fourth tile: the side projects, whose pages live on Play. Their tiles show at rest, fanned. */
const SideProjectsCard = ({ onTileEnter }: { onTileEnter?: TileEnter }) => {
  const side = projectsByCategory('side');
  return (
    <Link to="/play" className="project-card group block">
      <div
        data-tile-frame
        onPointerEnter={(e) => onTileEnter?.(e.currentTarget)}
        className="relative overflow-hidden rounded-2xl bg-bg-secondary aspect-[4/3]"
        aria-hidden="true"
      >
        {side.map((project, i) => {
          const tile = TILES[project.href];
          return (
            <div
              key={project.href}
              className={`absolute w-[62%] overflow-hidden rounded-xl border border-border bg-bg-primary shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${i === 0 ? 'left-[7%] top-[9%] group-hover:-translate-x-1.5 group-hover:-translate-y-1.5' : 'right-[7%] bottom-[9%] group-hover:translate-x-1.5 group-hover:translate-y-1.5'}`}
            >
              {tile && (
                <MotionStage
                  component={tile.component}
                  width={TILE_SIZE.width}
                  height={TILE_SIZE.height}
                  durationInFrames={tile.durationInFrames}
                  poster={tile.poster}
                  accent={PROJECT_COLORS[project.href]}
                  autoPlay="never"
                  label={tile.label}
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-4 font-mono text-xs text-text-tertiary">Side projects, 2026</p>
      <h3 className="mt-1.5 text-2xl group-hover:text-accent-primary transition-colors">{side.map((p) => p.title).join(' and ')}</h3>
      <p className="mt-2 text-text-secondary leading-relaxed">
        Small tools I designed and built on my own: one for PC screenshots, one for game nights.
      </p>
      <p className="mt-3 text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">See them on Play →</p>
    </Link>
  );
};

const ProjectSection = ({ category }: { category: WorkCategory }) => (
  <section aria-labelledby={`work-${category}`} className="py-12">
    <div className="max-w-[60ch] mb-10">
      <h2 id={`work-${category}`} className="text-3xl sm:text-4xl">{CATEGORY_LABELS[category]}</h2>
      <p className="mt-3 text-text-secondary">{INTROS[category]}</p>
    </div>
    {category === 'product' ? (
      <ProjectTiles projects={projectsByCategory(category)} extra={(enter) => <SideProjectsCard onTileEnter={enter} />} />
    ) : (
      <ProjectTiles projects={projectsByCategory(category)} wideLast={projectsByCategory(category).length % 2 === 1} />
    )}
  </section>
);

export const ProjectsGrid = () => (
  <div id="work" className="scroll-mt-24 border-t border-border">
    <ProjectSection category="product" />
    <div className="border-t border-border" />
    <ProjectSection category="service" />
  </div>
);
