'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { ProjectStatus } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';

interface DeliveryTimelineProps {
  currentStatus: ProjectStatus;
}

const DeliveryTimeline: React.FC<DeliveryTimelineProps> = () => {
  const { t } = useLanguage();
  const steps = t.timeline;

  return (
    <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-px before:bg-slate-200 dark:before:bg-white/10 transition-colors duration-500">
      {steps.map((step, idx) => (
        <div key={idx} className="relative pl-10 sm:pl-12 group">
          <div className="absolute left-0 top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 bg-brand-purple border-brand-purple text-white shadow-lg shadow-brand-purple/20">
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 font-bold" />
          </div>
          
          <div className="transition-all duration-300 opacity-100">
            <h4 className="font-bold mb-1 text-slate-900 dark:text-white text-xs sm:text-sm transition-colors duration-500">
              {step.label}
            </h4>
            <p className="text-[11px] sm:text-[12px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-sm transition-colors duration-500">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryTimeline;
