import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://yogitajha.dev'),
  title: 'Yogita Jha | AI Engineer & Full Stack Developer',
  description:
    'Portfolio of Yogita Jha — AI Engineer specializing in agentic AI systems, RAG pipelines, multi-agent workflows, and scalable AI products. Based in Ahmedabad, India.',
  keywords: [
    'AI Engineer',
    'Agentic AI',
    'RAG Pipeline',
    'LangChain',
    'Multi-Agent Systems',
    'Full Stack Developer',
    'Yogita Jha',
    'Next.js',
    'React',
    'TypeScript',
    'LLM',
    'Groq',
    'OpenAI',
  ],
  authors: [{ name: 'Yogita Jha', url: 'https://github.com/yogita-06' }],
  creator: 'Yogita Jha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yogitajha.dev',
    siteName: 'Yogita Jha Portfolio',
    title: 'Yogita Jha | AI Engineer & Full Stack Developer',
    description:
      'Building intelligent AI systems, agentic workflows, RAG pipelines, and scalable AI products.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yogita Jha Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yogita Jha | AI Engineer',
    description: 'Building intelligent AI systems and agentic workflows.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060612',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="antialiased bg-[#060612] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}