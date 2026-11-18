import { lazy, Suspense } from 'react'
import SafeBoundary from './SafeBoundary'

const RobotScene = lazy(() => import('./RobotScene'))

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-6 pb-16 pt-4 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.05fr_1fr] lg:px-10">
      <div className="order-2 lg:order-1">
        <div className="rise rise-1 tag-box"><span>IT consultancy in Cape Town</span></div>
        <h1 className="rise rise-2 mt-8 font-display text-5xl font-semibold uppercase leading-[1.05] tracking-wide [text-shadow:0_0_10px_rgba(128,128,128,0.4)] sm:text-6xl lg:text-7xl">
          Made for<br />innovators
        </h1>
        <p className="rise rise-3 mt-7 max-w-prose text-lg text-ash">
          At IntellIT, we believe technology should empower businesses, not overwhelm them. We build custom software,
          AI and automation, and reliable data systems that help growing organisations harness the full potential of
          digital solutions.
        </p>
        <div className="rise rise-4 mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">Start a project</a>
          <a href="#services" className="btn-outline">See what we do</a>
        </div>
      </div>

      <div className="order-1 h-[360px] sm:h-[460px] lg:order-2 lg:h-[680px]">
        <SafeBoundary>
          <Suspense fallback={null}>
            <RobotScene />
          </Suspense>
        </SafeBoundary>
      </div>
    </section>
  )
}
