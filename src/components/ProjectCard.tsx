import { Link } from 'react-router-dom';
import type { ProjectData } from '@/data/projectData';
import { imageSize } from '@/lib/imageSize';

export const ProjectCard = ({ project }: { project: ProjectData }) => (
  <Link to={project.href} className="project-card group block">
    <div className="overflow-hidden rounded-sm bg-bg-secondary aspect-[16/10]">
      <img
        src={project.thumbnail}
        {...imageSize(project.thumbnail)}
        alt={project.thumbnailAlt}
        className="w-full h-full object-cover object-top"
        loading="lazy"
        decoding="async"
      />
    </div>
    <p className="mt-4 text-sm text-text-tertiary">
      {project.context}
      {project.status && <span className="text-text-secondary"> · {project.status}</span>}
    </p>
    <h3 className="mt-1 text-2xl group-hover:text-accent-primary transition-colors">{project.title}</h3>
    <p className="mt-2 text-text-secondary leading-relaxed line-clamp-3">{project.summary}</p>
    <p className="mt-3 text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">
      Read the case study →
    </p>
  </Link>
);
