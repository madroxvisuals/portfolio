"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { MadroxLogo } from "./MadroxLogo";

// ── Hoisted animation variants (created once at module load, not per render) ──
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const staggerContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

// ── Hoisted static objects (avoid re-allocating identical objects every render) ──
const VIEWPORT_ONCE = { once: true, amount: 0.3 } as const;

const PORTRAIT_BG_STYLE: React.CSSProperties = {
    background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 60%, #141414 100%)",
};

const DIVIDER_DOT_STYLE: React.CSSProperties = {
    background: "var(--madrox-gold)",
    boxShadow: "0 0 18px var(--madrox-gold-glow)",
};

const GOLD_TEXT_STYLE: React.CSSProperties = { color: "var(--madrox-gold)" };

const WORDMARK_TITLE_STYLE: React.CSSProperties = { letterSpacing: "0.38em" };
const WORDMARK_SUB_STYLE: React.CSSProperties = { letterSpacing: "0.45em" };

// ── Reusable pieces (kept outside About so they aren't recreated per render) ──

interface SectionIntroProps {
    eyebrow: string;
    heading: string;
    copy: string;
    eyebrowTestId: string;
    headingTestId: string;
    copyTestId: string;
}

/** Shared eyebrow + heading + paragraph block used by both About and Founder columns. */
const SectionIntro: React.FC<SectionIntroProps> = React.memo(
    ({ eyebrow, heading, copy, eyebrowTestId, headingTestId, copyTestId }) => (
        <>
            <motion.span
                variants={fadeUp}
                className="font-sm text-[11px] uppercase tracking-[0.42em] text-[color:var(--madrox-gold)]"
                data-testid={eyebrowTestId}
            >
                {eyebrow}
            </motion.span>
            <motion.h2
                variants={fadeUp}
                className="font-bold-h text-white text-4xl sm:text-5xl mt-4"
                data-testid={headingTestId}
            >
                {heading}
            </motion.h2>
            <motion.p
                variants={fadeUp}
                data-testid={copyTestId}
                className="font-med text-white/70 text-base sm:text-lg leading-[1.7] mt-6 max-w-xl"
            >
                {copy}
            </motion.p>
        </>
    )
);
SectionIntro.displayName = "SectionIntro";

/** Static silhouette SVG placeholder — pure, no props that change, so memo prevents re-render. */
const PortraitSilhouette: React.FC = React.memo(() => (
    <svg viewBox="0 0 100 100" className="w-full h-full opacity-60" aria-hidden>
        <defs>
            <linearGradient id="pgrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04"/>
            </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#pgrad)"/>
        <circle cx="50" cy="40" r="14" fill="#ffffff" opacity="0.35"/>
        <path d="M22 90 C 22 70, 78 70, 78 90 Z" fill="#ffffff" opacity="0.35"/>
        <path
            d="M32 40 C 32 28, 68 28, 68 40"
            stroke="#ffffff"
            strokeOpacity="0.55"
            strokeWidth="3"
            fill="none"
        />
    </svg>
));
PortraitSilhouette.displayName = "PortraitSilhouette";

const Divider: React.FC = React.memo(() => (
    <div className="hidden lg:flex justify-center relative">
        <div className="w-[1px] bg-white/15 h-full min-h-[420px] relative">
      <span
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
          style={DIVIDER_DOT_STYLE}
      />
        </div>
    </div>
));
Divider.displayName = "Divider";

export const About: React.FC = React.memo(() => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-28 sm:py-36 px-6"
        >
            <div
                className="max-w-[1280px] mx-auto grid lg:grid-cols-[1fr_auto_1fr] gap-14 lg:gap-8 items-start">
                {/* LEFT — About */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={VIEWPORT_ONCE}
                    className="lg:pr-8"
                >
                    <SectionIntro
                        eyebrow="01 — About"
                        heading="About"
                        copy="Madrox Visuals is a premium creative brand helping businesses communicate through purposeful design, visual storytelling, and high-quality creative solutions. Every project is crafted to build trust, strengthen brand identity, and leave a lasting impression."
                        eyebrowTestId="about-eyebrow"
                        headingTestId="about-heading"
                        copyTestId="about-copy"
                    />
                    <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
                        <MadroxLogo size={64} wordmark={false} testId="about-logo"/>
                        <div className="flex flex-col">
                            <span
                                className="font-bold-h text-white text-sm"
                                style={WORDMARK_TITLE_STYLE}
                            >
                                MADROX
                            </span>
                            <span
                                className="font-med text-white/60 text-[10px]"
                                style={WORDMARK_SUB_STYLE}
                            >
                                VISUALS
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

                <Divider/>

                {/* RIGHT — Founder */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={VIEWPORT_ONCE}
                    className="lg:pl-8"
                >
                    <SectionIntro
                        eyebrow="02 — Founder"
                        heading="Founder"
                        copy="Founded Madrox Visuals with a vision to help businesses build stronger brands through purposeful design, premium visuals, and creative storytelling."
                        eyebrowTestId="founder-eyebrow"
                        headingTestId="founder-heading"
                        copyTestId="founder-copy"
                    />

                    {/* Portrait placeholder slot */}
                    <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6">
                        <div
                            data-testid="founder-portrait-placeholder"
                            className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden glass"
                            style={PORTRAIT_BG_STYLE}
                        >
                            <PortraitSilhouette/>
                            <span
                                className="absolute inset-x-0 bottom-1 text-center font-sm text-[9px] uppercase text-white/40 tracking-[0.3em]"
                                data-testid="founder-portrait-label"
                            >
                                Portrait
                            </span>
                        </div>
                        <div>
                            <div
                                className="font-bold-h text-2xl sm:text-3xl"
                                style={GOLD_TEXT_STYLE}
                                data-testid="founder-name"
                            >
                                Mohit
                            </div>
                            <div
                                className="font-sm text-white/65 text-[11px] uppercase mt-2 tracking-[0.24em]"
                                data-testid="founder-role"
                            >
                                Graphic Designer • Video Editor • Visual Creator
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
});
About.displayName = "About";

export default About;