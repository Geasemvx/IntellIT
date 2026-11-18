import Section from './Section'
import { SERVICES } from '../config'

export default function Services() {
  return (
    <Section
      id="services"
      title="What we do"
      intro="We help small and growing businesses plan, build and run the technology they depend on, with careful engineering at every step."
    >
      <ul className="grid gap-x-16 md:grid-cols-2">
        {SERVICES.map((s) => (
          <li key={s.title} className="border-t border-white/10 py-8">
            <h3 className="font-display text-xl font-semibold text-fog">{s.title}</h3>
            <p className="mt-3 max-w-prose text-ash">{s.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
