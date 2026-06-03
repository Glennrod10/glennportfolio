"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Database,
  Palette,
  Zap,
  GitBranch,
  Cloud,
  Monitor,
  Layers,
  Cpu,
  Globe,
  BookOpen,
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: <Monitor className="w-5 h-5" />,
    items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "SCSS", "Tailwind", "Bootstrap"],
  },
  {
    title: "CMS & E-commerce",
    icon: <Globe className="w-5 h-5" />,
    items: ["WordPress", "Elementor", "Opencart"],
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-5 h-5" />,
    items: ["Python", "Supabase", "SQL", "PostgreSQL"],
  },
  {
    title: "Dev Tools & AI",
    icon: <Cpu className="w-5 h-5" />,
    items: ["Git", "GitHub Actions", "Claude", "Codex", "Lovable", "Opencode", "OpenRouter", "Prompt Engineering"],
  },
  {
    title: "Design",
    icon: <Palette className="w-5 h-5" />,
    items: ["Figma"],
  },
  {
    title: "Currently Learning",
    icon: <BookOpen className="w-5 h-5" />,
    items: ["Flutter", "FastAPI", "Express", "Node.js"],
  },
];

export function TechStackSection() {
  const [floatingIcons] = useState(() => [
    <Code className="w-10 h-10 text-cyan-400/30" key="code" />,
    <Database className="w-10 h-10 text-blue-400/30" key="db" />,
    <Palette className="w-10 h-10 text-purple-400/30" key="design" />,
    <Zap className="w-10 h-10 text-yellow-400/30" key="zap" />,
    <GitBranch className="w-10 h-10 text-green-400/30" key="git" />,
    <Cloud className="w-10 h-10 text-indigo-400/30" key="cloud" />,
  ]);

  return (
    <section id="tech-stack-section" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Things I <span className="gradient-text">work with</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A honest list of tools I&apos;ve used on real projects. Nothing fancy, just what gets the job done.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              <div className="h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-400/50 mb-5" />
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={itemIndex}
                    className="px-3 py-1.5 bg-blue-600/10 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-600/20 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {floatingIcons.map((icon, index) => (
            <motion.div
              key={index}
              className="p-3 rounded-full bg-overlay/[0.03] border border-overlay/5"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3 + index * 0.3,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}