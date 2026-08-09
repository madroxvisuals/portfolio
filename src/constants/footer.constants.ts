import React from "react";

export const AURA_STYLE: React.CSSProperties = {
    background:
        "radial-gradient(700px 500px at 50% 55%, rgba(232,185,35,0.10), transparent 70%)",
};

export const GOLD_DOT_STYLE: React.CSSProperties = { background: "var(--madrox-gold)" };

export const HEADLINE_STYLE: React.CSSProperties = { letterSpacing: "-0.02em" };

export const VIEWPORT_ONCE = { once: true } as const;
export const VIEWPORT_ONCE_AMOUNT_15 = { once: true, amount: 0.15 } as const;

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const micronavMotion = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 0.8 },
};

export const letsCreateMotion = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 1.0, ease: EASE_OUT, delay: 0.1 },
};

export const headlineMotion = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE_AMOUNT_15,
    transition: { duration: 1.1, ease: EASE_OUT, delay: 0.2 },
};

export const contactRowMotion = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 0.9, delay: 0.4 },
};

export const inputStyle: React.CSSProperties = {
    width: "100%",
    marginTop: 10,
    background: "var(--mx-black)",
    color: "var(--mx-white)",
    border: "1px solid var(--mx-hairline)",
    borderRadius: 4,
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    padding: "12px 14px",
    outline: "none",
};