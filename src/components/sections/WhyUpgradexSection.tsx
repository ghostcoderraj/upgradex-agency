import React from 'react';
import { Target, Zap, Layers, BarChart3, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export const WhyUpgradexSection: React.FC = () => {
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
            We operate as your technical product partner, combining high-end engineering with growth strategy.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive 3D Visual Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[420px] rounded-3xl bg-gradient-to-br from-indigo-950/40 via-[#0a0c16] to-gold/10 border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
              
              {/* Floating Animated Graphic Nodes */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-float">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold font-mono font-bold">
                    99+
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">Lighthouse Performance</span>
                    <span className="text-xs text-gray-400">Core Web Vitals Optimized</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-float [animation-delay:2s]">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan font-mono font-bold">
                    AI
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">Smart Automation Engines</span>
                    <span className="text-xs text-gray-400">Automated Lead Pipelines</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-float [animation-delay:4s]">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-mono font-bold">
                    3D
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">Futuristic WebGL Canvas</span>
                    <span className="text-xs text-gray-400">Interactive Visual Storytelling</span>
                  </div>
                </div>
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
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090b14]/80 border border-white/10 hover:border-gold/30 hover:bg-[#0f1222] transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
