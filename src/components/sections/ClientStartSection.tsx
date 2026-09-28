import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Globe, Layout, Palette, Cpu, TrendingUp, Code } from 'lucide-react';

interface ClientStartSectionProps {
  onOpenInquiry: (type?: 'project' | 'developer', serviceName?: string) => void;
}

const NEEDS = [
  {
    label: 'A website',
    detail: 'A site that brings customers in',
    service: 'Website Development',
    type: 'project' as const,
    icon: Globe,
  },
  {
    label: 'An app',
    detail: 'A product people actually use',
    service: 'Full-Stack & Web Applications',
    type: 'project' as const,
    icon: Layout,
  },
  {
    label: 'UI / UX',
    detail: 'An interface that converts',
    service: 'UI/UX Design',
    type: 'project' as const,
    icon: Palette,
  },
  {
    label: 'AI',
    detail: 'Work that runs without the busywork',
    service: 'AI Solutions & Automations',
    type: 'project' as const,
    icon: Cpu,
  },
  {
    label: 'SEO & growth',
    detail: 'Get found after the launch',
    service: 'SEO & Digital Growth',
    type: 'project' as const,
    icon: TrendingUp,
  },
  {
    label: 'A developer',
    detail: 'Someone embedded on your team',
    service: 'Dedicated Developer Hiring',
    type: 'developer' as const,
    icon: Code,
  },
];

export const ClientStartSection: React.FC<ClientStartSectionProps> = ({ onOpenInquiry }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % NEEDS.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [reduce, paused]);

  return (
    <section className="relative py-20 border-b border-white/10 bg-[#05060c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Start here</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tell us what you need.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Pick one. We’ll open a short request with that service already selected, then reply on email or WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/919153276992?text=Hello%20UpgradeX%20Agency,%20I%20want%20to%20talk%20about%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-white transition-colors"
          >
            Prefer to talk now on WhatsApp <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {NEEDS.map((need, index) => {
            const Icon = need.icon;
            const isActive = active === index;
            return (
              <motion.button
                key={need.service}
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => onOpenInquiry(need.type, need.service)}
                className={`group relative overflow-hidden text-left rounded-2xl border p-5 transition-colors duration-300 ${
                  isActive
                    ? 'border-gold/60 bg-[#12151f] shadow-[0_0_36px_-18px_rgba(243,208,104,0.9)]'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                }`}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 transition-colors ${isActive ? 'bg-gold' : 'bg-transparent'}`}
                />
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${isActive ? 'border-gold/40 bg-gold/15 text-gold' : 'border-white/10 bg-white/5 text-gray-300'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-semibold ${isActive ? 'text-gold' : 'text-gray-500'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{need.label}</h3>
                <p className="mt-1 text-sm text-gray-400">{need.detail}</p>
                <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${isActive ? 'text-gold' : 'text-gray-500'}`}>
                  Open a request <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
