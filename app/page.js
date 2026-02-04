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
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
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