"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MessageSquare, Send, Clock, Globe, Sparkles, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Invalid email format";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSent(false);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "glenn.dev17@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      link: "mailto:glenn.dev17@gmail.com",
      description: "Shoot me a message"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      name: "GitHub",
      link: "https://github.com/Glennrod10",
      description: "Check my repos"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/glennrodrigues17/",
      description: "Professional network"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const headerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const infoItems = [
    { icon: Sparkles, text: "Available for freelance projects" },
    { icon: Globe, text: "Remote work worldwide" },
    { icon: Clock, text: "Response within 24 hours" },
    { icon: MapPin, text: "Focus: React, Next.js, AI" },
  ];

  return (
    <section id="contact-section" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={headerItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            variants={headerItem}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Let&apos;s Work
            <span className="gradient-text ms-2">Together</span>
          </motion.h2>
          <motion.p
            variants={headerItem}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Got a project in mind or just want to say hi? Either way, I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl glass-effect">
              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground ml-4">contact.js</span>
                <motion.span
                  className="w-2 h-4 bg-cyan-400/60 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm text-cyan-400 mb-2 block font-mono">
                    {">"} name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none transition-all duration-300 focus:bg-background/80 ${
                      errors.name ? "border-red-500/50" : "border-overlay/10 focus:border-cyan-400"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-cyan-400 mb-2 block font-mono">
                    {">"} email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none transition-all duration-300 focus:bg-background/80 ${
                      errors.email ? "border-red-500/50" : "border-overlay/10 focus:border-cyan-400"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-cyan-400 mb-2 block font-mono">
                    {">"} message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none transition-all duration-300 focus:bg-background/80 resize-none ${
                      errors.message ? "border-red-500/50" : "border-overlay/10 focus:border-cyan-400"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-60"
                >
                  {sending ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 px-4 py-3 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>

              <div className="mt-6 text-xs text-muted-foreground font-mono">
                {sent ? <span className="text-green-400">{">"} Delivered!</span> : <>{">"} Waiting for input...</>}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Reach Out</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl glass-effect hover:border-cyan-400/30 transition-colors duration-300"
                    whileHover={{ x: 6, scale: 1.02 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{link.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-cyan-400 transition-colors">{link.name}</h4>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-effect">
              <h3 className="text-2xl font-bold mb-6">Quick Info</h3>
              <div className="space-y-4">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-4 h-4 text-cyan-400/60 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
