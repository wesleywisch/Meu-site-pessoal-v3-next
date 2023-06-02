import { RichTextContent } from '@graphcms/rich-text-types'
import { knownTechs } from './Projects'

export type WorkExperience = {
  companyLogo: {
    url?: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  technologies: knownTechs[]
  description: {
    raw: RichTextContent
  }
}
