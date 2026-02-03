import React, { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [{
  name: 'Home',
  href: '#hero'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={e => {
            e.preventDefault();
            scrollToSection('#hero');
          }} 
          className="flex items-center gap-2 text-2xl font-bold text-white group"
        >
          <Code2 className="w-8 h-8 text-blue-500 group-hover:rotate-12 transition-transform" />
          <span>
            Udula<span className="text-blue-500">.</span>AUN
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={e => {
                e.preventDefault();
                scrollToSection(link.href);
              }} 
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/assets/cv/Udula_Athulathmudali_CV.pdf" 
            download 
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-1" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Fixed Mobile Nav - Proper Positioning & Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ 
              clipPath: 'inset(100% 0 0 0)', 
              opacity: 0 
            }} 
            animate={{ 
              clipPath: 'inset(0% 0 0 0)', 
              opacity: 1 
            }} 
            exit={{ 
              clipPath: 'inset(100% 0 0 0)', 
              opacity: 0 
            }}
            transition={{ 
              type: 'spring', 
              duration: 0.4, 
              bounce: 0 
            }}
            className="md:hidden absolute top-full left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-700 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }} 
                  className="text-slate-200 hover:text-blue-400 text-xl font-semibold py-2 border-b border-slate-800/50 hover:border-blue-500/50 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/assets/cv/Udula_Athulathmudali_CV.pdf" 
                download 
                className="mt-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold text-center rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-200 border-2 border-blue-500/30"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}