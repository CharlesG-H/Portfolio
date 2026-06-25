import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import FadeIn from "@/components/FadeIn";
import CaseStudyToC from "@/components/CaseStudyToC";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Renders body copy as paragraphs, splitting on blank lines so multi-beat
// narratives read as distinct paragraphs rather than one dense block.
function Prose({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-3">
      {text.split("\n\n").map((para, i) => (
        <p key={i} className="text-sm leading-relaxed text-foreground">
          {para}
        </p>
      ))}
    </div>
  );
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Charles Chua` };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <Container className="py-14">
      <FadeIn>
        <Button href="/projects" variant="ghost" size="sm" className="mb-8">
          ← Projects
        </Button>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-8 items-start">
        {/* ── Main content ── */}
        <div className="bg-card rounded-2xl border border-border p-8">
          <FadeIn delay={60}>
            <div className="mb-8">
              <h1
                className="text-2xl font-semibold tracking-tight text-foreground mb-2"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {project.title}
              </h1>
              {project.tagline && (
                <p className="text-base text-muted leading-relaxed mb-4 max-w-2xl">
                  {project.tagline}
                </p>
              )}
              <div className="flex items-center gap-3 text-xs text-muted">
                <span>{project.role}</span>
                <span>·</span>
                <span>{project.period}</span>
              </div>
            </div>
          </FadeIn>

          {project.metric && (
            <FadeIn delay={100}>
              <div className="rounded-xl p-5 mb-8 bg-tint border border-tint-border">
                <p className="text-xs text-accent-soft uppercase tracking-widest mb-2 font-medium">
                  Outcome
                </p>
                <p
                  className="text-xl font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.outcome}
                </p>
                <p className="text-sm text-accent font-semibold mt-1">{project.metric}</p>
              </div>
            </FadeIn>
          )}

          <div className="flex flex-col gap-7 mb-8">
            <FadeIn delay={140}>
              <div id="problem">
                <h2
                  className="text-xs uppercase tracking-widest text-muted mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Problem
                </h2>
                <Prose text={project.body.problem} />
              </div>
            </FadeIn>

            <FadeIn delay={180}>
              <div id="what-i-did">
                <h2
                  className="text-xs uppercase tracking-widest text-muted mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  What I did
                </h2>
                <Prose text={project.body.whatIDid} />
              </div>
            </FadeIn>

            <FadeIn delay={220}>
              <div id="result">
                <h2
                  className="text-xs uppercase tracking-widest text-muted mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Result
                </h2>
                <Prose text={project.body.result} />
              </div>
            </FadeIn>

            {project.body.quote && (
              <FadeIn delay={260}>
                <blockquote className="border-l-2 border-accent pl-5 bg-[#f8faff] py-3 pr-4 rounded-r-lg">
                  <p className="text-sm leading-relaxed text-muted italic">
                    &ldquo;{project.body.quote}&rdquo;
                  </p>
                </blockquote>
              </FadeIn>
            )}
          </div>

          <FadeIn delay={300}>
            <div id="capabilities" className="pt-6 border-t border-border">
              <h2
                className="text-xs uppercase tracking-widest text-muted mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Capabilities demonstrated
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {project.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-[11px] text-muted border border-border px-2 py-0.5 rounded-sm bg-background"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Sticky ToC ── */}
        <CaseStudyToC />
      </div>
    </Container>
  );
}
