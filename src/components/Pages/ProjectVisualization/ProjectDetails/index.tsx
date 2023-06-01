import Link from 'next/link'
import { Link as ComponentLink } from '../../../Reusable/Link'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'

import { SectionTitle } from '../../../Reusable/SectionTitle'
import { TechBadge } from '../../../Reusable/TechBadge'
import { Button } from '../../../Reusable/Button'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export function ProjectDetails() {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[46.875rem] sm:pb-24">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            'url(/imgs/hero-bg.jpg) no-repeat center/cover, url(https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg) no-repeat center/cover',
        }}
      />

      <SectionTitle
        title="Projeto 1"
        subTitle="Projetos"
        className="items-center text-center [&>h3]:text-4xl"
      />

      <p className="my-4 max-w-[40rem] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias
        ratione, explicabo facere quibusdam, voluptatem vero quas quam deleniti
        hic pariatur rem harum rerum iusto dolorem nemo aliquam totam officia
        vel adipisci animi assumenda nulla. Eligendi, repellat vel. Harum neque
        deserunt esse eum ipsa eius voluptatibus eligendi temporibus sit quod?
      </p>

      <div className="flex w-full max-w-[20.625rem] flex-wrap items-center justify-center gap-2">
        {Array.from({ length: 7 }).map((_, key) => (
          <TechBadge key={key} name="ReactJs" />
        ))}
      </div>

      <div className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        <Link href="https://github.com/wesleywisch" target="_blank">
          <Button className="min-w-[11.25rem]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </Link>

        <Link href="https://github.com/wesleywisch" target="_blank">
          <Button className="min-w-[11.25rem]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </Link>
      </div>

      <ComponentLink href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </ComponentLink>
    </section>
  )
}
