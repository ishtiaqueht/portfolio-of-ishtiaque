import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import  ContactSection  from "../components/ContactSection";
import  Footer  from "../components/Footer";
import AboutSection from "../components/about/AboutSection";
import Parallax from "../components/Parallax";
import AnimatedCursor from "../components/AnimatedCursor";

export const Home = () => {
  return (
    
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedCursor/>
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection/>
        <SkillsSection />
        <Parallax/>
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};