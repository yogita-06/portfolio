import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink-neon': '#FF6B9D',
        'pink-hot': '#FF3D7A',
        'purple-neon': '#A855F7',
        'purple-deep': '#7C3AED',
        'lavender': '#C4B5FD',
        'blue-neon': '#38BDF8',
        'cyan-neon': '#22D3EE',
        'bg-dark': '#060612',
        'bg-card': 'rgba(255,255,255,0.03)',
        'border-glow': 'rgba(168,85,247,0.3)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #060612 0%, #0D0820 50%, #060612 100%)',
        'gradient-pink-purple': 'linear-gradient(135deg, #FF6B9D, #A855F7)',
        'gradient-purple-blue': 'linear-gradient(135deg, #A855F7, #38BDF8)',
        'gradient-text': 'linear-gradient(135deg, #FF6B9D 0%, #A855F7 50%, #38BDF8 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 15s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'blink': 'blink 4s ease-in-out infinite',
        'orbit': 'orbit 8s linear infinite',
        'orbit-reverse': 'orbitReverse 12s linear infinite',
        'typing': 'typing 0.1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        blink: {
          '0%, 90%, 100%': { scaleY: '1' },
          '95%': { scaleY: '0.1' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        orbitReverse: {
          from: { transform: 'rotate(360deg) translateX(160px) rotate(-360deg)' },
          to: { transform: 'rotate(0deg) translateX(160px) rotate(0deg)' },
        },
        typing: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'glow-pink': '0 0 20px rgba(255,107,157,0.5), 0 0 60px rgba(255,107,157,0.2)',
        'glow-purple': '0 0 20px rgba(168,85,247,0.5), 0 0 60px rgba(168,85,247,0.2)',
        'glow-blue': '0 0 20px rgba(56,189,248,0.5), 0 0 60px rgba(56,189,248,0.2)',
        'glow-cyan': '0 0 20px rgba(34,211,238,0.5)',
        'card': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
