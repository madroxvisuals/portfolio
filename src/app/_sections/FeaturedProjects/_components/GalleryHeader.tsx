interface GalleryHeaderProps {
    chapter: string;
    title: string;
    subtitle?: string;
    testId?: string;
}

export default function GalleryHeader({ chapter, title, subtitle, testId }: GalleryHeaderProps) {
    return (
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
                <div
                    className="font-sm text-[11px] uppercase tracking-[0.42em] text-(--madrox-gold)">
                    {chapter}
                </div>
                <h3 className="font-bold-h text-white text-3xl sm:text-4xl mt-2"
                    data-testid={testId}>
                    {title}
                </h3>
            </div>
            {
                subtitle && (
                    <div className="font-ital text-white/50 text-sm max-w-md">
                        {subtitle}
                    </div>
                )
            }
        </div>
    );
}