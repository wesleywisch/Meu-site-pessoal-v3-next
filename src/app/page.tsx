import { HeroSection } from '../components/Pages/Home/HeroSection'
import { KnownTechs } from '../components/Pages/Home/KnownTechs'
import { HighlightedProjects } from '../components/Pages/Home/HighlightedProjects'
import { WorkExperience } from '../components/Pages/Home/WorkExperience'

export default function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
