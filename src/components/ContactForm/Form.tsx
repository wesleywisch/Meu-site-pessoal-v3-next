'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { Button } from '../Reusable/Button'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Form() {
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  function onSubmit(data: ContactFormData) {
    console.log(data)
  }

  return (
    <form
      className="mt-12 flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        placeholder="Nome"
        className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-emerald-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
        {...register('name')}
      />
      <input
        placeholder="E-mail"
        type="email"
        className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-emerald-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
        {...register('email')}
      />
      <textarea
        placeholder="Mensagem"
        className="h-[8.625rem] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 ring-emerald-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
        maxLength={500}
        {...register('message')}
      />

      <Button className="mx-auto mt-6 w-max shadow-button" type="submit">
        Enviar mensagem <HiArrowNarrowRight size={18} />
      </Button>
    </form>
  )
}
