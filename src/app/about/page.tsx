import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "About — Charles Chua",
};

const skills = [
  {
    category: "Product",
    items: "Roadmapping · Discovery · PRDs · RICE · JTBD",
  },
  {
    category: "Growth & Experimentation",
    items: "A/B Testing · Conversion Rate Optimisation · Funnel Analysis",
  },
  {
    category: "AI & Automation",
    items: "AI Agent Building · Prompt Engineering · MCP · Claude Code / Cursor · AI-Assisted Prototyping",
  },
  {
    category: "Design & UX",
    items: "User Research · Usability Testing · Wireframing · Figma",
  },
  {
    category: "Technical & Prototyping",
    items: "React · FastAPI · API Integration · GTM / dataLayer",
  },
  {
    category: "Delivery",
    items: "Stakeholder Management · Agile / Scrum · Jira · Confluence",
  },
  {
    category: "Analytics",
    items: "Holistics · Microsoft Clarity · Google Analytics · Mixpanel · Freshsales / Freshchat / Freshdesk",
  },
]

const strengths = [
  {
    label: "Experimentation & metrics",
    evidence: "74% reduction in D30 endorsement rate · +47% desktop conversion · +16.7% form conversion — all from structured A/B tests with pre-defined hypotheses",
  },
  {
    label: "AI & automation depth",
    evidence: "Built an AI quotation pipeline taking a ~45-minute manual quotation step toward a sub-10-minute automated one; uses Claude Code, MCP, and FastAPI in daily work",
  },
  {
    label: "Revenue impact",
    evidence: "300% gross premium growth and 100% revenue growth on Car Insurance (2022–2024)",
  },
  {
    label: "Technical depth",
    evidence: "Defined the Talon.One + Segment attribute & targeting setup; built internal tools with React and FastAPI; integrates GTM/dataLayer for tracking",
  },
  {
    label: "Customer lifecycle thinking",
    evidence: "Renewal Customer Routing, Email Login Migration, Mobile App Revamp (+20% engagement) — all address the post-purchase experience",
  },
  {
    label: "Ops & internal tooling",
    evidence: "Support Diagnostics Tool (routine policy edits handed back to ops) · Ops Admin Panel (ops team fully self-sufficient) — both shipped without consuming engineering capacity",
  },
]

export default function AboutPage() {
  return (
    <Container className="py-14">
      <PageHeader title="About" />

      <section className="mb-14">
        <p className="text-sm leading-relaxed text-foreground mb-4">
          I&apos;m Charles Chua, a Product Manager based in Singapore with 6 years
          building and scaling digital insurance products. I currently work at{" "}
          <span className="font-medium">MoneySmart</span>, driving O2O growth
          through experimentation and AI-powered tooling. Earlier in my time
          there, I spent five years building Bubblegum Insurance — Car, Travel,
          and PA — from
          early product through API integrations with insurer partners, purchase
          journey redesigns, and the 2024 mobile app revamp.
        </p>
        <p className="text-sm leading-relaxed text-muted mb-4">
          I combine product discovery, user research, and conversion optimisation
          with hands-on prototyping. When I find a recurring bottleneck — a
          form with too many steps, an advisor workflow that takes 45 minutes,
          a promo campaign that needs an engineering ticket — I try to solve it
          at the system level, not just once.
        </p>
        <p className="text-sm leading-relaxed text-muted">
          I read code, write specs that don&apos;t need chasing, and run experiments
          before making decisions. Currently building AI agents and internal tools
          using Claude Code, MCP, React, and FastAPI alongside my core PM work.
        </p>
      </section>

      <section className="mb-14">
        <h2
          className="text-xs uppercase tracking-widest text-muted mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Skills &amp; Tools
        </h2>
        <div className="flex flex-col divide-y divide-border">
          {skills.map((s) => (
            <div key={s.category} className="py-4 flex flex-col gap-1 sm:flex-row sm:gap-6">
              <span
                className="text-xs font-medium text-foreground shrink-0 w-48"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {s.category}
              </span>
              <span className="text-xs text-muted leading-relaxed">{s.items}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2
          className="text-xs uppercase tracking-widest text-muted mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Strengths (evidence-backed)
        </h2>
        <div className="flex flex-col divide-y divide-border">
          {strengths.map((s) => (
            <div key={s.label} className="py-4 flex flex-col gap-1">
              <span
                className="text-sm font-medium text-foreground"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {s.label}
              </span>
              <span className="text-sm text-muted leading-relaxed">{s.evidence}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2
          className="text-xs uppercase tracking-widest text-muted mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-sm font-medium text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>Product Manager — MoneySmart</span>
              <span className="text-xs text-muted">2020 – Present</span>
            </div>
            <p className="text-xs text-muted">O2O Growth &amp; AI (Jan 2026–) · Bubblegum Insurance (2020–2025)</p>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-sm font-medium text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>Associate Consultant — Zolution</span>
              <span className="text-xs text-muted">2019 – 2020</span>
            </div>
            <p className="text-xs text-muted">Translated business needs into functional specifications, managed end-to-end implementation</p>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-sm font-medium text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>Murdoch University</span>
              <span className="text-xs text-muted">2018 – 2020</span>
            </div>
            <p className="text-xs text-muted">B. Business — International Management &amp; Business Management</p>
          </div>
        </div>
      </section>

      <section>
        <h2
          className="text-xs uppercase tracking-widest text-muted mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Contact
        </h2>
        <a
          href="mailto:charles.csz@hotmail.com"
          className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300 cursor-pointer"
        >
          charles.csz@hotmail.com →
        </a>
        <p className="text-xs text-muted mt-2">Singapore</p>
      </section>
    </Container>
  );
}
