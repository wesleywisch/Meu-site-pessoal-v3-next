'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { ProjectCard } from './ProjectCard'
import { DividerHorizontal } from '../../../Reusable/Divider'
import { ButtonFiltered } from './ButtonFiltered'

import { fadeUpAnimation } from '../../../../lib/animations'
import { Project } from '../../../../types/Projects'

type ProjectsListProps = {
  projects: Project[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [initialProjects, setInitialProjects] = useState<Project[]>(projects);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeType, setActiveType] = useState<'Website' | 'App' | 'Event' | 'Server' | ''>('');

  function filteredProducts(type: 'Website' | 'App' | 'Event' | 'Server' | '') {
    if (type !== '') {
      const filtered = initialProjects.filter(item => item.type.split(',').includes(type))
      setFilteredProjects(filtered)
      setActiveType(type)
    } else {
      setFilteredProjects(initialProjects)
      setActiveType('')
    }
  }

  return (
    <>
      <ButtonFiltered
        activeType={activeType}
        filteredProducts={filteredProducts}
      />
      <DividerHorizontal />

      <section className="container grid grid-cols-1 gap-x-4 gap-y-6 pt-10 pb-32 sm:grid-cols-[repeat(auto-fit,minmax(21.875rem,1fr))]">
        {filteredProjects.length !== 0 && filteredProjects.map((project, key) => (
          <motion.div
            key={key}
            {...fadeUpAnimation}
            transition={{ duration: 0.5, delay: key * 0.1 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <ProjectCard project={project} />
            </Link>
          </motion.div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="flex justify-center items-center">
            <p>Por enquanto não há nenhum projeto com esse filtro.</p>
          </div>
        )}
      </section>
    </>
  )
}
