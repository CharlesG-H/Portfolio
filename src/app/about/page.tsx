import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About — Charles Chua",
};

const principles = [
  {
    label: "Find the system, not the symptom",
    body: "A form with too many steps, a 45-minute manual workflow, a promo that needs an engineering ticket every time — I'd rather fix the thing that keeps generating the problem than patch it once.",
  },
  {
    label: "Run the experiment before the argument",
    body: "I'd rather ship a test with a clear hypothesis than win a meeting. Set it up well, let the data decide, and don't get attached to being right.",
  },
  {
    label: "Build to understand",
    body: "I read the code, prototype in React and FastAPI, and wire up the tracking myself. Being close to how it actually works makes me a sharper PM — and a faster one.",
  },
  {
    label: "Hand the work back",
    body: "The best internal tool is one the ops or support team can run without me — or engineering — in the loop. Shipping it is only half the job; making myself unnecessary is the other half.",
  },
];

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

export default function AboutPage() {
  return (
    <Container className="py-14">
      <PageHeader title="About" />

      <section className="mb-14">
        <p className="text-sm leading-relaxed text-foreground mb-4">
          I&apos;m Charles Chua, a Product Manager in Singapore with 6 years at{" "}
          <span className="font-medium">MoneySmart</span>{" "}building digital
          insurance products. I spent five years on Bubblegum, MoneySmart&apos;s
          white-labelled insurance product — taking Car, Travel, and PA from
          early build through insurer API integrations, purchase-journey
          redesigns, and the
          2024 app revamp. I&apos;ve since moved to O2O, another team at
          MoneySmart, where I drive growth through experimentation and
          AI-powered tooling.
        </p>
        <p className="text-sm leading-relaxed text-muted mb-4">
          I pair product discovery, user research, and conversion optimisation
          with hands-on prototyping. When I run into a recurring bottleneck, I
          look past the symptom to the system creating it — and fix it at the
          root, so it stops coming back.
        </p>
        <p className="text-sm leading-relaxed text-muted">
          What I enjoy most is getting close to the problem: understanding why
          it happens, then shaping the solution that actually fixes it — not the
          easiest one to ship. Increasingly that means putting AI to work,
          building solutions that make me sharper and faster at the PM craft
          itself.
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
          How I work
        </h2>
        <div className="flex flex-col divide-y divide-border">
          {principles.map((p) => (
            <div key={p.label} className="py-4 flex flex-col gap-1">
              <span
                className="text-sm font-medium text-foreground"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {p.label}
              </span>
              <span className="text-sm text-muted leading-relaxed">{p.body}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted leading-relaxed mt-6 mb-4">
          The numbers, the trade-offs, and the experiments that didn&apos;t work
          live in the case studies.
        </p>
        <Button href="/projects">See the work →</Button>
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
