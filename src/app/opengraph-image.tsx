import { ImageResponse } from "next/og";

export const alt = "Charles Chua — Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 75% 20%, rgba(37,99,235,0.35), transparent 55%), radial-gradient(rgba(255,255,255,0.08) 2px, transparent 2px)",
          backgroundSize: "100% 100%, 32px 32px",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a1a1aa",
            marginBottom: 24,
          }}
        >
          Charles Chua · Product Manager · Singapore
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Product work that moves metrics.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 40,
            fontSize: 26,
            color: "#3b82f6",
            fontWeight: 600,
          }}
        >
          charlesc.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
