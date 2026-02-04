'use client'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Cpu, Network } from 'lucide-react'

export default function Photo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cursorRef = useRef(null)

  // --- Custom Cursor Effect ---
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`
      }
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])


  // --- REMOVED renderColoredName HELPER FUNCTION ---


  // Reusable CSS classes
  const navLinkClasses = `px-4 py-2 rounded-full font-medium text-cyan-100/90
    bg-gradient-to-r from-cyan-900/30 to-purple-900/30
    border border-cyan-400/30
    shadow-[0_0_10px_rgba(6,182,212,0.3)]
    hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
    hover:border-purple-400/50 hover:text-white
    transition-all duration-300 backdrop-blur-md relative overflow-hidden group`

  const primaryButtonClasses = `px-8 py-3 rounded-full font-bold text-white tracking-wide
    bg-gradient-to-r from-cyan-600/40 via-blue-600/40 to-purple-600/40
    border-2 border-cyan-400/50
    shadow-[0_0_25px_rgba(6,182,212,0.5)]
    hover:shadow-[0_0_35px_rgba(6,182,212,0.8)]
    hover:border-cyan-300
    transition-all duration-300 backdrop-blur-md relative z-10`

  const secondaryButtonClasses = `px-8 py-3 rounded-full font-bold text-purple-200 tracking-wide
    border-2 border-purple-500/50
    hover:border-cyan-400 hover:text-cyan-50
    hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
    hover:bg-purple-900/20
    transition-all duration-300 relative z-10`


  return (
    <div className="bg-[#050b14] text-blue-50 font-sans cursor-none relative">

       {/* Custom Cursor Element */}
       <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full
                   bg-cyan-400/40 backdrop-blur-sm
                   border border-cyan-200/80
                   shadow-[0_0_15px_2px_rgba(6,182,212,0.6)]
                   pointer-events-none z-[9999]
                   will-change-transform
                   transition-transform duration-75 ease-out"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>





      {/* ========================= HERO SECTION ========================= */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-[#050b14]"
      >
        {/* --- Background Layers --- */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity"
             style={{
                backgroundImage: 'url(/background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-[#050b14]/80 to-[#050b14] z-1"></div>
        <div className="absolute inset-0 opacity-[0.15] z-2
                        bg-[linear-gradient(to_right,#06b6d41a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d41a_1px,transparent_1px)]
                        bg-[size:50px_50px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-purple-600/20 rounded-full blur-[120px] animate-pulse z-0"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-600/20 rounded-full blur-[150px] animate-pulse delay-1000 z-0"></div>


        {/* --- Content --- */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/30 text-cyan-300 text-sm font-mono mb-6 backdrop-blur-md shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                  <Network size={14} />
                  <span>Neural Systems Activated</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                Hi, I'm{' '}
                {/* CHANGE 2: Updated Main Name to single gradient color */}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  Aashish Vinay Vasala
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-cyan-100/90 flex items-center gap-3">
                <span className="text-purple-400">{'>'}</span> AI & Machine Learning Engineer
              </h2>

              <p className="text-lg mb-10 text-blue-100/70 leading-relaxed max-w-xl border-l-2 border-purple-500/30 pl-6">
                Architecting intelligent neural networks and transforming complex datasets into
                scalable, real‑world autonomous solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-6">
                <a href="#contact" className={primaryButtonClasses}>
                  Initialize Contact
                </a>
                <a href="#projects" className={secondaryButtonClasses}>
                  Explore Neural Data
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center relative">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_20s_linear_infinite] w-[300px] h-[300px] md:w-[340px] md:h-[340px] -m-[20px]"></div>

              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                              border-4 border-cyan-400/50
                              shadow-[0_0_60px_rgba(6,182,212,0.4)]
                              backdrop-blur-xl relative z-10 bg-black">
                <img
                  src="/Aashish-Photo.jpg"
                  alt="Aashish Vinay Vasala"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}