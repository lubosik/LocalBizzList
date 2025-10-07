# Homepage Reset: Acceptance Checklist

## Purpose

This checklist ensures the new homepage and hub architecture meets all requirements before going live. All items must pass (✅) before launch.

---

## Pre-Launch Validation

### Phase 1: Content Cleanup ✅ / ❌

**Verify Legacy Content Archived**
- [ ] All luxury/wealth management MDX files moved to `/archive/2025-10-homepage-reset/`
  - [ ] `content/posts/how-to/selecting-wealth-manager.mdx`
  - [ ] `content/posts/cost-guides/private-jet-membership-costs.mdx`
  - [ ] `content/posts/expert-advice/luxury-real-estate-investment.mdx`
  - [ ] `content/businesses/prestige-wealth-advisors.mdx`
  - [ ] `content/businesses/elite-realty-group.mdx`
  - [ ] `content/categories/how-to.mdx`
- [ ] Legacy app routes confirmed archived (from previous cleanup):
  - [ ] `/app/about/` → `/archive/2025-10-reset/app/about/`
  - [ ] `/app/blog/` → `/archive/2025-10-reset/app/blog/` *(Note: Will recreate new `/app/blog/` for resources hub)*
  - [ ] `/app/businesses/` → `/archive/2025-10-reset/app/businesses/`
  - [ ] `/app/search/` → `/archive/2025-10-reset/app/search/`
  - [ ] `/app/dashboard/` → `/archive/2025-10-reset/app/dashboard/`
- [ ] No references to `allPosts` or `allBusinesses` in active code
- [ ] No references to Contentlayer in sitemap or active pages
- [ ] Git commit created: "Archive out-of-scope luxury content - Homepage reset for 6 service niches"

**Verify In-Scope Content Preserved**
- [ ] Service page exists: `/app/services/restaurant-hood-cleaning/page.tsx`
- [ ] Location pages exist:
  - [ ] `/app/locations/miami/hood-cleaning/page.tsx`
  - [ ] `/app/locations/boca-raton/hood-cleaning/page.tsx`
  - [ ] `/app/locations/fort-lauderdale/hood-cleaning/page.tsx`
- [ ] Resource articles exist (9 total):
  - [ ] Miami articles (3)
  - [ ] Boca Raton articles (3)
  - [ ] Fort Lauderdale articles (3)
- [ ] Calculator preserved (untouched): `/app/pricing/instant-quote/page.tsx`

---

### Phase 2: Homepage Components ✅ / ❌

**Hero Section**
- [ ] Component created: `/components/home/HomeHero.tsx`
- [ ] H1 renders: "South Florida's Trusted Directory for Commercial Services"
- [ ] Subcopy renders correctly
- [ ] Primary CTA button visible: "Browse Service Niches" → `/niches/`
- [ ] Secondary CTA button visible: "Get Instant Quote" → `/pricing/instant-quote?src=home_hero`
- [ ] Background uses `bg-secondary` color token
- [ ] Responsive on mobile (stacked layout)
- [ ] Responsive on tablet (inline CTAs)
- [ ] Responsive on desktop (full layout)

**Niche Grid Section**
- [ ] Component created: `/components/home/NicheGrid.tsx`
- [ ] Child component created: `/components/home/NicheCard.tsx`
- [ ] All 6 niche cards render:
  - [ ] Restaurant Hood Cleaning (Flame icon)
  - [ ] Grease Trap Cleaning (Droplets icon)
  - [ ] Septic Tank Services (Truck icon)
  - [ ] Sealcoating (HardHat icon)
  - [ ] Fire Extinguisher Services (AlertTriangle icon)
  - [ ] Sprinkler Repair (Sprinkle icon)
- [ ] All icons render correctly (Lucide React)
- [ ] Grid shows 3 columns on desktop
- [ ] Grid shows 2 columns on tablet
- [ ] Grid shows 1 column on mobile
- [ ] All "View Hub" buttons link to `/niches/{slug}/`

**Blog Categories Strip**
- [ ] Component created: `/components/home/CategoryStrip.tsx`
- [ ] All 5 category chips render:
  - [ ] Cost Guides (DollarSign icon)
  - [ ] Compliance & Inspections (ClipboardCheck icon)
  - [ ] Maintenance & Repairs (Wrench icon)
  - [ ] Emergency & After-Hours (Clock icon)
  - [ ] Planning & ROI (TrendingUp icon)
- [ ] Chips use rotating color schemes (primary, secondary, accent, etc.)
- [ ] All chips link to `/blog/{category}/`
- [ ] Chips wrap correctly on mobile

**Common Issues Grid**
- [ ] Component created: `/components/home/IssuesGrid.tsx`
- [ ] Child component created: `/components/home/IssueCard.tsx`
- [ ] 12 issue cards render (2 per niche)
- [ ] Each card shows: niche tag, title, snippet, "Read Solution" link
- [ ] Grid shows 4 columns on desktop
- [ ] Grid shows 2 columns on tablet
- [ ] Grid shows 1 column on mobile
- [ ] All cards link to `/resources/{city}/{issue-slug}/`
- [ ] Issues sorted by priority (1 = highest)

**Latest Guides Section**
- [ ] Component created: `/components/home/LatestGuides.tsx`
- [ ] Child component created: `/components/home/GuideCard.tsx`
- [ ] 6 guide cards render
- [ ] Each card shows: city badge, category tag, title, excerpt, publish date, read time
- [ ] City badges visible (top-right corner)
- [ ] Grid shows 3 columns on desktop (2 rows)
- [ ] Grid shows 2 columns on tablet
- [ ] Grid shows 1 column on mobile
- [ ] All cards link to `/resources/{city}/{guide-slug}/`
- [ ] "View All Resources" link present → `/blog/`

**Footer CTA Band**
- [ ] Component created: `/components/home/FooterCTA.tsx`
- [ ] Headline renders: "Need a Certificate of Performance Tonight?"
- [ ] Subtext renders correctly
- [ ] Button renders: "Get Instant Quote"
- [ ] Button links to `/pricing/instant-quote?src=home_footer`
- [ ] Calculator icon shows before button text
- [ ] Background uses `bg-secondary`
- [ ] Responsive: stacked on mobile, flex row on desktop

---

### Phase 3: Hub Pages ✅ / ❌

**Niche Landing Hub** (`/niches/page.tsx`)
- [ ] Page created
- [ ] H1: "Explore Our Service Niches"
- [ ] Niche grid renders (reuses `<NicheGrid>` component)
- [ ] Metadata correct (title, description, keywords)
- [ ] JSON-LD CollectionPage schema present
- [ ] CTA renders: "Need help choosing? Call us..."

**Individual Niche Hubs** (`/niches/[slug]/page.tsx`)
- [ ] Dynamic route created
- [ ] `generateStaticParams()` function generates all 6 niches
- [ ] Hood Cleaning hub renders correctly:
  - [ ] H1: "Restaurant Hood Cleaning Services in South Florida"
  - [ ] Hero section with CTA
  - [ ] 3 location cards link to city pages
  - [ ] 6 filtered issue cards (hood cleaning only)
  - [ ] 6 filtered resource cards (hood cleaning only)
  - [ ] Footer CTA with calculator link
  - [ ] Metadata correct
  - [ ] JSON-LD Service + BreadcrumbList schema present
- [ ] Other 5 niche hubs render (stubbed content OK for now)

**Blog Hub** (`/blog/page.tsx`)
- [ ] Page created
- [ ] H1: "Resources & Guides"
- [ ] Category filter chips render (reuses `<CategoryStrip>`)
- [ ] Article grid renders all resource articles
- [ ] Sidebar renders (desktop only):
  - [ ] "Browse by Service" links (6 niches)
  - [ ] "Browse by City" links (3 cities)
- [ ] Metadata correct
- [ ] JSON-LD CollectionPage schema present

**Category Hubs** (`/blog/[category]/page.tsx`)
- [ ] Dynamic route created
- [ ] `generateStaticParams()` function generates all 5 categories
- [ ] Articles filtered by category correctly
- [ ] Metadata correct per category
- [ ] Sidebar renders (same as Blog Hub)

---

### Phase 4: Data Files ✅ / ❌

**Niches Data** (`/lib/data/niches.ts`)
- [ ] File created with all 6 niches
- [ ] Each niche has: slug, title, shortTitle, icon, description, hrefs, status
- [ ] TypeScript interface defined

**Categories Data** (`/lib/data/categories.ts`)
- [ ] File created with all 5 categories
- [ ] Each category has: slug, label, icon, colorScheme, description
- [ ] TypeScript interface defined

**Cities Data** (`/lib/data/cities.ts`)
- [ ] File created with 3 cities
- [ ] Each city has: slug, name, county, state
- [ ] TypeScript interface defined

**Issues Data** (`/content/issues/*.yml`)
- [ ] `/content/issues/hood-cleaning.yml` created with 6 issues
- [ ] `/content/issues/grease-trap.yml` created with 4+ issues
- [ ] `/content/issues/septic-tank.yml` created with 4+ issues
- [ ] `/content/issues/sealcoating.yml` created with 4+ issues
- [ ] `/content/issues/fire-extinguisher.yml` created with 4+ issues
- [ ] `/content/issues/sprinkler-repair.yml` created with 4+ issues
- [ ] `js-yaml` package installed
- [ ] Data loading functions created: `/lib/data/issues.ts`
- [ ] TypeScript interfaces defined: `/lib/types/issues.ts`
- [ ] All issues have 3-5 keywords
- [ ] All issues have priority (1-10)
- [ ] All issue titles 45-60 chars
- [ ] All issue snippets 80-120 chars

---

### Phase 5: SEO & Metadata ✅ / ❌

**Homepage SEO**
- [ ] Page title: "LocalBizzList - South Florida Commercial Services Directory" (59 chars)
- [ ] Meta description ≤ 160 chars
- [ ] Keywords array populated (5-10 keywords)
- [ ] OpenGraph tags present (title, description, image, url)
- [ ] Twitter Card tags present
- [ ] JSON-LD WebSite schema present
- [ ] JSON-LD Organization schema present
- [ ] H1 unique: "South Florida's Trusted Directory for Commercial Services"

**Niche Hub SEO**
- [ ] Each niche hub has unique page title (≤ 60 chars)
- [ ] Each niche hub has unique meta description (≤ 160 chars)
- [ ] Keywords array populated per niche
- [ ] OpenGraph tags present
- [ ] JSON-LD Service schema present
- [ ] JSON-LD BreadcrumbList schema present
- [ ] H1 unique per niche

**Blog Hub SEO**
- [ ] Page title: "Commercial Services Resources & Guides - LocalBizzList"
- [ ] Meta description ≤ 160 chars
- [ ] Keywords array populated
- [ ] OpenGraph tags present
- [ ] JSON-LD CollectionPage schema present

**Category Hub SEO**
- [ ] Each category hub has unique page title
- [ ] Each category hub has unique meta description
- [ ] Keywords array populated per category
- [ ] OpenGraph tags present

**Schema Validation**
- [ ] All JSON-LD schemas validate at https://validator.schema.org/
- [ ] No schema errors in Google Search Console (check 7 days post-launch)

---

### Phase 6: Internal Linking ✅ / ❌

**Homepage Links**
- [ ] 32 total internal links present
- [ ] Hero CTA → `/niches/`
- [ ] Hero CTA → `/pricing/instant-quote?src=home_hero`
- [ ] 6 niche cards → `/niches/{slug}/`
- [ ] 5 category chips → `/blog/{category}/`
- [ ] 12 issue cards → `/resources/{city}/{issue-slug}/`
- [ ] 6 guide cards → `/resources/{city}/{guide-slug}/`
- [ ] Footer CTA → `/pricing/instant-quote?src=home_footer`
- [ ] No broken links (404s)

**Niche Hub Links**
- [ ] 18 total internal links per niche hub
- [ ] Hero CTA → `/pricing/instant-quote?src=niche_{slug}`
- [ ] 3 location cards → `/locations/{city}/{service-slug}/`
- [ ] 6 issue cards → `/resources/{city}/{issue-slug}/`
- [ ] 6 guide cards → `/resources/{city}/{guide-slug}/`
- [ ] Footer CTA → `/pricing/instant-quote?src=niche_{slug}_footer`
- [ ] No broken links

**Blog Hub Links**
- [ ] 5 category chips → `/blog/{category}/`
- [ ] 6 sidebar niche links → `/niches/{slug}/`
- [ ] 3 sidebar city links → `/locations/{city}/hood-cleaning/`
- [ ] All article cards link correctly

**Calculator Link Tracking**
- [ ] All calculator links use `?src=` parameter
- [ ] No calculator logic modified (link-only rule)
- [ ] Calculator page untouched: `/app/pricing/instant-quote/page.tsx`

---

### Phase 7: Navigation ✅ / ❌

**Header Navigation** (`/components/Header.tsx`)
- [ ] Legacy links removed: `/blog`, `/businesses`, `/about`
- [ ] New "Services" dropdown added:
  - [ ] Links to all 6 niche hubs
  - [ ] "View All" → `/niches/`
- [ ] "Resources" link → `/blog/`
- [ ] New "Locations" dropdown added:
  - [ ] Miami → `/locations/miami/hood-cleaning/`
  - [ ] Boca Raton → `/locations/boca-raton/hood-cleaning/`
  - [ ] Fort Lauderdale → `/locations/fort-lauderdale/hood-cleaning/`
- [ ] "Get Quote" button → `/pricing/instant-quote?src=nav`
- [ ] Logo links to `/`
- [ ] Mobile menu works (hamburger icon)

**Footer Navigation** (`/components/Footer.tsx`)
- [ ] Legacy links removed: `/businesses`, `/about`
- [ ] New "Services" section with 6 niche links
- [ ] New "Resources" section with 5 category links
- [ ] New "Locations" section with 3 city links
- [ ] Calculator link → `/pricing/instant-quote?src=footer`

---

### Phase 8: Design & Responsiveness ✅ / ❌

**Design Tokens**
- [ ] No hardcoded colors (all use Tailwind config tokens)
- [ ] Primary color used for main CTAs and links
- [ ] Secondary color used for hero background and footer CTA
- [ ] Accent color used for category chips
- [ ] Neutral colors used for text and borders

**Typography**
- [ ] All H1s use `text-4xl md:text-5xl lg:text-6xl font-bold`
- [ ] All H2s use `text-3xl font-bold`
- [ ] Card titles use `text-xl font-semibold` or `text-lg font-semibold`
- [ ] Body text uses `text-base` or `text-sm`

**Components**
- [ ] All cards use `.card` class
- [ ] All buttons use `.btn-primary` or `.btn-outline`
- [ ] All inputs use `.input` class
- [ ] All category tags use `.category-tag` class

**Responsive Breakpoints**
- [ ] Mobile (`< 768px`): All sections single column, stacked CTAs
- [ ] Tablet (`768px - 1024px`): 2-column grids, inline CTAs
- [ ] Desktop (`> 1024px`): 3-4 column grids, full layout
- [ ] No horizontal scroll on any screen size
- [ ] All text readable (min 14px on mobile)

**Images**
- [ ] All images have `alt` text
- [ ] OpenGraph images created:
  - [ ] `/public/images/og-homepage.jpg` (1200×630)
  - [ ] `/public/images/og-niches.jpg` (1200×630)
- [ ] Logo file present: `/public/images/logo.png`

---

### Phase 9: Performance ✅ / ❌

**Lighthouse Scores** (Mobile)
- [ ] Performance ≥ 90
- [ ] SEO ≥ 90
- [ ] Accessibility ≥ 95
- [ ] Best Practices ≥ 90

**Core Web Vitals**
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

**Build & Deploy**
- [ ] `npm run build` completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] No console warnings in production build
- [ ] All pages render in Next.js preview mode

---

### Phase 10: Content Quality ✅ / ❌

**Copy**
- [ ] All copy follows brand tone (professional, authoritative, educational)
- [ ] No hype or salesy language
- [ ] No typos or grammatical errors
- [ ] All microcopy consistent across components

**Data Accuracy**
- [ ] All niche descriptions accurate
- [ ] All city names spelled correctly
- [ ] All service names match across pages
- [ ] All internal links go to correct destinations

**Completeness**
- [ ] All 6 niche cards have copy
- [ ] All 5 category chips have copy
- [ ] All 12 issue cards have copy
- [ ] All sections have H2 headings and subheadings

---

### Phase 11: Sitemap & Redirects ✅ / ❌

**Sitemap** (`/app/sitemap.ts`)
- [ ] Legacy imports removed: `allPosts`, `allBusinesses`
- [ ] Homepage entry present: `/`
- [ ] Niche landing hub entry: `/niches/`
- [ ] All 6 niche hub entries: `/niches/{slug}/`
- [ ] Blog hub entry: `/blog/`
- [ ] All 5 category hub entries: `/blog/{category}/`
- [ ] All resource articles present: `/resources/{city}/{slug}/`
- [ ] Calculator entry: `/pricing/instant-quote/`
- [ ] All URLs use correct format (no trailing slashes unless necessary)
- [ ] Priority values set correctly (homepage = 1.0, hubs = 0.8, articles = 0.6)
- [ ] Change frequency set correctly (homepage = daily, articles = monthly)

**Redirects** (if needed)
- [ ] `/blog` redirects to new `/blog/` (if old route existed)
- [ ] `/businesses` returns 404 or redirects to `/niches/` (legacy route removed)
- [ ] No other broken links from old routes

---

### Phase 12: Final Verification ✅ / ❌

**Manual Testing**
- [ ] Homepage loads without errors
- [ ] All 6 niche hubs load
- [ ] Blog hub loads
- [ ] All 5 category hubs load
- [ ] All links clickable
- [ ] All CTAs functional
- [ ] Calculator link works (with `?src=` parameter)
- [ ] No 404 errors in console
- [ ] No missing images
- [ ] No layout shifts on page load

**Cross-Browser Testing**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

**Accessibility Testing**
- [ ] All interactive elements keyboard accessible (Tab navigation)
- [ ] All images have `alt` text
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Focus states visible on all interactive elements
- [ ] Screen reader friendly (test with VoiceOver or NVDA)
- [ ] No accessibility errors in Lighthouse

**Git Commits**
- [ ] Commit 1: "Archive out-of-scope luxury content - Homepage reset"
- [ ] Commit 2: "Add homepage components and niche/blog hub architecture"
- [ ] Commit 3: "Add issues taxonomy and data loading functions"
- [ ] Commit 4: "Update navigation and sitemap for 6-niche model"
- [ ] All commits have descriptive messages
- [ ] All commits follow conventional commit format (optional)

---

## Launch Readiness Summary

**Total Checklist Items**: 200+

**Required Pass Rate**: 100% (all items must pass)

**Go/No-Go Decision**:
- ✅ **GO**: All items checked, no critical issues
- ❌ **NO-GO**: Any critical issue (broken links, missing components, accessibility failures)

---

## Rollback Plan

If critical issues discovered post-launch:

### Immediate Actions
1. Revert to previous commit: `git revert HEAD`
2. Redeploy previous version
3. Document issue in `/outputs/home-reset/issues-log.md`
4. Fix issue in separate branch
5. Re-run acceptance checklist
6. Re-launch when all items pass

### Rollback Triggers
- Homepage returns 500 error
- Calculator broken or inaccessible
- 10+ broken internal links
- Lighthouse Performance < 70
- Accessibility score < 90
- SEO score < 85

---

## Post-Launch Monitoring

**Week 1**:
- [ ] Monitor Google Search Console for crawl errors
- [ ] Check sitemap indexing status
- [ ] Review Core Web Vitals data
- [ ] Monitor user feedback

**Week 2-4**:
- [ ] Review analytics for homepage traffic
- [ ] Check bounce rate on niche hubs
- [ ] Monitor calculator conversion rate
- [ ] Review keyword rankings for target terms

---

## Deliverables Checklist

**For Cursor Implementation**:
- [x] Content cleanup plan: `/outputs/home-reset/moved.md`
- [x] Homepage wireframe + component spec: `/outputs/home-spec/homepage.md`
- [x] Hubs & taxonomy: `/outputs/home-spec/taxonomy.md`
- [x] Issues data contract: `/outputs/home-spec/issues-contract.md`
- [x] SEO contracts: `/outputs/home-seo/contracts.md`
- [x] Acceptance checklist: `/outputs/home-spec/acceptance-checklist.md` (this file)

**All Files Ready**: ✅

---

## Final Notes

1. **Calculator Protection**: Reinforcing the rule—calculator at `/pricing/instant-quote/` must remain link-only. No logic changes. All links must include `?src=` tracking parameters.

2. **Component Reuse**: `<NicheGrid>`, `<CategoryStrip>`, `<IssuesGrid>`, and `<LatestGuides>` should be reused across multiple pages. Do not duplicate code.

3. **Data-Driven Content**: All dynamic content (niches, categories, issues) should pull from data files, not hardcoded in components.

4. **Progressive Enhancement**: Build homepage first, then niche landing hub, then individual niche hubs. Test each phase before moving to next.

5. **Testing Priority**: Focus on homepage and hood cleaning niche hub first (Phase 1 content is live). Other 5 niches can have stubbed content initially.

---

**Status**: Acceptance checklist complete ✅
**Ready for Cursor Implementation**: ✅
**Estimated Implementation Time**: 6-8 hours (for experienced dev with all specs)
