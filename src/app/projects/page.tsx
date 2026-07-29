import { featuredProjects, otherProjects, sideProjects } from "@/lib/projects";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/ui/Container";
import CollapsibleRows from "@/components/CollapsibleRows";
import IndexRow from "@/components/IndexRow";

export const metadata = {
  title: "Projects — Charles Chua",
  description:
    "Case studies in growth, zero-to-one builds, and internal tooling: each owned end-to-end, with the real numbers and decisions behind them.",
};

function GroupLabel({ text, count }: { text: string; count: number }) {
  return (
    <FadeIn>
      <div className="flex items-baseline gap-3 mb-6">
        <h2
          className="text-sm font-semibold uppercase tracking-widest text-foreground"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {text}
        </h2>
        <span className="text-xs text-muted tabular-nums">{String(count).padStart(2, "0")}</span>
      </div>
    </FadeIn>
  );
}

export default function WorkPage() {
  const workCount = featuredProjects.length + otherProjects.length;
  const totalCount = workCount + sideProjects.length;

  return (
    <Container className="py-14 mb-20">
      {/* header */}
      <header className="mb-14">
        <FadeIn>
          <p
            className="text-xs uppercase tracking-widest text-accent mb-4 font-medium"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Case studies
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.05]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Projects
          </h1>
          <p className="mt-5 text-base text-muted leading-relaxed max-w-xl">
            Problems I owned end-to-end: diagnosed, shipped, and measured. Growth
            work, zero-to-one builds, and the internal tools that made teams faster.
          </p>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
            <span className="tabular-nums">{totalCount} projects</span>
            <span className="text-border">/</span>
            <span>Insurtech &amp; fintech</span>
            <span className="text-border">/</span>
            <span className="tabular-nums">2020 – 2026</span>
          </div>
        </FadeIn>
      </header>

      {/* work projects — featured shown, the rest behind a collapsible reveal */}
      <section>
        <GroupLabel text="Work projects" count={workCount} />
        <div className="flex flex-col">
          {featuredProjects.map((project, i) => (
            <IndexRow key={project.slug} project={project} n={i + 1} large />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <CollapsibleRows count={otherProjects.length}>
            {otherProjects.map((project, i) => (
              <IndexRow
                key={project.slug}
                project={project}
                n={featuredProjects.length + i + 1}
                large
                fade={false}
              />
            ))}
          </CollapsibleRows>
        )}
      </section>

      {/* side projects — personal builds, in their own section */}
      {sideProjects.length > 0 && (
        <section className="mt-20">
          <GroupLabel text="Side projects" count={sideProjects.length} />
          <div className="flex flex-col">
            {sideProjects.map((project, i) => (
              <IndexRow key={project.slug} project={project} n={i + 1} large />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
