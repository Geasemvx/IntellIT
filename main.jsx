export default function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`relative z-10 mx-auto max-w-7xl scroll-mt-8 px-6 py-24 lg:px-10 ${className}`}>
      <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-5 max-w-prose text-lg text-ash">{intro}</p>}
      <div className="mt-14">{children}</div>
    </section>
  )
}
