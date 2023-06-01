import { SectionTitle } from '../Reusable/SectionTitle'
import { Form } from './Form'

export function ContactForm() {
  return (
    <section
      id="contact"
      className="md:py-34 flex items-center justify-center bg-gray-950 px-6 py-16"
    >
      <div className="mx-auto w-full max-w-[26.25rem]">
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
