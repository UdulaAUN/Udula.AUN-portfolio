import React, { useEffect, useState } from 'react';
import { Menu, X, Code2, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import cvPdf from '../assets/cv/Udula_Athulathmudali CV.pdf';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO AREA - UNCHANGED */}
        <a href="#hero" onClick={handleNavClick('#hero')} className="flex items-center gap-2 text-2xl font-bold text-white group">
          <Code2 className="w-8 h-8 text-blue-500 group-hover:rotate-12 transition-transform" />
          <span>
            Udula<span className="text-blue-500">.</span>AUN
          </span>
        </a>

        {/* Desktop Nav - UNCHANGED */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={handleNavClick(link.href)} className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wider relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </a>
          ))}
          
          <motion.a 
            href={cvPdf} 
            download="Udula_Athulathmudali_CV.pdf" 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2 bg-blue-600 text-white rounded-full font-medium overflow-hidden group transition-colors hover:bg-blue-700"
          >
            <span className="relative z-10">Download CV</span>
            <motion.div 
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* NEW MOBILE DESIGN: Center Float Stack integrated into your logic */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-6 top-24 bg-slate-900/90 backdrop-blur-2xl md:hidden z-40 p-4 rounded-[2rem] border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-center justify-between p-5 rounded-2xl hover:bg-blue-600/10 transition-all border border-transparent hover:border-blue-500/20"
                >
                  <span className="text-lg font-semibold text-slate-300 group-hover:text-blue-400">{link.name}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:rotate-90 transition-all">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                </motion.a>
              ))}

              <div className="mt-4 p-2">
                {/* YOUR OLD MOBILE BUTTON WITH PULSE */}
                <motion.a 
                  href={cvPdf} 
                  download="Udula_Athulathmudali CV.pdf" 
                  whileTap={{ scale: 0.96 }}
                  animate={{ 
                    boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.4)", "0 0 0px rgba(59, 130, 246, 0)"] 
                  }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="flex items-center justify-center w-full py-5 bg-blue-600 active:bg-blue-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg block"
                >
                  Download CV
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}