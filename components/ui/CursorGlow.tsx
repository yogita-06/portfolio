'use client'

import { useEffect, useRef } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <>
      {/* Large ambient glow */}
      <motion.div
        className="fixed pointer-events-none z-0 rounded-full mix-blend-screen"
        style={{
          width: 600,
          height: 600,
          background:
            'radial-gradient(circle, rgba(168,85,247,0.08) 0%, rgba(255,107,157,0.05) 40%, transparent 70%)',
          left: x - 300,
          top: y - 300,
          transition: 'left 0.4s ease, top 0.4s ease',
        }}
      />
      {/* Small precise cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        style={{
          width: 8,
          height: 8,
          background: 'rgba(168, 85, 247, 0.9)',
          left: x - 4,
          top: y - 4,
          boxShadow: '0 0 10px rgba(168,85,247,0.8)',
          transition: 'left 0.05s linear, top 0.05s linear',
        }}
      />
    </>
  )
}
