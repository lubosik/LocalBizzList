# IA Audit: Extra Landing Pages Cleanup

## Current Status (Post-Cursor Implementation)

### ✅ Phase-1 Landing Pages CORRECT (4 pages)

| Page Type | URL | File Path | Status |
|-----------|-----|-----------|--------|
| Service | `/services/restaurant-hood-cleaning/` | `/app/services/restaurant-hood-cleaning/page.tsx` | ✅ Live |
| Location | `/locations/miami/hood-cleaning/` | `/app/locations/miami/hood-cleaning/page.tsx` | ✅ Live |
| Location | `/locations/boca-raton/hood-cleaning/` | `/app/locations/boca-raton/hood-cleaning/page.tsx` | ✅ Live |
| Location | `/locations/fort-lauderdale/hood-cleaning/` | `/app/locations/fort-lauderdale/hood-cleaning/page.tsx` | ✅ Live |

**Calculator Protected:**
- ✅ `/app/pricing/instant-quote/page.tsx` exists and untouched (verified 11,469 bytes)

---

## ❌ Legacy Routes NOT Archived by Cursor

Cursor **did not execute** the archive plan from `/outputs/reset/moved-pages.md`. The following legacy routes still exist:

### Legacy App Routes to Archive

| Route Path | Files Present | Archive Destination |
|------------|---------------|---------------------|
| `/app/about/` | `page.tsx` (5,789 bytes) | `/archive/2025-10-reset/app/about/` |
| `/app/blog/` | `page.tsx` + `[slug]/page.tsx` | `/archive/2025-10-reset/app/blog/` |
| `/app/businesses/` | `page.tsx` + `[slug]/page.tsx` + `add/page.tsx` | `/archive/2025-10-reset/app/businesses/` |
| `/app/search/` | `page.tsx` (5,884 bytes) | `/archive/2025-10-reset/app/search/` |
| `/app/dashboard/` | `page.tsx` + `DashboardPageClient.tsx` + `[niche]/` | `/archive/2025-10-reset/app/dashboard/` |

### Legacy Content Files to Archive

| Content Path | Files | Archive Destination |
|--------------|-------|---------------------|
| `/content/posts/` | 3 MDX files (wealth management articles) | `/archive/2025-10-reset/content/posts/` |
| `/content/businesses/` | 2 MDX files (luxury business samples) | `/archive/2025-10-reset/content/businesses/` |
| `/content/categories/` | 1 MDX file (category definition) | `/archive/2025-10-reset/content/categories/` |

---

## Cleanup Plan (Execute Before Resources)

### Step 1: Create Archive Directory Structure

```bash
mkdir -p /Users/ghost/Localbizzlist/archive/2025-10-reset/app
mkdir -p /Users/ghost/Localbizzlist/archive/2025-10-reset/content
```

### Step 2: Move Legacy App Routes

```bash
# Move legacy app directories to archive
git mv /Users/ghost/Localbizzlist/app/about /Users/ghost/Localbizzlist/archive/2025-10-reset/app/
git mv /Users/ghost/Localbizzlist/app/blog /Users/ghost/Localbizzlist/archive/2025-10-reset/app/
git mv /Users/ghost/Localbizzlist/app/businesses /Users/ghost/Localbizzlist/archive/2025-10-reset/app/
git mv /Users/ghost/Localbizzlist/app/search /Users/ghost/Localbizzlist/archive/2025-10-reset/app/
git mv /Users/ghost/Localbizzlist/app/dashboard /Users/ghost/Localbizzlist/archive/2025-10-reset/app/
```

### Step 3: Move Legacy Content Files

```bash
# Move legacy content directories to archive
git mv /Users/ghost/Localbizzlist/content/posts /Users/ghost/Localbizzlist/archive/2025-10-reset/content/
git mv /Users/ghost/Localbizzlist/content/businesses /Users/ghost/Localbizzlist/archive/2025-10-reset/content/
git mv /Users/ghost/Localbizzlist/content/categories /Users/ghost/Localbizzlist/archive/2025-10-reset/content/
```

### Step 4: Commit Archive

```bash
git add -A
git commit -m "Archive legacy luxury niche routes - Phase 1 cleanup (Cursor missed this step)"
```

---

## Verification Checklist

After executing cleanup:

- [ ] `/app/about/` does NOT exist
- [ ] `/app/blog/` does NOT exist
- [ ] `/app/businesses/` does NOT exist
- [ ] `/app/search/` does NOT exist
- [ ] `/app/dashboard/` does NOT exist
- [ ] `/content/posts/` does NOT exist
- [ ] `/content/businesses/` does NOT exist
- [ ] `/content/categories/` does NOT exist
- [ ] All archived files exist in `/archive/2025-10-reset/`
- [ ] 4 Phase-1 landing pages still accessible (service + 3 cities)
- [ ] Calculator still functional at `/pricing/instant-quote`

---

## Final App Structure (Post-Cleanup)

```
/app/
├── layout.tsx                               ✅ Preserved
├── page.tsx                                 ✅ Preserved (homepage)
├── globals.css                              ✅ Preserved
├── robots.ts                                ✅ Preserved
├── sitemap.ts                               ✅ Preserved
├── /services/
│   └── /restaurant-hood-cleaning/
│       └── page.tsx                         ✅ Phase-1 service page
├── /locations/
│   ├── /miami/
│   │   └── /hood-cleaning/
│   │       └── page.tsx                     ✅ Phase-1 city page
│   ├── /boca-raton/
│   │   └── /hood-cleaning/
│   │       └── page.tsx                     ✅ Phase-1 city page
│   └── /fort-lauderdale/
│       └── /hood-cleaning/
│           └── page.tsx                     ✅ Phase-1 city page
├── /pricing/
│   └── /instant-quote/
│       └── page.tsx                         ✅ Calculator (untouched)
└── /resources/                              🆕 NEW (for resource articles)
```

---

## Impact Assessment

### Routes That Will 404 After Cleanup

- `/about` → 404 (acceptable, not Phase-1 scope)
- `/blog/*` → 404 (replaced by `/resources/*` articles)
- `/businesses/*` → 404 (not Phase-1 scope, hood cleaning only)
- `/search` → 404 (not Phase-1 scope)
- `/dashboard/*` → 404 (internal research tool, move to subdomain later)

### Routes That Remain Functional

- `/` (homepage)
- `/services/restaurant-hood-cleaning/`
- `/locations/miami/hood-cleaning/`
- `/locations/boca-raton/hood-cleaning/`
- `/locations/fort-lauderdale/hood-cleaning/`
- `/pricing/instant-quote`
- `/sitemap.xml`
- `/robots.txt`

---

## Recommendation

**Execute cleanup BEFORE building resource articles.** Legacy routes create confusion:

1. **SEO issue:** Old `/blog/*` routes may index, compete with new `/resources/*` articles
2. **Nav pollution:** Header still links to `/businesses/add` (doesn't align with hood cleaning focus)
3. **Brand inconsistency:** About page references "luxury services" (contradicts NFPA 96 messaging)

**Action:** Run git commands above, verify 404s, then proceed to resource article build.

---

## Status

- **Cursor Execution:** ❌ Partial (built 4 pages, skipped archive step)
- **Phase-1 Pages:** ✅ 4/4 live and correct
- **Calculator:** ✅ Protected (untouched)
- **Legacy Cleanup:** ❌ NOT executed (Cursor missed)
- **Ready for Resources:** ⏸️ Pending cleanup

**Next:** Execute cleanup, then define Resource Article spec.
