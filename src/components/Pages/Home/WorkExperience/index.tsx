import { SectionTitle } from '../../../Reusable/SectionTitle'
import { ExperienceItem } from './ExperienceItem'

import { WorkExperience as IWorkExperience } from '../../../../types/WorkExperience'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[26.25rem]">
        <SectionTitle title="Experiência profissional" subTitle="Experiência" />
        <p className="mt-6 text-gray-400">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience, key) => (
          <ExperienceItem key={key} experience={experience} />
        ))}
      </div>
    </section>
  )
}
