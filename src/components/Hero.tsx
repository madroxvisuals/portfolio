"use client";

import Image from "next/image";
import { IMG_PATHS } from "@/constants";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

/**
 * Kinetic hero with masked line-by-line reveal, floating logo,
 * gold pulse, and subtle parallax on scroll.
 */

// Static variant objects hoisted out of the component — they don't depend on
// props/state, so recreating them on every render was wasted work.
const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11, delayChildren: 0.3 } },
};

const lineVariants: Variants = {
    hidden: { y: "110%" },
    show: {
        y: "0%",
        transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
    },
};

export const Hero: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const yLogo = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const yWord = useTransform(scrollYProgress, [0, 1], [0, -140]);
    const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);

    // pointer-driven radial glow behind the logo (desktop delight)
    const glowRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = glowRef.current;
        if (!el) return;

        const move = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width) * 100;
            const y = ((e.clientY - r.top) / r.height) * 100;
            el.style.setProperty("--gx", `${x}%`);
            el.style.setProperty("--gy", `${y}%`);
        };

        window.addEventListener("pointermove", move);
        return () => window.removeEventListener("pointermove", move);
    }, []);

    return (
        <section
            id="top"
            ref={ref}
            data-testid="hero-section"
            className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-28 pb-16"
        >
            {/* radial gold glow driven by cursor */}
            <div
                ref={glowRef}
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(500px 500px at var(--gx,50%) var(--gy,40%), rgba(232,185,35,0.18), transparent 60%)",
                    transition: "background 0.4s ease-out",
                }}
            />

            {/* top micro label */}
            <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-sm text-[11px] uppercase text-white/60 mb-14 tracking-[0.42em]"
                data-testid="hero-established"
            >
                Established 2024
            </motion.div>

            {/* Logo mark with float + pulse + parallax */}
            <motion.div
                style={{ y: yLogo, opacity }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative"
            >
                <div className="logo-float">
                    <Image src={IMG_PATHS.logo_without_text} alt="Madrox Logo" width={250} height={250} />
                </div>
            </motion.div>

            {/* Wordmark — masked line-by-line reveal */}
            <motion.div
                style={{ y: yWord }}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="mt-10 text-center"
            >
                <div className="overflow-hidden">
                    <motion.h1
                        variants={lineVariants}
                        data-testid="hero-wordmark"
                        className="font-bold-h text-white text-[42px] sm:text-[64px] lg:text-[84px] leading-[0.95]"
                        style={{ letterSpacing: "0.14em" }}
                    >
                        MADROX VISUALS
                    </motion.h1>
                </div>
                <div className="overflow-hidden mt-5">
                    <motion.p
                        variants={lineVariants}
                        data-testid="hero-tagline"
                        className="font-ital text-white/70 text-lg sm:text-2xl"
                    >
                        Designed to Be Remembered
                    </motion.p>
                </div>
            </motion.div>

            {/* subtle scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
        <span className="font-sm text-[10px] uppercase text-white/50 tracking-[0.4em]">
          Scroll
        </span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-[color:var(--madrox-gold)] to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;