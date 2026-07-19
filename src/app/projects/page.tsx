import Link from "next/link";
import type { Project } from "@/lib/projects";
import { featuredProjects, otherProjects, sideProjects } from "@/lib/projects";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects",
  description:
    "Case studies in growth, zero-to-one builds, and internal tooling — each owned end-to-end, with the real numbers and decisions behind them.",
};

// Compact list row shared by the "Also shipped" and "Side projects" strips.
function ProjectRow({ project, delay }: { project: Project; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <Link
        href={`/projects/${project.slug}`}
        className="group grid grid-cols-1 sm:grid-cols-[1fr_14rem] items-center gap-x-8 py-3 border-b border-border hover:border-accent transition-colors duration-300"
      >
        <div className="min-w-0">
          <h3
            className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300 inline"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {project.title}
          </h3>
          <span className="text-sm text-muted">
            {" — "}
            {project.tagline ?? project.summary}
          </span>
        </div>
        {project.metric ? (
          <span className="hidden sm:inline-flex items-center justify-self-end rounded-sm border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs font-semibold text-accent whitespace-nowrap">
            {project.metric}
          </span>
        ) : project.side ? (
          <span className="hidden sm:inline-flex items-center justify-self-end rounded-sm border border-border bg-subtle px-2.5 py-1 text-xs font-medium text-muted whitespace-nowrap">
            Personal · {project.status}
          </span>
        ) : null}
      </Link>
    </FadeIn>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <FadeIn>
      <div className="mb-6">
        <h2
          className="font-semibold text-sm text-foreground"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {title}
        </h2>
        <p className="text-xs text-muted mt-0.5">{subtitle}</p>
      </div>
    </FadeIn>
  );
}

export default function WorkPage() {
  return (
    <Container className="py-14">
      <PageHeader
        title="Projects"
        intro="A few problems I owned end-to-end — diagnosed, shipped, and measured. Growth work and zero-to-one builds."
      />

      {/* ── Featured case studies ── */}
      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 auto-rows-fr">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* ── Also shipped ── */}
      {otherProjects.length > 0 && (
        <section className="mb-16">
          <SectionHeading
            title="Also shipped"
            subtitle="More work across growth, platform, and internal tooling."
          />
          <div className="flex flex-col">
            {otherProjects.map((project, i) => (
              <ProjectRow key={project.slug} project={project} delay={i * 40} />
            ))}
          </div>
        </section>
      )}

      {/* ── Side projects ── */}
      {sideProjects.length > 0 && (
        <section>
          <SectionHeading
            title="Side projects"
            subtitle="Personal builds outside of work — specced, built, and shipped solo."
          />
          <div className="flex flex-col">
            {sideProjects.map((project, i) => (
              <ProjectRow key={project.slug} project={project} delay={i * 40} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
