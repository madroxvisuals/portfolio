import React from "react";

interface FieldProps {
    label: string;
    name: string;
    children: React.ReactNode;
}
export default function Field({ label, name, children }: FieldProps) {
    return (
        <label
            htmlFor={name}
            style={{
                display: "block",
                textAlign: "left",
                marginTop: 16,
            }}
        >
        <span
            style={{
                color: "var(--mx-white-muted)",
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
            }}
        >
            {label}
        </span>
            {children}
        </label>
    );
}