import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'

import { Link as ComponentLink } from '../../../Reusable/Link'
import { SectionTitle } from '../../../Reusable/SectionTitle'
import { TechBadge } from '../../../Reusable/TechBadge'
import { Button } from '../../../Reusable/Button'
import { RichText } from '../../../RichText'

import { Project } from '../../../../types/Projects'

type ProjectDetailsProps = {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[46.875rem] sm:pb-24">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.jpg) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
      />

      <SectionTitle
        title={project.title}
        subTitle="Projetos"
        className="items-center text-center [&>h3]:text-4xl"
      />

      <div className="my-4 max-w-[40rem] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        <RichText content={project.description.raw} />
      </div>

      <div className="flex w-full max-w-[20.625rem] flex-wrap items-center justify-center gap-2">
        {project.technologies.map((tech, key) => (
          <TechBadge key={key} name={tech.name} />
        ))}
      </div>

      <div className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        {project.githubUrl && (
          <Link href={project.githubUrl} target="_blank">
            <Button className="min-w-[11.25rem]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </Link>
        )}

        {project.onlineProjectUrl && (
          <Link href={'https://github.com/wesleywisch'} target="_blank">
            <Button className="min-w-[11.25rem]">
              <FiGlobe size={20} />
              Projeto Online
            </Button>
          </Link>
        )}
      </div>

      <ComponentLink href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </ComponentLink>
    </section>
  )
}
