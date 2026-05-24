'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles, MessageSquare, CheckCircle } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { socialLinks } from '@/data/portfolio'
import { staggerContainer, fadeInLeft, fadeInRight } from '@/lib/utils'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
      color: '#FF6B9D',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: socialLinks.phone,
      href: `tel:${socialLinks.phone}`,
      color: '#A855F7',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: socialLinks.location,
      href: '#',
      color: '#38BDF8',
    },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A855F7, transparent)' }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <SectionTitle
          tag="Contact 📬"
          title="Let's Work "
          highlight="Together"
          subtitle="Open to AI engineering roles, startup collaborations, and exciting projects. Let's build something amazing!"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={fadeInLeft} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'linear-gradient(135deg, #A855F7, #FF6B9D)' }}>
                  💌
                </div>
                <h3 className="text-xl font-bold font-display">Get In Touch</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Whether you&apos;re a startup founder looking for an AI engineer, a recruiter with
                an exciting opportunity, or a fellow developer wanting to collaborate — my inbox is always open! ✨
              </p>
            </motion.div>

            {/* Contact items */}
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                variants={fadeInLeft}
                href={item.href}
                className="flex items-center gap-4 glass rounded-xl p-4 border border-white/[0.08] hover:border-purple-500/30 group transition-all duration-300"
                whileHover={{ x: 8, boxShadow: '0 8px 30px rgba(0,0,0,0.3), 0 0 20px rgba(168,85,247,0.1)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div variants={fadeInLeft} className="glass rounded-xl p-5">
              <p className="text-sm text-gray-400 mb-4 font-medium">Connect on social 🌐</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: socialLinks.github, label: 'GitHub', color: '#9CA3AF' },
                  { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn', color: '#38BDF8' },
                  { icon: Mail, href: `mailto:${socialLinks.email}`, label: 'Email', color: '#FF6B9D' },
                ].map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass border border-white/10 text-sm font-medium transition-all duration-300"
                    style={{ color }}
                    whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${color}40` }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.form
              variants={fadeInRight}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-white/[0.08] space-y-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold font-display">Send a Message</h3>
              </div>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', label: 'Your Name', placeholder: 'Jane Smith', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'jane@startup.ai', type: 'email' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Let's build an AI agent together!"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={submitting || submitted}
                className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #FF6B9D, #A855F7, #38BDF8)' }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168,85,247,0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent! 🎉
                  </>
                ) : submitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message ✨
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              <p className="text-xs text-center text-gray-600">
                ✅ Usually responds within 24 hours
              </p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
