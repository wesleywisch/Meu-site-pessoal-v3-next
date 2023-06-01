import Link from 'next/link'

import { ProjectCard } from './ProjectCard'

export function ProjectsList() {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(21.875rem,1fr))]">
      {Array.from({ length: 6 }).map((_, key) => (
        <Link key={key} href="/projects/projeto-1">
          <ProjectCard />
        </Link>
      ))}
    </section>
  )
}
