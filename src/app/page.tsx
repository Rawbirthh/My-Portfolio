import Hero from "../components/hero"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"
import AnimatedBackground from "../components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <AnimatedBackground />
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> {/* Add this container */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}