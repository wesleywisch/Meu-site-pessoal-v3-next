import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { TechBadge } from '../../../Reusable/TechBadge'
import { Link } from '../../../Reusable/Link'

export function ProjectCard() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-full w-full">
        <Image
          src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg"
          alt="image default"
          width={420}
          height={304}
          className="h-[12.5rem] w-full rounded-lg object-cover sm:h-[18.75rem] lg:min-h-full lg:w-[26.25rem]"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50">
          <Image
            src="/imgs/project-icon.svg"
            alt="Icon"
            width={20}
            height={20}
          />
          Projeto 1
        </h3>

        <p className="my-6 text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          aliquid quisquam autem libero nostrum maxime, ad porro corporis
          laborum asperiores? Consequuntur obcaecati facere assumenda iusto
          corporis cupiditate hic quia quo perspiciatis, fugit est dignissimos
          mollitia! Nisi facere odit aliquam culpa, nulla neque ipsa consequatur
          perferendis. Enim veritatis voluptate dolores at!
        </p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[21.875rem]">
          {Array.from({ length: 8 }).map((_, key) => (
            <TechBadge key={key} name="NextJs" />
          ))}
        </div>

        <Link href="/projects/projeto-1">
          Ver projeto <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
