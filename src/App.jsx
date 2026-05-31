import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Hero />
        <div className="about-skills-row">
          <About />
          <Skills />
        </div>
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
