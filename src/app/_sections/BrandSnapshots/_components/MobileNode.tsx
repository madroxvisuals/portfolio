"use client";

import React from "react";
import { motion } from "motion/react";
import { DOT_DIAMETER_STYLE, VIEWPORT_ONCE_AMOUNT } from "@/constants/brandSanpshots.constants";

interface MobileNodeProps {
    label: string;
    index: number;
}
export default function MobileNode({ label, index }: MobileNodeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE_AMOUNT}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="relative py-4"
            data-testid={`snapshot-mobile-${index}`}
        >
    <span
        className="absolute -left-[26px] top-6 w-3 h-3 rounded-full"
        style={DOT_DIAMETER_STYLE}
    />
            <span className="font-ital text-white text-lg">{label}</span>
        </motion.div>
    )
};