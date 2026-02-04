import Navbar from '../components/Navbar' // Import the new Navbar
import Photo from '../components/Photo'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Articles from '../components/Articles'


export default function Home() {
  return (
    <main>
      <Navbar /> {/* Now sticky and persistent */}
      <Photo />
      <About />
      <Skills />
      <Projects />
      <Articles />
      <Experience />
      <Contact />

      <footer className="bg-gray-800 text-white text-center py-8">
        <p>&copy;2026 Aashish Vinay Vasala. All rights reserved.</p>
      </footer>
    </main>
  )
}