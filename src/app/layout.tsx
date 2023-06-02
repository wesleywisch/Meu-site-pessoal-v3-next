import { Metadata } from 'next'
import { Roboto_Flex as Roboto, IBM_Plex_Mono } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from '../components/Header'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'
import { BackToTop } from '../components/BackToTop'
import { Toaster } from '../components/Toaster'

import '../styles/global.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'Meu portfólio | Wesley Wisch',
    template: '%s | Wesley Wisch'
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        <main>
          {children}
          <ContactForm />
          <BackToTop />
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
