import React from 'react';
import { GlowButton } from '../ui/GlowButton';
import { Sparkles } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenInquiry: (type?: 'project' | 'developer') => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#030305] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(ellipse_at_center,rgba(243,208,104,0.08),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#090b14]/90 px-6 py-14 text-center shadow-[0_30px_80px_-40px_rgba(212,175,55,0.45)] sm:px-12 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
            <Sparkles className="h-4 w-4" /> Take the next step
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your next idea deserves a{' '}
            <span className="bg-gradient-to-r from-amber-300 via-gold to-yellow-100 bg-clip-text text-transparent">
              clearer digital presence.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Tell us what you’re building. We’ll reply on email or WhatsApp with a plan before any work starts.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton variant="gold" size="lg" showArrow={false} onClick={() => onOpenInquiry('project')}>
              Start your project
            </GlowButton>
            <GlowButton variant="primary" size="lg" showArrow={false} onClick={() => onOpenInquiry('developer')}>
              Hire a developer
            </GlowButton>
          </div>

          <a
            href="https://wa.me/919153276992?text=Hello%20UpgradeX%20Agency,%20I%20want%20to%20talk%20about%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm font-semibold text-[#25D366] transition-colors hover:text-white"
          >
            Or message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
