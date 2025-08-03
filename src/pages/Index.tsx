import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhatIOffer from '@/components/WhatIOffer';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatIOffer />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
