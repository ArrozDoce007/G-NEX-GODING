'use client';

import React, { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project, ProjectStatus } from '@/lib/types';
import Badge from './Badge';
import { useLanguage } from '@/lib/i18n';

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { t } = useLanguage();

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.DEVELOPMENT:
        return <Badge variant="gray">{t.status.development}</Badge>;
      case ProjectStatus.HOMOLOGATION:
        return <Badge variant="purple" pulse>{t.status.homologation}</Badge>;
      case ProjectStatus.DELIVERED:
        return <Badge variant="green">{t.status.delivered}</Badge>;
      default:
        return null;
    }
  };

  return (
    <div 
      onClick={() => onClick(project.id)}
      className="group relative cursor-pointer overflow-visible rounded-2xl sm:rounded-3xl glass transition-all duration-300 h-full flex flex-col shadow-xl shadow-black/5 dark:shadow-black/20 will-change-transform hover:shadow-2xl hover:shadow-brand-purple/10 hover:-translate-y-1"
    >
      <div 
        className="aspect-[16/10] overflow-hidden relative bg-slate-800 rounded-t-2xl sm:rounded-t-3xl shrink-0 pointer-events-none"
      >
        <img 
          src={project.image} 
          alt={`Visualização do projeto ${project.title}`} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-4 sm:p-5 md:p-7 relative flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4 sm:mb-5 gap-3 sm:gap-4">
          <div className="flex flex-col gap-2 sm:gap-2.5 min-w-0">
            <div className="transform transition-all duration-200 group-hover:translate-x-1 w-fit">
              {getStatusBadge(project.status)}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-brand-purple truncate pr-2 text-shadow-sm">
              {project.title}
            </h3>
          </div>
          <div 
            className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 group-hover:bg-brand-purple group-hover:text-white transition-all duration-200 shrink-0"
          >
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
          {project.description}
        </p>

        <div 
          className="mt-auto flex items-center gap-2 sm:gap-3 pt-4 sm:pt-5 border-t border-black/5 dark:border-white/10"
        >
          <div className="flex -space-x-2 shrink-0">
            {project.tech_stack.slice(0, 3).map((tech, i) => (
              <div 
                key={tech}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-black/5 dark:border-white/20 flex items-center justify-center text-[8px] sm:text-[9px] font-mono text-slate-700 dark:text-slate-200 shadow-sm"
                style={{ zIndex: 10 - i }}
                title={tech}
              >
                {tech[0]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 ml-auto min-w-0">
            {project.metrics.slice(0, 1).map((metric) => (
              <div key={metric.label} className="text-right min-w-0">
                <div className="text-[8px] sm:text-[9px] text-slate-500 dark:text-slate-500 uppercase tracking-widest font-bold mb-0.5 truncate">{metric.label}</div>
                <div className="text-xs sm:text-sm font-bold text-brand-purple dark:text-violet-400 font-mono transition-transform duration-200 group-hover:scale-105 origin-right">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectCard);
