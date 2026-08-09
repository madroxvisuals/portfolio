"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { RESOURCE_PATHS } from "@/constants/app.constants";
import SectionIntro from "@/app/_sections/About/_components/SectionIntro";
import {
    fadeUp,
    DIVIDER_DOT_STYLE,
    GOLD_TEXT_STYLE,
    staggerContainer,
    VIEWPORT_ONCE,
    WORDMARK_SUB_STYLE,
    WORDMARK_TITLE_STYLE,
} from "@/constants/about.constants";

export default function About() {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-28 sm:py-36 px-6"
        >
            <div
                className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_auto_1fr] gap-14 lg:gap-8 items-start">
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
                        <Image src={RESOURCE_PATHS.logo_without_text} alt="Madrox Logo" width={80}
                               height={80}/>
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

                {/* Divider */}
                <div className="hidden lg:flex justify-center relative">
                    <div className="w-px bg-white/15 h-full min-h-105 relative">
                        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full" style={DIVIDER_DOT_STYLE}/>
                    </div>
                </div>

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
                            className="flex-1 sm:flex-none relative w-40 h-40 sm:w-36 sm:h-36 rounded-2xl overflow-hidden glass"
                        >
                            <Image
                                src={RESOURCE_PATHS.profile}
                                alt="Mohit - Founder"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 sm:flex-none">
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
}