import React from 'react';
import { Search, Compass, Palette, Code, CheckCircle, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understand your business, target audience, competitive landscape, and key performance indicators.',
      icon: <Search className="w-6 h-6 text-gold" />,
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Define the application architecture, user journey maps, wireframes, and digital growth strategy.',
      icon: <Compass className="w-6 h-6 text-cyan" />,
    },
    {
      number: '03',
      title: 'Design',
      description: 'Craft high-fidelity dark futuristic visuals, interactive design systems, and responsive UI components.',
      icon: <Palette className="w-6 h-6 text-accent-violet" />,
    },
    {
      number: '04',
      title: 'Build',
      description: 'Develop the project using clean, scalable React, Next.js, Node, and WebGL 3D frameworks.',
      icon: <Code className="w-6 h-6 text-emerald-400" />,
    },
    {
      number: '05',
      title: 'Test',
      description: 'Rigorous cross-device testing, speed audits, security validation, and conversion flow optimization.',
      icon: <CheckCircle className="w-6 h-6 text-amber-400" />,
    },
    {
      number: '06',
      title: 'Launch',
      description: 'Production deployment to global edge CDN, live monitoring, analytics integration, and ongoing support.',
      icon: <Rocket className="w-6 h-6 text-rose-400" />,
    },
  ];

  return (
    <section id="process" className="py-28 relative bg-[#030305]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Idea to Launch.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            A battle-tested 6-step engineering methodology that guarantees quality, speed, and business results.
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="relative">
          {/* Animated Glow Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-cyan to-accent-violet -translate-y-1/2 opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl p-6 bg-[#090b14]/90 border border-white/10 backdrop-blur-xl hover:border-gold/50 hover:bg-[#0e1122] transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                {/* Step Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 rounded-full bg-gold/10 border border-gold/30">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="w-full h-1 rounded-full bg-white/5 group-hover:bg-gold transition-colors" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
