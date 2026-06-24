"use client";
import { motion, useScroll, useTransform } from "framer-motion";

// Dark "aurora" backdrop: drifting gradient blobs + faint grid overlay.
// Place inside a `relative overflow-hidden bg-foreground` parent.
// `parallax` ties blob drift to scroll (used by the hero); off = static (used by the closing CTA).
export default function AuroraBackdrop({ parallax = false }: { parallax?: boolean }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, parallax ? -160 : 0]);
  const y2 = useTransform(scrollY, [0, 800], [0, parallax ? -90 : 0]);
  const y3 = useTransform(scrollY, [0, 800], [0, parallax ? -220 : 0]);

  return (
    <>
      <motion.div
        style={{ y: y1 }}
        className="blob-1 absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full bg-accent opacity-20 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="blob-2 absolute bottom-1/4 right-1/4 w-[380px] h-[380px] rounded-full bg-[#7c3aed] opacity-15 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y3 }}
        className="blob-3 absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-[#06b6d4] opacity-10 blur-3xl pointer-events-none"
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
