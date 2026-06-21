'use client';

import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Layout, Monitor, Smartphone } from 'lucide-react';
import React from 'react';
import Button from './Button';
import SocialIcons from './SocialIcons';
import { sendWhatsAppMessage } from '@/lib/whatsapp';
import { useLanguage } from '@/lib/i18n';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden bg-transparent">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-brand-purple/20 rounded-full blur-[160px] pointer-events-none opacity-40 dark:opacity-20" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-brand-purple/10 rounded-full blur-[160px] pointer-events-none opacity-30 dark:opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl">
          

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 sm:mb-8 tracking-tighter text-shadow-sm"
          >
            <span className="text-slate-900 dark:text-white transition-colors duration-500">{t.hero.titleA}<br className="hidden sm:block" /><span className="sm:hidden"> </span>{t.hero.titleB}</span>
            <span className="text-brand-purple bg-clip-text bg-gradient-to-br from-brand-purple via-violet-400 to-violet-600 dark:from-brand-purple dark:to-violet-400">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-2xl text-slate-700 dark:text-slate-300 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-light transition-colors duration-500"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base text-white rounded-xl sm:rounded-2xl shadow-xl shadow-brand-purple/30 w-full sm:w-auto"
            >
              {t.hero.ctaProjects}
            </Button>
            <Button
              onClick={() => scrollToSection('methodology')}
              variant="secondary"
              className="h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base text-slate-700 dark:text-white bg-slate-200/50 dark:bg-white/10 backdrop-blur-xl border-slate-300 dark:border-white/20 hover:bg-slate-300/50 dark:hover:bg-white/20 rounded-xl sm:rounded-2xl transition-all w-full sm:w-auto"
            >
              {t.hero.ctaMethod}
            </Button>
            <Button
              onClick={() => sendWhatsAppMessage(t.whatsappMessage)}
              variant="secondary"
              className="h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base text-slate-700 dark:text-white bg-slate-200/50 dark:bg-white/10 backdrop-blur-xl border-slate-300 dark:border-white/20 hover:bg-slate-300/50 dark:hover:bg-white/20 rounded-xl sm:rounded-2xl transition-all w-full sm:w-auto"
              icon={<ArrowRight />}
            >
              {t.hero.ctaQuote}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 glass rounded-2xl sm:rounded-[32px] border border-black/5 dark:border-white/10 shadow-2xl shadow-black/10 transition-all duration-500"
          >
            <div className="flex flex-col gap-3 sm:gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 transition-transform group-hover:scale-110">
                <Layout className="w-5 h-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-base sm:text-lg transition-colors duration-500">{t.hero.features[0].title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">{t.hero.features[0].desc}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 transition-transform group-hover:scale-110">
                <Monitor className="w-5 h-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-base sm:text-lg transition-colors duration-500">{t.hero.features[1].title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">{t.hero.features[1].desc}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 group sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 transition-transform group-hover:scale-110">
                <Smartphone className="w-5 h-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-base sm:text-lg transition-colors duration-500">{t.hero.features[2].title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">{t.hero.features[2].desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
