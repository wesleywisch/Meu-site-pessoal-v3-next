import { RichTextContent } from '@graphcms/rich-text-types'

export type knownTechs = {
  iconSvg: string
  name: string
  startDate: string
}

export type ProjectSection = {
  title: string
  image: {
    url: string
  }
}

export type Project = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  technologies: knownTechs[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSection[]
  description: {
    raw: RichTextContent
    text: string
  }
  onlineProjectUrl?: string
  githubUrl?: string
}
