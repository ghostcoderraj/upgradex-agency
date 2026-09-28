import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Target, Zap, Layers, BarChart3, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

const signals = [
  { mark: '99+', title: 'Lighthouse Performance', line: 'Core Web Vitals Optimized', tone: 'bg-gold/20 text-gold' },
  { mark: 'AI', title: 'Smart Automation Engines', line: 'Automated Lead Pipelines', tone: 'bg-cyan/20 text-cyan' },
  { mark: '3D', title: 'Futuristic WebGL Canvas', line: 'Interactive Visual Storytelling', tone: 'bg-purple-500/20 text-purple-300' },
];

export const WhyUpgradexSection: React.FC = () => {
  const reduce = useReducedMotion();
  const [activeSignal, setActiveSignal] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setActiveSignal((current) => (current + 1) % signals.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [reduce]);

  const pillars = [
    {
      title: 'Strategy First',
      description: 'We understand your business model, target market, and conversion objectives before writing a single line of code.',
      icon: <Target className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Built for Performance',
      description: 'Fast, sub-second responsive, and engineered with clean architecture to scale effortlessly as your users grow.',
      icon: <Zap className="w-6 h-6 text-cyan" />,
    },
    {
      title: 'Modern Technology',
      description: 'We leverage modern frameworks like React, Next.js, Node, TypeScript, and Three.js to guarantee longevity.',
      icon: <Layers className="w-6 h-6 text-accent-violet" />,
    },
    {
      title: 'Conversion Focused',
      description: 'Beautiful visual aesthetics combined with strategic CTA placement and data-backed UX design that converts traffic.',
      icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: 'Transparent Process',
      description: 'No hidden codebases or opaque timelines. Enjoy direct channel updates, milestones, and total clarity.',
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    },
    {
      title: 'Long-Term Support',
      description: 'Our relationship extends beyond launch day. We continuously optimize, maintain, and upgrade your product.',
      icon: <HeartHandshake className="w-6 h-6 text-rose-400" />,
    },
  ];

  return (
    <section className="py-28 relative bg-[#06070e] overflow-hidden">
      {/* Glow flares */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            THE UPGRADEX DIFFERENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Not Just Another Web Agency.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Brand, performance, and product engineering in one place — so the work gets seen, gets chosen, and converts.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive 3D Visual Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[420px] rounded-3xl bg-gradient-to-br from-indigo-950/40 via-[#0a0c16] to-gold/10 border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
              
              {/* Floating Animated Graphic Nodes */}
              <div className="relative z-10 space-y-4">
                {signals.map((signal, index) => {
                  const active = index === activeSignal;
                  return (
                    <motion.div
                      key={signal.mark}
                      className={`flex items-center gap-3 p-4 rounded-2xl border backdrop-blur-md transition-colors duration-500 ${
                        active
                          ? 'border-gold/50 bg-white/[0.07] shadow-[0_0_28px_rgba(212,175,55,0.18)]'
                          : 'border-white/10 bg-white/5'
                      }`}
                      animate={reduce ? undefined : { y: active ? -4 : 0 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold ${signal.tone}`}>
                        {signal.mark}
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-white">{signal.title}</span>
                        <span className="text-xs text-gray-400">{signal.line}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="relative z-10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Built for Scale & Conversion
                </p>
              </div>

              {/* Background Digital Grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: 6 Value Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, idx) => (
              <motion.div
                key={p.title}
                className="p-6 rounded-2xl bg-[#090b14]/80 border border-white/10 hover:border-gold/40 hover:bg-[#0f1222] hover:shadow-[0_16px_40px_-24px_rgba(212,175,55,0.65)] transition-colors duration-300 space-y-3 group"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduce ? undefined : { y: -6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
