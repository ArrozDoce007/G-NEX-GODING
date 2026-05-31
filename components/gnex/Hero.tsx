'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Layout, Monitor, Smartphone } from 'lucide-react';
import React from 'react';
import Button from './Button';
import { sendWhatsAppMessage } from '@/lib/whatsapp';

const Hero: React.FC = () => {
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8"
          >
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] sm:rounded-[20px] bg-gradient-to-br from-brand-purple via-violet-500 to-transparent p-[1px]">
                <div className="w-full h-full rounded-[15px] sm:rounded-[19px] overflow-hidden bg-white dark:bg-slate-950 flex items-center justify-center transition-colors duration-500">
                  <span className="text-lg sm:text-xl font-bold text-brand-purple dark:text-white">G</span>
                </div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full border-[3px] sm:border-4 border-slate-50 dark:border-[#0a0a0f] shadow-lg shadow-emerald-500/40 animate-pulse transition-colors duration-500" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-slate-900 dark:text-white text-base sm:text-lg font-bold tracking-tight transition-colors duration-500 uppercase">G-NEX CODING</h2>
              <span className="text-brand-purple dark:text-brand-purple/90 text-[8px] sm:text-[9px] font-mono flex items-center gap-2 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">
                Elite Developer • On Call
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 sm:mb-8 tracking-tighter text-shadow-sm"
          >
            <span className="text-slate-900 dark:text-white transition-colors duration-500">Design Web & <br className="hidden sm:block" /><span className="sm:hidden"> </span>Código de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-purple via-violet-400 to-violet-600 dark:from-brand-purple dark:to-violet-400">
              Elite.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-2xl text-slate-700 dark:text-slate-300 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-light transition-colors duration-500"
          >
            Elevando o padrão digital através de interfaces memoráveis e engenharia de software de precisão.
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
              Explorar Projetos
            </Button>
            <Button
              onClick={() => scrollToSection('methodology')}
              variant="secondary"
              className="h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base text-slate-700 dark:text-white bg-slate-200/50 dark:bg-white/10 backdrop-blur-xl border-slate-300 dark:border-white/20 hover:bg-slate-300/50 dark:hover:bg-white/20 rounded-xl sm:rounded-2xl transition-all w-full sm:w-auto"
            >
              Metodologia
            </Button>
            <Button
              onClick={() => sendWhatsAppMessage()}
              variant="secondary"
              className="h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base text-slate-700 dark:text-white bg-slate-200/50 dark:bg-white/10 backdrop-blur-xl border-slate-300 dark:border-white/20 hover:bg-slate-300/50 dark:hover:bg-white/20 rounded-xl sm:rounded-2xl transition-all w-full sm:w-auto"
              icon={<ArrowRight />}
            >
              Cotar um Projeto
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
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-base sm:text-lg transition-colors duration-500">UI/UX Strategy</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">Design focado em psicologia e fluxos de alta fidelidade.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 transition-transform group-hover:scale-110">
                <Monitor className="w-5 h-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-base sm:text-lg transition-colors duration-500">SaaS & Dashboards</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">Aplicações complexas escaláveis com arquitetura limpa.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 group sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 transition-transform group-hover:scale-110">
                <Smartphone className="w-5 h-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-base sm:text-lg transition-colors duration-500">High Conversion</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">Landing pages ultra-rápidas focadas em ROI e performance.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
