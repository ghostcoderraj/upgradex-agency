import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const workLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Selected work', href: '#work' },
  { label: 'Process', href: '#process' },
];

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Hire a developer', href: '#hire-developer' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/117074268/' },
  { label: 'Instagram', href: 'https://www.instagram.com/upgradex_agency' },
  { label: 'GitHub', href: 'https://github.com/upgradex-agency' },
];

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-[#020204] text-gray-400"
      style={{ containerType: 'inline-size' }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center px-3 sm:px-5">
        <span
          className="select-none whitespace-nowrap font-extrabold leading-none tracking-[-0.055em] text-white/[0.05]"
          style={{ fontSize: 'min(18.6cqw, calc((100cqw - 2.75rem) / 5.22))' }}
        >
          UPGRADEX
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="max-w-sm space-y-4 lg:col-span-5">
            <a href="#home" className="inline-flex items-center">
              <img
                src="/logo.png?v=3"
                alt="UpgradeX Agency"
                className="h-11 w-auto object-contain sm:h-12"
              />
            </a>
            <p className="text-sm leading-relaxed text-gray-400">
              Digital marketing, websites, and products for brands ready to grow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="text-sm font-semibold text-white">Work</p>
              <ul className="mt-4 space-y-3">
                {workLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Company</p>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-sm font-semibold text-white">Socials</p>
              <ul className="mt-4 space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-14 text-xs text-gray-500">© 2026 Upgradex Agency. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
