import { useId } from "react";

type LogoProps = {
  className?: string;
  showText?: boolean;
  variant?: "onDark" | "onLight";
};

export default function Logo({
  className = "",
  showText = true,
  variant = "onDark",
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const aId = `atlasA-${uid}`;
  const globeId = `atlasGlobe-${uid}`;
  const onLight = variant === "onLight";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0"
        role="img"
        aria-label="ATLAS İSTANBUL Teknoloji logosu"
      >
        <defs>
          <linearGradient id={aId} x1="0" y1="0" x2="1" y2="1">
            {onLight ? (
              <>
                <stop offset="0%" stopColor="#16294f" />
                <stop offset="100%" stopColor="#234071" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#eef3fc" />
                <stop offset="100%" stopColor="#b9c6dd" />
              </>
            )}
          </linearGradient>
          <linearGradient id={globeId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5e0" />
            <stop offset="100%" stopColor="#2b6cb0" />
          </linearGradient>
        </defs>

        {/* Stylized "A" */}
        <path d={`M14 54 L29 12 L35 12 L23 54 Z`} fill={`url(#${aId})`} />
        <path d="M20 40 L33 40 L31 47 L18 47 Z" fill={`url(#${aId})`} />

        {/* Globe */}
        <g
          stroke={`url(#${globeId})`}
          strokeWidth="2.1"
          fill="none"
          strokeLinecap="round"
        >
          <circle cx="42" cy="28" r="16" />
          <ellipse cx="42" cy="28" rx="7" ry="16" />
          <path d="M27 22 H57" />
          <path d="M27 34 H57" />
        </g>
      </svg>

      {showText && (
        <div className="leading-tight">
          <div
            className={`font-sans text-lg font-extrabold tracking-tight ${
              onLight ? "text-navy-900" : "text-white"
            }`}
          >
            ATLAS{" "}
            <span className={onLight ? "text-accent-500" : "text-accent-300"}>
              İSTANBUL
            </span>
          </div>
          <div
            className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
              onLight ? "text-slate-500" : "text-ink-400"
            }`}
          >
            Teknoloji ve İnovasyon Hizmetleri
          </div>
        </div>
      )}
    </div>
  );
}
