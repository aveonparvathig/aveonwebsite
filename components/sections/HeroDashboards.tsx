/**
 * Vector dashboard mockups for the hero carousel — Exam, Payroll and Hostel
 * views of the Aveon CMS. One shared renderer keeps all three cohesive.
 * Pure inline SVG (no raster assets), 640×440, scales as a unit.
 */

type Kpi = { label: string; value: string; tint: string; soft: string; spark: number[] };
type Seg = { pct: number; color: string };
type Variant = {
  aria: string;
  module: string;
  activeNav: number;
  kpis: Kpi[];
  chart: { title: string; type: "line" | "bars"; data: number[]; accent: string; labels: string[] };
  donut: { title: string; center: string; sub: string; segs: Seg[]; legend: { label: string; color: string }[] };
  mini: { title: string; rows: { label: string; value: string; color: string }[] };
};

const NAV = [
  { label: "Home", d: "M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2zM8 8h4v4H8z" },
  { label: "Academic", d: "M7 2 1 5l6 3 6-3zM3 7v3c0 1 8 1 8 0V7" },
  { label: "Exam", d: "M3 2h6l2 2v8H3zM5 6h4M5 9h4" },
  { label: "Fees", d: "M7 1v12M4 4h4a1.5 1.5 0 010 3H5a1.5 1.5 0 000 3h4" },
  { label: "Hostel", d: "M2 5 7 2l5 3v6l-5 3-5-3zM7 8v4M2 5l5 3 5-3" },
  { label: "Reports", d: "M2 11V6M6 11V3M10 11V7" },
];

export const HERO_VARIANTS: Record<"exam" | "payroll" | "hostel", Variant> = {
  exam: {
    aria: "Examination and result analytics dashboard",
    module: "Examination",
    activeNav: 2,
    kpis: [
      { label: "Total", value: "4,595", tint: "#1d6ff2", soft: "#dbeafe", spark: [0.4, 0.55, 0.42, 0.62, 0.5, 0.72, 0.68] },
      { label: "Pass Rate", value: "92%", tint: "#16a34a", soft: "#dcfce7", spark: [0.5, 0.45, 0.6, 0.55, 0.7, 0.66, 0.82] },
      { label: "Qualified", value: "4,593", tint: "#2563eb", soft: "#dbeafe", spark: [0.35, 0.5, 0.46, 0.6, 0.55, 0.68, 0.78] },
    ],
    chart: { title: "Departmental Analytics", type: "line", accent: "#f97316", data: [0.7, 0.42, 0.24, 0.32, 0.2, 0.36, 0.95, 0.4, 0.56, 0.82, 0.46, 0.62], labels: ["AIDS", "AIML", "AUTO", "ACT", "CIVIL", "MCA", "CSE", "CVS", "EEE", "ECE", "VLSI", "MECH"] },
    donut: { title: "Result Status", center: "4,593", sub: "QUALIFIED", segs: [{ pct: 80, color: "#1d6ff2" }, { pct: 20, color: "#f97316" }], legend: [{ label: "Qualified", color: "#1d6ff2" }, { label: "Pending", color: "#f97316" }] },
    mini: { title: "Top Departments", rows: [{ label: "CSE", value: "720", color: "#1d6ff2" }, { label: "ECE", value: "540", color: "#3376ff" }, { label: "MECH", value: "410", color: "#93b4ff" }] },
  },
  payroll: {
    aria: "Payroll and income-expense dashboard",
    module: "Payroll",
    activeNav: 3,
    kpis: [
      { label: "Net Pay", value: "₹42.6L", tint: "#1d6ff2", soft: "#dbeafe", spark: [0.4, 0.5, 0.46, 0.58, 0.6, 0.7, 0.74] },
      { label: "Employees", value: "239", tint: "#7c3aed", soft: "#ede9fe", spark: [0.5, 0.52, 0.5, 0.56, 0.54, 0.6, 0.62] },
      { label: "Processed", value: "100%", tint: "#16a34a", soft: "#dcfce7", spark: [0.2, 0.4, 0.55, 0.7, 0.85, 0.95, 1] },
    ],
    chart: { title: "Income vs Expense", type: "bars", accent: "#1d6ff2", data: [0.62, 0.34, 0.7, 0.4, 0.82, 0.46, 0.9, 0.5], labels: ["Jan", "", "Feb", "", "Mar", "", "Apr", ""] },
    donut: { title: "Salary Split", center: "₹42.6L", sub: "NET PAY", segs: [{ pct: 55, color: "#1d6ff2" }, { pct: 25, color: "#7c3aed" }, { pct: 20, color: "#f97316" }], legend: [{ label: "Basic", color: "#1d6ff2" }, { label: "HRA", color: "#7c3aed" }, { label: "Deductions", color: "#f97316" }] },
    mini: { title: "Payslips", rows: [{ label: "Generated", value: "239", color: "#16a34a" }, { label: "Pending", value: "0", color: "#94a3b8" }, { label: "Advances", value: "12", color: "#f97316" }] },
  },
  hostel: {
    aria: "Hostel occupancy and mess dashboard",
    module: "Hostel & Mess",
    activeNav: 4,
    kpis: [
      { label: "Occupancy", value: "96%", tint: "#1d6ff2", soft: "#dbeafe", spark: [0.5, 0.6, 0.55, 0.68, 0.72, 0.8, 0.86] },
      { label: "Rooms", value: "420", tint: "#0d9488", soft: "#ccfbf1", spark: [0.5, 0.5, 0.52, 0.5, 0.54, 0.52, 0.56] },
      { label: "Residents", value: "1,860", tint: "#2563eb", soft: "#dbeafe", spark: [0.4, 0.48, 0.5, 0.58, 0.62, 0.7, 0.74] },
    ],
    chart: { title: "Block Occupancy", type: "bars", accent: "#0d9488", data: [0.86, 0.72, 0.94, 0.66, 0.8, 0.58, 0.9, 0.7], labels: ["A", "B", "C", "D", "E", "F", "G", "H"] },
    donut: { title: "Mess Attendance", center: "92%", sub: "PRESENT", segs: [{ pct: 92, color: "#1d6ff2" }, { pct: 8, color: "#f97316" }], legend: [{ label: "Present", color: "#1d6ff2" }, { label: "Absent", color: "#f97316" }] },
    mini: { title: "Today", rows: [{ label: "Gate Pass", value: "34", color: "#1d6ff2" }, { label: "On Leave", value: "18", color: "#f97316" }, { label: "Complaints", value: "2", color: "#ef4444" }] },
  },
};

function spark(vals: number[], x: number, y: number, w: number, h: number) {
  return vals.map((v, i) => `${i ? "L" : "M"}${(x + (i / (vals.length - 1)) * w).toFixed(1)} ${(y + h - v * h).toFixed(1)}`).join(" ");
}

export type HeroVariant = keyof typeof HERO_VARIANTS;

export default function HeroDashboard({ variant }: { variant: HeroVariant }) {
  const v = HERO_VARIANTS[variant];

  // chart plot
  const cx0 = 102, cx1 = 396, cy0 = 172, cy1 = 398;
  const pts = v.chart.data.map((d, i) => [cx0 + (i / (v.chart.data.length - 1)) * (cx1 - cx0), cy1 - d * (cy1 - cy0)] as const);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `M${cx0} ${cy1} ${pts.map((p) => `L${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ")} L${cx1} ${cy1} Z`;

  // donut
  const dcx = 524, dcy = 196, dr = 38, dw = 12;
  let acc = 0;

  return (
    <svg viewBox="0 0 640 440" className="block h-full w-full" role="img" aria-label={v.aria}>
      <defs>
        <linearGradient id={`side-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3376ff" />
          <stop offset="100%" stopColor="#123fce" />
        </linearGradient>
        <linearGradient id={`wave-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={v.chart.accent} stopOpacity="0.24" />
          <stop offset="100%" stopColor={v.chart.accent} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="640" height="440" fill="#ffffff" />

      {/* top bar */}
      <rect width="640" height="30" fill="#f8fafc" />
      <line x1="0" y1="30" x2="640" y2="30" stroke="#e8ecf6" />
      <text x="14" y="20" fontSize="12.5" fontWeight="800" fill="#1d6ff2" letterSpacing="0.5">CMS</text>
      <rect x="52" y="8" width="86" height="15" rx="7.5" fill="#eef5ff" />
      <text x="95" y="18.5" fontSize="8" fontWeight="700" fill="#1d6ff2" textAnchor="middle">{v.module}</text>
      <rect x="330" y="7" width="210" height="17" rx="8.5" fill="#f2f5fb" stroke="#e6ebf4" />
      <text x="344" y="19" fontSize="8" fill="#9aa7bd">Menu Search…</text>
      <circle cx="618" cy="15" r="9" fill="#d9e8ff" />
      <circle cx="618" cy="12" r="3" fill="#1d6ff2" />
      <path d="M612 21a6 5 0 0112 0z" fill="#1d6ff2" />

      {/* sidebar */}
      <rect x="0" y="30" width="72" height="410" fill={`url(#side-${variant})`} />
      {NAV.map((n, i) => {
        const y = 48 + i * 46;
        const active = i === v.activeNav;
        return (
          <g key={n.label}>
            {active && <rect x="9" y={y - 5} width="54" height="38" rx="10" fill="#ffffff" />}
            <g transform={`translate(30 ${y + 2})`}>
              <path d={n.d} fill="none" stroke={active ? "#1d6ff2" : "#eaf1ff"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x="36" y={y + 25} fontSize="7" fontWeight={active ? 800 : 500} fill={active ? "#1d6ff2" : "#dbe7ff"} textAnchor="middle">{n.label}</text>
          </g>
        );
      })}

      {/* main bg */}
      <rect x="72" y="30" width="568" height="410" fill="#eef2f9" />

      {/* filter */}
      <text x="84" y="50" fontSize="9" fontWeight="700" fill="#2a3a5f">{v.module}</text>
      {["MCET", "2025–26"].map((t, i) => (
        <g key={t}>
          <rect x={132 + i * 74} y="41" width="68" height="14" rx="7" fill="#ffffff" stroke="#e2e8f2" />
          <text x={132 + i * 74 + 34} y="50.5" fontSize="7" fill="#38538b" textAnchor="middle">{t}</text>
        </g>
      ))}

      {/* KPI cards */}
      {v.kpis.map((k, i) => {
        const x = 84 + i * 176;
        const y = 62;
        const w = 168;
        return (
          <g key={k.label}>
            <rect x={x} y={y} width={w} height={62} rx="11" fill="#ffffff" stroke="#e9edf5" />
            <text x={x + 13} y={y + 18} fontSize="7.5" fontWeight="700" fill="#8090a8">{k.label.toUpperCase()}</text>
            <text x={x + 13} y={y + 38} fontSize="17" fontWeight="800" fill="#101a33">{k.value}</text>
            <rect x={x + w - 30} y={y + 10} width="18" height="18" rx="6" fill={k.soft} />
            <circle cx={x + w - 21} cy={y + 19} r="4" fill={k.tint} />
            <path d={spark(k.spark, x + 13, y + 44, w - 26, 12)} fill="none" stroke={k.tint} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );
      })}

      {/* chart card */}
      <rect x="84" y="136" width="332" height="288" rx="12" fill="#ffffff" stroke="#e9edf5" />
      <text x="102" y="160" fontSize="10.5" fontWeight="700" fill="#2a3a5f">{v.chart.title}</text>
      <rect x="352" y="148" width="30" height="15" rx="7.5" fill="#eef5ff" />
      <text x="367" y="158.5" fontSize="7" fontWeight="700" fill="#1d6ff2" textAnchor="middle">{v.chart.type === "line" ? "LINE" : "BAR"}</text>
      {[0, 1, 2, 3].map((g) => {
        const y = cy0 + (g / 3) * (cy1 - cy0);
        return <line key={g} x1={cx0} y1={y} x2={cx1} y2={y} stroke="#eff2f8" strokeWidth="1" />;
      })}
      {v.chart.type === "line" ? (
        <>
          <path d={area} fill={`url(#wave-${variant})`} />
          <path d={line} fill="none" stroke={v.chart.accent} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          {pts.map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r="2" fill="#ffffff" stroke={v.chart.accent} strokeWidth="1.4" />
          ))}
        </>
      ) : (
        v.chart.data.map((d, i) => {
          const bw = (cx1 - cx0) / v.chart.data.length;
          const bx = cx0 + i * bw + bw * 0.22;
          const bh = d * (cy1 - cy0);
          const alt = i % 2 === 1;
          return <rect key={i} x={bx} y={cy1 - bh} width={bw * 0.56} height={bh} rx="2.5" fill={alt ? "#f97316" : v.chart.accent} opacity={alt ? 0.85 : 1} />;
        })
      )}
      {v.chart.labels.map((l, i) =>
        l ? (
          <text key={i} x={cx0 + (v.chart.type === "line" ? (i / (v.chart.labels.length - 1)) * (cx1 - cx0) : (i + 0.5) * ((cx1 - cx0) / v.chart.labels.length))} y="412" fontSize="5.6" fill="#9aa7bd" textAnchor="middle">{l}</text>
        ) : null
      )}

      {/* donut card */}
      <rect x="424" y="136" width="204" height="150" rx="12" fill="#ffffff" stroke="#e9edf5" />
      <text x="440" y="160" fontSize="10.5" fontWeight="700" fill="#2a3a5f">{v.donut.title}</text>
      <circle cx={dcx} cy={dcy} r={dr} fill="none" stroke="#eef1f7" strokeWidth={dw} />
      {v.donut.segs.map((s, i) => {
        const rot = -90 + acc * 3.6;
        acc += s.pct;
        return <circle key={i} cx={dcx} cy={dcy} r={dr} fill="none" stroke={s.color} strokeWidth={dw} pathLength={100} strokeDasharray={`${s.pct} 100`} transform={`rotate(${rot} ${dcx} ${dcy})`} />;
      })}
      <text x={dcx} y={dcy - 1} fontSize="13" fontWeight="800" fill="#101a33" textAnchor="middle">{v.donut.center}</text>
      <text x={dcx} y={dcy + 12} fontSize="6" fill="#8090a8" textAnchor="middle">{v.donut.sub}</text>
      {v.donut.legend.map((lg, i) => (
        <g key={lg.label} transform={`translate(586 ${186 + i * 18})`}>
          <circle cx="0" cy="-3" r="3.5" fill={lg.color} />
          <text x="9" y="0" fontSize="7.5" fill="#38538b">{lg.label}</text>
        </g>
      ))}

      {/* mini card */}
      <rect x="424" y="298" width="204" height="126" rx="12" fill="#ffffff" stroke="#e9edf5" />
      <text x="440" y="320" fontSize="10" fontWeight="700" fill="#2a3a5f">{v.mini.title}</text>
      {v.mini.rows.map((r, i) => {
        const y = 342 + i * 26;
        return (
          <g key={r.label}>
            <circle cx="444" cy={y - 3} r="3.5" fill={r.color} />
            <text x="454" y={y} fontSize="8.5" fontWeight="500" fill="#38538b">{r.label}</text>
            <text x="612" y={y} fontSize="8.5" fontWeight="800" fill="#101a33" textAnchor="end">{r.value}</text>
          </g>
        );
      })}
    </svg>
  );
}
