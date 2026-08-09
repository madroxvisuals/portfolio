export interface Post {
    src: string;
    categoryColor: string;
    labelColor: string;
    label: string;
    category: string;
    offset?: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    }
    devanagari?: string;
}

export interface GallerySection {
    id: string;
    chapter: string;
    title: string;
    subtitle: string;
    posts: Post[];
    captionLeft: string;
    captionRight: string;
    showWatermark?: boolean;
    showCategorySection?: boolean;
}


export type CardAspect = "portrait" | "square" | "default";
export type CardSize = "md" | "lg";

export const ASPECT_CLASSES: Record<CardAspect, string> = {
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    default: "aspect-[4/5]",
};