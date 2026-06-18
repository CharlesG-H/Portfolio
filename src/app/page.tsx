import Link from "next/link";
import { featuredProjects } from "@/lib/projects";
import StatusBadge from "@/components/StatusBadge";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroSection from "@/components/HeroSection";
import TiltCard from "@/components/TiltCard";

const skills = [
  {
    title: "Product Strategy",
    items: ["Roadmapping", "Discovery", "PRDs", "RICE", "JTBD", "Stakeholder Management"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="28" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <circle cx="28" cy="22" r="2.5" />
        <circle cx="38" cy="10" r="2.5" />
        <path d="M10 26.5l6-6.5M20.5 19.5l6 1.5M30.5 20.5l6-9" />
      </svg>
    ),
  },
  {
    title: "Growth & Experimentation",
    items: ["A/B Testing", "CRO", "Funnel Analysis", "Device Segmentation", "Usability Testing"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4v16l-9 14h30L26 20V4" />
        <path d="M12 4h16" />
        <path d="M16 24c2-2 6-2 8 0" />
      </svg>
    ),
  },
  {
    title: "AI & Automation",
    items: ["AI Agent Building", "Prompt Engineering", "MCP", "Claude Code", "FastAPI"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="20" height="20" rx="3" />
        <rect x="15" y="15" width="10" height="10" rx="1.5" />
        <path d="M15 4v6M25 4v6M15 30v6M25 30v6M4 15h6M4 25h6M30 15h6M30 25h6" />
      </svg>
    ),
  },
  {
    title: "Analytics",
    items: ["Mixpanel", "Holistics", "Microsoft Clarity", "Google Analytics", "GTM"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="34" height="26" rx="3" />
        <path d="M3 32h34M16 36h8" />
        <path d="M10 24l6-8 5 5 6-10 5 6" />
      </svg>
    ),
  },
]

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={14}
      height={14}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}

function CornerPlus() {
  const base = "absolute text-[#d4d4d8]";
  return (
    <>
      <PlusIcon className={`${base} -top-[7px] -left-[7px]`} />
      <PlusIcon className={`${base} -top-[7px] -right-[7px]`} />
      <PlusIcon className={`${base} -bottom-[7px] -left-[7px]`} />
      <PlusIcon className={`${base} -bottom-[7px] -right-[7px]`} />
    </>
  );
}


export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Numbers + Insight ────────────────────────────────────────────── */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-6">
        <FadeIn className="w-full max-w-4xl">
          <div className="grid grid-cols-4 gap-6 text-center pb-14 border-b border-[#e4e4e7]">
            {[
              { value: "300%", label: "car insurance premium growth" },
              { value: "+63%", label: "leads from funnel redesign" },
              { value: "74%", label: "fewer policy changes post-purchase" },
              { value: "6 yrs", label: "in digital insurance" },
            ].map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={100} className="w-full max-w-4xl pt-14">
          <blockquote className="pl-6 border-l-2 border-[#2563eb]">
            <p
              className="text-xl text-[#09090b] leading-relaxed"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              "Most internal tools solve the wrong problem — they automate the easy parts and leave the painful parts manual."
            </p>
            <footer className="mt-4 text-xs text-[#71717a] uppercase tracking-widest">
              On the AI Quotation Tool · MoneySmart, 2026
            </footer>
          </blockquote>
        </FadeIn>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────── */}
      <section className="snap-start min-h-screen flex items-center w-full bg-[#eff6ff]">
        <FadeIn className="w-full">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-10 items-center">
            {/* Left: heading */}
            <div className="col-span-1">
              <p className="text-xs uppercase tracking-widest text-[#2563eb] mb-4 font-medium" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                My Skills
              </p>
              <h2
                className="text-4xl font-bold text-[#09090b] leading-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Building products that ship results.
              </h2>
            </div>

            {/* Right: 2×2 skill cards */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <FadeIn key={skill.title} delay={i * 70}>
                  <TiltCard>
                    <div className="relative bg-white rounded-xl p-6 border border-dashed border-[#e4e4e7] hover:shadow-md hover:border-[#2563eb]/30 transition-all duration-300 h-full">
                      <CornerPlus />
                      <div className="w-10 h-10 mb-4 text-[#09090b]">
                        {skill.icon}
                      </div>
                      <h3 className="text-base font-bold text-[#09090b] mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {skill.title}
                      </h3>
                      <p className="text-sm text-[#71717a] leading-relaxed">
                        {skill.items.join(", ")}
                      </p>
                    </div>
                  </TiltCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Selected work ─────────────────────────────────────────────────── */}
      <section className="snap-start min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 items-start">

            {/* Sticky sidebar */}
            <FadeIn>
              <div className="md:sticky md:top-[80px]">
                <h2
                  className="text-4xl font-bold text-[#09090b] leading-tight mb-4"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Selected<br />Work
                </h2>
                <p className="text-sm text-[#71717a] leading-relaxed mb-6">
                  Three projects. Each owned end-to-end — from problem framing to shipping and measuring what changed.
                </p>
                <Link
                  href="/work"
                  className="inline-block text-sm px-4 py-2.5 bg-[#2563eb] text-white rounded hover:bg-[#1d4ed8] transition-colors duration-300 font-medium"
                >
                  View all work →
                </Link>
              </div>
            </FadeIn>

            {/* Scrolling project cards */}
            <div className="flex flex-col gap-6">
              {featuredProjects.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 100}>
                  <TiltCard>
                    <Link
                      href={`/work/${project.slug}`}
                      className="group block rounded-xl overflow-hidden border border-[#e4e4e7] hover:border-[#2563eb] hover:shadow-[0_0_0_1px_#2563eb,0_8px_32px_rgba(37,99,235,0.1)] transition-all duration-300"
                    >
                      {/* Gradient header */}
                      <div className={`bg-gradient-to-br ${project.gradient} h-44 flex flex-col justify-end p-6 relative`}>
                        {project.metric && (
                          <span
                            className="text-2xl font-bold text-white/90 tracking-tight leading-snug"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                          >
                            {project.metric}
                          </span>
                        )}
                        <div className="absolute top-4 right-4">
                          <StatusBadge status={project.status} />
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-6 bg-white">
                        <p className="text-[11px] text-[#71717a] mb-2">
                          {project.company} · {project.period}
                        </p>
                        <h3
                          className="text-xl font-semibold text-[#09090b] group-hover:text-[#2563eb] transition-colors duration-300 mb-3"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#71717a] leading-relaxed mb-4">
                          {project.tagline ?? project.summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold text-[#2563eb]">
                            {project.outcome}
                          </p>
                          <span className="text-xs text-[#71717a] group-hover:text-[#2563eb] transition-colors duration-300 shrink-0 ml-4">
                            Read case study →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer CTA ───────────────────────────────────────────────────── */}
      <section className="snap-start min-h-screen flex items-center justify-center px-6">
        <FadeIn className="text-center">
          <h2
            className="text-3xl font-semibold text-[#09090b] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Currently open to PM roles.
          </h2>
          <p className="text-sm text-[#71717a] mb-8">
            Based in Singapore. Background in insurance, fintech, and AI product. Looking for the next hard problem to own.
          </p>
          <a
            href="mailto:charles.csz@hotmail.com"
            className="inline-block text-sm px-6 py-3 bg-[#09090b] text-white rounded hover:bg-[#2563eb] transition-colors duration-300 font-medium"
          >
            Get in touch →
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
