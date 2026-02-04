'use client'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Code, Brain, Database, Zap, Cloud, Cpu, Terminal, Layers, Gauge } from 'lucide-react'

export default function Skills() {
  // --- Particles Init (Same as About section for consistency) ---
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      color: { value: "#06b6d4" }, // Cyan nodes
      links: { color: "#8b5cf6", distance: 150, enable: true, opacity: 0.15, width: 1 }, // Subtle purple links
      move: { enable: true, speed: 0.4, direction: "none", outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5, animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false } },
      size: { value: { min: 1, max: 2 } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 140, links: { opacity: 0.6 } } },
    },
    detectRetina: true,
  };

  // --- Data Structure (Updated colors to fit the Cyan/Purple AI theme) ---
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "CUDA"],
      theme: "cyan" // Unified theme string instead of raw gradients
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "RL & ML Frameworks",
      skills: ["PyTorch", "TensorFlow", "Ray RLlib", "Stable-Baselines3", "Scikit-learn"],
      theme: "purple"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      skills: ["NumPy", "Pandas", "Apache Spark", "Ray Distributed", "Streaming Pipelines"],
      theme: "blue"
    },
    {
      // Changed icon and color theme to fit AI aesthetic better
      icon: <Gauge className="w-8 h-8" />,
      title: "Optimization & Analytics",
      skills: ["Statistics", "Linear Programming", "Operations Research", "Causal Inference"],
      theme: "cyan"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & MLOps",
      skills: ["AWS", "Docker", "Kubernetes", "FastAPI", "Model Monitoring", "CI/CD"],
      theme: "purple"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Deep Learning",
      skills: ["Neural Networks", "CNNs/RNNs", "Transformers", "NLP", "Computer Vision", "GPU Optimization"],
      theme: "pink"
    }
  ]

  // Helper to get theme classes dynamically
  const getThemeClasses = (theme) => {
    const themes = {
      cyan:   { text: 'text-cyan-400', border: 'border-cyan-500/30', hoverBorder: 'group-hover:border-cyan-400/60', glow: 'shadow-cyan-500/20', iconBg: 'bg-cyan-950/50', pillHover: 'hover:bg-cyan-500/20 hover:border-cyan-300' },
      purple: { text: 'text-purple-400', border: 'border-purple-500/30', hoverBorder: 'group-hover:border-purple-400/60', glow: 'shadow-purple-500/20', iconBg: 'bg-purple-950/50', pillHover: 'hover:bg-purple-500/20 hover:border-purple-300' },
      blue:   { text: 'text-blue-400', border: 'border-blue-500/30', hoverBorder: 'group-hover:border-blue-400/60', glow: 'shadow-blue-500/20', iconBg: 'bg-blue-950/50', pillHover: 'hover:bg-blue-500/20 hover:border-blue-300' },
      pink:   { text: 'text-pink-400', border: 'border-pink-500/30', hoverBorder: 'group-hover:border-pink-400/60', glow: 'shadow-pink-500/20', iconBg: 'bg-pink-950/50', pillHover: 'hover:bg-pink-500/20 hover:border-pink-300' },
    };
    return themes[theme] || themes.cyan;
  }


  return (
    <section id="skills" className="relative py-24 min-h-screen flex items-center bg-[#050b14] overflow-hidden cursor-default">

      {/* 1. Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <Particles id="skills-particles" init={particlesInit} options={particlesConfig} className="h-full w-full" />
      </div>
      {/* Dark Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#050b14_90%)] pointer-events-none z-1"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/30 border border-purple-400/20 text-purple-300 text-sm font-mono mb-6 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <Layers size={16} />
              <span>Core Competencies Loaded</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              TECHNICAL SKILLS
            </span>
          </h2>
        </div>


        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const theme = getThemeClasses(category.theme);

            return (
              <div
                key={index}
                // Card Container: Darker glass, stronger futuristic borders and glow on hover
                className={`group relative bg-[#0a0e17]/60 backdrop-blur-xl rounded-2xl p-8
                            border-2 ${theme.border} ${theme.hoverBorder}
                            shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_${theme.glow.split('-')[1]}]
                            transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}
              >
                {/* Futuristic Scanline Animation on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                {/* Icon "Power Core" */}
                <div className="relative mb-6 inline-block">
                  {/* Outer glow ring */}
                  <div className={`absolute inset-0 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 ${theme.iconBg.replace('bg-', 'bg-')}`}></div>
                   {/* Actual Icon Container */}
                  <div className={`relative rounded-xl p-4 ${theme.iconBg} border border-white/10 flex items-center justify-center ${theme.text}`}>
                    {/* Animated pulse on the icon itself */}
                    <div className="animate-pulse drop-shadow-[0_0_8px_currentColor]">
                      {category.icon}
                    </div>
                  </div>
                </div>

                {/* Title - Monospace font for tech feel */}
                <h3 className={`text-xl font-mono font-bold mb-6 ${theme.text} tracking-wide`}>
                  {category.title}
                </h3>

                {/* Skill Pills ("Data Chips") */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      // Pills: Dark background, subtle border, bright glow on hover
                      className={`px-4 py-1.5 text-sm font-medium text-cyan-100/80 bg-[#050b14]/80
                                  rounded-lg border border-white/10 ${theme.pillHover}
                                  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_currentColor]`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Corner Circuit Accent */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}>
                   <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={theme.text}>
                      <path d="M100 0V100H0L100 0Z" fill="currentColor"/>
                      <path d="M50 50L100 50L100 100L50 100L50 50Z" stroke="currentColor" strokeWidth="1"/>
                   </svg>
                </div>
              </div>
            );
          })}
        </div>


        {/* Bottom Stats Section ("System Metrics") */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {/* Decorative connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -z-10 md:block hidden"></div>

          <MetricCard number="6+" label="Skill Categories" theme="cyan" icon={<Layers size={18}/>} />
          <MetricCard number="40+" label="Technologies" theme="purple" icon={<Code size={18}/>} />
          <MetricCard number="3+" label="Languages" theme="blue" icon={<Terminal size={18}/>} />
          <MetricCard number="∞" label="Possibilities" theme="pink" icon={<Brain size={18}/>} />
        </div>

      </div>
    </section>
  )
}


// --- Sub-component for the bottom metrics ---
const MetricCard = ({ number, label, theme, icon }) => {
     const themes = {
      cyan:   { text: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.2)]' },
      purple: { text: 'text-purple-400', border: 'border-purple-500/30', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.2)]' },
      blue:   { text: 'text-blue-400', border: 'border-blue-500/30', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]' },
      pink:   { text: 'text-pink-400', border: 'border-pink-500/30', glow: 'shadow-[0_0_20px_rgba(236,72,153,0.2)]' },
    };
    const t = themes[theme];

  return (
    <div className={`bg-[#0a0e17]/60 backdrop-blur-md rounded-xl p-6 border-2 ${t.border} hover:border-opacity-80 ${t.glow} transition-all duration-300 group relative overflow-hidden`}>
       {/* Subtle scanline background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_2px,rgba(255,255,255,0.02)_2px)] bg-[size:100%_4px] pointer-events-none"></div>

      <div className={`flex items-center justify-center gap-2 mb-2 ${t.text} opacity-80`}>
        {icon}
      </div>
      {/* Monospace number for technical feel */}
      <div className={`text-4xl font-mono font-bold ${t.text} mb-1 text-center drop-shadow-md group-hover:scale-110 transition-transform`}>
        {number}
      </div>
      <div className="text-cyan-100/70 text-sm text-center font-medium tracking-wider">
        {label.toUpperCase()}
      </div>
    </div>
  )
}