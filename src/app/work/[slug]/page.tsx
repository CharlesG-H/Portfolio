import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import StatusBadge from "@/components/StatusBadge";
import FadeIn from "@/components/FadeIn";
import CaseStudyToC from "@/components/CaseStudyToC";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Charles Chua` };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <FadeIn>
        <Link
          href="/work"
          className="text-xs text-[#71717a] hover:text-[#2563eb] transition-colors duration-300 mb-8 inline-block cursor-pointer"
        >
          ← Work
        </Link>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-8 items-start">
        {/* ── Main content ── */}
        <div className="bg-white rounded-2xl border border-[#e4e4e7] p-8">
          <FadeIn delay={60}>
            <div className="mb-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h1
                  className="text-2xl font-semibold tracking-tight text-[#09090b]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.title}
                </h1>
                <StatusBadge status={project.status} />
              </div>
              <div className="flex items-center gap-3 text-xs text-[#71717a]">
                <span>{project.company}</span>
                <span>·</span>
                <span>{project.role}</span>
                <span>·</span>
                <span>{project.period}</span>
              </div>
            </div>
          </FadeIn>

          {project.metric && (
            <FadeIn delay={100}>
              <div className="rounded-xl p-5 mb-8 bg-[#eff6ff] border border-[#bfdbfe]">
                <p className="text-xs text-[#3b82f6] uppercase tracking-widest mb-2 font-medium">
                  Outcome
                </p>
                <p
                  className="text-xl font-semibold tracking-tight text-[#09090b]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.outcome}
                </p>
                <p className="text-sm text-[#2563eb] font-semibold mt-1">{project.metric}</p>
              </div>
            </FadeIn>
          )}

          <div className="flex flex-col gap-7 mb-8">
            <FadeIn delay={140}>
              <div id="problem">
                <h2
                  className="text-xs uppercase tracking-widest text-[#71717a] mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Problem
                </h2>
                <p className="text-sm leading-relaxed text-[#09090b]">
                  {project.body.problem}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={180}>
              <div id="what-i-did">
                <h2
                  className="text-xs uppercase tracking-widest text-[#71717a] mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  What I did
                </h2>
                <p className="text-sm leading-relaxed text-[#09090b]">
                  {project.body.whatIDid}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={220}>
              <div id="result">
                <h2
                  className="text-xs uppercase tracking-widest text-[#71717a] mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Result
                </h2>
                <p className="text-sm leading-relaxed text-[#09090b]">
                  {project.body.result}
                </p>
              </div>
            </FadeIn>

            {project.body.quote && (
              <FadeIn delay={260}>
                <blockquote className="border-l-2 border-[#2563eb] pl-5 bg-[#f8faff] py-3 pr-4 rounded-r-lg">
                  <p className="text-sm leading-relaxed text-[#71717a] italic">
                    &ldquo;{project.body.quote}&rdquo;
                  </p>
                </blockquote>
              </FadeIn>
            )}
          </div>

          <FadeIn delay={300}>
            <div id="capabilities" className="pt-6 border-t border-[#e4e4e7]">
              <h2
                className="text-xs uppercase tracking-widest text-[#71717a] mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Capabilities demonstrated
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {project.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-[11px] text-[#71717a] border border-[#e4e4e7] px-2 py-0.5 rounded-sm bg-[#fafafa]"
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
    </div>
  );
}
