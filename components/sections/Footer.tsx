'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Code2, Sparkles, ArrowUp } from 'lucide-react'
import { socialLinks } from '@/data/portfolio'

const BAR_HEIGHTS = [48, 35, 37, 36, 43, 34, 56, 37]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #060612, #080816)',
        }}
      />
      <div className="absolute inset-0 bg-dots opacity-15" />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #A855F7, #FF6B9D, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FF6B9D, #A855F7)' }}
              >
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold font-display text-white text-lg">
                Yogita <span className="gradient-text-pink">Jha</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              AI Engineer building intelligent systems, agentic workflows, and scalable AI products. 🚀
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'Education', href: '#education' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-purple-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[
                { icon: Github, href: socialLinks.github, label: 'GitHub' },
                { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${socialLinks.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass border border-green-500/20 text-green-400 text-xs w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities ✨
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-500 text-sm flex items-center gap-2 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Designed & Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              💜
            </motion.span>{' '}
            by{' '}
            <span className="gradient-text-pink font-semibold">Yogita Jha</span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1">
              Powered by{' '}
              <span className="text-cyan-400 font-medium">Next.js 15</span> &{' '}
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">AI ✨</span>
            </span>
          </motion.p>

          <motion.button
            onClick={scrollTop}
            className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2, boxShadow: '0 0 15px rgba(168,85,247,0.3)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Floating particles at bottom */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 w-px rounded-full pointer-events-none"
          style={{
            left: `${10 + i * 12}%`,
            height: `${BAR_HEIGHTS[i]}px`,
            background: `linear-gradient(to top, ${
              i % 3 === 0 ? '#A855F7' : i % 3 === 1 ? '#FF6B9D' : '#38BDF8'
            }, transparent)`,
            opacity: 0.3,
          }}
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </footer>
  )
}