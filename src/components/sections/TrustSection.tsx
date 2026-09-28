import React, { useEffect, useState, useRef } from 'react';
import { Award, Users, CheckCircle, Clock } from 'lucide-react';

interface StatProps {
  end: number;
  suffix?: string;
  label: string;
  note: string;
  icon: React.ReactNode;
}

const StatCounter: React.FC<StatProps> = ({ end, suffix = '', label, note, icon }) => {
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
      className="group rounded-2xl border border-white/10 bg-[#0a0c14] p-6 transition-colors duration-300 hover:border-gold/40"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
        {icon}
      </div>
      <div className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{label}</div>
      <p className="mt-1 text-sm leading-relaxed text-gray-400">{note}</p>
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
            Helping brands launch, get found, and grow online.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter
            end={50}
            suffix="+"
            label="Projects delivered"
            note="Sites, products, and launches shipped for clients."
            icon={<Award className="h-5 w-5" />}
          />
          <StatCounter
            end={20}
            suffix="+"
            label="Businesses scaled"
            note="Brands that stayed for the next version."
            icon={<Users className="h-5 w-5" />}
          />
          <StatCounter
            end={100}
            suffix="%"
            label="Attention on the brief"
            note="The work follows the goal you set, not a template."
            icon={<CheckCircle className="h-5 w-5" />}
          />
          <StatCounter
            end={24}
            suffix="/7"
            label="A way to reach us"
            note="Email or WhatsApp when the next question comes up."
            icon={<Clock className="h-5 w-5" />}
          />
        </div>
      </div>
    </section>
  );
};
