'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { NavItem } from './navItem'

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export function Header() {
  return (
    <motion.header
      className="absolute top-0 z-10 flex h-24 w-full items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-roboto text-3xl text-gray-300">
          Wesley Wisch
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {navItems.map((item, key) => (
            <NavItem key={key} {...item} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
