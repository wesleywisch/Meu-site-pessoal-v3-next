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
