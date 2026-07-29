"use client";
import { motion, useScroll, useTransform } from "framer-motion";

// Site default: blue → violet → cyan, matching the accent palette.
const DEFAULT_COLORS: [string, string, string] = ["#2563eb", "#7c3aed", "#06b6d4"];

// Dark "aurora" backdrop: drifting gradient blobs + faint grid overlay.
// Place inside a `relative overflow-hidden bg-foreground` parent.
// `parallax` ties blob drift to scroll (used by the hero); off = static (used by the closing CTA).
// `colors` tints the three blobs, so a case study can carry its own gradient.
// Blob geometry is tuned per surface. The default suits a full-screen hero;
// `compact` spreads wider, shallower blobs across a short masthead band, where
// hero-sized blobs would mostly fall outside the band and barely register.
const BLOBS = {
  default: [
    "top-1/4 left-1/4 w-[480px] h-[480px] opacity-20",
    "bottom-1/4 right-1/4 w-[380px] h-[380px] opacity-15",
    "top-1/2 right-1/3 w-[300px] h-[300px] opacity-10",
  ],
  compact: [
    "-top-1/3 left-[8%] w-[520px] h-[520px] opacity-30",
    "-bottom-1/2 right-[12%] w-[460px] h-[460px] opacity-25",
    "top-0 left-1/2 w-[360px] h-[360px] opacity-15",
  ],
} as const;

export default function AuroraBackdrop({
  parallax = false,
  colors = DEFAULT_COLORS,
  compact = false,
}: {
  parallax?: boolean;
  colors?: [string, string, string];
  compact?: boolean;
}) {
  const blobs = compact ? BLOBS.compact : BLOBS.default;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, parallax ? -160 : 0]);
  const y2 = useTransform(scrollY, [0, 800], [0, parallax ? -90 : 0]);
  const y3 = useTransform(scrollY, [0, 800], [0, parallax ? -220 : 0]);

  return (
    <>
      <motion.div
        style={{ y: y1, backgroundColor: colors[0] }}
        className={`blob-1 absolute rounded-full blur-3xl pointer-events-none ${blobs[0]}`}
      />
      <motion.div
        style={{ y: y2, backgroundColor: colors[1] }}
        className={`blob-2 absolute rounded-full blur-3xl pointer-events-none ${blobs[1]}`}
      />
      <motion.div
        style={{ y: y3, backgroundColor: colors[2] }}
        className={`blob-3 absolute rounded-full blur-3xl pointer-events-none ${blobs[2]}`}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}
