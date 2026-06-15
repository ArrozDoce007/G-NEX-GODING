'use client';

import React, { useRef, useEffect, useState, TouchEvent, memo } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin } from 'lucide-react';
import { ProjectStatus } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';
import { useLocalizedProjects } from '@/lib/useLocalizedProjects';

interface ProjectCarouselProps {
  onProjectClick: (id: string) => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ onProjectClick }) => {
  const { t } = useLanguage();
  const localizedProjects = useLocalizedProjects();
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  const rotateInterval = 5000;
  const items = localizedProjects.slice(0, 5);

  const getStatusLabel = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.DEVELOPMENT: return t.status.development;
      case ProjectStatus.HOMOLOGATION: return t.status.homologation;
      case ProjectStatus.DELIVERED: return t.status.delivered;
      default: return status;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isHovering && isInView) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isHovering, isInView, items.length]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) setActive((prev) => (prev + 1) % items.length);
      else setActive((prev) => (prev - 1 + items.length) % items.length);
    }
    setTouchStart(null);
  };

  const getCardStyles = (index: number) => {
    const total = items.length;
    const diff = (index - active + total) % total;

    if (diff === 0) return "z-30 scale-100 opacity-100 translate-x-0";
    if (diff === 1 || diff === - (total - 1)) return "z-20 scale-[0.85] sm:scale-90 opacity-30 sm:opacity-40 translate-x-[40%] sm:translate-x-[45%] md:translate-x-[60%] blur-[2px]";
    if (diff === total - 1 || diff === -1) return "z-20 scale-[0.85] sm:scale-90 opacity-30 sm:opacity-40 -translate-x-[40%] sm:-translate-x-[45%] md:-translate-x-[60%] blur-[2px]";
    return "z-10 scale-75 opacity-0 pointer-events-none";
  };

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.DEVELOPMENT: return 'bg-slate-600';
      case ProjectStatus.HOMOLOGATION: return 'bg-brand-purple';
      case ProjectStatus.DELIVERED: return 'bg-emerald-600';
      default: return 'bg-slate-800';
    }
  };

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto h-[380px] sm:h-[420px] md:h-[550px] flex items-center justify-center overflow-visible"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={carouselRef}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-visible px-2 sm:px-4">
        {items.map((project, index) => (
          <div
            key={project.id}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => active === index && onProjectClick(project.id)}
            className={`absolute w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[380px] md:h-[480px] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none ${getCardStyles(index)}`}
          >
            <div className="relative w-full h-full rounded-2xl sm:rounded-[32px] overflow-hidden glass border border-white/10 shadow-2xl group">
              {/* Imagem com visualização clara */}
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* Tag de Status */}
              <div className={`absolute top-4 sm:top-6 left-0 ${getStatusColor(project.status)} text-white text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold py-1 sm:py-1.5 px-3 sm:px-5 rounded-r-full shadow-lg transform -translate-x-1 transition-transform group-hover:translate-x-0`}>
                {getStatusLabel(project.status).toUpperCase()}
              </div>

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-brand-purple/90 mb-1 sm:mb-2">
                   <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                   <span className="text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-widest">{t.carousel.globalDelivery}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight text-shadow-sm line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                   <div className="flex -space-x-1.5">
                      {project.tech_stack.slice(0, 3).map((tech) => (
                        <div key={tech} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[7px] sm:text-[8px] text-white font-bold">
                          {tech[0]}
                        </div>
                      ))}
                   </div>
                   <div className="p-1.5 sm:p-2 rounded-full bg-brand-purple text-white">
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navegação Manual - Hidden on mobile, visible on md+ */}
      <button 
        onClick={() => setActive((prev) => (prev - 1 + items.length) % items.length)}
        className="absolute left-2 sm:left-4 md:left-10 z-40 p-2 sm:p-3 rounded-full glass hover:bg-brand-purple hover:text-white transition-all shadow-lg active:scale-90 hidden sm:flex"
        aria-label="Projeto anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button 
        onClick={() => setActive((prev) => (prev + 1) % items.length)}
        className="absolute right-2 sm:right-4 md:right-10 z-40 p-2 sm:p-3 rounded-full glass hover:bg-brand-purple hover:text-white transition-all shadow-lg active:scale-90 hidden sm:flex"
        aria-label="Próximo projeto"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute -bottom-4 sm:-bottom-8 left-0 right-0 flex justify-center gap-1.5 sm:gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${active === idx ? 'w-6 sm:w-8 bg-brand-purple' : 'w-1.5 sm:w-2 bg-slate-300 dark:bg-white/20'}`}
            aria-label={`Ir para projeto ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ProjectCarousel);
