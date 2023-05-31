import { TbBrandNextjs } from 'react-icons/tb'

import { SectionTitle } from '../../../Reusable/SectionTitle'
import { KnownTech } from '../../../Reusable/KnownTech'

export function KnownTechs() {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subTitle="Competências" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(16.5rem,1fr))] gap-3 mt-[3.75rem]">
        {Array.from({ length: 8 }).map((_, key) => (
          <KnownTech
            key={key}
            tech={{
              icon: <TbBrandNextjs size={22} />,
              name: 'Next Js',
              startDate: '2022-05-31',
            }}
          />
        ))}
      </div>
    </section>
  )
}
