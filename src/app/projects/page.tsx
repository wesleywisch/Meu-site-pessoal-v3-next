import { PageIntroduction } from '../../components/Pages/Projects/PageIntroduction'
import { ProjectsList } from '../../components/Pages/Projects/ProjectsList'

import { fetchHygraphQuery } from '../../lib/fetchHygraphQuery'
import { QueryGetProjects } from '../../lib/Queries'

import { ProjectsPageData } from '../../types/PageInfoType'

async function getProjects(): Promise<ProjectsPageData> {
  return fetchHygraphQuery(
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
