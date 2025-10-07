# CTR Testing Plan (Google Search Console)

## Purpose

Optimize click-through rate (CTR) from Google SERPs by A/B testing title/meta combinations for key pages. Focus on "instant", "after-hours", "certificate" modifiers that match user intent.

**Goal**: Increase CTR by 15-25% over 90 days through data-driven title/meta optimization.

---

## Testing Strategy

**Method**: Sequential testing (not true A/B) - Change title/meta, wait 28 days, analyze GSC data, iterate.

**Pages to Test** (10 total):
1. Service page (`/services/restaurant-hood-cleaning/`)
2. Miami city page (`/locations/miami/hood-cleaning/`)
3. Boca Raton city page
4. Fort Lauderdale city page
5. Miami NFPA 96 Checklist resource
6. Boca Raton Frequency Guide resource
7. Fort Lauderdale Fan Problems resource
8. Homepage (`/`)
9. NFPA 96 Trust Page (`/trust/nfpa-96-references/`)
10. Calculator (`/pricing/instant-quote/`) - Test with extreme caution, avoid breaking conversions

---

## Title/Meta Test Variants

### Service Page: `/services/restaurant-hood-cleaning/`

**Current (Baseline)**:
- Title: `Restaurant Hood Cleaning - NFPA 96 Certified | LocalBizzList` (63 chars)
- Meta: `NFPA 96 compliant hood cleaning for South Florida restaurants. Same-day service, bi-lingual crews, Certificate of Performance included.` (145 chars)

**Variant A** (Instant/Emergency Focus):
- Title: `Instant Hood Cleaning Quote - Same-Day Service | LocalBizzList` (63 chars)
- Meta: `Get an instant quote in 60 seconds. Same-day NFPA 96 hood cleaning across Miami, Boca, Fort Lauderdale. Certificate in 24-48 hours.` (138 chars)
- **Hypothesis**: "Instant" + "same-day" attract urgency-driven searches

**Variant B** (Certificate Focus):
- Title: `NFPA 96 Certificate of Performance - Hood Cleaning | LocalBizzList` (67 chars)
- Meta: `Certified hood cleaning with Certificate of Performance delivered in 24-48 hours. Pass health inspections across South Florida.` (130 chars)
- **Hypothesis**: Searchers need certificate proof, not just cleaning

**Variant C** (After-Hours Focus):
- Title: `After-Hours Hood Cleaning - No Downtime | LocalBizzList` (57 chars)
- Meta: `After-hours NFPA 96 hood cleaning for busy restaurants. Work while you're closed, certificate ready by morning. Miami, Boca, FTL.` (132 chars)
- **Hypothesis**: Restaurants prioritize minimal disruption

---

### Miami City Page: `/locations/miami/hood-cleaning/`

**Current (Baseline)**:
- Title: `Miami Hood Cleaning - NFPA 96 Certified | LocalBizzList` (57 chars)
- Meta: `NFPA 96 hood cleaning in Miami-Dade County. Bi-lingual crews, high-rise rope access, same-day service. Certificate of Performance included.` (145 chars)

**Variant A** (Bi-Lingual Focus):
- Title: `Hood Cleaning Miami - Bi-Lingual Crews (English/Spanish)` (57 chars)
- Meta: `Servicio de limpieza de campanas en Miami. Bi-lingual NFPA 96 certified crews. Same-day service across Miami-Dade. Llame ahora.` (130 chars)
- **Hypothesis**: Spanish-speaking market responds to bi-lingual messaging

**Variant B** (High-Rise Focus):
- Title: `Brickell Hood Cleaning - High-Rise Rope Access | Miami` (56 chars)
- Meta: `High-rise hood cleaning for Brickell, Downtown Miami towers. Rope access certified. Work after-hours, zero disruption. NFPA 96 compliant.` (140 chars)
- **Hypothesis**: Brickell searches dominate Miami queries

**Variant C** (Emergency Focus):
- Title: `Emergency Hood Cleaning Miami - Same-Day Service Available` (59 chars)
- Meta: `Failed health inspection? Same-day NFPA 96 hood cleaning in Miami. Certificate of Performance in 24-48 hours. Call (305) 555-4663.` (133 chars)
- **Hypothesis**: Emergency searches have high intent

---

### Boca Raton City Page

**Variant A** (Country Club Focus):
- Title: `Country Club Hood Cleaning - Boca Raton | LocalBizzList` (56 chars)
- Meta: `White-glove hood cleaning for Boca Raton country clubs and fine dining. Discreet service, NFPA 96 certified, acquisition due diligence.` (139 chars)

**Variant B** (Acquisition Focus):
- Title: `Hood Inspection for Restaurant Buyers - Boca Raton` (52 chars)
- Meta: `Pre-acquisition hood inspections for Boca Raton restaurant buyers. Detailed reports with photos and repair estimates. NFPA 96 compliant.` (140 chars)

**Variant C** (Mizner Park Focus):
- Title: `Mizner Park Hood Cleaning - Boca Raton | LocalBizzList` (55 chars)
- Meta: `Hood cleaning for Mizner Park, Royal Palm Place, Town Center restaurants. NFPA 96 certified, after-hours service, Certificate of Performance.` (147 chars)

---

### Fort Lauderdale City Page

**Variant A** (TWIC/Port Focus):
- Title: `Port Everglades Hood Cleaning - TWIC Certified | Fort Lauderdale` (66 chars)
- Meta: `TWIC-certified hood cleaning for Port Everglades cruise ships and marine terminals. NFPA 96 compliant. Work around ship schedules.` (134 chars)

**Variant B** (Las Olas Focus):
- Title: `Las Olas Hood Cleaning - Fort Lauderdale | LocalBizzList` (57 chars)
- Meta: `Hood cleaning for Las Olas, beach area, and downtown Fort Lauderdale restaurants. Coastal corrosion treatment included. NFPA 96 certified.` (143 chars)

**Variant C** (Coastal/Corrosion Focus):
- Title: `Coastal Hood Cleaning - Salt-Air Protection | Fort Lauderdale` (63 chars)
- Meta: `Hood cleaning with coastal corrosion protection for Fort Lauderdale beach restaurants. NFPA 96 certified, salt-air resistant materials.` (140 chars)

---

### Resource Articles (3 examples)

**Miami NFPA 96 Checklist**:

**Variant A** (Checklist Focus):
- Title: `30-Point NFPA 96 Hood Cleaning Checklist - Miami Restaurants` (62 chars)
- Meta: `Free NFPA 96 compliance checklist for Miami restaurants. Download printable PDF. Pass health inspections with this 30-point guide.` (133 chars)

**Variant B** (Compliance Focus):
- Title: `NFPA 96 Compliance Guide for Miami - Avoid Health Violations` (62 chars)
- Meta: `Complete NFPA 96 compliance guide for Miami-Dade restaurants. Avoid health department violations with this checklist and frequency guide.` (141 chars)

---

## Testing Schedule (90-Day Plan)

### Month 1: Service + City Pages (4 tests)
- **Week 1-4**: Test Service Page Variant A (Instant focus)
- **Week 1-4**: Test Miami Variant A (Bi-lingual) simultaneously
- **Week 1-4**: Test Boca Variant A (Country club)
- **Week 1-4**: Test Fort Lauderdale Variant A (TWIC)

**Metrics to Track**:
- Impressions (should stay same or increase)
- Clicks (should increase)
- CTR (goal: +15% vs. baseline)
- Average position (should improve if CTR increases)
- Conversions (from calculator UTM tracking)

### Month 2: Iterate Winners, Test Resources (3 tests)
- **Week 5-8**: If Month 1 variants won, keep. If lost, revert and test Variant B
- **Week 5-8**: Test Resource Variant A for all 3 cities

### Month 3: Finalize, Test Trust Pages (3 tests)
- **Week 9-12**: Lock in winning titles/metas
- **Week 9-12**: Test NFPA 96 trust page variants
- **Week 9-12**: Test homepage variants (if needed)

---

## Data Collection & Analysis

### Google Search Console Setup
1. **Filter by Page**: Isolate each test page URL
2. **Date Range**: Compare 28 days before vs. 28 days after change
3. **Export Data**: Query-level data (CSV export)

### Metrics to Track
| Metric | Baseline | Variant A | Variant B | Winner |
|--------|----------|-----------|-----------|--------|
| Impressions | X | X | X | - |
| Clicks | X | X | X | - |
| CTR (%) | X | X | X | - |
| Avg Position | X | X | X | - |
| Conversions | X | X | X | - |

**Success Criteria**:
- ✅ CTR increase ≥ 10%
- ✅ Clicks increase ≥ 15%
- ✅ Position stable or improved
- ✅ Conversions maintained or increased

**Failure Criteria**:
- ❌ CTR decreases
- ❌ Conversions drop >10%
- ❌ Position drops >3 spots

**If Failure**: Revert to baseline immediately, test Variant B

---

## Testing Log Template

```markdown
## Test #1: Service Page - Variant A (Instant Focus)

**Date Range**: Feb 1 - Feb 28, 2025
**Page**: /services/restaurant-hood-cleaning/

**Baseline (Jan 1 - Jan 28)**:
- Impressions: 1,250
- Clicks: 87
- CTR: 6.96%
- Avg Position: 8.2
- Conversions: 12

**Variant A (Feb 1 - Feb 28)**:
- Title: Instant Hood Cleaning Quote - Same-Day Service | LocalBizzList
- Meta: Get an instant quote in 60 seconds. Same-day NFPA 96 hood cleaning...
- Impressions: 1,310 (+4.8%)
- Clicks: 112 (+28.7%) ✅
- CTR: 8.55% (+22.8%) ✅
- Avg Position: 7.8 (+0.4) ✅
- Conversions: 15 (+25%) ✅

**Decision**: KEEP Variant A (clear winner)
**Notes**: "Instant quote" resonates with high-intent searchers
```

---

## Rotation Schedule

**Weekly Check** (every Monday):
- Review GSC data from previous week
- Note any anomalies (traffic spikes, algorithm updates)

**Monthly Analysis** (last day of month):
- Export full month GSC data
- Compare to baseline
- Make go/no-go decision on variant

**Quarterly Review** (end of 90 days):
- Lock in all winning titles/metas
- Document learnings for future tests
- Plan next round of tests (different pages or modifiers)

---

## Modifier Testing Priority

### High-Intent Modifiers (Test First)
- "Instant" (quote, service, certificate)
- "Same-day" (service, cleaning, certificate)
- "Emergency" (hood cleaning, service)
- "After-hours" (cleaning, service, work)
- "Certificate" (of Performance, NFPA 96)
- "24/7" (service, emergency)

### Location Modifiers (Test Second)
- Neighborhood-specific (Brickell, Mizner Park, Las Olas)
- County-specific (Miami-Dade, Broward, Palm Beach)
- "Near me" (hood cleaning near me - if ranking)

### Specialty Modifiers (Test Third)
- "Bi-lingual" (Spanish, crews)
- "TWIC-certified" (Fort Lauderdale only)
- "High-rise" (rope access, Brickell)
- "Country club" (Boca Raton only)
- "Coastal" (corrosion, salt-air - Fort Lauderdale)

---

## Cautions & Rules

### Don't Test
- ❌ More than 1 variant per page at a time (can't isolate what worked)
- ❌ During major holidays (data skewed)
- ❌ During Google algorithm updates (wait 2 weeks post-update)
- ❌ Pages with <100 monthly impressions (insufficient data)

### Calculator Page Special Rules
- Only test if service/city pages plateau
- Test extremely conservatively (conversion page)
- Revert immediately if conversions drop >5%

### Brand Consistency
- Always include "LocalBizzList" in title (brand recognition)
- Keep tone professional (no clickbait: "You Won't Believe...")
- Match meta description to page content (avoid misleading)

---

**Status**: CTR testing plan complete ✅
**Duration**: 90 days (3 months)
**Pages to Test**: 10
**Expected CTR Lift**: 15-25%
