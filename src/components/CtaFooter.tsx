"use client";

import React, { useCallback, useRef, useActionState } from "react";
import { toast } from "sonner";
import { tryCatch } from "@/utils";
import { TOAST_MSG } from "@/constants";
import { MadroxLogo } from "./MadroxLogo";
import axios, { AxiosResponse } from "axios";
import { motion, type Variants } from "framer-motion";
import { ContactFormState, CONTACT_FORM_FIELDS } from "@/types";

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

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: EASE_OUT },
    },
};

interface FieldProps {
    label: string;
    name: string;
    children: React.ReactNode;
}

const formInitialState: ContactFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const inputStyle: React.CSSProperties = {
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
    const handleSubmit = async (prev: ContactFormState, formData: FormData): Promise<ContactFormState> => {
        const payload: ContactFormState = {
            name: String(formData.get(CONTACT_FORM_FIELDS.NAME) ?? ""),
            email: String(formData.get(CONTACT_FORM_FIELDS.EMAIL) ?? ""),
            subject: String(formData.get(CONTACT_FORM_FIELDS.SUBJECT) ?? ""),
            message: String(formData.get(CONTACT_FORM_FIELDS.MESSAGE) ?? ""),
        };

        const [res] = await tryCatch<AxiosResponse>(
            () => axios.post("/api/contact", payload)
        );

        if (res && res.status === 200) {
            toast.success(TOAST_MSG.CONTACT.SUCCESS.heading, {
                description: TOAST_MSG.CONTACT.SUCCESS.description,
            });
            return formInitialState;

        } else {
            toast.error(TOAST_MSG.CONTACT.ERROR.heading, {
                description: TOAST_MSG.CONTACT.ERROR.description,
            });
            return payload;
        }
    };

    const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(handleSubmit, formInitialState);

    return (
        <section
            id="contact"
            data-testid="cta-footer-section"
            className="relative py-32 sm:py-44 px-6 overflow-hidden"
        >
            {/* soft gold aura behind headline */}
            <div aria-hidden className="absolute inset-0 pointer-events-none" style={AURA_STYLE}/>

            <div className="relative max-w-300 mx-auto text-center">
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
                        className="text-sm sm:text-base hover:text-(--madrox-gold)"
                        data-testid="cta-email"
                    >
                        madroxvisuals@gmail.com
                    </Magnetic>
                    <span className="text-white/25">|</span>
                    <Magnetic
                        href="tel:+919034428355"
                        className="text-sm sm:text-base hover:text-(--madrox-gold)"
                        data-testid="cta-phone"
                    >
                        +91 9034428355
                    </Magnetic>
                    <span className="text-white/25">|</span>
                    <Magnetic
                        href="https://instagram.com/madrox_visuals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base hover:text-(--madrox-gold)"
                        data-testid="cta-instagram"
                    >
                        Instagram : @madrox_visuals
                    </Magnetic>
                </motion.div>

                {/* Contact form */}
                <motion.form
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    action={formAction}
                    key={JSON.stringify(state)}
                    data-testid="contact-form"
                    style={{
                        marginTop: 70,
                        maxWidth: 720,
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: "32px 32px 28px",
                        background: "var(--mx-black-soft)",
                        border: "1px solid var(--mx-hairline)",
                        borderRadius: 6,
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 18,
                        }}
                        className="cf-grid"
                    >
                        <Field label="Name" name="name">
                            <input
                                required
                                id="name"
                                name="name"
                                type="text"
                                defaultValue={state.name}
                                data-testid="contact-input-name"
                                style={inputStyle}
                                placeholder="Your name"
                            />
                        </Field>
                        <Field label="Email" name="email">
                            <input
                                required
                                id="email"
                                name="email"
                                type="email"
                                defaultValue={state.email}
                                data-testid="contact-input-email"
                                style={inputStyle}
                                placeholder="you@company.com"
                            />
                        </Field>
                    </div>
                    <Field label="Subject" name="subject">
                        <input
                            required
                            id="subject"
                            name="subject"
                            type="text"
                            defaultValue={state.subject}
                            data-testid="contact-input-subject"
                            style={inputStyle}
                            placeholder="Graphic / Video / Motion / Social — anything"
                        />
                    </Field>
                    <Field label="Message" name="message">
                        <textarea
                            required
                            id="message"
                            name="message"
                            rows={4}
                            defaultValue={state.message}
                            data-testid="contact-input-message"
                            style={{ ...inputStyle, resize: "vertical" }}
                            placeholder="Tell us about your brand or project…"
                        />
                    </Field>

                    <div
                        style={{
                            marginTop: 22,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 12,
                        }}
                    >
                        <div
                            style={{
                                minHeight: 20,
                                fontSize: 12,
                                fontFamily: "Inter, sans-serif",
                                color: "var(--mx-white-muted)",
                                letterSpacing: "0.05em",
                            }}
                            data-testid="contact-status"
                        >
                            {isPending ? "Sending..." : "Share your requirements and we will get back within 24 hours."}
                        </div>
                        <button
                            type="submit"
                            className="btn-ghost-gold"
                            disabled={isPending}
                            data-testid="contact-submit"
                            style={{
                                opacity: isPending ? 0.6 : 1,
                            }}
                        >
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: 999,
                                    background: "var(--mx-gold)",
                                }}
                            />
                            {isPending ? "Sending…" : "Send Enquiry"}
                        </button>
                    </div>
                </motion.form>

                {/* Footer divider + logo */}
                <div className="mt-24 flex flex-col items-center gap-6">
                    <div className="h-px w-40 hairline-gold opacity-60"/>
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

const Field: React.FC<FieldProps> = ({ label, name, children }) => (
    <label
        htmlFor={name}
        style={{
            display: "block",
            textAlign: "left",
            marginTop: 16,
        }}
    >
        <span
            style={{
                color: "var(--mx-white-muted)",
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
            }}
        >
            {label}
        </span>
        {children}
    </label>
);