'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Code2, Brain, Rocket, Coffee, Star, Zap, Target } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { staggerContainer, fadeInLeft, fadeInRight } from '@/lib/utils'

const traits = [
  { icon: Brain, label: 'AI-First Mindset', desc: 'Every problem is an AI opportunity', color: '#A855F7' },
  { icon: Rocket, label: 'Startup Builder', desc: 'Shipping fast, learning faster', color: '#FF6B9D' },
  { icon: Code2, label: 'Full Stack', desc: 'Frontend to LLM pipelines', color: '#38BDF8' },
  { icon: Target, label: 'Product Focus', desc: 'Building for real-world impact', color: '#22D3EE' },
]

const timeline = [
  {
    year: '2026',
    title: 'AI Engineer Focus',
    desc: 'Deep diving into multi-agent systems, LangGraph, and production AI deployments.',
    icon: '🤖',
    color: '#A855F7',
  },
  {
    year: '2025',
    title: 'Odoo ERP Developer',
    desc: 'Built real-world ERP solutions at BizzAppDev. Shipped production modules.',
    icon: '💼',
    color: '#FF6B9D',
  },
  {
    year: '2024',
    title: 'Full Stack Journey',
    desc: 'Started MCA. Deep-dived React, Node.js, and started exploring AI/LLMs.',
    icon: '🚀',
    color: '#38BDF8',
  },
  {
    year: '2021',
    title: 'BCA — The Beginning',
    desc: 'First line of code. Fell in love with programming and problem-solving.',
    icon: '✨',
    color: '#22D3EE',
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF6B9D, transparent)' }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <SectionTitle
          tag="About Me 🌸"
          title="Passionate about "
          highlight="Building AI"
          subtitle="I craft intelligent systems that bridge the gap between cutting-edge AI research and real-world product engineering."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={fadeInLeft} className="glass rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'linear-gradient(135deg, #A855F7, #FF6B9D)' }}>
                  ✨
                </div>
                <h3 className="text-xl font-bold font-display text-white">My Story</h3>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Hey! I&apos;m <span className="text-pink-400 font-semibold">Yogita Jha</span> 🌸 — an
                AI Engineer based in Ahmedabad, India. I&apos;m passionate about building
                intelligent systems that actually <span className="text-purple-400 font-medium">work in production</span>.
              </p>

              <p className="text-gray-300 leading-relaxed">
                My journey from BCA to MCA has been fueled by curiosity and a deep love for
                <span className="text-blue-400 font-medium"> agentic AI</span>,{' '}
                <span className="text-cyan-400 font-medium">RAG systems</span>, and{' '}
                <span className="text-pink-400 font-medium">workflow automation</span>.
                I don&apos;t just use AI tools — I build them 🔧
              </p>

              <p className="text-gray-300 leading-relaxed">
                Currently focused on{' '}
                <span className="text-purple-400 font-medium">multi-agent architectures</span>,{' '}
                LangGraph pipelines, and building AI products that YC startups would want to use.
                Always learning, always shipping 🚀
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['🏡 Ahmedabad, Gujarat', '☕ Coffee-powered coder', '🎯 MCA Student', '🌟 AI Enthusiast'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full glass border border-white/10 text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Trait cards */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  variants={fadeInLeft}
                  custom={i}
                  className="glass rounded-xl p-4 group hover:border-purple-500/30 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  <trait.icon
                    className="w-6 h-6 mb-2 transition-transform group-hover:scale-110"
                    style={{ color: trait.color }}
                  />
                  <div className="text-sm font-semibold text-white mb-1">{trait.label}</div>
                  <div className="text-xs text-gray-400">{trait.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="relative"
          >
            {/* Timeline line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, #A855F7, #38BDF8, transparent)' }}
            />

            <div className="space-y-8 pl-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={fadeInRight}
                  custom={i}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[52px] top-1 w-8 h-8 rounded-full flex items-center justify-center text-sm border-2"
                    style={{
                      background: `${item.color}20`,
                      borderColor: item.color,
                      boxShadow: `0 0 12px ${item.color}60`,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="glass rounded-xl p-5 group hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${item.color}20`, color: item.color }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-bold text-white mb-1 font-display">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
