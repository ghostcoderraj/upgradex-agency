import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppToggle: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919153276992';
  const message = encodeURIComponent("Hello UpgradeX Agency, I'm interested in your services!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Hover Tooltip Badge */}
      <div
        className={`transition-all duration-300 transform ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        } hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#090b14]/90 backdrop-blur-md border border-[#25D366]/40 text-white text-xs font-semibold shadow-2xl`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        <span>Chat on WhatsApp (+91 91532 76992)</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse group-hover:bg-[#25D366]/50 transition-all z-0" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white/10 stroke-[2.2] relative z-10" />

        {/* Online Status Badge */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#040509] z-20" />
      </a>
    </div>
  );
};
