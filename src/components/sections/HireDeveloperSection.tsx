import React, { lazy, Suspense, useEffect, useState } from 'react';
import { GlowButton } from '../ui/GlowButton';

const DeveloperWorkspace3D = lazy(() =>
  import('../3d/DeveloperWorkspace3D').then((module) => ({
    default: module.DeveloperWorkspace3D,
  })),
);

function HireVisual() {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      const saveData = 'connection' in navigator && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
      setShowScene(desktop.matches && !reduce.matches && !saveData);
    };
    sync();
    desktop.addEventListener('change', sync);
    return () => desktop.removeEventListener('change', sync);
  }, []);

  if (!showScene) {
    return (
      <div className="flex h-[280px] flex-col justify-between rounded-[1.35rem] bg-[#070910] p-5 sm:h-[340px] sm:p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[11px] text-gray-500">upgradex</span>
        </div>
        <div className="space-y-2 font-mono text-[13px] leading-relaxed text-gray-300 sm:text-sm">
          <p><span className="text-gold">$</span> pages, forms, and the first enquiry</p>
          <p><span className="text-cyan">✓</span> accounts, data, and the screens people use</p>
          <p><span className="text-gold">✓</span> ready for review</p>
        </div>
        <p className="text-xs text-gray-500">A developer on the product, from the first screen to launch.</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="h-[400px] lg:h-[520px]" />}>
      <DeveloperWorkspace3D />
    </Suspense>
  );
}
import { CheckCircle2, Code, Sparkles, UserCheck, ShieldCheck, Zap } from 'lucide-react';

interface HireDeveloperSectionProps {
  onOpenInquiry: (type: 'developer' | 'project', serviceName?: string) => void;
}

export const HireDeveloperSection: React.FC<HireDeveloperSectionProps> = ({ onOpenInquiry }) => {
  const hiringServices = [
    { title: 'The first version', detail: 'A site or app you can show a customer.' },
    { title: 'The product behind it', detail: 'Accounts, data, and the screens people use.' },
    { title: 'After launch', detail: 'Fixes, new pages, and the next feature.' },
    { title: 'On your tools', detail: 'React, Node, AI, and the stack you already have.' },
  ];

  const hiringCards = [
    {
      title: 'A defined project',
      description: 'One website, app, or feature, taken from the brief to launch.',
      cta: 'Hire for a project',
      accentColor: 'border-indigo-500/40 hover:border-indigo-400',
      badge: 'Fixed Scope',
      onClick: () => onOpenInquiry('developer', 'Project Based Developer Hiring'),
    },
    {
      title: 'A developer on your team',
      description: 'Someone who stays in the work, full-time or part-time, and ships the next version with you.',
      cta: 'Hire a developer',
      accentColor: 'border-gold/60 hover:border-gold shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-gradient-to-b from-[#111425] to-[#090b14]',
      badge: 'Popular Option',
      featured: true,
      onClick: () => onOpenInquiry('developer', 'Dedicated Developer Support'),
    },
    {
      title: 'A longer partnership',
      description: 'Keep building after launch: new features, upkeep, and the product as it grows.',
      cta: 'Build with us',
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
            <Sparkles className="w-3.5 h-3.5" /> Hire a developer
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Need someone to build the next version?
          </h2>
          <p className="text-gray-300 text-base sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
            A developer who stays with the product, from the first screen through launch and the work after it.
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
              <HireVisual />
              <div className="absolute bottom-6 left-6 right-6 hidden rounded-2xl border border-white/10 bg-black/60 p-4 text-center backdrop-blur-md lg:block">
                <p className="text-xs text-gray-300">
                  A developer on the product, from the first screen to launch.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Hiring Content & Services Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                What you get
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                A builder for the work in front of you.
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                One project, a developer who stays, or a longer run of features. You pick the shape. We open the request with hiring already selected.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {hiringServices.map((service) => (
                <div key={service.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                    {service.title}
                  </div>
                  <p className="mt-1 pl-6 text-sm text-gray-400">{service.detail}</p>
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
                Hire a developer
              </GlowButton>
            </div>
          </div>

        </div>

        {/* 3 Developer Hiring Option Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              How you can hire
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Three ways to start. No hourly menu — a project, a person, or a longer partnership.
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
                    showArrow={false}
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
