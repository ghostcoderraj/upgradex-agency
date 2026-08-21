import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { WhatsAppToggle } from './components/ui/WhatsAppToggle';
import { BackgroundParticles } from './components/3d/BackgroundParticles';
import { HeroSection } from './components/sections/HeroSection';
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
      {/* Subtle Background Particles Canvas */}
      <BackgroundParticles />

      {/* Floating Precision Cursor Ring */}
      <CustomCursor />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppToggle />

      {/* Sticky Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Page Sections */}
      <main className="relative z-10">
        <HeroSection onOpenInquiry={handleOpenInquiry} />
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
