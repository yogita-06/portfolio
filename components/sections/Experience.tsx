'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, ChevronRight, Building2, Star } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { experience } from '@/data/portfolio'
import { staggerContainer, fadeInUp } from '@/lib/utils'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(168,85,247,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <SectionTitle
          tag="Experience 💼"
          title="Work "
          highlight="Experience"
          subtitle="Real-world projects, production code, and cross-functional collaboration."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-px"
              initial={{ scaleY: 0, originY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{ background: 'linear-gradient(to bottom, #A855F7, #38BDF8, transparent)' }}
            />

            {experience.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl relative"
                    style={{
                      background: `linear-gradient(135deg, ${job.color.split(' ')[1]}, ${job.color.split(' ')[3]})`,
                      boxShadow: `0 0 20px rgba(168,85,247,0.4)`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {job.icon}
                    {/* Pulse ring */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        boxShadow: '0 0 0 0 rgba(168,85,247,0.5)',
                        animation: 'pulseRing 2s ease-in-out infinite',
                      }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  className="flex-1 glass rounded-2xl p-6 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-500 group"
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.4), 0 0 30px rgba(168,85,247,0.15)' }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-display text-white mb-1">{job.role}</h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Building2 className="w-4 h-4 text-purple-400" />
                        <span className="font-medium text-purple-300">{job.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/10 text-xs text-gray-400">
                        <Calendar className="w-3 h-3 text-pink-400" />
                        {job.period}
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full text-purple-300"
                        style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}>
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-5">{job.description}</p>

                  {/* Responsibilities */}
                  <div className="grid sm:grid-cols-2 gap-2">
                    {job.responsibilities.map((resp) => (
                      <div key={resp} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <span className="text-xs text-gray-400">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 0% 0%, rgba(168,85,247,0.06), transparent 60%)',
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}

            {/* Future opportunity card */}
            <motion.div
              variants={fadeInUp}
              className="relative flex gap-8"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl glass border-2 border-dashed border-purple-500/30 flex items-center justify-center text-2xl">
                ✨
              </div>
              <div className="flex-1 glass rounded-2xl p-6 border border-dashed border-white/10">
                <h4 className="font-bold text-gray-300 mb-1">Your Company?</h4>
                <p className="text-sm text-gray-500">
                  Open to exciting AI engineering roles & startup opportunities 🚀
                </p>
                <a
                  href="mailto:jhayogita06@gmail.com"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Let&apos;s talk <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
