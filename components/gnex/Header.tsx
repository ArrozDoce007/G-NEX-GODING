'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Home, Briefcase, FolderOpen, Lightbulb } from 'lucide-react';

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
  isViewingProject?: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark, isViewingProject = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ['methodology', 'projects', 'showcase'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'showcase', label: 'Showcase', icon: Briefcase },
    { id: 'projects', label: 'Portfolio', icon: FolderOpen },
    { id: 'methodology', label: 'Metodo', icon: Lightbulb },
  ];

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-black/5 dark:border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            <a href="#/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-brand-purple via-violet-500 to-brand-purple flex items-center justify-center shadow-lg shadow-brand-purple/20 group-hover:shadow-xl group-hover:shadow-brand-purple/30 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-sm sm:text-base md:text-lg">G</span>
              </div>
              <span className="font-chakra text-xl sm:text-2xl tracking-wider text-slate-900 dark:text-white uppercase">
                G-NEX<span className="text-brand-purple">.CODING</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-brand-purple bg-brand-purple/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-xl flex items-center justify-center border border-black/10 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/10 transition-all duration-300 group"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300 group-hover:text-brand-purple transition-colors" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300 group-hover:text-brand-purple transition-colors" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation - Hidden when viewing project */}
      {!isViewingProject && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-t border-black/10 dark:border-white/10 safe-area-inset-bottom">
          <div className="flex items-center justify-around h-16 px-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-[60px] ${
                    isActive
                      ? 'text-brand-purple'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                    isActive ? 'bg-brand-purple/10' : ''
                  }`}>
                    <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                  </div>
                  <span className={`text-[10px] font-medium transition-all duration-300 ${
                    isActive ? 'font-bold' : ''
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;