# Acceptance Tests & Lighthouse Targets

## Binary Checks (Pass/Fail)

### Global Service Page: `/services/restaurant-hood-cleaning/`

#### Content Requirements
- [ ] **Word count:** 1,000–1,400 words (body content only, exclude nav/footer)
- [ ] **NFPA table present:** NFPA 96 cleaning frequency table with 4+ usage classes
- [ ] **Process list present:** 6-step process with H3 subheadings, descriptions, photo callouts
- [ ] **Certificate deliverables:** Section describing Certificate of Performance contents
- [ ] **After-hours coverage:** Paragraph explaining 24/7 emergency + night service
- [ ] **Trust signals:** Proof section with certifications, years, insurance, licenses

#### SEO Elements
- [ ] **Title tag:** 55-60 chars, includes "NFPA 96" and "South Florida"
- [ ] **Meta description:** 150-160 chars, includes primary keywords
- [ ] **H1 tag:** Single H1, includes "Restaurant Hood Cleaning"
- [ ] **Schema valid:** Service + BreadcrumbList + FAQPage JSON-LD validates at schema.org
- [ ] **Internal links placed:** Minimum 3 links to city pages (Miami, Boca, Fort Lauderdale)
- [ ] **Canonical URL:** Self-referencing canonical tag present

#### Conversion Elements
- [ ] **Two CTA blocks:** Hero CTA + Footer CTA (both above fold / above footer)
- [ ] **Mid-page form:** `<CertificateForm>` component placed after section 1-2
- [ ] **Instant estimate link:** Minimum 2 links to `/pricing/instant-quote?src=service-hood`
- [ ] **Phone number:** Clickable `tel:` link in header + footer CTA
- [ ] **Trust badges:** Response-time badge + certification badges in hero

#### Images
- [ ] **Photo callouts implemented:** Minimum 6 photos (before/after hood, duct, fan, certificate, process steps)
- [ ] **Alt text:** All images have descriptive alt attributes (accessibility + SEO)
- [ ] **Lazy loading:** `loading="lazy"` on below-fold images
- [ ] **Image optimisation:** WebP format, <200KB per image

---

### Miami Location Page: `/locations/miami/hood-cleaning/`

#### Content Requirements
- [ ] **Word count:** 1,600–2,200 words (body content only)
- [ ] **Local context:** Paragraph on Miami-Dade fire code + humidity challenges
- [ ] **Arrival bands:** Section with 5+ zones (Downtown, Beach, North, West, South) + timing
- [ ] **Landmarks:** Minimum 8 Miami landmarks named (Brickell, Wynwood, PortMiami, etc.)
- [ ] **Routes:** I-95, US-1, Palmetto, Dolphin Expressway mentioned
- [ ] **Mall/dock notes:** Paragraph on Bayside/Aventura Mall loading dock access
- [ ] **10 FAQs:** Minimum 10 FAQ questions (answers can be placeholder if Semrush data pending)

#### SEO Elements
- [ ] **Title tag:** 55-60 chars, includes "Miami" and "Hood Cleaning"
- [ ] **Meta description:** 150-160 chars, mentions Brickell, bi-lingual, (305) number
- [ ] **H1 tag:** Single H1, includes "Miami, FL"
- [ ] **Schema valid:** LocalBusiness + BreadcrumbList + FAQPage JSON-LD validates
- [ ] **Geo coordinates:** Latitude/longitude in LocalBusiness schema (Miami city centre)
- [ ] **Internal links placed:** Links to service page + 2 other city pages + pricing
- [ ] **Canonical URL:** Self-referencing canonical tag

#### Local Pack Signals
- [ ] **NAP consistency:** Business name, address (if applicable), phone number match GMB listing
- [ ] **Neighbourhood names:** 10+ Miami neighbourhoods mentioned (Brickell, Wynwood, Little Havana, etc.)
- [ ] **City/county in schema:** "Miami" + "Miami-Dade County" in areaServed schema
- [ ] **Service area list:** Bulleted list of covered neighbourhoods

#### Conversion Elements
- [ ] **Two CTA blocks:** Hero (Miami-specific) + Footer CTA
- [ ] **Mid-page form:** `<CertificateForm>` with Miami pre-selected in city dropdown
- [ ] **Instant estimate link:** Minimum 2 links to `/pricing/instant-quote?src=miami-hood`
- [ ] **Local phone number:** (305) 555-HOOD in hero + footer
- [ ] **City response badge:** "30-45 min Response (Brickell)" badge in hero

#### Images
- [ ] **Photo callouts:** Minimum 8-10 photos (including Miami-specific: high-rise duct, South Beach, rope-access)
- [ ] **Map embed:** Google Map showing Miami-Dade service area
- [ ] **Alt text:** Includes "Miami" in relevant alt tags (SEO signal)

---

### Boca Raton Location Page: `/locations/boca-raton/hood-cleaning/`

#### Content Requirements
- [ ] **Word count:** 1,600–2,200 words
- [ ] **Local context:** Paragraph on upscale dining, country clubs, Palm Beach County requirements
- [ ] **Arrival bands:** Timing for Central Boca, East Boca (A1A), West Boca, Delray
- [ ] **Landmarks:** Mizner Park, Town Center, Royal Palm Place, country clubs named
- [ ] **Routes:** I-95, Turnpike, Glades Road, Yamato Road mentioned
- [ ] **Country club notes:** Section on vendor requirements, insurance, seasonal scheduling
- [ ] **10 FAQs:** Minimum 10 FAQ questions (Boca-specific: country clubs, acquisitions, Delray coverage)

#### SEO Elements
- [ ] **Title tag:** Includes "Boca Raton" and "Country Club" or "NFPA 96"
- [ ] **Meta description:** Mentions Mizner Park, country clubs, (561) number
- [ ] **Schema valid:** LocalBusiness + BreadcrumbList + FAQPage
- [ ] **Geo coordinates:** Boca Raton city centre (26.3683, -80.1289)
- [ ] **Internal links:** Links to service page + Miami + Fort Lauderdale + pricing

#### Conversion Elements
- [ ] **Two CTA blocks:** Hero (Boca-specific) + Footer CTA
- [ ] **Mid-page form:** Boca Raton pre-selected in dropdown
- [ ] **Instant estimate link:** `/pricing/instant-quote?src=boca-hood`
- [ ] **Local phone:** (561) 555-HOOD
- [ ] **Trust badges:** "30+ Country Clubs Served" or similar proof point

#### Images
- [ ] **8-10 photos:** Including Mizner Park, country club kitchen, uniformed crew
- [ ] **Map embed:** Boca Raton + Delray Beach service area

---

### Fort Lauderdale Location Page: `/locations/fort-lauderdale/hood-cleaning/`

#### Content Requirements
- [ ] **Word count:** 1,600–2,200 words
- [ ] **Local context:** Las Olas, Port Everglades, A1A beach corridor, Broward County licensing
- [ ] **Arrival bands:** Downtown, Beach (A1A), Port Everglades, West Broward, Hollywood
- [ ] **Landmarks:** Las Olas, Port Everglades, Sawgrass Mills, Himmarshee Village named
- [ ] **Routes:** I-95, US-1, I-595, A1A mentioned
- [ ] **Cruise terminal notes:** TWIC certification, 8hr turnaround, security protocols
- [ ] **10 FAQs:** Fort Lauderdale-specific (Port Everglades, Las Olas, Broward licensing)

#### SEO Elements
- [ ] **Title tag:** Includes "Fort Lauderdale" and "Broward" or "TWIC"
- [ ] **Meta description:** Mentions Las Olas, Port Everglades, (954) number
- [ ] **Schema valid:** LocalBusiness + BreadcrumbList + FAQPage
- [ ] **Geo coordinates:** Fort Lauderdale city centre (26.1224, -80.1373)
- [ ] **Internal links:** Links to service page + Miami + Boca + pricing

#### Conversion Elements
- [ ] **Two CTA blocks:** Hero (Fort Lauderdale-specific) + Footer CTA
- [ ] **Mid-page form:** Fort Lauderdale pre-selected
- [ ] **Instant estimate link:** `/pricing/instant-quote?src=ftl-hood`
- [ ] **Local phone:** (954) 555-HOOD
- [ ] **Trust badges:** "Port Everglades Approved" or "TWIC-Certified Crews"

#### Images
- [ ] **8-10 photos:** Las Olas, Port Everglades terminal, cruise ship, beachfront restaurant
- [ ] **Map embed:** Broward County service area

---

## Lighthouse Performance Targets (Mobile)

### Test Configuration
- **Tool:** Google Lighthouse (Chrome DevTools)
- **Device:** Mobile (Simulated)
- **Throttling:** 4G (default mobile setting)
- **Mode:** Navigation (not timespan or snapshot)

### Minimum Scores (All 4 Pages)

#### Performance ≥ 90
- [ ] **First Contentful Paint (FCP):** <2.5s
- [ ] **Largest Contentful Paint (LCP):** <2.5s
- [ ] **Total Blocking Time (TBT):** <300ms
- [ ] **Cumulative Layout Shift (CLS):** <0.05
- [ ] **Speed Index:** <4.0s

**Common Issues to Prevent:**
- Images not optimised (use WebP, lazy loading, responsive srcset)
- No font preloading (preload Inter font in `<head>`)
- Render-blocking resources (defer non-critical CSS/JS)
- Large JavaScript bundles (check Next.js bundle analysis)

#### SEO ≥ 90
- [ ] **Meta description present:** All pages have unique meta descriptions
- [ ] **Title tag valid:** All pages have unique titles <60 chars
- [ ] **Crawlable links:** All internal links use `<a href>` (not onClick handlers)
- [ ] **Robots.txt valid:** `/robots.txt` allows Googlebot
- [ ] **Sitemap present:** `/sitemap.xml` includes all 4 Phase-1 URLs
- [ ] **Canonical tags:** Self-referencing canonical on each page
- [ ] **Mobile-friendly:** Viewport meta tag present, text readable on mobile

#### Accessibility (A11y) ≥ 95
- [ ] **Image alt text:** All `<img>` tags have descriptive alt attributes
- [ ] **Form labels:** All form inputs have associated `<label>` elements
- [ ] **Colour contrast:** Text meets WCAG AA standards (4.5:1 minimum for body text)
- [ ] **Focusable elements:** Tab navigation works for all interactive elements
- [ ] **ARIA labels:** Buttons/links have aria-label if text unclear (e.g., icon-only)
- [ ] **Heading hierarchy:** H1 → H2 → H3 in logical order (no skipped levels)
- [ ] **Semantic HTML:** Use `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

#### Best Practices ≥ 90
- [ ] **HTTPS only:** All pages served over HTTPS (production)
- [ ] **Console errors:** Zero JavaScript console errors
- [ ] **Deprecated APIs:** No use of deprecated browser APIs
- [ ] **Image aspect ratios:** Images have explicit width/height to prevent CLS

---

## Cross-Browser Testing

### Minimum Supported Browsers
- [ ] **Chrome/Edge:** Latest 2 versions (desktop + mobile)
- [ ] **Safari:** Latest version (macOS + iOS)
- [ ] **Firefox:** Latest version (desktop)

### Visual Checks
- [ ] **Hero section:** CTA buttons visible above fold on all viewports (375px–1920px)
- [ ] **Form fields:** Inputs/dropdowns functional on mobile (no zoom issues on iOS)
- [ ] **Navigation:** Header sticky behaviour works (transparent → solid on scroll)
- [ ] **Images:** No broken images (check network tab for 404s)
- [ ] **Fonts:** Inter font loads correctly (no FOUT/FOIT flash)

---

## Functional Testing

### Forms
- [ ] **CertificateForm submission:** Form submits successfully (check network tab for POST request)
- [ ] **Required field validation:** Empty required fields show error messages
- [ ] **Phone number format:** Input accepts (XXX) XXX-XXXX format
- [ ] **Success state:** Form replacement with "Thanks" message after submission

### Links
- [ ] **Internal links:** All links to `/services/`, `/locations/`, `/pricing/` work (no 404s)
- [ ] **External links:** Any external links (if present) open in new tab (`target="_blank"`)
- [ ] **Phone links:** `tel:` links trigger phone call on mobile
- [ ] **Source parameters:** `/pricing/instant-quote?src=...` URLs preserve src parameter

### Schema Validation
- [ ] **Structured Data Testing Tool:** Paste each page's JSON-LD into https://validator.schema.org/
- [ ] **No errors:** Schema validates with zero errors (warnings acceptable)
- [ ] **Rich results:** Google Rich Results Test shows eligible for rich snippets

---

## Content Quality Checks

### On-Page SEO
- [ ] **Keyword density:** Primary keyword appears 3-5 times naturally (not stuffed)
- [ ] **Readability:** Flesch Reading Ease score ≥ 50 (aim for 60-70)
- [ ] **Paragraph length:** No paragraphs >150 words (break up long blocks)
- [ ] **Subheadings:** H2/H3 every 300-400 words (scannability)

### Brand Consistency
- [ ] **No inline styles:** Zero use of `style=""` attributes (use Tailwind classes)
- [ ] **Colour tokens:** All colours use Tailwind config variables (no hardcoded hex)
- [ ] **Button styles:** All CTAs use `.btn-primary` or `.btn-secondary` classes
- [ ] **Typography:** All text uses Inter font (no system font fallback visible)

---

## Pre-Launch Checklist

### Archive Execution
- [ ] **Git commit:** Legacy content moved to `/archive/2025-10-reset/` in single commit
- [ ] **No deletions:** Verify files archived, not deleted (check git log)

### New Pages Deployed
- [ ] **4 pages live:** Service + 3 city pages accessible at correct URLs
- [ ] **Sitemap updated:** `/sitemap.xml` includes new URLs
- [ ] **Robots.txt:** No new pages blocked

### Components Created
- [ ] **4 new components:** CertificateForm, ResponseBadge, ProofBlock, CTABlock exist in `/components/`
- [ ] **Header updated:** Phone number + CTA button visible in sticky header

### Pricing Calculator Untouched
- [ ] **Calculator functional:** `/pricing/instant-quote` works identically to pre-launch
- [ ] **No logic changes:** Form fields, calculations, validation unchanged
- [ ] **Source tracking:** `?src=` parameters captured (check analytics/logs)

---

## Post-Launch Monitoring (First 7 Days)

### Analytics Setup
- [ ] **Google Analytics:** Event tracking for CTA clicks, form submissions
- [ ] **Google Search Console:** Submit sitemap, monitor indexing status
- [ ] **Form submissions:** Confirm email/webhook delivery working

### Performance Monitoring
- [ ] **Lighthouse audits:** Re-run on production URLs (targets still met?)
- [ ] **Core Web Vitals:** Monitor CLS, LCP, FID in Search Console (Field Data)
- [ ] **Uptime:** Verify all 4 pages return 200 status codes

### SEO Monitoring
- [ ] **Index status:** Check `site:localbizzlist.com hood cleaning` in Google (4 pages indexed?)
- [ ] **Schema recognition:** Google Rich Results Test shows FAQPage eligible
- [ ] **Local Pack tracking:** Monitor "hood cleaning [city]" rankings (baseline week 1)

---

## Rollback Plan (If Major Issues Found)

### Trigger Conditions
- Any Lighthouse score <85 on production
- >10% form submission failures
- Schema validation errors causing rich result loss
- Core Web Vitals in "poor" threshold (CLS >0.1, LCP >4.0s)

### Rollback Steps
1. **Revert git commit:** `git revert <commit-hash>` (restore legacy content)
2. **Redeploy:** Push revert to production
3. **Monitor:** Verify old pages functional
4. **Debug:** Fix issues in staging before re-deploying Phase 1

---

**Status:** Acceptance tests complete
**Next:** Cursor handoff documentation
