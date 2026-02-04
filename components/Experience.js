'use client'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Calendar, MapPin, Terminal, GitCommit, Activity, Server, Users, Rocket, Zap } from 'lucide-react'

export default function Experience() {
  // --- Particles Init ---
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      color: { value: "#06b6d4" },
      links: { color: "#8b5cf6", distance: 150, enable: true, opacity: 0.15, width: 1 },
      move: { enable: true, speed: 0.4, direction: "none", outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 800 }, value: 40 },
      opacity: { value: 0.5, animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false } },
      size: { value: { min: 1, max: 2 } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 140, links: { opacity: 0.6 } } },
    },
    detectRetina: true,
  };

  // --- Experience Data ---
  const experiences = [
    {
      company: "Saayam For All",
      location: "California, USA",
      role: "Machine Learning Engineer",
      period: "Aug 2025 - Nov 2025",
      type: "current",
      achievements: [
        "Engineered RL-driven recommendation system (Contextual Bandits, Deep Q-Learning) matching volunteers to projects.",
        "Built real-time feature pipelines with online learning for >5,000 users, cutting manual assignment by 50%.",
        "Applied feedback-driven optimization achieving >90% match suitability and increasing engagement by 20%."
      ],
      theme: "cyan",
      icon: <Rocket size={24} className="text-cyan-300" />
    },
    {
      company: "Tata Consultancy Services",
      location: "Verizon (Hyderabad, India)",
      role: "Machine Learning Engineer",
      period: "Jun 2021 - Sep 2023",
      type: "past",
      achievements: [
        "Deployed scalable Python/Java ML pipelines handling 10k+ transactions/minute distributed processing.",
        "Developed predictive analytics models using data-driven economic principles, reducing system downtime by 45%.",
        "Implemented real-time feature engineering workflows integrated into 20+ ML microservices.",
        "Hosted AWS ML workflows, resolving 200+ production issues and improving system efficiency by 15%.",
        "Mentored 10+ team members in pipeline design and deployment best practices, boosting productivity by 20%."
      ],
      theme: "purple",
      icon: <Zap size={24} className="text-purple-300" />
    }
  ]

  // Helper for theme classes
  const getTheme = (theme, type) => {
    const isCurrent = type === 'current';
    const base = theme === 'cyan' ? {
        text: 'text-cyan-400', border: 'border-cyan-500/30', hoverBorder: 'group-hover:border-cyan-400/60', glow: 'shadow-cyan-500/20', iconBg: 'bg-cyan-950/50',
        nodeColor: 'bg-cyan-400', nodeGlow: 'shadow-[0_0_15px_rgba(34,211,238,0.8)]'
    } : {
        text: 'text-purple-400', border: 'border-purple-500/30', hoverBorder: 'group-hover:border-purple-400/60', glow: 'shadow-purple-500/20', iconBg: 'bg-purple-950/50',
        nodeColor: 'bg-purple-400', nodeGlow: 'shadow-[0_0_15px_rgba(168,85,247,0.8)]'
    };

    if (isCurrent) {
        base.border = 'border-cyan-400/60';
        base.glow = 'shadow-[0_0_30px_rgba(6,182,212,0.3)]';
    }
    return base;
  }


  return (
    <section id="experience" className="relative py-24 min-h-screen flex items-center bg-[#050b14] overflow-hidden cursor-default">

      {/* 1. Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <Particles id="exp-particles" init={particlesInit} options={particlesConfig} className="h-full w-full" />
      </div>
      {/* Dark Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#050b14_90%)] pointer-events-none z-1"></div>


      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/30 border border-blue-400/20 text-blue-300 text-sm font-mono mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Terminal size={16} />
              <span>System Career Path Log</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              PROFESSIONAL JOURNEY
            </span>
          </h2>
        </div>


        {/* Vertical Timeline Structure (Single Column Left aligned) */}
        <div className="relative">
          {/* Central "Data Conduit" Line - Fixed to the left */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>


         {experiences.map((exp, index) => {
            const t = getTheme(exp.theme, exp.type);

            return (
            <div key={index} className={`relative mb-20`}>

                {/* Timeline "Network Node" Dot - Fixed to the left, aligned to top of card */}
                <div className={`absolute left-8 transform -translate-x-1/2 top-0 z-20
                                 w-8 h-8 rounded-full border-2 border-[#050b14] ${t.nodeColor} ${t.nodeGlow} flex items-center justify-center`}>
                    {exp.type === 'current' && (
                        <div className={`absolute inset-0 rounded-full ${t.nodeColor} animate-ping opacity-60`}></div>
                    )}
                    <div className="w-3 h-3 bg-[#050b14] rounded-full"></div>
                </div>


                {/* Experience "Terminal" Card Container - Padded left to clear timeline */}
                <div className={`group relative w-full pl-24`}>
                    <div className={`relative bg-[#0a0e17]/70 backdrop-blur-xl rounded-2xl p-6
                                    border-2 ${t.border} ${t.hoverBorder}
                                    shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_${t.glow.split('-')[1]}]
                                    transition-all duration-500 overflow-hidden`}>

                        {/* Subtle Scanline Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_2px,rgba(255,255,255,0.02)_2px)] bg-[size:100%_4px] pointer-events-none"></div>

                        {/* Card Header: Role & Company */}
                        <div className={`flex flex-col md:flex-row md:items-center gap-4 mb-6 border-b border-white/10 pb-4`}>
                            {/* Icon Power Core */}
                            <div className={`relative p-3 rounded-xl ${t.iconBg} border border-white/10 flex-shrink-0 flex items-center justify-center ${t.text} w-fit`}>
                                <div className="animate-pulse drop-shadow-[0_0_5px_currentColor]">
                                  {exp.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className={`text-xl font-mono font-bold tracking-wide ${t.text} mb-1`}>
                                    {exp.role}
                                </h3>
                                <div className={`text-lg text-white/90 font-semibold flex items-center gap-2`}>
                                    {exp.company}
                                </div>
                            </div>
                        </div>

                        {/* Metadata: Location & Date (Terminal Style) */}
                        <div className={`flex flex-wrap gap-4 mb-6 text-sm font-mono text-cyan-100/70`}>
                            <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-md border border-white/10">
                                <MapPin size={14} className={t.text} /> {exp.location}
                            </div>
                            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-md border ${t.border} ${exp.type === 'current' ? t.iconBg : 'bg-black/30'}`}>
                                <Calendar size={14} className={t.text} /> {exp.period}
                            </div>
                        </div>


                        {/* Achievements "Commit Logs" */}
                        <div className="space-y-3 font-mono text-sm">
                        {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className={`flex items-start gap-3`}>
                                <GitCommit size={16} className={`mt-1 flex-shrink-0 ${t.text} opacity-70`} />
                                <p className="text-cyan-100/80 leading-relaxed">{achievement}</p>
                            </div>
                        ))}
                        </div>

                    </div>
                </div>
            </div>
            )})}

        </div>

        {/* Bottom Stats (HUD Style) */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
           <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -z-10 md:block hidden"></div>
          <StatCard number="2+" label="Years Experience" theme="cyan" icon={<Activity size={18}/>}/>
          <StatCard number="5K+" label="Volunteers Matched" theme="purple" icon={<Users size={18}/>}/>
          <StatCard number="45%" label="Downtime Reduced" theme="blue" icon={<Server size={18}/>}/>
          <StatCard number="20+" label="ML Microservices" theme="cyan" icon={<Terminal size={18}/>}/>
        </div>

      </div>
    </section>
  )
}

// --- Sub-component for Stats ---
const StatCard = ({ number, label, theme, icon }) => {
    const themes = {
      cyan:   { text: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.2)]' },
      purple: { text: 'text-purple-400', border: 'border-purple-500/30', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.2)]' },
      blue:   { text: 'text-blue-400', border: 'border-blue-500/30', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]' },
    };
    const t = themes[theme] || themes.cyan;

  return (
    <div className={`bg-[#0a0e17]/60 backdrop-blur-md rounded-xl p-6 border-2 ${t.border} hover:border-opacity-80 ${t.glow} transition-all duration-300 group relative overflow-hidden text-center`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_2px,rgba(255,255,255,0.02)_2px)] bg-[size:100%_4px] pointer-events-none"></div>
      <div className={`flex items-center justify-center gap-2 mb-2 ${t.text} opacity-80`}>
        {icon}
      </div>
      <div className={`text-3xl font-mono font-bold ${t.text} mb-1 drop-shadow-md group-hover:scale-105 transition-transform`}>
        {number}
      </div>
      <div className="text-cyan-100/70 text-xs font-medium tracking-wider uppercase">
        {label}
      </div>
    </div>
  )
}