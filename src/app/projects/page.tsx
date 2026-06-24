import Link from "next/link";
import { projects } from "@/lib/projects";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "Projects — Charles Chua",
};

const o2o = projects.filter((p) => p.company === "MoneySmart O2O");
const bubblegum = projects.filter((p) => p.company === "Bubblegum Insurance");

type Group = { label: string; sub: string; items: typeof projects }

const groups: Group[] = [
  {
    label: "Growth & AI",
    sub: "Jan 2026 – Present",
    items: o2o,
  },
  {
    label: "Insurance Platform",
    sub: "2020 – 2025 · Car, Travel, PA",
    items: bubblegum,
  },
]

export default function WorkPage() {
  return (
    <Container className="py-14">
      <PageHeader
        title="Projects"
        intro="A few problems I owned end-to-end — diagnosed, shipped, and measured."
      />

      {groups.map((group) => (
        <section key={group.label} className="mb-14">
          <FadeIn>
            <div className="mb-6">
              <h2
                className="font-semibold text-sm text-foreground"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {group.label}
              </h2>
              <p className="text-xs text-muted mt-0.5">{group.sub}</p>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-3">
            {group.items.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 60}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block p-5 rounded-xl bg-card border border-border hover:border-accent hover:shadow-[0_0_0_1px_#2563eb,0_4px_24px_rgba(37,99,235,0.08)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  <h3
                    className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300 mb-1.5"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.tagline ?? project.summary}
                  </p>
                  {project.metric && (
                    <p className="text-xs font-semibold text-accent mt-2">
                      {project.metric}
                    </p>
                  )}
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      ))}
    </Container>
  );
}

