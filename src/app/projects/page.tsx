import { Metadata } from 'next'
import { PageIntroduction } from '../../components/Pages/Projects/PageIntroduction'
import { ProjectsList } from '../../components/Pages/Projects/ProjectsList'

import { fetchHygraphQuery } from '../../lib/fetchHygraphQuery'
import { QueryGetProjects } from '../../lib/Queries'

import { ProjectsPageData } from '../../types/PageInfoType'

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Sou um desenvolvedor Front-End Júnior e aqui apresento alguns projetos desenvolvidos por mim!'
}

async function getProjects(): Promise<ProjectsPageData> {
  return fetchHygraphQuery<ProjectsPageData>(
    QueryGetProjects,
    60 * 60 * 24, // 1 day
  )
}

export default async function Projects() {
  const { projects } = await getProjects()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}
