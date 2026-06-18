"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";

const headlines = [
  "Product work that moves metrics.",
  "Discovery that shapes what gets built.",
  "Growth work that sticks. Tooling that scales.",
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const [index, setIndex] = useState(0);

  const blob1Y = useTransform(scrollY, [0, 800], [0, -160]);
  const blob2Y = useTransform(scrollY, [0, 800], [0, -90]);
  const blob3Y = useTransform(scrollY, [0, 800], [0, -220]);
  const contentY = useTransform(scrollY, [0, 600], [0, 48]);
  const contentOpacity = useTransform(scrollY, [0, 380], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="snap-start relative overflow-hidden bg-[#09090b] min-h-screen flex items-center">
      <motion.div
        style={{ y: blob1Y }}
        className="blob-1 absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full bg-[#2563eb] opacity-20 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="blob-2 absolute bottom-1/4 right-1/4 w-[380px] h-[380px] rounded-full bg-[#7c3aed] opacity-15 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: blob3Y }}
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

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-28 w-full"
      >
        <FadeIn delay={0}>
          <p className="text-xs text-[#71717a] uppercase tracking-widest mb-6">
            Product Manager · 6 years · Singapore
          </p>
        </FadeIn>

        <div className="min-h-[8rem] flex items-start">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-5xl font-semibold tracking-tight leading-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {headlines[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </motion.div>

    </section>
  );
}
