"use client";

import { motion } from "framer-motion";
import { Award, Users, Code, Zap } from "lucide-react";

const stats = [
  {
    icon: <Code className="w-8 h-8" />,
    value: "50+",
    label: "Projects Deployed",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "20+",
    label: "Happy Clients",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: "100%",
    label: "Performance Score",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-transparent" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by teams building
            <span className="gradient-text"> exceptional products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering high-performance solutions that scale and inspire
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl glass-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}