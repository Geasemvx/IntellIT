import Section from './Section'
import { PROCESS } from '../config'

export default function Process() {
  return (
    <Section id="process" title="How we work" intro="A simple, transparent process, so you always know what is happening and what comes next.">
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((step, i) => (
          <li key={step.title} className="relative">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-leaf/60 font-display text-leaf">
                {i + 1}
              </span>
              <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-leaf/50 to-transparent lg:block" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-ash">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
