import Link from "next/link";
import { projects } from "@/lib/projects";
import StatusBadge from "@/components/StatusBadge";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Work — Charles Chua",
};

const o2o = projects.filter((p) => p.company === "MoneySmart O2O");
const bubblegum = projects.filter((p) => p.company === "Bubblegum Insurance");

type Group = { label: string; sub: string; items: typeof projects }

const groups: Group[] = [
  {
    label: "MoneySmart — O2O Growth & AI",
    sub: "Jan 2026 – Present",
    items: o2o,
  },
  {
    label: "MoneySmart — Bubblegum Insurance",
    sub: "2020 – 2025 · Car, Travel, PA",
    items: bubblegum,
  },
]

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <FadeIn>
        <h1
          className="text-xs uppercase tracking-widest text-[#71717a] mb-12"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Work
        </h1>
      </FadeIn>

      {groups.map((group) => (
        <section key={group.label} className="mb-14">
          <FadeIn>
            <div className="mb-6">
              <h2
                className="font-semibold text-sm text-[#09090b]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {group.label}
              </h2>
              <p className="text-xs text-[#71717a] mt-0.5">{group.sub}</p>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-3">
            {group.items.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 60}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block p-5 rounded-xl bg-white border border-[#e4e4e7] hover:border-[#2563eb] hover:shadow-[0_0_0_1px_#2563eb,0_4px_24px_rgba(37,99,235,0.08)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-4 mb-1.5">
                    <h3
                      className="text-sm font-medium text-[#09090b] group-hover:text-[#2563eb] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] text-[#71717a]">
                        {project.role}
                      </span>
                      <StatusBadge status={project.status} />
                    </div>
                  </div>
                  <p className="text-sm text-[#71717a] leading-relaxed">
                    {project.summary}
                  </p>
                  {project.metric && (
                    <p className="text-xs font-semibold text-[#2563eb] mt-2">
                      {project.metric}
                    </p>
                  )}
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

