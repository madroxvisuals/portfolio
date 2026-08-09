interface CaptionRowProps {
    left: string;
    center: string;
    right: string;
    testId?: string;
}

export default function CaptionRow({ left, center, right, testId }: CaptionRowProps) {
    return (
        <div
            className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 items-center font-sm text-[10px] uppercase tracking-[0.4em] text-white/50"
            data-testid={testId}
        >
            <div className="text-left">{left}</div>
            <div className="text-center">{center}</div>
            <div className="text-right">{right}</div>
        </div>
    );
}

