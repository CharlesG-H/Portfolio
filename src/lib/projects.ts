export type Status = "Done" | "In Progress" | "Live" | "Experiment"

export type Project = {
  slug: string
  title: string
  company: "Bubblegum Insurance" | "MoneySmart O2O" | "MoneySmart"
  role: "Owner" | "Co-owner" | "Contributor"
  status: Status
  period: string
  tagline?: string
  summary: string
  outcome: string
  metric?: string
  gradient: string
  capabilities: string[]
  featured?: boolean
  body: {
    problem: string
    whatIDid: string
    result: string
    quote?: string
  }
}

export const projects: Project[] = [
  // â”€â”€ MoneySmart O2O (Jan 2026 – Present) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "o2o-lead-funnel",
        gradient: "from-[#1e3a8a] to-[#2563eb]",
    title: "Insurance Lead Funnel Redesign",
    company: "MoneySmart O2O",
    role: "Owner",
    status: "Live",
    period: "Jan 2026",
    tagline: "Three experiments turned an 89% drop-off into a device-split rollout — +47% desktop conversion, +63% more leads.",
    summary:
      "Rebuilt the Term Life lead funnel, where 89% of visitors left without engaging. A sequence of A/B tests showed the answer wasn't one form for everyone — it was device-specific: a single inline form for desktop, the original CTA flow for mobile.",
    outcome: "+47% desktop Sessions→Lead conversion · +63% absolute leads",
    metric: "Desktop +47% · Leads +63%",
    capabilities: ["Experiment design", "A/B testing", "Funnel analysis", "Device segmentation", "Statistical judgment"],
    featured: true,
    body: {
      problem:
        "The Term Life lead funnel leaked at the top — 89% of visitors left without ever engaging the form. The legacy flow asked for 9 inputs across 2 steps before showing a single plan or price: an inverted value exchange. I triangulated three signals to confirm it was worth fixing. Logged-in users, who already trust the platform, converted at 16.3% against a ~5% baseline for everyone else. Phone-number fields are a known conversion-killer for Singaporean users who avoid unknown callers. And competitors had all moved to “value before effort” layouts. The target was Sessions→Lead conversion, with a guardrail that qualified-lead rate couldn't drop below 35%.",
      whatIDid:
        "I didn't ship a redesign — I ran a sequence of experiments and let each result pick the next move.\n\nFirst, a single-page form (just Name, Phone, Email) against the legacy 3-step flow. It lifted Sessions→Lead conversion +16.7%, consistent across three independent measurement periods. The mechanism was a funnel-width vs completion trade-off: the single form widened the top of the funnel (22.1% vs 13.5% of sessions started it) far more than it lost on per-starter completion. Volume was low (26 vs 21 leads), so I shipped on the consistent directional signal across three periods rather than waiting on a single p-value.\n\nThe obvious next step was to push further and embed the form straight into the hero. That test failed — it drove 47% more interactions but 43% fewer of them became leads. Engagement up, intent down: a clean reminder that more activity isn't more outcome.\n\nThe decisive test put an optimised single form against a dual-CTA layout, and I read the result out by device. The same form won decisively on desktop (+47% conversion, +63% more leads) and lost badly on mobile, where the original flow drove 2.3x the leads — the inline form was simply too heavy on a small screen. At the blended level the test looked inconclusive; the desktop win was being masked by mobile drag.",
      result:
        "Instead of a blanket ship-or-kill, I rolled out by device: the single inline form for desktop, the original dual-CTA flow kept for mobile. Desktop Sessions→Lead conversion rose 47% (8.33% vs 5.65%) with 63% more leads, while mobile lead volume was protected. The durable win was the operating lesson — in this funnel, device is a first-class segment, not a detail. Optimising for the blended average would have shipped a change that quietly hurt half the traffic.",
      quote:
        "The blended numbers said ‘inconclusive.’ Splitting by device said ‘ship desktop, revert mobile.’ Optimising for the average would have actively hurt half our traffic.",
    },
  },
  {
    slug: "ai-quotation-tool",
        gradient: "from-[#4c1d95] to-[#7c3aed]",
    title: "AI Quotation Pipeline for Advisors",
    company: "MoneySmart O2O",
    role: "Owner",
    status: "Live",
    period: "2025 – 2026",
    tagline: "An AI pipeline that turns a recorded sales call into submitted insurer quotes — same revenue on 19% fewer leads.",
    summary:
      "Project Miner — an internal automation platform that turns a recorded sales call into submitted insurer quotes. It bridges Granola call transcripts → a prefilled form → headless automation against the Singlife, Income and Cigna portals, returning PDF quotes by email. Built to remove a 45-minute manual quotation step, then extended to absorb a 60%-of-leads bottleneck before the one specialist who handled it went on leave.",
    outcome: "Revenue held flat on 19% fewer leads · +14% value per qualified lead · qualified-lead rate 34.9% → 38.0%",
    metric: "+14% value/qualified lead",
    capabilities: ["AI & automation", "Systems design", "Internal tooling", "Operational continuity", "Technical depth"],
    featured: true,
    body: {
      problem:
        "Generating a quote was a ~45-minute manual job per lead: an advisor pulled details from the call, logged into each insurer's portal, re-keyed everything, cleared the OTP, and assembled the PDFs by hand. Two things made it urgent. It scaled badly — advisors were already mandated to make the first qualification call, so manual entry on top was pure administrative drag. And sharper still: health insurance was 60% of all organic leads and was handled almost single-handedly by a support specialist who was going on maternity leave. Without automation, that volume would land on advisors overnight, risking lead abandonment exactly when it mattered most.",
      whatIDid:
        "I specced and drove Miner — a pipeline that turns a recorded call into submitted quotes with a human only in the review seat.\n\nThe flow: Granola captures the call and emits a structured JSON payload; an n8n workflow posts it to a Lead Service and drops a prefilled form link into Slack; the advisor reviews and fills any gaps; on submit, the request fans out through an SQS queue to workers that drive Playwright automation against the Singlife, Income and Cigna portals — OTP handling included — then return PDF quotes and screenshots by email and write the premium back to the CRM.\n\nThe part most internal tools skip is the part I went after: the painful end of the workflow. Not just prefilling a form, but logging into each insurer, clearing OTP, reconciling the field differences between local and international plans, and giving advisors a review UI to correct extraction gaps before anything was submitted. The design target was to take that ~45-minute job under 10.",
      result:
        "I measured the term & mortgage rollout quarter-over-quarter (Q3 pre vs Q4 post), and was careful to separate signal from noise. Total lead volume fell 19% over the period — but that was seasonality and a Google core update, not Miner, so I didn't claim it. What Miner can be credited with is what happened to the leads that remained: qualified-lead rate rose from 34.9% to 38.0%, value per qualified lead rose 14% (S$199 → S$226), and total revenue held flat (~S$66k) despite the 19% drop in volume. Same output from materially less input. On the strength of that, I scoped the health extension to bring the 60%-of-leads category onto the same pipeline ahead of the specialist's leave.",
      quote:
        "Most internal tools automate the easy parts and leave the painful parts manual. This one went after the painful parts — the portal logins, the OTP, the local-versus-international field differences. That's where the 45 minutes actually lived.",
    },
  },
  {
    slug: "single-page-form",
        gradient: "from-[#0c4a6e] to-[#0284c7]",
    title: "Single-Page Lead Form",
    tagline: "Replaced a multi-step form with one page — +16.7% lead conversion.",
    company: "MoneySmart O2O",
    role: "Owner",
    status: "Live",
    period: "Jan 2026",
    summary:
      "Shipped a single-page form to replace the legacy multi-step lead flow – lifting Sessions→Lead conversion +16.7%, consistent across 3 measurement periods.",
    outcome: "+16.7% Sessions→Lead conversion",
    metric: "+16.7% (3 measurement periods)",
    capabilities: ["Conversion optimisation", "A/B testing", "Form UX", "Funnel analysis"],
    body: {
      problem:
        "The legacy multi-step lead form created friction at every step transition. Funnel decomposition showed the steepest drop-offs happening between steps, not at the final submit.",
      whatIDid:
        "Used funnel decomposition to isolate where users dropped off, then designed and shipped a single-page form that eliminated step transitions. Validated through a continuous A/B testing program across insurance pages.",
      result:
        "+16.7% lift in Sessions→Lead conversion, consistent across 3 measurement periods – confirming it wasn't a spike.",
    },
  },
  {
    slug: "whatsapp-lead-modal",
        gradient: "from-[#134e4a] to-[#0d9488]",
    title: "WhatsApp Lead Capture",
    tagline: "An alternative WhatsApp entry point — 83–100% completion vs ~30%.",
    company: "MoneySmart O2O",
    role: "Owner",
    status: "Live",
    period: "Jan 2026",
    summary:
      "Surfaced a WhatsApp lead capture modal as an alternative entry point – achieving 83–100% completion vs ~30% for the legacy multi-step flow.",
    outcome: "83–100% modal completion vs ~30% legacy",
    metric: "83–100% vs ~30%",
    capabilities: ["Growth experimentation", "CRM integration", "Top-of-funnel optimisation"],
    body: {
      problem:
        "A significant segment of users – particularly those on mobile or with lower form-fill intent – weren't converting through the standard lead form.",
      whatIDid:
        "Designed and shipped a WhatsApp lead capture modal as an alternative entry point, integrated with Freshchat and Freshsales for lead routing and follow-up.",
      result:
        "Modal completion rate of 83–100% vs ~30% for the legacy multi-step flow. Provided a higher-intent, lower-friction path for a meaningful user segment.",
    },
  },

  // â”€â”€ Bubblegum Insurance (2020 – 2025) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "car-insurance-growth",
        gradient: "from-[#312e81] to-[#4f46e5]",
    title: "Car Insurance Growth",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "2022 – 2024",
    tagline: "Two years of product and conversion work — +300% gross premium.",
    summary:
      "Drove sustained Car Insurance growth through product and conversion improvements – lifting gross premium 300% and revenue 100% over two years.",
    outcome: "300% gross premium growth · 100% revenue growth",
    metric: "Gross premium +300% · Revenue +100%",
    capabilities: ["Growth", "Conversion optimisation", "Product strategy", "Funnel analysis"],
    featured: true,
    body: {
      problem:
        "Car insurance was Bubblegum's core product but growth had plateaued. The purchase and claims journeys had friction that wasn't visible without systematic funnel analysis and user research.",
      whatIDid:
        "Drove sustained product and conversion improvements grounded in user interviews, funnel analysis, and journey mapping. Redesigned both the purchase and claims journeys to reduce friction and drop-off. Validated changes through usability testing and close design partnership on wireframes and prototypes.",
      result:
        "Gross premium grew 300% and revenue grew 100% between 2022 and 2024.",
      quote:
        "The biggest gains came from the claims journey, not the purchase journey – customers who had a smooth claim renewed at dramatically higher rates.",
    },
  },
  {
    slug: "endorsement-experiment",
        gradient: "from-[#155e75] to-[#0891b2]",
    title: "Reducing Post-Purchase Policy Changes",
    tagline: "An A/B test that cut early policy changes 74% by improving pre-purchase clarity.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "Q4 2024",
    summary:
      "A/B experiment targeting the high rate of policy endorsements (changes) within 30 days of purchase – a signal of poor pre-purchase clarity.",
    outcome: "74% reduction in D30 POI endorsement rate",
    metric: "4.37% → 1.13%",
    capabilities: ["Experimentation", "Data-driven decision making", "Problem framing"],
    body: {
      problem:
        "A high percentage of customers were making policy endorsements (changes) within 30 days of purchasing – a proxy for poor pre-purchase clarity that drove up ops costs.",
      whatIDid:
        "Designed and executed an A/B experiment. Defined the hypothesis, success metric (D30 endorsement rate), and acceptance criteria before launch.",
      result:
        "D30 endorsement rate dropped from 4.37% to 1.13% – a 74% reduction, exceeding the 60% target set before the experiment began.",
      quote:
        "Our clearest evidence yet that pre-purchase clarity directly reduces ops burden – produced through a properly designed experiment, not intuition.",
    },
  },
  {
    slug: "mobile-app-revamp",
        gradient: "from-[#1e1b4b] to-[#4338ca]",
    title: "Mobile App Revamp",
    tagline: "Repositioned the app from sales funnel to service hub — +20% engagement.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "Q3 2024",
    summary:
      "Led the 2024 mobile app revamp – repositioning the app from a purchase funnel to a post-purchase service hub, lifting monthly user engagement 20%.",
    outcome: "+20% monthly user engagement",
    metric: "+20% monthly engagement",
    capabilities: ["Strategic vision", "Mobile product design", "Cross-functional leadership"],
    featured: true,
    body: {
      problem:
        "The Bubblegum app was structured around the purchase journey. Post-purchase customers had poor visibility into their policies, limited self-service, and no clear support path – leading to low engagement after the initial purchase.",
      whatIDid:
        "Owned the App Refresh initiative. Authored detailed requirements for four redesigned pages: Homescreen (6 sections), Discover (PDP per product, logged-in/guest states), My Policies (active/inactive grouping, 6 policy statuses including new 'Upcoming' state, renewal CTAs), and Support (WhatsApp, FAQs, Freshdesk). Marketing banners managed via Strapi CMS.",
      result:
        "Shipped Sep 2024. Monthly user engagement lifted 20%. App repositioned as a post-purchase service hub.",
      quote:
        "The App Refresh wasn't a visual update – it was a strategic repositioning. We shifted the app's job from 'sell insurance' to 'serve customers after they've bought.'",
    },
  },
  {
    slug: "tech-support-tool",
        gradient: "from-[#075985] to-[#0284c7]",
    title: "Support Diagnostics Tool",
    tagline: "Gave support direct visibility into policy data — cutting engineering troubleshooting 90%.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "2023",
    summary:
      "Built an internal Tech Support Tool that cut engineering troubleshooting effort by 90%, freeing developer time for product work.",
    outcome: "90% reduction in engineering troubleshooting effort",
    metric: "Eng troubleshooting effort –90%",
    capabilities: ["Internal tooling", "Ops efficiency", "Cross-functional coordination"],
    body: {
      problem:
        "Engineers were spending significant time on support troubleshooting – diagnosing customer-reported issues that didn't require code changes but consumed developer focus and context-switching.",
      whatIDid:
        "Defined and built an internal Tech Support Tool to give the ops and support team direct visibility into policy data and common issue states – eliminating the need to loop in engineering for routine diagnosis. Coordinated delivery across engineering, marketing, operations, and compliance to ship within regulatory constraints.",
      result:
        "Cut engineering troubleshooting effort by 90%, freeing developer time for product work.",
    },
  },
  {
    slug: "user-identity",
        gradient: "from-[#0c4a6e] to-[#06b6d4]",
    title: "Email Login Migration",
    tagline: "Moved 20,000+ customers from phone OTP to email login with a unified identity layer.",
    company: "Bubblegum Insurance",
    role: "Co-owner",
    status: "Done",
    period: "Q4 2024",
    summary:
      "Migrated 20,000+ customers from phone OTP to email-based primary authentication, with omni-login (email or mobile) and full account consolidation logic.",
    outcome: "Unified identity layer across all Bubblegum products",
    metric: "20,000+ accounts migrated",
    capabilities: ["Ambiguity navigation", "Edge case handling", "Risk identification"],
    featured: true,
    body: {
      problem:
        "Bubblegum's auth relied on phone OTP, creating friction and no persistent identity layer. Existing customers had fragmented accounts across products.",
      whatIDid:
        "Co-owned the PRD for migrating to email-based primary auth. Mapped all user segments – new users, existing users, Myinfo-linked accounts, dealer dual-tagged policies. Defined consolidation logic and risk controls around data bleed, loss of access, and historical policy continuity.",
      result:
        "Omni-login (email or mobile) shipped. Unified identity layer across all Bubblegum products.",
      quote:
        "The migration involved 20,000+ existing accounts, multiple edge cases around dealer-tagged policies and Myinfo, and real risk of customers losing policy access – we mapped and resolved all of them before a single line of code was written.",
    },
  },
  {
    slug: "profile-v1",
        gradient: "from-[#5b21b6] to-[#7c3aed]",
    title: "Self-Serve Profile Management",
    tagline: "Let customers edit their own details — eliminated a support-ticket category.",
    company: "Bubblegum Insurance",
    role: "Co-owner",
    status: "Done",
    period: "Q4 2024",
    summary:
      "Self-serve profile management for all B2C customers – reducing CS ticket volume for routine profile update requests.",
    outcome: "Self-serve profile live, CS ticket category eliminated",
    capabilities: ["Customer-centric design", "CS deflection", "Cross-functional coordination"],
    body: {
      problem:
        "Customers had to contact support to update basic details like address, email, or named drivers – creating unnecessary CS volume and a poor experience.",
      whatIDid:
        "Co-owned the Profile PRD end-to-end. Structured five sections: My Details, Contact Details, Friends & Family (up to 10 contacts pre-filled from policies), Vehicle Details (up to 5 vehicles, non-editable on active policies), and Consent & Privacy. Designed account deactivation with 30-day data retention.",
      result:
        "Epic BBG-3004 shipped. Self-serve profile management live for all B2C customers.",
    },
  },
  {
    slug: "admin-panel",
        gradient: "from-[#1e293b] to-[#475569]",
    title: "Ops Admin Panel",
    tagline: "A no-code internal tool for full policy lifecycle management — shipped in one quarter.",
    company: "Bubblegum Insurance",
    role: "Contributor",
    status: "Done",
    period: "Q4 2024",
    summary:
      "Internal ops tool built on Jet Admin (no-code) covering full policy lifecycle management, Customer 360, and RBAC – shipped in one quarter.",
    outcome: "Ops team self-sufficient across all policy products",
    capabilities: ["Internal tooling", "Ops efficiency", "Build vs buy decision-making"],
    body: {
      problem:
        "The ops team had no centralised tool to manage policies – endorsements, cancellations, renewals – and relied on engineering for routine operations.",
      whatIDid:
        "Contributed to the Admin Panel PRD. Defined requirements for policy management (endorsements across 7 statuses, cancellations across 8 statuses, renewals), Customer 360 view, and RBAC with maker-checker approval workflows. Chose Jet Admin (no-code) to avoid consuming engineering capacity.",
      result:
        "Epic BBG-3575 shipped 10 Dec 2024. Ops team fully self-sufficient across Car, Travel, and PA policies.",
      quote:
        "We shipped a full internal ops panel – policy management, Customer 360, RBAC, and maker-checker – in one quarter without consuming engineering capacity needed for customer-facing work.",
    },
  },
  {
    slug: "renewal-flow",
        gradient: "from-[#172554] to-[#1d4ed8]",
    title: "Renewal Customer Routing",
    tagline: "Detected renewal customers in the wrong funnel and routed them to the right journey.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "Q4 2024",
    summary:
      "Detection logic and interstitial modal to identify renewal customers entering the wrong funnel and route them to the correct journey.",
    outcome: "Renewal customers correctly segmented at entry point",
    capabilities: ["User journey design", "Conversion optimisation", "Data segmentation"],
    body: {
      problem:
        "Renewal customers (existing policyholders due for renewal) were entering the new business purchase funnel and experiencing friction or drop-off.",
      whatIDid:
        "Identified the issue, defined detection logic to identify renewal customers at the entry point, and designed an interstitial modal routing them to the correct renewal journey.",
      result:
        "Feature shipped. Renewal customers correctly segmented at entry and directed to the appropriate flow.",
    },
  },
  {
    slug: "promo-segment",
        gradient: "from-[#0f172a] to-[#334155]",
    title: "Self-Serve Promo Campaign System",
    tagline: "A dynamic system letting marketing launch promos with zero engineering tickets.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "2024",
    summary:
      "Architected a dynamic Talon One → Segment trait ingestion system, eliminating per-campaign engineering work for all future promo campaigns.",
    outcome: "Zero engineering tickets for new promo campaigns",
    capabilities: ["Technical depth", "Growth", "CDP architecture", "Systems thinking"],
    body: {
      problem:
        "Every new promo campaign required an engineering ticket to define new Segment traits. Marketing velocity was bottlenecked by engineering capacity.",
      whatIDid:
        "Architected a solution using Talon One's campaignIdentifier attribute to dynamically name Segment traits as promo_code_${campaignIdentifier}. Defined the webhook payload spec from Talon One and the Segment Destination Function in JavaScript.",
      result:
        "Marketing can now launch any promo campaign and have personalised traits available in Segment Engage without filing an engineering ticket.",
      quote:
        "Most PMs hand off a problem like this to engineering. I documented the webhook payload, wrote the Segment function spec, and built a dynamic naming convention that means the solution scales to any campaign without touching code again.",
    },
  },
]

// Featured case studies, ordered to alternate growth ↔ zero-to-one so the
// mix reads in the first scan rather than clustering by type.
const featuredOrder = [
  "o2o-lead-funnel",      // growth
  "ai-quotation-tool",    // 0→1
  "car-insurance-growth", // growth
  "user-identity",        // 0→1
  "endorsement-experiment", // growth
  "mobile-app-revamp",    // 0→1
]

export const featuredProjects = featuredOrder.map(
  (slug) => projects.find((p) => p.slug === slug)!
)

// Everything else — shown as a compact "also shipped" strip, not full cards.
export const otherProjects = projects.filter((p) => !p.featured)

