'use client';

import { Terminal, Sun, Moon, Menu, X } from 'lucide-react';
import React, { useEffect, useState, memo } from 'react';
import SocialIcons from './SocialIcons';

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile quando rolar a página
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleScroll = () => setIsMobileMenuOpen(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobileMenuOpen]);

  // Bloqueia scroll do body quando menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 sm:py-4 bg-white/40 dark:bg-slate-950/40 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 shadow-xl' 
            : 'py-4 sm:py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="p-1.5 sm:p-2 rounded-xl bg-brand-purple/10 border border-brand-purple/20 group-hover:bg-brand-purple group-hover:rotate-[15deg] transition-all duration-300">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-brand-purple group-hover:text-white" />
            </div>
            <span className="font-mono text-base sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
              G-NEX<span className="hidden sm:inline text-brand-purple">.CODING</span>
              <span className="sm:hidden text-brand-purple">.C</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            <button onClick={() => handleNavClick('projects')} className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 hover:text-brand-purple dark:hover:text-white transition-colors">Portfólio</button>
            <button onClick={() => handleNavClick('methodology')} className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 hover:text-brand-purple dark:hover:text-white transition-colors">Metodologia</button>
            <button onClick={() => handleNavClick('showcase')} className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 hover:text-brand-purple dark:hover:text-white transition-colors">Showcase</button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-brand-purple dark:hover:text-white transition-all active:scale-95 shrink-0"
              aria-label="Alternar Tema"
            >
              {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
            
            <div className="h-6 w-px bg-slate-200 dark:bg-white/10 hidden sm:block" />
            
            <div className="hidden sm:flex items-center gap-2 sm:gap-5">
              <SocialIcons />
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-brand-purple dark:hover:text-white transition-all active:scale-95"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white dark:bg-slate-950 z-50 lg:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-white/10">
            <span className="font-mono text-lg font-bold text-slate-900 dark:text-white uppercase">
              Menu
            </span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-brand-purple transition-all active:scale-95"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 p-4 sm:p-6 space-y-2">
            <button 
              onClick={() => handleNavClick('showcase')}
              className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left text-slate-700 dark:text-slate-300 hover:bg-brand-purple/10 hover:text-brand-purple dark:hover:text-brand-purple transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all">
                <span className="font-mono font-bold text-brand-purple group-hover:text-white">01</span>
              </div>
              <div>
                <div className="font-bold text-base">Showcase</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Projetos em destaque</div>
              </div>
            </button>

            <button 
              onClick={() => handleNavClick('projects')}
              className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left text-slate-700 dark:text-slate-300 hover:bg-brand-purple/10 hover:text-brand-purple dark:hover:text-brand-purple transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all">
                <span className="font-mono font-bold text-brand-purple group-hover:text-white">02</span>
              </div>
              <div>
                <div className="font-bold text-base">Portfólio</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Todos os cases</div>
              </div>
            </button>

            <button 
              onClick={() => handleNavClick('methodology')}
              className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left text-slate-700 dark:text-slate-300 hover:bg-brand-purple/10 hover:text-brand-purple dark:hover:text-brand-purple transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all">
                <span className="font-mono font-bold text-brand-purple group-hover:text-white">03</span>
              </div>
              <div>
                <div className="font-bold text-base">Metodologia</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Nosso processo</div>
              </div>
            </button>
          </nav>

          {/* Social Icons at Bottom */}
          <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-white/10">
            <div className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-4">
              Redes Sociais
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
