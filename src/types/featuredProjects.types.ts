export interface Post {
    img: string;
    accent: string;
    fg: string;
    label: string;
    sub: string;
    devanagari: string;
}

export interface GallerySection {
    id: string;
    chapter: string;
    title: string;
    subtitle: string;
    posts: Post[];
    showWatermark?: boolean;
    captionLeft: string;
    captionRight: string;
}


export type CardAspect = "portrait" | "square" | "default";
export type CardSize = "md" | "lg";

export const ASPECT_CLASSES: Record<CardAspect, string> = {
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    default: "aspect-[4/5]",
};