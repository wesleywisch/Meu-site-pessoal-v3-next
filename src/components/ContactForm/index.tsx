import { SectionTitle } from '../Reusable/SectionTitle'
import { Form } from './Form'

export function ContactForm() {
  return (
    <section className="py-16 px-6 md:py-34 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[26.25rem] mx-auto">
        <SectionTitle
          title="Vamos trabalhar juntos? Entre em contato"
          subTitle="Contato"
          className="items-center text-center"
        />

        <Form />
      </div>
    </section>
  )
}
