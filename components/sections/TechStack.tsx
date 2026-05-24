'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '@/components/ui/SectionTitle'
import { techStack } from '@/data/portfolio'
import { cn, staggerContainer, fadeInUp } from '@/lib/utils'

const categoryColors: Record<string, { gradient: string; border: string; glow: string }> = {
  'AI / LLM': {
    gradient: 'from-purple-600 to-pink-600',
    border: 'border-purple-500/30',
    glow: 'rgba(168,85,247,0.3)',
  },
  Frontend: {
    gradient: 'from-blue-600 to-cyan-600',
    border: 'border-blue-500/30',
    glow: 'rgba(56,189,248,0.3)',
  },
  Backend: {
    gradient: 'from-green-600 to-teal-600',
    border: 'border-green-500/30',
    glow: 'rgba(34,197,94,0.3)',
  },
  Database: {
    gradient: 'from-orange-600 to-amber-600',
    border: 'border-orange-500/30',
    glow: 'rgba(249,115,22,0.3)',
  },
  DevOps: {
    gradient: 'from-cyan-600 to-blue-600',
    border: 'border-cyan-500/30',
    glow: 'rgba(34,211,238,0.3)',
  },
  Automation: {
    gradient: 'from-pink-600 to-rose-600',
    border: 'border-pink-500/30',
    glow: 'rgba(255,107,157,0.3)',
  },
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 20% 50%, rgba(168,85,247,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(56,189,248,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <SectionTitle
          tag="Tech Arsenal ⚡"
          title="Skills & "
          highlight="Technologies"
          subtitle="A curated set of tools and technologies I use to build intelligent, scalable AI products."
        />

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeCategory === null
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-glow-purple'
                : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/30',
            )}
          >
            All Skills ✨
          </button>
          {Object.keys(techStack).map((category) => {
            const colors = categoryColors[category]
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === category
                    ? `bg-gradient-to-r ${colors.gradient} text-white`
                    : 'glass border border-white/10 text-gray-400 hover:text-white',
                )}
              >
                {category}
              </button>
            )
          })}
        </motion.div>

        {/* Skill categories grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="sync">
            {Object.entries(techStack)
              .filter(([cat]) => !activeCategory || activeCategory === cat)
              .map(([category, skills]) => {
                const colors = categoryColors[category] || categoryColors['AI / LLM']
                return (
                  <motion.div
                    key={category}
                    variants={fadeInUp}
                    layout
                    className={cn(
                      'glass rounded-2xl p-6 border group hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden',
                      colors.border,
                    )}
                    whileHover={{
                      y: -8,
                      boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${colors.glow}`,
                    }}
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={cn('px-3 py-1 rounded-lg text-sm font-bold text-white bg-gradient-to-r', colors.gradient)}
                      >
                        {category}
                      </div>
                      <div className="text-xs text-gray-500">{skills.length} skills</div>
                    </div>

                    {/* Skills list */}
                    <div className="space-y-3">
                      {skills.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: i * 0.05 + 0.2 }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{skill.icon}</span>
                              <span className="text-sm text-gray-200 font-medium group-hover/skill:text-white transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                          </div>

                          {/* Progress bar */}
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              className={cn('h-full rounded-full bg-gradient-to-r', colors.gradient)}
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 0.8, delay: i * 0.05 + 0.4, ease: 'easeOut' }}
                              style={{ boxShadow: `0 0 6px ${colors.glow}` }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{ background: `radial-gradient(circle at 50% 0%, ${colors.glow}, transparent 60%)` }}
                    />
                  </motion.div>
                )
              })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}