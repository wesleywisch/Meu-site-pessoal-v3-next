import { HiArrowNarrowRight } from 'react-icons/hi'

import { SectionTitle } from '../../../Reusable/SectionTitle'
import { DividerHorizontal } from '../../../Reusable/Divider'
import { Link } from '../../../Reusable/Link'
import { ProjectCard } from './ProjectCard'

import { Project } from '../../../../types/Projects'

type HighlightedProjectsProps = {
  projects: Project[]
}

export function HighlightedProjects({ projects }: HighlightedProjectsProps) {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subTitle="Destaques" />
      <DividerHorizontal className="mb-16" />

      <div>
        {projects?.map((project, key) => (
          <div key={key}>
            <ProjectCard project={project} />
            <DividerHorizontal className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver Todos <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
