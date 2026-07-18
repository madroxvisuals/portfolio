import React, { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { MadroxLogo } from "./MadroxLogo";

/**
 * Final CTA / Contact footer with magnetic hover on CTA links,
 * italic "Let's Create" over a bold "Something Exceptional",
 * and clickable email/phone/instagram row.
 */

// ── Hoisted static objects (avoid re-allocating identical objects every render) ──
const AURA_STYLE: React.CSSProperties = {
    background:
        "radial-gradient(700px 500px at 50% 55%, rgba(232,185,35,0.10), transparent 70%)",
};

const GOLD_DOT_STYLE: React.CSSProperties = { background: "var(--madrox-gold)" };

const HEADLINE_STYLE: React.CSSProperties = { letterSpacing: "-0.02em" };

const VIEWPORT_ONCE = { once: true } as const;
const VIEWPORT_ONCE_AMOUNT_15 = { once: true, amount: 0.15 } as const;

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const micronavMotion = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 0.8 },
};

const letsCreateMotion = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 1.0, ease: EASE_OUT, delay: 0.1 },
};

const headlineMotion = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE_AMOUNT_15,
    transition: { duration: 1.1, ease: EASE_OUT, delay: 0.2 },
};

const contactRowMotion = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE,
    transition: { duration: 0.9, delay: 0.4 },
};

// ── Magnetic link ──

interface MagneticProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
}

const Magnetic: React.FC<MagneticProps> = ({ children, className = "", ...rest }) => {
    const ref = useRef<HTMLAnchorElement>(null);

    // useCallback so these handlers keep a stable identity across renders
    // instead of being recreated (and reattached) on every render.
    const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
    }, []);

    const onLeave = useCallback(() => {
        if (ref.current) ref.current.style.transform = "translate(0,0)";
    }, []);

    return (
        <a
            ref={ref}
            className={`inline-block transition-transform duration-300 ${className}`}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            {...rest}
        >
            {children}
        </a>
    );
};

export const CtaFooter: React.FC = React.memo(() => {
    return (
        <section
            id="contact"
            data-testid="cta-footer-section"
            className="relative py-32 sm:py-44 px-6 overflow-hidden"
        >
            {/* soft gold aura behind headline */}
            <div aria-hidden className="absolute inset-0 pointer-events-none" style={AURA_STYLE}/>

            <div className="relative max-w-[1200px] mx-auto text-center">
                {/* Top micro-nav row */}
                <motion.div
                    {...micronavMotion}
                    className="flex items-center justify-center gap-6 sm:gap-16 flex-wrap font-sm text-[10px] uppercase text-white/50 tracking-[0.42em]"
                    data-testid="cta-micronav"
                >
                    <span>Established 2023</span>
                    <span aria-hidden className="w-1.5 h-1.5 rounded-full" style={GOLD_DOT_STYLE}/>
                    <span>Premium Creative Brand</span>
                    <span aria-hidden className="w-1.5 h-1.5 rounded-full" style={GOLD_DOT_STYLE}/>
                    <span>Brand Profile</span>
                </motion.div>

                {/* Italic script line */}
                <motion.p
                    {...letsCreateMotion}
                    className="font-ital text-white/70 text-3xl sm:text-4xl mt-16"
                    data-testid="cta-lets-create"
                >
                    Let&apos;s Create
                </motion.p>

                {/* Bold headline */}
                <motion.h2
                    {...headlineMotion}
                    className="font-bold-h text-white text-5xl sm:text-7xl lg:text-[104px] leading-[0.95] mt-3"
                    style={HEADLINE_STYLE}
                    data-testid="cta-headline"
                >
                    Something Exceptional
                </motion.h2>

                {/* Contact row */}
                <motion.div
                    {...contactRowMotion}
                    className="mt-14 flex items-center justify-center flex-wrap gap-4 sm:gap-6 font-med text-white/80"
                    data-testid="cta-contact-row"
                >
                    <Magnetic
                        href="mailto:madroxvisuals@gmail.com"
                        className="text-sm sm:text-base hover:text-[color:var(--madrox-gold)]"
                        data-testid="cta-email"
                    >
                        madroxvisuals@gmail.com
                    </Magnetic>
                    <span className="text-white/25">|</span>
                    <Magnetic
                        href="tel:+919034428355"
                        className="text-sm sm:text-base hover:text-[color:var(--madrox-gold)]"
                        data-testid="cta-phone"
                    >
                        +91 9034428355
                    </Magnetic>
                    <span className="text-white/25">|</span>
                    <Magnetic
                        href="https://instagram.com/madrox_visuals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base hover:text-[color:var(--madrox-gold)]"
                        data-testid="cta-instagram"
                    >
                        Instagram : @madrox_visuals
                    </Magnetic>
                </motion.div>

                {/* Footer divider + logo */}
                <div className="mt-24 flex flex-col items-center gap-6">
                    <div className="h-[1px] w-40 hairline-gold opacity-60"/>
                    <MadroxLogo size={90} wordmark={false} testId="footer-logo"/>
                    <div className="font-sm text-[10px] uppercase text-white/40 tracking-[0.4em]">
                        © 2026 Designed by MADROX VISUALS
                    </div>
                </div>
            </div>
        </section>
    );
});
CtaFooter.displayName = "CtaFooter";

export default CtaFooter;