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
    tagline: "Recovered high-intent leads lost at the form stage with dual-CTA and device-segmented testing.",
    summary:
      "Redesigned the O2O insurance lead funnel to recover high-intent traffic lost at the form stage – dual-CTA, WhatsApp entry points, and device-segmented A/B rollouts.",
    outcome: "+47% desktop Sessions→Lead conversion · +63% absolute leads",
    metric: "Desktop +47% · Leads +63%",
    capabilities: ["Conversion optimisation", "A/B testing", "Funnel analysis", "Device segmentation"],
    featured: true,
    body: {
      problem:
        "High-intent users were dropping off at the form stage before submitting a lead. The single entry path and multi-step form created too much friction, particularly on desktop where intent was highest.",
      whatIDid:
        "Led the redesign of the O2O insurance lead funnel – introducing dual-CTA layouts and WhatsApp entry points to give users choice, then running device-segmented A/B rollouts so desktop and mobile experiences were optimised independently rather than treated as one audience.",
      result:
        "Desktop Sessions→Lead conversion lifted by up to 47% and absolute leads grew 63%. Mobile experience was tailored separately to protect its existing conversion baseline.",
      quote:
        "Device segmentation was the unlock. Desktop and mobile users behave completely differently at the form stage – optimising for one was actively hurting the other.",
    },
  },
  {
    slug: "ai-quotation-tool",
        gradient: "from-[#4c1d95] to-[#7c3aed]",
    title: "AI Quotation Tool for Advisors",
    company: "MoneySmart O2O",
    role: "Owner",
    status: "Live",
    period: "Jan 2026",
    tagline: "Automated the advisor quotation workflow — 45 → 15 min per lead.",
    summary:
      "Built and rolled out an AI-powered tool that automated a manual, time-intensive quotation workflow for the advisory team – cutting turnaround from ~45 to ~15 minutes per lead.",
    outcome: "Turnaround cut from ~45 to ~15 min per lead",
    metric: "45 min → 15 min per lead",
    capabilities: ["AI & automation", "Internal tooling", "Workflow design", "Advisor enablement"],
    featured: true,
    body: {
      problem:
        "Advisors were spending ~45 minutes per lead on a manual quotation workflow – pulling data, checking eligibility, formatting quotes – leaving little time for higher-value client engagement.",
      whatIDid:
        "Built and rolled out an AI-powered tool to the advisory team that automated the quotation workflow end-to-end, including data retrieval, eligibility logic, and quote formatting.",
      result:
        "Turnaround dropped from ~45 to ~15 minutes per lead. Advisors reinvested the recovered time in higher-value client engagement.",
      quote:
        "Most internal tools solve the wrong problem – they automate the easy parts and leave the painful parts manual. This one went after the full 45 minutes.",
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

export const featuredProjects = projects.filter((p) => p.featured)

