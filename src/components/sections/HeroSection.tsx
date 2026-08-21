import React from 'react';
import { GlowButton } from '../ui/GlowButton';
import { HeroCoreCanvas } from '../3d/HeroCoreCanvas';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenInquiry: (type?: 'project' | 'developer') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold/30 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <span className="text-sm font-semibold text-gold tracking-wide flex items-center gap-2">
                🚀 WE BUILD DIGITAL EXPERIENCES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              We Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-light to-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                Digital Experiences
              </span>{' '}
              That Move Businesses Forward.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From high-converting websites to powerful web applications, AI solutions, and digital growth — <strong className="text-white font-semibold">Upgradex Agency</strong> turns ambitious ideas into digital products that perform.
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

            {/* Small Service Line */}
            <div className="pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm font-medium tracking-wide text-gray-400">
                Web Development <span className="text-gold">•</span> UI/UX <span className="text-gold">•</span> AI Solutions <span className="text-gold">•</span> SEO <span className="text-gold">•</span> Digital Growth
              </p>
            </div>

          </div>

          {/* Right 3D Digital Core Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroCoreCanvas />
          </div>

        </div>
      </div>
    </section>
  );
};
