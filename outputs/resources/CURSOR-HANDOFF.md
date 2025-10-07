# Cursor Handoff: Resource Article Implementation

## Mission

Build **9 programmable resource articles** (1,000-1,800 words each) to capture long-tail keywords and featured snippets. These educational pieces build topical authority and feed traffic to landing pages + calculator.

**Timeline:** Estimate 2-3 days (3 articles per city × 3 cities)

---

## Prerequisites

**MUST complete FIRST (if not already done):**

1. **Execute Cleanup from `/outputs/reset/extra-landing-pages.md`**
   - Move `/app/about/`, `/app/blog/`, `/app/businesses/`, `/app/search/`, `/app/dashboard/` to `/archive/2025-10-reset/`
   - Move `/content/posts/`, `/content/businesses/`, `/content/categories/` to archive
   - Commit: `"Archive legacy routes - Resource article prep"`
   - **Verify:** Only 4 Phase-1 landing pages remain (service + 3 cities)

2. **Calculator Protection Verified**
   - `/app/pricing/instant-quote/page.tsx` is **untouched**
   - Resources will **link only** (no logic changes)

---

## What You're Building

### 9 Resource Articles (3 Per City)

**Miami:**
1. `/app/resources/miami/nfpa-96-hood-cleaning-checklist/page.tsx`
2. `/app/resources/miami/hood-cleaning-frequency-by-restaurant-type/page.tsx`
3. `/app/resources/miami/kitchen-exhaust-fan-problems-fixes/page.tsx`

**Boca Raton:**
4. `/app/resources/boca-raton/nfpa-96-hood-cleaning-checklist/page.tsx`
5. `/app/resources/boca-raton/hood-cleaning-frequency-by-restaurant-type/page.tsx`
6. `/app/resources/boca-raton/kitchen-exhaust-fan-problems-fixes/page.tsx`

**Fort Lauderdale:**
7. `/app/resources/fort-lauderdale/nfpa-96-hood-cleaning-checklist/page.tsx`
8. `/app/resources/fort-lauderdale/hood-cleaning-frequency-by-restaurant-type/page.tsx`
9. `/app/resources/fort-lauderdale/kitchen-exhaust-fan-problems-fixes/page.tsx`

### New Components to Create

1. **`/components/ResourceToC.tsx`** – Sticky table of contents (auto-generated from H2s)
2. **`/components/ResourceTable.tsx`** – Responsive tables (NFPA frequency, cost, problems)
3. **`/components/ResourceChecklist.tsx`** – Checkbox-styled lists (30-point checklist)
4. **`/components/ResourceFAQ.tsx`** – Accordion-style FAQ (expandable)
5. **`/components/ResourceTimeline.tsx`** – After-hours timeline graphic

### Resources Hub Page

**`/app/resources/page.tsx`** – Landing page listing all 9 articles (grouped by city)

---

## Files Provided

### 1. Resource Spec (`/outputs/resources/spec.md`)
- Frontmatter schema (TypeScript metadata pattern)
- 8 required H2 sections (template structure)
- Formatting requirements (sticky ToC, images with width/height, tables)
- SEO contracts (title/meta patterns, JSON-LD schema)
- Canadian spelling acceptable

### 2. Detailed Outlines (`/outputs/resources/outlines/`)
- **9 files:** `[city]-[slug].md` (one per article)
- Full H2/H3 structure with paragraph prompts
- Tables, checklists, FAQ questions
- City-specific adaptations (Miami: bi-lingual, high-rise | Boca: country clubs | Fort Lauderdale: TWIC, coastal)

### 3. Target Keywords (`/outputs/resources/keywords/`)
- **`resource-keywords-all.md`** – 135 keywords (15 per article)
- Primary + long-tail keywords
- Featured snippet targets
- Usage strategy (density, placement)

### 4. Internal Link Map (`/outputs/resources/internal-link-map.md`)
- 5 required links per article (city page, service page, calculator 2×, related resources 2×)
- Exact anchor text + placement instructions
- Resources hub page structure
- Header/footer nav integration

---

## Implementation Steps

### STEP 1: Create Resource Components

#### 1A: ResourceToC Component

**File:** `/components/ResourceToC.tsx`

**What to build:**
- Auto-generate from H2 headings (extract from page content or pass as prop)
- Sticky sidebar on desktop (`md:sticky md:top-20 md:max-h-screen md:overflow-y-auto`)
- Collapsible on mobile (hidden by default, toggle button)
- Highlight active section on scroll (intersection observer)

**Props:**
```typescript
interface ResourceToCProps {
  headings: Array<{ id: string; text: string }>
}
```

**Design:**
- Container: `bg-neutral-50 p-4 rounded-lg`
- Links: `text-neutral-700 hover:text-primary` (active: `text-primary font-semibold`)
- Use Tailwind `space-y-2` for spacing

---

#### 1B: ResourceTable Component

**File:** `/components/ResourceTable.tsx`

**What to build:**
- Responsive table (horizontal scroll on mobile, full width on desktop)
- Zebra striping (alternate row colors)
- Header row sticky on long tables

**Props:**
```typescript
interface ResourceTableProps {
  headers: string[]
  rows: string[][]
  caption?: string
}
```

**Design:**
- Wrapper: `overflow-x-auto`
- Table: `min-w-full border-collapse`
- Header: `bg-neutral-100 font-semibold`
- Rows: `odd:bg-white even:bg-neutral-50`

---

#### 1C: ResourceChecklist Component

**File:** `/components/ResourceChecklist.tsx`

**What to build:**
- Checkbox icon (Lucide `CheckSquare` or `Square`) + text
- Grouped by phase (collapsible phases optional)
- Print-friendly (checkboxes visible)

**Props:**
```typescript
interface ResourceChecklistProps {
  items: Array<{ text: string; checked?: boolean }>
  phase?: string
}
```

**Design:**
- List: `space-y-2`
- Item: `flex items-start gap-3`
- Icon: `text-primary` (checked) or `text-neutral-300` (unchecked)

---

#### 1D: ResourceFAQ Component

**File:** `/components/ResourceFAQ.tsx`

**What to build:**
- Accordion-style (click to expand)
- Each FAQ = H3 (for accessibility + SEO)
- Schema-eligible flag (for JSON-LD inclusion)

**Props:**
```typescript
interface ResourceFAQProps {
  faqs: Array<{
    question: string
    answer: string
    schema_eligible?: boolean
  }>
}
```

**Design:**
- Container: `space-y-4`
- Question: `text-lg font-semibold cursor-pointer flex justify-between`
- Answer: `text-neutral-700 mt-2 prose` (collapse when inactive)

---

#### 1E: ResourceTimeline Component

**File:** `/components/ResourceTimeline.tsx`

**What to build:**
- Vertical timeline (time on left, activity on right)
- Connector line between items
- Icon for each time point (Lucide `Clock`)

**Props:**
```typescript
interface ResourceTimelineProps {
  events: Array<{ time: string; activity: string }>
}
```

**Design:**
- Timeline: `relative border-l-2 border-primary pl-8`
- Event: `mb-6 relative`
- Icon: `absolute -left-10 bg-primary rounded-full p-2`

---

### STEP 2: Build Resources Hub Page

**File:** `/app/resources/page.tsx`

**Structure:**
```tsx
export const metadata = {
  title: "Restaurant Hood Cleaning Resources | South Florida Guides | LocalBizzList",
  description: "Educational guides for Miami, Boca Raton, Fort Lauderdale restaurant owners: NFPA 96 checklists, cleaning frequency, fan troubleshooting."
}

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-neutral-50 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Restaurant Hood Cleaning Resources</h1>
          <p className="text-lg text-neutral-600">
            Educational guides for South Florida restaurant owners, GMs, and facilities managers
          </p>
        </div>
      </section>

      {/* Miami Resources */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Miami Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Miami Checklist */}
          {/* Card 2: Miami Frequency */}
          {/* Card 3: Miami Problems */}
        </div>
      </section>

      {/* Repeat for Boca Raton and Fort Lauderdale */}

      {/* CTA Block */}
      <CTABlock variant="footer" ... />
    </>
  )
}
```

**Components:**
- Use existing `<CTABlock>` for footer CTA
- Simple card grid (image, title, description, "Read More" link)

---

### STEP 3: Build First Resource Article (Miami Checklist)

**File:** `/app/resources/miami/nfpa-96-hood-cleaning-checklist/page.tsx`

**Follow outline:** `/outputs/resources/outlines/miami-nfpa-96-checklist.md`

**Metadata:**
```tsx
export const metadata: Metadata = {
  title: "NFPA 96 Hood Cleaning Checklist in Miami | 30-Point Inspector Guide",
  description: "Miami restaurant hood cleaning checklist: 30 NFPA 96 inspection points...",
  openGraph: {
    type: 'article',
    publishedTime: '2025-10-07T00:00:00-05:00',
  },
}

export const articleMeta = {
  h1: "NFPA 96 Hood Cleaning Checklist for Miami Restaurants",
  city: "Miami",
  target_keywords: [...], // From keywords file
  reading_time: "7-8 min",
  summary: "Use this 30-point checklist...",
  hero_image: "/images/resource-miami-checklist.jpg",
  last_updated: "October 7, 2025",
  toc: true,
  faqs: [...],
  cta_targets: {
    primary: "/pricing/instant-quote?src=resource_miami-checklist",
    secondary: "/locations/miami/hood-cleaning/"
  },
  schema_types: ['Article', 'FAQPage', 'BreadcrumbList'],
}
```

**Page Structure:**
```tsx
export default function MiamiChecklistPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-50 py-12">
        <div className="container max-w-4xl">
          <h1>{articleMeta.h1}</h1>
          <p className="text-neutral-600 text-lg mt-2">{articleMeta.summary}</p>
          <div className="flex gap-4 mt-4 text-sm text-neutral-600">
            <span>{articleMeta.reading_time}</span>
            <span>Last updated: {articleMeta.last_updated}</span>
          </div>
        </div>
      </section>

      {/* Main Content + ToC */}
      <section className="container max-w-6xl py-12">
        <div className="grid md:grid-cols-[1fr_250px] gap-12">
          {/* Main Content */}
          <article className="prose max-w-none">
            <h2 id="introduction">Introduction: Why This Checklist Matters</h2>
            <p>{/* Paragraph from outline */}</p>

            <h2 id="nfpa-requirements">What NFPA 96 Requires in Miami-Dade</h2>
            <p>{/* Paragraph from outline */}</p>
            <ResourceTable headers={...} rows={...} caption="NFPA 96 Frequency" />

            {/* Continue through all 8 required H2 sections */}

            <h2 id="30-point-checklist">30-Point NFPA 96 Compliance Checklist</h2>
            <ResourceChecklist items={...} phase="Phase 1: Pre-Cleaning" />
            <ResourceChecklist items={...} phase="Phase 2: During Cleaning" />
            <ResourceChecklist items={...} phase="Phase 3: Post-Cleaning" />

            <h2 id="faqs">Frequently Asked Questions</h2>
            <ResourceFAQ faqs={articleMeta.faqs} />

            <h2 id="get-quote">Get Your Miami Hood Cleaning Quote</h2>
            <p>{/* CTA paragraph from outline */}</p>
          </article>

          {/* Sticky ToC */}
          <aside className="hidden md:block">
            <ResourceToC headings={[
              { id: "introduction", text: "Introduction" },
              { id: "nfpa-requirements", text: "NFPA 96 Requirements" },
              // ... all H2s
            ]} />
          </aside>
        </div>
      </section>

      {/* Footer CTA */}
      <CTABlock
        variant="footer"
        headline="Get Your Miami NFPA 96 Certificate"
        primaryCTA={{ text: "Get Instant Quote", href: "/pricing/instant-quote?src=resource_miami-checklist" }}
        secondaryCTA={{ text: "Learn about Miami service", href: "/locations/miami/hood-cleaning/" }}
      />

      {/* JSON-LD Schema */}
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          // ... from spec.md Article schema template
        })}
      </Script>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          // ... top 5-6 schema-eligible FAQs only
        })}
      </Script>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          // ... breadcrumb schema
        })}
      </Script>
    </>
  )
}
```

**Key Points:**
- **Word count:** 1,400-1,500 words (body content only)
- **Tables:** Use `<ResourceTable>` component (2 tables: NFPA frequency + cost)
- **Checklists:** Use `<ResourceChecklist>` component (30 items, 3 phases)
- **FAQs:** Use `<ResourceFAQ>` component (10 questions, answers = `[[FAQ_ANSWER_TODO]]` or populate from Semrush/Perplexity)
- **Images:** Set explicit `width` and `height` (prevent CLS)
- **Internal links:** 5 required (see internal-link-map.md for exact placement)

---

### STEP 4: Replicate for Remaining 8 Articles

**Pattern:**
1. Copy Miami checklist structure
2. Replace metadata (title, meta, H1, summary, city name)
3. Swap outline content (from relevant outline file)
4. Adjust city-specific sections:
   - **Miami:** Bi-lingual, high-rise, Miami-Dade quarterly mandate
   - **Boca Raton:** Country clubs, Mizner/Town Center, seasonal, acquisition
   - **Fort Lauderdale:** TWIC, Port Everglades, Las Olas, coastal corrosion
5. Update internal links (city page URL, calculator `?src=` parameter)
6. Update schema (city name, geo coordinates if LocalBusiness added)

**Time-Saving Tips:**
- Build Miami articles first (3 articles) → verify structure works
- Then batch Boca Raton (3 articles) → city-specific adaptations
- Finally Fort Lauderdale (3 articles) → TWIC/coastal focus

---

### STEP 5: Update Header/Footer Navigation

#### Header (Add Resources Dropdown)

**File:** `/components/Header.tsx` (already exists—edit)

**Add dropdown menu:**
```tsx
<nav className="hidden md:flex items-center gap-6">
  <Link href="/services/restaurant-hood-cleaning">Hood Cleaning</Link>

  <Dropdown label="Resources">
    <Link href="/resources/miami/nfpa-96-hood-cleaning-checklist">Miami Checklist</Link>
    <Link href="/resources/boca-raton/nfpa-96-hood-cleaning-checklist">Boca Checklist</Link>
    <Link href="/resources/fort-lauderdale/nfpa-96-hood-cleaning-checklist">Fort Lauderdale Checklist</Link>
    <Divider />
    <Link href="/resources/">All Resources</Link>
  </Dropdown>

  <Link href="/pricing/instant-quote">Get Quote</Link>
  {/* Existing phone CTA */}
</nav>
```

**Note:** If Dropdown component doesn't exist, use simple hover menu or list top 3 checklist articles only.

#### Footer (Add Resources Section)

**File:** `/components/Footer.tsx` (already exists—edit)

**Add new section:**
```tsx
<section>
  <h4 className="font-semibold mb-4">Resources</h4>
  <Link href="/resources/miami/nfpa-96-hood-cleaning-checklist">Miami Checklist</Link>
  <Link href="/resources/miami/hood-cleaning-frequency-by-restaurant-type">Cleaning Frequency</Link>
  <Link href="/resources/miami/kitchen-exhaust-fan-problems-fixes">Fan Troubleshooting</Link>
  <Link href="/resources/">All Resources</Link>
</section>
```

---

### STEP 6: Add Resource Links to Landing Pages (Inbound Traffic)

#### Service Page

**File:** `/app/services/restaurant-hood-cleaning/page.tsx` (existing—edit)

**Add after FAQ section:**
```tsx
<div className="mt-8 p-6 bg-neutral-50 rounded-lg">
  <h3 className="text-lg font-semibold mb-2">Learn More</h3>
  <ul className="space-y-2">
    <li><a href="/resources/miami/nfpa-96-hood-cleaning-checklist" className="text-primary hover:underline">Miami Hood Cleaning Checklist</a></li>
    <li><a href="/resources/miami/hood-cleaning-frequency-by-restaurant-type" className="text-primary hover:underline">How Often to Clean Your Hood</a></li>
  </ul>
</div>
```

#### City Pages (Miami, Boca, Fort Lauderdale)

**Files:** `/app/locations/miami/hood-cleaning/page.tsx` (existing—edit)

**Add after FAQ section:**
```tsx
<div className="mt-8 p-6 bg-neutral-50 rounded-lg">
  <h3 className="text-lg font-semibold mb-2">Miami Resources</h3>
  <ul className="space-y-2">
    <li><a href="/resources/miami/nfpa-96-hood-cleaning-checklist" className="text-primary hover:underline">NFPA 96 Compliance Checklist</a></li>
    <li><a href="/resources/miami/hood-cleaning-frequency-by-restaurant-type" className="text-primary hover:underline">Cleaning Frequency by Restaurant Type</a></li>
    <li><a href="/resources/miami/kitchen-exhaust-fan-problems-fixes" className="text-primary hover:underline">Fan Troubleshooting Guide</a></li>
  </ul>
</div>
```

(Repeat for Boca Raton and Fort Lauderdale city pages with their respective resource links)

---

### STEP 7: Update Sitemap

**File:** `/app/sitemap.ts` (existing—edit)

**Add resource URLs:**
```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Existing URLs...
    {
      url: 'https://localbizzlist.com/resources',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://localbizzlist.com/resources/miami/nfpa-96-hood-cleaning-checklist',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... add all 9 resource URLs
  ]
}
```

---

## FAQ Answer Sourcing

**For FAQs marked `[[FAQ_ANSWER_TODO]]`:**

### Option 1: Populate Now (Recommended)
Use Semrush "Questions" tab or Perplexity:
- Search: "[topic] [city]" (e.g., "hood cleaning frequency Miami")
- Extract People Also Ask (PAA) questions
- Summarise answers in 50-100 words
- Include specific numbers (intervals, costs, requirements)

### Option 2: Placeholders (Ship Faster)
Leave `[[FAQ_ANSWER_TODO]]` in code:
```tsx
<ResourceFAQ faqs={[
  {
    question: "How often should Miami restaurants clean hoods?",
    answer: "[[FAQ_ANSWER_TODO]]",
    schema_eligible: true
  }
]} />
```
Populate post-launch in Phase 1.1.

---

## Word Count & Format Targets

### Per Article:
- **Minimum:** 1,000 words (body content, exclude nav/footer)
- **Target:** 1,200-1,500 words (featured snippet sweet spot)
- **Maximum:** 1,800 words (OK if highly scannable with tables/checklists)

### Formatting:
- **Sticky ToC:** Desktop only, collapsible mobile
- **Tables:** 2-3 per article (NFPA frequency, cost, problems)
- **Checklists:** Checklist articles = 30 items (3 phases), others = 8-10 item maintenance lists
- **FAQs:** 8-12 questions per article
- **Images:** Set explicit width/height (prevent CLS), lazy load below fold
- **Canadian spelling:** Acceptable (honour, centre)

---

## CTA Placement (Link to Calculator)

**Every resource article has 2 calculator CTAs:**

1. **Mid-Article CTA (H2 #3: Cost Section)**
   - **Anchor:** "Get exact quote for your [city] kitchen"
   - **URL:** `/pricing/instant-quote?src=resource_{city}-{topic}`
   - **Placement:** After cost table

2. **Footer CTA Block**
   - **Button:** "Get Instant [City] Quote"
   - **URL:** `/pricing/instant-quote?src=resource_{city}-{topic}`
   - **Component:** Reuse `<CTABlock variant="footer">`

**Calculator Source Parameters:**
- Miami Checklist: `?src=resource_miami-checklist`
- Boca Frequency: `?src=resource_boca-frequency`
- Fort Lauderdale Problems: `?src=resource_ftl-problems`
- (9 unique source parameters, one per article)

**DO NOT modify calculator logic. Link only.**

---

## Acceptance Checklist

**Before marking resource implementation complete:**

### Content
- [ ] **9 resource articles live** at correct URLs
- [ ] **Word counts met:** All articles 1,200-1,500 words (body only)
- [ ] **All 8 required H2 sections present** per article
- [ ] **Tables/checklists rendered correctly** (responsive, no overflow issues)
- [ ] **FAQs populated or placeholders** (minimum 8 per article)

### SEO
- [ ] **Unique titles/metas** for all 9 articles (from outlines)
- [ ] **JSON-LD schema** on all pages (Article + FAQPage + BreadcrumbList)
- [ ] **Target keywords used** (primary 3-5×, long-tail 1-2× each)
- [ ] **Canonical tags** (self-referencing)

### Internal Links
- [ ] **5 links per article placed** (city page, service page, calculator 2×, related resources 2×)
- [ ] **Resources hub page created** (`/resources/page.tsx`)
- [ ] **Header nav updated** (Resources dropdown or list)
- [ ] **Footer nav updated** (Resources section)
- [ ] **Landing pages link to resources** (service + city pages)

### Components
- [ ] **5 new components created** (ResourceToC, ResourceTable, ResourceChecklist, ResourceFAQ, ResourceTimeline)
- [ ] **Sticky ToC functional** (highlights active section)
- [ ] **Tables responsive** (horizontal scroll on mobile)
- [ ] **FAQ accordion works** (expand/collapse)

### Performance
- [ ] **Lighthouse mobile:** Perf ≥90, SEO ≥90, A11y ≥95 (test 3 sample articles)
- [ ] **Images optimised:** Width/height set (no CLS), lazy loading
- [ ] **No console errors**

### Sitemap
- [ ] **Sitemap updated** (`/app/sitemap.ts` includes all 9 resource URLs + hub page)

---

## Troubleshooting

### Issue: ToC not highlighting active section
**Fix:** Use Intersection Observer API to detect which H2 is in viewport. Add `active` class to corresponding ToC link.

### Issue: Tables overflow on mobile
**Fix:** Wrap table in `<div className="overflow-x-auto">`, ensure `min-w-full` on table.

### Issue: FAQ accordion animation jerky
**Fix:** Use `max-height` transition with fixed max (e.g., `max-h-96`) instead of `height: auto`.

### Issue: Schema validation errors
**Fix:** Paste JSON-LD into https://validator.schema.org/, fix required fields (usually missing `datePublished`, `author`, or `mainEntityOfPage`).

---

## Delivery Checklist

When resource implementation is complete:

1. **9 resource articles accessible** at `/resources/{city}/{slug}/`
2. **Resources hub page** at `/resources/`
3. **5 new components functional**
4. **Header/footer nav updated** (Resources links)
5. **Landing pages link to resources** (inbound traffic)
6. **Sitemap includes resource URLs**
7. **Lighthouse passing** (≥90/90/95 on sample articles)
8. **Schema valid** (zero errors for 3 sample articles)
9. **Calculator untouched** (link-only rule enforced)
10. **Git commits clean** (separate commits for cleanup, components, articles)

---

## Summary

**Files to Create:**
- 5 components (`/components/Resource*.tsx`)
- 1 hub page (`/app/resources/page.tsx`)
- 9 resource articles (`/app/resources/{city}/{slug}/page.tsx`)
- **Total:** 15 new files

**Files to Edit:**
- `/components/Header.tsx` (add Resources nav)
- `/components/Footer.tsx` (add Resources section)
- `/app/sitemap.ts` (add 10 URLs)
- `/app/services/restaurant-hood-cleaning/page.tsx` (add resource links)
- `/app/locations/miami/hood-cleaning/page.tsx` (add resource links)
- `/app/locations/boca-raton/hood-cleaning/page.tsx` (add resource links)
- `/app/locations/fort-lauderdale/hood-cleaning/page.tsx` (add resource links)
- **Total:** 7 edits

**Dependencies:**
- Cleanup legacy routes FIRST (`/outputs/reset/extra-landing-pages.md`)
- Verify calculator untouched (`/app/pricing/instant-quote/page.tsx`)

**Timeline:** 2-3 days (components 0.5 day, articles 1.5-2 days, nav/links 0.5 day)

---

**You have everything you need. Build the resource library. 🚀**
