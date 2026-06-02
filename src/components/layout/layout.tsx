"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import { Cursor } from "@/components/cursor/cursor";
import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ProcessSection } from "@/components/sections/process";
import { PlaygroundSection } from "@/components/sections/playground";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export function Layout() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background">
      <Cursor />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Playground Section */}
      <PlaygroundSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
    </ThemeProvider>
  );
}