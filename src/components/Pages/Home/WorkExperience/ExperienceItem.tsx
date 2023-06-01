import Image from 'next/image'
import Link from 'next/link'

import { TechBadge } from '../../../Reusable/TechBadge'

export function ExperienceItem() {
  return (
    <div className="grid grid-cols-[2.5rem,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/imgs/project-icon.svg"
            alt="empresa X"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <Link
            href="https://github.com/wesleywisch"
            target="_blank"
            className="text-gray-500 transition-colors hover:text-emerald-500"
          >
            @ Empresa x
          </Link>

          <h4 className="text-gray-300">Desenvolvedor Front-End Júnior</h4>
          <span className="text-gray-500">
            Jan 2023 • 0 momento • (2 meses)
          </span>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            aperiam autem quas veritatis mollitia ullam?
          </p>
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
          Competências
        </p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[21.875rem]">
          {Array.from({ length: 6 }).map((_, key) => (
            <TechBadge key={key} name="ReactJs" />
          ))}
        </div>
      </div>
    </div>
  )
}
