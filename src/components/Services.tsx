"use client";

import React from "react";
import { motion } from "framer-motion";
import { MadroxLogo } from "./MadroxLogo";

const SERVICES = [
  { label: "Graphic Designing", stem: 190 },
  { label: "Video Editing", stem: 140 },
  { label: "Motion Graphics", stem: 210 },
  { label: "Social Media Designs", stem: 160 },
];

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-28 sm:py-36 px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Corner logo (per spec) */}
        <div className="absolute top-10 right-8 hidden md:block opacity-90">
          <MadroxLogo size={70} wordmark={false} testId="services-corner-logo" />
        </div>

        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sm text-[11px] uppercase tracking-[0.42em] text-[color:var(--madrox-gold)]"
            data-testid="services-eyebrow"
          >
            04 — What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold-h text-white text-4xl sm:text-5xl lg:text-6xl mt-4"
            data-testid="services-heading"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-med text-white/65 text-base sm:text-lg mt-6 max-w-2xl leading-[1.7]"
            data-testid="services-subtext"
          >
            Delivering premium creative services that transform ideas into
            impactful visual experiences.
          </motion.p>
        </div>

        {/* Vertical stem items */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col items-center text-center"
              data-testid={`service-item-${i}`}
            >
              {/* gold dot */}
              <span
                className="w-3 h-3 rounded-full transition-all group-hover:scale-125"
                style={{
                  background: "var(--madrox-gold)",
                  boxShadow: "0 0 18px var(--madrox-gold-glow)",
                }}
              />
              {/* vertical stem */}
              <motion.span
                initial={{ height: 0 }}
                whileInView={{ height: s.stem }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.0,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-[1px] mt-3"
                style={{
                  background:
                    "linear-gradient(180deg, var(--madrox-gold) 0%, rgba(255,255,255,0.15) 100%)",
                }}
              />
              {/* label */}
              <div
                className="mt-6 px-6 py-4 glass rounded-2xl"
                data-testid={`service-label-${i}`}
              >
                <span className="font-bold-h text-white text-lg sm:text-xl block">
                  {s.label}
                </span>
                <span className="font-sm text-[10px] uppercase text-white/45 tracking-[0.4em] mt-2 block">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
