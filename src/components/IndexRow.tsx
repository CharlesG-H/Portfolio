import Link from "next/link";
import type { Project } from "@/lib/projects";
import FadeIn from "@/components/FadeIn";

// One unified index row for a project. The gradient the project carries
// elsewhere shows up here as a slim spine plus a faint hover wash, so each entry
// keeps its identity without reverting to a heavy card. Shared by the projects
// page and the home-page "Selected work" teaser so both read identically.
export default function IndexRow({
  project,
  n,
  large = false,
  fade = true,
}: {
  project: Project;
  n: number;
  large?: boolean;
  // Scroll-triggered fade-in. Off for rows revealed inside the accordion, whose
  // container fades the whole group in on open — a per-row IntersectionObserver
  // set up while collapsed can misfire and leave a row stuck invisible.
  fade?: boolean;
}) {
  const hook = project.tagline ?? project.summary;

  const row = (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex items-stretch gap-4 sm:gap-7 py-6 sm:py-7 border-b border-border first:border-t transition-colors duration-300"
    >
      {/* hover color wash, tinted with the project gradient */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-[-1rem] inset-y-0 rounded-lg bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300`}
      />

      {/* index numeral */}
      <span
        className={`relative shrink-0 tabular-nums leading-none pt-1 text-[#d4d4d8] group-hover:text-accent transition-colors duration-300 ${
          large ? "w-9 sm:w-16 text-2xl sm:text-4xl" : "w-9 sm:w-14 text-xl sm:text-2xl"
        }`}
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {String(n).padStart(2, "0")}
      </span>

      {/* gradient spine */}
      <span
        aria-hidden
        className={`relative shrink-0 self-stretch w-[3px] rounded-full bg-gradient-to-b ${project.gradient} group-hover:w-1.5 transition-all duration-300`}
      />

      {/* title + hook */}
      <div className="relative min-w-0 flex-1">
        <div className="flex items-center gap-2.5 flex-wrap">
          <h3
            className={`font-semibold text-foreground group-hover:text-accent transition-colors duration-300 ${
              large ? "text-lg sm:text-2xl" : "text-base sm:text-lg"
            }`}
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {project.title}
          </h3>
          {project.side && (
            <span className="rounded-full border border-border bg-subtle px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted">
              Personal
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2 max-w-2xl">
          {hook}
        </p>

        {/* metric — inline on mobile where the right rail is hidden */}
        {project.metric && (
          <div className="mt-3 flex items-center gap-3 sm:hidden">
            <span className="inline-flex items-center rounded-sm border border-accent/20 bg-accent/5 px-2 py-0.5 text-[11px] font-semibold text-accent">
              {project.metric}
            </span>
          </div>
        )}
      </div>

      {/* right rail — the headline metric, when the project has one. Sized to
          fit the widest metric so the chip never spills into the hook text. */}
      <div className="relative hidden sm:flex flex-col items-end justify-center shrink-0 w-72 pl-6 text-right">
        {project.metric && (
          <span className="inline-flex items-center rounded-sm border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs font-semibold text-accent whitespace-nowrap">
            {project.metric}
          </span>
        )}
      </div>

      {/* arrow */}
      <span
        aria-hidden
        className="relative hidden sm:flex items-center self-center shrink-0 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </span>
    </Link>
  );

  return fade ? <FadeIn delay={Math.min(n, 6) * 40}>{row}</FadeIn> : row;
}
