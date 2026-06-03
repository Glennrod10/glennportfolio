"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ExternalLink } from "lucide-react";

const commands = [
  {
    id: "projects",
    title: "View Projects",
    description: "See what I&apos;ve built",
    shortcut: "1",
    action: () => {
      document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    id: "contact",
    title: "Contact Me",
    description: "Send a message",
    shortcut: "2",
    action: () => {
      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    id: "experience",
    title: "Experience",
    description: "Work history and timeline",
    shortcut: "3",
    action: () => {
      document.getElementById("experience-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    id: "tech-stack",
    title: "Tech Stack",
    description: "Tools and technologies",
    shortcut: "4",
    action: () => {
      document.getElementById("tech-stack-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    id: "github",
    title: "GitHub",
    description: "Open source work",
    shortcut: "G",
    action: () => {
      window.open("https://github.com/Glennrod10", "_blank");
    }
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Connect on LinkedIn",
    shortcut: "L",
    action: () => {
      window.open("https://www.linkedin.com/in/glennrodrigues17/", "_blank");
    }
  },
  {
    id: "email",
    title: "Email",
    description: "Write me a note",
    shortcut: "E",
    action: () => {
      window.open("mailto:glenn.dev17@gmail.com");
    }
  }
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(open => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        filteredCommands[selectedIndex]?.action();
        setIsOpen(false);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, selectedIndex, filteredCommands]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={() => setIsOpen(false)}
      />

      {/* Palette */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
      >
        <div className="glass-effect border border-white/10 rounded-2xl shadow-2xl shadow-cyan-500/20">
          {/* Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Type a command or search..."
              className="w-full pl-12 pr-4 py-4 bg-transparent text-lg focus:outline-none"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Commands */}
          <div className="max-h-96 overflow-y-auto">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                Nothing matches your search
              </div>
            ) : (
              filteredCommands.map((command, index) => (
                <motion.button
                  key={command.id}
                  className={`w-full px-4 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors ${
                    index === selectedIndex ? "bg-white/10" : ""
                  }`}
                  onClick={() => {
                    command.action();
                    setIsOpen(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-muted-foreground w-8">
                      {command.shortcut}
                    </span>
                    <div>
                      <div className="font-medium">{command.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {command.description}
                      </div>
                    </div>
                  </div>
                  {command.id === "github" || command.id === "linkedin" || command.id === "email" ? (
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  ) : null}
                </motion.button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-white/10 text-xs text-muted-foreground flex items-center justify-between">
            <span>Press ↑↓ to navigate</span>
            <span>ESC to close</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}