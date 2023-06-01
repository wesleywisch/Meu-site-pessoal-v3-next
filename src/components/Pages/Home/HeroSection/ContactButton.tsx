'use client'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Button } from '../../../Reusable/Button'

export function ContactButton() {
  function handleContact() {
    const contactSection = document.querySelector('#contact')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button className="w-max shadow-button" onClick={handleContact}>
      Entre em contato <HiArrowNarrowRight size={18} />
    </Button>
  )
}
