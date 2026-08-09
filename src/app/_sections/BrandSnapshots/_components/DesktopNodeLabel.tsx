"use client";

import { motion } from "motion/react";
import { EASE_OUT, LABEL_POSITIONS } from "@/constants/brandSanpshots.constants";

interface DesktopNodeLabelProps {
    label: string;
    index: number;
    inView: boolean;
}

/** Text label positioned above/below a timeline node (desktop). */
export default function DesktopNodeLabel({ label, index, inView }: DesktopNodeLabelProps) {
    const { leftPct, topPct, above } = LABEL_POSITIONS[index];
    return (
        <motion.div
            initial={{ opacity: 0, y: above ? -8 : 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                delay: 0.5 + index * 0.22,
                ease: EASE_OUT,
            }}
            className="absolute -translate-x-1/2 text-center"
            style={{ left: `${leftPct}%`, top: `${topPct}%` }}
            data-testid={`snapshot-node-${index}`}
        >
                <span
                    className="font-ital text-white/85 text-[15px] lg:text-[17px] whitespace-nowrap">
                    {label}
                </span>
        </motion.div>
    );
};