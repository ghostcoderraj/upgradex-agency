import React from 'react';
import { GlowButton } from '../ui/GlowButton';
import { MessageSquare, Sparkles } from 'lucide-react';

interface HireCtaBannerProps {
  onOpenInquiry: (type: 'developer' | 'project') => void;
}

export const HireCtaBanner: React.FC<HireCtaBannerProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-r from-[#0d1024] via-[#141029] to-[#1a1420] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] sm:p-10 lg:p-14">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

          {/* Glow spots */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-gold/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> READY TO UPGRADE?
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Tell Us What You’re Building.
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Have an idea, product or business that needs technical expertise? Let’s build it together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <GlowButton
                variant="gold"
                size="lg"
                showArrow={false}
                onClick={() => onOpenInquiry('developer')}
              >
                Hire a Developer →
              </GlowButton>
              <GlowButton
                variant="secondary"
                size="lg"
                onClick={() => onOpenInquiry('project')}
                showArrow={false}
              >
                <MessageSquare className="w-4 h-4 mr-2" /> Discuss Your Project
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
