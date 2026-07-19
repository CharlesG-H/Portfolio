"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import AuroraBackdrop from "@/components/AuroraBackdrop";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  // Gentle parallax only — content never fades out while the section is
  // still on screen (a full fade left the hero a blank dark block).
  const contentY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 48]);

  return (
    <section className="relative overflow-hidden bg-foreground min-h-[85svh] flex items-center">
      <AuroraBackdrop parallax />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-24 w-full"
      >
        <p className="text-xs text-muted uppercase tracking-widest mb-6">
          Charles Chua · Product Manager · Singapore
        </p>

        <h1
          className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white max-w-3xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Product work that moves metrics.
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
          Six years across insurtech and fintech — finding the funnel leak,
          running the experiment, and shipping the fix. Growth work that
          sticks, and internal tooling that takes the manual work off teams.
        </p>

        <div className="mt-9 flex items-center gap-6">
          <Button href="/projects" size="lg">
            View projects →
          </Button>
          <Button href="/about" variant="ghost" size="lg" className="text-white/60 hover:text-white">
            About me
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
