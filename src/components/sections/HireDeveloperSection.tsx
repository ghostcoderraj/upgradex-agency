import React from 'react';
import { DeveloperWorkspace3D } from '../3d/DeveloperWorkspace3D';
import { GlowButton } from '../ui/GlowButton';
import { CheckCircle2, Code, Sparkles, UserCheck, ShieldCheck, Zap } from 'lucide-react';

interface HireDeveloperSectionProps {
  onOpenInquiry: (type: 'developer' | 'project', serviceName?: string) => void;
}

export const HireDeveloperSection: React.FC<HireDeveloperSectionProps> = ({ onOpenInquiry }) => {
  const hiringServices = [
    'Frontend Development (React / Next.js)',
    'Backend Development (Node.js / Express)',
    'Full-Stack Architecture',
    'SaaS Product Engineering',
    'AI Engine & Automation Integration',
    'API & Scalable Database Systems',
    'Custom UI/UX & Responsive Engineering',
    'Website Maintenance & Dedicated Support',
  ];

  const hiringCards = [
    {
      title: 'PROJECT BASED',
      description: 'For businesses that need a dedicated developer to build a specific website, application, feature or digital product from start to launch.',
      cta: 'Hire for a Project →',
      accentColor: 'border-indigo-500/40 hover:border-indigo-400',
      badge: 'Fixed Scope',
      onClick: () => onOpenInquiry('developer', 'Project Based Developer Hiring'),
    },
    {
      title: 'DEDICATED DEVELOPER',
      description: 'Get dedicated, full-time or part-time senior development support embedded into your team for ongoing product iteration.',
      cta: 'Hire a Dedicated Developer →',
      accentColor: 'border-gold/60 hover:border-gold shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-gradient-to-b from-[#111425] to-[#090b14]',
      badge: 'Popular Option',
      featured: true,
      onClick: () => onOpenInquiry('developer', 'Dedicated Developer Support'),
    },
    {
      title: 'LONG-TERM DEVELOPMENT',
      description: 'Build and scale your digital product with continuous engineering, security monitoring, infrastructure updates, and feature rollouts.',
      cta: 'Build With Us →',
      accentColor: 'border-cyan-500/40 hover:border-cyan-400',
      badge: 'Product Partnership',
      onClick: () => onOpenInquiry('developer', 'Long-Term Development Partnership'),
    },
  ];

  return (
    <section id="hire-developer" className="py-28 relative bg-[#04050a] border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 text-gold text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" /> DEDICATED TECHNICAL TALENT
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Need a Developer for Your Next Project?
          </h2>
          <p className="text-gray-300 text-base sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
            Don’t just hire a freelancer. Build with a developer who understands your product, technology and business goals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm font-semibold text-gray-400">
            <span className="flex items-center gap-2 text-gold">
              <ShieldCheck className="w-4 h-4" /> Uncompromising Quality
            </span>
            <span className="flex items-center gap-2 text-cyan">
              <Zap className="w-4 h-4" /> Production-Ready Code
            </span>
            <span className="flex items-center gap-2 text-accent-violet">
              <UserCheck className="w-4 h-4" /> Proven Reliability
            </span>
          </div>
        </div>

        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* LEFT: 3D Developer Workspace Visual */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl bg-gradient-to-br from-[#0a0d1a] to-[#04050a] border border-white/10 p-2 shadow-2xl relative">
              <DeveloperWorkspace3D />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                <p className="text-xs text-gray-300 font-mono">
                  Professional Developer + Modern Technology + Real Product Development
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Hiring Content & Services Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                ENGINEERING EXPERTISE
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Hire Skilled Developers for Your Project.
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Whether you need a developer for a specific project, dedicated development support, or long-term product development, Upgradex can help you build with the right technical expertise.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {hiringServices.map((service, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Quick Action */}
            <div className="pt-4">
              <GlowButton
                variant="gold"
                size="md"
                onClick={() => onOpenInquiry('developer')}
              >
                Hire a Developer Now →
              </GlowButton>
            </div>
          </div>

        </div>

        {/* 3 Developer Hiring Option Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Flexible Engagement Models (No Hourly Rates)
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Focused strictly on quality, expertise, reliability, and business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hiringCards.map((card, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 bg-[#090b14] border ${card.accentColor} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between space-y-6 shadow-2xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
                      {card.badge}
                    </span>
                    <Code className="w-5 h-5 text-gray-400" />
                  </div>

                  <h4 className="text-xl font-extrabold text-white mb-3">
                    {card.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <GlowButton
                    variant={card.featured ? 'gold' : 'primary'}
                    size="sm"
                    onClick={card.onClick}
                    className="w-full"
                  >
                    {card.cta}
                  </GlowButton>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
