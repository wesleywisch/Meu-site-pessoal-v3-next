export const QueryGetPageHome = `
query PageInfoQuery {
  pageHome(where: {slug: "home"}) {
    knownTechs {
      iconSvg
      name
      startDate
    }
    technologies {
      name
    }
    highlightProjects {
      slug
      thumbnail {
        url
      }
      title
      shortDescription
      technologies {
        name
      }
    }
  }
  workExperiences {
    companyLogo {
      url
    }
    role
    companyName
    companyUrl
    startDate
    endDate
    description {
      raw
    }
    technologies {
      name
    }
  }
}
`

export const QueryGetProjects = `
query ProjectsQuery {
  projects (first: 20) {
    shortDescription
    type
    slug
    title
    thumbnail {
      url
    }
    technologies {
      name
    }
  }
}
`
