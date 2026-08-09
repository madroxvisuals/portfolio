"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import MobileNode from "@/app/_sections/BrandSnapshots/_components/MobileNode";
import DesktopNodeLabel from "@/app/_sections/BrandSnapshots/_components/DesktopNodeLabel";
import DesktopNodeMarker from "@/app/_sections/BrandSnapshots/_components/DesktopNodeMaker";
import {
    eyebrowMotion,
    headingMotion,
    LAYOUT_CONSTRAINTS,
    NODES,
    PATH_D,
    PATH_TRANSITION,
    POINTS,
    subtextMotion,
} from "@/constants/brandSanpshots.constants";


/**
 * Zigzag Brand Snapshots timeline.
 *   - SVG path drawn with stroke-dashoffset reveal as it enters view
 *   - Gold dots pop with scale bounce, staggered along the path
 */
export default function BrandSnapshots() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.25 });

    // POINTS/PATH_D are static (NODES never changes at runtime), so they're
    // computed once at module scope above rather than recomputed every render.
    return (
        <section
            id="snapshots"
            data-testid="brand-snapshots-section"
            className="relative py-28 sm:py-36 px-6"
        >
            <div className="max-w-350 mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        {...eyebrowMotion}
                        className="font-sm text-[11px] uppercase tracking-[0.42em] text-(--madrox-gold)"
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
                    <svg viewBox={`0 0 ${LAYOUT_CONSTRAINTS.W} ${LAYOUT_CONSTRAINTS.H}`}
                         className="w-full h-auto" aria-hidden>
                        <motion.path
                            d={PATH_D}
                            stroke="rgba(255,255,255,0.35)"
                            strokeWidth="1.4"
                            fill="none"
                            strokeLinecap="round"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                show: { pathLength: 1, opacity: 1 },
                            }}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                            transition={PATH_TRANSITION}
                        />
                        {POINTS.map((p, i) => (
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
                    <div className="absolute left-3 top-0 bottom-0 w-px bg-white/15"/>
                    {NODES.map((label, i) => (
                        <MobileNode key={i} label={label} index={i}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
