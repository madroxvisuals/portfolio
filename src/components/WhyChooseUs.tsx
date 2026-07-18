import React from "react";
import { motion } from "framer-motion";

const ITEMS = [
  {
    n: "01",
    title: "Premium Creative Quality",
    body: "Every project is crafted with attention to detail, ensuring visuals that are modern, impactful, and aligned with your brand.",
  },
  {
    n: "02",
    title: "Strategy-Driven Design",
    body: "We don't just make designs look good—we create visuals that communicate your message and support your business goals.",
  },
  {
    n: "03",
    title: "Fast Communication",
    body: "From project kickoff to final delivery, we maintain clear, timely, and professional communication.",
  },
  {
    n: "04",
    title: "Flexible Workflow",
    body: "Every project is tailored to your unique requirements, ensuring a smooth and collaborative creative process",
  },
  {
    n: "05",
    title: "On-Time Delivery",
    body: "Meeting deadlines without compromising quality is a commitment we stand by for every project.",
  },
  {
    n: "06",
    title: "Client-Focused",
    body: "We believe in building lasting relationships by providing consistent support and reliable creative solutions.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section
      id="why"
      data-testid="why-choose-us-section"
      className="relative py-28 sm:py-36 px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sm text-[11px] uppercase tracking-[0.42em] text-[color:var(--madrox-gold)]"
            data-testid="why-eyebrow"
          >
            05 — Manifesto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold-h text-white text-4xl sm:text-5xl lg:text-6xl mt-4"
            data-testid="why-heading"
          >
            Why Choose us??
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-med text-white/65 text-base sm:text-lg mt-6 leading-[1.7]"
            data-testid="why-subtext"
          >
            We combine creativity, strategy, and reliability to deliver visual
            solutions that help brands stand out, build trust, and grow with
            confidence.
          </motion.p>
        </div>

        {/* 3 cols x 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* thin gold-topped vertical dividers between columns (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-white/8"
          >
            <span
              className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--madrox-gold)" }}
            />
          </div>
          <div
            aria-hidden
            className="hidden lg:block absolute top-0 bottom-0 left-2/3 w-[1px] bg-white/8"
          >
            <span
              className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--madrox-gold)" }}
            />
          </div>

          {ITEMS.map((item, i) => (
            <motion.article
              key={item.n}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass p-8 lg:p-10 flex flex-col gap-4"
              data-testid={`why-card-${i}`}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="font-bold-h text-4xl sm:text-5xl"
                  style={{ color: "var(--madrox-gold)" }}
                >
                  {item.n}
                </span>
                <span
                  className="h-[1px] flex-1 bg-white/15"
                  aria-hidden
                />
              </div>
              <h3 className="font-bold-h text-white text-xl sm:text-2xl leading-tight">
                {item.title}
              </h3>
              <p className="font-med text-white/65 text-[15px] leading-[1.7]">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
