"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const NODES = [
    "Established: 2023",
    "30+ Happy Clients",
    "100+ Creative Projects",
    "Based in Delhi NCR",
    "End-to-End Creative Solutions",
    "Flexible Workflow",
    "Premium Design Approach",
    "Fast Communication",
] as const;

// ── Layout constants (never change, hoisted out of render) ──
const W = 1400;
const H = 380;
const MARGIN_X = 80;
const Y_HI = 120;
const Y_LO = 260;
const GAP = (W - MARGIN_X * 2) / (NODES.length - 1);

interface Point {
    x: number;
    y: number;
}

// Precomputed once at module load since NODES is static — no need to
// recompute this on every render/mount.
const POINTS: Point[] = NODES.map((_, i) => ({
    x: MARGIN_X + GAP * i,
    y: i % 2 === 0 ? Y_HI : Y_LO,
}));

const PATH_D = POINTS.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(
    " "
);

// ── Hoisted animation configs (avoid re-creating objects every render) ──
const VIEWPORT_ONCE = { once: true } as const;
const VIEWPORT_ONCE_AMOUNT = { once: true, amount: 0.3 } as const;

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const eyebrowMotion = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 0.7 },
};

const headingMotion = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 0.9, ease: EASE_OUT },
};

const subtextMotion = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 0.9, delay: 0.15 },
};

const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1 },
};

const PATH_TRANSITION = { duration: 2.4, ease: EASE_OUT };

const DOT_DIAMETER_STYLE: React.CSSProperties = {
    background: "var(--madrox-gold)",
    boxShadow: "0 0 12px var(--madrox-gold-glow)",
};

// ── Precomputed per-node label positions (percentages), since points are static ──
const LABEL_POSITIONS = POINTS.map((p, i) => {
    const above = i % 2 === 0;
    return {
        leftPct: (p.x / W) * 100,
        topPct: above ? ((p.y - 62) / H) * 100 : ((p.y + 22) / H) * 100,
        above,
    };
});

// ── Subcomponents ──

interface DesktopNodeMarkerProps {
    point: Point;
    index: number;
    inView: boolean;
}

/** Gold dot marker for a single timeline node (desktop SVG). */
const DesktopNodeMarker: React.FC<DesktopNodeMarkerProps> = React.memo(
    ({ point, index, inView }) => (
        <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: [0, 1.25, 1], opacity: 1 } : {}}
            transition={{
                duration: 0.55,
                delay: 0.35 + index * 0.22,
                ease: EASE_OUT,
            }}
            style={{ transformOrigin: `${point.x}px ${point.y}px` }}
        >
            <circle cx={point.x} cy={point.y} r="16" fill="rgba(232,185,35,0.14)"/>
            <circle cx={point.x} cy={point.y} r="6" fill="#E8B923"/>
        </motion.g>
    )
);
DesktopNodeMarker.displayName = "DesktopNodeMarker";

interface DesktopNodeLabelProps {
    label: string;
    index: number;
    inView: boolean;
}

/** Text label positioned above/below a timeline node (desktop). */
const DesktopNodeLabel: React.FC<DesktopNodeLabelProps> = React.memo(
    ({ label, index, inView }) => {
        const { leftPct, topPct, above } = LABEL_POSITIONS[index];
        return (
            <motion.div
                initial={{ opacity: 0, y: above ? -8 : 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    duration: 0.7,
                    delay: 0.5 + index * 0.22,
                    ease: EASE_OUT,
                }}
                className="absolute -translate-x-1/2 text-center"
                style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                data-testid={`snapshot-node-${index}`}
            >
                <span
                    className="font-ital text-white/85 text-[15px] lg:text-[17px] whitespace-nowrap">
                    {label}
                </span>
            </motion.div>
        );
    }
);
DesktopNodeLabel.displayName = "DesktopNodeLabel";

interface MobileNodeProps {
    label: string;
    index: number;
}

/** Single stacked row in the mobile timeline. */
const MobileNode: React.FC<MobileNodeProps> = React.memo(({ label, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT_ONCE_AMOUNT}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        className="relative py-4"
        data-testid={`snapshot-mobile-${index}`}
    >
    <span
        className="absolute -left-[26px] top-6 w-3 h-3 rounded-full"
        style={DOT_DIAMETER_STYLE}
    />
        <span className="font-ital text-white text-lg">{label}</span>
    </motion.div>
));
MobileNode.displayName = "MobileNode";

/**
 * Zigzag Brand Snapshots timeline.
 *   - SVG path drawn with stroke-dashoffset reveal as it enters view
 *   - Gold dots pop with scale bounce, staggered along the path
 */
export const BrandSnapshots: React.FC = React.memo(() => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.25 });

    // POINTS/PATH_D are static (NODES never changes at runtime), so they're
    // computed once at module scope above rather than recomputed every render.
    const points = POINTS;
    const pathD = PATH_D;

    return (
        <section
            id="snapshots"
            data-testid="brand-snapshots-section"
            className="relative py-28 sm:py-36 px-6"
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        {...eyebrowMotion}
                        className="font-sm text-[11px] uppercase tracking-[0.42em] text-[color:var(--madrox-gold)]"
                        data-testid="snapshots-eyebrow"
                    >
                        03 — Snapshots
                    </motion.span>
                    <motion.h2
                        {...headingMotion}
                        className="font-bold-h text-white text-4xl sm:text-5xl lg:text-6xl mt-4"
                        data-testid="snapshots-heading"
                    >
                        Brand Snapshots
                    </motion.h2>
                    <motion.p
                        {...subtextMotion}
                        className="font-med text-white/65 text-base sm:text-lg mt-6 max-w-3xl mx-auto leading-[1.7]"
                        data-testid="snapshots-subtext"
                    >
                        Trusted by businesses and creators across multiple industries,
                        Madrox Visuals delivers premium creative solutions that combine
                        aesthetics with purpose.
                    </motion.p>
                </div>

                {/* Desktop timeline (SVG) */}
                <div ref={ref} className="relative hidden md:block">
                    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-hidden>
                        <motion.path
                            d={pathD}
                            stroke="rgba(255,255,255,0.35)"
                            strokeWidth="1.4"
                            fill="none"
                            strokeLinecap="round"
                            variants={pathVariants}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                            transition={PATH_TRANSITION}
                        />
                        {points.map((p, i) => (
                            <DesktopNodeMarker key={i} point={p} index={i} inView={inView}/>
                        ))}
                    </svg>

                    {/* Labels absolutely positioned over the SVG */}
                    <div className="absolute inset-0">
                        {NODES.map((label, i) => (
                            <DesktopNodeLabel key={i} label={label} index={i} inView={inView}/>
                        ))}
                    </div>
                </div>

                {/* Mobile stacked timeline */}
                <div className="md:hidden relative pl-8">
                    <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-white/15"/>
                    {NODES.map((label, i) => (
                        <MobileNode key={i} label={label} index={i}/>
                    ))}
                </div>
            </div>
        </section>
    );
});
BrandSnapshots.displayName = "BrandSnapshots";

export default BrandSnapshots;