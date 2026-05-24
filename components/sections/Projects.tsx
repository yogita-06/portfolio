'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Sparkles, ChevronRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { projects } from '@/data/portfolio'
import { staggerContainer, fadeInUp } from '@/lib/utils'

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A855F7, transparent)' }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <SectionTitle
          tag="Projects 🚀"
          title="Things I've "
          highlight="Built"
          subtitle="Real-world AI systems, agents, and full-stack applications built with passion and purpose."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden glass border border-white/[0.08] hover:border-purple-500/40 transition-all duration-500"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ y: -12 }}
              style={{
                boxShadow: hovered === project.id
                  ? '0 24px 60px rgba(0,0,0,0.5), 0 0 30px rgba(168,85,247,0.2)'
                  : '0 8px 32px rgba(0,0,0,0.3)',
                transition: 'box-shadow 0.5s ease',
              }}
            >
              {/* Project preview / gradient header */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-black/40" />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />

                {/* Floating orbs */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/5 blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5 blur-xl" />

                {/* Project emoji */}
                <motion.div
                  animate={{ scale: hovered === project.id ? 1.2 : 1, rotate: hovered === project.id ? 10 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 text-6xl"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}
                >
                  {project.emoji}
                </motion.div>

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-black/40 backdrop-blur-sm border border-white/20">
                  {project.badge}
                </div>

                {/* Scan line effect */}
                <div
                  className="absolute inset-x-0 h-px bg-white/20 pointer-events-none"
                  style={{
                    animation: hovered === project.id ? 'scanLine 2s linear infinite' : 'none',
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Features */}
                <ul className="space-y-1 mb-5">
                  {project.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-gray-400">
                      <ChevronRight className="w-3 h-3 text-purple-400 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-full border border-white/10 text-gray-400 bg-white/[0.03]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-sm text-gray-300 hover:text-white hover:border-purple-500/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white font-medium transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #A855F7, #FF6B9D)' }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168,85,247,0.4)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Bottom glow on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, ${project.gradient.split(' ')[1]}, ${project.gradient.split(' ')[3]})`,
                  opacity: hovered === project.id ? 1 : 0,
                  transition: 'opacity 0.3s',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yogita-06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full glass border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-500/60 transition-all duration-300 font-medium"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
          >
            <Github className="w-4 h-4" />
            View More on GitHub
            <Sparkles className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
