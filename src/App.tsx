import { lazy, Suspense, useEffect, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { WhatsAppToggle } from './components/ui/WhatsAppToggle';

const BackgroundParticles = lazy(() =>
  import('./components/3d/BackgroundParticles').then((module) => ({
    default: module.BackgroundParticles,
  })),
);

function DesktopParticles() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = 'connection' in navigator && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!desktop || reduce || saveData) return;

    const timer = window.setTimeout(() => setEnabled(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <BackgroundParticles />
    </Suspense>
  );
}
import { HeroSection } from './components/sections/HeroSection';
import { ClientStartSection } from './components/sections/ClientStartSection';
import { TrustSection } from './components/sections/TrustSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { FeaturedWorkSection } from './components/sections/FeaturedWorkSection';
import { WhyUpgradexSection } from './components/sections/WhyUpgradexSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { TechnologySection } from './components/sections/TechnologySection';
import { HireDeveloperSection } from './components/sections/HireDeveloperSection';
import { HireCtaBanner } from './components/sections/HireCtaBanner';
import { AboutSection } from './components/sections/AboutSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { ContactSection } from './components/sections/ContactSection';
import { InquiryModal } from './components/ui/InquiryModal';
import { ProjectModal } from './components/ui/ProjectModal';
import type { ProjectItem } from './data/projectsData';

export function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<'project' | 'developer'>('project');
  const [inquiryService, setInquiryService] = useState<string>('');

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenInquiry = (type: 'project' | 'developer' = 'project', serviceName: string = '') => {
    setInquiryType(type);
    setInquiryService(serviceName);
    setInquiryModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#030305] text-gray-100 font-sans selection:bg-gold/30 selection:text-gold-light">
      <DesktopParticles />

      {/* Floating Precision Cursor Ring */}
      <CustomCursor />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppToggle />

      {/* Sticky Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Page Sections */}
      <main className="relative z-10">
        <HeroSection onOpenInquiry={handleOpenInquiry} />
        <ClientStartSection onOpenInquiry={handleOpenInquiry} />
        <TrustSection />
        <ServicesSection onSelectService={(service) => handleOpenInquiry('project', service)} />
        <FeaturedWorkSection onSelectProject={(proj) => setSelectedProject(proj)} />
        <WhyUpgradexSection />
        <ProcessSection />
        <TechnologySection />
        <HireDeveloperSection onOpenInquiry={handleOpenInquiry} />
        <HireCtaBanner onOpenInquiry={handleOpenInquiry} />
        <AboutSection />
        <FinalCtaSection onOpenInquiry={handleOpenInquiry} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialType={inquiryType}
        initialService={inquiryService}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={() => handleOpenInquiry('project')}
      />
    </div>
  );
}

export default App;
