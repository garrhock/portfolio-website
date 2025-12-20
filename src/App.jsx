import Hero from './components/Hero'
import Socials from './components/Socials'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <div className="ripple-3" aria-hidden="true"></div>
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 faded-column-borders">
        <Hero />
        <Socials />
        <Skills />
        <Education />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
