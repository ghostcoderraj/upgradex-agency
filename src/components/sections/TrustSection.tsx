import React, { useEffect, useState, useRef } from 'react';
import { Award, Users, CheckCircle, Clock } from 'lucide-react';

interface StatProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const StatCounter: React.FC<StatProps> = ({ end, suffix = '', label, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {count}
            <span className="text-gold">{suffix}</span>
          </div>
          <div className="text-xs sm:text-sm font-medium text-gray-400 mt-0.5">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 relative border-y border-white/10 bg-[#06070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold">
            Proven Performance
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-1">
            Helping ambitious businesses build, launch & grow online.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter
            end={50}
            suffix="+"
            label="Projects Delivered"
            icon={<Award className="w-6 h-6" />}
          />
          <StatCounter
            end={20}
            suffix="+"
            label="Businesses Scaled"
            icon={<Users className="w-6 h-6" />}
          />
          <StatCounter
            end={100}
            suffix="%"
            label="Client Focus & Quality"
            icon={<CheckCircle className="w-6 h-6" />}
          />
          <StatCounter
            end={24}
            suffix="/7"
            label="Digital Support"
            icon={<Clock className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
};
