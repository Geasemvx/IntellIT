import Logo from './Logo'
import { SITE } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <Logo className="text-2xl" />
          <p className="mt-2 text-sm text-ash">IT consultancy in {SITE.location}.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm text-ash">
          <a href="#services" className="hover:text-fog">Services</a>
          <a href="#process" className="hover:text-fog">How we work</a>
          <a href="#about" className="hover:text-fog">About</a>
          <a href="#contact" className="hover:text-fog">Contact</a>
        </nav>
      </div>
      <div className="border-t border-white/5">
        <p className="mx-auto max-w-7xl px-6 py-6 text-sm text-ash lg:px-10">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
