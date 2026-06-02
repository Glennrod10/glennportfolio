"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";

const experience = {
  title: "Frontend Developer",
  company: "Agaetis Technologies",
  period: "2022 - Present",
  location: "Borivali West, Mumbai",
  description: "Leading frontend development for AI-powered healthcare solutions",
  achievements: [
    "Built scalable React components library used across 10+ products",
    "Optimized application performance by 40% through code splitting and lazy loading",
    "Implemented real-time collaboration features using WebSockets",
    "Migrated legacy codebase to TypeScript, reducing runtime errors by 60%",
  ],
  tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "WebSockets"],
};

export function ExperienceSection() {
  return (
    <section id="experience-section" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Career Timeline
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Currently building AI-powered healthcare solutions at Agaetis Technologies
          </p>
        </motion.div>

        {/* Single experience card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Company header bar */}
          <div className="flex items-center gap-4 mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 border border-overlay/5">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-white">AT</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold">{experience.company}</h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {experience.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {experience.location}
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">{experience.title}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4" />
              Key Achievements
            </h4>
            <div className="grid gap-3">
              {experience.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-overlay/[0.03] border border-overlay/5 hover:border-cyan-400/20 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-base">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}