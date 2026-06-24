import Link from "next/link";
import { featuredProjects } from "@/lib/projects";
import Button from "@/components/ui/Button";
import AuroraBackdrop from "@/components/AuroraBackdrop";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroSection from "@/components/HeroSection";
import TiltCard from "@/components/TiltCard";
// import TweetWall from "@/components/TweetWall"; // re-enable once real testimonials are added
import TargetIcon from "@/components/icons/target-icon";
import ChartLineIcon from "@/components/icons/chart-line-icon";
import BrainCircuitIcon from "@/components/icons/brain-circuit-icon";
import ChartBarIcon from "@/components/icons/chart-bar-icon";

const skills = [
  {
    title: "Product Strategy",
    blurb: "Turn ambiguous problems into prioritised roadmaps and PRDs engineers can ship from.",
    icon: <TargetIcon size={40} strokeWidth={1.8} />,
  },
  {
    title: "Growth & Experimentation",
    blurb: "Find the funnel leak, run the experiment, move the metric.",
    icon: <ChartLineIcon size={40} strokeWidth={1.8} />,
  },
  {
    title: "AI & Automation",
    blurb: "Build AI agents and internal tools that take manual work off the team.",
    icon: <BrainCircuitIcon size={40} strokeWidth={1.8} />,
  },
  {
    title: "Analytics",
    blurb: "Instrument the product so data, not opinion, drives the next bet.",
    icon: <ChartBarIcon size={40} strokeWidth={1.8} />,
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
      <section className="py-28 px-6 flex flex-col items-center">
        <FadeIn className="w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pb-14 border-b border-border">
            {[
              { value: "300%", label: "revenue growth on a core product line" },
              { value: "+63%", label: "more qualified leads from a funnel redesign" },
              { value: "74%", label: "fewer post-purchase support requests" },
              { value: "6 yrs", label: "building digital products" },
            ].map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={100} className="w-full max-w-4xl pt-14">
          <blockquote className="pl-6 border-l-2 border-accent">
            <p
              className="text-xl text-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              "Most internal tools solve the wrong problem — they automate the easy parts and leave the painful parts manual."
            </p>
            <footer className="mt-4 text-xs text-muted uppercase tracking-widest">
              On internal tooling · 2026
            </footer>
          </blockquote>
        </FadeIn>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────── */}
      <section className="py-28 w-full bg-tint">
        <FadeIn className="w-full">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Left: heading */}
            <div className="md:col-span-1">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-medium" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                My Skills
              </p>
              <h2
                className="text-4xl font-bold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Building products that ship results.
              </h2>
            </div>

            {/* Right: 2×2 skill cards */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
              {skills.map((skill, i) => (
                <FadeIn key={skill.title} delay={i * 70} className="h-full">
                  <TiltCard className="h-full">
                    <div className="relative bg-card rounded-xl p-6 border border-dashed border-border hover:shadow-md hover:border-accent/30 transition-all duration-300 h-full">
                      <CornerPlus />
                      <div className="w-10 h-10 mb-4">
                        {skill.icon}
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {skill.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {skill.blurb}
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
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 items-start">

            {/* Sticky sidebar */}
            <FadeIn>
              <div className="md:sticky md:top-[80px]">
                <h2
                  className="text-4xl font-bold text-foreground leading-tight mb-4"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Projects
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  Three projects. Each owned end-to-end — from problem framing to shipping and measuring what changed.
                </p>
                <Button href="/projects">View all projects →</Button>
              </div>
            </FadeIn>

            {/* Scrolling project cards */}
            <div className="flex flex-col gap-6">
              {featuredProjects.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 100}>
                  <TiltCard>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block rounded-xl overflow-hidden border border-border hover:border-accent hover:shadow-[0_0_0_1px_#2563eb,0_8px_32px_rgba(37,99,235,0.1)] transition-all duration-300"
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
                      </div>

                      {/* Card body */}
                      <div className="p-6 bg-card">
                        <p className="text-[11px] text-muted mb-2">
                          {project.period}
                        </p>
                        <h3
                          className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mb-3"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed mb-4">
                          {project.tagline ?? project.summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold text-accent">
                            {project.outcome}
                          </p>
                          <span className="text-xs text-muted group-hover:text-accent transition-colors duration-300 shrink-0 ml-4">
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

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      {/* <TweetWall /> — hidden until real testimonials replace the placeholders in TweetWall.tsx */}

      {/* ── Footer CTA ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-6 flex justify-center bg-foreground">
        <AuroraBackdrop />
        <FadeIn className="relative z-10 text-center">
          <h2
            className="text-3xl font-semibold text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Currently open to PM roles.
          </h2>
          <p className="text-sm text-white/60 mb-8">
            Based in Singapore. Background in insurance, fintech, and AI product. Looking for the next hard problem to own.
          </p>
          <Button href="mailto:charles.csz@hotmail.com" size="lg">Get in touch →</Button>
        </FadeIn>
      </section>
    </div>
  );
}
