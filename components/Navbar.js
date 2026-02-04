'use client'
import React, { useState, useEffect, useRef } from 'react'
import {
  Menu, X, Cpu, Network,
  User, Code, Briefcase, History, Mail, BookOpen
} from 'lucide-react'

// --- 1. NEURAL NETWORK CANVAS EFFECT ---
const NeuralNetworkEffect = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const particleCount = 60;
    const connectionDistance = 150;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      if (particles.current.length > 0) return;
      const p = [];
      for (let i = 0; i < particleCount; i++) {
        p.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1
        });
      }
      particles.current = p;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(129, 140, 248, 0.4)';
        ctx.fill();

        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          const opacity = (1 - dist / connectionDistance) * 0.5;
          ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[5]" />;
};

// --- 2. NEURAL CURSOR ---
const NeuralCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    const handleMouseOver = (e) => {
      const target = e.target;
      setIsHovered(!!target.closest('a') || !!target.closest('button'));
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden md:block"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <div className={`w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] -translate-x-1/2 -translate-y-1/2 transition-all ${isHovered ? 'scale-150' : 'scale-100'}`} />
      <div className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 border border-indigo-500/30 rounded-full transition-all duration-500
        ${isHovered ? 'w-12 h-12 border-dashed animate-spin-slow opacity-100' : 'w-8 h-8 opacity-40'}`}
      />
    </div>
  );
};

// --- 3. MAIN NAVBAR ---
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // UPDATED ORDER: Articles moved before Experience
  const navLinks = [
    { label: 'About', href: '#about', icon: <User size={14} /> },
    { label: 'Skills', href: '#skills', icon: <Code size={14} /> },
    { label: 'Projects', href: '#projects', icon: <Briefcase size={14} /> },
    { label: 'Articles', href: '#articles', icon: <BookOpen size={14} /> },
    { label: 'Experience', href: '#experience', icon: <History size={14} /> },
    { label: 'Contact', href: '#contact', icon: <Mail size={14} /> },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}} />

      <NeuralCursor />
      <NeuralNetworkEffect />

      <nav className="backdrop-blur-md bg-[#0F172A]/70 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo Section */}
            <div className="flex items-center gap-3 text-xl font-bold tracking-wider">
              <div className="relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full animate-pulse"></div>
                 <Cpu className="w-7 h-7 text-cyan-400 relative z-10" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Aashish Vinay Vasala
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full font-medium text-white text-sm
                             bg-indigo-600/10 border border-indigo-400/10 hover:border-indigo-400/40
                             hover:bg-indigo-600/20 transition-all duration-300 cursor-none"
                >
                  <span className="text-indigo-400 group-hover:text-cyan-400 transition-colors">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-b border-white/10 px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}