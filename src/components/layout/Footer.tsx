import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Hire a Developer', href: '#hire-developer' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-16 bg-[#020204] border-t border-white/10 relative text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Left Brand */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#home" className="inline-flex items-center">
              <img
                src="/logo.png?v=2"
                alt="UpgradeX Agency"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-gray-400 max-w-sm">
              Building digital experiences for ambitious businesses.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Upgradex Agency. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-400">
            <span>Made for the next generation of businesses.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
