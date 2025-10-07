# 🚀 Cursor: Start Here

## Your Mission

Build **9 resource articles** (1,000-1,800 words each) for Miami, Boca Raton, and Fort Lauderdale restaurants. These educational pieces capture long-tail keywords and feed traffic to landing pages + calculator.

---

## Step 1: Execute Cleanup (MUST DO FIRST)

**File:** `/outputs/reset/extra-landing-pages.md`

**Action:** Run the git commands to archive legacy routes:
- Move `/app/about/`, `/app/blog/`, `/app/businesses/`, `/app/search/`, `/app/dashboard/` to `/archive/2025-10-reset/`
- Move `/content/posts/`, `/content/businesses/`, `/content/categories/` to archive
- Commit: `"Archive legacy routes - Resource article prep"`

**Why:** Prevents SEO pollution (old routes competing with new resources)

---

## Step 2: Read the Master Plan

**File:** `/outputs/resources/CURSOR-HANDOFF.md`

**What's in it:**
- Complete implementation steps (7 steps)
- Component specs (5 new components to build)
- File creation checklist (15 new files)
- Acceptance criteria (word counts, links, Lighthouse targets)
- Troubleshooting guide

**Read this file completely before starting.**

---

## Step 3: Reference Materials (Use During Build)

### Article Outlines (9 files)
**Location:** `/outputs/resources/outlines/`

**Files:**
- `miami-nfpa-96-checklist.md` (detailed 1,500-word outline)
- `miami-frequency.md` (condensed outline)
- `miami-problems.md` (condensed outline)
- `boca-raton-nfpa-96-checklist.md`
- `boca-raton-frequency.md`
- `boca-raton-problems.md`
- `fort-lauderdale-nfpa-96-checklist.md`
- `fort-lauderdale-frequency.md`
- `fort-lauderdale-problems.md`

**How to use:** Copy H2/H3 structure, expand paragraph prompts, insert tables/checklists from outline.

---

### Resource Spec (Schema + Requirements)
**File:** `/outputs/resources/spec.md`

**What's in it:**
- Frontmatter schema (TypeScript metadata pattern)
- 8 required H2 sections (template structure)
- Formatting rules (sticky ToC, tables, images)
- SEO contracts (title/meta patterns, JSON-LD schema)
- Component specifications

**Use when:** Setting up article structure, writing metadata, creating components.

---

### Target Keywords (135 keywords across 9 articles)
**File:** `/outputs/resources/keywords/resource-keywords-all.md`

**What's in it:**
- 15 keywords per article (5 primary + 10 long-tail)
- Featured snippet targets
- Usage strategy (where to place keywords, density)

**Use when:** Writing content, optimizing H2s, crafting image alt text.

---

### Internal Link Map (54 links to place)
**File:** `/outputs/resources/internal-link-map.md`

**What's in it:**
- 5 required links per article (city page, service page, calculator 2×, related resources 2×)
- Exact anchor text + placement instructions
- Resources hub page structure
- Header/footer nav updates

**Use when:** Adding internal links to articles, updating navigation.

---

## Quick Reference: What You're Building

### 15 New Files

**Components (5):**
1. `/components/ResourceToC.tsx` (sticky table of contents)
2. `/components/ResourceTable.tsx` (responsive tables)
3. `/components/ResourceChecklist.tsx` (checkbox lists)
4. `/components/ResourceFAQ.tsx` (accordion FAQs)
5. `/components/ResourceTimeline.tsx` (after-hours timeline)

**Pages (10):**
1. `/app/resources/page.tsx` (hub page)
2-10. `/app/resources/{city}/{slug}/page.tsx` (9 articles)

### 7 Files to Edit

1. `/components/Header.tsx` (add Resources nav)
2. `/components/Footer.tsx` (add Resources section)
3. `/app/sitemap.ts` (add 10 URLs)
4. `/app/services/restaurant-hood-cleaning/page.tsx` (add resource links)
5. `/app/locations/miami/hood-cleaning/page.tsx` (add resource links)
6. `/app/locations/boca-raton/hood-cleaning/page.tsx` (add resource links)
7. `/app/locations/fort-lauderdale/hood-cleaning/page.tsx` (add resource links)

---

## Critical Rules

1. ✅ **Archive legacy routes FIRST** (Step 1 above)
2. ✅ **Calculator link-only** (no logic changes to `/app/pricing/instant-quote/page.tsx`)
3. ✅ **Word count:** 1,200-1,500 per article (body content only)
4. ✅ **5 internal links per article** (see internal-link-map.md)
5. ✅ **Images need width/height** (prevent CLS)
6. ✅ **FAQ answers:** Populate from Semrush/Perplexity OR use `[[FAQ_ANSWER_TODO]]` placeholders

---

## Execution Order

**Day 1: Setup**
1. Execute cleanup (Step 1)
2. Create 5 components
3. Build resources hub page (`/resources/`)

**Day 2: Miami Articles**
1. Build Miami checklist (use detailed outline)
2. Build Miami frequency (condensed outline)
3. Build Miami problems (condensed outline)

**Day 3: Boca + Fort Lauderdale**
1. Replicate for Boca Raton (3 articles)
2. Replicate for Fort Lauderdale (3 articles)
3. Update Header/Footer nav
4. Add resource links to landing pages
5. Update sitemap

---

## Acceptance Checklist

Before marking complete:

- [ ] Cleanup executed (legacy routes archived)
- [ ] 9 resource articles live (correct URLs)
- [ ] Word counts 1,200-1,500 each
- [ ] All 8 required H2 sections present per article
- [ ] 5 internal links placed per article
- [ ] Resources hub page created
- [ ] Header/Footer nav updated
- [ ] Sitemap updated
- [ ] Lighthouse ≥90/90/95 (test 3 sample articles)
- [ ] Schema valid (test 3 sample articles at validator.schema.org)

---

## Questions? Check These Files

- **"How do I structure an article?"** → `/outputs/resources/spec.md` (Section: Required Article Structure)
- **"What goes in the H2 sections?"** → `/outputs/resources/outlines/{city}-{slug}.md` (each outline)
- **"What keywords do I use?"** → `/outputs/resources/keywords/resource-keywords-all.md`
- **"Where do I place internal links?"** → `/outputs/resources/internal-link-map.md`
- **"How do I build the components?"** → `/outputs/resources/CURSOR-HANDOFF.md` (Step 1)

---

## TL;DR for Cursor

1. Read `/outputs/resources/CURSOR-HANDOFF.md` completely
2. Execute cleanup from `/outputs/reset/extra-landing-pages.md`
3. Build components, hub page, 9 articles (follow outlines in `/outputs/resources/outlines/`)
4. Use `/outputs/resources/internal-link-map.md` for link placement
5. Verify acceptance checklist above

**Estimated Time:** 2-3 days

---

**Start with CURSOR-HANDOFF.md. It has everything.** 🚀
