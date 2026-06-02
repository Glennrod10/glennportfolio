"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  MessageSquareCode,
  RefreshCcw,
  Zap,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Plan & Structure",
    icon: <BrainCircuit className="w-5 h-5" />,
    description: "I review designs, plan the component architecture, map out data flow, and define API contracts — all before writing a single line of code.",
  },
  {
    step: "02",
    title: "Develop & Integrate",
    icon: <MessageSquareCode className="w-5 h-5" />,
    description: "I build reusable components, wire up APIs, manage state, and leverage AI tools throughout to speed up development and catch issues early.",
  },
  {
    step: "03",
    title: "Test & Optimize",
    icon: <RefreshCcw className="w-5 h-5" />,
    description: "I test across browsers and devices, optimize Core Web Vitals, bundle size, and images, then squash edge cases until everything feels solid.",
  },
  {
    step: "04",
    title: "Review & Deploy",
    icon: <Zap className="w-5 h-5" />,
    description: "I push through staging, run QA checks, gather feedback, then ship to production with automated CI/CD — clean, tested, and ready to scale.",
  },
];

export function ProcessSection() {
  return (
    <section id="process-section" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
            <Workflow className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Methodology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A practical workflow refined over years of shipping React and Next.js apps
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-400" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-6 lg:gap-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 min-w-0 pt-1.5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-cyan-400">{step.icon}</div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}