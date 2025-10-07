# Homepage Reset: Out-of-Scope Content Cleanup

## Content Audit Summary

**Current State:** Site still contains legacy luxury/wealth management content from initial demo
**Target State:** Clean homepage/nav showing only 6 in-scope service niches

---

## 6 In-Scope Niches (Keep)

1. ✅ **Restaurant Hood Cleaning** (primary)
   - Service page: `/services/restaurant-hood-cleaning/`
   - City pages: `/locations/{miami,boca-raton,fort-lauderdale}/hood-cleaning/`
   - Resources: `/resources/{city}/` (9 articles already built)

2. 🆕 **Grease Trap Cleaning** (to build)
3. 🆕 **Septic Tank Services** (to build)
4. 🆕 **Sealcoating** (to build)
5. 🆕 **Fire Extinguisher Services** (to build)
6. 🆕 **Sprinkler Repair** (to build)

---

## Out-of-Scope Content to Archive

### Legacy Luxury/Wealth Management Content

**Original Path** → **Archive Destination**

#### Content Files (MDX)
- `/content/posts/how-to/selecting-wealth-manager.mdx` → `/archive/2025-10-homepage-reset/content/posts/how-to/`
- `/content/posts/cost-guides/private-jet-membership-costs.mdx` → `/archive/2025-10-homepage-reset/content/posts/cost-guides/`
- `/content/posts/expert-advice/luxury-real-estate-investment.mdx` → `/archive/2025-10-homepage-reset/content/posts/expert-advice/`
- `/content/businesses/prestige-wealth-advisors.mdx` → `/archive/2025-10-homepage-reset/content/businesses/`
- `/content/businesses/elite-realty-group.mdx` → `/archive/2025-10-homepage-reset/content/businesses/`
- `/content/categories/how-to.mdx` → `/archive/2025-10-homepage-reset/content/categories/`

#### App Routes (Already Archived Previously, Verify)
These should have been moved in earlier cleanup—verify they're in archive:
- `/app/about/` → Already in `/archive/2025-10-reset/app/about/` ✓
- `/app/blog/` → Already in `/archive/2025-10-reset/app/blog/` ✓
- `/app/businesses/` → Already in `/archive/2025-10-reset/app/businesses/` ✓
- `/app/search/` → Already in `/archive/2025-10-reset/app/search/` ✓
- `/app/dashboard/` → Already in `/archive/2025-10-reset/app/dashboard/` ✓

**Status:** App routes cleanup already complete from previous phase ✅

---

## Content to Keep (In-Scope)

### Hood Cleaning (Phase 1 - Already Built)
**Service Pages:**
- `/app/services/restaurant-hood-cleaning/page.tsx` ✅

**Location Pages:**
- `/app/locations/miami/hood-cleaning/page.tsx` ✅
- `/app/locations/boca-raton/hood-cleaning/page.tsx` ✅
- `/app/locations/fort-lauderdale/hood-cleaning/page.tsx` ✅

**Resource Articles:**
- `/app/resources/miami/nfpa-96-hood-cleaning-checklist/page.tsx` ✅
- `/app/resources/miami/hood-cleaning-frequency-by-restaurant-type/page.tsx` ✅
- `/app/resources/miami/kitchen-exhaust-fan-problems-fixes/page.tsx` ✅
- (Plus 6 more Boca Raton + Fort Lauderdale resources) ✅

**Infrastructure:**
- `/app/pricing/instant-quote/page.tsx` ✅ (calculator - DO NOT TOUCH)
- `/app/resources/page.tsx` ✅ (hub page)

---

## Cleanup Commands

### Create Archive Directory
```bash
mkdir -p /Users/ghost/Localbizzlist/archive/2025-10-homepage-reset/content/{posts/{how-to,cost-guides,expert-advice},businesses,categories}
```

### Move Content Files
```bash
# Move legacy content posts
git mv /Users/ghost/Localbizzlist/content/posts/how-to/selecting-wealth-manager.mdx \
  /Users/ghost/Localbizzlist/archive/2025-10-homepage-reset/content/posts/how-to/

git mv /Users/ghost/Localbizzlist/content/posts/cost-guides/private-jet-membership-costs.mdx \
  /Users/ghost/Localbizzlist/archive/2025-10-homepage-reset/content/posts/cost-guides/

git mv /Users/ghost/Localbizzlist/content/posts/expert-advice/luxury-real-estate-investment.mdx \
  /Users/ghost/Localbizzlist/archive/2025-10-homepage-reset/content/posts/expert-advice/

# Move legacy business listings
git mv /Users/ghost/Localbizzlist/content/businesses/prestige-wealth-advisors.mdx \
  /Users/ghost/Localbizzlist/archive/2025-10-homepage-reset/content/businesses/

git mv /Users/ghost/Localbizzlist/content/businesses/elite-realty-group.mdx \
  /Users/ghost/Localbizzlist/archive/2025-10-homepage-reset/content/businesses/

# Move legacy category definitions
git mv /Users/ghost/Localbizzlist/content/categories/how-to.mdx \
  /Users/ghost/Localbizzlist/archive/2025-10-homepage-reset/content/categories/

# Commit cleanup
git add -A
git commit -m "Archive out-of-scope luxury content - Homepage reset for 6 service niches"
```

---

## Sitemap Cleanup

### Current Sitemap Issues (from selection)

**File:** `/app/sitemap.ts`

**Problems:**
1. References `allPosts` and `allBusinesses` from Contentlayer (legacy MDX collections)
2. Includes `/blog` and `/businesses` routes (archived)
3. Resource article URLs have wrong slugs:
   - ❌ `/resources/miami/exhaust-fan-problems-and-fixes` (hyphenated)
   - ✅ `/resources/miami/kitchen-exhaust-fan-problems-fixes` (correct from outlines)

**Action Required:** Clean sitemap to remove:
- `allPosts` and `allBusinesses` imports
- Blog/businesses route references
- Fix resource article URLs to match actual file structure

---

## Post-Cleanup Site Structure

```
/
├── page.tsx                           🆕 NEW HOMEPAGE (to build)
│
├── /niches/                           🆕 NEW NICHE HUB
│   ├── page.tsx                       🆕 Niche grid landing
│   ├── /restaurant-hood-cleaning/
│   │   └── page.tsx                   🆕 Niche hub (filters, issues, resources)
│   ├── /grease-trap-cleaning/
│   ├── /septic-tank-services/
│   ├── /sealcoating/
│   ├── /fire-extinguisher-services/
│   └── /sprinkler-repair/
│
├── /services/
│   └── /restaurant-hood-cleaning/     ✅ KEEP (Phase 1)
│
├── /locations/
│   ├── /miami/hood-cleaning/          ✅ KEEP
│   ├── /boca-raton/hood-cleaning/     ✅ KEEP
│   └── /fort-lauderdale/hood-cleaning/✅ KEEP
│
├── /resources/                        ✅ KEEP (9 articles + hub)
│
└── /pricing/instant-quote/            ✅ KEEP (calculator - untouched)
```

---

## Verification Checklist

After cleanup:

- [ ] All legacy luxury/wealth MDX files in `/archive/2025-10-homepage-reset/`
- [ ] No references to `allPosts` or `allBusinesses` in active code
- [ ] Sitemap cleaned (only hood cleaning + resources + pricing)
- [ ] Homepage ready for rebuild (no legacy content)
- [ ] Nav ready for 6-niche model
- [ ] Calculator untouched at `/pricing/instant-quote/`

---

## Summary

**Files to Archive:** 6 MDX files (3 posts + 2 businesses + 1 category)
**Routes Already Archived:** 5 app routes (from previous cleanup)
**Files to Keep:** 14 (1 service + 3 cities + 9 resources + 1 calculator)
**New Routes to Build:** 8 (1 homepage + 1 niche hub + 6 niche pages)

**Risk:** Low (all archiving, no deletion)
**Rollback:** Git revert if needed

---

**Status:** Ready for Cursor execution
**Next:** Build homepage + niche hub specs
