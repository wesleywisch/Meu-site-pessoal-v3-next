import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { TechBadge } from '../../../Reusable/TechBadge'
import { Link } from '../../../Reusable/Link'

import { Project } from '../../../../types/Projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-full w-full">
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          width={420}
          height={304}
          className="h-[12.5rem] w-full rounded-lg object-cover sm:h-[18.75rem] lg:min-h-full lg:w-[26.25rem]"
        />
      </div>

      <div>
        <h3
          className="flex items-center gap-3 text-lg font-medium text-gray-50"
          title={project.title}
        >
          <Image
            src="/imgs/project-icon.svg"
            alt="Icon"
            width={20}
            height={20}
          />
          {project.title}
        </h3>

        <p className="my-6 text-gray-400" title={project.shortDescription}>
          {project.shortDescription}
        </p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[21.875rem]">
          {project.technologies.map((tech, key) => (
            <TechBadge key={key} name={tech.name} />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
