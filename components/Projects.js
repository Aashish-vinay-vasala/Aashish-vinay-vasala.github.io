'use client'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { TrendingUp, Users, DollarSign, Github, ChevronRight, ExternalLink } from 'lucide-react'

export default function Projects() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const projects = [
    {
      title: "QUANTUM TRADING SYSTEM",
      gif: "/QTS.gif",
      icon: <TrendingUp className="w-6 h-6" />,
      theme: "cyan",
      points: [
        "Situation: Volatile HFT markets required sub-millisecond decision-making beyond traditional models.",
        "Action: Engineered an automated RL-based alpha engine using contextual bandits and Nash Equilibrium principles via optimized Spark/Ray pipelines.",
        "Impact: Stabilized forecast accuracy, achieving consistent 0.5-1% alpha generation and reducing RMSE by 17%."
      ],
      tags: ["Reinforcement Learning", "Ray/Spark", "LSTM Networks"],
      metrics: { primary: "0.5-1% Alpha", secondary: "17% RMSE Reduction", tertiary: "<1ms Latency" }
    },
    {
      title: "CHURN INTERVENTION MATRIX",
      gif: "/churn.gif",
      icon: <Users className="w-6 h-6" />,
      theme: "purple",
      points: [
        "Situation: Rising customer churn in a competitive landscape needing proactive, budget-conscious retention.",
        "Action: Developed a Deep RL platform treating retention as a dynamic game, integrating online learning and Minimax strategies.",
        "Impact: Improved churn prediction accuracy by 15% and secured a 1% incremental revenue uplift through targeted interventions."
      ],
      tags: ["Game Theory", "Deep RL", "Online Learning"],
      metrics: { primary: "15% Acc ↑", secondary: "1% Rev Uplift", tertiary: "Real-time Adapt" }
    },
    {
      title: "ADAPTIVE PRICING ENGINE",
      gif: "/pricing.gif",
      icon: <DollarSign className="w-6 h-6" />,
      theme: "blue",
      points: [
        "Situation: Static pricing failing to capture elasticity across 500k+ daily transactions, missing revenue.",
        "Action: Built a real-time engine using Causal Inference and Elasticity Modeling, leveraging Spark Streaming for 60-second dynamic adjustments.",
        "Impact: Realized 15% forecast improvement and optimized margins with <1 minute pricing response time."
      ],
      tags: ["Causal Inference", "Dynamic Pricing", "Spark Streaming"],
      metrics: { primary: "15% Forecast ↑", secondary: "0.8% Margin ↑", tertiary: "<1min Updates" }
    }
  ];

  const getTheme = (t) => {
    const themes = {
      cyan: { border: 'border-cyan-500/50', text: 'text-cyan-400', shadow: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]', bg: 'group-hover:bg-cyan-950/20', icon: 'text-cyan-500' },
      purple: { border: 'border-purple-500/50', text: 'text-purple-400', shadow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]', bg: 'group-hover:bg-purple-950/20', icon: 'text-purple-500' },
      blue: { border: 'border-blue-500/50', text: 'text-blue-400', shadow: 'group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]', bg: 'group-hover:bg-blue-950/20', icon: 'text-blue-500' },
    };
    return themes[t];
  };

  return (
    /* ADDED id="projects" HERE */
    <section id="projects" className="bg-[#030712] py-24 px-4 min-h-screen relative overflow-hidden">
      {/* Subtler Particles Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Particles id="tsparticles" init={particlesInit} options={{
          particles: { color: { value: "#ffffff" }, links: { enable: true, opacity: 0.05 }, move: { enable: true, speed: 0.3 }, number: { value: 50 }, size: { value: 1 } }
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-28">
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-4">/// System_Portfolio ///</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase text-center">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => {
            const t = getTheme(project.theme);
            return (
              <div key={idx} className="group relative">

                <div className={`flex flex-col xl:flex-row-reverse bg-[#0a0e17] backdrop-blur-xl border-2 ${t.border} ${t.shadow} ${t.bg} transition-all duration-500 rounded-[32px] overflow-hidden relative z-10`}>

                  {/* RIGHT SIDE: Visuals */}
                  <div className="xl:w-1/2 h-[400px] xl:h-[600px] relative bg-[#000000] border-b xl:border-b-0 xl:border-l border-white/10 flex items-center justify-center p-4">
                    <img
                        src={project.gif}
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-500"
                        alt={project.title}
                    />
                    <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full border border-white/10">
                      <div className={`w-1.5 h-1.5 rounded-full ${t.text.replace('text', 'bg')} animate-pulse`}></div>
                      <span className="text-[9px] font-mono text-white/60 tracking-widest uppercase">Visual Feed Active</span>
                    </div>
                  </div>

                  {/* LEFT SIDE: Briefing */}
                  <div className="xl:w-1/2 p-8 xl:p-12 flex flex-col justify-center relative">
                    <div className="mb-8">
                       <div className={`inline-flex items-center gap-3 mb-4 ${t.text} bg-white/5 px-4 py-2 rounded-full`}>
                          {project.icon}
                          <span className="text-xs font-mono uppercase tracking-widest font-bold">Project 0{idx+1}</span>
                       </div>
                       <h3 className="text-3xl xl:text-4xl font-black text-white mb-6 tracking-tight uppercase">
                         {project.title}
                       </h3>
                    </div>

                    <ul className="space-y-5 mb-10">
                        {project.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <span className={`mt-1 ${t.icon} flex-shrink-0`}>
                                    <ChevronRight size={18} strokeWidth={3} />
                                </span>
                                <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">
                                    {point}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto border-t border-white/10 pt-8">
                        <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/5 text-[10px] text-gray-400 font-mono uppercase tracking-wider rounded">
                            {tag}
                            </span>
                        ))}
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider block mb-1">Core Impact</span>
                                <span className={`text-sm font-black ${t.text}`}>{project.metrics.primary}</span>
                            </div>
                            <div>
                                <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider block mb-1">Efficiency</span>
                                <span className="text-sm font-bold text-white">{project.metrics.secondary}</span>
                            </div>
                            <div className="flex justify-end items-center">
                                <button className={`group/btn flex items-center gap-2 ${t.text} text-xs font-bold uppercase tracking-widest hover:underline`}>
                                    View Case <ExternalLink size={12} />
                                </button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-5 -z-10 opacity-20 group-hover:opacity-50 transition-opacity duration-700 blur-[80px] ${t.text.replace('text', 'bg')}`}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}