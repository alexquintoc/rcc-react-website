# Design Analysis
### Resilient Cities Catalyst — `6years.rcc.city` redesign exploration

Audit performed against the live WordPress/Elementor site (Local install, "Helo" theme) at `home-rcc`, `california-v2`, `project-preparation-program`, and `mission-impact`. Content and CSS pulled directly from the live markup and stylesheets, not guessed.

---

## 0. Brief inference & redesign mode

**Design read:** Reading this as a **redesign (overhaul)** of a mission-driven climate-resilience nonprofit's marketing site, for a trust-first institutional audience (city officials, philanthropic funders, cross-sector partners), with an authoritative-yet-warm civic language, leaning toward native CSS + editorial photography + restrained, purposeful motion. Visual language is overhauled; information architecture and real content are preserved.

**Redesign mode:** Overhaul (Section 11.A). The IA is sound and the content is real and worth keeping, but the visual execution is unsalvageable template debt (generic Elementor/animation-plugin defaults, an off-brand stray color, fixed-px headline sizing). Content and navigation labels carry forward; visual system is rebuilt.

**Current site's inferred dial reading** (baseline for the overhaul, not the target):
- `DESIGN_VARIANCE: 3` — centered hero, symmetric 4-up stat grid, boxed 1140px container, equal-column icon grids throughout.
- `MOTION_INTENSITY: 4` — Elementor "Animation Addons" counter count-ups and fade-ins; no scroll choreography, no motivated motion.
- `VISUAL_DENSITY: 4` — moderate; stacked sections with real content weight (stats, three programs, three news cards) inside generous-ish but generic spacing.

Target dials for the overhaul live in `design-directions.md`, gated up from this baseline per Section 1.A ("redesign - overhaul": +2 variance, +2 motion) but capped down again by the trust-first audience constraint (Section 0.A quiet constraints), so the ceiling is disciplined, not agency-experimental.

---

## 1. Primary audience and goals

**Audience:** three overlapping groups, in descending frequency of visit but ascending importance of conversion:
1. **City/community practitioners and program applicants** — checking program eligibility (Project Preparation Program, Regional Resilience Partnerships, Resilient Neighborhoods Program), looking for "is this for us and how do we apply."
2. **Funders and philanthropic partners** — scanning for credibility: dollar figures, partner counts, named institutional partners (Hilton, Google, UN-Habitat, AECOM, ICLEI USA appear in the partner wall), proof of delivery.
3. **Press, peers, and prospective staff** — News, Impact Stories, Careers.

**Site goals:** communicate six years of delivered (not promised) resilience work, route each audience to the right program or story fast, and support the Donate / Contact / Support-us conversion paths without competing with the credibility-building content.

**Site-specific fact:** the domain itself (`6years.rcc.city`) is a real anniversary microsite — the Mission & Impact page literally frames this as "our sixth year of impact." This is not a cosmetic detail; it is the organizing narrative already latent in the content and should be treated as the redesign's throughline rather than invented decoration (see Section 6).

---

## 2. Content hierarchy and main navigation

**Primary nav (5 items + CTA), consistent across all sampled pages:**
- **About** → Mission & Impact, The Team, Careers, Our Partners, Support us
- **What We Do** → Our Approach, Methods & Tools → (Resilience Planning & Roadmaps, Project Development & Implementation, Climate Finance & Investment Pathways, Community & Small Business Resilience, Partnerships & Capacity Building)
- **Programs** → Program Portfolio, By Resilience Area, By Location
- **Insights** → News, Publications, Impact Stories
- **Contact**
- **Donate** (button, visually separated)

This is a reasonable, non-bloated top-level IA (5 items) undermined by a three-level-deep flyout under What We Do → Methods & Tools (5 grandchildren). That depth is invisible/unusable on mobile and is the one IA smell worth fixing in the redesign, without renaming any top-level label.

**Homepage content order (as rendered):**
1. Hero — H1 tagline + mission sentence, full-bleed background image
2. Impact stat bar — 4 counters (see real values below)
3. Our Approach — two-part frame: "Sustained Capacity" (Convenings, Knowledge Sharing, Resilience Playbooks, Cross-Sector Collaboration) paired with "Accelerated Action" (Infrastructure Projects, Community Pilot Programs, On-the-Ground Implementation)
4. Our Work — three flagship programs + "View the Work Hub" link
5. Featured Impact Stories
6. Featured News — 3 article cards
7. Footer — logo, tagline, About/Our Work/Connect link columns, legal

---

## 3. Real content and functionality to preserve

Pulled verbatim from the live CSS/HTML, not paraphrased — this is the material the redesign is written around:

- **Org name / mission:** "We accelerate action and build capacity within communities, cities and regions." / "Fostering safer, healthier, and more prosperous communities despite the growing challenges posed by climate change."
- **Real impact stats:** **$766M** directed toward implementation of resilience projects worldwide · **54** partnerships activated between cross-sectoral actors · **175** multi-benefit resilience projects designed, funded or implemented · **90+** trusted partners.
- **"Our Approach" body copy:** "Over the past six years, RCC has partnered with cities and communities to move resilience from ideas to action. Our dual approach pairs on-the-ground projects with the partnerships, tools, and knowledge needed to sustain them, creating a cycle where each effort strengthens the next."
- **Three flagship programs:** Project Preparation Program, Regional Resilience Partnerships, Resilient Neighborhoods Program.
- **Project Preparation Program real facts:** UNEP-cited urgency stat ("the cost of adapting infrastructure to climate change will reach $140–300 billion per year by 2030 and $280–500 billion by 2050"); six named initiatives (CPPI, Gold Standard/RCC Climate Adaptation Project Standard, UN Habitat Cities Investment Facility, Marshall Plan For Middle America Summit, Data-Driven Natural Asset Development, Cities Forward); eight program outcomes; a real 16+ logo partner wall (Hilton, Gold Standard, AECOM, UN-Habitat, ICLEI USA, Google, others).
- **California Resilience Partnership real facts:** structured program metadata (Status, Location, Focus Areas, Partners, Program Context, Project Type, Signature Initiatives); named advisory board members with real titles (Bernadette Austin – CEO, CivicWell; Darbi Berry – CRP Board Chair & Director, San Diego Regional Climate Collaborative; Louise Bedsworth – Executive Director, CLEE at Berkeley Law).
- **Mission & Impact real facts:** founding statement ("We launched RCC in 2020 with a mission to catalyze lasting change in cities and communities"), distinct Vision and Mission statements, the sixth-year anniversary framing, Impact Stories + Publications sections.
- **Footer structure:** logo + tagline, About (Who We Are, Our Approach, Team, Partners), Our Work (Projects, Impact Stories, Publications, News), Connect (Contact Us, Donate, Newsletter), legal row (Privacy Policy, Terms of Use, Accessibility).
- **Brand marks:** primary RCC wordmark (full color + white variant), a separate square logo mark for compact/favicon use.

**SEO/IA carry-over note:** current slugs (`/mission-impact/`, `/project-preparation-program/`, `/california-v2/`, `/work-hub/`, `/team/`, `/partners/`, `/about/`, `/approach/`) and nav labels should map 1:1 in any eventual WordPress implementation. Nothing in this prototype renames or restructures them.

---

## 4. Usability and visual-design problems (evidence-based)

Extracted from the live Elementor kit CSS (`post-3.css`, `post-6669.css`) and theme stylesheet, not visual guesswork:

1. **An off-brand stray color is shipping in production.** The site's real brand kit is navy `#1B476C` (primary), sky blue `#4794EC` (secondary), near-black `#111334` (text), orange `#F99D26` (accent) — 15 colors are actually defined in the Elementor global kit, but the homepage's animated-counter "highlight" spans render in pure, saturated `#f00000` red, used 18 times across the stat/heading widgets. Red never otherwise appears anywhere in the brand. This reads as a plugin default that was never re-themed, not a decision — a real inconsistency to fix, not repeat.
2. **Fixed-pixel, non-responsive display type.** `h1` is hard-set to `font-size:70px` with no clamp/viewport scaling. On narrow viewports this either overflows or the theme silently relies on unaudited breakpoint overrides — a real technical risk, especially for a hero headline that is the first thing anyone reads.
3. **Counters render "0" before JavaScript runs.** The four flagship stats (`$766M`, `54`, `175`, `90+`) start their markup at `data-from-value="0"` with no server-rendered fallback. Anyone on a slow connection, a crawler, or with JS disabled sees "$0 M" — the worst possible first impression for a credibility-driven nonprofit whose top asset *is* its numbers.
4. **All four stats carry equal visual weight.** There is no hierarchy between "$766M directed worldwide" (the headline credibility stat) and "90+ trusted partners" (a supporting stat). Everything is the same size, same weight, same treatment — a missed opportunity that also happens to violate the "give one story primacy" instinct any funder-facing page needs.
5. **Icon-grid abstraction stands in for RCC's real, tangible, place-based work.** "Our Approach" (Sustained Capacity / Accelerated Action) and the "Program Outcomes" grid on the Project Preparation Program page are both rendered as generic equal-width icon tiles. RCC's actual differentiator is real photography of real projects (Brownsville, Goleta, Oceanside, California coastal work) — that photography exists in the media library but is under-used relative to the abstract icon grids.
6. **Three-deep nav flyout.** What We Do → Methods & Tools → 5 grandchildren is desktop-hover-only depth that has no credible mobile equivalent and adds real cognitive load for a 5-item top-level menu that is otherwise clean.
7. **Duplicate-intent CTAs across pages.** "Learn more," "Read the full report," "Learn more from Goleta," "Learn more from Oceanside," and "View the Work Hub" are all functionally the same "go deeper" intent, styled and worded inconsistently page to page.
8. **Generic page-builder visual signature.** Structural class names (`wcf--title`, `wcf--counter`, `e-con-full`) and default Elementor container spacing (`--widgets-spacing: 20px 20px`, boxed `max-width:1140px`) produce the exact templated, low-differentiation look that makes nonprofit sites forgettable to funders comparing a dozen organizations in a sitting.
9. **Program-detail pages under-use their own strongest content.** The Project Preparation Program page has a genuinely strong, specific urgency stat (UNEP $140–300B by 2030) but presents it as body copy inside a generic content block rather than as a display moment — buried next to icon-grid outcomes instead of leading with it.

---

## 5. Patterns from each reference site worth carrying forward

**`home-rcc` (baseline):**
- The dual-frame "Sustained Capacity" + "Accelerated Action" structure is a genuinely good, specific content model (not generic "How it works" filler) — worth keeping as an idea, not as an icon grid.
- A stat bar tied to real, sourced numbers is the right instinct for this audience — needs hierarchy and a no-JS-safe fallback, not replacement.

**`california-v2`:**
- **Structured program metadata** (Status / Location / Focus Areas / Partners / Program Context / Signature Initiatives) is a strong, specific pattern for program-detail pages — funders scan for exactly this. Needs a non-spec-table treatment (grouped chunks or a display-tile pattern per the Taste Skill's spec-sheet guidance), not a bordered row list.
- **Named advisory board with real titles and affiliations** is real social proof worth a proper people-grid treatment.
- **Resources-with-a-named-CTA-per-item** ("Learn more from Goleta," "Learn more from Oceanside") is good *content* instinct, undermined by inconsistent CTA copy — worth keeping the pattern, standardizing the label.

**`project-preparation-program`:**
- **Leading with the real cited urgency stat** (UNEP figures) before the program pitch is a strong persuasion structure — currently under-staged as body text.
- **Real, recognizable partner logo wall** (Hilton, Google, AECOM, UN-Habitat, ICLEI USA, Gold Standard) is genuine credibility and should be a first-class section, not a footnote grid.
- Six named initiatives with distinct scopes (CPPI, Gold Standard partnership, UN-Habitat CIF, MP4MA Summit, Pittsburgh AI pilot, Cities Forward) is real breadth worth a scannable, non-uniform layout (these six items are not equivalent in scale and shouldn't be forced into six equal cards).

**`mission-impact`:**
- **Distinct Vision vs. Mission statements** (not merged into one paragraph) is a clean pattern worth keeping.
- **The sixth-year anniversary framing** is the site's real, non-generic narrative hook — see Section 6.
- Impact Stories + Publications as two separate, purpose-built rows (not one blended "content" feed) keeps scannability.

---

## 6. Patterns that should NOT be copied literally

- **Not** the equal-width, icon-topped 4-column grid used for "Our Approach," "Program Outcomes," and California's "Approach" section — three different content sets forced into the same generic grid shape. The redesign should use at least four distinct layout families across a page (Taste Skill Section 4.7), not one grid template reused everywhere.
- **Not** the bordered, row-per-item structured-metadata table as literal chrome — the content (Status/Location/Focus Areas/etc.) is worth keeping, the `border-b`-per-row spec-sheet execution is exactly the pattern the Taste Skill flags as the laziest available default.
- **Not** the equal-weight stat grid — one number should visibly lead.
- **Not** the three-level hover-only nav flyout depth.
- **Not** the plugin-default stray red highlight color, or any accent color introduced without being tied to the real navy/orange brand kit.
- **Not** literal 1:1 section-for-section cloning of any single reference page. Each reference is evidence for a pattern (structured metadata, urgency-stat-first, named people grid, anniversary framing), not a template to trace.

---

## 7. Opportunities for a distinctive identity

1. **The six-year milestone as an actual editorial device**, not decoration. RCC has six years of real, dated, place-specific delivery (Brownsville, Goleta, Oceanside, California coastal work, Appalachia, Cities Forward's 12-and-12 city pairing). A redesign that treats "six years" as a structural spine — how the stats are framed, how programs are dated, how the story is told — is grounded in the actual brief (the domain name is literally the anniversary), not an invented AI-tell locale strip.
2. **Photography over iconography.** RCC's differentiator from every other "we build capacity" nonprofit template is that its work is physically real and photographable. Leaning into documentary-style photography for Approach/Outcomes sections (replacing icon grids) is a legitimate, content-honest way to stand apart from the generic page-builder look.
3. **A confidently used navy + orange pairing.** The brand kit already has a strong, unusual (for this sector) navy-and-warm-orange combination that is currently buried under 15 mostly-unused kit swatches and one off-brand red. Committing to it fully, with one locked accent, would do a lot of the "stop looking like a template" work on its own.
4. **Place as a real structural idea, not a strip.** RCC's programs are explicitly geographic (By Location is a nav item; California, Appalachia, Latin America/Caribbean, Pittsburgh all appear as real program locations). A tasteful, real-data "where we work" thread — genuine place names tied to genuine programs — is contextually justified here (Taste Skill Section 9.F's locale-strip ban is for decorative city/weather chrome; this is the organization's actual operating model), unlike a generic agency-portfolio timezone strip.
5. **Give the numbers a hierarchy and make them true even without JavaScript.** A server-rendered, tiered stat treatment (one lead figure, three supporting) fixes both the credibility problem (funders skim) and the technical problem (no more "$0 M" flash).
