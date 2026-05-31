'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import HomeContent from './HomeContent';
import ProjectDetail from './ProjectDetail';
import BubblesBackground from './BubblesBackground';
import SocialIcons from './SocialIcons';
import { projectsData } from '@/lib/projects';

const GnexApp: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/project/', '');
      if (hash && projectsData.find(p => p.id === hash)) {
        setActiveProjectId(hash);
      } else {
        setActiveProjectId(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const handleProjectClick = (id: string) => { window.location.hash = `#/project/${id}`; };
  const handleBackToGrid = () => { window.location.hash = '#/'; };

  const activeProject = projectsData.find(p => p.id === activeProjectId);

  return (
    <div className="relative min-h-screen bg-transparent selection:bg-brand-purple selection:text-white overflow-x-hidden transition-colors duration-500">
      <BubblesBackground />
      
      <div className="relative z-10">
        <Header toggleTheme={toggleTheme} isDark={isDark} />
        
        <AnimatePresence mode="wait">
          {activeProject ? (
            <motion.div
              key={`detail-${activeProject.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProjectDetail project={activeProject} onBack={handleBackToGrid} />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <HomeContent onProjectClick={handleProjectClick} />
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="py-12 sm:py-16 md:py-20 border-t border-slate-200 dark:border-white/5 bg-white/40 dark:bg-black/40 backdrop-blur-2xl transition-colors duration-500">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-mono flex items-center gap-2 text-center md:text-left">
              <span className="w-2 h-2 rounded-full bg-brand-purple/40"></span>
              &copy; 2026 G-NEX.CODING // WEB DESIGN & DEVELOPMENT
            </div>
            
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <SocialIcons />
              <div className="flex gap-6 sm:gap-8">
                <a href="#" className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 hover:text-brand-purple transition-colors">Stack Guide</a>
                <a href="#" className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 hover:text-brand-purple transition-colors">Processo</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GnexApp;
