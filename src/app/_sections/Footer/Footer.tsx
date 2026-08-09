"use client";

import { useActionState } from "react";
import Image from "next/image";
import { tryCatch } from "@/utils";
import { motion } from "motion/react";
import { toast, Toaster } from "sonner";
import { MoveRight } from 'lucide-react';
import axios, { AxiosResponse } from "axios";
import Field from "@/app/_sections/Footer/_components/Field";
import Magnetic from "@/app/_sections/Footer/_components/Magnetic";
import { RESOURCE_PATHS, TOAST_MSG } from "@/constants/app.constants";
import { CONTACT_FORM_FIELDS, ContactFormState } from "@/types/app.types";
import {
    AURA_STYLE,
    contactRowMotion,
    EASE_OUT,
    GOLD_DOT_STYLE,
    HEADLINE_STYLE,
    headlineMotion,
    inputStyle,
    letsCreateMotion,
    micronavMotion
} from "@/constants/footer.constants";

const formInitialState: ContactFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function Footer() {
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
            <Toaster theme="dark" position="top-right" richColors/>
            {/* soft gold aura behind headline */}
            <div aria-hidden className="absolute inset-0 pointer-events-none" style={AURA_STYLE}/>

            <div className="relative max-w-300 mx-auto text-center">
                {/* Top micro-nav row */}
                <motion.div
                    {...micronavMotion}
                    className="flex items-center justify-center gap-6 sm:gap-16 flex-wrap font-sm text-[10px] uppercase text-white/50 tracking-[0.42em]"
                    data-testid="cta-micronav"
                >
                    <span>Established 2024</span>
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
                    variants={{
                        hidden: { opacity: 0, y: 24 },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, ease: EASE_OUT },
                        },
                    }}
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
                                suppressHydrationWarning
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
                                suppressHydrationWarning
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
                            suppressHydrationWarning
                        />
                    </Field>
                    <Field label="Message" name="message">
                        <textarea
                            required
                            id="message"
                            name="message"
                            rows={6}
                            defaultValue={state.message}
                            data-testid="contact-input-message"
                            className="resize-none"
                            style={{ ...inputStyle }}
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
                            suppressHydrationWarning
                        >
                            {isPending ? "Sending…" : "Send Enquiry"}
                            <MoveRight style={{ color: "var(--madrox-gold)" }} size={18} />
                        </button>
                    </div>
                </motion.form>

                {/* Footer divider + logo */}
                <div className="mt-24 flex flex-col items-center gap-6">
                    <div className="h-px w-40 hairline-gold opacity-60"/>
                    <Image src={RESOURCE_PATHS.logo_without_text} alt="Madrox Logo" width={80} height={80} />
                    <div className="font-sm text-[10px] uppercase text-white/40 tracking-[0.4em]">
                        © 2026 Designed by Vivek Dahiya
                    </div>
                </div>
            </div>
        </section>
    );
};
