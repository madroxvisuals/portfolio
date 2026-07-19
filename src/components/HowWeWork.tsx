"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, RefreshCw, Send } from "lucide-react";
import { MadroxLogo } from "./MadroxLogo";

const STEPS = [
  {
    n: "01",
    icon: Search,
    title: "Discover",
    body: "Understanding your vision and project goal",
  },
  {
    n: "02",
    icon: PenTool,
    title: "Design",
    body: "Crafting visuals with creativity and precision.",
  },
  {
    n: "03",
    icon: RefreshCw,
    title: "Refine",
    body: "Perfecting every detail through collaboration.",
  },
  {
    n: "04",
    icon: Send,
    title: "Deliver",
    body: "Delivering polished, high-quality final assets.",
  },
];

export const HowWeWork = () => {
  return (
    <section
      id="process"
      data-testid="how-we-work-section"
      className="relative py-28 sm:py-36 px-6"
    >
      <div className="max-w-[1400px] mx-auto relative">
        <div className="absolute top-0 right-4 hidden md:block opacity-90">
          <MadroxLogo size={70} wordmark={false} testId="how-corner-logo" />
        </div>

        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sm text-[11px] uppercase tracking-[0.42em] text-[color:var(--madrox-gold)]"
            data-testid="how-eyebrow"
          >
            09 — The Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold-h text-white text-4xl sm:text-5xl lg:text-6xl mt-4"
            data-testid="how-heading"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-med text-white/65 text-base sm:text-lg mt-6 max-w-2xl leading-[1.7]"
            data-testid="how-subtext"
          >
            A refined creative process that transforms ideas into premium
            visual experiences.
          </motion.p>
        </div>

        {/* Arch-topped glass cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass p-8 pt-12 relative flex flex-col gap-5 items-start"
                style={{
                  borderTopLeftRadius: "140px",
                  borderTopRightRadius: "140px",
                  borderRadius: "140px 140px 20px 20px",
                  minHeight: 380,
                }}
                data-testid={`how-step-${i}`}
              >
                <div
                  className="w-16 h-16 mx-auto rounded-full grid place-items-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(232,185,35,0.35)",
                    boxShadow: "inset 0 0 20px rgba(232,185,35,0.15)",
                  }}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.4}
                    color="var(--madrox-gold)"
                  />
                </div>

                <div className="w-full text-center">
                  <div
                    className="font-sm text-[10px] uppercase tracking-[0.42em]"
                    style={{ color: "var(--madrox-gold)" }}
                  >
                    Step {s.n}
                  </div>
                  <h3 className="font-bold-h text-white text-2xl mt-3">
                    {s.title}
                  </h3>
                  <p className="font-med text-white/65 text-sm leading-[1.7] mt-4 px-2">
                    {s.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
