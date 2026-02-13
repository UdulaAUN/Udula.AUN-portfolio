import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Code2, Send } from 'lucide-react';

// ✅ Import your profile image (important for Vercel)
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

          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500">
              Udula Athulathmudali
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Aspiring Software Engineer & Web Developer. I build modern, responsive web applications
            with a focus on clean code and user experience.
          </p>

          {/* Main Buttons */}
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
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 4, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-white/20 rounded-full"
              />
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
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 4, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-blue-500/20 rounded-full"
              />
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start items-center gap-6">
            <SocialLink href="https://github.com/UdulaAUN" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/udula-athulathmudali" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink
              href="https://www.instagram.com/udula_athulathmudali?igsh=MW1vZmJtMnE4MnBhZQ=="
              icon={<Instagram size={20} />}
              label="Instagram"
            />
          </div>
        </motion.div>

        {/* Profile Image Area */}
        <motion.div
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-2xl animate-pulse" />
            <div className="absolute inset-0 border-2 border-slate-700/50 rounded-[2rem] rotate-3" />
            <div className="absolute inset-0 bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700/50 group">
              {/* ✅ Use imported image */}
              <img
                src={profileImg}
                alt="Udula Athulathmudali"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
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

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-blue-500/40 rounded-full"
      />
    </motion.a>
  );
}