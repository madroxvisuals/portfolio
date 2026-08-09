"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { RESOURCE_PATHS } from "@/constants/app.constants";
import { REVIEWS } from "@/constants/testimonials.constants";
import Stars from "@/app/_sections/Testimonials/_components/Stars";

export default function Testimonials(){
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative py-28 sm:py-36 px-6"
        >
            <div className="max-w-350 mx-auto relative">
                <div className="absolute top-0 right-4 hidden md:block opacity-90">
                    <Image src={RESOURCE_PATHS.logo_without_text} alt="Madrox Logo" width={80} height={80} />
                </div>

                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="font-sm text-[11px] uppercase tracking-[0.42em] text-(--madrox-gold)"
                        data-testid="testi-eyebrow"
                    >
                        10 — Client Voices
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="font-bold-h text-white text-4xl sm:text-5xl lg:text-6xl mt-4"
                        data-testid="testi-heading"
                    >
                        Testimonials
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                        className="font-med text-white/65 text-base sm:text-lg mt-6 max-w-xl leading-[1.7]"
                        data-testid="testi-subtext"
                    >
                        Real experiences from people who trusted us.
                    </motion.p>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {REVIEWS.map((r, i) => (
                        <motion.article
                            key={r.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.85,
                                delay: i * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="glass p-7 relative flex flex-col gap-5 min-h-90"
                            data-testid={`testi-card-${i}`}
                        >
                            {/* decorative quotation mark */}
                            <span
                                aria-hidden
                                className="absolute top-4 right-5 font-bold-h leading-none"
                                style={{
                                    color: "var(--madrox-gold)",
                                    opacity: 0.35,
                                    fontSize: 88,
                                }}
                            >“</span>

                            <div className="mt-2">
                                <div className="font-bold-h text-white text-lg" data-testid={`testi-name-${i}`}>
                                    {r.name}
                                </div>
                                <div
                                    className="font-sm text-white/55 text-[10px] uppercase tracking-[0.32em] mt-1"
                                    data-testid={`testi-role-${i}`}
                                >
                                    {r.role}
                                </div>
                            </div>

                            <Stars value={r.rating} delayBase={i * 0.05} />

                            <p
                                className="font-med text-white/75 text-[14px] leading-[1.7] flex-1"
                                data-testid={`testi-quote-${i}`}
                            >
                                {r.quote}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
