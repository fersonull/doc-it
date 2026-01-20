import { ProjectCard } from './project-card';

interface Project {
  id: string;
  title: string;
  description: string;
  lastEdited: string;
  status: 'published' | 'draft';
  pageCount: number;
}

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
