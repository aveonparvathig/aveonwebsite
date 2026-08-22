/**
 * Branded recreation of the CMS (College Management System) dashboard,
 * used as the College ERP hero visual. Pure inline SVG — scales as a unit and
 * stays crisp at any size — with scoped, reduced-motion-safe animations:
 * sparklines and the analytics line draw in, bars grow, donut/gauge/radial
 * sweep in, cards rise, and the stat icons gently float.
 */

const NAV = [
  { label: "Dashboard", d: "M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2zM8 8h4v4H8z" },
  { label: "Academic", d: "M7 2 1 5l6 3 6-3zM3 7v3c0 1 8 1 8 0V7" },
  { label: "Accounts", d: "M2 3h10v8H2zM2 6h10M5 9h3" },
  { label: "Admission", d: "M7 2a2 2 0 110 4 2 2 0 010-4M2 12c0-3 10-3 10 0" },
  { label: "Asset", d: "M2 5 7 2l5 3v6l-5 3-5-3zM7 8v4M2 5l5 3 5-3" },
  { label: "Exam", d: "M3 2h6l2 2v8H3zM5 6h4M5 9h4" },
  { label: "Feedback", d: "M2 3h10v6H6l-3 3V9H2z" },
  { label: "Fees", d: "M7 1v12M4 4h4a1.5 1.5 0 010 3H5a1.5 1.5 0 000 3h4" },
];

// icon glyphs drawn in a ~0..12 box, stroked in the card's colour
const ICONS: Record<string, string> = {
  users: "M4 10c0-2 3-2 3 0M5.5 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3M8 10c0-1.6 3-1.8 3 0M9 4.8a1.4 1.4 0 100 2.8",
  check: "M2 6.5 5 9.5 10.5 3",
  cross: "M3.5 3.5 9 9M9 3.5 3.5 9",
  ban: "M6 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9M3 3l6 6",
  minus: "M2.5 6.5h7",
};

const KPIS = [
  { label: "Total", value: "4,595", tint: "#1d6ff2", soft: "#dbeafe", icon: "users", spark: [0.35, 0.55, 0.4, 0.62, 0.5, 0.72, 0.66] },
  { label: "Attendance", value: "96%", tint: "#f59e0b", soft: "#fef3c7", icon: "check", spark: [0.6, 0.5, 0.66, 0.55, 0.72, 0.64, 0.8] },
  { label: "Not Qualified", value: "2", tint: "#ef4444", soft: "#fee2e2", icon: "cross", spark: [0.3, 0.45, 0.35, 0.5, 0.42, 0.58, 0.5] },
  { label: "Qualified", value: "4,593", tint: "#2563eb", soft: "#dbeafe", icon: "check", spark: [0.4, 0.5, 0.45, 0.6, 0.55, 0.7, 0.78] },
  { label: "Suspended", value: "0", tint: "#f43f5e", soft: "#ffe4e6", icon: "ban", spark: [0.5, 0.4, 0.52, 0.44, 0.5, 0.46, 0.5] },
  { label: "Withdraw", value: "1", tint: "#64748b", soft: "#e2e8f0", icon: "minus", spark: [0.45, 0.5, 0.42, 0.5, 0.48, 0.52, 0.5] },
];

const WAVE = [0.7, 0.42, 0.24, 0.3, 0.18, 0.34, 0.96, 0.36, 0.55, 0.82, 0.44, 0.6];
const DEPTS = ["AIDS", "AIML", "AUTO", "ACT", "CIVIL", "MCA", "CSE", "CVS", "EEE", "ECE", "VLSI", "MECH"];

function sparkPath(vals: number[], x: number, y: number, w: number, h: number) {
  return vals
    .map((v, i) => `${i ? "L" : "M"}${(x + (i / (vals.length - 1)) * w).toFixed(1)} ${(y + h - v * h).toFixed(1)}`)
    .join(" ");
}

export default function CollegeDashboardMockup() {
  // analytics plot
  const px0 = 398,
    px1 = 676,
    py0 = 168,
    py1 = 366;
  const pts = WAVE.map((v, i) => [px0 + (i / (WAVE.length - 1)) * (px1 - px0), py1 - v * (py1 - py0)] as const);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `M${px0} ${py1} ${pts.map((p) => `L${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ")} L${px1} ${py1} Z`;

  return (
    <svg
      viewBox="0 0 700 430"
      className="block h-auto w-full"
      role="img"
      aria-label="College Management System dashboard showing student KPIs, departmental analytics, result status and fees summary."
    >
      <style>{`
        @keyframes cms-rise { from { opacity:0; transform: translateY(9px); } to { opacity:1; transform: none; } }
        @keyframes cms-drawv { from { stroke-dashoffset: var(--l,100); } to { stroke-dashoffset: 0; } }
        @keyframes cms-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes cms-pop { 0% { opacity:0; transform: scale(.55); } 60% { transform: scale(1.08); } 100% { opacity:1; transform: scale(1); } }
        @keyframes cms-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-1.6px); } }
        .cms-card { animation: cms-rise .55s ease-out both; }
        .cms-draw { animation: cms-drawv 1.4s ease-out both; }
        .cms-bar  { transform-box: fill-box; transform-origin: left center; transform: scaleX(0); animation: cms-grow 1s cubic-bezier(.2,.8,.2,1) both; }
        .cms-pop  { transform-box: fill-box; transform-origin: center; animation: cms-pop .7s ease-out both; }
        .cms-float{ transform-box: fill-box; transform-origin: center; animation: cms-float 3.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .cms-card,.cms-draw,.cms-bar,.cms-pop,.cms-float { animation: none !important; stroke-dashoffset: 0 !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>

      <defs>
        <linearGradient id="cms-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f7bff" />
          <stop offset="100%" stopColor="#123fce" />
        </linearGradient>
        <linearGradient id="cms-wave" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cms-lineg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ef6c00" />
        </linearGradient>
      </defs>

      <rect width="700" height="430" fill="#eef2f9" />

      {/* ── top bar ── */}
      <rect width="700" height="36" fill="#ffffff" />
      <line x1="0" y1="36" x2="700" y2="36" stroke="#e8ecf6" />
      <text x="16" y="24" fontSize="14" fontWeight="800" fill="#1d6ff2" letterSpacing="0.5">CMS</text>
      <rect x="64" y="9" width="70" height="18" rx="5" fill="#ffffff" stroke="#dfe5f0" />
      <text x="99" y="21.5" fontSize="8.5" fontWeight="600" fill="#38538b" textAnchor="middle">10:51 AM</text>
      <rect x="262" y="8" width="240" height="20" rx="10" fill="#f2f5fb" stroke="#e6ebf4" />
      <circle cx="276" cy="18" r="3.4" fill="none" stroke="#9aa7bd" strokeWidth="1.4" />
      <text x="288" y="21.5" fontSize="8.5" fill="#9aa7bd">Menu Search…</text>
      <rect x="512" y="8" width="20" height="20" rx="6" fill="#1d6ff2" />
      <path d="M522 12l1.5 3 3 .3-2.2 2 .7 3-2.9-1.6-2.9 1.6.7-3-2.2-2 3-.3z" fill="#ffffff" />
      <text x="632" y="16" fontSize="8" fontWeight="700" fill="#2a3a5f" textAnchor="end">Selladurai P</text>
      <text x="632" y="25.5" fontSize="6" fill="#9aa7bd" textAnchor="end">SITE ADMIN</text>
      <circle cx="650" cy="18" r="10" fill="#d9e8ff" />
      <circle cx="650" cy="14.5" r="3.2" fill="#1d6ff2" />
      <path d="M643.5 24.5a6.5 5.5 0 0113 0z" fill="#1d6ff2" />

      {/* ── sidebar ── */}
      <rect x="0" y="36" width="84" height="394" fill="url(#cms-side)" />
      {NAV.map((item, i) => {
        const y = 50 + i * 44;
        const active = i === 0;
        return (
          <g key={item.label}>
            {active && <rect x="10" y={y - 5} width="64" height="38" rx="10" fill="#ffffff" />}
            <g className={active ? "cms-float" : undefined} transform={`translate(${42 - 6.5} ${y + 1})`}>
              <path
                d={item.d}
                fill="none"
                stroke={active ? "#1d6ff2" : "#eaf1ff"}
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <text
              x="42"
              y={y + 24}
              fontSize="7.5"
              fontWeight={active ? 800 : 500}
              fill={active ? "#1d6ff2" : "#dbe7ff"}
              textAnchor="middle"
            >
              {item.label}
            </text>
          </g>
        );
      })}

      {/* ── main canvas ── */}
      <rect x="84" y="36" width="616" height="394" fill="#eef2f9" />

      {/* filter row */}
      <text x="96" y="57" fontSize="9.5" fontWeight="700" fill="#2a3a5f">Exam</text>
      {["Institution: MCET", "AY 2025–26", "Exam: CCET-I"].map((t, i) => {
        const x = 138 + i * 100;
        return (
          <g key={t}>
            <rect x={x} y={47} width="94" height="15" rx="7.5" fill="#ffffff" stroke="#e2e8f2" />
            <text x={x + 47} y={57.5} fontSize="7.5" fill="#38538b" textAnchor="middle">
              {t}
            </text>
          </g>
        );
      })}

      {/* ── 6 KPI cards ── */}
      {KPIS.map((k, i) => {
        const x = 96 + i * 100;
        const y = 70;
        const w = 92;
        const h = 66;
        return (
          <g key={k.label} className="cms-card" style={{ animationDelay: `${(i * 0.08).toFixed(2)}s` }}>
            <rect x={x} y={y} width={w} height={h} rx="10" fill="#ffffff" stroke="#e9edf5" />
            <text x={x + 11} y={y + 17} fontSize="6.6" fontWeight="700" fill="#8090a8" letterSpacing="0.2">
              {k.label.toUpperCase()}
            </text>
            <text x={x + 11} y={y + 35} fontSize="15" fontWeight="800" fill="#101a33">
              {k.value}
            </text>
            <g className="cms-float" style={{ animationDelay: `${(i * 0.25).toFixed(2)}s` }} transform={`translate(${x + w - 25} ${y + 8})`}>
              <rect width="16" height="16" rx="5" fill={k.soft} />
              <g transform="translate(2 2)">
                <path d={ICONS[k.icon]} fill="none" stroke={k.tint} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <path
              className="cms-draw"
              style={{ ["--l" as string]: 100, animationDelay: `${(0.3 + i * 0.08).toFixed(2)}s` }}
              d={sparkPath(k.spark, x + 11, y + 44, w - 22, 15)}
              pathLength={100}
              strokeDasharray="100"
              fill="none"
              stroke={k.tint}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        );
      })}

      {/* ── Pass Rate radial ── */}
      <g className="cms-card" style={{ animationDelay: "0.5s" }}>
        <rect x="96" y="146" width="130" height="112" rx="12" fill="#ffffff" stroke="#e9edf5" />
        <text x="110" y="167" fontSize="8.5" fontWeight="700" fill="#8090a8">PASS RATE</text>
        <circle cx="161" cy="212" r="30" fill="none" stroke="#eef1f7" strokeWidth="8" />
        <circle
          className="cms-draw"
          style={{ ["--l" as string]: 92, animationDelay: "0.7s" }}
          cx="161"
          cy="212"
          r="30"
          fill="none"
          stroke="#16a34a"
          strokeWidth="8"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="92 100"
          transform="rotate(-90 161 212)"
        />
        <text x="161" y="216" fontSize="15" fontWeight="800" fill="#101a33" textAnchor="middle">92%</text>
      </g>

      {/* ── Arrear gauge ── */}
      <g className="cms-card" style={{ animationDelay: "0.58s" }}>
        <rect x="234" y="146" width="138" height="112" rx="12" fill="#ffffff" stroke="#e9edf5" />
        <text x="248" y="167" fontSize="8.5" fontWeight="700" fill="#8090a8">ARREAR ANALYSIS</text>
        <path d="M269 224a34 34 0 0168 0" fill="none" stroke="#eef1f7" strokeWidth="8" strokeLinecap="round" />
        <path
          className="cms-draw"
          style={{ ["--l" as string]: 26, animationDelay: "0.78s" }}
          d="M269 224a34 34 0 0168 0"
          fill="none"
          stroke="#22c55e"
          strokeWidth="8"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="26 100"
        />
        <text x="303" y="222" fontSize="15" fontWeight="800" fill="#101a33" textAnchor="middle">18</text>
        <text x="303" y="238" fontSize="6.5" fill="#8090a8" textAnchor="middle">TOTAL ARREARS</text>
      </g>

      {/* ── Result Status donut ── */}
      <g className="cms-card" style={{ animationDelay: "0.64s" }}>
        <rect x="96" y="266" width="130" height="118" rx="12" fill="#ffffff" stroke="#e9edf5" />
        <text x="110" y="287" fontSize="8.5" fontWeight="700" fill="#8090a8">RESULT STATUS</text>
        <g className="cms-pop" style={{ animationDelay: "0.8s" }}>
          <circle cx="161" cy="336" r="26" fill="none" stroke="#eef1f7" strokeWidth="10" />
          <circle cx="161" cy="336" r="26" fill="none" stroke="#1d6ff2" strokeWidth="10" pathLength={100} strokeDasharray="80 100" transform="rotate(-90 161 336)" />
          <circle cx="161" cy="336" r="26" fill="none" stroke="#f97316" strokeWidth="10" pathLength={100} strokeDasharray="20 100" transform="rotate(198 161 336)" />
          <text x="161" y="335" fontSize="11" fontWeight="800" fill="#101a33" textAnchor="middle">4,593</text>
          <text x="161" y="345" fontSize="5.5" fill="#8090a8" textAnchor="middle">TOTAL</text>
        </g>
      </g>

      {/* ── Fees Summary ── */}
      <g className="cms-card" style={{ animationDelay: "0.7s" }}>
        <rect x="234" y="266" width="138" height="118" rx="12" fill="#ffffff" stroke="#e9edf5" />
        <text x="248" y="287" fontSize="8.5" fontWeight="700" fill="#8090a8">FEES SUMMARY</text>
        {[
          { label: "Paid", pct: 0.68, color: "#16a34a", delay: 0.85 },
          { label: "Unpaid", pct: 0.32, color: "#f97316", delay: 1.0 },
        ].map((b, i) => {
          const y = 306 + i * 38;
          const tx = 248,
            tw = 110;
          return (
            <g key={b.label}>
              <text x={tx} y={y} fontSize="8" fontWeight="600" fill="#38538b">{b.label}</text>
              <text x={tx + tw} y={y} fontSize="8" fontWeight="800" fill="#101a33" textAnchor="end">{Math.round(b.pct * 100)}%</text>
              <rect x={tx} y={y + 6} width={tw} height="7" rx="3.5" fill="#eef1f7" />
              <rect className="cms-bar" style={{ animationDelay: `${b.delay}s` }} x={tx} y={y + 6} width={tw * b.pct} height="7" rx="3.5" fill={b.color} />
            </g>
          );
        })}
      </g>

      {/* ── Departmental Analytics ── */}
      <g className="cms-card" style={{ animationDelay: "0.55s" }}>
        <rect x="380" y="146" width="308" height="238" rx="12" fill="#ffffff" stroke="#e9edf5" />
        <text x="396" y="167" fontSize="10" fontWeight="700" fill="#2a3a5f">Departmental Analytics</text>
        <rect x="566" y="156" width="34" height="15" rx="7.5" fill="#eef5ff" />
        <text x="583" y="166.5" fontSize="7" fontWeight="700" fill="#1d6ff2" textAnchor="middle">LINE</text>
        <rect x="604" y="156" width="34" height="15" rx="7.5" fill="#f4f6fb" />
        <text x="621" y="166.5" fontSize="7" fontWeight="700" fill="#8090a8" textAnchor="middle">BAR</text>
        {[0, 1, 2, 3, 4].map((g) => {
          const y = py0 + (g / 4) * (py1 - py0);
          return (
            <g key={g}>
              <line x1={px0} y1={y} x2={px1} y2={y} stroke="#eff2f8" strokeWidth="1" />
              <text x={px0 - 6} y={y + 2.5} fontSize="5.5" fill="#aab4c6" textAnchor="end">{800 - g * 200}</text>
            </g>
          );
        })}
        <path d={area} fill="url(#cms-wave)" />
        <path
          className="cms-draw"
          style={{ ["--l" as string]: 100, animationDelay: "0.75s" }}
          d={line}
          pathLength={100}
          strokeDasharray="100"
          fill="none"
          stroke="url(#cms-lineg)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {pts.map((p, i) => (
          <circle key={i} className="cms-pop" style={{ animationDelay: `${(1 + i * 0.05).toFixed(2)}s` }} cx={p[0]} cy={p[1]} r="2.1" fill="#ffffff" stroke="#ef6c00" strokeWidth="1.4" />
        ))}
        {DEPTS.map((d, i) => (
          <text key={d} x={px0 + (i / (DEPTS.length - 1)) * (px1 - px0)} y={380} fontSize="5.4" fill="#9aa7bd" textAnchor="middle">
            {d}
          </text>
        ))}
      </g>
    </svg>
  );
}
