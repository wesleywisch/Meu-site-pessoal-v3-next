import { knownTechs } from './Projects'

export type HomePageInfo = {
  technologies: knownTechs[]
  knownTechs: knownTechs[]
}

export type HomePageData = {
  pageHome: HomePageInfo
}
