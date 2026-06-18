"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(v: string): { prefix: string; num: number; suffix: string } {
  const m = v.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: v };
  return { prefix: m[1], num: parseFloat(m[2]), suffix: m[3] };
}

export default function AnimatedCounter({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const { prefix, num, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ran.current) {
          ran.current = true;
          const duration = 1400;
          const startTime = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(ease * num));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div ref={ref}>
      <p
        className="text-2xl font-semibold text-[#09090b] mb-1 tabular-nums"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="text-xs text-[#71717a] leading-snug">{label}</p>
    </div>
  );
}
