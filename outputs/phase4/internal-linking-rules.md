# Internal Linking Map & Rules

## Purpose

Define exact internal linking structure for LocalBizzList Hood Cleaning to:
- Pass link equity from homepage to money pages (service, city, calculator)
- Build topical clusters (service → cities → resources → trust)
- Avoid over-optimization penalties (vary anchor text, natural placement)
- Improve crawlability and indexation

**Strategy**: Hub-and-spoke model with service page as primary hub, city pages as secondary hubs, resources as supporting content.

---

## Site Architecture (Link Hierarchy)

```
Homepage (/)
├── Service Hub (/services/restaurant-hood-cleaning/)
│   ├── Miami Page (/locations/miami/hood-cleaning/)
│   │   ├── Resource 1 (/resources/miami/nfpa-96-checklist/)
│   │   ├── Resource 2 (/resources/miami/frequency-guide/)
│   │   └── Resource 3 (/resources/miami/exhaust-fan-problems/)
│   ├── Boca Raton Page (/locations/boca-raton/hood-cleaning/)
│   │   ├── Resource 1 (/resources/boca-raton/nfpa-96-checklist/)
│   │   ├── Resource 2 (/resources/boca-raton/frequency-guide/)
│   │   └── Resource 3 (/resources/boca-raton/exhaust-fan-problems/)
│   └── Fort Lauderdale Page (/locations/fort-lauderdale/hood-cleaning/)
│       ├── Resource 1 (/resources/fort-lauderdale/nfpa-96-checklist/)
│       ├── Resource 2 (/resources/fort-lauderdale/frequency-guide/)
│       └── Resource 3 (/resources/fort-lauderdale/exhaust-fan-problems/)
├── Trust Pages (/trust/)
│   ├── About (/trust/about/)
│   ├── Insurance & Licenses (/trust/insurance-licenses/)
│   ├── Photo Proof (/trust/proof-to-bare-metal/)
│   ├── NFPA 96 Guide (/trust/nfpa-96-references/)
│   └── Client Reviews (/trust/client-logos-reviews/)
└── Calculator (/pricing/instant-quote/) [LINK ONLY - DO NOT TOUCH]
```

---

## Linking Rules by Page Type

### Rule 1: Service Page Links (Service Hub)

**Page**: `/services/restaurant-hood-cleaning/`

**Outbound Links** (12 required):
1. **All 3 city pages** (3 links)
   - Miami: "NFPA 96 hood cleaning in Miami"
   - Boca Raton: "white-glove hood cleaning in Boca Raton"
   - Fort Lauderdale: "TWIC-certified hood cleaning in Fort Lauderdale"

2. **Top 3 resources** (3 links - 1 per city)
   - Miami NFPA 96 Checklist: "30-point NFPA 96 compliance checklist for Miami restaurants"
   - Boca Frequency Guide: "hood cleaning frequency requirements for country clubs"
   - Fort Lauderdale Fan Problems: "troubleshooting exhaust fan issues in coastal environments"

3. **Calculator** (2 links)
   - Hero CTA: "Get Instant Quote" → `?src=service_hero`
   - Mid-page CTA: "Calculate your hood cleaning cost" → `?src=service_pricing`

4. **Trust pages** (3 links)
   - About: "Learn about LocalBizzList"
   - NFPA 96 Guide: "Read our complete NFPA 96 compliance guide"
   - Photo Proof: "See our before/after photo documentation"

5. **Homepage** (1 link - breadcrumb)
   - "Home" → `/`

**Anchor Text Rules**:
- **Exact match**: Max 1 per target page ("hood cleaning Miami")
- **Partial match**: 1-2 per target page ("NFPA 96 certified hood cleaning in Miami")
- **Branded**: 1-2 ("LocalBizzList hood cleaning services")
- **Generic**: 1-2 ("learn more", "read the guide")

**Placement**:
- Hero section: 1-2 links (primary CTA)
- Service areas section: 3 links (city pages)
- Process section: 1-2 links (resources)
- Trust signals: 2-3 links (trust pages)
- Footer CTA: 1-2 links (calculator)

**Max Links Per Section**: 3 (avoid link spam)

---

### Rule 2: City Page Links (Secondary Hubs)

**Pages**:
- `/locations/miami/hood-cleaning/`
- `/locations/boca-raton/hood-cleaning/`
- `/locations/fort-lauderdale/hood-cleaning/`

**Outbound Links** (14 required per city):

1. **Service page** (1 link)
   - Anchor: "Learn about our NFPA 96 hood cleaning process"
   - Placement: Intro or breadcrumb

2. **Other 2 city pages** (2 links)
   - Miami page links to: Boca Raton + Fort Lauderdale
   - Anchor: "We also serve [City]" or "Compare hood cleaning in [City]"
   - Placement: Service areas section or footer

3. **3 city-specific resources** (3 links)
   - Link to all 3 resources for THIS city
   - Anchors:
     - "30-point NFPA 96 checklist for [City] restaurants"
     - "How often [City] restaurants need hood cleaning"
     - "Common exhaust fan problems in [City]"
   - Placement: Resources/guides section

4. **3 city-specific issues** (3 links)
   - Link to 3 issue articles from issues taxonomy (once written)
   - Anchors: Use issue title
     - "Failed health inspection due to grease buildup"
     - "Exhaust fan making loud grinding noise"
     - "How often do we need hood cleaning?"
   - Placement: "Common Issues" section

5. **Calculator** (2 links)
   - Hero CTA: "Get Instant Quote" → `?src=city_{slug}_hero`
   - Footer CTA: "Calculate your cost" → `?src=city_{slug}_footer`

6. **Trust pages** (2 links)
   - NFPA 96 Guide: "Understand NFPA 96 frequency requirements"
   - Photo Proof OR Client Reviews: "See our work in [City]"
   - Placement: Compliance section or social proof section

7. **Homepage** (1 link - breadcrumb)
   - "Home" → `/`

**Anchor Text Rules**:
- Vary anchors even when linking same target from multiple city pages
- Miami page: "NFPA 96 compliance guide"
- Boca page: "Read the NFPA 96 standard"
- Fort Lauderdale page: "Learn NFPA 96 requirements"

**Placement**:
- Hero: 1 link (calculator)
- Service areas: 2 links (other cities)
- Process/compliance: 2-3 links (service page + NFPA 96 guide)
- Resources: 3 links (city resources)
- Common issues: 3 links (issue articles)
- Trust signals: 1-2 links (reviews, photo proof)
- Footer CTA: 1 link (calculator)

**Max Links Per Section**: 3

---

### Rule 3: Resource Article Links

**Pages**: `/resources/{city}/{slug}/` (9 total articles)

**Outbound Links** (8 required per article):

1. **City landing page** (1 link)
   - Anchor: "hood cleaning services in [City]" OR "Learn about our [City] hood cleaning"
   - Placement: Intro paragraph or CTA

2. **Service page** (1 link)
   - Anchor: "our NFPA 96 certified hood cleaning process" OR "how we clean to bare metal"
   - Placement: Related to process explanation

3. **Calculator** (2 links)
   - Hero/intro: "Get an instant quote for [City] hood cleaning" → `?src=resource_{slug}&city={city}`
   - Inline or footer: "Calculate your hood cleaning cost" → `?src=resource_{slug}_footer&city={city}`

4. **2 sibling resources** (2 links - same city)
   - Link to 2 other resources from the SAME city
   - Examples (Miami checklist article):
     - "Read our frequency guide for Miami restaurants"
     - "Troubleshooting exhaust fan problems in Miami"
   - Placement: "Related Resources" section or inline contextual

5. **1-2 trust pages** (1-2 links)
   - NFPA 96 Guide: "Read our complete NFPA 96 reference guide"
   - Photo Proof: "See before/after photos of our work"
   - About: "Learn about LocalBizzList"
   - Placement: Inline or sidebar

**Anchor Text Rules**:
- Contextual anchors (integrate into sentence flow)
- Vary even for same target across 9 articles
- Example variations for NFPA 96 guide:
  - "NFPA 96 standard"
  - "official NFPA 96 requirements"
  - "learn more about NFPA 96"
  - "NFPA 96 compliance guide"

**Placement**:
- Intro paragraph: 1-2 links (city page, calculator)
- Body sections: 2-3 links (service, trust, related resources)
- Sidebar (if exists): 2 links (related resources)
- Footer CTA: 1 link (calculator)

**Max Links Per Section**: 2 (resources are long-form, avoid spam)

---

### Rule 4: Trust Page Links

**Pages**:
- `/trust/about/`
- `/trust/insurance-licenses/`
- `/trust/proof-to-bare-metal/`
- `/trust/nfpa-96-references/`
- `/trust/client-logos-reviews/`

**Outbound Links** (6-10 per page):

1. **Service page** (1 link)
   - Anchor: "Learn about our hood cleaning services"
   - Placement: CTA or related to service description

2. **Calculator** (1-2 links)
   - CTA: "Get your instant quote" → `?src=trust_{page_slug}`
   - Placement: Bottom CTA or inline

3. **Other trust pages** (2-3 links)
   - Cross-link within trust bundle
   - Examples:
     - About → Insurance, NFPA 96, Reviews
     - Insurance → About, Photo Proof
     - Photo Proof → NFPA 96, Reviews
     - NFPA 96 → About, Photo Proof, Client Reviews
     - Reviews → About, Photo Proof
   - Anchors: Use page titles or descriptions
   - Placement: Inline or "Learn More" sections

4. **1-2 city pages or resources** (1-2 links)
   - NFPA 96 page → Link to city-specific NFPA 96 checklist resources
   - Reviews page → Link to city pages ("See our work in Miami")
   - Placement: Related to city-specific examples

**Anchor Text Rules**:
- Descriptive anchors ("see our insurance certificates", "read client testimonials")
- Branded anchors OK ("LocalBizzList process", "our NFPA 96 guide")

**Placement**:
- Inline contextual: 2-3 links
- "Learn More" sections: 2-3 links
- Footer CTA: 1 link (calculator)

**Max Links Per Section**: 2

---

## Anchor Text Patterns (Avoid Over-Optimization)

### Do's ✅

**Variation**:
- "hood cleaning in Miami"
- "Miami hood cleaning services"
- "NFPA 96 certified hood cleaning for Miami restaurants"
- "our Miami hood cleaning team"
- "Learn about hood cleaning in Miami"

**Contextual Integration**:
> "Our [NFPA 96 certified hood cleaning process](link) ensures compliance across all three counties."

**Mixed Intents**:
- Exact match: 20%
- Partial match: 40%
- Branded: 20%
- Generic: 20%

---

### Don'ts ❌

**Over-Optimization**:
- ❌ Same exact anchor text from multiple pages
- ❌ All exact-match anchors ("hood cleaning Miami" repeated 10x)
- ❌ Keyword-stuffed anchors ("hood cleaning Miami NFPA 96 certified best cheap")

**Link Spam**:
- ❌ 10+ links in a single paragraph
- ❌ Links in every sentence
- ❌ Footer link farms (avoid stuffing footer with 50 links)

**Irrelevant Links**:
- ❌ Linking to calculator from every sentence
- ❌ Linking to unrelated pages (e.g., Boca Raton resource from Miami resource)

---

## Link Limits by Page Type

| Page Type | Min Links | Max Links | Ideal Links |
|-----------|-----------|-----------|-------------|
| Homepage | 20 | 40 | 32 |
| Service Page | 10 | 20 | 12 |
| City Page | 10 | 20 | 14 |
| Resource Article | 6 | 12 | 8 |
| Trust Page | 5 | 12 | 8 |

**Rule**: If exceeding max links, reduce generic/branded links first. Keep contextual/topical links.

---

## Link Priority Matrix

### High-Priority Links (Must Include)
1. Service page → All 3 city pages
2. Each city page → All 3 city resources
3. Each resource → City page + calculator (2×)
4. All pages → Calculator (at least 1×)

### Medium-Priority Links (Should Include)
1. Service page → Top 3 resources
2. City pages → Other 2 city pages
3. Resources → 2 sibling resources (same city)
4. Trust pages → Service page

### Low-Priority Links (Nice to Have)
1. City pages → 3 issue articles (once issues are written)
2. Resources → Trust pages (NFPA 96, Photo Proof)
3. Trust pages → Cross-link to other trust pages

---

## Navigation & Global Links

### Header Navigation
**Always Present** (sitewide):
- Logo → Homepage
- Services dropdown → Service page + 6 niche hubs
- Resources → `/resources/` hub
- Locations dropdown → 3 city pages
- Get Quote button → Calculator (`?src=nav`)

**Link Count**: 12-15 (not counted in per-page limits)

### Footer Navigation
**Always Present** (sitewide):
- Company section: About, Insurance, Reviews, NFPA 96
- Services section: Service page + 6 niches
- Locations section: 3 city pages
- Resources section: 5 category pages
- Calculator link

**Link Count**: 20-25 (not counted in per-page limits)

**Rule**: Global nav links don't count toward per-page link limits. Only count contextual body links.

---

## Link Tracking & UTM Parameters

### Calculator Links (All)
**Format**: `/pricing/instant-quote?src={source}_{context}&city={city}`

**Sources**:
- Homepage: `home_hero`, `home_footer`
- Service page: `service_hero`, `service_pricing`, `service_footer`
- City pages: `city_miami_hero`, `city_boca_hero`, `city_ftl_hero`, `city_{slug}_footer`
- Resources: `resource_{article_slug}`, `resource_{article_slug}_footer`
- Trust pages: `trust_{page_slug}`
- GBP: `gbp_{city}`, `gbp_{city}_post`, `gbp_{city}_qa`
- Nav: `nav`, `footer`

**City Parameter** (if applicable):
- `&city=miami`
- `&city=boca-raton`
- `&city=fort-lauderdale`

**Example**:
```
/pricing/instant-quote?src=resource_nfpa-96-checklist&city=miami
```

### Internal Links (Other Pages)
**No UTM needed** for internal links to service/city/resource pages. Reserve UTM for:
- Calculator links (track conversion source)
- External links (track referrals)

---

## Disavowed Link Patterns

**Never Link**:
- ❌ Unrelated pages (e.g., Miami resource → Fort Lauderdale city page)
- ❌ Circular links (Page A → B → C → A without adding value)
- ❌ Over-optimized anchors (same exact match 5+ times)
- ❌ Link farms in footer (avoid "SEO Links" sections)

**Calculator Protection**:
- ✅ Link TO calculator from all pages (with UTM)
- ❌ Do NOT link FROM calculator to other pages (it's a conversion page)
- ❌ Do NOT modify calculator logic (link-only rule)

---

## Link Audit Checklist

### Monthly Review
- [ ] Check for broken internal links (404s)
- [ ] Verify calculator links include `?src=` parameter
- [ ] Ensure no page exceeds max link count
- [ ] Confirm anchor text variation (not over-optimized)
- [ ] Verify city resources link to correct city page (not crossed)

### Quarterly Review
- [ ] Analyze Google Search Console (Pages with most internal links)
- [ ] Review crawl reports (Are all pages indexed?)
- [ ] Check link equity flow (Are money pages getting enough links?)
- [ ] Update anchor text if patterns emerge (too many exact match)

### Tools
- **Screaming Frog**: Crawl site, export internal links, check for issues
- **Google Search Console**: Links report (internal linking structure)
- **Ahrefs / Semrush**: Internal link analysis (which pages have most links)

---

## Implementation Checklist for Cursor

### Step 1: Service Page
- [ ] Add 12 links per linking rules
- [ ] Vary anchor text (exact, partial, branded, generic)
- [ ] Place links naturally in sections (not clustered)
- [ ] Add UTM to calculator links

### Step 2: City Pages (3 pages)
- [ ] Add 14 links per city page
- [ ] Link to all 3 city resources (same city)
- [ ] Link to other 2 city pages
- [ ] Add UTM to calculator links (unique per city)

### Step 3: Resources (9 articles)
- [ ] Add 8 links per article
- [ ] Link to city page + service page
- [ ] Link to 2 sibling resources (same city)
- [ ] Add calculator links with article slug in UTM

### Step 4: Trust Pages (5 pages)
- [ ] Add 6-10 links per page
- [ ] Cross-link within trust bundle (2-3 links)
- [ ] Link to service page + calculator
- [ ] Optional: Link to city pages or resources where relevant

### Step 5: Audit
- [ ] Run Screaming Frog crawl
- [ ] Check all calculator links have UTM
- [ ] Verify no broken links
- [ ] Confirm anchor text variety
- [ ] Test all links manually (click-through)

---

**Status**: Internal linking rules complete ✅
**Total Rules**: 4 page types, 50+ linking guidelines
**Next**: CTR testing plan for GSC
