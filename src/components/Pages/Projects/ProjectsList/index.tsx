import Link from 'next/link'

import { ProjectCard } from './ProjectCard'

import { Project } from '../../../../types/Projects'

type ProjectsListProps = {
  projects: Project[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(21.875rem,1fr))]">
      {projects.map((project, key) => (
        <Link key={key} href={`/projects/${project.slug}`}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  )
}
