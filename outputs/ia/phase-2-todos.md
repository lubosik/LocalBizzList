# Phase 2 Information Architecture TODOs

## Overview
Phase 2 expands our NFPA 96 service coverage with two additional service types across the same 3 cities, creating **6 new location pages** to complement Phase 1.

---

## Phase 1 (SHIP NOW) ✅

### Service Page
- [ ] `/app/services/restaurant-hood-cleaning/page.tsx`

### Location Pages (Hood Cleaning)
- [ ] `/app/locations/miami/hood-cleaning/page.tsx`
- [ ] `/app/locations/boca-raton/hood-cleaning/page.tsx`
- [ ] `/app/locations/fort-lauderdale/hood-cleaning/page.tsx`

**Total:** 4 pages

---

## Phase 2 (TODO - Future Expansion) 🔜

### Service Pages (Global)
- [ ] `/app/services/exhaust-fan-service/page.tsx`
  - Focus: Fan motor repair, belt replacement, bearing service
  - Target KW: "restaurant exhaust fan repair south florida"

- [ ] `/app/services/nfpa-96-inspection/page.tsx`
  - Focus: Pre-inspection audit, certification, compliance reports
  - Target KW: "NFPA 96 inspection miami", "hood cleaning certificate"

### Miami Location Pages
- [ ] `/app/locations/miami/exhaust-fan-service/page.tsx`
  - Local angle: 24/7 emergency fan repair, Miami-Dade health dept requirements

- [ ] `/app/locations/miami/nfpa-96-inspection/page.tsx`
  - Local angle: Same-day inspection slots, bilingual inspectors

### Boca Raton Location Pages
- [ ] `/app/locations/boca-raton/exhaust-fan-service/page.tsx`
  - Local angle: Upscale restaurant/country club focus, scheduled maintenance

- [ ] `/app/locations/boca-raton/nfpa-96-inspection/page.tsx`
  - Local angle: Pre-sale inspections for restaurant acquisitions

### Fort Lauderdale Location Pages
- [ ] `/app/locations/fort-lauderdale/exhaust-fan-service/page.tsx`
  - Local angle: Las Olas corridor, beachfront kitchens, cruise terminal commissaries

- [ ] `/app/locations/fort-lauderdale/nfpa-96-inspection/page.tsx`
  - Local angle: Broward County permit coordination

**Phase 2 Total:** 8 new pages (2 service + 6 location)

---

## Content Symmetry Model

```
Service Pages (3 total):
├── restaurant-hood-cleaning (Phase 1) ✅
├── exhaust-fan-service (Phase 2)
└── nfpa-96-inspection (Phase 2)

Cities (3 total):
├── Miami
│   ├── hood-cleaning (Phase 1) ✅
│   ├── exhaust-fan-service (Phase 2)
│   └── nfpa-96-inspection (Phase 2)
├── Boca Raton
│   ├── hood-cleaning (Phase 1) ✅
│   ├── exhaust-fan-service (Phase 2)
│   └── nfpa-96-inspection (Phase 2)
└── Fort Lauderdale
    ├── hood-cleaning (Phase 1) ✅
    ├── exhaust-fan-service (Phase 2)
    └── nfpa-96-inspection (Phase 2)
```

**Final Grid:** 3 services × 3 cities = **9 location pages** + **3 service pages** = **12 total pages**

---

## Phase 2 Triggers (When to Build)

Execute Phase 2 when **any** of these conditions are met:

1. ✅ **Phase 1 Local Pack visibility**
   - All 3 cities ranking in Map Pack for "hood cleaning [city]"
   - Minimum 10 GMB reviews per location

2. ✅ **Organic traffic threshold**
   - 500+ monthly organic visits from Phase 1 pages
   - 15+ qualified leads/month from hood cleaning alone

3. ✅ **Service expansion demand**
   - 20+ inbound requests for fan repair or inspection-only services
   - Customer feedback indicates need for standalone offerings

4. ✅ **Competitive gap identified**
   - Competitors ranking for "exhaust fan repair" with thin content
   - NFPA inspection-only opportunity (pre-sale, compliance audits)

---

## Phase 2 Preparation Checklist

Before building Phase 2 pages:

- [ ] Validate service delivery capability (fan repair techs, inspection certifications)
- [ ] Update `/pricing/instant-quote` calculator with new service types
- [ ] Gather 20 fan-repair-specific FAQs from Semrush/Perplexity
- [ ] Photograph fan motor replacements, inspection reports for content
- [ ] Create dedicated schema for fan service + inspection
- [ ] Update sitemap to include new service types
- [ ] Extend internal linking strategy (service ↔ location cross-links)

---

## Notes for Cursor

- **Reuse Phase 1 templates:** Location page structure identical, just swap service type
- **Frontmatter schema:** Already designed to support multiple service types (see `frontmatter-examples.md`)
- **Content differentiation:** Each service type needs unique `process_steps`, `common_problems`, and `proof` sections
- **Internal links:** Phase 2 pages link back to Phase 1 hood cleaning pages ("Full system service includes...")

---

**Status:** Planning complete, awaiting Phase 1 validation metrics
**Dependencies:** Phase 1 must prove Local Pack + conversion model
**Timeline:** Estimate Q2 2025 (90 days post Phase 1 launch)
