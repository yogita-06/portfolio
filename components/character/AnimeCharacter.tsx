'use client'

import { motion } from 'framer-motion'

const floatingCode = [
  'const agent = new AI()', 'RAG pipeline ✨', 'useEffect()', 'async/await 🚀',
  'LangChain 🦜', 'vector.search()', 'npm run dev', 'Python FastAPI ⚡',
  '> npm install ai', '{ AI: true }', 'llm.invoke()', '<React />',
]

export default function AnimeCharacter() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Outer glow rings */}
      <div
        className="absolute w-[420px] h-[420px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)',
          animation: 'glowRing 4s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[380px] h-[380px] rounded-full border opacity-20"
        style={{
          borderColor: 'rgba(168,85,247,0.4)',
          animation: 'glowRing 4s ease-in-out infinite 0.5s',
        }}
      />

      {/* Orbit ring 1 */}
      <div className="absolute w-[360px] h-[360px] rounded-full border border-purple-500/10 animate-spin-slow">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
          style={{ background: '#A855F7', boxShadow: '0 0 12px rgba(168,85,247,0.9)' }}
        />
      </div>

      {/* Orbit ring 2 */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-pink-500/10 animate-spin-reverse">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full"
          style={{ background: '#FF6B9D', boxShadow: '0 0 10px rgba(255,107,157,0.9)' }}
        />
        <div
          className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{ background: '#38BDF8', boxShadow: '0 0 10px rgba(56,189,248,0.9)' }}
        />
      </div>

      {/* Main character SVG */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
        style={{ filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.5))' }}
      >
        <svg
          width="300"
          height="380"
          viewBox="0 0 300 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#060612" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDDDD5" />
              <stop offset="100%" stopColor="#F9C5B8" />
            </linearGradient>
            <linearGradient id="outfitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1040" />
              <stop offset="100%" stopColor="#2D1B69" />
            </linearGradient>
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#1F2937" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F0A1E" />
              <stop offset="100%" stopColor="#1A0E3A" />
            </linearGradient>
            <linearGradient id="holoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FF6B9D" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <clipPath id="headClip">
              <ellipse cx="150" cy="105" rx="55" ry="60" />
            </clipPath>
          </defs>

          {/* Background ambient glow */}
          <ellipse cx="150" cy="280" rx="130" ry="70" fill="url(#bgGlow)" />

          {/* Chair/seat suggestion */}
          <ellipse cx="150" cy="330" rx="80" ry="20" fill="rgba(168,85,247,0.08)" />

          {/* Body/outfit */}
          <path
            d="M95 210 Q80 230 75 280 Q75 310 150 315 Q225 310 225 280 Q220 230 205 210 Q185 200 150 198 Q115 200 95 210Z"
            fill="url(#outfitGrad)"
            stroke="rgba(168,85,247,0.4)"
            strokeWidth="1"
          />

          {/* Outfit detail — collar */}
          <path
            d="M130 210 Q150 225 170 210"
            stroke="rgba(168,85,247,0.6)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Outfit accent stripe */}
          <path
            d="M130 220 Q150 235 170 220 L175 260 Q150 268 125 260Z"
            fill="rgba(168,85,247,0.15)"
            stroke="rgba(168,85,247,0.3)"
            strokeWidth="0.5"
          />

          {/* Left arm */}
          <path
            d="M95 215 Q60 240 55 280 Q60 295 75 290 Q85 270 105 250 Q110 235 105 220Z"
            fill="url(#skinGrad)"
          />

          {/* Right arm */}
          <path
            d="M205 215 Q240 240 245 280 Q240 295 225 290 Q215 270 195 250 Q190 235 195 220Z"
            fill="url(#skinGrad)"
          />

          {/* Left hand on laptop */}
          <ellipse cx="82" cy="298" rx="16" ry="10" fill="url(#skinGrad)" />

          {/* Right hand on laptop */}
          <ellipse cx="218" cy="298" rx="16" ry="10" fill="url(#skinGrad)" />

          {/* Laptop base */}
          <rect
            x="65"
            y="295"
            width="170"
            height="30"
            rx="6"
            fill="url(#laptopGrad)"
            stroke="rgba(168,85,247,0.3)"
            strokeWidth="1"
          />

          {/* Laptop hinge */}
          <rect x="65" y="290" width="170" height="8" rx="3" fill="#0F172A" />

          {/* Laptop screen */}
          <rect
            x="68"
            y="225"
            width="164"
            height="110"
            rx="8"
            fill="url(#screenGrad)"
            stroke="rgba(56,189,248,0.4)"
            strokeWidth="1.5"
            filter="url(#glow)"
          />

          {/* Screen glow */}
          <rect
            x="68"
            y="225"
            width="164"
            height="110"
            rx="8"
            fill="none"
            stroke="rgba(56,189,248,0.2)"
            strokeWidth="8"
            filter="url(#softGlow)"
          />

          {/* Code on screen */}
          <text x="80" y="248" fontSize="7" fill="#22D3EE" fontFamily="monospace" opacity="0.9">
            {'> const ai = new Agent()'}
          </text>
          <text x="80" y="260" fontSize="7" fill="#A855F7" fontFamily="monospace" opacity="0.8">
            {'  .withRAG(vectorDB)'}
          </text>
          <text x="80" y="272" fontSize="7" fill="#FF6B9D" fontFamily="monospace" opacity="0.8">
            {'  .stream(userQuery)'}
          </text>
          <text x="80" y="284" fontSize="7" fill="#4ADE80" fontFamily="monospace" opacity="0.7">
            {'✓ Response streaming...'}
          </text>
          <rect x="80" y="289" width="60" height="4" rx="2" fill="rgba(34,211,238,0.3)" />

          {/* Screen scanline */}
          <rect
            x="68"
            y="225"
            width="164"
            height="3"
            rx="0"
            fill="rgba(56,189,248,0.15)"
            style={{ animation: 'scanLine 3s linear infinite' }}
          />

          {/* Neck */}
          <rect x="138" y="155" width="24" height="30" rx="8" fill="url(#skinGrad)" />

          {/* Hair back */}
          <ellipse cx="150" cy="90" rx="60" ry="65" fill="url(#hairGrad)" />
          <path
            d="M95 90 Q70 120 72 160 Q90 175 100 165 Q105 140 110 120 Q115 100 95 90Z"
            fill="url(#hairGrad)"
          />
          <path
            d="M205 90 Q230 120 228 160 Q210 175 200 165 Q195 140 190 120 Q185 100 205 90Z"
            fill="url(#hairGrad)"
          />
          {/* Long hair strands */}
          <path
            d="M100 160 Q88 200 92 240 Q96 260 100 255 Q106 235 108 200 Q110 175 108 160Z"
            fill="url(#hairGrad)"
            opacity="0.9"
          />
          <path
            d="M200 160 Q212 200 208 240 Q204 260 200 255 Q194 235 192 200 Q190 175 192 160Z"
            fill="url(#hairGrad)"
            opacity="0.9"
          />

          {/* Face */}
          <ellipse cx="150" cy="105" rx="55" ry="60" fill="url(#skinGrad)" />

          {/* Cheek blush */}
          <ellipse cx="118" cy="120" rx="12" ry="8" fill="rgba(255,107,157,0.25)" />
          <ellipse cx="182" cy="120" rx="12" ry="8" fill="rgba(255,107,157,0.25)" />

          {/* Left eye white */}
          <ellipse cx="128" cy="105" rx="16" ry="18" fill="white" />
          {/* Left iris */}
          <ellipse cx="128" cy="107" rx="11" ry="13" fill="#4C1D95" />
          {/* Left pupil */}
          <ellipse cx="129" cy="108" rx="7" ry="8" fill="#0F0A1E" />
          {/* Left eye shine */}
          <ellipse cx="133" cy="103" rx="3.5" ry="4" fill="white" opacity="0.9" />
          <ellipse cx="126" cy="112" rx="1.5" ry="1.5" fill="white" opacity="0.5" />
          {/* Left eye glow (iris color) */}
          <ellipse cx="128" cy="107" rx="11" ry="13" fill="none" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
          {/* Left eyelashes top */}
          <path d="M112 98 Q120 90 128 87 Q136 90 144 98" stroke="#3B1A78" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Left eye lid */}
          <path d="M112 105 Q120 100 128 98 Q136 100 144 105" stroke="#3B1A78" strokeWidth="1" fill="none" />

          {/* Right eye white */}
          <ellipse cx="172" cy="105" rx="16" ry="18" fill="white" />
          {/* Right iris */}
          <ellipse cx="172" cy="107" rx="11" ry="13" fill="#4C1D95" />
          {/* Right pupil */}
          <ellipse cx="173" cy="108" rx="7" ry="8" fill="#0F0A1E" />
          {/* Right eye shine */}
          <ellipse cx="177" cy="103" rx="3.5" ry="4" fill="white" opacity="0.9" />
          <ellipse cx="170" cy="112" rx="1.5" ry="1.5" fill="white" opacity="0.5" />
          <ellipse cx="172" cy="107" rx="11" ry="13" fill="none" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
          {/* Right eyelashes */}
          <path d="M156 98 Q164 90 172 87 Q180 90 188 98" stroke="#3B1A78" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M156 105 Q164 100 172 98 Q180 100 188 105" stroke="#3B1A78" strokeWidth="1" fill="none" />

          {/* Nose */}
          <path d="M146 128 Q150 135 154 128" stroke="#E8A0A0" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Smile */}
          <path d="M136 143 Q150 155 164 143" stroke="#E87070" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Smile inner */}
          <path d="M141 147 Q150 153 159 147" stroke="rgba(255,107,157,0.5)" strokeWidth="1" fill="none" />

          {/* Hair front bang */}
          <path
            d="M96 60 Q100 30 130 20 Q150 15 170 20 Q200 30 204 60 Q195 70 185 65 Q175 45 150 42 Q125 45 115 65 Q105 70 96 60Z"
            fill="url(#hairGrad)"
          />
          {/* Hair side bangs */}
          <path
            d="M96 60 Q85 80 87 105 Q95 108 100 100 Q103 80 108 68Z"
            fill="url(#hairGrad)"
          />
          <path
            d="M204 60 Q215 80 213 105 Q205 108 200 100 Q197 80 192 68Z"
            fill="url(#hairGrad)"
          />

          {/* Hair highlight */}
          <path
            d="M125 28 Q140 22 155 24"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Headphones/accessory */}
          <path
            d="M94 80 Q92 60 100 50 Q120 30 150 28 Q180 30 200 50 Q208 60 206 80"
            stroke="rgba(168,85,247,0.7)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="92" cy="88" rx="9" ry="12" fill="#5B21B6" stroke="rgba(168,85,247,0.8)" strokeWidth="1" />
          <ellipse cx="208" cy="88" rx="9" ry="12" fill="#5B21B6" stroke="rgba(168,85,247,0.8)" strokeWidth="1" />
          <ellipse cx="92" cy="88" rx="5" ry="7" fill="rgba(168,85,247,0.6)" filter="url(#glow)" />
          <ellipse cx="208" cy="88" rx="5" ry="7" fill="rgba(168,85,247,0.6)" filter="url(#glow)" />

          {/* Hologram panel floating */}
          <g opacity="0.85" filter="url(#glow)" style={{ animation: 'hologramFlicker 5s ease-in-out infinite' }}>
            <rect x="10" y="60" width="55" height="35" rx="5" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.5)" strokeWidth="0.8" />
            <text x="16" y="74" fontSize="5.5" fill="#22D3EE" fontFamily="monospace">AI Agent</text>
            <text x="16" y="84" fontSize="5" fill="#38BDF8" fontFamily="monospace">Status: Active</text>
            <circle cx="46" cy="74" r="3" fill="rgba(74,222,128,1)" style={{ animation: 'tagPulse 2s ease-in-out infinite' }} />
          </g>

          {/* Hologram right */}
          <g opacity="0.85" filter="url(#glow)" style={{ animation: 'hologramFlicker 6s ease-in-out infinite 1s' }}>
            <rect x="235" y="50" width="58" height="45" rx="5" fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.5)" strokeWidth="0.8" />
            <text x="241" y="65" fontSize="5.5" fill="#C4B5FD" fontFamily="monospace">LangChain</text>
            <text x="241" y="75" fontSize="5" fill="#A855F7" fontFamily="monospace">v0.3 ✓</text>
            <text x="241" y="85" fontSize="5" fill="#818CF8" fontFamily="monospace">Pinecone</text>
          </g>

          {/* Stars/sparkles */}
          {[[40, 30, '#FF6B9D'], [255, 140, '#38BDF8'], [18, 200, '#A855F7'], [270, 220, '#22D3EE'], [150, 10, '#C4B5FD']].map(
            ([cx, cy, color], i) => (
              <g key={i}>
                <line
                  x1={Number(cx) - 5}
                  y1={Number(cy)}
                  x2={Number(cx) + 5}
                  y2={Number(cy)}
                  stroke={String(color)}
                  strokeWidth="1.5"
                  opacity="0.8"
                  style={{ animation: `glowPulse ${2 + i * 0.5}s ease-in-out infinite ${i * 0.3}s` }}
                />
                <line
                  x1={Number(cx)}
                  y1={Number(cy) - 5}
                  x2={Number(cx)}
                  y2={Number(cy) + 5}
                  stroke={String(color)}
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <circle cx={Number(cx)} cy={Number(cy)} r="2" fill={String(color)} opacity="0.9" />
              </g>
            )
          )}
        </svg>
      </motion.div>

      {/* Floating code snippets */}
      {floatingCode.slice(0, 6).map((code, i) => (
        <motion.div
          key={i}
          className="absolute text-xs font-mono px-3 py-1 rounded-lg pointer-events-none"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(168,85,247,0.3)',
            color: i % 3 === 0 ? '#22D3EE' : i % 3 === 1 ? '#C4B5FD' : '#FF6B9D',
            left: `${[5, 68, 75, 0, 60, 18][i]}%`,
            top: `${[10, 5, 80, 55, 88, 35][i]}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        >
          {code}
        </motion.div>
      ))}
    </div>
  )
}
