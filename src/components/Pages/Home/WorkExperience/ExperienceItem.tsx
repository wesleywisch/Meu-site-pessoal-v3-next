'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { TechBadge } from '../../../Reusable/TechBadge'
import { DurationDateWork } from './DurationDateWork'
import { RichText } from '../../../RichText'

import { fadeUpAnimation, techBadgeAnimation } from '../../../../lib/animations'
import { WorkExperience } from '../../../../types/WorkExperience'

type ExperienceItemProps = {
  experience: WorkExperience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <motion.div
      className="grid grid-cols-[2.5rem,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={
              experience.companyLogo?.url
                ? experience.companyLogo.url
                : '/imgs/iconeCompanyDefault.png'
            }
            alt={`Logo da empresa ${experience.companyName}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <Link
            href={experience.companyUrl}
            target="_blank"
            className="text-gray-500 transition-colors hover:text-emerald-500"
            title={experience.companyName}
          >
            @ {experience.companyName}
          </Link>

          <h4 className="text-gray-300" title={experience.role}>{experience.role}</h4>
          <DurationDateWork
            workEndDate={experience.endDate}
            workStartDate={experience.startDate}
          />

          <div className="text-gray-400">
            <RichText content={experience.description.raw} />
          </div>
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
          Competências
        </p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[21.875rem]">
          {experience.technologies.map((tech, key) => (
            <TechBadge
              key={key}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: key * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
