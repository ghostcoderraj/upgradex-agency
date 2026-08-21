import React from 'react';
import { Compass, Shield, Zap, History } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    { title: 'Technical Rigor', desc: 'Zero compromise on code quality, speed, security, and component architecture.', icon: <Zap className="w-5 h-5 text-gold" /> },
    { title: 'Customer Alignment', desc: 'We build strictly aligned with your unit economics and growth milestones.', icon: <Compass className="w-5 h-5 text-cyan" /> },
    { title: 'Continuous Upgrade', desc: 'Technology moves fast. We keep your stack modernized and resilient.', icon: <Shield className="w-5 h-5 text-accent-violet" /> },
  ];

  const milestones = [
    { year: '2024', title: 'Agency Inception', desc: 'Started with a mission to eliminate bloatware and deliver high-performance 3D web apps.' },
    { year: '2025', title: '50+ Global Products', desc: 'Scaled enterprise SaaS platforms, AI integrations, and high-conversion storefronts.' },
    { year: '2026', title: 'Full Stack & AI Division', desc: 'Expanded dedicated developer hiring networks for ambitious startups.' },
  ];

  return (
    <section id="about" className="py-28 relative bg-[#05060b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            ABOUT UPGRADEX AGENCY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            We Build. We Experiment. We Upgrade.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Upgradex Agency helps businesses transform ideas into modern digital products. We combine design, development, technology and growth strategy to create digital experiences that don’t just look good — they work.
          </p>
        </div>

        {/* Story & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Agency Story */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Engineering the Next Generation of Digital Products.
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded on the belief that traditional web agency workflows are outdated, Upgradex Agency delivers fast, bespoke, 3D-infused digital products and dedicated developer hiring options for modern enterprises.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Whether you are launching your first startup or upgrading an existing multi-tenant platform, our engineers bring product intuition and technical craftsmanship to every line of code.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h4 className="text-xs font-bold text-white">{v.title}</h4>
                  <p className="text-[11px] text-gray-400 leading-snug">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Agency Timeline */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#0a0c18] border border-white/10 shadow-2xl space-y-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <History className="w-5 h-5 text-gold" /> Agency Growth Timeline
              </h4>

              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                {milestones.map((m, idx) => (
                  <div key={idx} className="relative pl-8 space-y-1">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gold/20 border border-gold flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-gold px-2 py-0.5 rounded bg-gold/10">
                        {m.year}
                      </span>
                      <h5 className="text-sm font-bold text-white">{m.title}</h5>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
