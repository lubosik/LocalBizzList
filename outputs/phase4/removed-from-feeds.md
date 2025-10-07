# Phase 4: Demo Content Purge from Feeds

## Purpose

Identify and archive all remaining demo/luxury content (private aviation, wealth management, luxury real estate) that may surface in feeds, search results, or components. This ensures only Restaurant Hood Cleaning content is visible in production.

---

## Files to Archive

### 1. Business Listings (Luxury/Wealth Demo Content)

**Path**: `/content/businesses/prestige-wealth-advisors.mdx`
**Reason**: Demo content for wealth management vertical (out of scope)
**Category**: Wealth Management
**Action**: Move to `/archive/2025-10-feed-reset/content/businesses/`
**Impact**: Removes from BusinessGrid component if still referenced

**Path**: `/content/businesses/elite-realty-group.mdx`
**Reason**: Demo content for luxury real estate vertical (out of scope)
**Category**: Luxury Real Estate
**Action**: Move to `/archive/2025-10-feed-reset/content/businesses/`
**Impact**: Removes from BusinessGrid component if still referenced

---

### 2. Category Pages (Legacy Demo Content)

**Path**: `/content/categories/how-to.mdx`
**Reason**: Generic "how-to" category not aligned with 6-niche model
**Category**: How-To Guides
**Action**: Move to `/archive/2025-10-feed-reset/content/categories/`
**Impact**: Removes from category navigation if still referenced

---

### 3. App Routes (Legacy Business Directory Pages)

**Path**: `/app/businesses/page.tsx`
**Reason**: References `allBusinesses` from Contentlayer (legacy system being removed)
**Route**: `/businesses`
**Action**: Move to `/archive/2025-10-feed-reset/app/businesses/`
**Impact**: Removes business directory page (404 on /businesses)

**Path**: `/app/businesses/[slug]/page.tsx`
**Reason**: Dynamic business detail pages (legacy)
**Route**: `/businesses/{slug}`
**Action**: Move to `/archive/2025-10-feed-reset/app/businesses/`
**Impact**: Removes individual business pages

**Path**: `/app/businesses/add/page.tsx`
**Reason**: Business submission form (legacy)
**Route**: `/businesses/add`
**Action**: Move to `/archive/2025-10-feed-reset/app/businesses/`
**Impact**: Removes business submission functionality

**Path**: `/app/about/page.tsx`
**Reason**: Generic "About Us" page (to be replaced with /content/trust/ package)
**Route**: `/about`
**Action**: Move to `/archive/2025-10-feed-reset/app/about/`
**Impact**: 404 on /about (will be replaced with /trust pages)

**Path**: `/app/blog/[slug]/page.tsx`
**Reason**: Legacy blog post route (conflicts with new /blog hub architecture)
**Route**: `/blog/{slug}`
**Action**: Move to `/archive/2025-10-feed-reset/app/blog/`
**Impact**: Removes old blog post pages (resources now at /resources/{city}/{slug})

**Path**: `/app/search/page.tsx`
**Reason**: Search functionality not yet implemented in 6-niche model
**Route**: `/search`
**Action**: Move to `/archive/2025-10-feed-reset/app/search/` (can be restored in Phase 2)
**Impact**: 404 on /search

---

### 4. Components (Legacy Display Components)

**Path**: `/components/BusinessGrid.tsx`
**Reason**: Component for displaying business listings (legacy)
**Used By**: `/app/businesses/page.tsx` (being archived)
**Action**: Move to `/archive/2025-10-feed-reset/components/`
**Impact**: Component no longer referenced

**Path**: `/components/BusinessCard.tsx`
**Reason**: Component for business card display (legacy)
**Used By**: `BusinessGrid.tsx` (being archived)
**Action**: Move to `/archive/2025-10-feed-reset/components/`
**Impact**: Component no longer referenced

**Path**: `/components/ArticleGrid.tsx`
**Reason**: Component for legacy blog article grid (replaced by LatestGuides)
**Used By**: May be referenced in archived blog routes
**Action**: Move to `/archive/2025-10-feed-reset/components/`
**Impact**: Component replaced by new home/LatestGuides.tsx

**Path**: `/components/Hero.tsx`
**Reason**: Generic hero component (replaced by home/HomeHero.tsx)
**Used By**: Legacy pages (businesses, about)
**Action**: Move to `/archive/2025-10-feed-reset/components/`
**Impact**: Component replaced by specialized home/HomeHero.tsx

**Path**: `/components/SearchBar.tsx`
**Reason**: Search component not yet integrated
**Used By**: `/app/search/page.tsx` (being archived)
**Action**: Move to `/archive/2025-10-feed-reset/components/` (can be restored in Phase 2)
**Impact**: Component no longer referenced

---

### 5. Already Archived Content (Verify Location)

These files were archived in previous cleanup (Jan 2025) - verify they're not still surfacing:

**Path**: `/archive/2025-01-feed-reset/selecting-wealth-manager.mdx`
**Original**: `/content/posts/how-to/selecting-wealth-manager.mdx`
**Status**: ✅ Already archived
**Verify**: Not referenced in sitemap.ts or any active routes

**Path**: `/archive/2025-01-feed-reset/private-jet-membership-costs.mdx`
**Original**: `/content/posts/cost-guides/private-jet-membership-costs.mdx`
**Status**: ✅ Already archived
**Verify**: Not referenced in sitemap.ts or any active routes

**Path**: `/archive/2025-01-feed-reset/luxury-real-estate-investment.mdx`
**Original**: `/content/posts/expert-advice/luxury-real-estate-investment.mdx`
**Status**: ✅ Already archived
**Verify**: Not referenced in sitemap.ts or any active routes

---

## Archive Commands

```bash
# Create archive directory for Phase 4
mkdir -p archive/2025-10-feed-reset/content/businesses
mkdir -p archive/2025-10-feed-reset/content/categories
mkdir -p archive/2025-10-feed-reset/app/businesses
mkdir -p archive/2025-10-feed-reset/app/about
mkdir -p archive/2025-10-feed-reset/app/blog
mkdir -p archive/2025-10-feed-reset/app/search
mkdir -p archive/2025-10-feed-reset/components

# Move business content
git mv content/businesses/prestige-wealth-advisors.mdx archive/2025-10-feed-reset/content/businesses/
git mv content/businesses/elite-realty-group.mdx archive/2025-10-feed-reset/content/businesses/

# Move category content
git mv content/categories/how-to.mdx archive/2025-10-feed-reset/content/categories/

# Move app routes
git mv app/businesses archive/2025-10-feed-reset/app/
git mv app/about archive/2025-10-feed-reset/app/
git mv app/blog/\[slug\] archive/2025-10-feed-reset/app/blog/
git mv app/search archive/2025-10-feed-reset/app/

# Move legacy components
git mv components/BusinessGrid.tsx archive/2025-10-feed-reset/components/
git mv components/BusinessCard.tsx archive/2025-10-feed-reset/components/
git mv components/ArticleGrid.tsx archive/2025-10-feed-reset/components/
git mv components/Hero.tsx archive/2025-10-feed-reset/components/
git mv components/SearchBar.tsx archive/2025-10-feed-reset/components/

# Commit archive
git add -A
git commit -m "Phase 4: Archive demo/legacy content from feeds

Remove luxury business listings (wealth management, real estate), legacy
business directory routes, and unused components. Keeps only hood cleaning
content visible for Local Pack sprint.

Archived paths:
- /content/businesses/*.mdx (2 files)
- /content/categories/how-to.mdx
- /app/businesses/* (3 routes)
- /app/about/
- /app/blog/[slug]/
- /app/search/
- /components/* (5 legacy components)

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Post-Cleanup Site Structure

### Active Routes (Hood Cleaning Only)
```
/ (Homepage - clean, 6 niches)
/niches/ (Niche landing hub)
/niches/restaurant-hood-cleaning/ (Primary niche hub)
/niches/grease-trap-cleaning/ (Stubbed)
/niches/septic-tank-services/ (Stubbed)
/niches/sealcoating/ (Stubbed)
/niches/fire-extinguisher-services/ (Stubbed)
/niches/sprinkler-repair/ (Stubbed)

/services/restaurant-hood-cleaning/ (Service page)

/locations/miami/hood-cleaning/ (City page)
/locations/boca-raton/hood-cleaning/ (City page)
/locations/fort-lauderdale/hood-cleaning/ (City page)

/resources/ (Resources hub)
/resources/miami/nfpa-96-hood-cleaning-checklist/
/resources/miami/hood-cleaning-frequency-by-restaurant-type/
/resources/miami/exhaust-fan-problems-and-fixes/
/resources/boca-raton/nfpa-96-hood-cleaning-checklist/
/resources/boca-raton/hood-cleaning-frequency-by-restaurant-type/
/resources/boca-raton/exhaust-fan-problems-and-fixes/
/resources/fort-lauderdale/nfpa-96-hood-cleaning-checklist/
/resources/fort-lauderdale/hood-cleaning-frequency-by-restaurant-type/
/resources/fort-lauderdale/exhaust-fan-problems-and-fixes/

/pricing/instant-quote/ (Calculator - untouched)

/dashboard/ (SEO feasibility dashboard - internal tool, noindex)
```

### Archived Routes (404)
```
/businesses (removed)
/businesses/{slug} (removed)
/businesses/add (removed)
/about (removed - will be replaced with /trust/)
/blog/{slug} (removed - resources now at /resources/)
/search (removed - Phase 2 feature)
```

---

## Feed Component Audit

### Components That Display Content Lists

**✅ Clean Components** (only show hood cleaning):
- `/components/home/LatestGuides.tsx` - Uses mock data (6 hood cleaning articles)
- `/components/home/IssuesGrid.tsx` - Uses issues from `/lib/data/issues.ts` (hood cleaning issues)
- `/components/home/NicheGrid.tsx` - Shows all 6 niches (hood cleaning primary)
- `/components/home/CategoryStrip.tsx` - Shows 5 categories (no demo content)

**🗑️ Archived Components** (referenced demo content):
- `/components/BusinessGrid.tsx` - Showed luxury businesses (ARCHIVED)
- `/components/ArticleGrid.tsx` - Showed legacy blog posts (ARCHIVED)

### Data Sources to Verify

**✅ Clean Data**:
- `/lib/data/niches.ts` - 6 service niches (hood cleaning, grease trap, septic, etc.)
- `/lib/data/categories.ts` - 5 blog categories (cost guides, compliance, etc.)
- `/lib/data/issues.ts` - Issues taxonomy (hood cleaning + 5 other niches)
- `/content/issues/*.yml` - Issue definitions (24+ issues across 6 niches)

**🗑️ Legacy Data** (Contentlayer):
- `allBusinesses` - From Contentlayer (no longer imported)
- `allPosts` - From Contentlayer (no longer imported)

---

## Sitemap Verification

**File**: `/app/sitemap.ts`

**Check for Legacy Imports**:
```typescript
// ❌ REMOVE if present:
import { allPosts, allBusinesses } from 'contentlayer/generated'

// ✅ KEEP:
// Static routes only (/, /niches/, /services/, /locations/, /resources/, /pricing/)
```

**Expected Sitemap Entries** (Hood Cleaning Only):
- Homepage: `/`
- Niche landing: `/niches/`
- Hood cleaning hub: `/niches/restaurant-hood-cleaning/`
- Service page: `/services/restaurant-hood-cleaning/`
- 3 city pages: `/locations/{miami,boca-raton,fort-lauderdale}/hood-cleaning/`
- 9 resource articles: `/resources/{city}/{slug}/`
- Resources hub: `/resources/`
- Calculator: `/pricing/instant-quote/`

**Total URLs**: ~18 (all hood cleaning related)

---

## Navigation Verification

**File**: `/components/Header.tsx`

**Check for Legacy Links**:
```typescript
// ❌ REMOVE if present:
<Link href="/businesses">Business Directory</Link>
<Link href="/about">About</Link>
<Link href="/search">Search</Link>

// ✅ KEEP:
<Link href="/niches/">Services</Link>
<Link href="/resources/">Resources</Link>
<Link href="/pricing/instant-quote?src=nav">Get Quote</Link>
```

**File**: `/components/Footer.tsx`

**Check for Legacy Links**:
```typescript
// ❌ REMOVE if present:
<Link href="/businesses">Businesses</Link>
<Link href="/about">About</Link>

// ✅ KEEP:
// Links to 6 niche hubs
// Links to 5 category pages
// Links to 3 city pages
// Calculator link
```

---

## Acceptance Checklist

### Content Cleanup
- [ ] 2 business MDX files moved to archive
- [ ] 1 category MDX file moved to archive
- [ ] 6 app route directories moved to archive
- [ ] 5 legacy components moved to archive
- [ ] Git commit created with archive message

### Verification
- [ ] Homepage renders without errors
- [ ] No references to `allBusinesses` in codebase
- [ ] No references to `allPosts` in codebase
- [ ] No luxury/wealth content visible on homepage
- [ ] /businesses route returns 404
- [ ] /about route returns 404 (will be replaced)
- [ ] /search route returns 404
- [ ] Sitemap.ts contains only hood cleaning URLs
- [ ] Header navigation contains no legacy links
- [ ] Footer navigation contains no legacy links

### Build Check
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors related to removed files
- [ ] No Contentlayer errors
- [ ] All active routes render correctly

---

## Impact Summary

**Files Archived**: 13 total
- 2 MDX business files
- 1 MDX category file
- 6 app route files/directories
- 5 component files

**Routes Removed**: 7
- `/businesses`
- `/businesses/{slug}`
- `/businesses/add`
- `/about`
- `/blog/{slug}`
- `/search`

**Active Content**: Hood Cleaning only
- 1 service page
- 3 city pages
- 9 resource articles
- 1 calculator (untouched)
- Homepage + hubs

**Next Phase**: GBP setup, citations, E-E-A-T trust bundle

---

**Status**: Feed purge plan complete ✅
**Ready for Execution**: Yes
**Estimated Time**: 15-20 minutes (archive + verify)
