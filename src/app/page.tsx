import { HeroSection } from '../components/Pages/Home/HeroSection'
import { KnownTechs } from '../components/Pages/Home/KnownTechs'
import { HighlightedProjects } from '../components/Pages/Home/HighlightedProjects'
import { WorkExperience } from '../components/Pages/Home/WorkExperience'

import { fetchHygraphQuery } from '../lib/fetchHygraphQuery'
import { QueryGetPageHome } from '../lib/Queries'

import { HomePageData } from '../types/PageInfoType'

async function getData(): Promise<HomePageData> {
  return fetchHygraphQuery(
    QueryGetPageHome,
    60 * 60 * 24, // 1 day
  )
}

export default async function Home() {
  const { pageHome: pageData, workExperiences } = await getData()

  return (
    <>
      <HeroSection heroInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  )
}
