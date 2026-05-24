'use client'

import { useLenis } from '@/hooks/useLenis'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

const CursorGlow = dynamic(() => import('@/components/ui/CursorGlow'), { ssr: false })
const FloatingParticles = dynamic(() => import('@/components/ui/FloatingParticles'), { ssr: false })

export default function Home() {
  useLenis()

  return (
    <main className="relative min-h-screen bg-[#060612] overflow-x-hidden">
      {/* Background ambient */}
      <FloatingParticles count={50} />
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
