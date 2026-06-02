"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Zap } from "lucide-react";

const projects = [
  {
    title: "Medly case",
    description: "Immersive platform for medical professionals to practice AI-assisted diagnostics with interactive simulations and real-time feedback.",
    tags: ["React", "Next.js", "TypeScript", "Python", ],
    challenges: [
      "Real-time 3D visualization of medical data",
      "AI model inference directly in browser",
      "Intuitive gesture controls for surgeons",
    ],
    metrics: { performance: "+40%", users: "100", rating: "4.5" },
    link: null,
    github: null,
  },
  {
    title: "CLC Abroad — WordPress Site",
    description: "Full abroad agency website built with WordPress & Elementor. Dynamic training pages, course filtering, blog system, and multi-page architecture.",
    tags: ["WordPress", "Elementor", "PHP", "Custom Post Types", "ACF"],
    challenges: [
      "Dynamic training course pages with custom post types",
      "Advanced filtering and search for study programs",
      "Scalable blog and content management system",
    ],
    metrics: { pages: "50+", courses: "200+", traffic: "+120%" },
    link: "https://clcabroad.in/",
    github: null,
  },
  {
    title: "Study Abroad SaaS Platform",
    description: "Platform connecting students with universities worldwide — course matching, application tracking, and visa guidance all in one place.",
    tags: ["Next.js", "Supabase", "Stripe", "Node.js", "PostgreSQL"],
    challenges: [
      "Real-time application status tracking",
      "Multi-step form with 50+ university API integrations",
      "Secure payment and document handling",
    ],
    metrics: { applications: "50+", universities: "100+", success: "85%" },
    link: null,
    github: null,
  },
  {
    title: "House of Worktops",
    description: "Custom OpenCart e-commerce platform with a product configurator for bespoke kitchen worktops, built with Bootstrap and Twig templating.",
    tags: ["OpenCart", "PHP", "Bootstrap", "Twig", "MySQL", "JavaScript"],
    challenges: [
      "Build custom worktop builder feature on the frontend side",
      "Responsive Bootstrap frontend with Twig templating",
      "Complex pricing logic for custom dimensions and materials",
    ],
    metrics: { products: "200+", orders: "+40%", satisfaction: "95%" },
    link: null,
    github: null,
  },
  {
    title: "Maanch Engagement Tracker",
    description: "Fund management platform for handling portfolios, tracking issues, interactions, votes, and generating detailed reports for enterprise clients.",
    tags: ["React", "Laravel", "Bootstrap", "PHP", "MySQL", "JavaScript"],
    challenges: [
      "Complex fund portfolio management and tracking system",
      "Real-time issue and interaction tracking across large teams",
      "Custom reporting engine with voting and survey analytics",
    ],
    metrics: { funds: "50+", interactions: "10K+", clients: "20+" },
    link: null,
    github: null,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects-section" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.03]" />

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
            <Code className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building exceptional digital experiences that solve real-world problems
          </p>
        </motion.div>

        {/* Projects Grid — side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl glass-effect overflow-hidden hover:border-cyan-400/30 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 flex-shrink-0 ml-3">
                    {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-overlay/5 border border-overlay/10 hover:border-cyan-400/30 hover:bg-overlay/10 transition-all duration-300 text-muted-foreground hover:text-cyan-400"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-overlay/5 border border-overlay/10 hover:border-cyan-400/30 hover:bg-overlay/10 transition-all duration-300 text-muted-foreground hover:text-cyan-400"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-blue-600/10 text-blue-400 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Challenges */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                    Challenges
                  </h4>
                  <ul className="space-y-1.5">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Zap className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                  {Object.entries(project.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-bold gradient-text">{value}</div>
                      <div className="text-[10px] text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}