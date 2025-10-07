# Programmable Resource Article Specification

## Overview

Resource articles are **1,000-1,800 word educational content pieces** optimized for long-tail keywords and featured snippets. Unlike landing pages (conversion-focused), resources deliver pure value to build trust + topical authority.

**Goal:** Rank for "how-to," "checklist," "cost," "frequency," and problem-solving queries that precede purchase intent.

---

## Content Type Definition

### Collection Path
`/app/resources/[city]/[slug]/page.tsx`

**URL Examples:**
- `/resources/miami/nfpa-96-hood-cleaning-checklist/`
- `/resources/boca-raton/hood-cleaning-frequency-by-restaurant-type/`
- `/resources/fort-lauderdale/kitchen-exhaust-fan-problems-fixes/`

### Content Model (Next.js Metadata + Frontmatter Pattern)

Since this is a Next.js App Router project without MDX (based on codebase audit), we'll use **TypeScript metadata** + **structured content components**.

---

## Frontmatter Schema (TypeScript Metadata)

```typescript
// /app/resources/[city]/[slug]/page.tsx

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: string,                    // 55-60 chars, city + keyword
  description: string,               // 150-160 chars
  keywords: string,                  // Comma-separated seed terms
  openGraph: {
    title: string,
    description: string,
    type: 'article',
    publishedTime: string,           // ISO 8601
    modifiedTime: string,
    authors: ['LocalBizzList'],
  },
}

// Article-specific metadata (exported constant)
export const articleMeta = {
  h1: string,                        // Visual H1 (can differ from title)
  city: 'Miami' | 'Boca Raton' | 'Fort Lauderdale',
  target_keywords: string[],         // 10-15 primary + long-tail
  reading_time: string,              // "8 min read"
  summary: string,                   // 2-3 sentence summary (appears below H1)
  hero_image: string,                // Path to header image
  hero_image_alt: string,
  last_updated: string,              // "October 7, 2025"
  toc: true,                         // Enable sticky ToC
  faqs: Array<{
    question: string,
    answer: string,                  // Or "[[FAQ_ANSWER_TODO]]"
    schema_eligible: boolean
  }>,
  cta_targets: {
    primary: string,                 // "/pricing/instant-quote?src=resource_{slug}"
    secondary?: string               // "/locations/{city}/hood-cleaning/"
  },
  schema_types: ['Article', 'FAQPage', 'BreadcrumbList'],
}
```

---

## Required Article Structure

### Template H2 Sections (8 Required)

Every resource article MUST include these H2s in this order:

#### 1. **Introduction: Why This Matters for [City] Restaurants**
**Paragraph Prompt (120-150 words):**
- Open with benefit (save money, avoid violations, prevent fires)
- Who this guide is for (restaurant owners, GMs, facilities managers in [City])
- What they'll learn (checklist, frequency, costs, solutions)
- Local context hook (Miami-Dade inspections, Boca country clubs, Fort Lauderdale cruise terminals)

**Components:**
- Text paragraph
- Optional: Info callout box with quick takeaway

---

#### 2. **What NFPA 96 Requires in [City]**
**Paragraph Prompt (150-180 words):**
- NFPA 96 baseline standard (to-bare-metal cleaning, intervals)
- [City]-specific amendments or enforcement notes:
  - **Miami:** Miami-Dade County quarterly mandate for >12hr kitchens
  - **Boca Raton:** Palm Beach County certificate documentation for liquor licenses
  - **Fort Lauderdale:** Broward County Fire Prevention permit-based inspections
- Who enforces (fire marshal, health dept)
- Penalties for non-compliance (fines, closure orders, insurance voids)

**Components:**
- Text paragraphs
- Table: NFPA 96 Frequency by Usage Class (4 rows: High/Moderate/Low/Solid Fuel)
- Callout: "[City] Amendment" box highlighting local stricter rules

**Table Format:**
| Usage Class | Kitchen Type | NFPA 96 Interval | [City] Requirement |
|------------|--------------|------------------|-------------------|
| High Volume | 24hr diners, QSR | Quarterly | [City-specific note] |
| Moderate | Full-service restaurants | Semi-Annually | [City-specific note] |
| Low Volume | Seasonal venues | Annually | [City-specific note] |
| Solid Fuel | Wood-fired pizza | Monthly | [City-specific note] |

---

#### 3. **Hood Cleaning Costs & Frequency in [City]**
**Paragraph Prompt (150-180 words):**
- Average cost ranges by kitchen type (single hood: $300-600, multi-hood: $800-1,500, high-rise: $1,200-2,500)
- [City]-specific cost factors:
  - **Miami:** High-rise surcharge, bi-lingual crew premium
  - **Boca Raton:** Country club insurance requirements, off-season discounts
  - **Fort Lauderdale:** Port Everglades TWIC access fees, beach corrosion extra service
- Frequency impact on total annual cost (quarterly vs. semi-annual)
- Hidden costs (missed inspections = re-inspection fees $500+)

**Components:**
- Text paragraphs
- Table: Cost by Kitchen Type + Frequency
- Calculator CTA: "Get exact quote for your kitchen → [link to /pricing/instant-quote?src=resource_{slug}]"

**Cost Table Format:**
| Kitchen Type | Hoods | Quarterly Cost | Semi-Annual Cost | Annual Total |
|--------------|-------|----------------|------------------|--------------|
| Small Restaurant | 1-2 | $1,200-2,400 | $600-1,200 | (calculate) |
| Mid-Size Restaurant | 3-4 | $2,400-4,800 | $1,200-2,400 | (calculate) |
| Large/Hotel | 5+ | $4,000-8,000+ | $2,000-4,000 | (calculate) |

---

#### 4. **Step-by-Step: How to [Topic] in [City]**
**Content varies by article topic:**

**For "Checklist" articles:**
- Checklist format with checkboxes (20-30 items)
- Group into phases: Pre-Cleaning, During Cleaning, Post-Cleaning, Documentation

**For "Frequency" articles:**
- Decision tree or flowchart (text-based)
- "If X, then clean every Y months"

**For "Problems & Fixes" articles:**
- Table: Problem | Symptoms | Quick Fix | When to Call Pro
- 8-10 common issues (grease drips, smoke backflow, fan noise, etc.)

**Components:**
- Checklist (HTML `<ul>` with checkboxes styling)
- OR Table (Problem/Solution format)
- OR Decision tree (nested lists with if/then logic)

**Word count for this section:** 300-400 words

---

#### 5. **Common Kitchen Exhaust Issues & Quick Fixes**
**Paragraph Prompt (200-250 words):**
- 6-8 common problems specific to [City]:
  - **Miami:** Humidity-accelerated grease oxidation, high-rise duct access issues
  - **Boca Raton:** Seasonal grease buildup (snowbird rush), legacy duct systems in older buildings
  - **Fort Lauderdale:** Salt air fan corrosion, cruise terminal tight turnaround windows

**Table Format:**
| Problem | Symptoms | DIY Quick Fix | When to Call Professional |
|---------|----------|---------------|--------------------------|
| Grease dripping from hood | Grease puddles on cook line | Wipe hood interior, empty grease cup | If drips continue (duct full) |
| Smoke backing into dining room | Smoke visible, odor complaints | Check fan running, clean filters | If fan running but still smoking (duct blockage) |
| Exhaust fan noise/vibration | Loud squealing, rattling | Check belt tension (if accessible) | If noise persists (bearing failure) |
| Grease fire in duct | Flames visible in hood, smoke | Activate Ansul system, evacuate | ALWAYS call pro for post-fire cleaning |
| (4-6 more rows) | ... | ... | ... |

**Components:**
- Intro paragraph
- Problem/solution table (6-8 rows)
- Callout: "Emergency? Call [City] 24/7: (XXX) XXX-HOOD"

---

#### 6. **How Inspectors Evaluate "To Bare Metal" Compliance**
**Paragraph Prompt (150-180 words):**
- What "to bare metal" means (zero grease residue, visible original metal)
- Inspection methods: grease depth gauge, white glove test, photo documentation
- What inspectors check: hood interior, duct access points, fan blades, grease cups
- [City]-specific inspection notes:
  - **Miami:** Miami-Dade health inspectors check Certificate of Performance date
  - **Boca Raton:** Country club insurance audits require photo proof
  - **Fort Lauderdale:** Broward Fire Prevention spot-checks certificates during routine visits
- Certificate of Performance requirements (what it must include)

**Components:**
- Text paragraphs
- Image: Sample Certificate of Performance (with annotations)
- Checklist: "What Your Certificate Must Include" (6-8 items)

---

#### 7. **After-Hours Hood Cleaning Logistics in [City]**
**Paragraph Prompt (150-180 words):**
- Why after-hours cleaning (minimize disruption, avoid lunch/dinner rush)
- [City]-specific logistics:
  - **Miami:** Arrival bands by zone (Brickell 30-45min, Beach 35-50min), building access (high-rise security, loading docks), bi-lingual crew coordination
  - **Boca Raton:** Country club closed hours (Mon/Tue), mall property management (Town Center, Mizner Park 48hr notice), seasonal timing (off-season May-Oct)
  - **Fort Lauderdale:** Las Olas after-midnight service (tourist foot traffic), Port Everglades 8hr turnaround windows, I-95 traffic avoidance (post-10pm start)
- Typical timeline: arrival → setup → cleaning → cleanup → certificate (4-8hrs total)
- What restaurant staff need to do: shut off fans, cover equipment, provide access

**Components:**
- Text paragraphs
- Timeline graphic (text-based, styled with Tailwind)
- Map callout: "[City] Arrival Times by Area"

**Timeline Format:**
```
11:00 PM - Crew arrives, safety briefing
11:30 PM - Kitchen prep, equipment protection
12:00 AM - Hood & filter degreasing
1:30 AM  - Duct cleaning (longest phase)
4:00 AM  - Rooftop fan service
5:00 AM  - Final inspection, photos
5:30 AM  - Certificate issuance, cleanup
6:00 AM  - Kitchen ready for morning prep
```

---

#### 8. **Frequently Asked Questions**
**Structure:**
- 8-12 FAQ questions specific to article topic + [City]
- Mix of:
  - General questions (cost, frequency, process)
  - [City]-specific questions (permits, inspections, logistics)
  - Topic-specific questions (varies by article)

**FAQ Guidelines:**
- Questions: write now (from outline)
- Answers: `[[FAQ_ANSWER_TODO]]` placeholders OR populate from Semrush/Perplexity
- Schema-eligible FAQs: mark for JSON-LD inclusion (top 5-6 only)

**Component:**
- Accordion-style FAQ (expandable)
- Each FAQ = H3 (for accessibility + SEO)

---

#### 9. **Get Your [City] Hood Cleaning Quote**
**Final CTA Section (80-100 words):**
- Recap benefit ("Now you know [topic]—get compliant today")
- Primary CTA button: "Get Instant Quote" → `/pricing/instant-quote?src=resource_{slug}`
- Secondary CTA link: "Learn more about [our hood cleaning service in City]" → `/locations/{city}/hood-cleaning/`
- Trust badges: NFPA 96 Certified, [City] Licensed, $2M Insured, 24/7 Emergency

**Components:**
- CTABlock component (reuse from landing pages)
- Two buttons: primary (calculator) + secondary (city page)
- Trust badge row

---

## Formatting Requirements

### Sticky Table of Contents
- Auto-generated from H2 headings
- Fixed position on desktop (`md:sticky md:top-20`)
- Collapsible on mobile
- Highlight active section on scroll

**Implementation:**
```tsx
// /components/ResourceToC.tsx
export default function ResourceToC({ headings }: { headings: string[] }) {
  // Auto-scroll spy, highlight active
  // Fixed sidebar on desktop, collapsible on mobile
}
```

### Images with Width/Height (Prevent CLS)
```tsx
<Image
  src="/images/resource-miami-checklist-header.jpg"
  alt="NFPA 96 hood cleaning checklist for Miami restaurants"
  width={1200}
  height={600}
  className="rounded-lg"
  loading="lazy"
/>
```

### Scannable Tables & Checklists
- Tables: Tailwind `.table` styling, responsive scroll on mobile
- Checklists: Checkbox icons (Lucide `CheckSquare`), grouped by phase

### Canadian Spelling
- Honour, centre, labour, metre, litre (acceptable)
- Consistent within each article

---

## SEO Contracts for Resources

### Title Pattern
**Format:** `[Topic Keyword] in [City] | [Benefit/Hook] | LocalBizzList`

**Examples:**
- `NFPA 96 Hood Cleaning Checklist in Miami | 30-Point Inspector Guide | LocalBizzList`
- `Hood Cleaning Frequency by Restaurant Type (Boca Raton) | NFPA 96 Compliance | LocalBizzList`
- `Kitchen Exhaust Fan Problems & Quick Fixes (Fort Lauderdale) | Troubleshooting Guide | LocalBizzList`

**Length:** 55-70 chars (Google allows 70 for articles, longer than landing pages)

---

### Meta Description Pattern
**Format:** [City] [topic] guide: [benefit 1], [benefit 2], [data point]. [CTA]. [Trust signal].

**Examples:**
- `Miami restaurant hood cleaning checklist: 30 NFPA 96 inspection points, step-by-step compliance guide, inspector red flags. Save $500+ in re-inspection fees. Free quote.`
- `Boca Raton hood cleaning frequency guide: NFPA 96 intervals by kitchen type, cost calculator, country club requirements. Avoid violations. Get certified.`
- `Fort Lauderdale exhaust fan troubleshooting: 8 common problems, DIY fixes, when to call pros. Coastal corrosion solutions. 24/7 emergency service.`

**Length:** 150-160 chars

---

### JSON-LD Schema (3 Types)

#### 1. Article Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article H1]",
  "description": "[Meta description]",
  "image": "[Hero image URL]",
  "datePublished": "2025-10-07T00:00:00-05:00",
  "dateModified": "2025-10-07T00:00:00-05:00",
  "author": {
    "@type": "Organization",
    "name": "LocalBizzList"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LocalBizzList",
    "logo": {
      "@type": "ImageObject",
      "url": "https://localbizzlist.com/images/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[Article canonical URL]"
  },
  "articleSection": "Restaurant Hood Cleaning",
  "keywords": "[Comma-separated target_keywords]",
  "wordCount": 1500
}
```

#### 2. FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[FAQ question]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[FAQ answer]"
      }
    }
    // Top 5-6 FAQs only (schema_eligible: true)
  ]
}
```

#### 3. BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://localbizzlist.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://localbizzlist.com/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[City]",
      "item": "https://localbizzlist.com/resources/[city]"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "[Article Title]",
      "item": "[Article canonical URL]"
    }
  ]
}
```

---

## Internal Linking Strategy

### Each Resource Article Links To:

1. **Its City Landing Page** (1 link, contextual)
   - Anchor: "Learn more about [our hood cleaning service in City]"
   - URL: `/locations/{city}/hood-cleaning/`

2. **Global Service Page** (1 link, contextual)
   - Anchor: "Learn about [our NFPA 96 cleaning process]"
   - URL: `/services/restaurant-hood-cleaning/`

3. **Calculator** (2 links: mid-article + footer CTA)
   - Anchor: "Get instant quote" or "Calculate your cost"
   - URL: `/pricing/instant-quote?src=resource_{slug}`

4. **Two Related Resources** (same city, different topics)
   - Example: Miami Checklist → links to Miami Frequency + Miami Problems
   - Anchor: "Also read: [Article Title]"
   - URL: `/resources/{city}/{related-slug}/`

### Resources Section Landing Page (New)

Create `/app/resources/page.tsx`:
- Lists all resource articles grouped by city
- Links to each article
- Brief intro: "Educational guides for South Florida restaurant owners"

---

## Three Starter Topics Per City

### Topic 1: NFPA 96 Hood Cleaning Checklist
**Slug:** `nfpa-96-hood-cleaning-checklist`
**Target Queries:** "hood cleaning checklist," "NFPA 96 checklist," "restaurant hood cleaning checklist [city]"

### Topic 2: Hood Cleaning Frequency by Restaurant Type
**Slug:** `hood-cleaning-frequency-by-restaurant-type`
**Target Queries:** "how often hood cleaning," "NFPA 96 frequency," "restaurant hood cleaning intervals [city]"

### Topic 3: Kitchen Exhaust Fan Problems & Quick Fixes
**Slug:** `kitchen-exhaust-fan-problems-fixes`
**Target Queries:** "exhaust fan not working," "restaurant fan problems," "hood fan troubleshooting [city]"

**Total Articles:** 3 topics × 3 cities = **9 resource articles**

---

## Word Count Targets

- **Minimum:** 1,000 words (body content, excluding nav/footer)
- **Target:** 1,200-1,500 words (sweet spot for featured snippets)
- **Maximum:** 1,800 words (longer OK if highly scannable with tables/lists)

---

## Component Reuse

### From Landing Pages (Already Built)
- `<CTABlock>` – Footer CTA with calculator link
- `<ResponseBadge>` – Trust badges (24/7, certified, etc.)
- `<ProofBlock>` – 4-column trust grid (optional for resources)

### New Components (Build for Resources)
- `<ResourceToC>` – Sticky table of contents
- `<ResourceTable>` – Responsive tables with mobile scroll
- `<ResourceChecklist>` – Checkbox-styled lists
- `<ResourceFAQ>` – Accordion-style FAQ component
- `<ResourceTimeline>` – After-hours timeline graphic

---

## Calculator Link-Only Rule (REITERATED)

**DO NOT modify `/app/pricing/instant-quote/page.tsx`**

Resources link to calculator with source tracking:
- `/pricing/instant-quote?src=resource_miami-checklist`
- `/pricing/instant-quote?src=resource_boca-frequency`
- `/pricing/instant-quote?src=resource_ftl-problems`

**No calculator logic changes. Links only.**

---

## Next Steps

See individual outline files:
- `/outputs/resources/outlines/[city]-[slug].md` (9 files)
- `/outputs/resources/keywords/[city]-[slug].csv` (9 files)
- `/outputs/resources/internal-link-map.md` (cross-linking matrix)

---

**Status:** Resource spec complete. Outlines next.
