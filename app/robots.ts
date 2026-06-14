import { Metadata } from 'next';

export const metadata: Metadata = {
  // Se o ambiente não for produção, bloqueia a indexação de todas as páginas
  robots: process.env.NEXT_PUBLIC_ENV !== 'production' 
    ? { index: true, follow: true }
    : { index: false, follow: false },
};