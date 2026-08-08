"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { IMG_PATHS } from "@/constants";
import Image from "next/image";

interface Review {
    name: string;
    role: string;
    rating: number;
    quote: string;
}

const REVIEWS: Review[] = [
    {
        name: "Rahul Sharma",
        role: "Marketing Expert",
        rating: 4.5,
        quote:
            `
            The edit came out really clean and exactly matched the reference I shared. 
            Communication was smooth and delivery was on time. Overall great experience 
            working together`,
    },
    {
        name: "Ananya Mittal",
        role: "Dentist in Sonipat",
        rating: 5,
        quote:
            `
            The final design was exactly what I was looking for. It had a clean, premium feel, 
            and every small detail was well thought out. I requested a few changes during the 
            process, and they were made without any delay or confusion. Really appreciate the 
            professionalism and the effort put into the work.
            `,
    },
    {
        name: "Karan Malhotra",
        role: "Owner Cafe Saka",
        rating: 4,
        quote:
            `
            We wanted our café videos to have a cinematic yet natural feel, and that's exactly 
            what we got. The entire process was well managed, and every revision was handled 
            patiently. The final videos truly reflected our brand, and we've received great 
            feedback from our customers as well.
            `,
    },
    {
        name: "Arjun Verma",
        role: "Digital Marketer",
        rating: 4.5,
        quote:
            `
            The motion graphics looked modern and engaging. Definitely looking forward to working 
            together again.
            `,
    },
];

type StarState = "full" | "half" | "empty";
const TOTAL_STARS = 5;

/** Builds a fixed-length array of star states for a given rating, e.g. 4.5 -> full,full,full,full,half */
const buildStarStates = (value: number): StarState[] => {
    const full = Math.floor(value);
    const hasHalf = value - full >= 0.5;
    const states: StarState[] = [
        ...Array<StarState>(full).fill("full"),
        ...(hasHalf ? (["half"] as StarState[]) : []),
    ];
    while (states.length < TOTAL_STARS) states.push("empty");
    return states;
};

interface StarsProps {
    value: number;
    delayBase?: number;
}

const Stars: React.FC<StarsProps> = ({ value, delayBase = 0 }) => {
    const starStates = buildStarStates(value);

    return (
        <div className="flex gap-1" aria-label={`${value} out of 5 stars`}>
            {starStates.map((state, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: delayBase + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {state === "full" ? (
                        <Star size={16} fill="#E8B923" strokeWidth={0} />
                    ) : state === "half" ? (
                        <StarHalf size={16} fill="#E8B923" strokeWidth={0} />
                    ) : (
                        <Star size={16} strokeWidth={1.2} color="rgba(255,255,255,0.25)" />
                    )}
                </motion.span>
            ))}
        </div>
    );
};

export const Testimonials: React.FC = () => {
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative py-28 sm:py-36 px-6"
        >
            <div className="max-w-[1400px] mx-auto relative">
                <div className="absolute top-0 right-4 hidden md:block opacity-90">
                    <Image src={IMG_PATHS.logo_without_text} alt="Madrox Logo" width={80} height={80} />
                </div>

                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="font-sm text-[11px] uppercase tracking-[0.42em] text-[color:var(--madrox-gold)]"
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
                            className="glass p-7 relative flex flex-col gap-5 min-h-[360px]"
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
                            >
                “
              </span>

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

export default Testimonials;