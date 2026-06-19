"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "what-i-did", label: "What I did" },
  { id: "result", label: "Result" },
  { id: "capabilities", label: "Capabilities" },
];

export default function CaseStudyToC() {
  const [active, setActive] = useState("problem");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -65% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="hidden md:block">
      <div className="sticky top-24">
        <p
          className="text-[10px] uppercase tracking-widest text-[#71717a] mb-4 font-medium"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          On this page
        </p>
        <nav className="flex flex-col gap-0.5">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm py-1.5 pl-3 border-l-2 transition-all duration-200 ${
                active === id
                  ? "border-[#2563eb] text-[#2563eb] font-medium"
                  : "border-[#e4e4e7] text-[#71717a] hover:text-[#09090b] hover:border-[#d4d4d8]"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
