'use client'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Cpu, Code2, BrainCircuit, Terminal, Zap } from 'lucide-react';

export default function About() {
  // --- Particles Init Function ---
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  // --- Particles Config (Subtle Neural Network) ---
  const particlesConfig = {
    particles: {
      color: { value: "#06b6d4" }, // Cyan nodes
      links: {
        color: "#8b5cf6", // Purple connections
        distance: 150,
        enable: true,
        opacity: 0.2, // Very subtle links
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6, // Slow, deliberate movement
        direction: "none",
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60, // Not too crowded
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: true,
          minimumValue: 0.1,
          speed: 1,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }, // Grab effect on hover
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.8 } }, // Intensify links on hover
      },
    },
    detectRetina: true,
  };


  // --- Reusable Card Component for consistency ---
  const InfoCard = ({ icon: Icon, title, children, accentColor }) => {
    const borderClass = accentColor === 'cyan' ? 'border-cyan-500/30 group-hover:border-cyan-400/60' : 'border-purple-500/30 group-hover:border-purple-400/60';
    const glowClass = accentColor === 'cyan' ? 'shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.3)]' : 'shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]';
    const iconBg = accentColor === 'cyan' ? 'bg-cyan-950/50 text-cyan-400' : 'bg-purple-950/50 text-purple-400';

    return (
      <div className={`group relative p-6 rounded-xl bg-[#0a0e17]/60 backdrop-blur-md border-2 ${borderClass} ${glowClass} transition-all duration-500 overflow-hidden`}>
        {/* Scanline effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

        <div className="relative z-10">
          {/* Card Header stylized as a terminal entry */}
          <div className="flex items-center gap-3 mb-4 border-b border-gray-800/50 pb-3">
            <div className={`p-2 rounded-lg ${iconBg} border border-white/10`}>
              <Icon size={20} />
            </div>
            <h3 className="text-lg font-mono font-bold tracking-wider text-cyan-100/90">
              <span className="text-gray-500 mr-2">{'//'}</span>
              {title}
            </h3>
          </div>
          <div className="text-cyan-100/70 leading-relaxed font-light">
            {children}
          </div>
        </div>
      </div>
    );
  };


  return (
    <section id="about" className="relative py-24 min-h-screen flex items-center bg-[#050b14] overflow-hidden">

      {/* 1. Dynamic Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="h-full w-full" />
      </div>

      {/* 2. Dark Radial Overlay for depth and focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#050b14_90%)] pointer-events-none z-1"></div>


      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* --- Section Title --- */}
        <div className="flex flex-col items-center mb-20">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-400/20 text-cyan-400 text-sm font-mono mb-6 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <Terminal size={16} />
              <span>System Identity & Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              ABOUT ME
            </span>
          </h2>
        </div>


        {/* --- Main Content Layout --- */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">

          {/* --- Left Column: The "AI Core" Visualization --- */}
          <div className="relative flex justify-center lg:sticky lg:top-32">
             {/* Outer rotating ring */}
             <div className="absolute inset-0 m-auto w-64 h-64 rounded-full border-2 border-dashed border-cyan-500/20 animate-[spin_20s_linear_infinite]"></div>
             {/* Inner rotating ring (counter-spin) */}
             <div className="absolute inset-0 m-auto w-56 h-56 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>

             {/* The Core */}
             <div className="relative w-48 h-48 bg-[#0a0e17] rounded-full flex items-center justify-center border-4 border-cyan-400/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] z-10 backdrop-blur-md">
                <BrainCircuit size={80} className="text-cyan-400 animate-pulse drop-shadow-[0_0_15px_cyan]" />
                {/* "Data flow" particles around the brain */}
                <div className="absolute w-full h-full rounded-full animate-ping opacity-20 bg-cyan-400/10"></div>
             </div>
             {/* Label under the core */}
             <div className="absolute -bottom-12 font-mono text-cyan-500/70 text-sm tracking-widest">
               [ NEURAL CORE ACTIVE ]
             </div>
          </div>


          {/* --- Right Column: The "Data Briefing" --- */}
          <div className="space-y-8">

            {/* Main Intro Paragraph (Terminal Style) */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-950/20 to-purple-950/20 border-l-2 border-cyan-400/50 backdrop-blur-sm font-mono text-sm md:text-base">
              <p className="text-cyan-100/80 leading-relaxed">
                <span className="text-cyan-400 mr-2">$</span>
                Initiating introduction protocol... I am an AI Engineer dedicated to constructing intelligent systems that translate complex data into actionable reality.
                <br /><br />
                Currently architecting a volunteer-matching algorithm at{' '}
                <span className="text-cyan-300 font-bold border-b border-cyan-500/30">Saayam For All</span>,
                leveraging advanced machine learning to connect human potential with meaningful opportunities.
              </p>
            </div>


            {/* Two Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard icon={Code2} title="DOMAIN EXPERTISE" accentColor="cyan">
                Specializing in Reinforcement Learning, NLP, and optimization engines. Developing solutions for
                <span className="text-cyan-200/90 font-medium"> quantitative trading</span>,
                <span className="text-cyan-200/90 font-medium"> adaptive pricing</span>, and
                <span className="text-cyan-200/90 font-medium"> autonomous decision systems</span>.
                Focusing on scalable intelligence from raw data.
              </InfoCard>

              <InfoCard icon={Zap} title="TECHNICAL APPROACH" accentColor="purple">
                Merging rigorous mathematical foundations with practical deep learning application. Expertise in
                <span className="text-purple-200/90 font-medium"> fine-tuning LLMs</span>,
                <span className="text-purple-200/90 font-medium"> CUDA optimization</span>, and architecting robust, end-to-end
                <span className="text-purple-200/90 font-medium"> ML pipelines</span> for real-world deployment.
              </InfoCard>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}