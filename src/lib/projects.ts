export type Status = "Done" | "In Progress" | "Live" | "Experiment"

export type Project = {
  slug: string
  title: string
  // Company is absent on personal side projects; `side` splits them out into
  // their own section on the projects page.
  company?: "Bubblegum Insurance" | "MoneySmart O2O" | "MoneySmart"
  side?: boolean
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
  // ── Side projects (2026) ─────────────────────────────────────────────────────
  {
    slug: "sales-capture-reconciliation",
    gradient: "from-[#164e63] to-[#0e7490]",
    title: "Sales Capture & Reconciliation",
    side: true,
    role: "Owner",
    status: "Live",
    period: "Jul 2026",
    tagline:
      "A Telegram→Sheets bot I specced and built solo for the trading-card vending team I sell with. Parse-or-quarantine by design, live on Google Cloud Run.",
    summary:
      "The ~11-person trading-card vending team I sell with at trade shows captures every booth sale as a photo posted to Telegram, then manually retypes it all into a Google Sheet at the end of each day, and that retyping step is where the record breaks. I ran the whole loop myself, discovery to deployment: wrote the PRD, designed a caption grammar sellers can type at the table, built the bot, and shipped it to Google Cloud Run in webhook mode.",
    outcome: "Shipped solo, discovery to deployment · live on Cloud Run",
    capabilities: [
      "Zero-to-one build",
      "Discovery & PRD",
      "Parser & grammar design",
      "Scope negotiation",
      "Error-handling design",
      "Serverless deployment",
    ],
    body: {
      problem:
        "The trading-card vending team I sell with (~11 people) records every booth sale the same way: photograph the item next to the payment screenshot or cash, post it into the show's Telegram topic with a rough caption. Capture is bulletproof. Nobody misses a photo. The break happens afterwards, when one person manually transcribes the whole topic into a Google Sheet at the end of each day. Mistypes, double-counts and skipped entries produce the team's recurring named symptom: loose packs going 'missing', counts that don't reconcile, and evenings spent reconstructing whether items actually sold. Because capture was reliable, the defect was isolated to a single step: manual consolidation. I was honest in the PRD that no quantitative baseline existed (no measured error rate, no packs-lost-per-show) and logged capturing one at the next show as an open question rather than inventing a number.",
      whatIDid:
        "I ran it like a real product, not a weekend script: discovery, a PRD with prioritised functional requirements, risks and open questions, then a build-decisions log as spec met reality. Scope was deliberately two-phase (automate capture-to-sheet first, defer the live-inventory system to phase two) under one design principle carried everywhere: for a system whose purpose is an accurate record, a caught gap beats a silent error. The bot never rounds or 'cleans' a parsed figure, and never writes a row it isn't confident in; anything else lands in a Needs Review tab for end-of-day triage.\n\nThe core design problem was the caption grammar. Sellers are typing one-handed at a busy table, so every keystroke had to earn its place. Sell and PayNow are assumed defaults, so `2x p $20` is a complete sale record; word-level short forms cover the common items; buybacks ride the sell shape with a flipped type; trades are a one-line shape with a signed cash figure. Mixed carts are grouped by message (one message, one payment), and the bot verifies the line items sum exactly to the typed total, quarantining any mismatch instead of writing it. Even free-text notes got guard rails: a 'note' containing a dollar amount, or a word one typo away from a keyword (`buybak`), is more likely a mistyped sale than a note, so it quarantines.\n\nSpec also had to bend to platform reality. The PRD called for a periodic re-scan to catch deleted messages. Then I found the Telegram Bot API can't read history or receive delete events at all, so I renegotiated that requirement into an admin /void command and made the Telegram message ID the row's identity: processing is idempotent, a repost is a new row, a delete voids rather than erases. I also cut scope on purpose. Seller-identity capture was dropped because the message link already identifies the poster, and the sheet slimmed to 10 columns.\n\nThen I built it, one requirement at a time with a parser test suite, and deployed to Google Cloud Run in webhook mode: Telegram pushes each message over HTTPS, the service scales to zero between messages, tracking state lives in a hidden sheet tab so it survives redeploys, and the service is capped at one instance to protect the single-writer assumption on the sheet. Tracking is opt-in per show topic via /track, with sheet tabs auto-created per show.",
      result:
        "v1 is live: deployed to Cloud Run in July 2026, with a one-page reference card out to the team. I'm honest about where this sits. The first live show under the bot hasn't happened yet, so the success metric (zero manually keyed rows, with daily cash and PayNow totals that tie out to payment evidence) is still a target, not a result. What I can already claim: the full loop from recorded discovery to deployed service was done solo, the grammar is locked and test-covered, and every unparseable caption now has somewhere safe to go instead of silently corrupting the record. The structured rows are also the deliberate foundation for phase two, a live-inventory system that only works if the data underneath it is trustworthy.",
      quote:
        "For a system whose whole purpose is an accurate record, a caught gap beats a silent error. The bot never guesses. Anything it can't parse cleanly lands in Needs Review instead of being written into the sheet wrong.",
    },
  },
  {
    slug: "portfolio-site",
    gradient: "from-[#334155] to-[#2563eb]",
    title: "This Portfolio",
    side: true,
    role: "Owner",
    status: "Live",
    period: "2026",
    tagline:
      "The site you're reading. Designed and built from scratch in Next.js and Tailwind, on a semantic design system rather than a template, and shipped on Vercel.",
    summary:
      "Most PM portfolios are a LinkedIn export or a wall of Notion bullets. I wanted mine to be the argument itself: a small product that shows the thinking and the craft, not just lists them. So I designed and built it end to end, treating the content as the real deliverable and the code as the way to present it well.",
    outcome: "Designed, built and shipped solo · live on Vercel",
    capabilities: [
      "Design systems",
      "Content design",
      "Frontend build",
      "Next.js & Tailwind",
      "Self-directed delivery",
    ],
    body: {
      problem:
        "A product manager's portfolio has an awkward job: it has to demonstrate product judgment and craft, not just claim them, and most don't. They're either a résumé reflow (activity lists, action verbs, no actual decisions) or a generic template where every project looks the same and the story flattens into bullet points. I didn't want a site that listed what I'd done. I wanted one that showed how I think: the problem behind each piece of work, the calls I made, the experiments that failed, and the real numbers, presented as carefully as I'd present an actual product.",
      whatIDid:
        "I treated the site like a product with content as its core feature, and made the same kinds of decisions I'd make at work.\n\nOn design, I built a small semantic design system instead of hard-coding styles: a restrained zinc-and-blue palette exposed as reusable tokens, a two-typeface pairing (Space Grotesk for display, Archivo for body), and a set of primitives (buttons, containers, cards) so every page stayed consistent without redesigning each one. Choosing a system over one-off styling is the same discipline as choosing reusable infrastructure over a per-campaign build.\n\nOn content, I wrote each case study to tell the story rather than list activity: what was broken, what I actually did, what happened, and the honest tension in the result. I held a hard line on voice, cutting anything that read as filler or as an obvious AI tell, so the writing sounds like the person who did the work.\n\nOn the build, it's a Next.js app styled with Tailwind and light motion for polish, deployed on Vercel with the repo wired up so a push to main ships to production and every branch gets its own preview URL. I kept the surface deliberately small: the point was a fast, legible site that gets out of the content's way, not a showcase of every framework feature I could reach for.",
      result:
        "It's live and it's mine end to end: the design system, the writing, and the build. The durable win isn't the stack, it's that the site does the job a PM portfolio should: it argues by demonstration. The projects read as decisions and trade-offs rather than a list of responsibilities, the craft is visible in the thing itself, and it's built to keep evolving as the work does rather than being a static snapshot. It's also, fittingly, the project I keep coming back to iterate on.",
      quote:
        "A PM portfolio shouldn't just list the work. It should be a small piece of work that demonstrates the thinking. So I built the site to be the argument, not the résumé.",
    },
  },

  // â”€â”€ MoneySmart O2O (Jan 2026 – Present) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "ai-quotation-tool",
        gradient: "from-[#4c1d95] to-[#7c3aed]",
    title: "AI Quotation Pipeline for Advisors",
    company: "MoneySmart O2O",
    role: "Owner",
    status: "Live",
    period: "2025 – 2026",
    tagline: "An AI pipeline that turns a recorded sales call into submitted insurer quotes. Same revenue on 19% fewer leads.",
    summary:
      "Project Miner: an internal automation platform that turns a recorded sales call into submitted insurer quotes. It bridges Granola call transcripts → a prefilled form → headless automation against the term-life insurer portals (Singlife, Income), returning PDF quotes by email. Built to remove a 45-minute manual quotation step, then extended to absorb a 60%-of-leads bottleneck before the one specialist who handled it went on leave.",
    outcome: "Revenue held flat on 19% fewer leads · +14% value per qualified lead · qualified-lead rate 34.9% → 38.0%",
    metric: "+14% value/qualified lead",
    capabilities: ["AI & automation", "Systems design", "Internal tooling", "Operational continuity", "Technical depth"],
    body: {
      problem:
        "Generating a quote was a ~45-minute manual job per lead: an advisor pulled details from the call, logged into each insurer's portal, re-keyed everything, cleared the OTP, and assembled the PDFs by hand. Two things made it urgent. It scaled badly. Advisors were already mandated to make the first qualification call, so manual entry on top was pure administrative drag. And sharper still: health insurance was 60% of all organic leads and was handled almost single-handedly by a support specialist who was going on maternity leave. Without automation, that volume would land on advisors overnight, risking lead abandonment exactly when it mattered most.",
      whatIDid:
        "I specced and drove Miner, a pipeline that turns a recorded call into submitted quotes with a human only in the review seat.\n\nThe flow: Granola captures the call and emits a structured JSON payload; an n8n workflow posts it to a Lead Service and drops a prefilled form link into Slack; the advisor reviews and fills any gaps; on submit, the Lead Service fans the request out through an SQS queue to workers that drive Playwright automation against the term-life portals (Singlife and Income, OTP handling included), then capture PDF quotes and screenshots, write the premium back to Freshsales, and email the results to the advisor. The later health-insurance extension reused the same Granola-to-prefilled-form bridge but sourced premiums from an Excel engine spanning the local and international plans (Cigna among them).\n\nThe part most internal tools skip is the part I went after: the painful end of the workflow. Not just prefilling a form, but logging into each insurer, clearing OTP, reconciling the field differences between local and international plans, and giving advisors a review UI to correct extraction gaps before anything was submitted. The design target was to take that ~45-minute job under 10.",
      result:
        "I measured the term & mortgage rollout quarter-over-quarter (Q3 pre vs Q4 post), and was careful to separate signal from noise. Total lead volume fell 19% over the period, but that was seasonality and a Google core update, not Miner, so I didn't claim it. What Miner can be credited with is what happened to the leads that remained: qualified-lead rate rose from 34.9% to 38.0%, value per qualified lead rose 14% (S$199 → S$226), and total revenue held flat (~S$66k) despite the 19% drop in volume. Same output from materially less input. On the strength of that, I scoped the health extension to bring the 60%-of-leads category onto the same pipeline ahead of the specialist's leave.",
      quote:
        "Most internal tools automate the easy parts and leave the painful parts manual. This one went after the painful parts: the portal logins, the OTP, the local-versus-international field differences. That's where the 45 minutes actually lived.",
    },
  },

  {
    slug: "products-dashboard",
        gradient: "from-[#134e4a] to-[#0d9488]",
    title: "Post-Purchase Products Dashboard",
    company: "MoneySmart O2O",
    role: "Owner",
    status: "In Progress",
    period: "Q2 2026",
    tagline:
      "O2O customers had no place to see what they'd bought, so every status question went back to their agent. I specced the surface that gives them one, and wrote the kill threshold before launch.",
    summary:
      "MoneySmart wins the transaction and loses the relationship. After buying through the O2O channel, customers had nowhere to see their policy, its status, or what came next, so every post-purchase question routed back to their agent and they re-shopped cold on the next need. I owned the pitch, the PRD and the prototype for a products dashboard: a card surface pre-populated from the CRM the moment a deal binds, designed to be honest about how fresh its own data is, on a three-week pilot clock.",
    outcome:
      "Pitch, PRD and prototype owned end to end · car-first scope · Build/Iterate/Kill thresholds fixed before launch",
    capabilities: [
      "Zero-to-one definition",
      "Metric & threshold design",
      "Scope sequencing",
      "Trust & data integrity",
      "Systems design",
      "Regulatory constraints",
    ],
    body: {
      problem:
        "MoneySmart wins the transaction and loses the relationship. A customer who bought insurance through the O2O channel (phone, WhatsApp, or directly with an agent) had no surface of their own afterwards: no place to see what they'd bought, what state it was in, or what to do next. Every post-purchase question, which insurer am I with, what's my premium, when does it expire, where are my documents, went back to the same agent. And on the next need, customers re-shopped cold on Google or went insurer-direct rather than returning to us.\n\nThree constraints made this harder than 'build a dashboard'. Most O2O purchases happen logged out, so at the point of sale there is usually no MoneySmart account to show a card to. There is no API integration with any insurer, so documents arrive by a manual path 3 to 5 business days after bind, and any change a customer makes directly with their insurer is invisible to us. And our web analytics cannot separate O2O customers from any other logged-in user, so the obvious success measure, 'did O2O customers come back more', was not measurable at all.",
      whatIDid:
        "I wrote the pitch and the PRD, and the first decision was what not to claim. This is hygiene foundation: it does not sell anything. The revenue mechanics everyone wanted to talk about, renewal nudges, cross-sell, points conversion, all sit in later phases and all need a surface that already holds the customer's products. So I argued Phase 1 on the unlock rather than a revenue number and defended that through pitch review. The alternative reads better in a deck and collapses the first time someone asks which line it moves.\n\nThe hardest design problem was truthfulness. With no insurer feed, a card drifts the moment a customer endorses, renews or cancels directly with their insurer, and an insurance dashboard quietly showing stale coverage is worse than no dashboard at all. So I split the field set by volatility rather than by what looked good on a card. The listing card carries only fields locked at bind and unchangeable without a whole new policy: insurer, plan name, policy number, purchase date, document status. Everything volatile (premium, active-from, expiry, coverage) moved to the detail page under a disclaimer banner. Each card also shows when its document was last updated, colour-coded as it ages (green under 30 days, yellow to 90, red beyond), and past 90 days the card visibly decays and asks the customer whether something has changed. That prompt opens a WhatsApp thread to their own agent, pre-filled with the card's context, landing in the queue that agent already works. The record stays trustworthy through flagged corrections rather than through a sync we don't have.\n\nAdoption had two halves. Because customers buy logged out, the CRM captures email and phone at bind as the identifier; on first login, existing account or fresh sign-up on the same details, the card is already waiting. And a new left-nav item nobody visits is a dead surface, so I specced five comms layers instead of one: a line in the existing confirmation email, the nav item itself, an automated notification when documents land (the highest-value layer, since it arrives at the exact moment the customer has a reason to look), a manual agent fallback for when that delivery fails, and an in-product banner for people logged in for other reasons. One constraint held throughout: no change to the agent close ritual. Agents were never going to absorb a new step, and a plan that depends on them doing so is a plan that doesn't ship.\n\nThen the measurement, where the broken denominator bit. With no O2O cohort in analytics and a logged-in base I could only bound between 28,800 and 86,401 monthly unique users, percentage lift on a sub-slice would have been noise dressed as a result. So I anchored to the conservative lower bound and used absolute counts: 860 unique clickers on the nav item (3% of that base, the low end of what a secondary nav item earns) and 1,000 unique landers over 30 days. Then I wrote the kill rule before launch: both metrics have to miss and show no week-over-week growth, because a single-metric miss at this sample size isn't evidence of anything. Two hard guardrails sat underneath, both about not making things worse. Card data has to be accurate within five business days for 95% of customers, and if it drops below 90% for three days the outbound notification pauses itself rather than sending people to broken cards. And post-purchase agent contact must not rise: if the dashboard creates status questions instead of answering them, it has failed even if the click targets clear.\n\nScope moved twice, both times narrower. Term, term mortgage and health came out of Phase 1 so car could ship first and the freshness model could be proven on one product line before fanning out. Home loans went to KIV for a harder reason: rates shown to a customer are lender-controlled and may not be accurate, and loan documents are typically bank-internal with nothing customer-facing to download, so the entire 'preparing, then download' pattern doesn't map. That's a disclosure problem, not a build problem, and forcing it onto the pilot clock would have meant shipping something I couldn't stand behind.",
      result:
        "Honest status: this is specced and prototyped, not measured. Inside the pilot window I took it from pitch to a locked PRD, a working prototype of the listing and detail pages, and a technical architecture agreed with engineering (a read API over the existing deals data, a new documents table tracking the preparing-to-ready state, a front end that holds no data of its own) ready for the production build.\n\nWhat I can't claim is adoption. The 860 and 1,000 targets are targets, the 30-day measurement window runs post-launch, and I'd rather show the thresholds and the kill rule I committed to in advance than a number I don't have yet. The part I'd defend regardless of how those land: the surface tells customers how old its data is instead of pretending to be live, and it can be killed on evidence, because the criteria were fixed before anyone had an opinion about the outcome.",
      quote:
        "We have no insurer feed, so a card can go stale the moment a customer calls their insurer directly. Pretending otherwise was the one thing that would have broken trust. So the dashboard says what we sold you, when we last heard about it, and asks you to tell us if we're wrong.",
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
    tagline: "Took car insurance from an app-only product to a web-led growth engine with a renewal book behind it: +300% gross premium, +100% revenue over two years.",
    summary:
      "Car was Bubblegum's core product, but it could only be bought inside the mobile app. Every prospective buyer had to download an app before they could even see a price. I led the web launch that removed that precondition, stripped friction out of the quote-to-purchase funnel with Singpass prefill and early eligibility checks, then built an automated renewal engine so growth compounded instead of being re-won from scratch each year. The book reached 8,814 policies and S$7.62M in transacted premium.",
    outcome: "+300% gross premium · +100% revenue over two years · 8,814 policies, S$7.62M premium",
    metric: "Gross premium +300% · Revenue +100%",
    capabilities: ["Growth strategy", "Distribution expansion", "Conversion optimisation", "Funnel analysis", "Retention & renewals", "Product strategy"],
    body: {
      problem:
        "Car insurance was the core product, but in its first incarnation it was app-only. That capped the addressable market at the slice of people willing to download an app just to get a quote: a brutal funnel tax for a considered, price-sensitive purchase that most people shop on a desktop browser at work. Two structural problems sat underneath it. The quote flow asked for a long list of vehicle and driver details up front, much of it manually keyed and error-prone, before showing a single price. And there was no renewal mechanism: the book leaked every twelve months, so each year's growth had to be re-acquired from zero rather than building on the last. The product wasn't broken; its distribution and its retention were.",
      whatIDid:
        "I treated this as three compounding levers, not one redesign, and sequenced them so each unlocked the next.\n\nThe first and biggest was distribution: launching car insurance on the web (bubblegum.co), so a quote no longer required an app install. I owned the full purchase funnel (PDP → quote questions → plans and add-ons → application → Stripe checkout → policy issuance and COI) as a first-class web journey rather than a port of the app.\n\nThe second was taking friction out of that funnel. I pulled the eligibility check forward so ineligible drivers (age, accident history, claims, vehicle age) hit a clear 'not for you' wall early, instead of investing ten minutes and then bouncing. I integrated Singpass/MyInfo to auto-populate identity and vehicle data (accurate, non-editable, and far faster than manual entry) and added a resume flow so anyone who dropped between quote and payment could pick up exactly where they left rather than restart.\n\nThe third lever was retention. Instead of re-acquiring the book every year, I built the renewal program against a 65%+ monthly renewal target: ingesting the insurer's twice-monthly claims and NCD file to auto-calculate the renewal premium across every plan the customer was still eligible for, then nudging them through email, WhatsApp and push at T-45/T-30/T-15 with a pay-direct-from-the-message path. Renewals turned a leaking bucket into a compounding base.",
      result:
        "Over two years gross premium grew 300% and revenue grew 100%, with the book reaching 8,814 policies and S$7.62M in transacted premium across web and app. I'm deliberate about what gets credited to what: the web launch was the step-change in reach, while the funnel and renewal work is what kept conversion and retention climbing on top of it rather than flattening as volume grew. The honest tension is in the gap between the two headline numbers: gross premium outran net revenue (3x vs 2x) because a meaningful share of the acquisition was promo-driven and the plan mix shifted. That's a real trade-off, not a footnote: we bought volume at some margin, and naming it is part of reading the result correctly.",
      quote:
        "The single biggest growth lever wasn't a smarter funnel. It was removing the app download as a precondition to getting a price. We'd built a good product and then hidden it behind the highest-friction front door possible.",
    },
  },
  {
    slug: "endorsement-experiment",
        gradient: "from-[#155e75] to-[#0891b2]",
    title: "Reducing Post-Purchase Policy Changes",
    tagline: "Date-change endorsements were 70–80% of all policy changes. I A/B-tested two fixes, and the counterintuitive one, removing the pre-filled dates entirely, cut early endorsements 74%.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "2025",
    summary:
      "Period-of-insurance changes (customers amending their policy dates after buying) were 70–80% of every endorsement request, each one manual partner-dependent work that routinely blew past a 30-day turnaround. I traced it to a default-bias problem at the date fields, then ran a two-variant A/B test against a full-year baseline. The variant that removed the pre-filled dates entirely cut D-30 endorsements from 4.37% to 1.13%, beating both the control and the more obvious 'add a confirmation step' variant.",
    outcome: "74% reduction in early policy changes · 4.37% → 1.13% · beat the 60% target and the rival variant",
    metric: "4.37% → 1.13%",
    capabilities: ["Experiment design", "Root-cause analysis", "A/B testing", "Behavioural design", "Data-driven decision making", "Ops-cost reduction"],
    body: {
      problem:
        "Period-of-insurance (POI) changes, customers amending their policy start or end dates after purchase, were 70–80% of every endorsement request Bubblegum handled (457 of 652 in 2024). Each one was manual, partner-dependent work: we relied on the insurer to action the change, they routinely missed the 7-day window, and turnaround blew past 30 days, expensive for ops and infuriating for customers. The obvious read was that people were extending their cover, and the obvious fix was to make extension easier. The data didn't say that. Bubblegum already let customers buy up to 18 months; most just took the pre-filled 12-month default and came back later, around 90% of them to realign with their road-tax renewal date. And of the cases I sampled, 60% weren't extensions at all: they changed both the start and end date without touching the policy's duration. The problem wasn't policy length. It was that people were setting the wrong dates at purchase and fixing them afterward.",
      whatIDid:
        "The cleanest fix would have been to show customers their road-tax renewal date right in the form, but no LTA API exposes it, so that door was closed. That pushed the problem onto behaviour: how do you get people to set the right dates themselves, at purchase? I suspected default bias: 78% of users already changed the pre-filled start date, yet half still came back to amend, which told me the pre-fill was anchoring people to dates they didn't actually want.\n\nSo I designed two variants that attacked the anchor from opposite directions, against a clean control (full-year 2024 new-business policies, with partner and renewal sales excluded). Variant A removed the pre-filled dates entirely and nudged users to align with their road tax, using animated placeholder text to pull attention to the empty fields. Variant B kept the pre-filled dates for convenience but added a nudge plus a mandatory confirmation step before the customer could proceed. A bets the default is the problem; B bets the default is fine and people just need a prompt to check it.\n\nI fixed the success metric and the bar before launch (a 60% reduction in D-30 POI endorsements) and tagged every variant through to the backend with a tracking key so the cohorts couldn't be confused, with Customer Effort Score as a guardrail to catch a nudge that confused more than it helped.",
      result:
        "Variant A won, and not narrowly: D-30 endorsements fell from 4.37% to 1.13%, a 74% reduction that cleared the 60% bar. Variant B, the more conservative 'just ask them to confirm' option, managed 42%, real but barely two-thirds of A's effect. The lesson sat in that gap: removing the default beat reinforcing it, because the default itself was the thing steering people to the wrong answer. I'm honest about the limits: the variant cohorts were small in absolute terms (3 and 7 endorsements over a four-month window), so I read the 74% as a strong directional result rather than a precise point estimate, and recommended rolling Variant A out across new-business and dealer channels with 3–6 months of monitoring to confirm it holds at scale and to test the same pattern on renewals.",
      quote:
        "The intuitive fix was to keep the pre-filled dates and just ask people to confirm them. That variant worked, but the one that won did the opposite and removed the defaults entirely. The default wasn't a convenience; it was the thing quietly steering people to the wrong dates.",
    },
  },
  {
    slug: "mobile-app-revamp",
        gradient: "from-[#1e1b4b] to-[#4338ca]",
    title: "Mobile App Revamp",
    tagline: "The app was built to sell, but everyone opening it had already bought. I restructured the IA around policies, service and support, repositioning it as a post-purchase hub and lifting monthly engagement 20%.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "Q3 2024",
    summary:
      "The Bubblegum app was built around the purchase journey, but almost everyone opening it had already bought. They landed in a sales funnel when what they needed was their policy, a claim, or an emergency number. I owned the App Refresh: a ground-up IA restructure of the four core pages that repositioned the app from 'sell insurance' to 'serve customers after they've bought,' while keeping discovery for upsell. Monthly engagement rose 20%.",
    outcome: "+20% monthly user engagement · app repositioned as a post-purchase service hub",
    metric: "+20% monthly engagement",
    capabilities: ["Strategic repositioning", "Information architecture", "Mobile product design", "Post-purchase & retention", "Cross-functional leadership", "CMS-driven content"],
    body: {
      problem:
        "The Bubblegum app was structured like a sales funnel: its home screen, navigation and hierarchy all optimised for someone about to buy a policy. But the people actually opening the app had overwhelmingly already bought. They came to check their coverage, file a claim, find a workshop, or grab an emergency number, and instead landed in a purchase flow that treated them as a fresh prospect. Post-purchase customers had poor visibility into their own policies, almost no self-service, and no obvious support path, so engagement fell off a cliff right after the one moment the app was built for. The app's job and its users' jobs had drifted apart.",
      whatIDid:
        "I owned the App Refresh and treated it as a repositioning, not a reskin: the app's job changed from 'sell insurance' to 'serve customers after they've bought.' Everything followed from that. I rebuilt the four core pages from the information architecture up (Home, Discover, My Policies and Support) and held everything else to UI-level adjustment, so the strategy shift didn't balloon into a full rebuild.\n\nThe home screen became a service surface instead of a storefront, structured around the customer's own policies first. A policy-card carousel carried product-specific intelligence (destination imagery and a trip countdown for travel, vehicle and plan details for car, insured count for PA) on a richer status model that added a new 'Upcoming' state for policies bought but not yet started. A product-aware 'How can we help' section surfaced only the actions relevant to what each customer actually owned: workshops and accident lines for car, travel assistance for travel.\n\nI designed the page states around who's actually there. Customers with zero policies land on Discover (the upsell surface) rather than an empty home, and the navigation itself adapts, with new users seeing a trimmed three-tab bar. Marketing and product banners run off Strapi, so the team can launch, schedule and expire campaigns (promo cards, reviews, countdown timers) without an engineering ticket each time.\n\nMy Policies and Support carried the rest of the load: active/inactive grouping with claim and policy-download actions on every card, and a Support hub wiring up Write-to-Us (Freshdesk), WhatsApp, FAQs and product-specific post-purchase help, turning the routine reasons a customer contacts you into things they could do themselves.",
      result:
        "Shipped September 2024. Monthly user engagement rose 20%, and the app stopped behaving like a one-time checkout. It became a place customers return to between purchases. The durable win is the reframe itself: by designing for the post-purchase customer who was already the majority of traffic, rather than the prospect the old IA assumed, engagement followed the audience. I'm clear-eyed that 20% is the number I can point to at launch; the deeper bet (that a service hub compounds into retention and upsell) is the kind of thing that shows up over quarters, not in a launch metric.",
      quote:
        "The App Refresh wasn't a visual update. It was a strategic repositioning. We changed the app's job from 'sell insurance' to 'serve the customers who'd already bought,' because that's who was actually opening it.",
    },
  },
  {
    slug: "tech-support-tool",
        gradient: "from-[#075985] to-[#0284c7]",
    title: "Support Diagnostics Tool",
    tagline: "Routine policy fixes kept pulling engineers off product work. I shipped an API-based support tool that let ops do them directly, handing routine policy edits back to the support team.",
    company: "Bubblegum Insurance",
    role: "Owner",
    status: "Done",
    period: "2023",
    summary:
      "Support couldn't change a customer's policy without an engineering ticket: every address fix, date correction or named-driver change was a developer interruption. I defined and shipped an internal tech-support tool (a versioned API surface ops could drive themselves), with an audit trail and environment separation built in, so routine policy edits no longer needed a developer.",
    outcome: "Routine policy operations handled by ops, not engineering",
    capabilities: ["Internal tooling", "API design", "Ops efficiency", "Cross-functional coordination"],
    body: {
      problem:
        "Engineering was the bottleneck for routine support. Changing a policy's email, correcting a start date, adding or removing a named driver, fixing an address: none of it required code, but all of it required a developer, because only engineering could touch the data safely. Each request was a context-switch away from product work, and support couldn't even self-diagnose a case without escalating. The cost wasn't one big thing; it was a thousand small interruptions.",
      whatIDid:
        "I specced an internal tech-support API the ops team could operate themselves (v3.1, run through a Postman collection across separate Production and UAT environments). It exposed exactly the operations support actually needed: PATCH a policy's email, phone, dates, vehicle, finance company or named drivers; update a user; add a dealer; and ingest the insurer's renewal CSV.\n\nTwo design choices made it safe to hand to non-engineers. Every call carries an admin-username header, so each change is attributable: a built-in audit trail rather than an anonymous data edit. And read endpoints (full policy data fields, request/response logs, valid finance-company and ID-type keys) let support diagnose and self-correct a case before writing anything. I coordinated delivery across engineering, ops, marketing and compliance so it shipped within the regulatory constraints on policy data.",
      result:
        "Routine policy troubleshooting moved off engineering's plate and onto the support team's, handing developer time back to product work and giving ops genuine self-sufficiency on routine policy operations. It also became the backbone for later tooling: the same renewal-file ingestion and policy operations were reused when the no-code Admin Panel was built on top.",
      quote:
        "The win wasn't a clever feature. It was giving support the five or six operations they actually needed, with an audit trail, so engineering stopped being the help desk for routine policy edits.",
    },
  },
  {
    slug: "user-identity",
        gradient: "from-[#0c4a6e] to-[#06b6d4]",
    title: "Email Login Migration",
    tagline: "Re-platformed identity for 20,000+ customers from phone-OTP to email-first login, with omni-login on top, and de-duplicated a fragmented account base without anyone losing access to a policy.",
    company: "Bubblegum Insurance",
    role: "Co-owner",
    status: "Done",
    period: "Q4 2024",
    summary:
      "Bubblegum had no durable identity layer: customers were authenticated by phone OTP, the same person often showed up as several disconnected profiles across products, and many policies weren't tied to any registered account at all. I co-owned the migration to email-as-primary-identifier with optional mobile verification for omni-login, and the far harder half, a one-time consolidation of 20,000+ existing accounts that had to merge duplicates and re-tag policies without ever bleeding one customer's data into another's.",
    outcome: "Unified identity layer across all products · omni-login live · zero data-bleed incidents",
    metric: "20,000+ accounts migrated",
    capabilities: ["Ambiguity navigation", "Edge-case modelling", "Risk identification & mitigation", "Data migration", "Identity architecture", "Cross-functional alignment"],
    body: {
      problem:
        "Bubblegum's authentication ran on phone-number OTP, and that created two compounding problems. There was no persistent identity: nothing reliably tied a person to everything they'd bought, so the same customer surfaced as multiple disconnected profiles across car, travel and PA, and a large share of policies weren't linked to any registered account at all, only to an anonymous session. That broke policy tracking, made omni-login impossible, and blocked anything downstream that depended on knowing 'this is the same person.' The catch was the constraint: any fix had to operate on a live book of 20,000+ existing customers who rely on those policies for claims. Get the consolidation logic wrong and you don't ship a bug: you expose one customer's policies to another, or lock someone out of a contract they're mid-claim on.",
      whatIDid:
        "I co-owned the PRD and treated it as two projects: the forward-looking auth model, and the much harder backfill of everyone already on the platform.\n\nThe model itself: email becomes the mandatory primary identifier, verified by OTP at the policyholder step. On verification we elevate the anonymous session to a unique registered user_id, auto-create the account and log the person in, so an account exists whether or not they complete a purchase, and no two users can ever share an ID. Mobile verification stays optional, nudged after purchase via a WhatsApp link, and once done it unlocks omni-login: sign in with either email or mobile, Amazon-style.\n\nThe hard half was existing users. I split the book into clean segments (verified-email, verified-mobile, account-but-no-policy, policy-but-no-account) and wrote consolidation rules for each: create or attach a registered user_id, map every historical policy onto it, and for mobile-first customers assign a single primary email (flagged pseudo-verified) so the book collapses to one account per person. I modelled the edge cases explicitly instead of hand-waving them: multiple emails under one mobile (take the most recent, surface the counts to decide), conflicting verified-vs-unverified identifiers across a person's policies, MyInfo-sourced numbers (freeze the mobile, leave email editable), and full normalisation (lowercase every email, store every mobile as +65) across the entire dataset.\n\nThe part migrations usually skip is the part I spent the most time on: designing against the worst case. Data-bleed was the failure I refused to ship. Every non-imported policy had to share at least one verified identifier with its consolidated account before the tool was allowed to touch production. Dealer policies were ring-fenced out of the exercise entirely: dealers had historically entered their own email and phone instead of the customer's, so merging them would hand a customer's policies to a dealer or vice-versa. And every change wrote an audit record (entity, old value, new value, timestamp) so anything could be traced and reversed, with pre- and post-deployment sanity checks comparing production data dumps to catch silent merges.",
      result:
        "The migration shipped as Phase 1 of the identity epic. Email-first auth and omni-login went live, every retained policy was re-tied to a single registered account, and renewal events now carry the registered user ID so the same person stays identified across cycles. The outcome I'm proudest of is the one that's invisible when it goes right: no customer lost policy access and no account merged data across people, because the failure modes were mapped and gated before any code ran. This was a project where success is measured by the absence of incidents, not a conversion lift, and the discipline was front-loading the edge cases rather than discovering them in production on a live insurance book.",
      quote:
        "The risk was never writing the migration. It was the edge cases. Dealer-tagged policies, MyInfo-frozen numbers, the same email sitting under three accounts. We mapped and gated every one before a line of code ran, because on a live insurance book the cost of a wrong merge is a customer locked out of their own claim.",
    },
  },
  {
    slug: "admin-panel",
        gradient: "from-[#1e293b] to-[#475569]",
    title: "Ops Admin Panel",
    tagline: "Built a full policy-lifecycle ops panel (endorsements, cancellations, renewals, Customer 360) on a no-code platform, shipping in one quarter without spending scarce engineering capacity.",
    company: "Bubblegum Insurance",
    role: "Contributor",
    status: "Done",
    period: "Q4 2024",
    summary:
      "The ops team had no single place to manage policies and leaned on engineering for routine work. I contributed to the Admin Panel PRD and the deliberate decision behind it: build on Jet Admin (no-code) rather than in-house, trading enterprise-grade polish for speed and protected engineering bandwidth. It shipped in a quarter, covering the full policy lifecycle across all three products.",
    outcome: "Ops team self-sufficient across all policy products",
    capabilities: ["Internal tooling", "Build-vs-buy decision-making", "Ops efficiency", "Access control & governance"],
    body: {
      problem:
        "Ops had no centralised tool to manage policies. Endorsements, cancellations and renewals were scattered across sources with no single source of truth, and anything that touched the data meant pulling in engineering, the same capacity the business needed for customer-facing product. The constraint was as much commercial as technical: in a tight environment, this tool couldn't be allowed to eat the roadmap.",
      whatIDid:
        "I contributed to the Admin Panel PRD, and the framing decision that shaped it was build-vs-buy. We chose a no-code platform (Jet Admin) and were honest about the trade: a lightweight tool built quickly and scrappily, not enterprise software: the right call when the goal is time-to-market and saving engineering hours, not a permanent platform.\n\nOn that base I helped spec the full policy lifecycle: a comprehensive policy list with role-restricted COI access, an endorsement workflow across seven statuses, cancellations and refunds across eight, renewal management, and a Customer 360 view assembled from the same database approach used for analytics. The governance was the careful part: role-based access plus a maker-checker approval flow for the actions that move money or change contracts (refunds, selective endorsements), so self-service didn't become unaudited risk.",
      result:
        "Epic BBG-3575 (Admin Panel Phase 1) shipped. The ops team became self-sufficient across Car, Travel and PA (managing policies, endorsements, cancellations and renewals without routing routine work through engineering), and it landed in a single quarter precisely because we chose not to build it in-house.",
      quote:
        "We shipped a full ops panel (policy lifecycle, Customer 360, RBAC and maker-checker) in one quarter by choosing no-code on purpose. The discipline was matching the tool to the moment, not over-building.",
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
      "Existing policyholders due for renewal were landing in the new-business purchase funnel, re-answering the full quote questionnaire for a policy we already held all the data for. I defined detection logic to identify a renewal customer at the entry point and an interstitial to route them into the dedicated renewal journey: a pre-filled one-page summary with their auto-calculated renewal premium.",
    outcome: "Renewal customers correctly segmented at entry point",
    capabilities: ["User journey design", "Conversion optimisation", "Data segmentation", "Retention"],
    body: {
      problem:
        "Renewals and new business shared the same front door. A customer coming back to renew (from a reminder email, a marketing link, or directly) could fall into the new-business quote flow and be asked to re-enter everything we already held: vehicle, driver, claims history. For a retention moment meant to feel effortless, it was the opposite, and the friction showed up as drop-off on exactly the customers we most wanted to keep, against a 65%+ monthly renewal-rate target.",
      whatIDid:
        "I defined detection logic to identify a renewal-eligible customer at the point of entry, and an interstitial that intercepted them before they fell into the new-business flow, routing them into the renewal journey instead.\n\nThat journey removed the re-entry entirely. The renewal premium is auto-calculated ahead of time from the insurer's (III's) claims and NCD file (delivered twice a month in two batches) and the prior year's policy, so the customer lands on a pre-filled one-page summary instead of a blank questionnaire: edit the few things that actually change (mileage, COM, finance company, named drivers), pay, done.\n\nThe routing carried real eligibility intelligence rather than just a redirect. A vehicle turning 16 drops Compre/Compre+ and surfaces the next-best plan; at 18 it narrows to TPO; past 21 the policy can't be renewed at all, so the renewal prompt is suppressed instead of leading the customer into a dead end. Personalised, no-login links from email and WhatsApp could drop an authenticated returning customer straight onto the summary or the payment screen: email carrying a primary 'Pay now' and a secondary 'Review and Pay', WhatsApp a single in-chat Pay CTA.",
      result:
        "Shipped. Renewal customers were correctly segmented at the entry point and directed into the renewal flow rather than the new-business funnel, turning a repeated data-entry slog into a review-and-pay step, in service of the 65%+ monthly renewal-rate target the renewal program was built around. Reminders ran on a T-45 / T-30 / T-15 cadence across email, WhatsApp and push, and stopped on expiry day.",
      quote:
        "A renewal isn't a new purchase. We already hold the data. The fix was making sure the system recognised a returning customer before it asked them to start over.",
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
      "Marketing's promo velocity depended on engineering. I contributed to the promo-campaign setup on Talon.One with Segment as the CDP, defining the customer attributes and segmentation rules that let marketers create, target and personalise discount campaigns themselves rather than filing a ticket for each one.",
    outcome: "Self-serve promo campaigns on Talon.One + Segment",
    capabilities: ["Growth", "CDP architecture", "Marketing enablement", "Systems thinking"],
    body: {
      problem:
        "Promo campaigns ran on Talon.One with Segment as the CDP (after we moved off Mailchimp), but the part that should have been self-serve wasn't. Every new campaign (define who's eligible, set the discount rule, personalise it) needed an engineer to wire up the targeting. That capped marketing's promo velocity at engineering capacity and parked it behind the product roadmap, which is backwards for a discount engine: promos are time-sensitive and run constantly, so a per-campaign engineering dependency is a permanent tax.",
      whatIDid:
        "The fix was a one-time targeting foundation marketing could reuse for any campaign, rather than a per-campaign engineering build. Working in Talon.One with Segment feeding it, I defined the customer and session attributes campaigns segment and personalise on: Has Car, number of car and travel policies held, travel destination, initial and last-touch UTM source, platform (desktop / mobile / app), session product, and cart premium, and the rule structure marketers could compose on top of them.\n\nThat unlocked a library of campaign types with no further engineering: cross-sell (car customers who buy travel, and the reverse), nth-purchase personalisation, destination-based travel offers, make/model targeting, and time-boxed codes with usage caps (e.g. first 1,000 redemptions). The attributes were the leverage: set once, every future promo just references them.",
      result:
        "Marketing could define, target and personalise promo campaigns on the shared Talon.One + Segment foundation rather than filing an engineering ticket for each one, turning a recurring per-campaign dependency into reusable infrastructure, and the groundwork for the broader wallet/loyalty program (store, stack and redeem codes) this was the first step toward.",
      quote:
        "The unlock wasn't any single campaign. It was setting up the attributes and rules once so marketing could launch and target promos themselves, instead of filing an engineering ticket every time.",
    },
  },
]

// The case studies that best show core PM problem-solving, one lens each across
// the three that matter most: growth, efficiency, effectiveness. This is the
// source of truth for what leads the site: the projects page shows these up
// front, the home page teases the first three.
const featuredOrder = [
  "car-insurance-growth",   // growth — distribution + compounding levers
  "ai-quotation-tool",      // efficiency — automation that held revenue on fewer leads
  "endorsement-experiment", // effectiveness — counterintuitive experiment, right root cause
]

export const featuredProjects = featuredOrder.map(
  (slug) => projects.find((p) => p.slug === slug)!
)

// Personal builds outside work — shown in their own "Side projects" section.
export const sideProjects = projects.filter((p) => p.side)

// Every other work project — not one of the four highlighted, not a side
// project. These live behind the collapsible reveal on the projects page.
const highlighted = new Set(featuredOrder)
export const otherProjects = projects.filter(
  (p) => !p.side && !highlighted.has(p.slug)
)

// Pulls the two hex stops out of a stored gradient class ("from-[#164e63]
// to-[#0e7490]") so the same colour identity a project shows on the index can
// tint its case-study masthead. Falls back to the site accent palette if a
// gradient is ever written in a shape this doesn't recognise.
export function gradientStops(gradient: string): [string, string, string] {
  const [from, to] = gradient.match(/#[0-9a-fA-F]{6}/g) ?? []
  if (!from || !to) return ["#2563eb", "#7c3aed", "#06b6d4"]
  return [to, from, to]
}

