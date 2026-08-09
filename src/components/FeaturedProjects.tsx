"use client";

import React from "react";
import { motion } from "framer-motion";
import { GALLERIES } from "@/constants";
import {
    ASPECT_CLASSES,
    CardAspect,
    CardSize, Post,
} from "@/types/featuredProjects.types";

/**
 * Featured Projects — three curated sub-galleries.
 * Real project photography will be dropped in later; for now each card
 * is a deliberately-designed typographic placeholder tuned to the
 * described colour mood, framed with glass + spotlight treatment.
 */

interface ProjectCardProps {
    data: Post;
    aspect?: CardAspect;
    size?: CardSize;
    showWatermark?: boolean;
    testId?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     data,
                                                     aspect = "portrait",
                                                     size = "md",
                                                     showWatermark = false,
                                                     testId,
                                                 }) => {
    const aspectClass = ASPECT_CLASSES[aspect];
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
            <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.06]"
                style={{ 
                    backgroundImage: `url(${data.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
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
        </motion.figure>
    );
};

interface GalleryHeaderProps {
    chapter: string;
    title: string;
    subtitle: string;
    testId?: string;
}

const GalleryHeader: React.FC<GalleryHeaderProps> = ({ chapter, title, subtitle, testId }) => (
    <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
        <div>
            <div
                className="font-sm text-[11px] uppercase tracking-[0.42em] text-[color:var(--madrox-gold)]">
                {chapter}
            </div>
            <h3 className="font-bold-h text-white text-3xl sm:text-4xl mt-2" data-testid={testId}>
                {title}
            </h3>
        </div>
        <div className="font-ital text-white/50 text-sm max-w-md">{subtitle}</div>
    </div>
);

interface CaptionRowProps {
    left: string;
    center: string;
    right: string;
    testId?: string;
}

const CaptionRow: React.FC<CaptionRowProps> = ({ left, center, right, testId }) => (
    <div
        className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 items-center font-sm text-[10px] uppercase tracking-[0.4em] text-white/50"
        data-testid={testId}
    >
        <div className="text-left">{left}</div>
        <div className="text-center">{center}</div>
        <div className="text-right">{right}</div>
    </div>
);

/** Data-driven gallery definitions — avoids repeating near-identical JSX per card. */



const GRID_COLS_BY_COUNT: Record<number, string> = {
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
};

export const FeaturedProjects: React.FC = () => {
    return (
        <section id="work" data-testid="featured-projects-section"
                 className="relative py-28 sm:py-36 px-6">
            <div className="max-w-[1400px] mx-auto">
                {GALLERIES.map((gallery, i) => (
                    <div
                        key={gallery.id}
                        className={i === 0 ? undefined : "mt-28"}
                        data-testid={`gallery-${gallery.id}`}
                    >
                        <GalleryHeader
                            chapter={gallery.chapter}
                            title={gallery.title}
                            subtitle={gallery.subtitle}
                            testId={`gallery-${gallery.id}-title`}
                        />
                        <div
                            className={`grid ${GRID_COLS_BY_COUNT[gallery.posts.length] ?? GRID_COLS_BY_COUNT[5]} gap-4 sm:gap-5`}
                        >
                            {Array.from({ length: gallery.posts.length }).map((_, index) => {
                                const galleryData = gallery.posts[index]
                                return (
                                    <ProjectCard
                                        key={index}
                                        data={galleryData}
                                        showWatermark={gallery.showWatermark}
                                        testId={`proj-${index}`}
                                    />)
                            })}
                        </div>
                        <CaptionRow
                            left={gallery.captionLeft}
                            center="© 2026 Designed by MADROX VISUALS"
                            right={gallery.captionRight}
                            testId={`caption-${gallery.id}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;