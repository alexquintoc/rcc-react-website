# Design Directions
### Three differentiated directions for the RCC redesign exploration

All three directions preserve the brand's real navy (`#1B476C`) and orange (`#F99D26`) pair (Taste Skill Section 11.C — a brand that already has color keeps that color), the real content in `design-analysis.md`, and the existing IA/nav labels. They differ in how confidently each pushes the brand, how much motion and asymmetry they carry, and which of RCC's real strengths (numbers, people, or place) leads the story. Every direction commits to one accent, one corner-radius system, one type system, and one theme (light) — no mixing, per the skill's consistency locks.

---

## Direction A — "Ledger"
**Concept:** An institutional-report aesthetic. RCC produces real, auditable outcomes ($766M, 175 projects, named partners) — this direction treats the site like a beautifully typeset annual report: numbers get real display treatment, structured program data (Status/Location/Focus Areas) gets a proper tabular-but-legible system, and the whole thing reads as evidence, not marketing.

**Visual tone:** Restrained, dense-but-organized, quietly confident. Closest emotional register to a Ford Foundation or Brookings report microsite — the opposite of a generic nonprofit template precisely because it doesn't try to look like a "website," it looks like a document that happens to be a website.

**Typography approach:** Oswald retained for display (it's the one piece of the current brand worth keeping outright — condensed, authoritative, already recognized), set with real responsive `clamp()` sizing instead of the current fixed 70px. Paired with **Public Sans** for body/UI — a genuinely public-sector-appropriate humanist sans (it's literally USWDS's typeface), reinforcing the "we work with cities" register without reaching for Inter. Numerals get tabular-figure treatment for alignment in the stat and metadata blocks.

**Color approach:** Navy-dominant. Off-white paper background (`#F7F5F0`-adjacent, not pure white), navy for nearly all text and rules, orange used with real restraint — one stat, one CTA state, nothing else. Hairline rules replace cards almost everywhere.

**Layout system:** A strict 12-column editorial grid with a visible baseline rhythm. Structured metadata (program Status/Location/Focus Areas) becomes a labeled two-column definition-list pattern, not a bordered spec table. One stat gets a full-width "headline number" treatment; the other three sit smaller beside it.

**Navigation behavior:** A slim, sticky top bar (max 64px) that shrinks further on scroll; the deep What We Do → Methods & Tools flyout collapses into a two-level mega-panel on hover/focus (all five grandchildren visible at once, no nested hover) and a plain accordion on mobile.

**Motion approach:** `MOTION_INTENSITY: 3`. Almost entirely static; the only motion is content entering on scroll (`whileInView`, no scroll-hijacking) and a real, server-rendered stat value that ticks up once on first view. Nothing loops.

**Strengths:** Highest credibility signal for the funder audience; cheapest to keep accessible and fast; most direct translation into a disciplined WordPress/Elementor build (mostly hairlines and type, few custom widgets).
**Risks:** Can read as dry or corporate if the photography and real program stories don't get enough room to breathe; risks under-selling RCC's on-the-ground, human character.

---

## Direction B — "Coordinates"
**Concept:** RCC's work is explicitly geographic and portfolio-shaped (By Location is a real nav item; California, Appalachia, Pittsburgh, Latin America/Caribbean are real program footprints). This direction makes place and scale the organizing idea: a data-forward, almost cartographic system where every section is anchored to a real place or a real number, composed with more asymmetry and confidence than Direction A.

**Visual tone:** Precise, modern, slightly technical without becoming a dashboard — closer to a climate-data publication (Rhodium Group, Carbon Brief) than a nonprofit brochure. Most distinctive and least template-like of the three.

**Typography approach:** A grotesk pairing with more contrast than Direction A: **Space Grotesk** for display (geometric, slightly technical, good at large scale and in numerals) with **IBM Plex Sans** for body and UI (pairs naturally with Plex-style mono for coordinates/labels, reinforcing the data register without needing a full monospace commitment). Oswald is retired in this direction — it doesn't fit the more technical voice, and reusing it in all three directions would undercut how differentiated they are.

**Color approach:** Same locked navy/orange pair, but deployed with more contrast: a near-black `#0B0F14`-adjacent dark section for the stat bar and program-locator moments (the one deliberate, single, page-wide theme block the skill allows, not a random inversion), everything else on off-white. Orange gets slightly more surface area here as the "signal" color for live/active program markers.

**Layout system:** Asymmetric grid (`DESIGN_VARIANCE: 7`) — large open left margins, content breaking the boxed-1140px habit of the current site, a real "portfolio index" layout for the six Project Preparation initiatives and nine California programs instead of forcing them into equal cards (2-across hero items + smaller supporting rows, sized by real scope, not uniformly).

**Navigation behavior:** Same slim sticky bar as Direction A for consistency of good behavior, but the mega-menu panel groups Methods & Tools by the same "place/scale" logic as the rest of the site rather than a flat list.

**Motion approach:** `MOTION_INTENSITY: 5`. Purposeful reveal choreography (staggered entrance on the program-index and stat sections, motivated by "this is a lot of information arriving in order"), a subtle scroll-linked progress indicator on long program pages. No scroll-hijacking, no parallax for its own sake.

**Strengths:** Most differentiated and memorable; best showcase for program *breadth* and geographic reach; strongest "this org operates at real scale" impression for funders comparing many orgs.
**Risks:** Higher build complexity (asymmetric grid + dark-section handoff need real care to stay accessible and to collapse cleanly on mobile); the more technical voice is a slightly bigger tonal departure from the current site's warmer copy voice, so copy would need light tuning to match without a full rewrite.

---

## Direction C — "Fieldwork" (recommended)
**Concept:** RCC's actual differentiator, evident in its own media library, is that the work is tangible and photographable — real coastal towns, real community pilots, real people in named roles. This direction replaces the current icon-grid abstraction with documentary photography as the primary visual language, and uses the genuine six-year anniversary as a structural narrative spine (proof-over-time), not a decorative strip.

**Visual tone:** Warm-but-serious, editorial, human-centered — closer to a well-funded foundation's storytelling site (think Bloomberg Philanthropies or a Knight Foundation feature) than either a corporate report or a data publication. This is the direction most likely to make a funder feel something in addition to being persuaded by numbers.

**Typography approach:** Oswald retained for display at large, confident sizes (its condensed authority works even better against photography than against a plain background), real `clamp()`-based responsive scale. Body/UI pairs with **Source Sans 3** — humanist, warm, highly legible at small sizes for long-form Impact Stories copy, distinct from both Public Sans (Direction A) and Plex (Direction B) so the three directions don't collapse into variations of the same system.

**Color approach:** Same locked navy/orange, but navy shifts to carry more of the *photography's* mood (deep navy overlays on hero/section images for legibility, not flat color blocks) and orange is reserved almost entirely for interactive moments (links, active states, the one lead stat) so it reads as a deliberate signal, not decoration.

**Layout system:** Asymmetric split compositions (`DESIGN_VARIANCE: 6`) pairing large photography with generous text columns; the dual "Sustained Capacity / Accelerated Action" frame becomes a two-part photographic split-scroll instead of two icon grids; program pages lead with a full-bleed photographic moment plus the real urgency stat before any structured metadata. Structured metadata (Status/Location/Focus Areas) becomes a set of labeled display tiles alongside the photography, not a table.

**Navigation behavior:** Same disciplined slim sticky bar + mega-panel as Directions A/B (consistency of good nav behavior isn't a place to differentiate); one addition — an unobtrusive "6 years" mark near the logo lockup on interior pages that links to the Mission & Impact timeline, giving the anniversary narrative a real, persistent (but small) presence without becoming a banner.

**Motion approach:** `MOTION_INTENSITY: 4`. Photography-led entrance transitions (image reveals tied to scroll position, motivated by "this is a place, arriving"), the stat bar ticks up once server-rendered-safe, hover states on program/story cards use a restrained image-scale + caption-reveal (feedback, not spectacle). Reduced-motion users get the same content with instant, static entrances.

**Strengths:** Strongest, most honest differentiation from every generic page-builder nonprofit site (leverages real assets RCC already has, doesn't invent a device); warmest register for the Impact Stories/News content that Directions A and B under-serve; still fully credible for funders because the real numbers and structured program data are present, just not the only thing on the page.
**Risks:** Needs a real, curated photography set to work — if the available imagery is thin or low-resolution for a given section, the pattern degrades faster than Direction A's type-and-rule system does; slightly more image-optimization discipline required to hit the Core Web Vitals targets (LCP) than either other direction.

---

## Recommendation

**Direction C, "Fieldwork."**

Direction A ("Ledger") is the safest and cheapest to build and would satisfy a funder-only audience, but on its own it doesn't fix the "generic nonprofit template" problem identified in the analysis — it just makes the template better-typeset. Direction B ("Coordinates") is the most visually distinctive but carries the highest build risk and the biggest tonal gap from RCC's existing warm copy voice, which this exploration isn't asked to rewrite.

Direction C solves the actual problem stated in the analysis: RCC's site currently looks like every other Elementor nonprofit template because it uses generic icon grids to represent work that is, in reality, specific and photographable. Leaning into real documentary photography plus the genuine six-year narrative gives the redesign a distinctive identity that is *earned from RCC's actual content* rather than invented decoration — while keeping every credibility element (the real $766M/54/175/90+ stats, the real partner logos, the real structured program data) fully present, just staged with more hierarchy than today.

**Pages to build:** Homepage, **Mission & Impact** (best showcase for the vision/mission split, the anniversary narrative, and the tiered stat treatment), and **Project Preparation Program** (best showcase for the photography-led program-detail pattern, the urgency-stat lead, structured metadata as display tiles, and the real partner logo wall). California v2's structured-metadata and advisory-board patterns are captured as reusable components rather than a fourth full page, to keep the prototype's scope realistic.
