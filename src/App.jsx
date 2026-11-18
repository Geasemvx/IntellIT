import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top" className="relative overflow-x-hidden">
      {/* Background treatment from the original template */}
      <img src="/gradient.png" alt="" aria-hidden="true" className="pointer-events-none absolute right-0 top-0 -z-0 w-[34rem] max-w-[90vw] opacity-50" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[20%] h-0 w-[30rem] -rotate-[30deg] shadow-[0_0_700px_15px_white]" />

      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
