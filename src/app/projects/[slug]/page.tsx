import { ProjectDetails } from '../../../components/Pages/ProjectVisualization/ProjectDetails'
import { ProjectSections } from '../../../components/Pages/ProjectVisualization/ProjectSections'

import { fetchHygraphQuery } from '../../../lib/fetchHygraphQuery'

import { ProjectPageData } from '../../../types/PageInfoType'

type ProjectProps = {
  params: {
    slug: string
  }
}

async function getProjectDetails(slug: string): Promise<ProjectPageData> {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      onlineProjectUrl
      githubUrl
    }
  }
  `

  const data = fetchHygraphQuery(
    query,
    60 * 60 * 24, // 1 day
  )

  return data
}

export default async function ProjectVisualization({ params }: ProjectProps) {
  const { project } = await getProjectDetails(params.slug)

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}
