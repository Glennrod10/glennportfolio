"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import {
  Quote,
  Star,
  Calendar,
  MessageSquare
} from "lucide-react";

const testimonials = [
  {
    quote: "Glenn's work on our AI platform exceeded all expectations. His attention to detail and performance optimization resulted in a 40% improvement in user engagement.",
    author: "Sarah Chen",
    position: "Product Manager",
    company: "Agaetis Technologies",
    date: "December 2023",
    rating: 5,
    avatar: "SC"
  },
  {
    quote: "The React components library Glenn created has become the backbone of our design system. It's scalable, maintainable, and beautifully crafted.",
    author: "Michael Rodriguez",
    position: "Lead Developer",
    company: "TechVision Solutions",
    date: "August 2023",
    rating: 5,
    avatar: "MR"
  },
  {
    quote: "Working with Glenn was a game-changer for our startup. He delivered a complex SaaS platform ahead of schedule and under budget.",
    author: "Emily Watson",
    position: "CEO",
    company: "StudyFlow",
    date: "June 2023",
    rating: 5,
    avatar: "EW"
  },
  {
    quote: "The 3D configurator Glenn built for our business increased conversions by 60%. His technical expertise and creative solutions are outstanding.",
    author: "David Kim",
    position: "CTO",
    company: "House of Worktops",
    date: "April 2023",
    rating: 5,
    avatar: "DK"
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="testimonials-section" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-transparent" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]) }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium uppercase tracking-wider">
              Client Feedback
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People
            <span className="gradient-text block mt-2">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from clients who&apos;ve worked with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-2xl glass-effect border border-white/5 cursor-pointer group ${
                activeIndex === index ? "border-cyan-400/30 shadow-xl shadow-cyan-500/10" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12" />
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <div className="text-sm text-muted-foreground">
                    <span>{testimonial.position}</span>
                    <span className="mx-1">•</span>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="mt-4 text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {testimonial.date}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 rounded-xl glass-effect">
            <div className="text-4xl font-bold gradient-text mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center p-6 rounded-xl glass-effect">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-xl glass-effect">
            <div className="text-4xl font-bold gradient-text mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center p-6 rounded-xl glass-effect">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">On Time Delivery</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}