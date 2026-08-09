import React from "react";
import { motion } from "motion/react";
import { EASE_OUT, Point } from "@/constants/brandSanpshots.constants";

interface DesktopNodeMarkerProps {
    point: Point;
    index: number;
    inView: boolean;
}

/** Gold dot marker for a single timeline node (desktop SVG). */
export default function DesktopNodeMarker({ point, index, inView }: DesktopNodeMarkerProps) {
    return (
        <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: [0, 1.25, 1], opacity: 1 } : {}}
            transition={{
                duration: 0.55,
                delay: 0.35 + index * 0.22,
                ease: EASE_OUT,
            }}
            style={{ transformOrigin: `${point.x}px ${point.y}px` }}
        >
            <circle cx={point.x} cy={point.y} r="16" fill="rgba(232,185,35,0.14)"/>
            <circle cx={point.x} cy={point.y} r="6" fill="#E8B923"/>
        </motion.g>
    )
}