import React from "react";

const textItems = [
    "Madrox Visuals",
    "Designed to Be Remembered",
    "Est. 2024",
    "Delhi NCR",
    "Premium Creative Studio",
    "Purposeful Design",
    "Visual Storytelling",
];

const scrollingText = [...textItems, ...textItems];

/**
 * Infinite Scrolling Marquee Component
 */
export default function Marquee({ testId = "editorial-marquee" }){


  return (
    <div
      data-testid={testId}
      className="relative py-10 overflow-hidden border-y border-white/10"
      style={{ background: "rgba(255,255,255,0.015)" }}
    >
      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        {scrollingText.map((label, i) => (
          <div key={i} className="flex items-center shrink-0 pr-14">
            <span
              className="marquee-font uppercase text-white/85 text-[42px] sm:text-[64px] leading-none"
              style={{ letterSpacing: "-0.01em" }}
            >
              {label}
            </span>
            <span
              className="ml-14 inline-block w-2 h-2 rounded-full"
              style={{
                background: "var(--madrox-gold)",
                boxShadow: "0 0 14px var(--madrox-gold-glow)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
