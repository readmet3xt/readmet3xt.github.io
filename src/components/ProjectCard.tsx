import { Link } from 'react-router-dom';
import type { ProjectData } from '@/data/projectData';
import { imageSize } from '@/lib/imageSize';
import { MotionStage } from '@/motion/MotionStage';
import { TILES, TILE_SIZE } from '@/motion/registry';
import { PROJECT_COLORS } from '@/motion/colors';
import { useProjectAccent } from '@/hooks/use-project-accent';

interface ProjectCardProps {
  project: ProjectData;
  /** lets the grid move its pointer highlight, in the project's colour, to this card's tile */
  onTileEnter?: (tile: HTMLElement, color?: string) => void;
  /** spans both columns: the tile on the left, the text beside it (closes an odd-numbered grid) */
  wide?: boolean;
}

export const ProjectCard = ({ project, onTileEnter, wide = false }: ProjectCardProps) => {
  const tile = TILES[project.href];
  const color = PROJECT_COLORS[project.href];
  const accent = useProjectAccent(project.href);

  return (
    <Link to={project.href} className={`project-card group block ${wide ? 'md:col-span-2 md:grid md:grid-cols-2 md:items-center md:gap-x-10' : ''}`} style={accent}>
      <div
        data-tile-frame
        onPointerEnter={(e) => onTileEnter?.(e.currentTarget, color)}
        className="relative overflow-hidden rounded-2xl bg-bg-secondary aspect-[4/3]"
      >
        {tile ? (
          <MotionStage
            component={tile.component}
            width={TILE_SIZE.width}
            height={TILE_SIZE.height}
            durationInFrames={tile.durationInFrames}
            poster={tile.poster}
            accent={color}
            endAt={tile.poster}
            initialFrame={0}
            label={tile.label}
          />
        ) : (
          <img
            src={project.thumbnail}
            {...imageSize(project.thumbnail)}
            alt={project.thumbnailAlt}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <div>
        <p className={`mt-4 font-mono text-xs text-text-tertiary ${wide ? 'md:mt-0' : ''}`}>
          {project.context}
          {project.status && <span className="text-text-secondary"> · {project.status}</span>}
        </p>
        <h3 className="mt-1.5 text-2xl group-hover:text-accent-primary transition-colors">{project.title}</h3>
        {/* Phones show the whole summary, so its result isn't cut off; larger screens clamp it to three lines. */}
        <p className="mt-2 text-text-secondary leading-relaxed sm:line-clamp-3">{project.summary}</p>
        <p className="mt-3 text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">
          Read the case study →
        </p>
      </div>
    </Link>
  );
};
