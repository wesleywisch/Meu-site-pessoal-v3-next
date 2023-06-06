import Image from 'next/image'

import { Project } from '../../../../types/Projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex h-[27.25rem] flex-col overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-800 opacity-70 transition-all hover:border-emerald-500 hover:opacity-100">
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          width={380}
          height={200}
          unoptimized
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <strong title={project.title} className="font-medium text-gray-50/90 transition-all group-hover:text-emerald-500">
          {project.title}
        </strong>

        <p className="mt-2 line-clamp-4 text-gray-400" title={project.shortDescription}>
          {project.shortDescription}
        </p>

        <span className="mt-auto block truncate text-sm font-medium text-gray-300">
          {project.technologies.map((tech) => tech.name).join(', ')}
        </span>
      </div>
    </div>
  )
}
