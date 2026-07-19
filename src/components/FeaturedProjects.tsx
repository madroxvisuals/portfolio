"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Featured Projects — three curated sub-galleries.
 * Real project photography will be dropped in later; for now each card
 * is a deliberately-designed typographic placeholder tuned to the
 * described colour mood, framed with glass + spotlight treatment.
 */

const spotlight = {
  matcha: {
    grad: "radial-gradient(120% 100% at 30% 20%, #6bbf6e 0%, #2c5b3a 45%, #0f2418 100%)",
    accent: "#c9f3b5",
    fg: "#f4ffe8",
    label: "Matcha Latte",
    sub: "Drink · Product Poster",
    devanagari: "",
  },
  nike: {
    grad: "radial-gradient(120% 100% at 70% 30%, #3aa9ff 0%, #0e3a75 45%, #05122b 100%)",
    accent: "#dceeff",
    fg: "#ffffff",
    label: "High Sky Blue",
    sub: "Sneaker · Ad Campaign",
    devanagari: "",
  },
  bellavita: {
    grad: "radial-gradient(120% 100% at 40% 40%, #d94ea6 0%, #6b1a53 45%, #24081c 100%)",
    accent: "#ffd0ea",
    fg: "#fff2fa",
    label: "Date Woman",
    sub: "Bellavita · Perfume",
    devanagari: "",
  },
  cartier: {
    grad: "radial-gradient(120% 100% at 50% 60%, #262421 0%, #16130e 60%, #060402 100%)",
    accent: "#e8b923",
    fg: "#ede4c8",
    label: "Drive de Cartier",
    sub: "Moonphase · Luxury Watch",
    devanagari: "",
  },
  chai: {
    grad: "radial-gradient(120% 100% at 30% 70%, #d2a02b 0%, #7a5410 55%, #241800 100%)",
    accent: "#0a0a0a",
    fg: "#fff6d6",
    label: "पहले चाय",
    sub: "Typographic · Tea Stall",
    devanagari: "पहले चाय",
  },
  meme: {
    grad: "radial-gradient(120% 100% at 60% 30%, #ff4b4b 0%, #7a0f14 55%, #240404 100%)",
    accent: "#ffe0e0",
    fg: "#fff",
    label: "Video Editor Chahiye",
    sub: "Promo · Social Post",
    devanagari: "एडिटर चाहिए",
  },
  smonic: {
    grad: "linear-gradient(135deg, #6b3fff 0%, #ff8b3d 100%)",
    accent: "#fff",
    fg: "#fff",
    label: "Smonic",
    sub: "Brand · Discount Pair",
    devanagari: "",
  },
  kala: {
    grad: "radial-gradient(120% 100% at 50% 40%, #2b6bd9 0%, #10306b 55%, #050e24 100%)",
    accent: "#e8b923",
    fg: "#e6efff",
    label: "कला का संसार",
    sub: "Cultural · Poster",
    devanagari: "कला का संसार",
  },
  memorial: {
    grad: "radial-gradient(120% 100% at 40% 50%, #2fb5b0 0%, #0e5a58 55%, #04211f 100%)",
    accent: "#d3f5f2",
    fg: "#f0fbfa",
    label: "Every Step Shouldn't Hurt",
    sub: "Memorial · Ortho Ad",
    devanagari: "",
  },
  madroxVid: {
    grad: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
    accent: "#e8b923",
    fg: "#fff",
    label: "MADROX",
    sub: "Retro · Cinematic B&W",
    devanagari: "",
  },
  jordan: {
    grad: "linear-gradient(180deg, #262626 0%, #0a0a0a 100%)",
    accent: "#e8b923",
    fg: "#fff",
    label: "JORDAN",
    sub: "Sneaker · Bold Type",
    devanagari: "",
  },
  raj: {
    grad: "linear-gradient(180deg, #4a3a10 0%, #120b00 100%)",
    accent: "#e8b923",
    fg: "#f6e8b0",
    label: "RAJASTHANI",
    sub: "Hawa Mahal · Duotone",
    devanagari: "",
  },
  ve: {
    grad: "linear-gradient(180deg, #1f1f1f 0%, #060606 100%)",
    accent: "#e8b923",
    fg: "#fff",
    label: "VIDEO EDITOR",
    sub: "Portrait · Black & White",
    devanagari: "",
  },
  mind: {
    grad: "linear-gradient(180deg, #2a2a2a 0%, #0a0a0a 100%)",
    accent: "#e8b923",
    fg: "#fff",
    label: "WHAT'S IN MY MIND",
    sub: "Brain · Concept",
    devanagari: "",
  },
};

const ProjectCard = ({ data, aspect = "portrait", size = "md", showWatermark = false, testId }) => {
  const aspectClass =
    aspect === "portrait" ? "aspect-[3/4]" : aspect === "square" ? "aspect-square" : "aspect-[4/5]";
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative ${aspectClass} rounded-2xl overflow-hidden glass p-0`}
      data-testid={testId}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.06]"
        style={{ background: data.grad }}
      />
      {/* Spotlight ring */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 40%, rgba(255,255,255,0.14) 0%, transparent 70%)",
        }}
      />
      {/* Frame ticks */}
      <span className="absolute top-3 left-3 w-4 h-4 border-l border-t border-white/40" />
      <span className="absolute top-3 right-3 w-4 h-4 border-r border-t border-white/40" />
      <span className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-white/40" />
      <span className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-white/40" />

      {/* Watermark for videos */}
      {showWatermark && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 font-sm text-[9px] uppercase tracking-[0.4em] text-white/70">
          MADROX
        </div>
      )}

      {/* Typographic content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        {data.devanagari ? (
          <div
            className="font-bold-h leading-none"
            style={{
              color: data.fg,
              fontSize: size === "lg" ? "56px" : "42px",
              letterSpacing: "-0.02em",
            }}
          >
            {data.devanagari}
          </div>
        ) : (
          <div
            className="font-bold-h leading-none uppercase"
            style={{
              color: data.fg,
              fontSize: size === "lg" ? "42px" : "30px",
              letterSpacing: "-0.01em",
            }}
          >
            {data.label}
          </div>
        )}
      </div>

      {/* Caption slide-up */}
      <figcaption
        className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 60%)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="font-sm text-[10px] uppercase tracking-[0.34em]" style={{ color: data.accent }}>
          {data.sub}
        </div>
        <div className="font-bold-h text-white text-sm mt-1">{data.label}</div>
      </figcaption>
    </motion.figure>
  );
};

const GalleryHeader = ({ chapter, title, subtitle, testId }) => (
  <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
    <div>
      <div className="font-sm text-[11px] uppercase tracking-[0.42em] text-[color:var(--madrox-gold)]">
        {chapter}
      </div>
      <h3
        className="font-bold-h text-white text-3xl sm:text-4xl mt-2"
        data-testid={testId}
      >
        {title}
      </h3>
    </div>
    <div className="font-ital text-white/50 text-sm max-w-md">{subtitle}</div>
  </div>
);

const CaptionRow = ({ left, center, right, testId }) => (
  <div
    className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 items-center font-sm text-[10px] uppercase tracking-[0.4em] text-white/50"
    data-testid={testId}
  >
    <div className="text-left">{left}</div>
    <div className="text-center">{center}</div>
    <div className="text-right">{right}</div>
  </div>
);

export const FeaturedProjects = () => {
  return (
    <section
      id="work"
      data-testid="featured-projects-section"
      className="relative py-28 sm:py-36 px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* GALLERY 1 — Graphic Designs (5 portrait) */}
        <div data-testid="gallery-graphic">
          <GalleryHeader
            chapter="06 · Featured Projects 1"
            title="Graphic Designs"
            subtitle="A selection of poster and product design work — colour-forward, mood-driven, print-ready."
            testId="gallery-graphic-title"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            <ProjectCard data={spotlight.matcha} testId="proj-matcha" />
            <ProjectCard data={spotlight.nike} testId="proj-nike" />
            <ProjectCard data={spotlight.bellavita} testId="proj-bellavita" />
            <ProjectCard data={spotlight.cartier} testId="proj-cartier" />
            <ProjectCard data={spotlight.chai} testId="proj-chai" />
          </div>
          <CaptionRow
            left="Selected Works"
            center="© 2026 Designed by MADROX VISUALS"
            right="Graphic Designs"
            testId="caption-graphic"
          />
        </div>

        {/* GALLERY 2 — Social Media Posts (4 mixed) */}
        <div className="mt-28" data-testid="gallery-social">
          <GalleryHeader
            chapter="07 · Featured Projects 2"
            title="Social Media Posts"
            subtitle="Feed-scroll stoppers — cultural, editorial, and performance-driven creative for brands."
            testId="gallery-social-title"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <ProjectCard data={spotlight.meme} aspect="portrait" testId="proj-meme" />
            <ProjectCard data={spotlight.smonic} aspect="portrait" testId="proj-smonic" />
            <ProjectCard data={spotlight.kala} aspect="portrait" testId="proj-kala" />
            <ProjectCard data={spotlight.memorial} aspect="portrait" testId="proj-memorial" />
          </div>
          <CaptionRow
            left="Selected Works"
            center="© 2026 Designed by MADROX VISUALS"
            right="Social Media Posts"
            testId="caption-social"
          />
        </div>

        {/* GALLERY 3 — Video / Motion (5 portrait, watermark) */}
        <div className="mt-28" data-testid="gallery-video">
          <GalleryHeader
            chapter="08 · Featured Projects 3"
            title="Video Editing / Motion Graphics"
            subtitle="Cinematic edits and title-treatment reels — duotone stills stand in for the moving frame."
            testId="gallery-video-title"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            <ProjectCard data={spotlight.madroxVid} showWatermark testId="proj-madroxvid" />
            <ProjectCard data={spotlight.jordan} showWatermark testId="proj-jordan" />
            <ProjectCard data={spotlight.raj} showWatermark testId="proj-raj" />
            <ProjectCard data={spotlight.ve} showWatermark testId="proj-ve" />
            <ProjectCard data={spotlight.mind} showWatermark testId="proj-mind" />
          </div>
          <CaptionRow
            left="Video Editing"
            center="© 2026 Designed by MADROX VISUALS"
            right="Motion Graphics"
            testId="caption-video"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
