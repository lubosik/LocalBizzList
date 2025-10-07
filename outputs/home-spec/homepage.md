# Homepage Wireframe + Component Specifications

## Visual Structure

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER (existing)                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                       HERO SECTION                           │
│          [Headline] [Subcopy] [2 CTAs] [Search]             │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                      NICHE GRID (6 cards)                    │
│              [Card] [Card] [Card]                            │
│              [Card] [Card] [Card]                            │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                  BLOG CATEGORIES STRIP                       │
│         [Chip] [Chip] [Chip] [Chip] [Chip]                  │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│              COMMON ISSUES WE SOLVE (3×4 grid)              │
│         [Issue] [Issue] [Issue] [Issue]                     │
│         [Issue] [Issue] [Issue] [Issue]                     │
│         [Issue] [Issue] [Issue] [Issue]                     │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                  LATEST GUIDES (2×3 grid)                    │
│              [Guide] [Guide] [Guide]                         │
│              [Guide] [Guide] [Guide]                         │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    FOOTER CTA BAND                           │
│        "Need a certificate tonight?" + Button                │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                         FOOTER (existing)                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 1: Hero

### Layout
- **Container**: Full-width with `bg-secondary` gradient overlay
- **Content**: Centered, max-width `container` (1024px)
- **Padding**: `py-20` (mobile), `py-28` (desktop)

### Elements
1. **Headline** (H1)
   - Text: "South Florida's Trusted Directory for Commercial Services"
   - Style: `text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight`

2. **Subcopy** (P)
   - Text: "Find certified experts for restaurant hood cleaning, grease trap services, septic maintenance, and more. Instant quotes, same-day service, NFPA compliance guaranteed."
   - Style: `text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed`

3. **CTA Buttons** (Flex container)
   - Layout: `flex gap-4 justify-center mb-8`
   - **Primary CTA**: "Browse Service Niches" → `/niches/`
     - Style: `btn-primary px-8 py-4 text-lg`
   - **Secondary CTA**: "Get Instant Quote" → `/pricing/instant-quote?src=home_hero`
     - Style: `btn-outline px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-secondary`

4. **Search Field** (Optional - Phase 2)
   - Input: `input max-w-2xl mx-auto`
   - Placeholder: "Search by city or service (e.g., 'Miami hood cleaning')..."
   - Icon: Lucide `Search` icon
   - Filters: City dropdown, Niche dropdown

### Component Interface
```typescript
interface HeroProps {
  headline: string
  subcopy: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
  showSearch?: boolean
}
```

### Breakpoints
- **Mobile** (`< 768px`): Single column, stacked CTAs, text-4xl headline
- **Tablet** (`768px - 1024px`): Inline CTAs, text-5xl headline
- **Desktop** (`> 1024px`): Full layout, text-6xl headline

---

## Section 2: Niche Grid

### Layout
- **Container**: `container py-16`
- **Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

### Section Header
- **H2**: "Explore Our Service Niches"
  - Style: `text-3xl font-bold text-neutral-800 mb-2 text-center`
- **Subheading**: "Certified providers across South Florida's most in-demand commercial services"
  - Style: `text-neutral-600 mb-12 text-center`

### Niche Card (6 total)
1. **Restaurant Hood Cleaning** (primary)
2. **Grease Trap Cleaning**
3. **Septic Tank Services**
4. **Sealcoating & Paving**
5. **Fire Extinguisher Services**
6. **Sprinkler Repair & Testing**

### Card Structure
- **Container**: `card p-6 flex flex-col items-start`
- **Icon**: Lucide icon in `w-12 h-12 text-primary mb-4`
  - Hood Cleaning: `Flame`
  - Grease Trap: `Droplets`
  - Septic: `Truck`
  - Sealcoating: `HardHat`
  - Fire Extinguisher: `AlertTriangle`
  - Sprinkler: `Sprinkle`
- **Title**: H3 with `text-xl font-semibold text-neutral-800 mb-2`
- **Description**: 2 lines max, `text-neutral-600 text-sm mb-4 flex-1`
- **CTA Button**: "View Hub" → `/niches/{slug}/`
  - Style: `btn-primary px-4 py-2 text-sm`

### Component Interface
```typescript
interface NicheCardProps {
  icon: LucideIcon
  title: string
  description: string
  slug: string
}

interface NicheGridProps {
  niches: NicheCardProps[]
}
```

### Breakpoints
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns

---

## Section 3: Blog Categories Strip

### Layout
- **Container**: `bg-neutral-50 py-12`
- **Content**: `container`
- **Chips Container**: `flex flex-wrap gap-3 justify-center`

### Section Header
- **H2**: "Browse Resources by Topic"
  - Style: `text-2xl font-bold text-neutral-800 mb-6 text-center`

### Category Chips (5 total)
1. **Cost Guides** → `/blog/cost-guides`
2. **Compliance & Inspections** → `/blog/compliance-inspections`
3. **Maintenance & Repairs** → `/blog/maintenance-repairs`
4. **Emergency & After-Hours** → `/blog/emergency-after-hours`
5. **Planning & ROI** → `/blog/planning-roi`

### Chip Structure
- **Style**: Large clickable chip
  - Base: `inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-base transition-all`
  - Colors (rotating):
    1. `bg-primary text-white hover:bg-primary-int`
    2. `bg-secondary text-white hover:bg-secondary-int`
    3. `bg-accent text-white hover:bg-accent-int`
    4. `bg-primary-int text-white hover:bg-primary`
    5. `bg-neutral-800 text-white hover:bg-neutral-strong`
- **Icon**: Lucide icon matching category
  - Cost Guides: `DollarSign`
  - Compliance: `ClipboardCheck`
  - Maintenance: `Wrench`
  - Emergency: `Clock`
  - Planning: `TrendingUp`

### Component Interface
```typescript
interface CategoryChipProps {
  label: string
  slug: string
  icon: LucideIcon
  colorScheme: 'primary' | 'secondary' | 'accent' | 'primary-int' | 'neutral'
}

interface CategoryStripProps {
  categories: CategoryChipProps[]
}
```

### Breakpoints
- **Mobile**: Chips wrap, smaller padding
- **Tablet/Desktop**: Inline chips with full padding

---

## Section 4: Common Issues We Solve

### Layout
- **Container**: `container py-16`
- **Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`

### Section Header
- **H2**: "Common Issues We Can Solve"
  - Style: `text-3xl font-bold text-neutral-800 mb-2 text-center`
- **Subheading**: "Expert solutions for your toughest commercial facility challenges"
  - Style: `text-neutral-600 mb-12 text-center`

### Issue Card Structure
- **Container**: `card p-5 hover:shadow-xl transition-shadow`
- **Tag** (Niche label): `text-xs font-semibold text-primary uppercase tracking-wide mb-2`
- **Title**: H3 problem statement, `text-base font-semibold text-neutral-800 mb-2 leading-tight`
  - Example: "Failed Health Inspection Due to Grease Buildup"
- **Snippet**: 1 sentence solution preview, `text-sm text-neutral-600 mb-3`
  - Example: "NFPA 96 compliance cleaning restores safety ratings in 24-48 hours."
- **Link**: "Read Solution" → `/resources/{city}/{issue-slug}/`
  - Style: `text-primary hover:text-primary-int font-semibold text-sm inline-flex items-center gap-1`
  - Icon: Lucide `ArrowRight` size 14

### Data Source
- Pull from `/content/issues/{niche}.yml` (see issues-contract.md)
- Display 12 total issues: 2 per niche (6 niches × 2 = 12)
- Prioritize: Hood Cleaning (3), Grease Trap (2), Septic (2), others (1-2 each)

### Component Interface
```typescript
interface IssueCardProps {
  niche: string // For tag
  title: string // Problem statement
  snippet: string // 1-sentence solution
  slug: string // For link
  city: string // For link
}

interface IssuesGridProps {
  issues: IssueCardProps[] // Array of 12
}
```

### Breakpoints
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 4 columns

---

## Section 5: Latest Guides

### Layout
- **Container**: `bg-neutral-50 py-16`
- **Content**: `container`
- **Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

### Section Header
- **H2**: "Latest Resources & Guides"
  - Style: `text-3xl font-bold text-neutral-800 mb-2 text-center`
- **Subheading**: "Educational content to help you maintain compliance and reduce costs"
  - Style: `text-neutral-600 mb-12 text-center`
- **View All Link**: "View All Resources" → `/resources/`
  - Style: `text-primary hover:text-primary-int font-semibold inline-flex items-center gap-2 text-center mx-auto mb-12`
  - Icon: Lucide `ArrowRight`

### Guide Card Structure
- **Container**: `card overflow-hidden`
- **City Badge** (top): `absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full`
  - Text: "Miami", "Boca Raton", or "Fort Lauderdale"
- **Content Padding**: `p-6`
- **Category Tag**: `category-tag mb-3`
  - Text: Article category (e.g., "Compliance & Inspections")
- **Title**: H3, `text-lg font-semibold text-neutral-800 mb-2 leading-tight hover:text-primary transition-colors`
  - Example: "30-Point NFPA 96 Compliance Checklist for Miami Restaurants"
- **Excerpt**: `text-sm text-neutral-600 mb-4 line-clamp-2`
- **Metadata**: `flex items-center gap-4 text-xs text-neutral-500`
  - Published date
  - Read time estimate
- **Link**: Entire card clickable → `/resources/{city}/{slug}/`

### Data Source
- Query 6 newest resource articles from `/app/resources/[city]/[slug]/`
- Sort by publish date descending
- Mix of cities and topics

### Component Interface
```typescript
interface GuideCardProps {
  title: string
  excerpt: string
  city: string
  category: string
  publishedAt: string
  readTime: string // "5 min read"
  slug: string
  citySlug: string
}

interface LatestGuidesProps {
  guides: GuideCardProps[] // Array of 6
}
```

### Breakpoints
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns (2 rows)

---

## Section 6: Footer CTA Band

### Layout
- **Container**: Full-width `bg-secondary py-12`
- **Content**: `container flex flex-col md:flex-row items-center justify-between gap-6`

### Elements
1. **Headline + Subtext** (Left side)
   - **H2**: "Need a Certificate of Performance Tonight?"
     - Style: `text-2xl md:text-3xl font-bold text-white mb-2`
   - **Subtext**: "Get an instant quote for same-day hood cleaning with NFPA 96 certification."
     - Style: `text-white/90 text-base`

2. **CTA Button** (Right side)
   - Text: "Get Instant Quote"
   - Link: `/pricing/instant-quote?src=home_footer` (link only, no calculator changes)
   - Style: `btn-primary bg-white text-secondary hover:bg-neutral-50 px-8 py-4 text-lg font-bold`
   - Icon: Lucide `Calculator` before text

### Component Interface
```typescript
interface FooterCTAProps {
  headline: string
  subtext: string
  buttonText: string
  buttonHref: string
}
```

### Breakpoints
- **Mobile**: Stacked layout (headline → button)
- **Tablet/Desktop**: Flex row (headline left, button right)

---

## Component Files to Create

### New Components
1. **`/components/home/HomeHero.tsx`**
   - Props: `HeroProps`
   - Renders hero section with CTAs

2. **`/components/home/NicheGrid.tsx`**
   - Props: `NicheGridProps`
   - Renders 6 niche cards
   - Child: `NicheCard.tsx`

3. **`/components/home/CategoryStrip.tsx`**
   - Props: `CategoryStripProps`
   - Renders category chips with icons

4. **`/components/home/IssuesGrid.tsx`**
   - Props: `IssuesGridProps`
   - Renders 3×4 issue cards
   - Child: `IssueCard.tsx`

5. **`/components/home/LatestGuides.tsx`**
   - Props: `LatestGuidesProps`
   - Renders 2×3 guide cards
   - Child: `GuideCard.tsx`

6. **`/components/home/FooterCTA.tsx`**
   - Props: `FooterCTAProps`
   - Renders CTA band

### Updated Page
- **`/app/page.tsx`**
  - Remove legacy luxury content
  - Import and render all 6 new homepage sections
  - Update metadata:
```typescript
export const metadata: Metadata = {
  title: 'LocalBizzList - South Florida Commercial Services Directory',
  description: 'Find certified experts for restaurant hood cleaning, grease trap services, septic maintenance, and more across Miami, Fort Lauderdale, and Boca Raton. Instant quotes, same-day service.',
  keywords: ['South Florida', 'commercial services', 'hood cleaning', 'grease trap', 'septic tank', 'NFPA 96', 'Miami', 'Fort Lauderdale', 'Boca Raton'],
}
```

---

## Design Tokens Reference

### Colors (from tailwind.config.ts)
- **Primary**: Default blue, use for main CTAs and links
- **Secondary**: Teal/aqua, use for hero background and footer CTA
- **Accent**: Yellow/gold, use for category chips
- **Neutral**: Grayscale for text and borders

### Typography
- **Headlines (H1)**: `text-4xl md:text-5xl lg:text-6xl font-bold`
- **Section Headers (H2)**: `text-3xl font-bold`
- **Card Titles (H3)**: `text-xl font-semibold` (grid), `text-lg font-semibold` (guides)
- **Body Text**: `text-base` (default), `text-sm` (cards)

### Spacing
- **Section Padding**: `py-16` (standard), `py-20 md:py-28` (hero)
- **Container**: `container` (max-w-screen-lg, px-4 auto)
- **Grid Gaps**: `gap-6` (standard), `gap-4` (dense grids)

### Effects
- **Cards**: `card` class (outline, rounded, hover:shadow-lg)
- **Buttons**: `btn-primary`, `btn-outline`
- **Transitions**: `transition-colors`, `transition-shadow`, `transition-all`

---

## Acceptance Criteria

### Visual Requirements
- [ ] All 6 sections render in correct order
- [ ] Hero gradient overlay visible on all screen sizes
- [ ] Niche grid shows 3 columns on desktop, 2 on tablet, 1 on mobile
- [ ] Issue cards display 4 columns on desktop, 2 on tablet, 1 on mobile
- [ ] City badges visible on guide cards
- [ ] Footer CTA background uses `bg-secondary`

### Content Requirements
- [ ] No luxury/wealth management content present
- [ ] All 6 niches represented in grid
- [ ] 5 blog categories in strip
- [ ] 12 issue cards displayed (2 per niche)
- [ ] 6 latest guides shown
- [ ] Calculator links use `?src=` parameters

### Technical Requirements
- [ ] All components use TypeScript interfaces
- [ ] No hardcoded colors (tokens only)
- [ ] Lucide icons imported correctly
- [ ] Links use Next.js `<Link>` component
- [ ] Metadata updated in `page.tsx`
- [ ] Responsive breakpoints working

### SEO Requirements
- [ ] H1 on homepage: "South Florida's Trusted Directory for Commercial Services"
- [ ] Meta title ≤ 60 chars
- [ ] Meta description ≤ 160 chars
- [ ] All images have alt text
- [ ] Semantic HTML structure (section, article, nav)

---

## Implementation Notes for Cursor

1. **Create components folder**: `/components/home/` for all 6 new components
2. **Data sourcing**:
   - Niche data: Hardcode 6 niches in `NicheGrid.tsx` (static content)
   - Issues data: Create `/content/issues/{niche}.yml` files (see issues-contract.md)
   - Latest guides: Query from existing `/app/resources/` directory
3. **Calculator protection**: All calculator links must use `?src=home_hero` or `?src=home_footer` parameters only—do not modify calculator logic
4. **Icon imports**: `import { IconName } from 'lucide-react'`
5. **Link format**: `<Link href="/path/">`
6. **Remove legacy components**: Delete imports for `ArticleGrid`, `BusinessGrid`, luxury hero content

---

**Status**: Homepage spec complete ✅
**Next**: Hubs & Taxonomy definition
