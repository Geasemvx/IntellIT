import { useState } from 'react'
import Logo from './Logo'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How we work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <a href="#top" aria-label="IntellIT home"><Logo /></a>

      <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
        {NAV.map((n) => (
          <a key={n.href} href={n.href} className="text-sm tracking-wide text-fog/90 transition-colors hover:text-steel">
            {n.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="btn-primary hidden px-6 py-2.5 text-sm md:inline-flex">Start a project</a>

      <button
        type="button"
        className="rounded-full border border-white/20 px-4 py-2 text-sm md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-6 top-20 flex flex-col gap-1 rounded-2xl border border-white/10 bg-panel/95 p-4 backdrop-blur md:hidden"
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 hover:bg-white/5">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
