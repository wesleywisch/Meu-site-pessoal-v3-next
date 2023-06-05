'use client'
import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { motion } from 'framer-motion'

import { Link as ComponentLink } from '../../../Reusable/Link'
import { SectionTitle } from '../../../Reusable/SectionTitle'
import { TechBadge } from '../../../Reusable/TechBadge'
import { Button } from '../../../Reusable/Button'
import { RichText } from '../../../RichText'

import { fadeUpAnimation, techBadgeAnimation } from '../../../../lib/animations'
import { Project } from '../../../../types/Projects'

type ProjectDetailsProps = {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/imgs/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        title={project.title}
        subTitle="Projetos"
        className="items-center text-center [&>h3]:text-4xl"
      />

      <motion.div
        className="my-4 max-w-[40rem] text-center text-sm text-gray-400 sm:my-6 sm:text-base"
        {...fadeUpAnimation}
      >
        <RichText content={project.description.raw} />
      </motion.div>

      <div className="flex w-full max-w-[20.625rem] flex-wrap items-center justify-center gap-2">
        {project.technologies.map((tech, key) => (
          <TechBadge
            key={key}
            name={tech.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: key * 0.1 }}
          />
        ))}
      </div>

      <motion.div
        className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4"
        {...fadeUpAnimation}
      >
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
      </motion.div>

      <ComponentLink href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </ComponentLink>
    </section>
  )
}
