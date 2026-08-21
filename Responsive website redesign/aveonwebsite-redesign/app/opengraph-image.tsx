import { ImageResponse } from "next/og";

export const alt = "Aveon Infotech — Education ERP Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0e27 0%, #152153 60%, #1d6ff2 130%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              background: "#f97316",
              borderRadius: 6,
              display: "flex",
            }}
          />
          aveon infotech
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Smart Campuses,</span>
          <span>
            Real Impact with{" "}
            <span style={{ color: "#599aff", marginLeft: 18 }}>Education ERP</span>
          </span>
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: "#9fb2d6", display: "flex" }}>
          University · College · School ERP — aveoninfotech.com
        </div>
      </div>
    ),
    { ...size },
  );
}
