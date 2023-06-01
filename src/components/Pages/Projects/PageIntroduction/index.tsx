import { HiArrowNarrowLeft } from 'react-icons/hi'

import { Link } from '../../../Reusable/Link'
import { SectionTitle } from '../../../Reusable/SectionTitle'

export function PageIntroduction() {
  return (
    <section className="flex h-[28.125rem] w-full flex-col items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat px-2 lg:h-[39.375rem]">
      <SectionTitle
        title="Meus Projetos"
        subTitle="Projetos"
        className="items-center text-center [&>h3]:text-4xl"
      />

      <div className="flex flex-col items-center">
        <p className="my-6 max-w-[40rem] text-center text-sm text-gray-400 sm:text-base">
          Aqui você poderá ver alguns dos projetos que desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>

        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para home
        </Link>
      </div>
    </section>
  )
}
