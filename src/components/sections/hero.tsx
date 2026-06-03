"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ArrowRight, Code2, Palette, Zap, Sparkles, Database, Globe, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about-section" },
  { label: "Experience", href: "#experience-section" },
  { label: "Projects", href: "#projects-section" },
  { label: "Tech Stack", href: "#tech-stack-section" },
  { label: "Contact", href: "#contact-section" },
];

const techIcons = [
  { Icon: Code2, color: "text-blue-400", left: 5, top: 15 },
  { Icon: Palette, color: "text-purple-400", left: 85, top: 10 },
  { Icon: Database, color: "text-cyan-400", left: 2, top: 70 },
  { Icon: Globe, color: "text-green-400", left: 90, top: 75 },
  { Icon: Zap, color: "text-yellow-400", left: 50, top: 5 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Counter({ value, label }: { value: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center lg:text-left">
      <div className="text-2xl font-bold gradient-text">{count}+</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

export function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
      driftX: (Math.random() - 0.5) * 40,
      driftY: (Math.random() - 0.5) * 40,
    }))
  );

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-10 md:pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-grid-white/[0.08] bg-[length:24px_24px]" />
      </div>

      {/* Particles (client-only to avoid hydration mismatch) */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-cyan-400/40 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
              }}
              animate={{
                x: [0, p.driftX, 0],
                y: [0, p.driftY, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Moving tech icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {techIcons.map(({ Icon, color, left, top }, i) => (
          <motion.div
            key={i}
            className={`absolute p-2.5 rounded-xl bg-background/60 backdrop-blur-sm border border-overlay/5 ${color}`}
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        ))}
      </div>

      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 mt-4 px-6 rounded-2xl bg-background/60 backdrop-blur-xl border border-overlay/10">
            <button onClick={() => scrollTo("hero-section")} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-overlay/10 backdrop-blur-xl shadow-lg shadow-overlay/5 flex items-center justify-center">
                <span className="text-sm font-bold gradient-text">GR</span>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href.slice(1))}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors rounded-lg relative"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                  <motion.div
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Theme toggle + Mobile toggle */}
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:hidden"
          >
            <div className="mt-2 p-4 rounded-2xl bg-background/80 backdrop-blur-xl border border-overlay/10 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href.slice(1))}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-cyan-400 transition-colors rounded-lg hover:bg-overlay/5 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left: Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">
                Frontend Engineer
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                <span className="block text-2xl sm:text-3xl text-muted-foreground font-normal mb-3">
                  Hi, I&apos;m
                </span>
                <span className="gradient-text">Glenn Rodrigues</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed max-w-xl"
            >
              I build frontends that solve real problems: fast, reliable, and
              built to scale. React, Next.js, TypeScript are my toolkit. SaaS
              platforms and AI interfaces are where I spend most of my time.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="gradient"
                  size="lg"
                  className="group"
                  onClick={() => scrollTo("projects-section")}
                >
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="group"
                  onClick={() => scrollTo("contact-section")}
                >
                  Let&apos;s Work&nbsp;Together
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats row with counter animation */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              <Counter value={20} label="Projects" />
              <Counter value={4} label="Years Exp" />
              <Counter value={6} label="Clients" />
            </motion.div>
          </motion.div>

          {/* Right: Photo Placeholder */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="absolute w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <motion.div
                className="absolute inset-0 rounded-2xl border border-cyan-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              />

              <div className="relative w-full h-full rounded-2xl glass-effect overflow-hidden flex items-center justify-center group">
                <Image
                  src="/glenn.jpg"
                  width={320}
                  height={320}
                  alt="Glenn Rodrigues"
                  priority
                  className="w-full h-full object-cover"
                />
               
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full blur-sm"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 border-2 border-overlay/20 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-primary-foreground/60 rounded-full"
            animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}