import { GallerySection, Post } from "@/types/featuredProjects.types";

export const TOAST_MSG = {
    CONTACT: {
        SUCCESS: {
            heading: "Message sent successfully!",
            description: "I'll get back to you within 24 hours.",
        },
        ERROR: {
            heading: "Failed to send message.",
            description: "Please try again later or email me directly!",
        }
    }
} as const;

export const RESOURCE_PATHS = {

    // Profile Photo
    profile: "/img/profile.jpeg",

    // Logos
    logo_without_text: "/logo_without_text.png",
    logo_with_text: "/logo_with_text.png",

    // Graphics Posts Images
    cadillac: "/img/graphics_design/cadillac_deville_commercial.jpg",
    cartier: "/img/graphics_design/cartier_ad_campaign.jpg",
    khamma: "/img/graphics_design/khamma_ghani_cultural_artwork.jpg",
    morbagh: "/img/graphics_design/morbagh_livings_decor_brand.jpg",
    rovena: "/img/graphics_design/rovena_streetwear_brand.jpg",

    // Brand Identity Posts Images
    id_1: "/img/brand_identity/identity_1.jpg",
    id_2: "/img/brand_identity/identity_2.jpg",
    id_3: "/img/brand_identity/identity_3.jpg",
    id_4: "/img/brand_identity/identity_4.png",
    id_5: "/img/brand_identity/identity_5.png",

    // Video Posts
    sample_1: "/videos/sample_1.mp4",
    sample_2: "/videos/sample_2.mp4",
    sample_3: "/videos/sample_3.mp4",
    sample_4: "/videos/sample_4.mp4",
} as const;

export const GRAPHICS_POSTS: Post[] = [
    {
        src: RESOURCE_PATHS.cadillac,
        categoryColor: "#FED22B",
        labelColor: "#f4ffe8",
        label: "Cadillac Deville",
        category: "Cadillac Deville · Commercial Design",
        offset: {
            top:"top"
        }
    },
    {
        src: RESOURCE_PATHS.cartier,
        categoryColor: "#F4E8D8",
        labelColor: "#ffffff",
        label: "Cartier",
        category: "Cartier · Ad Campaign",
        offset: {
            top:"top"
        }
    },
    {
        src: RESOURCE_PATHS.khamma,
        categoryColor: "#EA8949",
        labelColor: "#fff2fa",
        label: "Khamma Ghani",
        category: "Khamma Ghani · Cultural Artwork",
        offset: {
            top:"top"
        }
    },
    {
        src: RESOURCE_PATHS.morbagh,
        categoryColor: "#E4C7A3",
        labelColor: "#ede4c8",
        label: "Morbagh Livings",
        category: "Morbagh Livings · Decor Brand",
        offset: {
            top:"top"
        }
    },
    {
        src: RESOURCE_PATHS.rovena,
        categoryColor: "#FFF9BB",
        labelColor: "#fff6d6",
        label: "Rovena",
        category: "Rovena · Streetwear Brand",
        offset: {
            top:"top"
        }
    },
]

export const BRAND_IDENTITY_POSTS: Post[] = [
    {
        src: RESOURCE_PATHS.id_1,
        categoryColor: "#c9f3b5",
        labelColor: "#f4ffe8",
        label: "Cadillac Deville",
        category: "Cadillac Deville · Commercial Design",
    },
    {
        src: RESOURCE_PATHS.id_2,
        categoryColor: "#dceeff",
        labelColor: "#ffffff",
        label: "Cartier",
        category: "Cartier · Ad Campaign",
    },
    {
        src: RESOURCE_PATHS.id_3,
        categoryColor: "#ffd0ea",
        labelColor: "#fff2fa",
        label: "Khamma Ghani",
        category: "Khamma Ghani · Cultural Artwork",
    },
    {
        src: RESOURCE_PATHS.id_4,
        categoryColor: "#e8b923",
        labelColor: "#ede4c8",
        label: "Morbagh Livings",
        category: "Morbagh Livings · Decor Brand",
    },
    {
        src: RESOURCE_PATHS.id_5,
        categoryColor: "#0a0a0a",
        labelColor: "#fff6d6",
        label: "Rovena",
        category: "Rovena · Streetwear Brand",
    },
]

export const VIDEO_POSTS: Post[] = [
    {
        src: RESOURCE_PATHS.sample_1,
        categoryColor: "#dceeff",
        labelColor: "#ffffff",
        label: "Cartier",
        category: "Cartier · Ad Campaign",
    },
    {
        src: RESOURCE_PATHS.sample_2,
        categoryColor: "#ffd0ea",
        labelColor: "#fff2fa",
        label: "Khamma Ghani",
        category: "Khamma Ghani · Cultural Artwork",
    },
    {
        src: RESOURCE_PATHS.sample_3,
        categoryColor: "#e8b923",
        labelColor: "#ede4c8",
        label: "Morbagh Livings",
        category: "Morbagh Livings · Decor Brand",
    },
    {
        src: RESOURCE_PATHS.sample_4,
        categoryColor: "#0a0a0a",
        labelColor: "#fff6d6",
        label: "Rovena",
        category: "Rovena · Streetwear Brand",
    },
]


export const GALLERIES: GallerySection[] = [
    {
        id: "graphic",
        chapter: "06 · Featured Projects 1",
        title: "Graphic Designs",
        subtitle:
            "A selection of poster and product design work — colour-forward, mood-driven, print-ready.",
        posts: GRAPHICS_POSTS,
    },
    {
        id: "video",
        chapter: "07 · Featured Projects 2",
        title: "Video Editing / Motion Graphics",
        subtitle:
            "Cinematic edits and title-treatment reels — duotone stills stand in for the moving frame.",
        posts: VIDEO_POSTS,
        showCategorySection: false,
        hasVideos: true,
    },
    {
        id: "brand",
        chapter: "08 · Featured Projects 3",
        title: "Brand Identity",
        posts: BRAND_IDENTITY_POSTS,
        showCategorySection: false
    },
];
