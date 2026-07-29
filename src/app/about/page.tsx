import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "About — Charles Chua",
  description:
    "Product Manager in Singapore, six years at MoneySmart across insurance and growth. How I work, what I've built, and the tools I use to get there.",
};

// Section headings match the Projects page GroupLabel so both top-level pages
// carry the same weight. The smaller muted variant stays on case-study pages,
// where headings sit inside an article rather than structuring the page.
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground font-display mb-6">
      {children}
    </h2>
  );
}

const principles = [
  {
    label: "Find the system, not the symptom",
    body: "When the same problem keeps landing in the backlog (a manual step that quietly eats hours, a process that only works because one person holds it together), I treat it as a signal, not a task, and go after the system generating it instead of the instance in front of me.",
  },
  {
    label: "Run the experiment before the argument",
    body: "I'd rather ship a test with a clear hypothesis than win a meeting. Set it up well, let the data decide, and don't get attached to being right.",
  },
  {
    label: "Build to understand",
    body: "I read the code, prototype in React and FastAPI, and wire up the tracking myself. The closer I am to how it actually works, the better the calls I make about what to build.",
  },
  {
    label: "Hand the work back",
    body: "The best internal tool is one the ops or support team can run without me (or engineering) in the loop. Shipping it is only half the job; making myself unnecessary is the other half.",
  },
];

const skills = [
  {
    category: "Product & Growth",
    items: "Roadmapping · Discovery · PRDs · RICE · A/B Testing · Conversion Rate Optimisation · Funnel Analysis",
  },
  {
    category: "AI & Prototyping",
    items: "Rapid Prototyping · Workflow Automation · Prompt Engineering · Claude Code / Cursor · React · FastAPI · API Integration",
  },
  {
    category: "Design & Research",
    items: "User Research · Usability Testing · Figma",
  },
  {
    category: "Delivery & Analytics",
    items: "Stakeholder Management · Agile / Scrum · Jira / Confluence · Google Analytics · Mixpanel · Microsoft Clarity · Holistics",
  },
]

export default function AboutPage() {
  return (
    <Container className="py-14 mb-20">
      <PageHeader
        eyebrow="Profile"
        title="About"
        intro="How I got here, and how I work."
      />

      <section className="mb-14 max-w-2xl">
        <FadeIn>
        <p className="text-base leading-relaxed text-foreground mb-4">
          I&apos;m Charles Chua, a Product Manager in Singapore with six years at{" "}
          <span className="font-medium">MoneySmart</span>. I spent five of them
          on Bubblegum, MoneySmart&apos;s white-labelled insurance product,
          taking Car, Travel, and PA from early build through insurer API
          integrations, purchase-journey redesigns, and the 2024 app revamp.
          I&apos;ve since moved to O2O, another team at MoneySmart, where I
          drive growth through experimentation and AI-powered tooling.
        </p>
        <p className="text-base leading-relaxed text-muted">
          What I enjoy most is getting close to the problem: understanding why
          it happens, then shaping the solution that actually fixes it, not the
          easiest one to ship. Increasingly that means putting AI to work,
          building the tools that strip the busywork out of the craft, so the
          hard thinking is where my time goes.
        </p>
        </FadeIn>
      </section>

      <section className="mb-14">
        <FadeIn>
        <SectionHeading>Skills &amp; Tools</SectionHeading>
        <div className="flex flex-col divide-y divide-border">
          {skills.map((s) => (
            <div key={s.category} className="py-4 flex flex-col gap-1 sm:flex-row sm:gap-6">
              <span className="text-sm font-medium text-foreground shrink-0 w-48 font-display">
                {s.category}
              </span>
              <span className="text-sm text-muted leading-relaxed">{s.items}</span>
            </div>
          ))}
        </div>
        </FadeIn>
      </section>

      <section className="mb-14">
        <FadeIn>
        <SectionHeading>How I work</SectionHeading>
        <div className="flex flex-col divide-y divide-border">
          {principles.map((p) => (
            <div key={p.label} className="py-4 flex flex-col gap-1">
              <span className="text-sm font-medium text-foreground font-display">
                {p.label}
              </span>
              <span className="text-sm text-muted leading-relaxed max-w-2xl">{p.body}</span>
            </div>
          ))}
        </div>
        <p className="text-base text-muted leading-relaxed mt-6 mb-4 max-w-2xl">
          The numbers, the trade-offs, and the experiments that didn&apos;t work
          live in the case studies.
        </p>
        <Button href="/projects">View projects →</Button>
        </FadeIn>
      </section>

      <section className="mb-14">
        <FadeIn>
        <SectionHeading>Experience</SectionHeading>
        <div className="flex flex-col gap-6 max-w-2xl">
          <div>
            <div className="flex items-baseline justify-between gap-6 mb-1">
              <span className="text-sm font-medium text-foreground font-display">Product Manager · MoneySmart</span>
              <span className="text-sm text-muted shrink-0 tabular-nums">2020 – Present</span>
            </div>
            <p className="text-sm text-muted">O2O Growth &amp; AI (2026 – Present) · Bubblegum Insurance (2020 – 2025)</p>
          </div>
        </div>
        </FadeIn>
      </section>

      <section className="mb-14">
        <FadeIn>
        <SectionHeading>Education</SectionHeading>
        <div className="max-w-2xl">
          <div className="flex items-baseline justify-between gap-6 mb-1">
            <span className="text-sm font-medium text-foreground font-display">Murdoch University</span>
            <span className="text-sm text-muted shrink-0 tabular-nums">2018 – 2020</span>
          </div>
          <p className="text-sm text-muted">Bachelor of Business · International Management &amp; Business Management</p>
        </div>
        </FadeIn>
      </section>

      <section>
        <FadeIn>
        <SectionHeading>Contact</SectionHeading>
        <a
          href="mailto:charles.csz@hotmail.com"
          className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300 cursor-pointer font-display"
        >
          charles.csz@hotmail.com →
        </a>
        </FadeIn>
      </section>
    </Container>
  );
}
