'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Linkedin, Mail, Download, Eye, Sparkles, Zap, Brain, Bot } from 'lucide-react'
import dynamic from 'next/dynamic'

const AnimeCharacter = dynamic(() => import('@/components/character/AnimeCharacter'), { ssr: false })

const techIcons = [
  { icon: '🤖', label: 'AI', x: '8%', y: '20%', delay: 0 },
  { icon: '🦜', label: 'LangChain', x: '88%', y: '15%', delay: 0.3 },
  { icon: '⚡', label: 'Groq', x: '4%', y: '60%', delay: 0.6 },
  { icon: '⚛️', label: 'React', x: '90%', y: '55%', delay: 0.9 },
  { icon: '🔍', label: 'RAG', x: '12%', y: '82%', delay: 0.2 },
  { icon: '🧠', label: 'LLM', x: '85%', y: '80%', delay: 0.5 },
  { icon: '🚀', label: 'FastAPI', x: '50%', y: '5%', delay: 0.8 },
  { icon: '🌲', label: 'Pinecone', x: '48%', y: '92%', delay: 0.1 },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#060612]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-12 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF6B9D, transparent)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] opacity-6 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #38BDF8, transparent)' }}
      />

      {/* Floating tech icons */}
      {mounted && techIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute z-10 flex flex-col items-center gap-1 pointer-events-none hidden lg:flex"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: item.delay + 0.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
            className="w-10 h-10 rounded-2xl glass flex items-center justify-center text-xl border border-white/10"
            style={{ boxShadow: '0 0 15px rgba(168,85,247,0.2)' }}
          >
            {item.icon}
          </motion.div>
          <span className="text-[10px] text-gray-500 font-mono">{item.label}</span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/40 text-purple-300 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5" />
              Available for exciting opportunities 🌟
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="text-gray-400 text-lg mb-2 font-mono">
                <span className="text-purple-400">{'>'}</span> Hello World! 👋 I&apos;m
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-display leading-none">
                <span className="text-white">Yogita</span>
                <br />
                <span className="gradient-text">Jha</span>
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10">
                <Bot className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-xl md:text-2xl font-semibold font-display">
                  {mounted && (
                    <TypeAnimation
                      sequence={[
                        'AI Engineer 🤖',
                        2000,
                        'Applied AI Engineer ⚡',
                        2000,
                        'AI Automation Engineer 🔄',
                        2000,
                        'Full Stack Developer 💻',
                        2000,
                        'Agentic AI Builder 🚀',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      deletionSpeed={70}
                      repeat={Infinity}
                      className="gradient-text-pink"
                    />
                  )}
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-gray-300 text-lg leading-relaxed max-w-lg"
            >
              Building{' '}
              <span className="text-pink-400 font-medium">intelligent AI systems</span>,{' '}
              <span className="text-purple-400 font-medium">agentic workflows</span>,{' '}
              <span className="text-blue-400 font-medium">RAG pipelines</span>, and{' '}
              <span className="text-cyan-400 font-medium">scalable AI products</span>{' '}
              that make a real-world impact. 🌍
            </motion.p>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-2"
            >
              {['LangChain', 'Groq', 'Next.js', 'FastAPI', 'RAG', 'Multi-Agent'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-xs font-mono rounded-full glass border border-white/10 text-gray-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-4 h-4" />
                View Projects
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/yogita-06', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/yogita-jha', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:jhayogita06@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.15, boxShadow: '0 0 15px rgba(168,85,247,0.4)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
              <div className="h-px flex-1 max-w-[60px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.4))' }} />
              <span className="text-xs text-gray-500">Let&apos;s connect ✨</span>
            </motion.div>
          </div>

          {/* Right: Anime Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative h-[520px] hidden lg:block"
          >
            <AnimeCharacter />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 font-mono">scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
