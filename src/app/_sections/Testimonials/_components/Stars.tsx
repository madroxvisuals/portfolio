import { Star, StarHalf } from "lucide-react";
import { motion } from "motion/react";
import { StarState } from "@/types/testimonials.types";

interface StarsProps {
    value: number;
    delayBase?: number;
}
export default function Stars({ value, delayBase = 0 }: StarsProps) {
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

/** Builds a fixed-length array of star states for a given rating, e.g. 4.5 -> full,full,full,full,half */
const buildStarStates = (value: number): StarState[] => {
    const full = Math.floor(value);
    const hasHalf = value - full >= 0.5;
    const states: StarState[] = [
        ...Array<StarState>(full).fill("full"),
        ...(hasHalf ? (["half"] as StarState[]) : []),
    ];
    while (states.length < 5) states.push("empty");
    return states;
};