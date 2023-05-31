import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import { SiMicrosoftoutlook } from 'react-icons/si'

import { TechBadge } from '../../../Reusable/TechBadge'
import { Button } from '../../../Reusable/Button'

const Contacts = [
  {
    url: 'https://github.com/wesleywisch',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/wesley-wisch/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'mailto:wesley_wisch@hotmail.com',
    icon: <SiMicrosoftoutlook />,
  },
]

export function HeroSection() {
  return (
    <section className="w-full lg:h-[47.1875rem] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[6.875rem]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[33.125rem]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Wesley Wisch</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nme é Wesley Wisch e sou um desenvolvedor Front-End júnior.
            Meu objetivo é criar interfaces de usuários bonitas e funcionais.
            Estou sempre aberto a novas oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[21.25rem]">
            {Array.from({ length: 7 }).map((_, key) => (
              <TechBadge key={key} name="ReactJs" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {Contacts.map((contact, key) => (
                <Link
                  key={key}
                  href={contact.url}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/imgs/profile.jpg"
          alt="Foto de perfil"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
