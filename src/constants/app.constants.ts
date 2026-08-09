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
        captionLeft: "Selected Works",
        captionRight: "Graphic Designs",
    },
    {
        id: "video",
        chapter: "07 · Featured Projects 2",
        title: "Video Editing / Motion Graphics",
        subtitle:
            "Cinematic edits and title-treatment reels — duotone stills stand in for the moving frame.",
        posts: VIDEO_POSTS,
        captionLeft: "Video Editing",
        captionRight: "Motion Graphics",
        showCategorySection: false,
        hasVideos: true,
    },
    {
        id: "brand",
        chapter: "08 · Featured Projects 3",
        title: "Brand Identity",
        subtitle:
            "Feed-scroll stoppers — cultural, editorial, and performance-driven creative for brands.",
        posts: BRAND_IDENTITY_POSTS,
        captionLeft: "Selected Works",
        captionRight: "Brand Identity",
        showCategorySection: false
    },
];

// export const spotlight: Record<SpotlightKey, SpotlightData> = {
//     matcha: {
//         src: "radial-gradient(120% 100% at 30% 20%, #6bbf6e 0%, #2c5b3a 45%, #0f2418 100%)",
//         accent: "#c9f3b5",
//         fg: "#f4ffe8",
//         label: "Cadillac Deville",
//         sub: "Cadillac Deville · Commercial Design",
//         
//     },
//     nike: {
//         grad: "radial-gradient(120% 100% at 70% 30%, #3aa9ff 0%, #0e3a75 45%, #05122b 100%)",
//         accent: "#dceeff",
//         fg: "#ffffff",
//         label: "Cartier",
//         sub: "Cartier · Ad Campaign",
//         
//     },
//     bellavita: {
//         grad: "radial-gradient(120% 100% at 40% 40%, #d94ea6 0%, #6b1a53 45%, #24081c 100%)",
//         accent: "#ffd0ea",
//         fg: "#fff2fa",
//         label: "Khamma Ghani",
//         sub: "Khamma Ghani · Cultural Artwork",
//         
//     },
//     cartier: {
//         grad: "radial-gradient(120% 100% at 50% 60%, #262421 0%, #16130e 60%, #060402 100%)",
//         accent: "#e8b923",
//         fg: "#ede4c8",
//         label: "Morbagh Livings",
//         sub: "Morbagh Livings · Decor Brand",
//         
//     },
//     chai: {
//         grad: "radial-gradient(120% 100% at 30% 70%, #d2a02b 0%, #7a5410 55%, #241800 100%)",
//         accent: "#0a0a0a",
//         fg: "#fff6d6",
//         label: "Rovena",
//         sub: "Rovena · Streetwear Brand",
//         
//     },
//     meme: {
//         grad: "radial-gradient(120% 100% at 60% 30%, #ff4b4b 0%, #7a0f14 55%, #240404 100%)",
//         accent: "#ffe0e0",
//         fg: "#fff",
//         label: "Video Editor Chahiye",
//         sub: "Promo · Social Post",
//         devanagari: "एडिटर चाहिए",
//     },
//     smonic: {
//         grad: "linear-gradient(135deg, #6b3fff 0%, #ff8b3d 100%)",
//         accent: "#fff",
//         fg: "#fff",
//         label: "Smonic",
//         sub: "Brand · Discount Pair",
//         
//     },
//     kala: {
//         grad: "radial-gradient(120% 100% at 50% 40%, #2b6bd9 0%, #10306b 55%, #050e24 100%)",
//         accent: "#e8b923",
//         fg: "#e6efff",
//         label: "कला का संसार",
//         sub: "Cultural · Poster",
//         devanagari: "कला का संसार",
//     },
//     memorial: {
//         grad: "radial-gradient(120% 100% at 40% 50%, #2fb5b0 0%, #0e5a58 55%, #04211f 100%)",
//         accent: "#d3f5f2",
//         fg: "#f0fbfa",
//         label: "Every Step Shouldn't Hurt",
//         sub: "Memorial · Ortho Ad",
//         
//     },
//     madroxVid: {
//         grad: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
//         accent: "#e8b923",
//         fg: "#fff",
//         label: "MADROX",
//         sub: "Retro · Cinematic B&W",
//         
//     },
//     jordan: {
//         grad: "linear-gradient(180deg, #262626 0%, #0a0a0a 100%)",
//         accent: "#e8b923",
//         fg: "#fff",
//         label: "JORDAN",
//         sub: "Sneaker · Bold Type",
//         
//     },
//     raj: {
//         grad: "linear-gradient(180deg, #4a3a10 0%, #120b00 100%)",
//         accent: "#e8b923",
//         fg: "#f6e8b0",
//         label: "RAJASTHANI",
//         sub: "Hawa Mahal · Duotone",
//         
//     },
//     ve: {
//         grad: "linear-gradient(180deg, #1f1f1f 0%, #060606 100%)",
//         accent: "#e8b923",
//         fg: "#fff",
//         label: "VIDEO EDITOR",
//         sub: "Portrait · Black & White",
//         
//     },
//     mind: {
//         grad: "linear-gradient(180deg, #2a2a2a 0%, #0a0a0a 100%)",
//         accent: "#e8b923",
//         fg: "#fff",
//         label: "WHAT'S IN MY MIND",
//         sub: "Brain · Concept",
//         
//     },
// };