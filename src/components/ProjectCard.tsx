import Link from "next/link";
import type { Project } from "@/lib/projects";
import FadeIn from "@/components/FadeIn";
import TiltCard from "@/components/TiltCard";

// Featured case-study card: gradient metric header + body. Built to fill its
// grid cell (h-full chain) so rows stay equal-height when laid out in a grid.
export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay} className="h-full">
      <TiltCard className="h-full">
        <Link
          href={`/projects/${project.slug}`}
          className="group flex h-full flex-col rounded-xl overflow-hidden border border-border bg-card hover:border-accent hover:shadow-[0_0_0_1px_#2563eb,0_8px_32px_rgba(37,99,235,0.1)] transition-all duration-300"
        >
          {/* Gradient header — carries the site's dot-grid motif so the
              colored band reads as designed surface, not empty space. */}
          <div
            className={`bg-gradient-to-br ${project.gradient} h-44 flex flex-col justify-end p-6 relative`}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <span className="absolute top-5 right-6 text-[11px] font-medium uppercase tracking-widest text-white/50">
              {project.status}
            </span>
            {project.metric && (
              <span
                className="relative text-2xl font-bold text-white/90 tracking-tight leading-snug max-w-[85%] text-balance"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {project.metric}
              </span>
            )}
          </div>

          {/* Card body */}
          <div className="p-6 bg-card flex flex-1 flex-col">
            <p className="text-[11px] text-muted mb-2">{project.period}</p>
            <h3
              className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mb-3"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {project.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {project.tagline ?? project.summary}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <p className="text-xs font-semibold text-accent">{project.outcome}</p>
              <span className="text-xs text-muted group-hover:text-accent transition-colors duration-300 shrink-0 ml-4">
                Read case study →
              </span>
            </div>
          </div>
        </Link>
      </TiltCard>
    </FadeIn>
  );
}
