'use client';

import React from 'react';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import ProjectCarousel from './ProjectCarousel';
import { useLanguage } from '@/lib/i18n';
import { useLocalizedProjects } from '@/lib/useLocalizedProjects';

interface HomeContentProps {
  onProjectClick: (id: string) => void;
}

const HomeContent: React.FC<HomeContentProps> = ({ onProjectClick }) => {
  const { t } = useLanguage();
  const projects = useLocalizedProjects();

  return (
    <main className="bg-transparent">
      <Hero />
      
      {/* Featured Showcase Section */}
      <section className="py-8 sm:py-10 md:py-12 overflow-hidden" id="showcase">
        <div className="container mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 h-px bg-brand-purple" />
            <span className="text-[10px] sm:text-xs font-mono font-bold text-brand-purple uppercase tracking-[0.2em] sm:tracking-[0.3em]">{t.home.showcaseTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">
            {t.home.showcaseTitleA}<br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-violet-400">{t.home.showcaseTitleB}</span>
          </h2>
        </div>
        
        <ProjectCarousel onProjectClick={onProjectClick} />
      </section>

      <section className="py-12 sm:py-14 md:py-16 scroll-mt-24" id="projects">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-500 text-shadow-sm">{t.home.allCasesTitle}</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base transition-colors duration-500 leading-relaxed">
                {t.home.allCasesDesc}
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[9px] sm:text-[10px] font-mono text-brand-purple dark:text-violet-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] border border-brand-purple/30 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold bg-brand-purple/5 backdrop-blur-xl">
                {projects.length} {t.home.casesCounter}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={onProjectClick} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-black/[0.02] dark:bg-black/40 backdrop-blur-2xl border-y border-black/5 dark:border-white/10 transition-colors duration-500 scroll-mt-24" id="methodology">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8 sm:mb-10 md:mb-12 text-slate-900 dark:text-white tracking-tight transition-colors duration-500 uppercase tracking-widest">{t.home.methodTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {t.home.methodItems.map((item, i) => (
              <div key={item.label} className="flex flex-col items-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl border border-black/10 dark:border-white/20 flex items-center justify-center text-brand-purple dark:text-violet-400 font-mono mb-3 sm:mb-4 md:mb-5 font-bold bg-white/50 dark:bg-slate-900/50 shadow-lg group-hover:scale-110 group-hover:border-brand-purple/40 transition-all duration-300 text-xs sm:text-sm md:text-base">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold mb-1 sm:mb-2 text-slate-900 dark:text-white text-xs sm:text-sm md:text-base transition-colors duration-500">{item.label}</h3>
                <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 px-1 sm:px-2 leading-relaxed transition-colors duration-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
