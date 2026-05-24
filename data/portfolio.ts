export const techStack = {
  'AI / LLM': [
    { name: 'LangChain', icon: '🦜', level: 90 },
    { name: 'LangGraph', icon: '🕸️', level: 85 },
    { name: 'OpenAI API', icon: '🤖', level: 92 },
    { name: 'Groq API', icon: '⚡', level: 88 },
    { name: 'Claude API', icon: '🧠', level: 85 },
    { name: 'RAG Pipelines', icon: '🔍', level: 87 },
    { name: 'Multi-Agent Systems', icon: '🤝', level: 83 },
    { name: 'Prompt Engineering', icon: '✨', level: 92 },
    { name: 'Pinecone', icon: '🌲', level: 80 },
  ],
  'Frontend': [
    { name: 'React.js', icon: '⚛️', level: 90 },
    { name: 'Next.js', icon: '▲', level: 88 },
    { name: 'TypeScript', icon: '🔷', level: 85 },
    { name: 'Tailwind CSS', icon: '🎨', level: 92 },
    { name: 'Framer Motion', icon: '🎭', level: 80 },
  ],
  'Backend': [
    { name: 'Node.js', icon: '🟢', level: 87 },
    { name: 'Express.js', icon: '🚀', level: 85 },
    { name: 'FastAPI', icon: '⚡', level: 82 },
    { name: 'REST APIs', icon: '🔗', level: 90 },
    { name: 'SSE', icon: '📡', level: 78 },
  ],
  'Database': [
    { name: 'PostgreSQL', icon: '🐘', level: 80 },
    { name: 'Pinecone', icon: '🌲', level: 80 },
    { name: 'NoSQL', icon: '📦', level: 75 },
  ],
  'DevOps': [
    { name: 'Docker', icon: '🐳', level: 75 },
    { name: 'GitHub', icon: '🐙', level: 90 },
    { name: 'Vercel', icon: '▲', level: 85 },
    { name: 'AWS Basics', icon: '☁️', level: 65 },
  ],
  'Automation': [
    { name: 'n8n', icon: '🔄', level: 82 },
    { name: 'Webhooks', icon: '🎣', level: 85 },
    { name: 'Workflow Automation', icon: '⚙️', level: 83 },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'Multi-Agent Research Assistant',
    emoji: '🤖',
    description:
      'A collaborative 3-agent AI system (Researcher, Analyst, Writer) that autonomously researches topics, analyzes data, and generates comprehensive reports with real-time streaming.',
    tech: ['React + Vite', 'Node.js', 'TypeScript', 'SSE', 'Groq LLaMA-3.3-70B'],
    features: [
      '3-agent collaborative workflow',
      'Real-time streaming via SSE',
      'PDF export & AI report generation',
      'MCP-style architecture',
    ],
    gradient: 'from-purple-600 via-pink-600 to-blue-600',
    github: 'https://github.com/yogita-06/multi-agents-system',
    demo: 'https://multi-agents-system-6gdj.vercel.app/',
    badge: '🏆 Featured',
  },
  {
    id: 2,
    title: 'AI Customer Support Agent',
    emoji: '💬',
    description:
      'Autonomous AI customer support system with context-aware responses, intelligent escalation detection, and seamless human-in-the-loop fallback.',
    tech: ['React', 'Node.js', 'Express', 'TypeScript', 'Groq API'],
    features: [
      'Autonomous escalation detection',
      'Context-aware responses',
      'Email alert integration',
      'Human-in-the-loop fallback',
    ],
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    github: 'https://github.com/yogita-06/ai-support-agents',
    demo: 'https://ai-support-agents.vercel.app/',
    badge: '⚡ AI Agent',
  },
  {
    id: 3,
    title: 'RAG Knowledge Chatbot',
    emoji: '🔍',
    description:
      'Intelligent chatbot using Retrieval-Augmented Generation with semantic search, vector embeddings, and context-aware Q&A over custom knowledge bases.',
    tech: ['LangChain.js', 'Pinecone', 'Node.js', 'React', 'TypeScript'],
    features: [
      'Semantic vector search',
      'Vector embeddings pipeline',
      'Context-aware Q&A',
      'Retrieval augmentation',
    ],
    gradient: 'from-pink-600 via-rose-600 to-orange-600',
    github: 'https://github.com/yogita-06/shopease-rag-chatbot',
    demo: 'https://shopeasee-rag-chatbot.vercel.app/',
    badge: '🔍 RAG',
  },
]

export const experience = [
  {
    role: 'Odoo ERP Developer Intern',
    company: 'BizzAppDev Systems Pvt. Ltd.',
    period: 'Dec 2025 – Apr 2026',
    type: 'Internship',
    description:
      'Developed custom Odoo 18 modules for textile industry clients. Built REST API integrations, collaborated with cross-functional teams via GitHub, and delivered production-ready ERP solutions.',
    responsibilities: [
      'Developed Odoo 18 custom modules',
      'Built REST API integrations',
      'Team collaboration using GitHub',
      'Textile ERP solutions delivery',
    ],
    icon: '💼',
    color: 'from-purple-500 to-pink-500',
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Sardar Vallabhbhai Global University',
    period: '2024 – 2026',
    icon: '🎓',
    color: 'from-pink-500 to-purple-600',
    description: 'Specializing in AI/ML, software engineering, and full-stack development.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Monark University',
    period: '2021 – 2024',
    icon: '📚',
    color: 'from-blue-500 to-cyan-500',
    description: 'Core computer science fundamentals, programming, and web technologies.',
  },
]

export const achievements = [
  { number: 4, suffix: '+', label: 'AI Projects Built', icon: '🚀', color: 'from-pink-500 to-purple-500' },
  { number: 3, suffix: '', label: 'Multi-Agent Systems', icon: '🤖', color: 'from-purple-500 to-blue-500' },
  { number: 2, suffix: '+', label: 'RAG Pipelines', icon: '🔍', color: 'from-blue-500 to-cyan-500' },
  { number: 5, suffix: '+', label: 'Full Stack AI Apps', icon: '⚡', color: 'from-cyan-500 to-teal-500' },
  { number: 100, suffix: '%', label: 'Production Ready', icon: '✅', color: 'from-teal-500 to-green-500' },
  { number: 6, suffix: '+', label: 'Tech Stacks', icon: '🎯', color: 'from-orange-500 to-pink-500' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = {
  github: 'https://github.com/yogita-06',
  linkedin: 'https://linkedin.com/in/yogita-jha',
  email: 'jhayogita06@gmail.com',
  phone: '8200728497',
  location: 'Ahmedabad, Gujarat',
}
