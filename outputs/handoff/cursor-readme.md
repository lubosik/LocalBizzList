# Cursor Handoff: Phase 1 Hood Cleaning Implementation

---

## Mission

Ship **Restaurant Hood Cleaning (NFPA 96)** as our first production content. Build 4 pages (1 service + 3 cities) using the provided architecture, outlines, copy scaffolds, and brand components.

**Timeline:** Target 1-2 days for Cursor implementation.

---

## What You're Building

### Phase 1 Pages (Ship NOW)

1. **Global Service Page:** `/app/services/restaurant-hood-cleaning/page.tsx`
2. **Miami Location Page:** `/app/locations/miami/hood-cleaning/page.tsx`
3. **Boca Raton Location Page:** `/app/locations/boca-raton/hood-cleaning/page.tsx`
4. **Fort Lauderdale Location Page:** `/app/locations/fort-lauderdale/hood-cleaning/page.tsx`

### New Components to Create

1. **`/components/CertificateForm.tsx`** – Lead capture form (5 fields)
2. **`/components/ResponseBadge.tsx`** – Trust badges (24/7, same-day, city response time)
3. **`/components/ProofBlock.tsx`** – 4-column proof grid (certifications, insurance, years, etc.)
4. **`/components/CTABlock.tsx`** – Reusable hero/footer CTA sections

### Existing Component to Update

- **`/components/Header.tsx`** – Add phone number + "Get NFPA Certificate" CTA button

---

## Files Provided in `/outputs/`

### 1. Content Reset (`/outputs/reset/`)
- **`moved-pages.md`** – Inventory of legacy content to archive
- **Action:** Execute git commands to move files to `/archive/2025-10-reset/`

### 2. Information Architecture (`/outputs/ia/`)
- **`phase-2-todos.md`** – Phase 2 roadmap (for context, don't build yet)
- **`frontmatter-examples.md`** – YAML schema + 2 filled examples (service page + Miami page)

### 3. Beat-the-SERP Outlines (`/outputs/outlines/`)
- **`service-hood-cleaning.md`** – H2/H3 structure + paragraph prompts for global service page
- **`location-miami.md`** – Detailed Miami outline with local signals
- **`location-boca-raton.md`** – Boca Raton outline (country club focus)
- **`location-fort-lauderdale.md`** – Fort Lauderdale outline (cruise terminal focus)

### 4. SEO Contracts (`/outputs/seo/`)
- **`contracts.md`** – Page titles, meta descriptions, JSON-LD schema, internal linking map

### 5. Copy Scaffolds (`/outputs/copy-scaffolds/`)
- **`service-page-scaffold.md`** – Polished hero + 2 sections for service page
- **`miami-page-scaffold.md`** – Hero + 2 sections for Miami
- **`boca-ftl-scaffolds.md`** – Hero + sections for Boca & Fort Lauderdale

### 6. Conversion Layer (`/outputs/conversion/`)
- **`spec.md`** – Component specs, CTA placements, form fields, brand tokens

### 7. QA Checklist (`/outputs/qa/`)
- **`acceptance-checklist.md`** – Binary checks for content, SEO, Lighthouse, accessibility

---

## Step-by-Step Implementation Plan

### STEP 1: Archive Legacy Content

**What to do:**
- Move files listed in `/outputs/reset/moved-pages.md` to `/archive/2025-10-reset/`
- Use `git mv` commands provided in the file
- Create single commit: `"Archive legacy luxury niche content - Phase 1 hood cleaning reset"`

**Files to move:**
- `/content/posts/*` (3 MDX files)
- `/content/businesses/*` (2 MDX files)
- `/content/categories/*` (1 MDX file)
- `/app/about/`, `/app/blog/`, `/app/businesses/`, `/app/search/`, `/app/dashboard/`

**Preserve (do NOT touch):**
- `/app/layout.tsx`, `/app/page.tsx`, `/app/globals.css`
- `/components/Header.tsx`, `/components/Footer.tsx`, `/components/Hero.tsx`, `/components/ui/*`
- `/tailwind.config.ts`, `/contentlayer.config.ts`
- `/app/pricing/*` (**CRITICAL:** Do not modify calculator)

**Verification:**
- Run `git status` to confirm moves (not deletions)
- Check that archived files exist in `/archive/2025-10-reset/`

---

### STEP 2: Create New Components

**Reference:** `/outputs/conversion/spec.md` (sections 2-6)

#### 2A: CertificateForm Component

**File:** `/components/CertificateForm.tsx`

**What to build:**
- 5-field form: Business Name, Phone, City (dropdown), Kitchen Type (dropdown), Preferred Contact (radio)
- Form submission handler (send to email or webhook—your choice for backend)
- Success state: replace form with "Thanks! We'll call you in 15 minutes."
- Use existing `.input` and `.btn-primary` classes from `globals.css`

**Props:**
- `source: string` (for tracking, e.g., "miami-hood")

**Design:**
- Container: `bg-neutral-50 rounded-lg p-8 max-w-2xl mx-auto`
- Refer to spec.md section 2 for full component structure

#### 2B: ResponseBadge Component

**File:** `/components/ResponseBadge.tsx`

**What to build:**
- 3 variants: `24-7`, `same-day`, `city-response`
- Uses Lucide icons: `Clock`, `Zap`, `MapPin`
- Rounded pill badges with icon + text

**Props:**
- `variant: '24-7' | 'same-day' | 'city-response'`
- `cityTime?: string` (for city-response variant, e.g., "30-45 min")

**Design:**
- Refer to spec.md section 3 for variant definitions

#### 2C: ProofBlock Component

**File:** `/components/ProofBlock.tsx`

**What to build:**
- 4-column grid (responsive: 1 col mobile → 4 cols desktop)
- Each item: icon (circular bg) + title + description
- Uses Lucide icons: `Award`, `Shield`, `Clock`, `FileCheck`, `Users`

**Props:**
- `items: Array<{ icon: LucideIcon, title: string, description: string }>`

**Design:**
- Refer to spec.md section 4 for structure

#### 2D: CTABlock Component

**File:** `/components/CTABlock.tsx`

**What to build:**
- Reusable hero/footer CTA section
- Two variants: `hero` (gradient bg) and `footer` (secondary bg)
- Primary + optional secondary button
- Optional badges row

**Props:**
- `headline: string`
- `subheadline?: string`
- `primaryCTA: { text: string, href: string }`
- `secondaryCTA?: { text: string, href: string }`
- `badges?: React.ReactNode`
- `variant?: 'hero' | 'footer'`

**Design:**
- Refer to spec.md section 6 for full structure

---

### STEP 3: Update Header Component

**File:** `/components/Header.tsx` (existing—edit only)

**What to add:**
- Phone number link: `(954) 555-HOOD` → `tel:+19545554663` (visible on `md:` breakpoint)
- CTA button: "Get NFPA Certificate" → `/pricing/instant-quote`
- Use Lucide `Phone` icon

**Reference:** `/outputs/conversion/spec.md` section 1

**Preserve:**
- Existing logo, nav links, search icon
- Sticky header behaviour

---

### STEP 4: Build Service Page

**File:** `/app/services/restaurant-hood-cleaning/page.tsx`

**Content sources:**
1. **Outline:** `/outputs/outlines/service-hood-cleaning.md`
2. **Copy scaffold:** `/outputs/copy-scaffolds/service-page-scaffold.md`
3. **Frontmatter example:** `/outputs/ia/frontmatter-examples.md` (Example 1)
4. **SEO contracts:** `/outputs/seo/contracts.md` (titles, meta, schema)

**Structure:**

```tsx
// Metadata (Next.js 13+ App Router)
export const metadata = {
  title: "Restaurant Hood Cleaning | NFPA 96 Certified | South Florida",
  description: "NFPA 96 certified hood cleaning for South Florida restaurants. To-bare-metal degreasing, compliance certificates, 24/7 emergency service. Miami, Boca, Fort Lauderdale."
}

export default function ServicePage() {
  return (
    <>
      {/* Hero CTA Block */}
      <CTABlock variant="hero" ... />

      {/* Section 1: Why Hood Cleaning Prevents Fires */}
      {/* Use copy from scaffold + outline paragraph prompts */}

      {/* Section 2: NFPA 96 Frequency Table */}
      {/* Build table from outline */}

      {/* Mid-page CertificateForm */}
      <CertificateForm source="service-hood" />

      {/* Section 3: 6-Step Process */}
      {/* Use outline H3 subheadings + scaffold copy */}

      {/* ProofBlock */}
      <ProofBlock items={[...]} />

      {/* FAQs Section */}
      {/* Use FAQ questions from scaffold */}

      {/* Footer CTA Block */}
      <CTABlock variant="footer" ... />

      {/* JSON-LD Schema (in <Script> tag) */}
      <Script type="application/ld+json">
        {/* Paste Service + BreadcrumbList + FAQPage schema from contracts.md */}
      </Script>
    </>
  )
}
```

**What to populate:**
- **Hero:** Use scaffold headline/subheadline
- **Body copy:** Combine outline paragraph prompts + scaffold polished sections
- **FAQs:** Use FAQ questions from scaffold, answers = `[[FAQ_ANSWER_TODO]]` placeholders
- **Schema:** Copy JSON-LD from `contracts.md`, paste into `<Script>` tag
- **Internal links:** Link to Miami, Boca, Fort Lauderdale city pages (see outline linking strategy)

**Photo callouts:**
- Outline includes `[[PHOTO: description]]` markers
- Replace with `<img src="/images/placeholder.jpg" alt="description" />` or leave as TODO comments for later

**Word count target:** 1,000–1,400 words

---

### STEP 5: Build Miami Location Page

**File:** `/app/locations/miami/hood-cleaning/page.tsx`

**Content sources:**
1. **Outline:** `/outputs/outlines/location-miami.md`
2. **Copy scaffold:** `/outputs/copy-scaffolds/miami-page-scaffold.md`
3. **Frontmatter example:** `/outputs/ia/frontmatter-examples.md` (Example 2)
4. **SEO contracts:** `/outputs/seo/contracts.md` (Miami section)

**Structure:**
- Same pattern as service page
- **Hero CTA:** Miami-specific headline ("Miami's Trusted NFPA 96 Hood Cleaning Service")
- **Section 1:** Why Miami needs frequent cleaning (humidity, Miami-Dade fire code)
- **Section 2:** Service coverage (arrival bands, bi-lingual crews, high-rise expertise)
- **Mid-page form:** `<CertificateForm source="miami-hood" />` with Miami pre-selected
- **FAQs:** 10 Miami-specific questions (see outline + scaffold)
- **Schema:** LocalBusiness + BreadcrumbList + FAQPage from `contracts.md`

**Local signals to emphasise:**
- Neighbourhood names (Brickell, Wynwood, South Beach, Little Havana, etc.)
- Landmarks (PortMiami, Brickell City Centre, Aventura Mall)
- Routes (I-95, US-1, Palmetto, Dolphin)
- "Bi-lingual (English/Spanish)" mentioned 2-3 times

**Word count target:** 1,600–2,200 words

---

### STEP 6: Build Boca Raton Location Page

**File:** `/app/locations/boca-raton/hood-cleaning/page.tsx`

**Content sources:**
1. **Outline:** `/outputs/outlines/location-boca-raton.md`
2. **Copy scaffold:** `/outputs/copy-scaffolds/boca-ftl-scaffolds.md` (Boca section)
3. **SEO contracts:** `/outputs/seo/contracts.md` (Boca section)

**Key differentiators:**
- **Country club focus:** "30+ country clubs served," pre-approved vendor
- **White-glove service:** Uniformed crews, discreet equipment
- **Acquisition due diligence:** Buyer's compliance packages for restaurant sales

**Local signals:**
- Mizner Park, Town Center, Royal Palm Place, Delray Beach Atlantic Avenue
- Country club names (Woodfield, Broken Sound, St. Andrews)
- Seasonal notes (snowbird season Nov-Apr, off-season May-Oct)

**Word count target:** 1,600–2,200 words

---

### STEP 7: Build Fort Lauderdale Location Page

**File:** `/app/locations/fort-lauderdale/hood-cleaning/page.tsx`

**Content sources:**
1. **Outline:** `/outputs/outlines/location-fort-lauderdale.md`
2. **Copy scaffold:** `/outputs/copy-scaffolds/boca-ftl-scaffolds.md` (Fort Lauderdale section)
3. **SEO contracts:** `/outputs/seo/contracts.md` (Fort Lauderdale section)

**Key differentiators:**
- **Port Everglades expertise:** TWIC-certified crews, 200+ cruise terminal jobs, 8hr turnaround
- **Coastal corrosion protocol:** Anti-corrosion treatment for beachfront properties
- **Broward County licensed:** Fire Prevention licence #FP-12345

**Local signals:**
- Las Olas Boulevard, Port Everglades, A1A beach corridor, Sawgrass Mills, Himmarshee Village
- Cruise lines (Royal Caribbean, Carnival, MSC)
- Routes (I-95, I-595, US-1, A1A)

**Word count target:** 1,600–2,200 words

---

## Where to Fetch FAQ Answers & Long-Tails

**All FAQ answers marked `[[FAQ_ANSWER_TODO]]` should be populated using:**

1. **Semrush:** Search for "hood cleaning miami" (or relevant city) → analyse "Questions" tab for People Also Ask (PAA) data
2. **Perplexity:** Ask "What does NFPA 96 require for hood cleaning frequency?" → summarise answer in 2-3 sentences
3. **Competitor sites:** Review top 3 ranking pages for each city → identify gaps in their FAQs, fill with better answers

**FAQ Answer Guidelines:**
- **Length:** 50-100 words per answer
- **Tone:** Authoritative, educational, no hype
- **Include:** Specific numbers (intervals, costs ranges if asked), code references (NFPA 96, Miami-Dade amendments)
- **Schema-eligible FAQs:** Only include in JSON-LD if `schema_eligible: true` in frontmatter (see frontmatter examples)

**Example FAQ sources:**
- "How often does NFPA 96 require hood cleaning?" → Perplexity or NFPA.org
- "What's the average cost in Miami?" → Semrush cost data + competitor pricing pages
- "Can you service high-rises in Brickell?" → Write custom answer emphasising rope-access certification

---

## The "Do Not Touch Calculator" Rule

### CRITICAL: `/app/pricing/instant-quote/*` is OFF-LIMITS

**What you CANNOT do:**
- Modify calculator form fields
- Change pricing logic or calculations
- Restructure the page layout
- Alter form validation rules

**What you CAN do:**
- Link to `/pricing/instant-quote?src={page}` from all 4 pages (minimum 2 links per page)
- Update meta title/description if missing
- Add breadcrumb navigation (if missing)
- Fix CSS styling if broken (using global classes only, no logic changes)

**Why:** Calculator is existing functionality—scope is content pages only. Links track conversion sources via `?src=` parameter.

---

## Internal Linking Strategy

**Every page must link to:**

1. **Service page links to:**
   - Miami: `/locations/miami/hood-cleaning/`
   - Boca: `/locations/boca-raton/hood-cleaning/`
   - Fort Lauderdale: `/locations/fort-lauderdale/hood-cleaning/`
   - Pricing: `/pricing/instant-quote?src=service-hood`

2. **Each city page links to:**
   - Service page: `/services/restaurant-hood-cleaning/`
   - Other 2 city pages (e.g., Miami links to Boca + Fort Lauderdale)
   - Pricing: `/pricing/instant-quote?src={city}-hood`

**Anchor text examples:**
- "Learn more about our [NFPA 96 process](/services/restaurant-hood-cleaning/)"
- "We also serve [hood cleaning in Boca Raton](/locations/boca-raton/hood-cleaning/)"
- "[Get instant quote](/pricing/instant-quote?src=miami-hood)"

**Reference:** `/outputs/seo/contracts.md` section "Internal Linking Map"

---

## Brand & Design Rules

### Use Existing Brand Tokens ONLY

**Colours** (from `/tailwind.config.ts`):
- Primary: `primary`, `primary-fg`, `primary-int`
- Secondary: `secondary`, `secondary-fg`, `secondary-int`
- Neutral: `neutral-{0,50,100...900}`
- Accent: `accent`, `accent-int`, `accent-extraSoft`

**Typography** (from `/app/globals.css`):
- Font: Inter (already loaded)
- Headings: `.text-3xl font-bold` (H2), `.text-2xl font-bold` (H3)
- Body: `.text-base` (default), `.leading-relaxed`

**Components** (from `/app/globals.css`):
- Buttons: `.btn-primary`, `.btn-secondary`, `.btn-outline`
- Inputs: `.input`
- Cards: `.card`
- Container: `.container` (max-width: 1024px)

**Icons:**
- Library: Lucide React (already installed)
- Common: `Phone`, `Clock`, `Zap`, `MapPin`, `Award`, `Shield`, `FileCheck`, `ArrowRight`

### DO NOT Create New Styles

- **No inline `style=""` attributes**
- **No new CSS files** (use `globals.css` classes)
- **No hardcoded colours** (use Tailwind config tokens)
- **No new font imports** (Inter is sufficient)

---

## Acceptance Criteria (QA Checklist)

**Before marking implementation complete, verify:**

### Content
- [ ] **4 pages exist** at correct URLs
- [ ] **Word counts met:** Service 1,000-1,400w, Cities 1,600-2,200w each
- [ ] **NFPA table present** on service page
- [ ] **6-step process** on service page with H3 subheadings
- [ ] **10 FAQs** on each city page (answers populated or placeholders)

### SEO
- [ ] **Unique titles/metas** for all 4 pages (from `contracts.md`)
- [ ] **JSON-LD schema** on all pages (Service, LocalBusiness, BreadcrumbList, FAQPage)
- [ ] **Internal links placed** (minimum 3 per page)
- [ ] **Canonical tags** (self-referencing)

### Conversion
- [ ] **2 CTA blocks per page** (hero + footer)
- [ ] **Mid-page CertificateForm** on all pages (correct `source` prop)
- [ ] **2+ links to pricing calculator** per page with `?src=` parameters
- [ ] **Phone numbers** in header + footer CTAs (clickable `tel:` links)

### Components
- [ ] **4 new components created** (CertificateForm, ResponseBadge, ProofBlock, CTABlock)
- [ ] **Header updated** (phone + CTA button added)

### Performance
- [ ] **Lighthouse mobile:** Perf ≥90, SEO ≥90, A11y ≥95
- [ ] **Images optimised:** WebP, lazy loading, alt text
- [ ] **No console errors** (check browser dev tools)

**Full checklist:** `/outputs/qa/acceptance-checklist.md`

---

## Troubleshooting Common Issues

### Issue: "Contentlayer not generating files"
**Fix:** Run `npm run dev` to trigger Contentlayer build. Check `contentlayer.config.ts` includes new paths if using MDX.

### Issue: "Tailwind classes not applying"
**Fix:** Verify `tailwind.config.ts` content array includes `/app/**/*.tsx`. Restart dev server.

### Issue: "Schema validation errors"
**Fix:** Paste JSON-LD into https://validator.schema.org/, fix errors (usually missing required fields or typos).

### Issue: "Form submission not working"
**Fix:** Check network tab for POST request. Implement email/webhook endpoint or use placeholder (`console.log` for now).

### Issue: "Lighthouse CLS score failing"
**Fix:** Add explicit `width` and `height` to all images. Check for layout shifts caused by fonts (preload Inter in `<head>`).

---

## Delivery Checklist

When implementation is complete, verify:

1. **Archive commit pushed:** Legacy content in `/archive/2025-10-reset/`
2. **4 pages live:** Accessible at `/services/restaurant-hood-cleaning/`, `/locations/{city}/hood-cleaning/`
3. **Components functional:** CertificateForm submits, ResponseBadge displays, ProofBlock renders, CTABlock links work
4. **Header updated:** Phone + CTA button visible
5. **Sitemap updated:** `/sitemap.ts` includes new URLs
6. **Pricing calculator untouched:** `/pricing/instant-quote` works identically to before
7. **Lighthouse passing:** All pages ≥90 Perf, ≥90 SEO, ≥95 A11y on mobile
8. **Schema valid:** Zero errors at validator.schema.org for all 4 pages
9. **No console errors:** Clean browser console on all pages
10. **Git history clean:** Separate commits for archive, components, and pages

---

## Questions for User (If Blocked)

If you encounter decisions not covered in the architecture:

1. **Form submission backend:** Email address? Webhook URL? Or placeholder for now?
2. **Phone numbers:** Placeholder `(954) 555-HOOD` or real numbers to use?
3. **Images:** Use placeholder `<img>` tags or pull from specific source? (Unsplash URLs acceptable?)
4. **FAQ answers:** Populate all now (via Perplexity/Semrush) or leave some as `[[FAQ_ANSWER_TODO]]`?
5. **Google Analytics:** Tracking ID to add for event tracking? Or skip for Phase 1?

**Default assumption if unspecified:** Use placeholders, mark with TODO comments, proceed with architecture.

---

## Success Criteria

**Phase 1 is complete when:**

✅ 4 pages live at production URLs
✅ All acceptance tests pass (see `qa/acceptance-checklist.md`)
✅ Lighthouse scores ≥ targets on all pages
✅ Legacy content safely archived (not deleted)
✅ Pricing calculator untouched and functional
✅ User can click "Get NFPA Certificate" → form submits → receives lead
✅ Google can crawl, index, and display rich snippets (schema valid)

**GO/NO-GO gate:** If any acceptance test fails, fix before launch. Rollback plan available in QA checklist.

---

**You have everything you need. Ship it. 🚀**
