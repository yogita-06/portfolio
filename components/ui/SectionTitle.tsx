'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  tag?: string
  title: string
  highlight?: string
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionTitle({
  tag,
  title,
  highlight,
  subtitle,
  center = true,
  className,
}: SectionTitleProps) {
  const fullTitle = highlight
    ? title.replace(highlight, `__HIGHLIGHT__`)
    : title

  const parts = fullTitle.split('__HIGHLIGHT__')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={cn('mb-16', center && 'text-center', className)}
    >
      {tag && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          {tag}
        </motion.div>
      )}

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-4">
        {parts[0]}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
        {parts[1]}
      </h2>

      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={cn(
          'h-px mt-6 max-w-xs',
          center ? 'mx-auto' : '',
        )}
        style={{
          background: 'linear-gradient(90deg, transparent, #A855F7, #FF6B9D, transparent)',
        }}
      />
    </motion.div>
  )
}
