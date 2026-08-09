import type { CSSProperties } from "react";
import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

export const staggerContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

export const VIEWPORT_ONCE = { once: true, amount: 0.3 } as const;

export const PORTRAIT_BG_STYLE: CSSProperties = {
    background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 60%, #141414 100%)",
};

export const DIVIDER_DOT_STYLE: CSSProperties = {
    background: "var(--madrox-gold)",
    boxShadow: "0 0 18px var(--madrox-gold-glow)",
};

export const GOLD_TEXT_STYLE: CSSProperties = { color: "var(--madrox-gold)" };

export const WORDMARK_TITLE_STYLE: CSSProperties = { letterSpacing: "0.38em" };
export const WORDMARK_SUB_STYLE: CSSProperties = { letterSpacing: "0.45em" };