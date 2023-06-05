'use client'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { TechBadge } from '../../../Reusable/TechBadge'
import { Link } from '../../../Reusable/Link'

import { fadeUpAnimation, techBadgeAnimation } from '../../../../lib/animations'
import { Project } from '../../../../types/Projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-6 lg:flex-row lg:gap-12"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="h-[12.5rem] w-full sm:h-[18.75rem] lg:min-h-full lg:w-[26.25rem]"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          width={420}
          height={304}
          className="h-full w-full rounded-lg object-cover"
        />
      </motion.div>

      <div className="flex-1 lg:py-[1.125rem]">
        <motion.h3
          className="flex items-center gap-3 text-lg font-medium text-gray-50"
          title={project.title}
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/imgs/project-icon.svg"
            alt="Icon"
            width={20}
            height={20}
          />
          {project.title}
        </motion.h3>

        <motion.p
          className="my-6 text-gray-400" title={project.shortDescription}
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[21.875rem]">
          {project.technologies.map((tech, key) => (
            <TechBadge
              key={key}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.3 + key * 0.1 }}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
