import { Metadata } from 'next'
import { ProjectDetails } from '../../../components/Pages/ProjectVisualization/ProjectDetails'
import { ProjectSections } from '../../../components/Pages/ProjectVisualization/ProjectSections'

import { fetchHygraphQuery } from '../../../lib/fetchHygraphQuery'

import {
  ProjectPageData,
  ProjectsPageStaticData,
} from '../../../types/PageInfoType'

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

  const data = fetchHygraphQuery<ProjectPageData>(
    query,
    60 * 60 * 24 * 7, // 7 day
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

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 35) {
        slug
      }
    }
  `

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}

export async function generateMetadata({
  params: { slug } }: ProjectProps
): Promise<Metadata> {
  const data = await getProjectDetails(slug)
  const project = data.project

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        { url: project.thumbnail.url, width: 1200, height: 630 }
      ]
    }
  }
}