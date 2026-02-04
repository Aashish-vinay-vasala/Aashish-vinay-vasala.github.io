'use client'
import Image from 'next/image';
import { Cpu, Brain, Zap, Sigma, Waves, Binary, Box, Home } from 'lucide-react';

const articlesData = [
  {
    title: "Introduction to Mathematics for Machine Learning",
    desc: "Understanding the Intuition, Not Just the Equations... Building the logical foundation for AI.",
    img: "/math-ml.png", // Placeholder - replace with your actual saved thumbnail
    link: "https://medium.com/@aashishvinayvasala/introduction-to-mathematics-for-machine-learning-60f7edd66d49",
    tag: "AI Math",
    icon: <Sigma className="w-4 h-4" />
  },
  {
    title: "Signals in Brain (BCI)",
    desc: "A deep dive into interpreting electrical signals from the human brain for digital control.",
    img: "/bci-signals.png",
    link: "https://medium.com/@aashishvinayvasala/signals-in-brain-bci-f00c9d319e16",
    tag: "Neuroscience",
    icon: <Waves className="w-4 h-4" />
  },
  {
    title: "Introduction to Brain Computer Interface (BCI)",
    desc: "Exploring Neural Controller Interfaces (NCI) and the future of Human-Machine communication.",
    img: "/bci-intro.png",
    link: "https://medium.com/@aashishvinayvasala/introduction-to-brain-computer-interface-bci-18c77f93ac5a",
    tag: "BCI",
    icon: <Brain className="w-4 h-4" />
  },
  {
    title: "Mathematics for ML: Part 1 — Linear Algebra",
    desc: "Mastering vectors and matrices: The fundamental language used by every modern AI model.",
    img: "/la-part1.jpg",
    link: "https://medium.com/@layamyadam8/", // Add specific link when published
    tag: "Linear Algebra",
    icon: <Binary className="w-4 h-4" />
  },
  {
    title: "Mathematics for ML: Part 2 — Linear Algebra",
    desc: "Continuing the journey: Understanding transformations, eigenvalues, and their role in Neural Networks.",
    img: "/la-part2.jpg",
    link: "https://medium.com/@layamyadam8/", // Add specific link when published
    tag: "Linear Algebra",
    icon: <Cpu className="w-4 h-4" />
  }
];

export default function Articles() {
  return (
    <section id="articles" className="py-24 px-6 relative overflow-hidden bg-[#0F172A]">
      {/* Background Neural Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-16 flex items-center gap-6">
          <span className="text-cyan-400 font-mono text-2xl">04.</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Technical Publications
          </span>
          <div className="h-[1px] bg-gradient-to-r from-cyan-900/50 to-transparent flex-grow"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((art, i) => (
            <a
              key={i}
              href={art.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-500 flex flex-col h-full"
            >
              {/* Thumbnail with Overlay */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={art.img}
                  alt={art.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80"></div>

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-cyan-400 text-xs font-medium">
                  {art.icon}
                  {art.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight mb-3">
                  {art.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-6 font-light flex-grow">
                  {art.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-cyan-500 text-xs font-bold tracking-widest uppercase">
                    Read on Medium
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-all duration-300">
                    <Zap className="w-4 h-4 text-white group-hover:text-black" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}