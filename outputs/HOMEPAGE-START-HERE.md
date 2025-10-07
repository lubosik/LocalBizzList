# Homepage Reset: Complete Implementation Guide

## Overview

This folder contains everything Cursor needs to build the new LocalBizzList homepage and hub architecture for 6 service niches. All legacy luxury/wealth management content will be archived and replaced with a clean, niche-focused structure.

---

## What You're Building

**New Homepage Structure**:
1. Hero → Browse 6 niches or get instant quote
2. Niche Grid → 6 service cards (hood cleaning, grease trap, septic, sealcoating, fire extinguisher, sprinkler)
3. Category Strip → 5 blog categories (cost guides, compliance, maintenance, emergency, planning)
4. Common Issues Grid → 12 problem/solution cards from issues taxonomy
5. Latest Guides → 6 newest resource articles across all niches
6. Footer CTA → "Need a certificate tonight?" + calculator link

**New Hub Pages**:
- `/niches/` - Landing hub for all 6 service niches
- `/niches/{slug}/` - Individual niche hubs with filtered issues and resources
- `/blog/` - Blog hub with all resource articles
- `/blog/{category}/` - Category-filtered article hubs

**6 In-Scope Niches**:
1. Restaurant Hood Cleaning (primary - Phase 1 content live)
2. Grease Trap Cleaning (to build)
3. Septic Tank Services (to build)
4. Sealcoating & Paving (to build)
5. Fire Extinguisher Services (to build)
6. Sprinkler Repair & Testing (to build)

---

## File Roadmap (Read in Order)

### Step 1: Content Cleanup (Critical First Step)
📄 **[moved.md](home-reset/moved.md)**
- Lists all out-of-scope legacy content to archive
- Provides git commands for safe archiving
- Verifies in-scope content preserved (hood cleaning pages, calculator)
- **Action**: Archive 6 MDX files before building new pages

---

### Step 2: Homepage Components (Build These First)
📄 **[homepage.md](home-spec/homepage.md)**
- Complete wireframe with visual structure
- 6 section specifications (hero, niche grid, category strip, issues, guides, footer CTA)
- Component interfaces with TypeScript props
- Responsive breakpoint definitions
- Design token usage (no hardcoded colors)
- **Action**: Create 6 new components in `/components/home/`

---

### Step 3: Hub Architecture (Build After Homepage)
📄 **[taxonomy.md](home-spec/taxonomy.md)**
- Complete site structure with all routes
- 6 niche definitions with icons and descriptions
- 5 blog category definitions
- Hub page specifications:
  - Niche Landing Hub (`/niches/page.tsx`)
  - Individual Niche Hubs (`/niches/[slug]/page.tsx`)
  - Blog Hub (`/blog/page.tsx`)
  - Category Hubs (`/blog/[category]/page.tsx`)
- Data model specifications for niches, categories, cities
- **Action**: Create hub pages and data files in `/lib/data/`

---

### Step 4: Issues Taxonomy (Data Contract)
📄 **[issues-contract.md](home-spec/issues-contract.md)**
- YAML schema for issues taxonomy
- 6 example files (one per niche) with 4-6 issues each
- TypeScript interfaces
- Data loading functions
- Validation rules
- **Action**: Create `/content/issues/` directory with 6 YAML files

---

### Step 5: SEO & Copy (Critical for Launch)
📄 **[contracts.md](home-seo/contracts.md)**
- Exact page titles and meta descriptions (all ≤ 60/160 chars)
- JSON-LD schema examples for all page types
- Section copy for hero, niches, categories, CTAs
- Internal linking requirements (32 links on homepage)
- Niche-specific copy for all 6 hubs
- **Action**: Add metadata to all pages, render schema in `<head>`

---

### Step 6: Acceptance Testing (Before Launch)
📄 **[acceptance-checklist.md](home-spec/acceptance-checklist.md)**
- 200+ binary pass/fail checks across 12 phases
- Content cleanup verification
- Component rendering checks
- SEO metadata validation
- Internal linking verification
- Performance targets (Lighthouse ≥90 Performance, ≥90 SEO, ≥95 A11y)
- Rollback plan if critical issues found
- **Action**: Run through all checklist items before deploying

---

## Implementation Priority

### Phase 1: Foundation (Day 1)
1. ✅ Archive legacy content (moved.md)
2. ✅ Create data files (niches.ts, categories.ts, cities.ts)
3. ✅ Create issues YAML files (6 files with 4-6 issues each)
4. ✅ Install dependencies: `npm install js-yaml @types/js-yaml`

### Phase 2: Homepage (Day 2)
5. ✅ Create 6 homepage components
6. ✅ Update `/app/page.tsx` with new structure
7. ✅ Add homepage metadata and schema
8. ✅ Test all 32 internal links

### Phase 3: Hubs (Day 3)
9. ✅ Create Niche Landing Hub (`/niches/page.tsx`)
10. ✅ Create Individual Niche Hub template (`/niches/[slug]/page.tsx`)
11. ✅ Create Blog Hub (`/blog/page.tsx`)
12. ✅ Create Category Hub template (`/blog/[category]/page.tsx`)
13. ✅ Add metadata and schema to all hubs

### Phase 4: Navigation & Testing (Day 4)
14. ✅ Update Header component with new nav structure
15. ✅ Update Footer component with new links
16. ✅ Update sitemap.ts (remove legacy imports)
17. ✅ Run acceptance checklist
18. ✅ Run Lighthouse tests
19. ✅ Deploy to production

---

## Critical Rules (DO NOT VIOLATE)

### 1. Calculator Protection 🚨
- **File**: `/app/pricing/instant-quote/page.tsx`
- **Rule**: Link-only, no logic changes
- **All Links Must Include**: `?src=` tracking parameter
  - Homepage hero: `?src=home_hero`
  - Homepage footer: `?src=home_footer`
  - Niche hub hero: `?src=niche_{slug}`
  - Niche hub footer: `?src=niche_{slug}_footer`
  - Nav: `?src=nav`
  - Footer: `?src=footer`

### 2. Component Reuse 🔄
- Do NOT duplicate code for `<NicheGrid>`, `<CategoryStrip>`, `<IssuesGrid>`, `<LatestGuides>`
- These components should be imported and reused across multiple pages

### 3. Design Tokens Only 🎨
- NO hardcoded colors (e.g., `#3B82F6`, `rgb(59, 130, 246)`)
- Use Tailwind config tokens: `bg-primary`, `text-secondary`, `border-neutral-200`
- Refer to `tailwind.config.ts` for all color definitions

### 4. No Contentlayer References 🗑️
- Remove all imports: `allPosts`, `allBusinesses`
- Remove Contentlayer from sitemap.ts
- Legacy MDX system is being replaced with YAML data files

### 5. Data-Driven Content 📊
- All niches, categories, issues pull from data files
- NO hardcoded content in components
- Use TypeScript interfaces for type safety

---

## Quick Reference: File Locations

### Components to Create
```
/components/home/
├── HomeHero.tsx
├── NicheGrid.tsx
├── NicheCard.tsx
├── CategoryStrip.tsx
├── IssuesGrid.tsx
├── IssueCard.tsx
├── LatestGuides.tsx
├── GuideCard.tsx
└── FooterCTA.tsx
```

### Data Files to Create
```
/lib/data/
├── niches.ts        # 6 niche definitions
├── categories.ts    # 5 category definitions
├── cities.ts        # 3 city definitions
└── issues.ts        # Data loading functions

/lib/types/
└── issues.ts        # TypeScript interfaces

/content/issues/
├── hood-cleaning.yml
├── grease-trap.yml
├── septic-tank.yml
├── sealcoating.yml
├── fire-extinguisher.yml
└── sprinkler-repair.yml
```

### Pages to Create/Update
```
/app/
├── page.tsx                          # UPDATE: New homepage
├── /niches/
│   ├── page.tsx                      # CREATE: Niche landing hub
│   └── [slug]/page.tsx               # CREATE: Individual niche hubs
├── /blog/
│   ├── page.tsx                      # CREATE: Blog hub
│   └── [category]/page.tsx           # CREATE: Category hubs
└── sitemap.ts                        # UPDATE: Remove legacy imports
```

### Components to Update
```
/components/
├── Header.tsx                        # UPDATE: New nav structure
└── Footer.tsx                        # UPDATE: New links
```

---

## Dependencies Required

```bash
# Already installed (verify):
npm list next react react-dom typescript tailwindcss lucide-react

# New dependencies:
npm install js-yaml @types/js-yaml
```

---

## Testing Checklist (Quick Version)

### Before Committing
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] All pages render in dev mode (`npm run dev`)

### Before Deploying
- [ ] Lighthouse Performance ≥ 90 (mobile)
- [ ] Lighthouse SEO ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] All 32 homepage links work
- [ ] Calculator link includes `?src=` parameter
- [ ] No 404 errors
- [ ] All JSON-LD schemas validate at https://validator.schema.org/

---

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/homepage-reset

# After each phase, commit:
git add -A
git commit -m "Phase 1: Archive legacy content and create data files"

git commit -m "Phase 2: Build homepage components and update page.tsx"

git commit -m "Phase 3: Create niche and blog hub pages"

git commit -m "Phase 4: Update navigation and sitemap"

# Final commit with trailer:
git commit -m "Homepage reset complete: 6-niche architecture live

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to remote
git push origin feature/homepage-reset

# Create PR or merge to main
```

---

## Troubleshooting

### Issue: Contentlayer errors in build
**Solution**: Remove all `import { allPosts, allBusinesses } from 'contentlayer/generated'` lines. Update sitemap.ts to use new data files.

### Issue: YAML files not loading
**Solution**: Verify `js-yaml` is installed. Check file paths in `/lib/data/issues.ts`. Ensure YAML syntax is valid.

### Issue: Images not loading
**Solution**: Verify images exist in `/public/images/`. Check Next.js Image component `src` props use correct paths.

### Issue: Calculator link broken
**Solution**: Ensure link is `/pricing/instant-quote?src={parameter}` (not `/pricing/instant-quote/`). Verify calculator page exists and is untouched.

### Issue: 404 on hub pages
**Solution**: Verify dynamic routes use `[slug]` and `[category]` correctly. Check `generateStaticParams()` function is exporting all slugs.

---

## Expected Results

### Success Metrics
- ✅ Homepage loads in < 2 seconds
- ✅ All 6 niche hubs render correctly
- ✅ 12 issue cards display with correct data
- ✅ No luxury/wealth management content visible
- ✅ Calculator untouched and functional
- ✅ All Lighthouse scores ≥ 90
- ✅ Zero broken links

### Content Metrics (Post-Launch)
- Expect 30-50% increase in homepage traffic (clearer value prop)
- Expect 20-30% increase in calculator clicks (multiple CTAs)
- Expect 10-15% increase in resource article engagement (issues grid)

---

## Questions? Common Scenarios

**Q: Should I build all 6 niche hubs at once?**
A: No. Build homepage first, then hood cleaning niche hub (Phase 1 content is live). Other 5 niches can have stubbed content initially.

**Q: What if resource articles don't exist yet for an issue?**
A: Issue cards can still render. Links will 404 until articles are built. Prioritize hood cleaning issues first (those articles exist).

**Q: Should I create the search functionality in the hero?**
A: No, search is optional (Phase 2). Stub it out for now with a comment: `{/* TODO: Add search in Phase 2 */}`.

**Q: Do I need to update the brand colors?**
A: No. Use existing tokens from `tailwind.config.ts`. All colors are defined there.

**Q: What about images for OpenGraph tags?**
A: Create placeholder images for now (1200×630). Can be updated later with design assets.

---

## Summary

You have 6 specification files covering:
1. ✅ Content cleanup (what to archive)
2. ✅ Homepage components (6 sections with props and breakpoints)
3. ✅ Hub architecture (routes, layouts, data models)
4. ✅ Issues taxonomy (YAML schema, data loading)
5. ✅ SEO contracts (metadata, schema, copy)
6. ✅ Acceptance checklist (200+ validation points)

**Total Implementation Time**: 6-8 hours (experienced dev) or 12-16 hours (learning as you go)

**Output**: Production-ready homepage + hub architecture with 6 service niches, issues taxonomy, and complete SEO optimization.

---

**Status**: All specs complete ✅
**Ready for Implementation**: ✅
**Contact**: Use GitHub issues for questions or feedback

---

**Next Steps for You (Cursor)**:
1. Read `moved.md` and archive legacy content
2. Read `homepage.md` and build 6 components
3. Read `taxonomy.md` and create hub pages
4. Read `issues-contract.md` and create YAML files
5. Read `contracts.md` and add metadata/schema
6. Read `acceptance-checklist.md` and validate before launch

🚀 **Good luck! You've got this.**
