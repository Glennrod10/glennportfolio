"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ChevronRight } from "lucide-react";

const diagnostics = [
  { label: "Status", value: "404 Not Found", delay: 800 },
  { label: "Route", value: "undefined", delay: 1600 },
  { label: "Message", value: "This page does not exist", delay: 2400 },
  { label: "Suggestion", value: "Try going back home", delay: 3200 },
];

function BlinkingCursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block w-[10px] h-[1.1em] bg-cyan-400 align-middle ml-0.5 transition-opacity duration-100 ${visible ? "opacity-100" : "opacity-0"}`}
    />
  );
}

function TypewriterText({ text, delay, onDone }: { text: string; delay: number; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          onDone?.();
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay, onDone]);

  return <span>{displayed}</span>;
}

function DiagnosticLine({
  label,
  value,
  delay,
  index,
}: {
  label: string;
  value: string;
  delay: number;
  index: number;
}) {
  const [showValue, setShowValue] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      className="font-mono text-sm md:text-base leading-relaxed"
    >
      <span className="text-cyan-400">$</span>{" "}
      <span className="text-purple-400">{label}</span>
      <span className="text-muted-foreground">: </span>
      <TypewriterText text={value} delay={0} onDone={() => setShowValue(true)} />
      {showValue && index === diagnostics.length - 1 && <BlinkingCursor />}
    </motion.div>
  );
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 -right-48 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 md:p-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <span className="text-[5rem] md:text-[7rem] font-bold leading-none gradient-text tracking-tight">
              404
            </span>
          </motion.div>

          <div className="space-y-1 mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs text-muted-foreground/50 mb-4 flex items-center gap-2"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-red-400" />
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
              <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
              <span className="ml-2">~ —zsh — diagnostic — 80×24</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="font-mono text-xs md:text-sm text-muted-foreground/70 mb-6"
            >
              <span className="text-green-400">glennrodrigues</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-cyan-400">portfolio</span>
              <span className="text-muted-foreground"> </span>
              <span className="text-white/40">~ %</span>{" "}
              <span className="text-yellow-400/80">curl</span>
              <span className="text-blue-400/80"> --location</span>
              <span className="text-green-400/80"> /this-page</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-red-400/80 font-mono text-sm md:text-base mb-4 flex items-center gap-2"
            >
              <ChevronRight size={16} className="text-red-400" />
              <span>Error: 404 — resource not found</span>
            </motion.div>

            <div className="pl-6 border-l border-white/[0.08] space-y-1">
              {diagnostics.map((d, i) => (
                <DiagnosticLine key={d.label} {...d} index={i} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4.5 }}
            className="flex justify-center"
          >
            <Link href="/">
              <Button variant="gradient" size="lg">
                <Home size={18} />
                cd ~/home
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
