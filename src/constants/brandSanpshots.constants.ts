import React from "react";

export interface Point {
    x: number;
    y: number;
}

export const NODES = [
    "Established: 2024",
    "Creative Led Approach",
    "Multi-Disciplinary Expertise",
    "Based in Delhi NCR",
    "End-to-End Creative Solutions",
    "Flexible Workflow",
    "Premium Design Approach",
    "Fast Communication",
] as const;

export const LAYOUT_CONSTRAINTS = {
    W: 1400,
    H: 380,
    MARGIN_X: 80,
    Y_HI: 120,
    Y_LO: 260,
    GAP: (1400 - 80 * 2) / (NODES.length - 1),
} as const;



// Precomputed once at module load since NODES is static — no need to
// recompute this on every render/mount.
export const POINTS: Point[] = NODES.map((_, i) => ({
    x: LAYOUT_CONSTRAINTS.MARGIN_X + LAYOUT_CONSTRAINTS.GAP * i,
    y: i % 2 === 0 ? LAYOUT_CONSTRAINTS.Y_HI : LAYOUT_CONSTRAINTS.Y_LO,
}));

export const PATH_D = POINTS.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(
    " "
);

// ── Hoisted animation configs (avoid re-creating objects every render) ──
export const VIEWPORT_ONCE = { once: true } as const;
export const VIEWPORT_ONCE_AMOUNT = { once: true, amount: 0.3 } as const;

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const eyebrowMotion = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 0.7 },
};

export const headingMotion = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 0.9, ease: EASE_OUT },
};

export const subtextMotion = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 0.9, delay: 0.15 },
};

export const PATH_TRANSITION = { duration: 2.4, ease: EASE_OUT };

export const DOT_DIAMETER_STYLE: React.CSSProperties = {
    background: "var(--madrox-gold)",
    boxShadow: "0 0 12px var(--madrox-gold-glow)",
};

// ── Precomputed per-node label positions (percentages), since points are static ──
export const LABEL_POSITIONS = POINTS.map((p, i) => {
    const above = i % 2 === 0;
    return {
        leftPct: (p.x / LAYOUT_CONSTRAINTS.W) * 100,
        topPct: above ? ((p.y - 62) / LAYOUT_CONSTRAINTS.H) * 100 : ((p.y + 22) / LAYOUT_CONSTRAINTS.H) * 100,
        above,
    };
});
