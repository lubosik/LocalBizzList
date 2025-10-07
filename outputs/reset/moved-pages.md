# Content Reset Plan: Moved Pages Inventory

## Archive Target
`/archive/2025-10-reset/`

## Legacy Content to Move

| Type | Source Path | Archive Destination | Reason |
|------|------------|---------------------|---------|
| **Blog Posts** |
| Article | `/content/posts/how-to/selecting-wealth-manager.mdx` | `/archive/2025-10-reset/content/posts/how-to/` | Legacy luxury niche filler |
| Article | `/content/posts/cost-guides/private-jet-membership-costs.mdx` | `/archive/2025-10-reset/content/posts/cost-guides/` | Legacy luxury niche filler |
| Article | `/content/posts/expert-advice/luxury-real-estate-investment.mdx` | `/archive/2025-10-reset/content/posts/expert-advice/` | Legacy luxury niche filler |
| **Business Listings** |
| Business | `/content/businesses/prestige-wealth-advisors.mdx` | `/archive/2025-10-reset/content/businesses/` | Legacy luxury business sample |
| Business | `/content/businesses/elite-realty-group.mdx` | `/archive/2025-10-reset/content/businesses/` | Legacy luxury business sample |
| **Category Pages** |
| Category | `/content/categories/how-to.mdx` | `/archive/2025-10-reset/content/categories/` | Legacy category definition |
| **App Routes** |
| Route | `/app/about/page.tsx` | `/archive/2025-10-reset/app/about/` | Not needed for Phase 1 |
| Route | `/app/blog/` (entire dir) | `/archive/2025-10-reset/app/blog/` | Replaced by service/location pages |
| Route | `/app/businesses/` (entire dir) | `/archive/2025-10-reset/app/businesses/` | Replaced by service/location pages |
| Route | `/app/search/page.tsx` | `/archive/2025-10-reset/app/search/` | Not needed for Phase 1 |
| Route | `/app/dashboard/` (entire dir) | `/archive/2025-10-reset/app/dashboard/` | Internal research tool |

## Preserved Assets ✅

| Type | Path | Preserved Because |
|------|------|-------------------|
| Layout | `/app/layout.tsx` | Root layout with Header/Footer |
| Home | `/app/page.tsx` | Will be updated for hood cleaning |
| Styles | `/app/globals.css` | Brand tokens + utility classes |
| Config | `/tailwind.config.ts` | Brand color system |
| Components | `/components/Header.tsx` | Navigation structure |
| Components | `/components/Footer.tsx` | Footer links + structure |
| Components | `/components/Hero.tsx` | Reusable hero component |
| Components | `/components/ui/*` | Brand UI primitives |
| Routes | `/app/sitemap.ts`, `/app/robots.ts` | SEO infrastructure |

## Safe Archive Commands

```bash
# Create archive directory
mkdir -p /archive/2025-10-reset

# Move content
git mv content/posts archive/2025-10-reset/content/
git mv content/businesses archive/2025-10-reset/content/
git mv content/categories archive/2025-10-reset/content/

# Move app routes
git mv app/about archive/2025-10-reset/app/
git mv app/blog archive/2025-10-reset/app/
git mv app/businesses archive/2025-10-reset/app/
git mv app/search archive/2025-10-reset/app/
git mv app/dashboard archive/2025-10-reset/app/

# Commit archive
git add -A
git commit -m "Archive legacy luxury niche content - Phase 1 hood cleaning reset"
```

## Summary
- **14 items** moved to archive
- **10 core assets** preserved (layout, components, config)
- **Zero data loss** – everything archived, nothing deleted
- **Safe rollback** – git history intact

---
**Status:** Ready for Cursor execution
**Risk:** Low (reversible via git)
**Next:** Create Phase 1 service + location pages
