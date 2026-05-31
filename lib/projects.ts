import { Project, ProjectStatus } from './types';

export const projectsData: Project[] = [
  {
    id: 'arbor-fintech',
    title: 'Arbor Asset Manager',
    description: 'Plataforma financeira para gestão de ativos e investimentos de alto risco.',
    longDescription: 'Desenvolvimento de uma interface robusta para investidores institucionais, onde a precisão dos dados e a velocidade de execução são críticas.',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Volume Gerenciado', value: 'R$ 2B+' },
      { label: 'Latência de Dados', value: '50ms' },
      { label: 'Segurança', value: 'ISO 27001' }
    ],
    tech_stack: ['React', 'D3.js', 'WebSockets', 'AWS'],
    architecture_summary: 'Integração de WebSockets para feed de dados em tempo real e D3.js para visualizações complexas de portfólio.',
    validation_steps: [
      { id: '1', title: 'Arquitetura de Segurança', completed: true },
      { id: '2', title: 'Stress Test de Dados', completed: true },
      { id: '3', title: 'Audit de Interface (Fin)', completed: true },
      { id: '4', title: 'Conexão com Gateways', completed: true },
      { id: '5', title: 'Certificação de Compliance', completed: true }
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fm=webp&q=75&fit=crop&w=1000",
  },
  {
    id: 'pulse-healthtech',
    title: 'Pulse Patient Care',
    description: 'Sistema de telemedicina e prontuário eletrônico com UX humanizada.',
    longDescription: 'Uma plataforma que conecta médicos e pacientes de forma fluida, focando em reduzir a ansiedade através de um design limpo.',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Consultas Realizadas', value: '500k+' },
      { label: 'Tempo de Agendamento', value: '-60%' },
      { label: 'Acessibilidade', value: 'AA+' }
    ],
    tech_stack: ['Vue.js', 'Firebase', 'WebRTC', 'Material UI'],
    architecture_summary: 'Implementação de WebRTC para chamadas de vídeo seguras e criptografia ponta-a-ponta.',
    validation_steps: [
      { id: '1', title: 'UX Research Médico', completed: true },
      { id: '2', title: 'Criptografia de Dados', completed: true },
      { id: '3', title: 'Fluxo de Telemedicina', completed: true },
      { id: '4', title: 'Integração de Pagamentos', completed: true },
      { id: '5', title: 'Aprovação de Compliance', completed: true }
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fm=webp&q=75&fit=crop&w=1000",
  },
  {
    id: 'mindset-lms',
    title: 'MindSet Academy',
    description: 'Plataforma de e-learning focada em cursos de tecnologia e design.',
    longDescription: 'Um ecossistema completo para educação online, com gamificação e trilhas de aprendizado interativas.',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Conclusão de Cursos', value: '+35%' },
      { label: 'Alunos Ativos', value: '15k+' },
      { label: 'Suporte Video-HD', value: '4K' }
    ],
    tech_stack: ['Next.js', 'Mux Video', 'PostgreSQL', 'Stripe'],
    architecture_summary: 'Utilização de Mux para streaming de vídeo adaptativo e arquitetura serverless.',
    validation_steps: [
      { id: '1', title: 'Estrutura de Gamificação', completed: true },
      { id: '2', title: 'Player de Vídeo Custom', completed: true },
      { id: '3', title: 'Integração de Certificados', completed: true },
      { id: '4', title: 'Sistema de Checkout', completed: true },
      { id: '5', title: 'Testes de Carga', completed: true }
    ],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fm=webp&q=75&fit=crop&w=1000",
  },
  {
    id: 'curso-tec',
    title: 'Landing Page Technology Course',
    description: 'Site de Curso de Tecnologia imersivo.',
    longDescription: 'Projeto Focado em Estrategia Para Atração de Novos Clientes, Micro-interações.',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Aumento de Inscritos', value: '+47%' },
      { label: 'Permanência no Site', value: '5min+' },
      { label: 'Qualidade Visual', value: 'High-Res' }
    ],
    tech_stack: ['Next.js', 'Tailwind', 'SmoothScroll'],
    architecture_summary: 'Tailwind para renderização de elementos leves no navegador e Next.js para orquestrar animações.',
    validation_steps: [
      { id: '1', title: 'Otimização de Assets 3D', completed: true },
      { id: '2', title: 'Timeline de Animação', completed: true },
      { id: '3', title: 'UX Imersiva', completed: true },
      { id: '4', title: 'Cross-browser GL Test', completed: true },
      { id: '5', title: 'Aprovação Estética', completed: true }
    ],
    image: "https://imagens-pagina-web.s3.sa-east-1.amazonaws.com/curso04.png",
  },
  {
    id: 'gourmet-prime-site',
    title: 'Gourmet Prime Experience',
    description: 'Presença digital premium para rede de restaurantes de luxo.',
    longDescription: 'Foco em fotografia gastronômica de alta qualidade e sistema de reservas online sem fricção.',
    status: ProjectStatus.DELIVERED,
    metrics: [
      { label: 'Reservas Online', value: '+70%' },
      { label: 'SEO Local', value: '#1 Google' },
      { label: 'Page Load', value: '0.6s' }
    ],
    tech_stack: ['Remix', 'Cloudinary', 'Framer Motion', 'Tailwind'],
    architecture_summary: 'Remix para SSR ultra-rápido e Cloudinary para servir imagens gastronômicas otimizadas em tempo real.',
    validation_steps: [
      { id: '1', title: 'Otimização de Imagens', completed: true },
      { id: '2', title: 'Sistema de Reservas', completed: true },
      { id: '3', title: 'SEO Local Estratégico', completed: true },
      { id: '4', title: 'UI Dark Mode Elegante', completed: true },
      { id: '5', title: 'Mobile Experience Audit', completed: true }
    ],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fm=webp&q=75&fit=crop&w=1000",
  },
  {
    id: 'flow-ecommerce-app',
    title: 'Flow E-commerce Experience',
    description: 'Experiência de compra fluida com foco em dispositivos móveis e performance.',
    status: ProjectStatus.DELIVERED,
    longDescription: 'Um e-commerce desenvolvido com a mentalidade Mobile-First, focando em reduzir a fricção no checkout.',
    metrics: [
      { label: 'Vendas Mobile', value: '+55%' },
      { label: 'Redução de Carrinhos', value: '22%' },
      { label: 'Checkout Speed', value: '2s' }
    ],
    tech_stack: ['Next.js', 'Shopify Engine', 'Node.js', 'Stripe'],
    architecture_summary: 'Frontend customizado em Next.js com o motor do Shopify via Storefront API.',
    validation_steps: [
      { id: '1', title: 'Mobile-First Audit', completed: true },
      { id: '2', title: 'Fluxo de Checkout', completed: true },
      { id: '3', title: 'Testes de Carga', completed: true },
      { id: '4', title: 'Integração Gateway', completed: true },
      { id: '5', title: 'Monitoramento Pós', completed: true }
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fm=webp&q=75&fit=crop&w=1000",
  }
];
