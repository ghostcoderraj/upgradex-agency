import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { GlowButton } from '../ui/GlowButton';
import { HeroCoreCanvas } from '../3d/HeroCoreCanvas';
import { ArrowUpRight } from 'lucide-react';

const HEADLINE_WORDS = ['system', 'brand', 'website', 'product'] as const;
const MARQUEE_ITEMS = ['Automation', 'Websites', 'Products', 'AI systems', 'Interfaces'] as const;

function RotatingHeadline() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HEADLINE_WORDS.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduce]);

  const word = reduce ? 'website' : HEADLINE_WORDS[index];

  return (
    <h1 className="text-[2.35rem] sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.045em] leading-[0.92]">
      <span className="block">Build a</span>
      <span className="relative block h-[1.22em] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={word}
            className="absolute inset-x-0 top-0 block text-center lg:text-left font-['Instrument_Serif'] italic font-normal text-[#f3d068]"
            initial={reduce ? false : { y: '110%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-110%' }}
            transition={{ duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
          >
            {word}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="block">that moves</span>
      <span className="block">the business.</span>
    </h1>
  );
}

function ServiceMarquee() {
  const group = (copy: number) => (
    <div className="flex items-center" aria-hidden={copy === 1}>
      {MARQUEE_ITEMS.map((item) => (
        <span key={`${copy}-${item}`} className="flex items-center">
          <span className="hero-outline px-3 sm:px-5 py-2 text-4xl sm:text-5xl font-extrabold tracking-[-0.045em] leading-none">
            {item}
          </span>
          <span className="text-2xl sm:text-3xl text-white/70">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="hero-marquee-mask overflow-hidden border-t border-white/10 pt-5 pb-4">
      <div className="hero-marquee flex w-max items-center">
        {group(0)}
        {group(1)}
      </div>
    </div>
  );
}

interface HeroSectionProps {
  onOpenInquiry: (type?: 'project' | 'developer') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold/30 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <span className="text-sm font-semibold text-gold tracking-wide flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                DIGITAL MARKETING AGENCY
              </span>
            </div>

            <RotatingHeadline />

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">UpgradeX</strong> turns ambitious ideas into websites, applications, and AI systems people actually use. Strategy, design, and engineering stay in one team — from the first page to the product behind it.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <GlowButton
                variant="gold"
                size="lg"
                onClick={() => onOpenInquiry('project')}
              >
                Start Your Project
              </GlowButton>

              <GlowButton
                variant="secondary"
                size="lg"
                href="#work"
                showArrow={false}
              >
                Explore Our Work <ArrowUpRight className="w-5 h-5 ml-2" />
              </GlowButton>
            </div>

          </div>

          {/* Right 3D Digital Core Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroCoreCanvas />
          </div>

        </div>
      </div>

      <div className="relative z-10 mt-10 w-full sm:mt-14">
        <ServiceMarquee />
      </div>
    </section>
  );
};
