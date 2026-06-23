import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Chakra_Petch } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const chakraPetch = Chakra_Petch({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-chakra"
});

export const metadata: Metadata = {
  title: 'G-NEX CODING | Portfolio Elite',
  description: 'Web design e desenvolvimento de alto padrão. Sites modernos, landing pages e aplicações web performáticas.',
  metadataBase: new URL('https://g-nex-coding.com.br'),

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://g-nex-coding.com.br/',
    title: 'G-NEX CODING | Portfolio Elite',
    description: 'Web design e desenvolvimento de alto padrão. Sites modernos, landing pages e aplicações web performáticas.',
    images: [
      {
        url: 'https://imagens-pagina-web.s3.sa-east-1.amazonaws.com/G-NEX-CODING/g-nex1.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'G-NEX CODING Portfolio Elite',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: 'https://imagens-pagina-web.s3.sa-east-1.amazonaws.com/G-NEX-CODING/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
    shortcut: ['https://imagens-pagina-web.s3.sa-east-1.amazonaws.com/G-NEX-CODING/favicon.ico'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0f4ff' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0c12' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${chakraPetch.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}