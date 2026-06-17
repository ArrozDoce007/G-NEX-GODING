'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'pt' | 'en' | 'es';

export const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: 'https://flagcdn.com/br.svg' },
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/us.svg' },
  { code: 'es', label: 'Español', flag: 'https://flagcdn.com/es.svg' },
];

type Dict = typeof translations.pt;

export const translations = {
  pt: {
    nav: { home: 'Início', showcase: 'Showcase', portfolio: 'Portfolio', method: 'Método' },
    hero: {
      tagline: 'Elite Developer • On Call',
      titleA: 'Design Web & ',
      titleB: 'Código de ',
      titleHighlight: 'Elite.',
      subtitle: 'Elevando o padrão digital através de interfaces memoráveis e engenharia de software de precisão.',
      ctaProjects: 'Explorar Projetos',
      ctaMethod: 'Metodologia',
      ctaQuote: 'Cotar um Projeto',
      features: [
        { title: 'UI/UX Strategy', desc: 'Design focado em psicologia e fluxos de alta fidelidade.' },
        { title: 'SaaS & Dashboards', desc: 'Aplicações complexas escaláveis com arquitetura limpa.' },
        { title: 'High Conversion', desc: 'Landing pages ultra-rápidas focadas em ROI e performance.' },
      ],
    },
    home: {
      showcaseTag: 'Showcase Elite',
      showcaseTitleA: 'Projetos em ',
      showcaseTitleB: 'Destaque',
      allCasesTitle: 'Todos os Cases',
      allCasesDesc: 'Nossa biblioteca completa de soluções digitais validadas e entregues.',
      casesCounter: 'CASES CATALOGADOS',
      methodTitle: 'Metodologia de Entrega Elite',
      methodItems: [
        { label: 'Estratégia UX', text: 'Mapeamento psicológico do usuário para conversão máxima.' },
        { label: 'Código Limpo', text: 'Arquitetura preparada para escala global e manutenção zero.' },
        { label: 'Performance', text: 'Otimização Core Web Vitals para carregamento instantâneo.' },
        { label: 'Homologação', text: 'Garantia total de qualidade através de testes rigorosos.' },
      ],
    },
    status: { development: 'Em Desenvolvimento', homologation: 'Homologação', delivered: 'Entregue' },
    carousel: { globalDelivery: 'Entrega Global' },
    detail: {
      back: 'Voltar para Projetos',
      badge: 'Web Design & Dev',
      caseId: 'Case ID',
      uxTitle: 'Estratégia de UX & Visual',
      uxSubtitle: 'Processo Criativo',
      resultsTitle: 'Resultados & Conversão',
      resultsSubtitle: 'Métricas de Sucesso',
      validationStatus: 'Validation Status',
      live: 'Live',
      corePerformance: 'Core Performance',
      webVitals: 'Web Vitals',
      grade: 'Grade A+',
      accessibility: 'Accessibility',
      aaReady: 'AA Ready',
      technologies: 'Technologies',
      startProject: 'Iniciar Projeto Elite',
    },
    timeline: [
      { label: 'Descoberta & UX', desc: 'Pesquisa de usuários, personas e definição da arquitetura de informação.' },
      { label: 'UI Design Premium', desc: 'Criação da interface visual de alta fidelidade e sistema de design.' },
      { label: 'Engenharia Frontend', desc: 'Codificação modular e responsiva com foco em interações fluidas.' },
      { label: 'Speed & SEO Audit', desc: 'Otimização rigorosa de Web Vitals, SEO técnico e performance de carregamento.' },
      { label: 'Lançamento & Go-Live', desc: 'Implantação em produção e monitoramento inicial de métricas de conversão.' },
    ],
    footer: { tagline: 'WEB DESIGN & DEVELOPMENT', stackGuide: 'Stack Guide', process: 'Processo' },
    language: 'Idioma',
    whatsappMessage: 'Quero cotar um Projeto',
  },
  en: {
    nav: { home: 'Home', showcase: 'Showcase', portfolio: 'Portfolio', method: 'Method' },
    hero: {
      tagline: 'Elite Developer • On Call',
      titleA: 'Web Design & ',
      titleB: 'Elite ',
      titleHighlight: 'Code.',
      subtitle: 'Raising the digital standard through memorable interfaces and precision software engineering.',
      ctaProjects: 'Explore Projects',
      ctaMethod: 'Methodology',
      ctaQuote: 'Request a Project',
      features: [
        { title: 'UI/UX Strategy', desc: 'Design focused on psychology and high-fidelity flows.' },
        { title: 'SaaS & Dashboards', desc: 'Complex scalable applications with clean architecture.' },
        { title: 'High Conversion', desc: 'Ultra-fast landing pages focused on ROI and performance.' },
      ],
    },
    home: {
      showcaseTag: 'Elite Showcase',
      showcaseTitleA: 'Featured ',
      showcaseTitleB: 'Projects',
      allCasesTitle: 'All Cases',
      allCasesDesc: 'Our complete library of validated and delivered digital solutions.',
      casesCounter: 'CATALOGED CASES',
      methodTitle: 'Elite Delivery Methodology',
      methodItems: [
        { label: 'UX Strategy', text: 'Psychological user mapping for maximum conversion.' },
        { label: 'Clean Code', text: 'Architecture built for global scale and zero maintenance.' },
        { label: 'Performance', text: 'Core Web Vitals optimization for instant loading.' },
        { label: 'QA & Approval', text: 'Total quality assurance through rigorous testing.' },
      ],
    },
    status: { development: 'In Development', homologation: 'Approval', delivered: 'Delivered' },
    carousel: { globalDelivery: 'Global Delivery' },
    detail: {
      back: 'Back to Projects',
      badge: 'Web Design & Dev',
      caseId: 'Case ID',
      uxTitle: 'UX & Visual Strategy',
      uxSubtitle: 'Creative Process',
      resultsTitle: 'Results & Conversion',
      resultsSubtitle: 'Success Metrics',
      validationStatus: 'Validation Status',
      live: 'Live',
      corePerformance: 'Core Performance',
      webVitals: 'Web Vitals',
      grade: 'Grade A+',
      accessibility: 'Accessibility',
      aaReady: 'AA Ready',
      technologies: 'Technologies',
      startProject: 'Start Elite Project',
    },
    timeline: [
      { label: 'Discovery & UX', desc: 'User research, personas and information architecture definition.' },
      { label: 'Premium UI Design', desc: 'Creation of high-fidelity visual interface and design system.' },
      { label: 'Frontend Engineering', desc: 'Modular and responsive coding focused on fluid interactions.' },
      { label: 'Speed & SEO Audit', desc: 'Rigorous optimization of Web Vitals, technical SEO and loading performance.' },
      { label: 'Launch & Go-Live', desc: 'Production deployment and initial monitoring of conversion metrics.' },
    ],
    footer: { tagline: 'WEB DESIGN & DEVELOPMENT', stackGuide: 'Stack Guide', process: 'Process' },
    language: 'Language',
    whatsappMessage: 'I want request a project',
  },
  es: {
    nav: { home: 'Inicio', showcase: 'Showcase', portfolio: 'Portafolio', method: 'Método' },
    hero: {
      tagline: 'Elite Developer • On Call',
      titleA: 'Diseño Web & ',
      titleB: 'Código de ',
      titleHighlight: 'Elite.',
      subtitle: 'Elevando el estándar digital a través de interfaces memorables e ingeniería de software de precisión.',
      ctaProjects: 'Explorar Proyectos',
      ctaMethod: 'Metodología',
      ctaQuote: 'Cotizar un Proyecto',
      features: [
        { title: 'UI/UX Strategy', desc: 'Diseño enfocado en psicología y flujos de alta fidelidad.' },
        { title: 'SaaS & Dashboards', desc: 'Aplicaciones complejas escalables con arquitectura limpia.' },
        { title: 'High Conversion', desc: 'Landing pages ultrarrápidas enfocadas en ROI y rendimiento.' },
      ],
    },
    home: {
      showcaseTag: 'Showcase Elite',
      showcaseTitleA: 'Proyectos ',
      showcaseTitleB: 'Destacados',
      allCasesTitle: 'Todos los Casos',
      allCasesDesc: 'Nuestra biblioteca completa de soluciones digitales validadas y entregadas.',
      casesCounter: 'CASOS CATALOGADOS',
      methodTitle: 'Metodología de Entrega Elite',
      methodItems: [
        { label: 'Estrategia UX', text: 'Mapeo psicológico del usuario para máxima conversión.' },
        { label: 'Código Limpio', text: 'Arquitectura preparada para escala global y mantenimiento cero.' },
        { label: 'Rendimiento', text: 'Optimización Core Web Vitals para carga instantánea.' },
        { label: 'Homologación', text: 'Garantía total de calidad a través de pruebas rigurosas.' },
      ],
    },
    status: { development: 'En Desarrollo', homologation: 'Homologación', delivered: 'Entregado' },
    carousel: { globalDelivery: 'Entrega Global' },
    detail: {
      back: 'Volver a Proyectos',
      badge: 'Web Design & Dev',
      caseId: 'Case ID',
      uxTitle: 'Estrategia de UX & Visual',
      uxSubtitle: 'Proceso Creativo',
      resultsTitle: 'Resultados & Conversión',
      resultsSubtitle: 'Métricas de Éxito',
      validationStatus: 'Validation Status',
      live: 'Live',
      corePerformance: 'Core Performance',
      webVitals: 'Web Vitals',
      grade: 'Grade A+',
      accessibility: 'Accessibility',
      aaReady: 'AA Ready',
      technologies: 'Technologies',
      startProject: 'Iniciar Proyecto Elite',
    },
    timeline: [
      { label: 'Descubrimiento & UX', desc: 'Investigación de usuarios, personas y definición de la arquitectura de información.' },
      { label: 'UI Design Premium', desc: 'Creación de la interfaz visual de alta fidelidad y sistema de diseño.' },
      { label: 'Ingeniería Frontend', desc: 'Codificación modular y responsiva enfocada en interacciones fluidas.' },
      { label: 'Speed & SEO Audit', desc: 'Optimización rigurosa de Web Vitals, SEO técnico y rendimiento de carga.' },
      { label: 'Lanzamiento & Go-Live', desc: 'Implementación en producción y monitoreo inicial de métricas de conversión.' },
    ],
    footer: { tagline: 'WEB DESIGN & DEVELOPMENT', stackGuide: 'Stack Guide', process: 'Proceso' },
    language: 'Idioma',
    whatsappMessage: 'Quiero cotizar un Proyecto',
  },
} as const;

// Project content translations keyed by project id
export const projectTranslations: Record<
  string,
  Record<Locale, { title: string; description: string; longDescription: string; architecture_summary: string; metricLabels: string[] }>
> = {
  'arbor-fintech': {
    pt: {
      title: 'Gerente de ativos da Arbor',
      description: 'Plataforma financeira para gestão de ativos e investimentos de alto risco.',
      longDescription: 'Desenvolvimento de uma interface robusta para investidores institucionais, onde a precisão dos dados e a velocidade de execução são críticas.',
      architecture_summary: 'Integração de WebSockets para feed de dados em tempo real e D3.js para visualizações complexas de portfólio.',
      metricLabels: ['Volume Gerenciado', 'Latência de Dados', 'Segurança'],
    },
    en: {
      title: 'Arbor Asset Manager',
      description: 'Financial platform for asset management and high-risk investments.',
      longDescription: 'Development of a robust interface for institutional investors, where data accuracy and execution speed are critical.',
      architecture_summary: 'WebSockets integration for real-time data feed and D3.js for complex portfolio visualizations.',
      metricLabels: ['Managed Volume', 'Data Latency', 'Security'],
    },
    es: {
      title: 'Gestor de Activos Arbor',
      description: 'Plataforma financiera para gestión de activos e inversiones de alto riesgo.',
      longDescription: 'Desarrollo de una interfaz robusta para inversores institucionales, donde la precisión de los datos y la velocidad de ejecución son críticas.',
      architecture_summary: 'Integración de WebSockets para feed de datos en tiempo real y D3.js para visualizaciones complejas de portafolio.',
      metricLabels: ['Volumen Gestionado', 'Latencia de Datos', 'Seguridad'],
    },
  },
  'pulse-healthtech': {
    pt: {
      title: 'Atendimento ao Paciente',
      description: 'Sistema de telemedicina e prontuário eletrônico com UX humanizada.',
      longDescription: 'Uma plataforma que conecta médicos e pacientes de forma fluida, focando em reduzir a ansiedade através de um design limpo.',
      architecture_summary: 'Implementação de WebRTC para chamadas de vídeo seguras e criptografia ponta-a-ponta.',
      metricLabels: ['Consultas Realizadas', 'Tempo de Agendamento', 'Acessibilidade'],
    },
    en: {
      title: 'Patient Care',
      description: 'Telemedicine system and electronic health records with humanized UX.',
      longDescription: 'A platform that seamlessly connects doctors and patients, focusing on reducing anxiety through clean design.',
      architecture_summary: 'WebRTC implementation for secure video calls and end-to-end encryption.',
      metricLabels: ['Consultations', 'Scheduling Time', 'Accessibility'],
    },
    es: {
      title: 'Atención al Paciente',
      description: 'Sistema de telemedicina y historia clínica electrónica con UX humanizada.',
      longDescription: 'Una plataforma que conecta médicos y pacientes de forma fluida, enfocándose en reducir la ansiedad a través de un diseño limpio.',
      architecture_summary: 'Implementación de WebRTC para videollamadas seguras y cifrado de extremo a extremo.',
      metricLabels: ['Consultas Realizadas', 'Tiempo de Agenda', 'Accesibilidad'],
    },
  },
  'mindset-lms': {
    pt: {
      title: 'MindSet Academy',
      description: 'Plataforma de e-learning focada em cursos de tecnologia e design.',
      longDescription: 'Um ecossistema completo para educação online, com gamificação e trilhas de aprendizado interativas.',
      architecture_summary: 'Utilização de Mux para streaming de vídeo adaptativo e arquitetura serverless.',
      metricLabels: ['Conclusão de Cursos', 'Alunos Ativos', 'Suporte Video-HD'],
    },
    en: {
      title: 'MindSet Academy',
      description: 'E-learning platform focused on technology and design courses.',
      longDescription: 'A complete ecosystem for online education, with gamification and interactive learning paths.',
      architecture_summary: 'Use of Mux for adaptive video streaming and serverless architecture.',
      metricLabels: ['Course Completion', 'Active Students', 'Video-HD Support'],
    },
    es: {
      title: 'MindSet Academy',
      description: 'Plataforma de e-learning enfocada en cursos de tecnología y diseño.',
      longDescription: 'Un ecosistema completo para educación online, con gamificación y rutas de aprendizaje interactivas.',
      architecture_summary: 'Uso de Mux para streaming de video adaptativo y arquitectura serverless.',
      metricLabels: ['Finalización de Cursos', 'Alumnos Activos', 'Soporte Video-HD'],
    },
  },
  'curso-tec': {
    pt: {
      title: 'Landing Page Curso de Tecnologia',
      description: 'Site Para Inscrição em Curso de Tecnologia imersivo.',
      longDescription: 'Projeto Focado em Estratégia Para Atração de Novos Clientes, Micro-interações.',
      architecture_summary: 'Tailwind para renderização de elementos leves no navegador e Next.js para orquestrar animações.',
      metricLabels: ['Aumento de Inscritos', 'Permanência no Site', 'Qualidade Visual'],
    },
    en: {
      title: 'Tech Course Landing Page',
      description: 'Immersive landing page for technology course enrollment.',
      longDescription: 'Project focused on strategy for attracting new clients, with micro-interactions.',
      architecture_summary: 'Tailwind for rendering lightweight browser elements and Next.js to orchestrate animations.',
      metricLabels: ['Enrollment Increase', 'Site Retention', 'Visual Quality'],
    },
    es: {
      title: 'Landing Page Curso de Tecnología',
      description: 'Sitio para inscripción en curso de tecnología inmersivo.',
      longDescription: 'Proyecto enfocado en estrategia para atracción de nuevos clientes, con microinteracciones.',
      architecture_summary: 'Tailwind para renderizar elementos ligeros en el navegador y Next.js para orquestar animaciones.',
      metricLabels: ['Aumento de Inscritos', 'Permanencia en el Sitio', 'Calidad Visual'],
    },
  },
  'gourmet-prime-site': {
    pt: {
      title: 'Gourmet Prime Experience',
      description: 'Presença digital premium para rede de restaurantes.',
      longDescription: 'Foco em fotografia gastronômica de alta qualidade e sistema de reservas online sem fricção.',
      architecture_summary: 'Remix para SSR ultra-rápido e Cloudinary para servir imagens gastronômicas otimizadas em tempo real.',
      metricLabels: ['Reservas Online', 'SEO Local', 'Page Load'],
    },
    en: {
      title: 'Gourmet Prime Experience',
      description: 'Premium digital presence for a restaurant chain.',
      longDescription: 'Focus on high-quality food photography and a frictionless online reservation system.',
      architecture_summary: 'Remix for ultra-fast SSR and Cloudinary to serve optimized food images in real time.',
      metricLabels: ['Online Reservations', 'Local SEO', 'Page Load'],
    },
    es: {
      title: 'Gourmet Prime Experience',
      description: 'Presencia digital premium para cadena de restaurantes.',
      longDescription: 'Enfoque en fotografía gastronómica de alta calidad y sistema de reservas online sin fricción.',
      architecture_summary: 'Remix para SSR ultrarrápido y Cloudinary para servir imágenes gastronómicas optimizadas en tiempo real.',
      metricLabels: ['Reservas Online', 'SEO Local', 'Page Load'],
    },
  },
  'flow-ecommerce': {
    pt: {
      title: 'Flow E-commerce Experience',
      description: 'Experiência de compra fluida com foco em dispositivos móveis e performance.',
      longDescription: 'Um e-commerce desenvolvido com a mentalidade Mobile-First, focando em reduzir a fricção no checkout.',
      architecture_summary: 'Frontend customizado em Next.js com o motor do Shopify via Storefront API.',
      metricLabels: ['Vendas Mobile', 'Redução de Carrinhos', 'Checkout Speed'],
    },
    en: {
      title: 'Flow E-commerce Experience',
      description: 'Seamless shopping experience focused on mobile devices and performance.',
      longDescription: 'An e-commerce developed with a Mobile-First mindset, focusing on reducing checkout friction.',
      architecture_summary: 'Custom Next.js frontend with the Shopify engine via Storefront API.',
      metricLabels: ['Mobile Sales', 'Cart Reduction', 'Checkout Speed'],
    },
    es: {
      title: 'Flow E-commerce Experience',
      description: 'Experiencia de compra fluida enfocada en dispositivos móviles y rendimiento.',
      longDescription: 'Un e-commerce desarrollado con mentalidad Mobile-First, enfocado en reducir la fricción en el checkout.',
      architecture_summary: 'Frontend personalizado en Next.js con el motor de Shopify vía Storefront API.',
      metricLabels: ['Ventas Mobile', 'Reducción de Carritos', 'Checkout Speed'],
    },
  },
};

interface LanguageContextValue {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Locale>('pt');

  useEffect(() => {
    const [lang, setLangState] = useState<Locale>(() => {
      if (typeof window === 'undefined') return 'en';

      const stored = localStorage.getItem('gnex-lang') as Locale | null;

      if (stored && ['pt', 'en', 'es'].includes(stored)) {
        return stored;
      }

      const browserLang = navigator.language.toLowerCase();

      if (browserLang.startsWith('pt')) return 'pt';
      if (browserLang.startsWith('es')) return 'es';

      return 'en';
    });

    const browserLang = navigator.language.toLowerCase();

    let detectedLang: Locale = 'en';

    if (browserLang.startsWith('pt')) {
      detectedLang = 'pt';
    } else if (browserLang.startsWith('es')) {
      detectedLang = 'es';
    }

    setLangState(detectedLang);
    localStorage.setItem('gnex-lang', detectedLang);
    document.documentElement.lang =
      detectedLang === 'pt' ? 'pt-BR' : detectedLang;
  }, []);

  const setLang = (next: Locale) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('gnex-lang', next);
      document.documentElement.lang = next === 'pt' ? 'pt-BR' : next;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}