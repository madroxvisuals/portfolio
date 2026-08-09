import { motion } from "framer-motion";
import { fadeUp } from "@/constants/about.constants";

export interface SectionIntroProps {
    eyebrow: string;
    heading: string;
    copy: string;
    eyebrowTestId: string;
    headingTestId: string;
    copyTestId: string;
}

export default function SectionIntro({ eyebrow, heading, copy, eyebrowTestId, headingTestId, copyTestId }: SectionIntroProps){
    return (
        <>
            <motion.span
                variants={fadeUp}
                className="font-sm text-[11px] uppercase tracking-[0.42em] text-[color:var(--madrox-gold)]"
                data-testid={eyebrowTestId}
            >
                {eyebrow}
            </motion.span>
            <motion.h2
                variants={fadeUp}
                className="font-bold-h text-white text-4xl sm:text-5xl mt-4"
                data-testid={headingTestId}
            >
                {heading}
            </motion.h2>
            <motion.p
                variants={fadeUp}
                data-testid={copyTestId}
                className="font-med text-white/70 text-base sm:text-lg leading-[1.7] mt-6 max-w-xl"
            >
                {copy}
            </motion.p>
        </>
    )
};
