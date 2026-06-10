"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users, Sparkles } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Architecture",
      description: "React, Next.js, TypeScript. The good stuff. I build systems that scale without breaking a sweat.",
      color: "from-blue-600 to-cyan-400",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Clean, intuitive interfaces that feel right. Because nobody should struggle to use what you built.",
      color: "from-purple-600 to-pink-400",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Fast load times, smooth interactions, no bloat. Your users won't notice. And that's the point.",
      color: "from-yellow-500 to-orange-400",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Dev",
      description: "Code review, pair programming, shipping together. The best products come from great teams.",
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <section id="about-section" className="py-10 md:py-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 -left-20 md:-left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 md:-right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated dots */}
            <div className="flex gap-1.5 mb-6">
              {["bg-cyan-400", "bg-blue-400", "bg-purple-400"].map((color, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full ${color}`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                />
              ))}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineer &amp; product thinker.
              <span className="gradient-text block mt-2">One line at a time.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I build frontends that actually work. Not just pretty screens, systems
              that handle real traffic, real data, and real complexity without falling
              apart. From SaaS platforms serving thousands of users to AI interfaces
              that need to feel effortless, I focus on making the complex feel simple.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { label: "React", color: "bg-blue-600/10 text-blue-400" },
                { label: "Next.js", color: "bg-purple-600/10 text-purple-400" },
                { label: "TypeScript", color: "bg-cyan-600/10 text-cyan-400" },
                { label: "AI Interfaces", color: "bg-blue-600/10 text-blue-400" },
                { label: "SaaS Platforms", color: "bg-purple-600/10 text-purple-400" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl glass-effect hover:border-cyan-400/30 overflow-hidden"
                whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 15 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: index * 0.1 } }}
                viewport={{ once: true }}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-lg shadow-purple-600/10`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}