import Section from './Section'
import { SITE } from '../config'

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-20">
        <div>
          <div
            aria-hidden="true"
            className="flex aspect-square w-48 items-center justify-center rounded-3xl border border-leaf/40 bg-gradient-to-br from-forest/60 to-ink font-display text-6xl font-light text-fog lg:w-full"
          >
            NM
          </div>
          <p className="mt-6 font-display text-xl font-semibold">{SITE.owner}</p>
          <p className="text-ash">Founder, IntellIT</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li><a className="text-leaf hover:underline" href={SITE.links.portfolio} target="_blank" rel="noreferrer">Portfolio</a></li>
            <li><a className="text-leaf hover:underline" href={SITE.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="text-leaf hover:underline" href={SITE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className="max-w-prose space-y-6 text-lg text-ash">
          <p className="text-fog">
            I'm {SITE.owner}, the founder of IntellIT and a software engineer based in Cape Town. I hold a BSc in
            Computer Science and Computer Engineering from the University of Cape Town.
          </p>
          <p>
            I've built and maintained systems and APIs that support payment and fund administration for leading
            investment firms, designed automated test suites with hundreds of tests, and built web applications,
            data tools and machine learning models in Python, C#, JavaScript and SQL.
          </p>
          <p>
            I started IntellIT to give growing businesses the same careful engineering: honest advice, clean code,
            thorough testing and clear documentation, so the technology you invest in keeps working for you.
          </p>
          <dl className="grid gap-6 border-t border-white/10 pt-8 text-base sm:grid-cols-3">
            <div>
              <dt className="text-sm text-ash">Based in</dt>
              <dd className="mt-1 text-fog">Cape Town</dd>
            </div>
            <div>
              <dt className="text-sm text-ash">Works with</dt>
              <dd className="mt-1 text-fog">Python, C#, React, SQL</dd>
            </div>
            <div>
              <dt className="text-sm text-ash">Qualification</dt>
              <dd className="mt-1 text-fog">BSc, University of Cape Town</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  )
}
