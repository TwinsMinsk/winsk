import { Hero } from '@/components/home/Hero';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { LiveDemos } from '@/components/sections/LiveDemos';
import { BentoSkills } from '@/components/about/BentoSkills';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <LiveDemos />
      <BentoSkills />
      <ProjectsGrid />
      <ContactSection />
    </main>
  );
}
