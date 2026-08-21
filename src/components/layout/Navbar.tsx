import React, { useState, useEffect } from 'react';
import { GlowButton } from '../ui/GlowButton';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (initialType?: 'project' | 'developer') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Hire a Developer', href: '#hire-developer', highlight: true },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#030305]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Left */}
        <a href="#home" className="flex items-center group">
          <img
            src="/logo.png?v=2"
            alt="UpgradeX Agency"
            className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 hover:text-gold relative py-1 ${
                link.highlight
                  ? 'text-gold font-semibold bg-gold/10 px-3 py-1 rounded-full border border-gold/30 hover:bg-gold/20'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <GlowButton
            variant="gold"
            size="sm"
            onClick={() => onOpenInquiry('project')}
          >
            Start a Project
          </GlowButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08090f]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 border-b border-white/5 ${
                  link.highlight ? 'text-gold font-bold' : 'text-gray-200'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 flex flex-col gap-3">
            <GlowButton
              variant="gold"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('project');
              }}
              className="w-full"
            >
              Start a Project
            </GlowButton>
            <GlowButton
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('developer');
              }}
              className="w-full"
            >
              Hire a Developer
            </GlowButton>
          </div>
        </div>
      )}
    </header>
  );
};
