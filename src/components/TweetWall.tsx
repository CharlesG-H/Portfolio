import FadeIn from "@/components/FadeIn";

// Replace these with real testimonials
const testimonials = [
  {
    name: "Alicia Ng",
    handle: "alicia_ng_ms",
    role: "Head of O2O · MoneySmart",
    date: "Apr 2026",
    color: "#2563eb",
    content:
      "Charles turned around the O2O funnel redesign faster than any PM I've worked with. +63% leads in 6 weeks — and he drove the analysis, the A/B setup, and the stakeholder comms himself.",
  },
  {
    name: "Kai Lim",
    handle: "kailim_dev",
    role: "Senior Engineer · MoneySmart",
    date: "Mar 2026",
    color: "#7c3aed",
    content:
      "PRDs from Charles come with edge cases already mapped, acceptance criteria that actually help QA, and a PM who wants to understand the code path. Rare.",
  },
  {
    name: "Priya Sharma",
    handle: "priya_ux",
    role: "Product Designer · Bubblegum",
    date: "Jan 2025",
    color: "#06b6d4",
    content:
      "Most PMs hand over a brief and disappear. Charles was in every design critique, pushed back on assumptions, and cared about whether the thing actually looked good.",
  },
  {
    name: "Marcus Chen",
    handle: "marcus_ops",
    role: "Ops Lead · Bubblegum Insurance",
    date: "Nov 2024",
    color: "#059669",
    content:
      "The internal support tool Charles built cut our engineering dependency by 90%. We used to raise tickets for every routine diagnosis. Now we just don't.",
  },
  {
    name: "Jasmine Toh",
    handle: "jasmine_data",
    role: "Data Analyst · MoneySmart",
    date: "Feb 2026",
    color: "#d97706",
    content:
      "Charles segments before he hypothesises. The device segmentation insight that unlocked the funnel gains came from him asking the right question of the data, not the other way around.",
  },
  {
    name: "Wei Hong",
    handle: "weihong_pm",
    role: "VP Product · Bubblegum Insurance",
    date: "Dec 2024",
    color: "#ea580c",
    content:
      "Over 4 years, Charles owned some of the most technically complex PRDs we had — auth migration, admin panel, promo architecture. He always came back with a complete solution.",
  },
];

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function TweetWall() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <FadeIn>
          <p
            className="text-xs uppercase tracking-widest text-accent mb-4 font-medium"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Testimonials
          </p>
          <h2
            className="text-4xl font-bold text-foreground leading-tight mb-12"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What people say.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {testimonials.map((t, i) => (
            <FadeIn key={t.handle} delay={i * 70} className="h-full">
              <div className="h-full bg-card rounded-xl border border-border p-5 flex flex-col gap-4 hover:shadow-sm transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-tight">
                        {t.name}
                      </p>
                      <p className="text-[11px] text-muted">@{t.handle}</p>
                    </div>
                  </div>
                  <XIcon />
                </div>

                <p className="text-sm text-foreground leading-relaxed">
                  {t.content}
                </p>

                <div className="flex items-center justify-between pt-1 border-t border-subtle">
                  <p className="text-[11px] text-muted">{t.role}</p>
                  <p className="text-[11px] text-muted">{t.date}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
