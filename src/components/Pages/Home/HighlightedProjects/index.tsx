import { HiArrowNarrowRight } from 'react-icons/hi'

import { SectionTitle } from '../../../Reusable/SectionTitle'
import { DividerHorizontal } from '../../../Reusable/Divider'
import { Link } from '../../../Reusable/Link'
import { ProjectCard } from './ProjectCard'

export function HighlightedProjects() {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subTitle="Destaques" />
      <DividerHorizontal className="mb-16" />

      <div>
        {Array.from({ length: 2 }).map((_, key) => (
          <>
            <ProjectCard key={key} />
            <DividerHorizontal className="my-16" />
          </>
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
