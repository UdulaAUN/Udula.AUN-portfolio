import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Code2, Send } from 'lucide-react';

// ✅ Import your profile image
import profileImg from "../assets/profilePic/IMG_1938gg.jpg";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 mb-6 border border-blue-500/20 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide"
          >
            Software Engineer
          </motion.div>

          {/* ✅ Mobile change: text-4xl (Smaller name on mobile) */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500">
              Udula Athulathmudali
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Aspiring Software Engineer & Web Developer. I build modern, responsive web applications
            with a focus on clean code and user experience.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold overflow-hidden transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3.5 bg-slate-800/40 text-white rounded-full font-bold border border-slate-700 backdrop-blur-sm overflow-hidden transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" /> My Projects
              </span>
            </motion.button>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-6">
            <SocialLink href="https://github.com/UdulaAUN" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/udula-athulathmudali" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://www.instagram.com/udula_athulathmudali" icon={<Instagram size={20} />} label="Instagram" />
          </div>
        </motion.div>

        {/* Profile Image Area */}
        import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Code2, Send } from 'lucide-react';

// ✅ Import your profile image
import profileImg from "../assets/profilePic/IMG_1938gg.jpg";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 mb-6 border border-blue-500/20 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide"
          >
            Software Engineer
          </motion.div>

          {/* ✅ Change 2: Adjusted name size for mobile (text-4xl instead of 5xl) */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500">
              Udula Athulathmudali
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Aspiring Software Engineer & Web Developer. I build modern, responsive web applications
            with a focus on clean code and user experience.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold overflow-hidden transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3.5 bg-slate-800/40 text-white rounded-full font-bold border border-slate-700 backdrop-blur-sm overflow-hidden transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" /> My Projects
              </span>
            </motion.button>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-6">
            <SocialLink href="https://github.com/UdulaAUN" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/udula-athulathmudali" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://www.instagram.com/udula_athulathmudali" icon={<Instagram size={20} />} label="Instagram" />
          </div>
        </motion.div>

        {/* Profile Image Area */}
        <motion.div
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* ✅ Change 1: Increased mobile container size (w-80 h-80 instead of w-64 h-64) */}
          <div className="relative w-80 h-80 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] mx-auto flex items-center justify-center group">
            
            {/* Added Pulsing Background Glow - Subtly tuned */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-10 blur-2xl animate-pulse" />

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[2px] border-t-blue-500/40 border-r-transparent border-b-cyan-500/40 border-l-transparent rounded-full opacity-50"
            />

            <div className="relative w-[85%] h-[85%] z-20">
              <div className="w-full h-full rounded-[2.5rem] p-1.5 bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden relative group">
                <img
                  src={profileImg}
                  alt="Udula Athulathmudali"
                  className="w-full h-full object-cover rounded-[2rem] transition-all duration-1000 group-hover:scale-105 group-hover:saturate-110"
                />
                <div className="absolute inset-0 rounded-[2rem] border-[1px] border-white/10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out" />
              </div>

              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 backdrop-blur-2xl border border-white/5 rounded-3xl -z-10 rotate-[-5deg]" />
              
              <div className="absolute -bottom-6 -right-2 px-5 py-2 bg-slate-950/90 border border-slate-700 backdrop-blur-lg rounded-2xl flex items-center justify-center shadow-2xl z-30">
                <div className="flex gap-2 items-center">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-[11px] font-bold text-blue-100 tracking-widest uppercase">Available</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string; }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-3 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500 rounded-full transition-all border border-slate-800 backdrop-blur-sm group overflow-hidden"
      aria-label={label}
    >
      <span className="relative z-10 block transition-transform group-hover:scale-110">
        {icon}
      </span>
    </motion.a>
  );
}
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string; }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-3 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500 rounded-full transition-all border border-slate-800 backdrop-blur-sm group overflow-hidden"
      aria-label={label}
    >
      <span className="relative z-10 block transition-transform group-hover:scale-110">
        {icon}
      </span>
    </motion.a>
  );
}