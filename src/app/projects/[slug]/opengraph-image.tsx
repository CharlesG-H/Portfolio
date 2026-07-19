import { ImageResponse } from "next/og";
import { projects } from "@/lib/projects";

export const alt = "Case study — Charles Chua";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const title = project?.title ?? "Case study";
  const metric = project?.metric ?? project?.outcome ?? "";

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
            "radial-gradient(circle at 80% 15%, rgba(37,99,235,0.35), transparent 55%), radial-gradient(rgba(255,255,255,0.08) 2px, transparent 2px)",
          backgroundSize: "100% 100%, 32px 32px",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a1a1aa",
            marginBottom: 24,
          }}
        >
          Case study · Charles Chua
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {title}
        </div>
        {metric ? (
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 30,
              color: "#3b82f6",
              fontWeight: 600,
            }}
          >
            {metric}
          </div>
        ) : null}
      </div>
    ),
    { ...size }
  );
}
