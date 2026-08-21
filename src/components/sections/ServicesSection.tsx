import React, { useState } from 'react';
import { servicesData } from '../../data/servicesData';
import type { ServiceItem } from '../../data/servicesData';
import { Globe, Layout, PenTool, Cpu, TrendingUp, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-7 h-7" />,
  Layout: <Layout className="w-7 h-7" />,
  Figma: <PenTool className="w-7 h-7" />,
  Cpu: <Cpu className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  Zap: <Zap className="w-7 h-7" />,
};

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const ServiceCard: React.FC<{ service: ServiceItem; onSelect: () => void }> = ({ service, onSelect }) => {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / (rect.height / 2)) * 8;
    const rotateY = (x / (rect.width / 2)) * 8;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: 'transform 0.15s ease-out' }}
      className="group relative rounded-3xl p-8 bg-[#090b14]/70 border border-white/10 backdrop-blur-xl shadow-2xl hover:border-gold/40 hover:bg-[#0e1120] transition-all duration-300 flex flex-col justify-between"
    >
      {/* Glow background accent */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div>
        {/* Top Header line */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl font-extrabold text-white/20 font-mono group-hover:text-gold transition-colors">
            {service.number}
          </span>
          <div
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
            style={{ color: service.accentColor }}
          >
            {iconMap[service.iconName]}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-8">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-gray-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Explore Service CTA */}
      <button
        onClick={onSelect}
        className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-sm font-semibold text-white group-hover:text-gold transition-colors cursor-pointer"
      >
        <span>Explore Service</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
      </button>
    </div>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Go Digital.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            From your first website to a complete digital ecosystem, we build solutions designed around your business.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => onSelectService(service.title)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
