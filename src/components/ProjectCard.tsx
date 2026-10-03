import { Link } from 'react-router-dom';
import type { ProjectData } from '@/data/projectData';
import { imageSize } from '@/lib/imageSize';
import { MotionStage } from '@/motion/MotionStage';
import { TILES, TILE_SIZE } from '@/motion/registry';

interface ProjectCardProps {
  project: ProjectData;
  /** lets the grid move its pointer highlight to this card's tile */
  onTileEnter?: (tile: HTMLElement) => void;
}

export const ProjectCard = ({ project, onTileEnter }: ProjectCardProps) => {
  const tile = TILES[project.href];

  return (
    <Link to={project.href} className="project-card group block">
      <div
        data-tile-frame
        onPointerEnter={(e) => onTileEnter?.(e.currentTarget)}
        className="relative overflow-hidden rounded-2xl bg-bg-secondary aspect-[4/3]"
      >
        {tile ? (
          <MotionStage
            component={tile.component}
            width={TILE_SIZE.width}
            height={TILE_SIZE.height}
            durationInFrames={tile.durationInFrames}
            poster={tile.poster}
            loop
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
      <p className="mt-4 font-mono text-xs text-text-tertiary">
        {project.context}
        {project.status && <span className="text-text-secondary"> · {project.status}</span>}
      </p>
      <h3 className="mt-1.5 text-2xl group-hover:text-accent-primary transition-colors">{project.title}</h3>
      <p className="mt-2 text-text-secondary leading-relaxed line-clamp-3">{project.summary}</p>
      <p className="mt-3 text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">
        Read the case study →
      </p>
    </Link>
  );
};
