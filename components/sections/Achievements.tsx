'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import SectionTitle from '@/components/ui/SectionTitle'
import { achievements } from '@/data/portfolio'
import { staggerContainer, fadeInUp } from '@/lib/utils'

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="container-custom relative z-10" ref={ref}>
        <SectionTitle
          tag="Achievements 🏆"
          title="By The "
          highlight="Numbers"
          subtitle="Impact, systems built, and milestones reached on my AI engineering journey."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              custom={i}
              className="group relative glass rounded-2xl p-6 border border-white/[0.08] hover:border-purple-500/30 overflow-hidden text-center transition-all duration-500"
              whileHover={{
                y: -10,
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(168,85,247,0.2)',
                scale: 1.03,
              }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${
                    item.color.includes('pink') ? 'rgba(236,72,153,0.08)' :
                    item.color.includes('purple') ? 'rgba(168,85,247,0.08)' :
                    item.color.includes('blue') ? 'rgba(59,130,246,0.08)' :
                    'rgba(34,211,238,0.08)'
                  }, transparent)`,
                }}
              />

              {/* Icon */}
              <motion.div
                className="text-4xl mb-4 block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              >
                {item.icon}
              </motion.div>

              {/* Number */}
              <div className="mb-2">
                <span
                  className="text-4xl md:text-5xl font-black font-display text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, ${
                    item.color.includes('pink') ? '#FF6B9D, #A855F7' :
                    item.color.includes('purple') ? '#A855F7, #38BDF8' :
                    item.color.includes('blue') ? '#38BDF8, #22D3EE' :
                    '#22D3EE, #4ADE80'
                  })` }}
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2}
                      delay={i * 0.1}
                    />
                  ) : '0'}
                  {item.suffix}
                </span>
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-gray-300 leading-tight">{item.label}</div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${
                    item.color.includes('pink') ? '#FF6B9D, #A855F7' :
                    item.color.includes('purple') ? '#A855F7, #38BDF8' :
                    '#38BDF8, #22D3EE'
                  })`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto italic">
            "Building AI systems isn&apos;t just my career —
            <span className="gradient-text font-medium not-italic"> it&apos;s my craft.</span>"
          </blockquote>
          <p className="text-gray-500 text-sm mt-3">— Yogita Jha 🌸</p>
        </motion.div>
      </div>
    </section>
  )
}
