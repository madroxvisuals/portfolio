import React from "react";

import { motion } from "motion/react";
import { ASPECT_CLASSES, CardAspect, CardSize, Post } from "@/types/featuredProjects.types";

interface ProjectCardProps {
    data: Post;
    aspect?: CardAspect;
    size?: CardSize;
    showWatermark?: boolean;
    showCategorySection?: boolean;
    isVideo?: boolean;
    testId?: string;
}

export default function ProjectCard({
                                        data,
                                        aspect = "portrait",
                                        showWatermark = false,
                                        showCategorySection = false,
                                        isVideo = false,
                                        testId,
                                    }: ProjectCardProps) {
    const aspectClass = ASPECT_CLASSES[aspect];

    // Build position string from offset (e.g., "center top", "20% 30%")
    const horizontalPos = data.offset?.left ?? data.offset?.right ?? "center";
    const verticalPos = data.offset?.top ?? data.offset?.bottom ?? "center";
    const position = `${horizontalPos} ${verticalPos}`;

    return (
        <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className={`group relative ${aspectClass} rounded-2xl overflow-hidden glass p-0`}
            data-testid={testId}
        >
            {isVideo ? (
                <video
                    className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.06]"
                    style={{ objectFit: "cover", objectPosition: position }}
                    src={data.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            ) : (
                <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.06]"
                    style={{
                        backgroundImage: `url(${data.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: position,
                    }}
                />
            )}
            {/* Spotlight ring */}
            <div
                aria-hidden
                className="absolute inset-0 opacity-70 mix-blend-screen"
                style={{
                    background:
                        "radial-gradient(60% 45% at 50% 40%, rgba(255,255,255,0.14) 0%, transparent 70%)",
                }}
            />
            {/* Frame ticks */}
            <span className="absolute top-3 left-3 w-4 h-4 border-l border-t border-white/40"/>
            <span className="absolute top-3 right-3 w-4 h-4 border-r border-t border-white/40"/>
            <span className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-white/40"/>
            <span className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-white/40"/>

            {/* Watermark for videos */}
            {showWatermark && (
                <div
                    className="absolute top-4 left-1/2 -translate-x-1/2 font-sm text-[9px] uppercase tracking-[0.4em] text-white/70">
                    MADROX
                </div>
            )}

            {/* Caption slide-up */}
            {showCategorySection && (
                <figcaption
                    className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 60%)",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    <div className="font-sm text-[10px] uppercase tracking-[0.34em]"
                         style={{ color: data.categoryColor }}>
                        {data.category}
                    </div>
                    <div className="font-bold-h text-white text-sm mt-1">{data.label}</div>
                </figcaption>
            )}
        </motion.figure>
    );
};