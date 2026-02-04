import Navbar from '@/components/Navbar';
import Photo from '@/components/Photo';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Photo />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Articles />
        <Contact />
      </main>
    </div>
  );
}