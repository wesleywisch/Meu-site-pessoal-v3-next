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
  }
}
`
