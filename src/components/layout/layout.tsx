"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "@/providers/theme-provider";
import { Cursor } from "@/components/cursor/cursor";
import { Hero } from "@/components/sections/hero";

const AboutSection = dynamic(() => import("@/components/sections/about").then(m => ({ default: m.AboutSection })));
const ExperienceSection = dynamic(() => import("@/components/sections/experience").then(m => ({ default: m.ExperienceSection })));
const ProjectsSection = dynamic(() => import("@/components/sections/projects").then(m => ({ default: m.ProjectsSection })));
const TechStackSection = dynamic(() => import("@/components/sections/tech-stack").then(m => ({ default: m.TechStackSection })));
const ProcessSection = dynamic(() => import("@/components/sections/process").then(m => ({ default: m.ProcessSection })));
const PlaygroundSection = dynamic(() => import("@/components/sections/playground").then(m => ({ default: m.PlaygroundSection })), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/contact").then(m => ({ default: m.ContactSection })));
const Footer = dynamic(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));

export function Layout() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background">
      <Cursor />

      <main id="main-content">
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
    </ThemeProvider>
  );
}