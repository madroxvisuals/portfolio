"use client";

import { GALLERIES } from "@/constants/app.constants";
import CaptionRow from "@/app/_sections/FeaturedProjects/_components/CaptionRow";
import ProjectCard from "@/app/_sections/FeaturedProjects/_components/ProjectCard";
import GalleryHeader from "@/app/_sections/FeaturedProjects/_components/GalleryHeader";

const GRID_COLS_BY_COUNT: Record<number, string> = {
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
};

export default function FeaturedProjects() {
    return (
        <section id="work" data-testid="featured-projects-section"
                 className="relative py-28 sm:py-36 px-6">
            <div className="max-w-350 mx-auto">
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
}
