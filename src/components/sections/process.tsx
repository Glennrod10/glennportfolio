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
    description: "I start by reviewing designs and planning the architecture: component tree, data flow, API contracts. No code until the blueprint is solid.",
  },
  {
    step: "02",
    title: "Develop & Integrate",
    icon: <MessageSquareCode className="w-5 h-5" />,
    description: "Then I build. Reusable components, API integration, state management. I use AI tools where they help, but every line gets reviewed and understood.",
  },
  {
    step: "03",
    title: "Test & Optimize",
    icon: <RefreshCcw className="w-5 h-5" />,
    description: "Testing across browsers and devices. I optimize for performance: Core Web Vitals, bundle size, and images. Then I chase down edge cases until the experience is consistent.",
  },
  {
    step: "04",
    title: "Review & Deploy",
    icon: <Zap className="w-5 h-5" />,
    description: "Staging deployment, QA checks, feedback, then production with automated CI/CD. Clean, tested, and ready to handle traffic.",
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
            <span className="text-sm text-cyan-400 font-medium">How I build things</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            How I <span className="gradient-text">work</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            I&apos;ve been doing this long enough to know what works. Here&apos;s how I approach every project.
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