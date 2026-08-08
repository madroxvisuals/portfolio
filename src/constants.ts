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

export const IMG_PATHS = {
    logo_without_text: "/logo_without_text.png",
    logo_with_text: "/logo_with_text.png"
} as const;