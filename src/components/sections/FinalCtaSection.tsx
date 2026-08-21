import React from 'react';
import { GlowButton } from '../ui/GlowButton';
import { HeroCoreCanvas } from '../3d/HeroCoreCanvas';
import { Sparkles } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenInquiry: (type?: 'project' | 'developer') => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-28 relative bg-[#030305] border-t border-white/10 overflow-hidden">
      
      {/* Background 3D Canvas Canvas */}
      <div className="absolute inset-0 opacity-40 pointer-events-none scale-125 flex items-center justify-center">
        <HeroCoreCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 text-gold text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" /> TAKE THE NEXT STEP
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Your Next Big Idea Deserves a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-gold to-yellow-200">
              Better Digital Experience.
            </span>
          </h2>

          <p className="text-lg sm:text-2xl text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Let’s turn your idea into something people actually use.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
            <GlowButton
              variant="gold"
              size="lg"
              onClick={() => onOpenInquiry('project')}
            >
              Start Your Project →
            </GlowButton>

            <GlowButton
              variant="primary"
              size="lg"
              onClick={() => onOpenInquiry('developer')}
            >
              Hire a Developer →
            </GlowButton>
          </div>

        </div>
      </div>
    </section>
  );
};
