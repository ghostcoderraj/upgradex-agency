import React, { useEffect, useState } from 'react';
import { servicesData } from '../../data/servicesData';
import type { ServiceItem } from '../../data/servicesData';
import { Globe, Layout, PenTool, Cpu, TrendingUp, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const inquiryServiceName: Record<string, string> = {
  'Website Development': 'Website Development',
  'Web Applications': 'Full-Stack & Web Applications',
  'UI/UX Design': 'UI/UX Design',
  'AI Solutions': 'AI Solutions & Automations',
  'SEO & Digital Growth': 'SEO & Digital Growth',
  'Business Automation': 'Business Automation',
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6" />,
  Layout: <Layout className="h-6 w-6" />,
  Figma: <PenTool className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
};

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const ServiceCard: React.FC<{
  service: ServiceItem;
  active: boolean;
  onHover: () => void;
  onSelect: () => void;
}> = ({ service, active, onHover, onSelect }) => {
  return (
    <article
      onMouseEnter={onHover}
      className={`relative flex h-full flex-col rounded-3xl border p-6 transition-colors duration-300 sm:p-7 ${
        active
          ? 'border-gold/50 bg-[#0e1120] shadow-[0_0_40px_-18px_rgba(243,208,104,0.85)]'
          : 'border-white/10 bg-[#090b14]/80 hover:border-white/20'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} transition-opacity duration-500 ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-5 flex items-center justify-between">
          <span className={`font-mono text-2xl font-extrabold ${active ? 'text-gold' : 'text-white/25'}`}>
            {service.number}
          </span>
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
            style={{ color: service.accentColor }}
          >
            {iconMap[service.iconName]}
          </div>
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-gold">{service.forClient}</p>
        <h3 className="mt-2 text-2xl font-bold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">{service.description}</p>

        <ul className="mt-5 space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onSelect}
          className="mt-6 inline-flex w-full cursor-pointer items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-white transition-colors hover:text-gold"
        >
          <span>Start with this</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % servicesData.length);
    }, 3400);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="services"
      className="relative scroll-mt-28 py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            What we do
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Pick the work you need first.
          </h2>
          <p className="text-base text-gray-300 sm:text-lg">
            One team for the site, the product, and the growth after launch. Choose a service and we’ll open a request with it already selected.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              active={active === index}
              onHover={() => setActive(index)}
              onSelect={() => onSelectService(inquiryServiceName[service.title] ?? service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
