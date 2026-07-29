import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, gradientStops } from "@/lib/projects";
import FadeIn from "@/components/FadeIn";
import CaseStudyToC from "@/components/CaseStudyToC";
import AuroraBackdrop from "@/components/AuroraBackdrop";
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
    <>
      {/* ── Masthead ── full-bleed dark band, aurora tinted to this project's
          own gradient so the colour identity from the index carries through. */}
      <section className="relative overflow-hidden bg-foreground">
        <AuroraBackdrop compact colors={gradientStops(project.gradient)} />
        <Container className="relative py-16">
          {/* Plain link rather than Button ghost: that variant hardcodes
              text-muted, which is unreadable on the dark band. */}
          <Link
            href="/projects"
            className="inline-flex items-center text-xs font-medium text-white/60 hover:text-white transition-colors duration-300 mb-8"
          >
            ← Projects
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.1] font-display">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="mt-4 text-base text-white/70 leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          )}
          <div className="mt-6 flex items-center gap-3 text-xs text-white/50">
            <span>{project.role}</span>
            <span>·</span>
            <span>{project.period}</span>
          </div>
        </Container>
      </section>

      <Container className="py-14 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-8 items-start">
        {/* ── Main content ── */}
        <div className="bg-card rounded-2xl border border-border p-8">
          {project.metric && (
            <FadeIn>
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
    </>
  );
}
