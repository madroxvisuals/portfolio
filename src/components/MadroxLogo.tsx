import React from "react";

/**
 * Madrox Visuals custom mark:
 *  - Twin gold mountain peaks (form both "M" and "W")
 *  - Fountain pen nib centered above, hood arc on top
 *  - Small white snow-cap on the left peak
 *  - Wordmark "MADROX VISUALS" below (uppercase, wide tracking)
 *
 * Props:
 *   size — pixel height for the whole lock-up (default 300)
 *   wordmark — show/hide the "MADROX VISUALS" text (default true)
 *   glow — apply gold outer-glow filter (default true)
 */
export const MadroxLogo = ({ size = 300, wordmark = true, glow = true, testId = "madrox-logo" }) => {
  const w = size;
  const h = wordmark ? size * 1.15 : size * 0.92;

  return (
    <svg
      data-testid={testId}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 345"
      width={w}
      height={h}
      role="img"
      aria-label="Madrox Visuals"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2C94A" />
          <stop offset="55%" stopColor="#E8B923" />
          <stop offset="100%" stopColor="#C9971E" />
        </linearGradient>
        {glow && (
          <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/* Pen hood arc */}
      <path
        d="M 118 32 Q 150 12 182 32"
        stroke="#0A0A0A"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Pen nib silhouette (black), centered above the peaks */}
      <g fill="#0A0A0A">
        <path d="M 150 38 L 176 118 L 150 138 L 124 118 Z" />
        {/* nib slit */}
        <line x1="150" y1="70" x2="150" y2="120" stroke="#E8B923" strokeWidth="2" />
        {/* nib hole */}
        <circle cx="150" cy="72" r="4" fill="#E8B923" />
      </g>

      {/* Twin gold mountain peaks — form both M and W */}
      <g filter={glow ? "url(#goldGlow)" : undefined}>
        <path
          d="M 20 250 L 100 90 L 150 190 L 200 90 L 280 250 Z"
          fill="url(#goldGrad)"
        />
        {/* dark valley cut between the peaks for the M/W read */}
        <path
          d="M 100 90 L 150 190 L 200 90 L 175 90 L 150 140 L 125 90 Z"
          fill="#0A0A0A"
          opacity="0.55"
        />
      </g>

      {/* White snow-cap detail — nested on left peak */}
      <g fill="#FFFFFF">
        <path d="M 82 122 L 100 92 L 118 122 L 108 118 L 100 128 L 92 118 Z" />
        <path d="M 92 132 L 100 118 L 108 132 Z" opacity="0.85" />
      </g>

      {/* Wordmark */}
      {wordmark && (
        <g>
          <text
            x="150"
            y="298"
            textAnchor="middle"
            fill="#FFFFFF"
            style={{
              fontFamily:
                "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 700,
              letterSpacing: "0.42em",
              fontSize: 22,
            }}
          >
            MADROX
          </text>
          <text
            x="150"
            y="326"
            textAnchor="middle"
            fill="#FFFFFF"
            style={{
              fontFamily:
                "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 500,
              letterSpacing: "0.55em",
              fontSize: 13,
              opacity: 0.85,
            }}
          >
            VISUALS
          </text>
        </g>
      )}
    </svg>
  );
};

export default MadroxLogo;
