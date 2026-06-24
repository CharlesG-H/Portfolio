"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import AuroraBackdrop from "@/components/AuroraBackdrop";

const headlines = [
  "Product work that moves metrics.",
  "Discovery that shapes what gets built.",
  "Growth work that sticks. Tooling that scales.",
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const [index, setIndex] = useState(0);

  const contentY = useTransform(scrollY, [0, 600], [0, 48]);
  const contentOpacity = useTransform(scrollY, [0, 380], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-foreground min-h-screen flex items-center">
      <AuroraBackdrop parallax />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-28 w-full"
      >
        <FadeIn delay={0}>
          <p className="text-xs text-muted uppercase tracking-widest mb-6">
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
