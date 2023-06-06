'use client'
import Image from 'next/image'
import Link from 'next/link'

import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import { SiMicrosoftoutlook } from 'react-icons/si'
import { motion } from 'framer-motion'

import { TechBadge } from '../../../Reusable/TechBadge'
import { ContactButton } from './ContactButton'

import { techBadgeAnimation } from '../../../../lib/animations'
import { HomePageInfo } from '../../../../types/PageInfoType'

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

type HeroSectionProps = {
  heroInfo: HomePageInfo
}

export function HeroSection({ heroInfo }: HeroSectionProps) {
  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[47.1875rem] lg:pb-[6.875rem]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[33.125rem]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: .5 }}
        >
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="mt-2 text-4xl font-medium">Wesley Wisch</h2>

          <p className="my-6 text-sm text-gray-400 sm:text-base">
            Sou um desenvolvedor Front-End júnior.
            Meu objetivo é criar interfaces de usuários bonitas e funcionais.
            Estou sempre aberto a novas oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[21.25rem]">
            {heroInfo.technologies.map((tech, key) => (
              <TechBadge
                key={key}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: .2, delay: key * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <ContactButton />

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {Contacts.map((contact, key) => (
                <Link
                  key={key}
                  href={contact.url}
                  target="_blank"
                  className="transition-all hover:text-gray-100 hover:scale-125"
                >
                  {contact.icon}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className='origin-center'
        >
          <Image
            width={420}
            height={404}
            src="/imgs/profile.jpg"
            priority
            alt="Foto de perfil"
            className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
