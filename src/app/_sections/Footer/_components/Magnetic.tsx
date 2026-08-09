"use client";

import React, { useCallback, useRef } from "react";

interface MagneticProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Magnetic({ children, className = "", ...rest }: MagneticProps) {
    const ref = useRef<HTMLAnchorElement>(null);

    // useCallback so these handlers keep a stable identity across renders
    // instead of being recreated (and reattached) on every render.
    const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
    }, []);

    const onLeave = useCallback(() => {
        if (ref.current) ref.current.style.transform = "translate(0,0)";
    }, []);

    return (
        <a
            ref={ref}
            className={`inline-block transition-transform duration-300 ${className}`}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            {...rest}
        >
            {children}
        </a>
    );
};
