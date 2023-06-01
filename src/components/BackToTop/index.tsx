'use client'
import { useCallback, useEffect, useState } from 'react'
import { TbArrowNarrowUp } from 'react-icons/tb'

import { Button } from '../Reusable/Button'

export function BackToTop() {
  const [show, setShow] = useState(false)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)

    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      {show && (
        <div className="fixed bottom-4 right-4 z-20">
          <Button
            className="shadow-lg shadow-emerald-400/20"
            onClick={scrollToTop}
          >
            <TbArrowNarrowUp size={20} />
          </Button>
        </div>
      )}
    </>
  )
}
