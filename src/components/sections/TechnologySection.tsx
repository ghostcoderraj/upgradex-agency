import React from 'react';
import { techStackData } from '../../data/techData';

const techIcons: Record<string, React.ReactNode> = {
  react: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  ),
  nextjs: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M16.5 8V16L8 5.5V16.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  typescript: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#3178C6" />
      <path d="M11.5 8.5H5.5V10.5H7.5V17.5H9.5V10.5H11.5V8.5Z" fill="#ffffff" />
      <path d="M13.5 15.5C13.5 16.5 14.5 17.5 16 17.5C17.5 17.5 18.5 16.5 18.5 15.2C18.5 13.8 17.2 13.3 16 12.8C14.8 12.3 13.8 11.8 13.8 10.5C13.8 9.3 14.8 8.5 16.2 8.5C17.6 8.5 18.6 9.3 18.8 10.5H17.1C17 9.8 16.5 9.5 15.9 9.5C15.3 9.5 14.8 9.9 14.8 10.4C14.8 11.1 15.5 11.4 16.7 11.9C17.9 12.4 19.5 13 19.5 15.1C19.5 16.8 18.1 18.5 15.9 18.5C13.7 18.5 12.6 16.9 12.5 15.5H13.5Z" fill="#ffffff" />
    </svg>
  ),
  javascript: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#F7DF1E" />
      <path d="M13.8 15.6C14.1 16.3 14.7 16.8 15.6 16.8C16.5 16.8 17.1 16.3 17.1 15.4V10.5H18.9V15.5C18.9 17.4 17.6 18.5 15.7 18.5C14.1 18.5 13.1 17.5 12.6 16.3L13.8 15.6ZM7.8 15.8C8.2 16.4 8.9 16.8 9.8 16.8C10.7 16.8 11.3 16.3 11.3 15.6C11.3 14.8 10.7 14.5 9.7 14.1L9.1 13.8C7.6 13.2 6.7 12.3 6.7 10.6C6.7 8.9 8.1 7.7 10.2 7.7C11.8 7.7 12.9 8.4 13.4 9.6L12.2 10.3C11.8 9.6 11.2 9.2 10.3 9.2C9.4 9.2 8.8 9.6 8.8 10.3C8.8 11 9.4 11.3 10.3 11.7L10.9 12C12.6 12.7 13.5 13.5 13.5 15.3C13.5 17.2 12 18.5 9.8 18.5C7.8 18.5 6.6 17.4 6 16.1L7.8 15.8Z" fill="#000000" />
    </svg>
  ),
  tailwindcss: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
    </svg>
  ),
  nodejs: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7.8v11.4L12 25l10-5.8V7.8L12 2zm0 2.4l7.6 4.4v8.8L12 22l-7.6-4.4V8.8L12 4.4z" fill="#22C55E" />
      <path d="M12 7.5L6.5 10.7v6.4l5.5 3.2 5.5-3.2v-6.4L12 7.5z" fill="#22C55E" opacity="0.4" />
    </svg>
  ),
  mongodb: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C11.6 2 11.2 2.3 11.1 2.7C9.8 7.3 6 12 6 16C6 19.3 8.7 22 12 22C15.3 22 18 19.3 18 16C18 12 14.2 7.3 12.9 2.7C12.8 2.3 12.4 2 12 2ZM12.5 19.9V13.8C13.8 14.1 14.5 15.3 14.5 16.5C14.5 18.2 13.6 19.5 12.5 19.9Z" fill="#10B981" />
    </svg>
  ),
  supabase: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4 2.2L2.7 15.1C2.3 15.6 2.7 16.3 3.3 16.3H11.5L10.6 21.8C10.4 22.4 11.3 22.8 11.7 22.2L22.4 9.3C22.8 8.8 22.4 8.1 21.8 8.1H13.6L14.5 2.6C14.7 2 13.8 1.6 13.4 2.2Z" fill="#3ECF8E" />
    </svg>
  ),
  vercel: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L24 22H0L12 1Z" fill="#FFFFFF" />
    </svg>
  ),
  cloudinary: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#3448C5" />
    </svg>
  ),
  'ai-engines': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#A855F7" />
      <path d="M5 3L6.25 6.75L10 8L6.25 9.25L5 13L3.75 9.25L0 8L3.75 6.75L5 3Z" fill="#D4AF37" />
    </svg>
  ),
  threejs: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.8 4.5 8 12 4.2zM4 9.5l7 3.5v7.2l-7-3.5V9.5zm16 7.2l-7 3.5v-7.2l7-3.5v7.2z" fill="#00F2FE" />
    </svg>
  ),
};

export const TechnologySection: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#06070c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            ENGINEERING STACK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Powered by Modern Technology.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Modern Stack. Reliable Products. We engineer applications on cutting-edge frameworks built to last.
          </p>
        </div>

        {/* Tech Badges Grid (12 items total, 6 columns x 2 rows = clean grid without empty spaces) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStackData.map((tech) => (
            <div
              key={tech.id}
              className="p-5 rounded-2xl bg-[#0a0c16]/80 border border-white/10 hover:border-gold/40 hover:bg-[#111425] transition-all duration-300 group flex flex-col items-center text-center space-y-3 shadow-lg hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110 shadow-inner"
              >
                {techIcons[tech.id]}
              </div>

              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                  {tech.name}
                </h3>
                <span className="text-[10px] text-gray-400 font-mono block mt-1">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
