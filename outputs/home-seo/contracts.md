# Homepage & Hub SEO Contracts

## Purpose

This document defines exact SEO requirements for the new homepage, niche hubs, and blog hubs. All titles, descriptions, schema, and copy are specified to ensure consistency and optimization.

---

## 1. Homepage (`/app/page.tsx`)

### Page Metadata

```typescript
export const metadata: Metadata = {
  title: 'LocalBizzList - South Florida Commercial Services Directory',
  description: 'Find certified experts for restaurant hood cleaning, grease trap services, septic maintenance, sealcoating, fire extinguishers, and sprinkler repair across Miami, Fort Lauderdale, and Boca Raton. Instant quotes, same-day service.',
  keywords: [
    'South Florida commercial services',
    'restaurant hood cleaning Miami',
    'grease trap cleaning',
    'septic tank services',
    'sealcoating Fort Lauderdale',
    'fire extinguisher services Boca Raton',
    'sprinkler repair',
    'NFPA 96 compliance',
    'same-day service',
  ],
  authors: [{ name: 'LocalBizzList' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com',
    siteName: 'LocalBizzList',
    title: 'LocalBizzList - South Florida Commercial Services Directory',
    description: 'Find certified experts for commercial services across Miami, Fort Lauderdale, and Boca Raton. Instant quotes, same-day service, NFPA compliance guaranteed.',
    images: [
      {
        url: '/images/og-homepage.jpg', // TODO: Create image
        width: 1200,
        height: 630,
        alt: 'LocalBizzList - South Florida Commercial Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LocalBizzList - South Florida Commercial Services',
    description: 'Find certified experts for commercial services across Miami, Fort Lauderdale, and Boca Raton.',
    images: ['/images/og-homepage.jpg'],
  },
}
```

**Character Counts**:
- Title: 59 chars ✅
- Description: 229 chars ⚠️ (trim to 160)
- OG Title: 59 chars ✅

**Revised Description** (160 chars):
```typescript
description: 'Find certified experts for hood cleaning, grease trap, septic, and more across Miami, Fort Lauderdale, Boca Raton. Instant quotes, same-day service.'
```

---

### JSON-LD Schema

```typescript
// Add to /app/page.tsx

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'LocalBizzList',
  url: 'https://localbizzlist.com',
  description:
    'South Florida directory for commercial services including hood cleaning, grease trap, septic, sealcoating, fire extinguishers, and sprinkler repair.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://localbizzlist.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LocalBizzList',
  url: 'https://localbizzlist.com',
  logo: 'https://localbizzlist.com/images/logo.png',
  sameAs: [
    // TODO: Add social media URLs when available
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    areaServed: ['Miami', 'Fort Lauderdale', 'Boca Raton'],
    availableLanguage: ['en', 'es'],
  },
}

// Render in <head>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

---

### Section Copy

#### Hero Section

**H1**: "South Florida's Trusted Directory for Commercial Services"

**Subcopy**: "Find certified experts for restaurant hood cleaning, grease trap services, septic maintenance, and more. Instant quotes, same-day service, NFPA compliance guaranteed."

**Primary CTA**: "Browse Service Niches"
**Secondary CTA**: "Get Instant Quote"

---

#### Niche Grid Section

**H2**: "Explore Our Service Niches"

**Subheading**: "Certified providers across South Florida's most in-demand commercial services"

**Niche Microcopy** (for each card):

1. **Restaurant Hood Cleaning**
   - Description: "NFPA 96 compliant cleaning with same-day certification available."

2. **Grease Trap Cleaning**
   - Description: "Emergency pumping and maintenance to prevent health code violations."

3. **Septic Tank Services**
   - Description: "Pumping, inspections, and repairs for commercial and residential properties."

4. **Sealcoating & Paving**
   - Description: "Extend parking lot life with professional sealcoating and striping."

5. **Fire Extinguisher Services**
   - Description: "Inspections, recharging, and installations per Florida Fire Code."

6. **Sprinkler Repair & Testing**
   - Description: "Certified backflow testing and irrigation system repairs."

---

#### Blog Categories Strip

**H2**: "Browse Resources by Topic"

**Categories** (copy already in taxonomy.md):
- Cost Guides
- Compliance & Inspections
- Maintenance & Repairs
- Emergency & After-Hours
- Planning & ROI

---

#### Common Issues Section

**H2**: "Common Issues We Can Solve"

**Subheading**: "Expert solutions for your toughest commercial facility challenges"

*(Issue cards pull copy from YAML files—no additional copy needed)*

---

#### Latest Guides Section

**H2**: "Latest Resources & Guides"

**Subheading**: "Educational content to help you maintain compliance and reduce costs"

**CTA Link Text**: "View All Resources"

---

#### Footer CTA Band

**H2**: "Need a Certificate of Performance Tonight?"

**Subtext**: "Get an instant quote for same-day hood cleaning with NFPA 96 certification."

**Button Text**: "Get Instant Quote"

---

## 2. Niche Landing Hub (`/niches/page.tsx`)

### Page Metadata

```typescript
export const metadata: Metadata = {
  title: 'Commercial Service Niches - LocalBizzList',
  description: 'Explore our 6 service niches: restaurant hood cleaning, grease trap, septic tank, sealcoating, fire extinguishers, and sprinkler repair across South Florida.',
  keywords: [
    'commercial services South Florida',
    'restaurant services Miami',
    'facility maintenance',
    'NFPA compliance services',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com/niches/',
    siteName: 'LocalBizzList',
    title: 'Commercial Service Niches - LocalBizzList',
    description: 'Explore our 6 service niches across South Florida: hood cleaning, grease trap, septic, sealcoating, fire extinguishers, sprinkler repair.',
  },
}
```

---

### JSON-LD Schema

```typescript
const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Commercial Service Niches',
  url: 'https://localbizzlist.com/niches/',
  description:
    'Directory of commercial service niches including hood cleaning, grease trap, septic, sealcoating, fire extinguishers, and sprinkler repair.',
  mainEntity: [
    {
      '@type': 'Service',
      name: 'Restaurant Hood Cleaning',
      url: 'https://localbizzlist.com/niches/restaurant-hood-cleaning/',
      description: 'NFPA 96 compliant hood cleaning services.',
    },
    // ... 5 more services
  ],
}
```

---

### Section Copy

**H1**: "Explore Our Service Niches"

**Subcopy**: "LocalBizzList connects you with certified experts across 6 essential commercial service categories. Browse by niche to find vetted providers in Miami, Fort Lauderdale, and Boca Raton."

**CTA**: "Need help choosing the right service? Call us for a free consultation at 1-800-XXX-XXXX." *(TODO: Add phone number)*

---

## 3. Individual Niche Hub (`/niches/[slug]/page.tsx`)

### Metadata Template

```typescript
// Example for Restaurant Hood Cleaning
export const metadata: Metadata = {
  title: 'Restaurant Hood Cleaning Services - South Florida | LocalBizzList',
  description: 'NFPA 96 compliant hood cleaning services in Miami, Boca Raton, and Fort Lauderdale. Same-day service, certified technicians, instant quotes available.',
  keywords: [
    'restaurant hood cleaning South Florida',
    'NFPA 96 compliance',
    'commercial kitchen cleaning Miami',
    'hood cleaning Fort Lauderdale',
    'exhaust system cleaning Boca Raton',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com/niches/restaurant-hood-cleaning/',
    siteName: 'LocalBizzList',
    title: 'Restaurant Hood Cleaning Services - South Florida',
    description: 'NFPA 96 compliant hood cleaning in Miami, Boca Raton, Fort Lauderdale. Same-day service available.',
  },
}
```

**Variable Fields** (per niche):
- `{niche_title}`: "Restaurant Hood Cleaning", "Grease Trap Cleaning", etc.
- `{niche_description}`: Pulled from niches.ts data file
- `{primary_keywords}`: 3-5 keywords specific to niche

---

### JSON-LD Schema Template

```typescript
const nicheSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '{niche_title} Services',
  serviceType: '{niche_title}',
  areaServed: [
    {
      '@type': 'City',
      name: 'Miami',
      addressRegion: 'FL',
    },
    {
      '@type': 'City',
      name: 'Boca Raton',
      addressRegion: 'FL',
    },
    {
      '@type': 'City',
      name: 'Fort Lauderdale',
      addressRegion: 'FL',
    },
  ],
  provider: {
    '@type': 'Organization',
    name: 'LocalBizzList',
    url: 'https://localbizzlist.com',
  },
  description: '{niche_description}',
  url: 'https://localbizzlist.com/niches/{slug}/',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://localbizzlist.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Service Niches',
      item: 'https://localbizzlist.com/niches/',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: '{niche_title}',
      item: 'https://localbizzlist.com/niches/{slug}/',
    },
  ],
}
```

---

### Section Copy Template

**H1**: "{Niche_Title} Services in South Florida"

**Subcopy**: "{niche_description} Available in Miami, Fort Lauderdale, and Boca Raton."

**Service Locations H2**: "Service Areas"

**Service Locations Subheading**: "Find certified {niche_title} providers in your city."

**Common Issues H2**: "Common {Niche_Title} Issues"

**Resources H2**: "Resources & Guides"

**Resources Subheading**: "Expert advice on {niche_short_title} compliance, maintenance, and cost management."

**Footer CTA**: "Need same-day {niche_short_title} service? Get an instant quote."
**Button Text**: "Get Instant Quote"

---

### Niche-Specific Copy Examples

#### Hood Cleaning Hub

**H1**: "Restaurant Hood Cleaning Services in South Florida"

**Subcopy**: "NFPA 96 compliant hood cleaning, exhaust system maintenance, and fire safety certification for commercial kitchens. Available in Miami, Fort Lauderdale, and Boca Raton."

**Footer CTA**: "Need same-day hood cleaning service? Get an instant quote."

---

#### Grease Trap Hub

**H1**: "Grease Trap Cleaning Services in South Florida"

**Subcopy**: "Commercial grease trap pumping, maintenance, and compliance services for restaurants and food service facilities. Available in Miami, Fort Lauderdale, and Boca Raton."

**Footer CTA**: "Need emergency grease trap pumping? Get an instant quote."

---

#### Septic Tank Hub

**H1**: "Septic Tank Services in South Florida"

**Subcopy**: "Septic tank pumping, inspections, repairs, and emergency services for commercial and residential properties. Available in Miami, Fort Lauderdale, and Boca Raton."

**Footer CTA**: "Need same-day septic pumping? Get an instant quote."

---

#### Sealcoating Hub

**H1**: "Sealcoating & Paving Services in South Florida"

**Subcopy**: "Asphalt sealcoating, striping, pothole repair, and parking lot maintenance for commercial properties. Available in Miami, Fort Lauderdale, and Boca Raton."

**Footer CTA**: "Need parking lot sealcoating? Get an instant quote."

---

#### Fire Extinguisher Hub

**H1**: "Fire Extinguisher Services in South Florida"

**Subcopy**: "Fire extinguisher inspections, recharging, installation, and compliance testing for commercial facilities. Available in Miami, Fort Lauderdale, and Boca Raton."

**Footer CTA**: "Need fire extinguisher inspection? Get an instant quote."

---

#### Sprinkler Repair Hub

**H1**: "Sprinkler Repair & Testing Services in South Florida"

**Subcopy**: "Commercial sprinkler system repairs, backflow testing, and fire suppression maintenance services. Available in Miami, Fort Lauderdale, and Boca Raton."

**Footer CTA**: "Need sprinkler system repair? Get an instant quote."

---

## 4. Blog Hub (`/blog/page.tsx`)

### Page Metadata

```typescript
export const metadata: Metadata = {
  title: 'Commercial Services Resources & Guides - LocalBizzList',
  description: 'Expert guides on hood cleaning, grease trap, septic, and more. Cost guides, compliance checklists, and maintenance tips for South Florida businesses.',
  keywords: [
    'commercial services guides',
    'hood cleaning checklist',
    'grease trap maintenance',
    'NFPA 96 compliance',
    'septic tank tips',
    'South Florida business resources',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com/blog/',
    siteName: 'LocalBizzList',
    title: 'Commercial Services Resources & Guides',
    description: 'Expert guides on hood cleaning, grease trap, septic, and more for South Florida businesses.',
  },
}
```

---

### JSON-LD Schema

```typescript
const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Resources & Guides',
  url: 'https://localbizzlist.com/blog/',
  description:
    'Educational resources on commercial services including cost guides, compliance checklists, and maintenance tips.',
}
```

---

### Section Copy

**H1**: "Resources & Guides"

**Subcopy**: "Expert advice on commercial services, compliance, and maintenance across South Florida. Browse by topic or explore our latest articles."

**Category Filter Label**: "Filter by Topic:"

---

## 5. Category Hub (`/blog/[category]/page.tsx`)

### Metadata Templates

#### Cost Guides

```typescript
export const metadata: Metadata = {
  title: 'Cost Guides - Commercial Services Pricing | LocalBizzList',
  description: 'Pricing guides for hood cleaning, grease trap, septic, and more. Understand costs, compare quotes, and plan your budget for South Florida commercial services.',
  keywords: [
    'hood cleaning cost',
    'grease trap pumping price',
    'septic tank cost',
    'sealcoating pricing',
    'commercial services budget',
  ],
}
```

---

#### Compliance & Inspections

```typescript
export const metadata: Metadata = {
  title: 'Compliance & Inspections Guides - LocalBizzList',
  description: 'NFPA 96 checklists, fire safety inspection guides, septic compliance rules, and more for South Florida commercial facilities.',
  keywords: [
    'NFPA 96 compliance',
    'fire safety inspection',
    'grease trap regulations',
    'septic tank compliance Florida',
    'commercial facility inspections',
  ],
}
```

---

#### Maintenance & Repairs

```typescript
export const metadata: Metadata = {
  title: 'Maintenance & Repairs Guides - LocalBizzList',
  description: 'Preventive maintenance schedules, troubleshooting guides, and repair best practices for commercial equipment and facilities in South Florida.',
  keywords: [
    'hood cleaning maintenance',
    'grease trap maintenance schedule',
    'septic tank maintenance',
    'parking lot maintenance',
    'commercial repairs',
  ],
}
```

---

#### Emergency & After-Hours

```typescript
export const metadata: Metadata = {
  title: 'Emergency & After-Hours Services - LocalBizzList',
  description: 'Find emergency services for hood cleaning, grease trap overflows, septic backups, and more. 24/7 availability across South Florida.',
  keywords: [
    'emergency hood cleaning',
    'grease trap overflow emergency',
    'septic tank backup',
    'after hours commercial services',
    '24/7 emergency services Miami',
  ],
}
```

---

#### Planning & ROI

```typescript
export const metadata: Metadata = {
  title: 'Planning & ROI Guides - LocalBizzList',
  description: 'Strategic planning guides, maintenance contracts, and ROI analysis for commercial services in South Florida.',
  keywords: [
    'maintenance contract ROI',
    'commercial services planning',
    'preventive maintenance benefits',
    'cost benefit analysis',
    'facility management planning',
  ],
}
```

---

### Section Copy Template

**H1**: "{Category_Name}"

**Subcopy**: "{category_description}" (from categories.ts)

**Article Count**: "Showing {count} articles"

---

## 6. Internal Linking Requirements

### Homepage Links

**Outbound Links**:
- Hero Primary CTA → `/niches/`
- Hero Secondary CTA → `/pricing/instant-quote?src=home_hero`
- Niche Cards (6×) → `/niches/{slug}/`
- Category Chips (5×) → `/blog/{category}/`
- Issue Cards (12×) → `/resources/{city}/{issue-slug}/`
- Guide Cards (6×) → `/resources/{city}/{guide-slug}/`
- Footer CTA → `/pricing/instant-quote?src=home_footer`

**Total**: 32 internal links

---

### Niche Hub Links

**Outbound Links**:
- Hero CTA → `/pricing/instant-quote?src=niche_{slug}`
- Location Cards (3×) → `/locations/{city}/{service-slug}/`
- Issue Cards (6×) → `/resources/{city}/{issue-slug}/`
- Guide Cards (6×) → `/resources/{city}/{guide-slug}/`
- Footer CTA → `/pricing/instant-quote?src=niche_{slug}_footer`

**Total**: 18 internal links per niche hub

---

### Blog Hub Links

**Outbound Links**:
- Category Chips (5×) → `/blog/{category}/`
- Article Cards (N×) → `/resources/{city}/{article-slug}/`
- Sidebar Niche Links (6×) → `/niches/{slug}/`
- Sidebar City Links (3×) → `/locations/{city}/hood-cleaning/` (default)

**Total**: 14+ links (depends on article count)

---

## 7. Acceptance Criteria

### Metadata Checks
- [ ] All page titles ≤ 60 characters
- [ ] All meta descriptions ≤ 160 characters
- [ ] All pages have OpenGraph tags
- [ ] All pages have JSON-LD schema
- [ ] Keywords array populated (5-10 keywords per page)

### Copy Checks
- [ ] All H1s unique per page
- [ ] H2 hierarchy correct (no H3 without H2)
- [ ] CTA copy matches buttons and links
- [ ] Calculator links use `?src=` parameters

### Schema Checks
- [ ] Homepage has WebSite + Organization schema
- [ ] Niche hubs have Service + BreadcrumbList schema
- [ ] Blog hubs have CollectionPage schema
- [ ] All schema validates at https://validator.schema.org/

### Internal Linking Checks
- [ ] Homepage has 32 internal links
- [ ] Niche hubs have 18 internal links each
- [ ] All calculator links use tracking parameters
- [ ] No broken links (404s)

---

## Implementation Notes for Cursor

1. **Metadata Placement**: All metadata goes in `page.tsx` using Next.js 13+ `export const metadata`
2. **Schema Rendering**: Use `<script type="application/ld+json">` in JSX
3. **Copy Storage**: Create `/lib/data/copy.ts` for reusable copy strings
4. **Variable Interpolation**: Use niche/category data files to populate dynamic copy
5. **Link Tracking**: All calculator links MUST include `?src=` parameter—no exceptions

---

**Status**: SEO contracts complete ✅
**Next**: Acceptance checklist
