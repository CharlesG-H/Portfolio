"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import AuroraBackdrop from "@/components/AuroraBackdrop";
import Button from "@/components/ui/Button";

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
          <p className="text-xs text-white/70 uppercase tracking-widest mb-6">
            Charles Chua · Product Manager · Singapore
          </p>
        </FadeIn>

        <div className="min-h-[8rem] flex items-center">
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

        <FadeIn delay={100}>
          <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
            Six years across insurtech and fintech, from growth experiments to
            internal tooling.
          </p>

          <div className="mt-9 flex items-center gap-6">
            <Button href="/projects" size="lg">
              View projects →
            </Button>
            <Button href="/about" variant="ghost" size="lg" className="text-white/60 hover:text-white">
              About me
            </Button>
          </div>
        </FadeIn>
      </motion.div>

    </section>
  );
}
