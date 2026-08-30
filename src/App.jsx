import { useEffect, useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

const SECTION_IDS = ['about', 'experience', 'projects']

function App() {
  const spotlightRef = useRef(null)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const spotlight = spotlightRef.current
    if (!spotlight || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    let frame = 0
    const handleMove = (event) => {
      const { clientX, clientY } = event
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        spotlight.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgb(245 180 69 / 0.09), transparent 80%)`
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          setActiveSection(visible[visible.length - 1].target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 hidden transition-[background] duration-200 lg:block"
      />
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:flex lg:gap-4 lg:px-24 lg:py-0">
        <Sidebar activeSection={activeSection} />
        <main id="content" className="pt-4 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
