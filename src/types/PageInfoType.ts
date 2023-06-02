import { Project, knownTechs } from './Projects'
import { WorkExperience } from './WorkExperience'

export type HomePageInfo = {
  technologies: knownTechs[]
  knownTechs: knownTechs[]
  highlightProjects: Project[]
}

export type HomePageData = {
  pageHome: HomePageInfo
  workExperiences: WorkExperience[]
}

export type ProjectsPageData = {
  projects: Project[]
}

export type ProjectPageData = {
  project: Project
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}
