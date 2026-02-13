import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Github, ExternalLink, Figma } from 'lucide-react';

import udulaImg from "../assets/projectImage/Udula.AUN.png";
import servioImg from "../assets/projectImage/servio.png";
import finoraImg from "../assets/projectImage/finora.png";
import bellezaImg from "../assets/projectImage/belleza.jpg";
import magImg from "../assets/projectImage/mag.png";

const projects = [
  {
    title: 'Udula.AUN',
    description:
      'A modern, responsive portfolio website to showcase skills and projects with smooth animations.',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/UdulaAUN/Portfolio.git',
    image: udulaImg,
    isCurrent: true, // Only Udula.AUN has the "Live Now" indicator
  },
  {
    title: 'Servio',
    description:
      'A full stack automotive platform with real time tracking and offline sync to streamline vehicle service management.',
    tags: ['React', 'Node.js', 'Express.js', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/UdulaAUN/ServioCarService11.git',
    image: servioImg, // Demo link removed
  },
  {
    title: 'Finora',
    description:
      'An intuitive personal finance manager app that empowers users to track spending and hit savings goals through detailed insights.',
    tags: ['Kotlin', 'Android Studio'],
    github: 'https://github.com/UdulaAUN/FinoraFinancial.git',
    image: finoraImg,
  },
  {
    title: 'Belleza Fashion Store',
    description:
      'A full featured online store with product filtering, cart functionality, and secure checkout integration.',
    tags: ['PHP', 'JavaScript', 'CSS', 'HTML', 'MySQL'],
    github: 'https://github.com/UdulaAUN/Belleza-Fashion-Store.git',
    image: bellezaImg,
  },
  {
    title: 'Usability Improvement for the Mag City website',
    description:
      'A research driven UI/UX redesign of the Mag City website focused on resolving navigation pain points and improving accessibility.',
    tags: ['UI/UX', 'Figma'],
    github:
      'https://www.figma.com/proto/kNxZH97bRLRRTZwfhuiF5K/Project-Magcity?page-id=0%3A1&node-id=614-9695&p=f&viewport=-2650%2C8462%2C0.17&t=hkWMPhterHgPoUmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=614%3A9695',
    image: magImg,
    isFigma: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              A selection of projects that demonstrate my ability to solve
              problems and build high quality software.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-4 gap-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-3 shrink-0">
                      {/* Only Udula.AUN will show this because of the isCurrent flag */}
                      {project.isCurrent ? (
                        <div 
                          className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full cursor-help" 
                          title="You are currently viewing this project"
                        >
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                            Live Now
                          </span>
                        </div>
                      ) : (
                        /* Standard Demo button - only shows if project.live exists */
                        project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border border-blue-500/20"
                          >
                            Demo
                          </a>
                        )
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors p-1"
                        aria-label={project.isFigma ? "View Figma Prototype" : "View Source"}
                      >
                        {project.isFigma ? <Figma size={20} /> : <Github size={20} />}
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-950 text-blue-400 text-xs font-medium rounded-full border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-20 flex justify-center">
            <a
              href="https://github.com/UdulaAUN"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900/50 hover:bg-slate-900 text-white rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl"
            >
              <Github className="group-hover:rotate-12 transition-transform duration-300 text-blue-400" />
              <span className="font-bold tracking-tight">
                Explore My Full Archive
              </span>
              <ExternalLink
                size={16}
                className="text-slate-500 group-hover:text-white transition-colors"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}