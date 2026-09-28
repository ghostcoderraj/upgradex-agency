import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Compass, Shield, Zap, History } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const values = [
    {
      title: 'Clear from the start',
      desc: 'You see the plan, the milestones, and what ships next before the build begins.',
      icon: <Compass className="h-5 w-5 text-cyan" />,
    },
    {
      title: 'Built to hold up',
      desc: 'Fast pages, careful design, and code that stays easy to change after launch.',
      icon: <Zap className="h-5 w-5 text-gold" />,
    },
    {
      title: 'Still here after launch',
      desc: 'We keep improving the site, the product, and how people find you.',
      icon: <Shield className="h-5 w-5 text-accent-violet" />,
    },
  ];

  const milestones = [
    { year: '2024', title: 'Agency start', desc: 'Websites and products for brands that wanted more than a template.' },
    { year: '2025', title: '50+ products live', desc: 'Storefronts, platforms, and AI features clients actually use.' },
    { year: '2026', title: 'Growth and hiring', desc: 'Digital growth, plus a developer who can sit with your team.', now: true },
  ];

  useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % milestones.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [reduce, paused, milestones.length]);

  return (
    <section id="about" className="relative scroll-mt-28 border-t border-white/5 bg-[#05060b] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            About UpgradeX
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            We build. We experiment. We upgrade.
          </h2>
          <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
            UpgradeX is a digital marketing agency that also builds the product. Brand, design, development, and growth stay with one team, so the work brings customers in.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-white/10 bg-[#0a0c18] p-7 sm:p-8">
            <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              The site, the product, and the growth stay together.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
              Most of the work stops at a homepage. We stay through the thing behind it: the pages people land on, the app they use, and the next version after launch.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
              You get a plan you can follow, a build you can launch, and a team you can message when the next step is ready.
            </p>

            <div className="mt-8 space-y-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{value.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col rounded-3xl border border-white/10 bg-[#0a0c18] p-7 sm:p-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <h3 className="flex items-center gap-2 text-lg font-bold text-white">
              <History className="h-5 w-5 text-gold" />
              How the agency grew
            </h3>
            <p className="mt-2 text-sm text-gray-400">Three years. The work got bigger, and the team stayed close to the build.</p>

            <div className="relative mt-6 flex flex-col gap-3">
              <span className="pointer-events-none absolute bottom-8 left-7 top-8 w-px bg-[rgba(212,175,55,0.45)]" />
              {milestones.map((milestone, index) => {
                const isActive = active === index;
                return (
                  <motion.button
                    key={milestone.year}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`flex w-full gap-4 rounded-2xl border p-4 text-left transition-colors duration-300 ${
                      isActive
                        ? 'border-gold/50 bg-[rgba(212,175,55,0.08)] shadow-[0_0_32px_-16px_rgba(243,208,104,0.9)]'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                    }`}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <div className="flex w-6 shrink-0 flex-col items-center">
                      <span
                        className={`mt-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
                          isActive ? 'border-gold bg-gold shadow-[0_0_12px_rgba(243,208,104,0.9)]' : 'border-white/30 bg-[#0a0c18]'
                        }`}
                      >
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#0a0c18]" />}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-gold">{milestone.year}</span>
                        {'now' in milestone && milestone.now && (
                          <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                            Now
                          </span>
                        )}
                      </div>
                      <h4 className="mt-1 text-base font-bold text-white">{milestone.title}</h4>
                      <p className={`mt-1 text-sm leading-relaxed ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <a
              href="#contact"
              className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors hover:border-gold/40 lg:mt-auto"
            >
              <span>
                <span className="block text-sm font-bold text-white">Have an idea for this year?</span>
                <span className="mt-1 block text-sm text-gray-400">Tell us what you’re building. We’ll reply with a plan.</span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-gold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
