import { SectionTitle } from '../../../Reusable/SectionTitle'
import { KnownTech } from '../../../Reusable/KnownTech'

import { knownTechs as IKnownTechs } from '../../../../types/Projects'

type KnownTechsProps = {
  techs: IKnownTechs[]
}

export function KnownTechs({ techs }: KnownTechsProps) {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subTitle="Competências" />

      <div className="mt-[3.75rem] grid grid-cols-[repeat(auto-fit,minmax(16.5rem,1fr))] gap-3">
        {techs.map((tech, key) => (
          <KnownTech key={key} tech={tech} />
        ))}
      </div>
    </section>
  )
}
