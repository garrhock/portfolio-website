import Hero from './components/Hero'
import Socials from './components/Socials'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <div className="ripple-3"></div>
      <div className="items-center justify-center max-w-[30%] mx-auto px-6 pt-20">
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
