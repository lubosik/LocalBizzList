# Content Taxonomy & Hub Architecture

## Overview

This document defines the content taxonomy and hub structure for LocalBizzList. The taxonomy supports 6 service niches with unified categorization across blog resources and issue-based articles.

---

## Site Structure

```
/
├── page.tsx (Homepage - 6 sections)
│
├── /niches/
│   ├── page.tsx (Niche Landing Hub)
│   ├── /restaurant-hood-cleaning/
│   │   └── page.tsx (Niche Hub with filters)
│   ├── /grease-trap-cleaning/
│   ├── /septic-tank-services/
│   ├── /sealcoating/
│   ├── /fire-extinguisher-services/
│   └── /sprinkler-repair/
│
├── /blog/
│   ├── page.tsx (Blog Hub - all articles)
│   ├── /cost-guides/
│   ├── /compliance-inspections/
│   ├── /maintenance-repairs/
│   ├── /emergency-after-hours/
│   └── /planning-roi/
│
├── /services/
│   └── /restaurant-hood-cleaning/ (Phase 1 - keep)
│
├── /locations/
│   ├── /miami/hood-cleaning/ (Phase 1 - keep)
│   ├── /boca-raton/hood-cleaning/ (Phase 1 - keep)
│   └── /fort-lauderdale/hood-cleaning/ (Phase 1 - keep)
│
├── /resources/
│   ├── page.tsx (Resources Hub)
│   ├── /miami/
│   │   ├── nfpa-96-hood-cleaning-checklist/ (Phase 1 - keep)
│   │   ├── hood-cleaning-frequency-by-restaurant-type/
│   │   ├── kitchen-exhaust-fan-problems-fixes/
│   │   └── ... (6 more articles)
│   ├── /boca-raton/
│   └── /fort-lauderdale/
│
└── /pricing/instant-quote/
    └── page.tsx (Calculator - link only, DO NOT TOUCH)
```

---

## 1. Niche Taxonomy (6 Service Niches)

### Niche 1: Restaurant Hood Cleaning (Primary)
**Slug**: `restaurant-hood-cleaning`
**Icon**: Lucide `Flame`
**Description**: "NFPA 96 compliant hood cleaning, exhaust system maintenance, and fire safety certification for commercial kitchens."
**Status**: ✅ Phase 1 content live
**Coverage**:
- Service page: `/services/restaurant-hood-cleaning/`
- Location pages: `/locations/{miami,boca-raton,fort-lauderdale}/hood-cleaning/`
- Resources: 9 articles (3 per city)

### Niche 2: Grease Trap Cleaning
**Slug**: `grease-trap-cleaning`
**Icon**: Lucide `Droplets`
**Description**: "Commercial grease trap pumping, maintenance, and compliance services for restaurants and food service facilities."
**Status**: 🆕 To build (Phase 2)
**Planned Coverage**:
- Service page: `/services/grease-trap-cleaning/`
- Location pages: `/locations/{miami,boca-raton,fort-lauderdale}/grease-trap-cleaning/`
- Resources: 9 articles (3 per city)

### Niche 3: Septic Tank Services
**Slug**: `septic-tank-services`
**Icon**: Lucide `Truck`
**Description**: "Septic tank pumping, inspections, repairs, and emergency services for commercial and residential properties."
**Status**: 🆕 To build (Phase 2)
**Planned Coverage**:
- Service page: `/services/septic-tank-services/`
- Location pages: `/locations/{miami,boca-raton,fort-lauderdale}/septic-services/`
- Resources: 9 articles (3 per city)

### Niche 4: Sealcoating & Paving
**Slug**: `sealcoating`
**Icon**: Lucide `HardHat`
**Description**: "Asphalt sealcoating, striping, pothole repair, and parking lot maintenance for commercial properties."
**Status**: 🆕 To build (Phase 2)
**Planned Coverage**:
- Service page: `/services/sealcoating/`
- Location pages: `/locations/{miami,boca-raton,fort-lauderdale}/sealcoating/`
- Resources: 9 articles (3 per city)

### Niche 5: Fire Extinguisher Services
**Slug**: `fire-extinguisher-services`
**Icon**: Lucide `AlertTriangle`
**Description**: "Fire extinguisher inspections, recharging, installation, and compliance testing for commercial facilities."
**Status**: 🆕 To build (Phase 2)
**Planned Coverage**:
- Service page: `/services/fire-extinguisher-services/`
- Location pages: `/locations/{miami,boca-raton,fort-lauderdale}/fire-extinguisher/`
- Resources: 9 articles (3 per city)

### Niche 6: Sprinkler Repair & Testing
**Slug**: `sprinkler-repair`
**Icon**: Lucide `Sprinkle`
**Description**: "Commercial sprinkler system repairs, backflow testing, and fire suppression maintenance services."
**Status**: 🆕 To build (Phase 2)
**Planned Coverage**:
- Service page: `/services/sprinkler-repair/`
- Location pages: `/locations/{miami,boca-raton,fort-lauderdale}/sprinkler-repair/`
- Resources: 9 articles (3 per city)

---

## 2. Blog Categories (5 Content Types)

All blog content (resources + issue articles) is categorized into 5 topics that span all niches.

### Category 1: Cost Guides
**Slug**: `cost-guides`
**Icon**: Lucide `DollarSign`
**Color**: `bg-primary`
**Description**: "Pricing breakdowns, cost calculators, ROI analysis, and budget planning guides."
**Example Articles**:
- "How Much Does Hood Cleaning Cost in Miami?"
- "Grease Trap Pumping Prices by Restaurant Size"
- "Septic Tank Inspection Cost Guide for Boca Raton"

### Category 2: Compliance & Inspections
**Slug**: `compliance-inspections`
**Icon**: Lucide `ClipboardCheck`
**Color**: `bg-secondary`
**Description**: "Regulatory requirements, inspection checklists, code compliance, and certification guides."
**Example Articles**:
- "NFPA 96 Hood Cleaning Checklist for Miami Restaurants"
- "Fire Extinguisher Inspection Requirements in Florida"
- "Septic Tank Compliance Rules in Miami-Dade County"

### Category 3: Maintenance & Repairs
**Slug**: `maintenance-repairs`
**Icon**: Lucide `Wrench`
**Color**: `bg-accent`
**Description**: "Preventive maintenance schedules, troubleshooting guides, and repair best practices."
**Example Articles**:
- "Kitchen Exhaust Fan Problems and Fixes"
- "Grease Trap Maintenance Schedule by Volume"
- "Sealcoating Maintenance Timeline for Parking Lots"

### Category 4: Emergency & After-Hours
**Slug**: `emergency-after-hours`
**Icon**: Lucide `Clock`
**Color**: `bg-primary-int`
**Description**: "Emergency services, after-hours availability, same-day response, and urgent repair guides."
**Example Articles**:
- "Emergency Hood Cleaning for Failed Health Inspections"
- "After-Hours Grease Trap Overflow Solutions"
- "24/7 Septic Tank Emergency Services in Fort Lauderdale"

### Category 5: Planning & ROI
**Slug**: `planning-roi`
**Icon**: Lucide `TrendingUp`
**Color**: `bg-neutral-800`
**Description**: "Strategic planning, long-term maintenance contracts, cost-benefit analysis, and efficiency guides."
**Example Articles**:
- "Hood Cleaning Frequency by Restaurant Type"
- "Annual Grease Trap Service Contract vs. On-Demand"
- "ROI of Preventive Sealcoating vs. Reactive Repairs"

---

## 3. Issues Taxonomy

The "Common Issues We Solve" grid on the homepage and niche hubs pulls from an **issues taxonomy**. Each issue is a specific problem + solution pair tied to a niche and city.

### Issue Structure
- **Problem Statement** (Title): Clear, specific customer pain point
- **Solution Snippet**: 1 sentence preview of the solution
- **Category**: One of the 5 blog categories
- **Niche**: Which service niche solves this
- **Cities**: Which cities this issue applies to (Miami, Boca Raton, Fort Lauderdale)
- **Target Keywords**: 3-5 keywords for SEO
- **Article Slug**: Link to resource article

### Example Issues by Niche

#### Hood Cleaning Issues
1. **Failed Health Inspection Due to Grease Buildup**
   - Solution: "NFPA 96 compliance cleaning restores safety ratings in 24-48 hours."
   - Category: Compliance & Inspections
   - Cities: All 3
   - Link: `/resources/{city}/failed-health-inspection-grease-buildup/`

2. **Exhaust Fan Making Loud Grinding Noise**
   - Solution: "Emergency fan motor replacement with same-day service available."
   - Category: Emergency & After-Hours
   - Cities: All 3
   - Link: `/resources/{city}/exhaust-fan-grinding-noise-repair/`

3. **Quarterly vs. Monthly Hood Cleaning Frequency**
   - Solution: "NFPA 96 mandates cleaning frequency based on cooking volume and grease production."
   - Category: Compliance & Inspections
   - Cities: All 3
   - Link: `/resources/{city}/hood-cleaning-frequency-by-restaurant-type/` (existing)

#### Grease Trap Issues
1. **Grease Trap Overflow Backing Up Drains**
   - Solution: "Emergency pumping service clears blockages and prevents health code violations."
   - Category: Emergency & After-Hours
   - Cities: All 3

2. **How Often Should We Pump Our Grease Trap?**
   - Solution: "Pumping frequency depends on tank size and daily wastewater volume per EPA guidelines."
   - Category: Maintenance & Repairs
   - Cities: All 3

#### Septic Tank Issues
1. **Septic Tank Backup Causing Property Flooding**
   - Solution: "Emergency pumping and drain field inspection resolve backups in 4-6 hours."
   - Category: Emergency & After-Hours
   - Cities: All 3

2. **Failed Septic Inspection During Property Sale**
   - Solution: "Pre-sale septic inspections identify issues early to avoid deal delays."
   - Category: Compliance & Inspections
   - Cities: All 3

#### Sealcoating Issues
1. **Parking Lot Cracks Worsening After Rain**
   - Solution: "Crack sealing and sealcoating prevent water penetration and extend pavement life."
   - Category: Maintenance & Repairs
   - Cities: All 3

2. **Faded Parking Lot Striping Causing Confusion**
   - Solution: "Re-striping with reflective paint improves visibility and ADA compliance."
   - Category: Compliance & Inspections
   - Cities: All 3

#### Fire Extinguisher Issues
1. **Fire Extinguishers Expired or Missing Tags**
   - Solution: "Annual inspections and recharging ensure compliance with Florida Fire Prevention Code."
   - Category: Compliance & Inspections
   - Cities: All 3

2. **Building Fails Fire Safety Inspection**
   - Solution: "Emergency extinguisher installation and certification available within 24 hours."
   - Category: Emergency & After-Hours
   - Cities: All 3

#### Sprinkler Repair Issues
1. **Backflow Preventer Leaking Water**
   - Solution: "Certified backflow testing and repair prevents contamination and fines."
   - Category: Maintenance & Repairs
   - Cities: All 3

2. **Sprinkler Zone Not Activating**
   - Solution: "Valve replacement and control panel diagnostics restore system function."
   - Category: Maintenance & Repairs
   - Cities: All 3

---

## 4. Hub Pages to Create

### 4.1 Niche Landing Hub (`/niches/page.tsx`)

**Purpose**: Central directory of all 6 service niches

**Layout**:
- Hero: "Explore Our Service Niches"
- Niche Grid: 6 cards (same as homepage)
- CTA: "Need help choosing? Call us for a free consultation."

**Metadata**:
```typescript
export const metadata: Metadata = {
  title: 'Commercial Service Niches - LocalBizzList',
  description: 'Explore our 6 service niches: hood cleaning, grease trap, septic, sealcoating, fire extinguisher, and sprinkler repair across South Florida.',
}
```

**Component**: Reuse `<NicheGrid>` from homepage

---

### 4.2 Individual Niche Hub (`/niches/[slug]/page.tsx`)

**Purpose**: Hub page for each niche showing filtered resources, issues, and locations

**Layout**:
1. **Hero**
   - H1: "{Niche Name} Services in South Florida"
   - Subcopy: Niche-specific description
   - CTA: "Get Instant Quote" → `/pricing/instant-quote?src=niche_{slug}`

2. **Service Locations**
   - 3 cards linking to city pages:
     - `/locations/miami/{service-slug}/`
     - `/locations/boca-raton/{service-slug}/`
     - `/locations/fort-lauderdale/{service-slug}/`

3. **Common Issues** (Filtered)
   - 3×2 grid (6 issues)
   - Filter issues where `niche = current_niche`

4. **Resources** (Filtered)
   - 2×3 grid (6 articles)
   - Filter resources where `niche = current_niche`

5. **CTA Band**
   - "Need same-day service? Get an instant quote."
   - Button → Calculator with `?src=niche_{slug}_footer`

**Metadata Example** (Hood Cleaning):
```typescript
export const metadata: Metadata = {
  title: 'Restaurant Hood Cleaning Services - South Florida | LocalBizzList',
  description: 'NFPA 96 compliant hood cleaning services in Miami, Boca Raton, and Fort Lauderdale. Same-day service, certified technicians, instant quotes.',
  keywords: ['restaurant hood cleaning', 'NFPA 96', 'South Florida', 'Miami', 'commercial kitchen cleaning'],
}
```

**Component Interface**:
```typescript
interface NicheHubProps {
  niche: {
    slug: string
    title: string
    description: string
    icon: LucideIcon
  }
  locations: {
    city: string
    slug: string
    href: string
  }[]
  issues: IssueCardProps[] // Filtered by niche
  resources: GuideCardProps[] // Filtered by niche
}
```

---

### 4.3 Blog Hub (`/blog/page.tsx`)

**Purpose**: Central directory of all blog articles (resources + issues)

**Layout**:
1. **Hero**
   - H1: "Resources & Guides"
   - Subcopy: "Expert advice on commercial services, compliance, and maintenance"

2. **Category Filter Chips**
   - 5 category chips (same as homepage)
   - Click to filter articles by category

3. **Article Grid**
   - 3×N grid of all articles (paginated)
   - Show: Title, excerpt, category tag, city badge, publish date
   - Sort: Newest first

4. **Sidebar** (Desktop only)
   - "Browse by Service" → Links to 6 niche hubs
   - "Browse by City" → Links to 3 location pages

**Metadata**:
```typescript
export const metadata: Metadata = {
  title: 'Commercial Services Resources & Guides - LocalBizzList',
  description: 'Expert guides on hood cleaning, grease trap, septic, and more. Cost guides, compliance checklists, and maintenance tips for South Florida businesses.',
}
```

---

### 4.4 Category Hub (`/blog/[category]/page.tsx`)

**Purpose**: Filtered view of articles by category

**Layout**:
- Hero: "{Category Name}" + description
- Article Grid: Filtered by category
- Sidebar: Same as Blog Hub

**Metadata Example** (Compliance & Inspections):
```typescript
export const metadata: Metadata = {
  title: 'Compliance & Inspections Guides - LocalBizzList',
  description: 'NFPA 96 checklists, fire safety inspection guides, septic compliance rules, and more for South Florida commercial facilities.',
}
```

---

## 5. Navigation Structure

### Primary Nav (Header)
- **Logo** → `/`
- **Services** (Dropdown)
  - Restaurant Hood Cleaning → `/niches/restaurant-hood-cleaning/`
  - Grease Trap Cleaning → `/niches/grease-trap-cleaning/`
  - Septic Tank Services → `/niches/septic-tank-services/`
  - Sealcoating → `/niches/sealcoating/`
  - Fire Extinguisher → `/niches/fire-extinguisher-services/`
  - Sprinkler Repair → `/niches/sprinkler-repair/`
  - View All → `/niches/`
- **Resources** → `/blog/`
- **Locations** (Dropdown)
  - Miami → `/locations/miami/hood-cleaning/` (default to hood cleaning)
  - Boca Raton → `/locations/boca-raton/hood-cleaning/`
  - Fort Lauderdale → `/locations/fort-lauderdale/hood-cleaning/`
- **Get Quote** → `/pricing/instant-quote?src=nav`

### Footer Nav
- **Services** (Links to 6 niche hubs)
- **Resources** (Links to 5 category pages)
- **Locations** (Links to 3 city pages)
- **Company** (About, Contact - stubbed)
- **Calculator** → `/pricing/instant-quote?src=footer`

---

## 6. Content Relationships

### Internal Linking Rules

**From Homepage**:
- Hero CTA → `/niches/`
- Niche cards → `/niches/{slug}/`
- Category chips → `/blog/{category}/`
- Issue cards → `/resources/{city}/{issue-slug}/`
- Guide cards → `/resources/{city}/{guide-slug}/`
- Footer CTA → `/pricing/instant-quote?src=home_footer`

**From Niche Hub**:
- Location cards → `/locations/{city}/{service-slug}/`
- Issue cards → `/resources/{city}/{issue-slug}/`
- Guide cards → `/resources/{city}/{guide-slug}/`
- CTA → `/pricing/instant-quote?src=niche_{slug}_footer`

**From Blog Hub**:
- Category chips → `/blog/{category}/`
- Article cards → `/resources/{city}/{article-slug}/`
- Sidebar links → `/niches/{slug}/` and `/locations/{city}/{service-slug}/`

**From Resource Article** (see internal-link-map.md):
- 1× City landing page
- 1× Service page
- 2× Calculator (hero + inline)
- 2× Related resources (same city)

---

## 7. Data Models

### Niche Data (`/lib/data/niches.ts`)
```typescript
export const NICHES = [
  {
    slug: 'restaurant-hood-cleaning',
    title: 'Restaurant Hood Cleaning',
    shortTitle: 'Hood Cleaning',
    icon: 'Flame',
    description: 'NFPA 96 compliant hood cleaning, exhaust system maintenance, and fire safety certification for commercial kitchens.',
    servicePageHref: '/services/restaurant-hood-cleaning/',
    nicheHubHref: '/niches/restaurant-hood-cleaning/',
    status: 'live',
  },
  // ... 5 more niches
]
```

### Category Data (`/lib/data/categories.ts`)
```typescript
export const CATEGORIES = [
  {
    slug: 'cost-guides',
    label: 'Cost Guides',
    icon: 'DollarSign',
    colorScheme: 'primary',
    description: 'Pricing breakdowns, cost calculators, ROI analysis, and budget planning guides.',
  },
  // ... 4 more categories
]
```

### City Data (`/lib/data/cities.ts`)
```typescript
export const CITIES = [
  {
    slug: 'miami',
    name: 'Miami',
    county: 'Miami-Dade',
    state: 'FL',
  },
  {
    slug: 'boca-raton',
    name: 'Boca Raton',
    county: 'Palm Beach',
    state: 'FL',
  },
  {
    slug: 'fort-lauderdale',
    name: 'Fort Lauderdale',
    county: 'Broward',
    state: 'FL',
  },
]
```

---

## Implementation Notes for Cursor

1. **Priority Order**:
   - ✅ Homepage (using new components)
   - 🟢 Niche Landing Hub (`/niches/page.tsx`)
   - 🟢 Individual Niche Hubs (`/niches/[slug]/page.tsx`) - start with hood cleaning
   - 🟡 Blog Hub (`/blog/page.tsx`)
   - 🟡 Category Hubs (`/blog/[category]/page.tsx`)

2. **Data Files**:
   - Create `/lib/data/niches.ts` with all 6 niches
   - Create `/lib/data/categories.ts` with all 5 categories
   - Create `/lib/data/cities.ts` with 3 cities

3. **Dynamic Routes**:
   - Use Next.js 13+ dynamic routes: `[slug]`, `[category]`, `[city]`
   - Generate static params for SEO: `export async function generateStaticParams()`

4. **Content Queries**:
   - Niche hubs: Filter issues/resources by `niche` field
   - Category hubs: Filter articles by `category` field
   - Blog hub: Show all articles, sorted by date

5. **Reusable Components**:
   - `<NicheGrid>` (Homepage, Niche Landing Hub)
   - `<CategoryStrip>` (Homepage, Blog Hub)
   - `<IssuesGrid>` (Homepage, Niche Hubs)
   - `<LatestGuides>` (Homepage, Blog Hub)

---

**Status**: Taxonomy complete ✅
**Next**: Issues data contract
