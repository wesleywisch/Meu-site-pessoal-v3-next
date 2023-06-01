import Image from 'next/image'

export function ProjectCard() {
  return (
    <div className="group flex h-[27.25rem] flex-col overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-800 opacity-70 transition-all hover:border-emerald-500 hover:opacity-100">
      <div className="h-48 w-full overflow-hidden">
        <Image
          src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg"
          alt="image"
          width={380}
          height={200}
          unoptimized
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 transition-all group-hover:text-emerald-500">
          Projeto 1
        </strong>

        <p className="mt-2 line-clamp-4 text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          ipsum veritatis esse quibusdam praesentium facere illum ea sint
          itaque? Nihil.
        </p>

        <span className="mt-auto block truncate text-sm font-medium text-gray-300">
          Nextjs, Next Auth, Stitches, Radix, Typescript, Prisma, React Query
        </span>
      </div>
    </div>
  )
}
