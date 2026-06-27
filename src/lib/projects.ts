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
    period: "Apr–May 2026",
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
      "Project Miner — an internal automation platform that turns a recorded sales call into submitted insurer quotes. It bridges Granola call transcripts → a prefilled form → headless automation against the term-life insurer portals (Singlife, Income), returning PDF quotes by email. Built to remove a 45-minute manual quotation step, then extended to absorb a 60%-of-leads bottleneck before the one specialist who handled it went on leave.",
    outcome: "Revenue held flat on 19% fewer leads · +14% value per qualified lead · qualified-lead rate 34.9% → 38.0%",
    metric: "+14% value/qualified lead",
    capabilities: ["AI & automation", "Systems design", "Internal tooling", "Operational continuity", "Technical depth"],
    featured: true,
    body: {
      problem:
        "Generating a quote was a ~45-minute manual job per lead: an advisor pulled details from the call, logged into each insurer's portal, re-keyed everything, cleared the OTP, and assembled the PDFs by hand. Two things made it urgent. It scaled badly — advisors were already mandated to make the first qualification call, so manual entry on top was pure administrative drag. And sharper still: health insurance was 60% of all organic leads and was handled almost single-handedly by a support specialist who was going on maternity leave. Without automation, that volume would land on advisors overnight, risking lead abandonment exactly when it mattered most.",
      whatIDid:
        "I specced and drove Miner — a pipeline that turns a recorded call into submitted quotes with a human only in the review seat.\n\nThe flow: Granola captures the call and emits a structured JSON payload; an n8n workflow posts it to a Lead Service and drops a prefilled form link into Slack; the advisor reviews and fills any gaps; on submit, the Lead Service fans the request out through an SQS queue to workers that drive Playwright automation against the term-life portals — Singlife and Income, OTP handling included — then capture PDF quotes and screenshots, write the premium back to Freshsales, and email the results to the advisor. The later health-insurance extension reused the same Granola-to-prefilled-form bridge but sourced premiums from an Excel engine spanning the local and international plans (Cigna among them).\n\nThe part most internal tools skip is the part I went after: the painful end of the workflow. Not just prefilling a form, but logging into each insurer, clearing OTP, reconciling the field differences between local and international plans, and giving advisors a review UI to correct extraction gaps before anything was submitted. The design target was to take that ~45-minute job under 10.",
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
    company: "MoneySmart O2O",
    role: "Owner",
    status: "Live",
    period: "Apr 2026",
    tagline: "Collapsed a 3-step lead flow into a single page — and won on funnel width, not completion: +16.7% Sessions→Lead conversion, steady across three measurement periods.",
    summary:
      "The legacy lead flow asked for nine inputs across two steps before showing a single price. I replaced it with a single-page form and ran it as an A/B test, lifting Sessions→Lead conversion +16.7% — consistent across three measurement periods.",
    outcome: "+16.7% Sessions→Lead conversion",
    metric: "+16.7% (3 measurement periods)",
    capabilities: ["Conversion optimisation", "A/B testing", "Form UX", "Funnel analysis"],
    body: {
      problem:
        "The legacy lead flow asked for nine inputs across two steps before showing a single plan or price — an inverted value exchange that bled users at every step transition. Funnel decomposition showed the steepest drop-offs happening between steps, not at the final submit: people weren't rejecting the offer, they were abandoning the staircase to reach it.",
      whatIDid:
        "I cut the form to its essentials — Name, Phone, Email on one page — and ran it as an A/B test against the legacy 3-step flow rather than swapping it outright.\n\nThe win came from a trade-off worth naming. The single page widened the top of the funnel far more than it lost on per-starter completion: 22.1% of sessions started it versus 13.5% on the legacy flow. Absolute volume was low — 26 leads vs 21 — so I made the call on the consistent directional signal across three independent measurement periods rather than holding out for a single significant p-value.",
      result:
        "+16.7% Sessions→Lead conversion, consistent across three measurement periods — enough to confirm it wasn't a spike. The single-page form became the desktop default and the foundation for the broader funnel-redesign work that followed.",
      quote:
        "A narrower form per step isn't the goal — a wider funnel overall is. One page lost a little on completion and won much more on how many people started at all.",
    },
  },
  {
    slug: "whatsapp-lead-modal",
        gradient: "from-[#134e4a] to-[#0d9488]",
    title: "WhatsApp Lead Capture",
    tagline: "Not every user wants to fill a form. I added a WhatsApp path as a second front door for mobile-first, lower-intent users who'd rather start a conversation.",
    company: "MoneySmart O2O",
    role: "Owner",
    status: "Live",
    period: "2026",
    summary:
      "A meaningful segment of users — mobile-first, with lower form-fill intent — weren't converting through the standard lead form. I added a WhatsApp path as a second entry point so users who'd rather message than fill fields had a lower-friction way in that still landed in the same lead pipeline.",
    outcome: "WhatsApp added as a lower-friction second entry point to the lead funnel",
    capabilities: ["Growth experimentation", "Channel strategy", "Top-of-funnel optimisation"],
    body: {
      problem:
        "A meaningful segment of users — mobile-first, or with lower form-fill intent — simply weren't converting through the standard lead form. For them the form wasn't a small friction; it was the whole barrier. Forcing a single entry point assumed every user wanted to convert the same way, when a sizeable group would rather just start a conversation.",
      whatIDid:
        "I added a second front door rather than trying to fix the only one: a WhatsApp path that let users start a chat instead of filling fields, routed so a WhatsApp lead lands in the same pipeline as a form lead.\n\nThe bet was that channel choice, not form design, was the unlock for this segment — meet people where the friction is lowest rather than keep optimising a form they were never going to complete.",
      result:
        "It gave a lower-friction path to a segment that was otherwise leaking straight out of the top of the funnel — widening the front of the funnel by channel rather than squeezing more out of a single form.",
      quote:
        "Not every user wants to convert the same way. The form wasn't broken for everyone — it was broken for a segment that just wanted to message us, so we gave them that.",
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
    tagline: "Took car insurance from an app-only product to a web-led growth engine with a renewal book behind it — +300% gross premium, +100% revenue over two years.",
    summary:
      "Car was Bubblegum's core product, but it could only be bought inside the mobile app — every prospective buyer had to download an app before they could even see a price. I led the web launch that removed that precondition, stripped friction out of the quote-to-purchase funnel with Singpass prefill and early eligibility checks, then built an automated renewal engine so growth compounded instead of being re-won from scratch each year. The book reached 8,814 policies and S$7.62M in transacted premium.",
    outcome: "+300% gross premium · +100% revenue over two years · 8,814 policies, S$7.62M premium",
    metric: "Gross premium +300% · Revenue +100%",
    capabilities: ["Growth strategy", "Distribution expansion", "Conversion optimisation", "Funnel analysis", "Retention & renewals", "Product strategy"],
    featured: true,
    body: {
      problem:
        "Car insurance was the core product, but in its first incarnation it was app-only. That capped the addressable market at the slice of people willing to download an app just to get a quote — a brutal funnel tax for a considered, price-sensitive purchase that most people shop on a desktop browser at work. Two structural problems sat underneath it. The quote flow asked for a long list of vehicle and driver details up front, much of it manually keyed and error-prone, before showing a single price. And there was no renewal mechanism — the book leaked every twelve months, so each year's growth had to be re-acquired from zero rather than building on the last. The product wasn't broken; its distribution and its retention were.",
      whatIDid:
        "I treated this as three compounding levers, not one redesign — and sequenced them so each unlocked the next.\n\nThe first and biggest was distribution: launching car insurance on the web (bubblegum.co), so a quote no longer required an app install. I owned the full purchase funnel — PDP → quote questions → plans and add-ons → application → Stripe checkout → policy issuance and COI — as a first-class web journey rather than a port of the app.\n\nThe second was taking friction out of that funnel. I pulled the eligibility check forward so ineligible drivers (age, accident history, claims, vehicle age) hit a clear 'not for you' wall early, instead of investing ten minutes and then bouncing. I integrated Singpass/MyInfo to auto-populate identity and vehicle data — accurate, non-editable, and far faster than manual entry — and added a resume flow so anyone who dropped between quote and payment could pick up exactly where they left rather than restart.\n\nThe third lever was retention. Instead of re-acquiring the book every year, I built the renewal program against a 65%+ monthly renewal target: ingesting the insurer's twice-monthly claims and NCD file to auto-calculate the renewal premium across every plan the customer was still eligible for, then nudging them through email, WhatsApp and push at T-45/T-30/T-15 with a pay-direct-from-the-message path. Renewals turned a leaking bucket into a compounding base.",
      result:
        "Over two years gross premium grew 300% and revenue grew 100%, with the book reaching 8,814 policies and S$7.62M in transacted premium across web and app. I'm deliberate about what gets credited to what: the web launch was the step-change in reach, while the funnel and renewal work is what kept conversion and retention climbing on top of it rather than flattening as volume grew. The honest tension is in the gap between the two headline numbers — gross premium outran net revenue (3x vs 2x) because a meaningful share of the acquisition was promo-driven and the plan mix shifted. That's a real trade-off, not a footnote: we bought volume at some margin, and naming it is part of reading the result correctly.",
      quote:
        "The single biggest growth lever wasn't a smarter funnel — it was removing the app download as a precondition to getting a price. We'd built a good product and then hidden it behind the highest-friction front door possible.",
    },
  },
  {
    slug: "endorsement-experiment",
        gradient: "from-[#155e75] to-[#0891b2]",
    title: "Reducing Post-Purchase Policy Changes",
    tagline: "Date-change endorsements were 70–80% of all policy changes. I A/B-tested two fixes — and the counterintuitive one, removing the pre-filled dates entirely, cut early endorsements 74%.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "2025",
    summary:
      "Period-of-insurance changes — customers amending their policy dates after buying — were 70–80% of every endorsement request, each one manual partner-dependent work that routinely blew past a 30-day turnaround. I traced it to a default-bias problem at the date fields, then ran a two-variant A/B test against a full-year baseline. The variant that removed the pre-filled dates entirely cut D-30 endorsements from 4.37% to 1.13% — beating both the control and the more obvious 'add a confirmation step' variant.",
    outcome: "74% reduction in early policy changes · 4.37% → 1.13% · beat the 60% target and the rival variant",
    metric: "4.37% → 1.13%",
    capabilities: ["Experiment design", "Root-cause analysis", "A/B testing", "Behavioural design", "Data-driven decision making", "Ops-cost reduction"],
    featured: true,
    body: {
      problem:
        "Period-of-insurance (POI) changes — customers amending their policy start or end dates after purchase — were 70–80% of every endorsement request Bubblegum handled (457 of 652 in 2024). Each one was manual, partner-dependent work: we relied on the insurer to action the change, they routinely missed the 7-day window, and turnaround blew past 30 days — expensive for ops and infuriating for customers. The obvious read was that people were extending their cover, and the obvious fix was to make extension easier. The data didn't say that. Bubblegum already let customers buy up to 18 months; most just took the pre-filled 12-month default and came back later — around 90% of them to realign with their road-tax renewal date. And of the cases I sampled, 60% weren't extensions at all: they changed both the start and end date without touching the policy's duration. The problem wasn't policy length — it was that people were setting the wrong dates at purchase and fixing them afterward.",
      whatIDid:
        "The cleanest fix would have been to show customers their road-tax renewal date right in the form — but no LTA API exposes it, so that door was closed. That pushed the problem onto behaviour: how do you get people to set the right dates themselves, at purchase? I suspected default bias — 78% of users already changed the pre-filled start date, yet half still came back to amend, which told me the pre-fill was anchoring people to dates they didn't actually want.\n\nSo I designed two variants that attacked the anchor from opposite directions, against a clean control (full-year 2024 new-business policies, with partner and renewal sales excluded). Variant A removed the pre-filled dates entirely and nudged users to align with their road tax, using animated placeholder text to pull attention to the empty fields. Variant B kept the pre-filled dates for convenience but added a nudge plus a mandatory confirmation step before the customer could proceed. A bets the default is the problem; B bets the default is fine and people just need a prompt to check it.\n\nI fixed the success metric and the bar before launch — a 60% reduction in D-30 POI endorsements — and tagged every variant through to the backend with a tracking key so the cohorts couldn't be confused, with Customer Effort Score as a guardrail to catch a nudge that confused more than it helped.",
      result:
        "Variant A won, and not narrowly: D-30 endorsements fell from 4.37% to 1.13% — a 74% reduction that cleared the 60% bar. Variant B, the more conservative 'just ask them to confirm' option, managed 42% — real, but barely two-thirds of A's effect. The lesson sat in that gap: removing the default beat reinforcing it, because the default itself was the thing steering people to the wrong answer. I'm honest about the limits — the variant cohorts were small in absolute terms (3 and 7 endorsements over a four-month window), so I read the 74% as a strong directional result rather than a precise point estimate, and recommended rolling Variant A out across new-business and dealer channels with 3–6 months of monitoring to confirm it holds at scale and to test the same pattern on renewals.",
      quote:
        "The intuitive fix was to keep the pre-filled dates and just ask people to confirm them. That variant worked — but the one that won did the opposite and removed the defaults entirely. The default wasn't a convenience; it was the thing quietly steering people to the wrong dates.",
    },
  },
  {
    slug: "mobile-app-revamp",
        gradient: "from-[#1e1b4b] to-[#4338ca]",
    title: "Mobile App Revamp",
    tagline: "The app was built to sell, but everyone opening it had already bought. I restructured the IA around policies, service and support — repositioning it as a post-purchase hub and lifting monthly engagement 20%.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "Q3 2024",
    summary:
      "The Bubblegum app was built around the purchase journey — but almost everyone opening it had already bought. They landed in a sales funnel when what they needed was their policy, a claim, or an emergency number. I owned the App Refresh: a ground-up IA restructure of the four core pages that repositioned the app from 'sell insurance' to 'serve customers after they've bought,' while keeping discovery for upsell. Monthly engagement rose 20%.",
    outcome: "+20% monthly user engagement · app repositioned as a post-purchase service hub",
    metric: "+20% monthly engagement",
    capabilities: ["Strategic repositioning", "Information architecture", "Mobile product design", "Post-purchase & retention", "Cross-functional leadership", "CMS-driven content"],
    featured: true,
    body: {
      problem:
        "The Bubblegum app was structured like a sales funnel — its home screen, navigation and hierarchy all optimised for someone about to buy a policy. But the people actually opening the app had overwhelmingly already bought. They came to check their coverage, file a claim, find a workshop, or grab an emergency number — and instead landed in a purchase flow that treated them as a fresh prospect. Post-purchase customers had poor visibility into their own policies, almost no self-service, and no obvious support path, so engagement fell off a cliff right after the one moment the app was built for. The app's job and its users' jobs had drifted apart.",
      whatIDid:
        "I owned the App Refresh and treated it as a repositioning, not a reskin: the app's job changed from 'sell insurance' to 'serve customers after they've bought.' Everything followed from that. I rebuilt the four core pages from the information architecture up — Home, Discover, My Policies and Support — and held everything else to UI-level adjustment, so the strategy shift didn't balloon into a full rebuild.\n\nThe home screen became a service surface instead of a storefront, structured around the customer's own policies first. A policy-card carousel carried product-specific intelligence — destination imagery and a trip countdown for travel, vehicle and plan details for car, insured count for PA — on a richer status model that added a new 'Upcoming' state for policies bought but not yet started. A product-aware 'How can we help' section surfaced only the actions relevant to what each customer actually owned: workshops and accident lines for car, travel assistance for travel.\n\nI designed the page states around who's actually there. Customers with zero policies land on Discover — the upsell surface — rather than an empty home, and the navigation itself adapts, with new users seeing a trimmed three-tab bar. Marketing and product banners run off Strapi, so the team can launch, schedule and expire campaigns — promo cards, reviews, countdown timers — without an engineering ticket each time.\n\nMy Policies and Support carried the rest of the load: active/inactive grouping with claim and policy-download actions on every card, and a Support hub wiring up Write-to-Us (Freshdesk), WhatsApp, FAQs and product-specific post-purchase help — turning the routine reasons a customer contacts you into things they could do themselves.",
      result:
        "Shipped September 2024. Monthly user engagement rose 20%, and the app stopped behaving like a one-time checkout — it became a place customers return to between purchases. The durable win is the reframe itself: by designing for the post-purchase customer who was already the majority of traffic, rather than the prospect the old IA assumed, engagement followed the audience. I'm clear-eyed that 20% is the number I can point to at launch; the deeper bet — that a service hub compounds into retention and upsell — is the kind of thing that shows up over quarters, not in a launch metric.",
      quote:
        "The App Refresh wasn't a visual update — it was a strategic repositioning. We changed the app's job from 'sell insurance' to 'serve the customers who'd already bought,' because that's who was actually opening it.",
    },
  },
  {
    slug: "tech-support-tool",
        gradient: "from-[#075985] to-[#0284c7]",
    title: "Support Diagnostics Tool",
    tagline: "Routine policy fixes kept pulling engineers off product work. I shipped an API-based support tool that let ops do them directly — handing routine policy edits back to the support team.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "2023",
    summary:
      "Support couldn't change a customer's policy without an engineering ticket — every address fix, date correction or named-driver change was a developer interruption. I defined and shipped an internal tech-support tool (a versioned API surface ops could drive themselves), with an audit trail and environment separation built in, so routine policy edits no longer needed a developer.",
    outcome: "Routine policy operations handled by ops, not engineering",
    capabilities: ["Internal tooling", "API design", "Ops efficiency", "Cross-functional coordination"],
    body: {
      problem:
        "Engineering was the bottleneck for routine support. Changing a policy's email, correcting a start date, adding or removing a named driver, fixing an address — none of it required code, but all of it required a developer, because only engineering could touch the data safely. Each request was a context-switch away from product work, and support couldn't even self-diagnose a case without escalating. The cost wasn't one big thing; it was a thousand small interruptions.",
      whatIDid:
        "I specced an internal tech-support API the ops team could operate themselves (v3.1, run through a Postman collection across separate Production and UAT environments). It exposed exactly the operations support actually needed: PATCH a policy's email, phone, dates, vehicle, finance company or named drivers; update a user; add a dealer; and ingest the insurer's renewal CSV.\n\nTwo design choices made it safe to hand to non-engineers. Every call carries an admin-username header, so each change is attributable — a built-in audit trail rather than an anonymous data edit. And read endpoints (full policy data fields, request/response logs, valid finance-company and ID-type keys) let support diagnose and self-correct a case before writing anything. I coordinated delivery across engineering, ops, marketing and compliance so it shipped within the regulatory constraints on policy data.",
      result:
        "Routine policy troubleshooting moved off engineering's plate and onto the support team's, handing developer time back to product work and giving ops genuine self-sufficiency on routine policy operations. It also became the backbone for later tooling — the same renewal-file ingestion and policy operations were reused when the no-code Admin Panel was built on top.",
      quote:
        "The win wasn't a clever feature — it was giving support the five or six operations they actually needed, with an audit trail, so engineering stopped being the help desk for routine policy edits.",
    },
  },
  {
    slug: "user-identity",
        gradient: "from-[#0c4a6e] to-[#06b6d4]",
    title: "Email Login Migration",
    tagline: "Re-platformed identity for 20,000+ customers from phone-OTP to email-first login, with omni-login on top — and de-duplicated a fragmented account base without anyone losing access to a policy.",
    company: "Bubblegum Insurance",
    role: "Co-owner",
    status: "Done",
    period: "Q4 2024",
    summary:
      "Bubblegum had no durable identity layer: customers were authenticated by phone OTP, the same person often showed up as several disconnected profiles across products, and many policies weren't tied to any registered account at all. I co-owned the migration to email-as-primary-identifier with optional mobile verification for omni-login — and the far harder half, a one-time consolidation of 20,000+ existing accounts that had to merge duplicates and re-tag policies without ever bleeding one customer's data into another's.",
    outcome: "Unified identity layer across all products · omni-login live · zero data-bleed incidents",
    metric: "20,000+ accounts migrated",
    capabilities: ["Ambiguity navigation", "Edge-case modelling", "Risk identification & mitigation", "Data migration", "Identity architecture", "Cross-functional alignment"],
    featured: true,
    body: {
      problem:
        "Bubblegum's authentication ran on phone-number OTP, and that created two compounding problems. There was no persistent identity — nothing reliably tied a person to everything they'd bought, so the same customer surfaced as multiple disconnected profiles across car, travel and PA, and a large share of policies weren't linked to any registered account at all, only to an anonymous session. That broke policy tracking, made omni-login impossible, and blocked anything downstream that depended on knowing 'this is the same person.' The catch was the constraint: any fix had to operate on a live book of 20,000+ existing customers who rely on those policies for claims. Get the consolidation logic wrong and you don't ship a bug — you expose one customer's policies to another, or lock someone out of a contract they're mid-claim on.",
      whatIDid:
        "I co-owned the PRD and treated it as two projects: the forward-looking auth model, and the much harder backfill of everyone already on the platform.\n\nThe model itself: email becomes the mandatory primary identifier, verified by OTP at the policyholder step. On verification we elevate the anonymous session to a unique registered user_id, auto-create the account and log the person in — so an account exists whether or not they complete a purchase, and no two users can ever share an ID. Mobile verification stays optional, nudged after purchase via a WhatsApp link, and once done it unlocks omni-login: sign in with either email or mobile, Amazon-style.\n\nThe hard half was existing users. I split the book into clean segments — verified-email, verified-mobile, account-but-no-policy, policy-but-no-account — and wrote consolidation rules for each: create or attach a registered user_id, map every historical policy onto it, and for mobile-first customers assign a single primary email (flagged pseudo-verified) so the book collapses to one account per person. I modelled the edge cases explicitly instead of hand-waving them: multiple emails under one mobile (take the most recent, surface the counts to decide), conflicting verified-vs-unverified identifiers across a person's policies, MyInfo-sourced numbers (freeze the mobile, leave email editable), and full normalisation — lowercase every email, store every mobile as +65 — across the entire dataset.\n\nThe part migrations usually skip is the part I spent the most time on: designing against the worst case. Data-bleed was the failure I refused to ship. Every non-imported policy had to share at least one verified identifier with its consolidated account before the tool was allowed to touch production. Dealer policies were ring-fenced out of the exercise entirely — dealers had historically entered their own email and phone instead of the customer's, so merging them would hand a customer's policies to a dealer or vice-versa. And every change wrote an audit record — entity, old value, new value, timestamp — so anything could be traced and reversed, with pre- and post-deployment sanity checks comparing production data dumps to catch silent merges.",
      result:
        "The migration shipped as Phase 1 of the identity epic. Email-first auth and omni-login went live, every retained policy was re-tied to a single registered account, and renewal events now carry the registered user ID so the same person stays identified across cycles. The outcome I'm proudest of is the one that's invisible when it goes right: no customer lost policy access and no account merged data across people, because the failure modes were mapped and gated before any code ran. This was a project where success is measured by the absence of incidents, not a conversion lift — and the discipline was front-loading the edge cases rather than discovering them in production on a live insurance book.",
      quote:
        "The risk was never writing the migration — it was the edge cases. Dealer-tagged policies, MyInfo-frozen numbers, the same email sitting under three accounts. We mapped and gated every one before a line of code ran, because on a live insurance book the cost of a wrong merge is a customer locked out of their own claim.",
    },
  },
  {
    slug: "admin-panel",
        gradient: "from-[#1e293b] to-[#475569]",
    title: "Ops Admin Panel",
    tagline: "Built a full policy-lifecycle ops panel — endorsements, cancellations, renewals, Customer 360 — on a no-code platform, shipping in one quarter without spending scarce engineering capacity.",
    company: "Bubblegum Insurance",
    role: "Contributor",
    status: "Done",
    period: "Q4 2024",
    summary:
      "The ops team had no single place to manage policies and leaned on engineering for routine work. I contributed to the Admin Panel PRD and the deliberate decision behind it — build on Jet Admin (no-code) rather than in-house, trading enterprise-grade polish for speed and protected engineering bandwidth. It shipped in a quarter, covering the full policy lifecycle across all three products.",
    outcome: "Ops team self-sufficient across all policy products",
    capabilities: ["Internal tooling", "Build-vs-buy decision-making", "Ops efficiency", "Access control & governance"],
    body: {
      problem:
        "Ops had no centralised tool to manage policies. Endorsements, cancellations and renewals were scattered across sources with no single source of truth, and anything that touched the data meant pulling in engineering — the same capacity the business needed for customer-facing product. The constraint was as much commercial as technical: in a tight environment, this tool couldn't be allowed to eat the roadmap.",
      whatIDid:
        "I contributed to the Admin Panel PRD, and the framing decision that shaped it was build-vs-buy. We chose a no-code platform (Jet Admin) and were honest about the trade: a lightweight tool built quickly and scrappily, not enterprise software — the right call when the goal is time-to-market and saving engineering hours, not a permanent platform.\n\nOn that base I helped spec the full policy lifecycle: a comprehensive policy list with role-restricted COI access, an endorsement workflow across seven statuses, cancellations and refunds across eight, renewal management, and a Customer 360 view assembled from the same database approach used for analytics. The governance was the careful part — role-based access plus a maker-checker approval flow for the actions that move money or change contracts (refunds, selective endorsements), so self-service didn't become unaudited risk.",
      result:
        "Epic BBG-3575 — Admin Panel Phase 1 — shipped. The ops team became self-sufficient across Car, Travel and PA — managing policies, endorsements, cancellations and renewals without routing routine work through engineering — and it landed in a single quarter precisely because we chose not to build it in-house.",
      quote:
        "We shipped a full ops panel — policy lifecycle, Customer 360, RBAC and maker-checker — in one quarter by choosing no-code on purpose. The discipline was matching the tool to the moment, not over-building.",
    },
  },
  {
    slug: "renewal-flow",
        gradient: "from-[#172554] to-[#1d4ed8]",
    title: "Renewal Customer Routing",
    tagline: "Renewal customers were being funneled through new-business flows and re-entering data we already held. I built detection + routing to drop them straight into a one-page renewal.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "Q4 2024",
    summary:
      "Existing policyholders due for renewal were landing in the new-business purchase funnel — re-answering the full quote questionnaire for a policy we already held all the data for. I defined detection logic to identify a renewal customer at the entry point and an interstitial to route them into the dedicated renewal journey: a pre-filled one-page summary with their auto-calculated renewal premium.",
    outcome: "Renewal customers correctly segmented at entry point",
    capabilities: ["User journey design", "Conversion optimisation", "Data segmentation", "Retention"],
    body: {
      problem:
        "Renewals and new business shared the same front door. A customer coming back to renew — whether from a reminder email, a marketing link, or directly — could fall into the new-business quote flow and be asked to re-enter everything we already knew: vehicle, driver, history. For a retention moment meant to feel effortless, it was the opposite, and the friction showed up as drop-off on exactly the customers we most wanted to keep.",
      whatIDid:
        "I defined detection logic to identify a renewal-eligible customer at the point of entry, and an interstitial that intercepted them before they fell into the wrong flow, routing them to the renewal journey instead.\n\nThat journey was built to remove the re-entry entirely. The renewal premium is auto-calculated ahead of time from the insurer's twice-monthly claims/NCD file and the prior year's policy, so the customer lands on a pre-filled one-page summary rather than a blank questionnaire — edit the few things that change, pay, done. Personalised renewal links from email and WhatsApp could drop authenticated customers straight onto that summary or the payment screen.",
      result:
        "Shipped. Renewal customers were correctly segmented at the entry point and directed into the renewal flow rather than the new-business funnel — turning a repeated data-entry slog into a review-and-pay step, in service of the 65%+ monthly renewal-rate target the renewal program was built around.",
      quote:
        "A renewal isn't a new purchase — we already hold the data. The fix was making sure the system recognised a returning customer before it asked them to start over.",
    },
  },
  {
    slug: "promo-segment",
        gradient: "from-[#0f172a] to-[#334155]",
    title: "Self-Serve Promo Campaign System",
    tagline: "Marketing couldn't run a promo without engineering wiring it up first. I worked on the Talon.One + Segment setup that let marketers create and target campaigns themselves.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "2024",
    summary:
      "Marketing's promo velocity depended on engineering. I contributed to the promo-campaign setup on Talon.One with Segment as the CDP — defining the customer attributes and segmentation rules that let marketers create, target and personalise discount campaigns themselves rather than filing a ticket for each one.",
    outcome: "Self-serve promo campaigns on Talon.One + Segment",
    capabilities: ["Growth", "CDP architecture", "Marketing enablement", "Systems thinking"],
    body: {
      problem:
        "Promo campaigns ran on Talon.One with Segment as the CDP, but the function that should have been self-serve — launch a promo, see who's eligible, personalise on it — depended on engineering. Creating and targeting a new campaign meant pulling in a developer, so marketing velocity was bottlenecked by engineering capacity and queued behind the product roadmap.",
      whatIDid:
        "I focused on making campaigns self-serve for marketing. On Talon.One — with Segment as the CDP after we moved off Mailchimp — I defined the customer and session attributes campaigns would segment and personalise on (product interest, number of policies held, travel destination, lead source and more) and the rules marketers could build campaigns around.\n\nThe goal was a one-time setup any future campaign could reuse, so launching a promo and seeing who's eligible no longer queued behind an engineering ticket.",
      result:
        "Marketing could define and target promo campaigns on a shared Talon.One + Segment foundation rather than depending on engineering to wire up each one — turning a recurring per-campaign dependency into reusable infrastructure.",
      quote:
        "The unlock wasn't any single campaign — it was setting up the attributes and rules once so marketing could launch and target promos themselves, instead of filing an engineering ticket every time.",
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

