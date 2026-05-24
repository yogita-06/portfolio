'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, BookOpen, Award } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { education } from '@/data/portfolio'
import { staggerContainer, fadeInUp } from '@/lib/utils'

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #38BDF8, transparent)' }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <SectionTitle
          tag="Education 🎓"
          title="Academic "
          highlight="Journey"
          subtitle="Building a strong foundation in computer science and pushing boundaries with AI."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative glass rounded-2xl p-8 border border-white/[0.08] hover:border-purple-500/30 overflow-hidden transition-all duration-500"
              whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(168,85,247,0.15)' }}
            >
              {/* Gradient accent top border */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${edu.color.split(' ')[1]}, ${edu.color.split(' ')[3]})` }}
              />

              {/* Icon */}
              <motion.div
                className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center text-3xl mb-6 bg-gradient-to-br ${edu.color}`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                style={{ boxShadow: '0 0 20px rgba(168,85,247,0.3)' }}
              >
                {edu.icon}
              </motion.div>

              <h3 className="text-xl font-bold font-display text-white mb-2 leading-tight">
                {edu.degree}
              </h3>

              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 font-medium text-sm">{edu.institution}</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-xs text-gray-500 font-mono">{edu.period}</span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">{edu.description}</p>

              {/* Floating graduation cap */}
              <motion.div
                className="absolute top-6 right-6 text-3xl opacity-10 group-hover:opacity-30 transition-opacity"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              >
                🎓
              </motion.div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(168,85,247,0.06), transparent 60%)' }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Learning journey note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-white/10 text-gray-400 text-sm">
            <Award className="w-4 h-4 text-pink-400" />
            <span>Continuously learning — because in AI, you&apos;re never done 🚀</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
