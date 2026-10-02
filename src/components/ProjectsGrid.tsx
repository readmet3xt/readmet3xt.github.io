import { ProjectCard } from '@/components/ProjectCard';
import { CATEGORY_LABELS, projectsByCategory, type ProjectCategory } from '@/data/projectData';

const INTROS: Record<ProjectCategory, string> = {
  service: 'Research-led projects where I worked with the people the service was for: workshops, interviews, prototypes and testing.',
  product: 'Products I designed, and from 2025 also built, from fintech to AI tools.',
};

const ProjectSection = ({ category }: { category: ProjectCategory }) => (
  <section aria-labelledby={`work-${category}`} className="py-12">
    <div className="max-w-[60ch] mb-10">
      <h2 id={`work-${category}`} className="text-3xl sm:text-4xl">{CATEGORY_LABELS[category]}</h2>
      <p className="mt-3 text-text-secondary">{INTROS[category]}</p>
    </div>
    <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
      {projectsByCategory(category).map((project) => (
        <ProjectCard key={project.href} project={project} />
      ))}
    </div>
  </section>
);

export const ProjectsGrid = () => (
  <div id="work" className="scroll-mt-24 border-t border-border">
    <ProjectSection category="service" />
    <div className="border-t border-border" />
    <ProjectSection category="product" />
  </div>
);
