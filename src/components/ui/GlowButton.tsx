import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  href?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  className = '',
  type = 'button',
  href
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold',
    md: 'px-6 py-3 text-sm font-semibold',
    lg: 'px-8 py-4 text-base font-bold',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white border border-indigo-400/30 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] hover:border-indigo-300',
    gold: 'bg-gradient-to-r from-amber-500 via-gold to-yellow-600 text-black font-extrabold border border-amber-300/40 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.8)] hover:brightness-110',
    secondary: 'bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 shadow-lg',
    outline: 'bg-transparent text-gray-200 border border-gold/40 hover:border-gold hover:text-gold hover:bg-gold/10',
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        )}
      </span>
    </>
  );

  const baseClasses = `group relative inline-flex items-center justify-center rounded-full transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {buttonContent}
    </button>
  );
};
