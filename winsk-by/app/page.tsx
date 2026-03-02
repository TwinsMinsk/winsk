import { Hero } from '@/components/home/Hero';
import { BentoSkills } from '@/components/about/BentoSkills';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <BentoSkills />
      <ProjectsGrid />
      <ContactSection />
    </main>
  );
}
