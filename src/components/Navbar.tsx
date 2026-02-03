import React, { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Ensure this file is located at: public/Udula_Athulathmudali_CV.pdf
  const cvPath = "/Udula_Athulathmudali_CV.pdf";

  return (
    <nav className={`fixed top-0 w-full z-[999] transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('#hero')} 
          className="flex items-center gap-2 text-2xl font-bold text-white group cursor-pointer"
        >
          <Code2 className="w-8 h-8 text-blue-500 group-hover:rotate-12 transition-transform" />
          <span>Udula<span className="text-blue-500">.</span>AUN</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wider cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <a 
            href={cvPath} 
            target="_blank" 
            rel="noopener noreferrer"
            download="Udula_Athulathmudali_CV.pdf"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-2 z-[1001] cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-x-0 top-[100%] md:hidden bg-slate-900 border-t border-slate-800 transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible'}
      `}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-slate-300 hover:text-blue-400 text-lg font-medium py-2 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <a 
            href={cvPath} 
            target="_blank" 
            rel="noopener noreferrer"
            download="Udula_Athulathmudali_CV.pdf"
            className="mt-2 px-5 py-4 bg-blue-600 text-white text-center rounded-lg font-bold text-lg active:scale-95 transition-transform cursor-pointer"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}