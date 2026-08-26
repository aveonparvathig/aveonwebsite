/**
 * Brand-matched analytics illustration for the About section.
 * Pure inline SVG (no raster assets) in the Aveon palette — blue #1d6ff2,
 * orange #f97316, navy #101a33 — sized to fill its card via a fixed viewBox.
 * Mirrors the crisp dashboard language of HeroDashboards for a cohesive look.
 */

// Upward growth trend for the area chart (normalized 0..1).
const TREND = [0.24, 0.4, 0.31, 0.55, 0.47, 0.7, 0.6, 0.85, 1];
const PX0 = 92;
const PX1 = 508;
const PY_BASE = 336;
const PY_TOP = 248;

function point(i: number) {
  const x = PX0 + (i / (TREND.length - 1)) * (PX1 - PX0);
  const y = PY_BASE - TREND[i] * (PY_BASE - PY_TOP);
  return [x, y] as const;
}

export default function AboutIllustration({ className }: { className?: string }) {
  const pts = TREND.map((_, i) => point(i));
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `M${PX0} ${PY_BASE} ${pts.map((p) => `L${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ")} L${PX1} ${PY_BASE} Z`;
  const peak = pts[pts.length - 1];

  return (
    <svg
      viewBox="0 0 600 410"
      className={className}
      role="img"
      aria-label="Business analytics dashboard showing steady growth"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="aboutArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d6ff2" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#1d6ff2" stopOpacity="0" />
        </linearGradient>
        <filter id="aboutCardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#101a33" floodOpacity="0.14" />
        </filter>
        <filter id="aboutFloatShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#101a33" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Decorative accents (behind the card) */}
      <circle cx="548" cy="42" r="40" fill="#f97316" opacity="0.14" />
      <circle cx="556" cy="34" r="6" fill="#f97316" />
      <rect x="16" y="300" width="64" height="64" rx="16" fill="#1d6ff2" opacity="0.1" transform="rotate(-12 48 332)" />
      <g fill="#1d6ff2" opacity="0.18">
        <circle cx="500" cy="330" r="3" />
        <circle cx="516" cy="330" r="3" />
        <circle cx="532" cy="330" r="3" />
        <circle cx="500" cy="346" r="3" />
        <circle cx="516" cy="346" r="3" />
        <circle cx="532" cy="346" r="3" />
      </g>

      {/* Main dashboard card */}
      <g filter="url(#aboutCardShadow)">
        <rect x="70" y="44" width="460" height="316" rx="24" fill="#ffffff" stroke="#eef2f7" />
      </g>

      {/* Header */}
      <circle cx="94" cy="70" r="4.5" fill="#ff5f57" />
      <circle cx="108" cy="70" r="4.5" fill="#febc2e" />
      <circle cx="122" cy="70" r="4.5" fill="#28c840" />
      <text x="140" y="75" fontSize="13" fontWeight="800" fill="#101a33" letterSpacing="-0.2">Business Analytics</text>
      <rect x="446" y="60" width="66" height="20" rx="10" fill="#ecfdf3" />
      <path d="M457 74l4-5 4 5z" fill="#067647" />
      <text x="470" y="74" fontSize="10.5" fontWeight="800" fill="#067647">24%</text>
      <line x1="70" y1="92" x2="530" y2="92" stroke="#eef2f7" />

      {/* Headline metric */}
      <text x="92" y="122" fontSize="10" fontWeight="800" fill="#8090a8" letterSpacing="1">EFFICIENCY GAIN</text>
      <text x="92" y="158" fontSize="34" fontWeight="800" fill="#101a33" letterSpacing="-1">42%</text>
      <rect x="182" y="134" width="92" height="24" rx="12" fill="#eef5ff" />
      <path d="M197 150l4-6 4 6z" fill="#1d6ff2" />
      <text x="208" y="150" fontSize="11" fontWeight="800" fill="#153fd6">+12% YoY</text>
      <text x="380" y="150" fontSize="11" fontWeight="600" fill="#8090a8">vs. last year</text>

      {/* Area chart */}
      {[0, 1, 2].map((g) => {
        const y = PY_TOP + (g / 2) * (PY_BASE - PY_TOP);
        return <line key={g} x1={PX0} y1={y} x2={PX1} y2={y} stroke="#f0f3f8" strokeWidth="1" />;
      })}
      <path d={area} fill="url(#aboutArea)" />
      <path d={line} fill="none" stroke="#1d6ff2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="2.6" fill="#ffffff" stroke="#1d6ff2" strokeWidth="1.6" />
      ))}
      <circle cx={peak[0]} cy={peak[1]} r="5.5" fill="#f97316" stroke="#ffffff" strokeWidth="2.4" />
      {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
        <text key={q} x={PX0 + ((i + 0.5) / 4) * (PX1 - PX0)} y="352" fontSize="9" fontWeight="600" fill="#9aa7bd" textAnchor="middle">
          {q}
        </text>
      ))}

      {/* Floating card — Revenue */}
      <g className="motion-safe:animate-floaty">
        <g filter="url(#aboutFloatShadow)">
          <rect x="24" y="94" width="156" height="72" rx="18" fill="#ffffff" stroke="#eef2f7" />
        </g>
        <text x="40" y="118" fontSize="9" fontWeight="800" fill="#8090a8" letterSpacing="0.8">REVENUE</text>
        <text x="40" y="140" fontSize="18" fontWeight="800" fill="#101a33">+24%</text>
        <g>
          <rect x="112" y="140" width="8" height="14" rx="2" fill="#d9e8ff" />
          <rect x="124" y="132" width="8" height="22" rx="2" fill="#bcd7ff" />
          <rect x="136" y="136" width="8" height="18" rx="2" fill="#1d6ff2" />
          <rect x="148" y="124" width="8" height="30" rx="2" fill="#f97316" />
        </g>
      </g>

      {/* Floating card — Active users */}
      <g className="motion-safe:animate-floaty-slow">
        <g filter="url(#aboutFloatShadow)">
          <rect x="428" y="296" width="154" height="76" rx="18" fill="#ffffff" stroke="#eef2f7" />
        </g>
        <text x="444" y="320" fontSize="9" fontWeight="800" fill="#8090a8" letterSpacing="0.8">ACTIVE USERS</text>
        <text x="444" y="344" fontSize="18" fontWeight="800" fill="#101a33">12.4k</text>
        <path
          d="M444 360 L462 354 L480 357 L498 348 L516 351 L534 340 L552 344 L568 334"
          fill="none"
          stroke="#1d6ff2"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="568" cy="334" r="4" fill="#f97316" stroke="#ffffff" strokeWidth="2" />
      </g>
    </svg>
  );
}
