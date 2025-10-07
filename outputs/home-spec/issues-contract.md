# Issues Data Contract

## Purpose

The **Issues Taxonomy** powers the "Common Issues We Can Solve" section on the homepage and niche hubs. Each issue represents a customer pain point with a linked resource article explaining the solution.

This document defines the YAML schema, data structure, and implementation requirements for the issues taxonomy.

---

## File Structure

```
/content/issues/
├── hood-cleaning.yml
├── grease-trap.yml
├── septic-tank.yml
├── sealcoating.yml
├── fire-extinguisher.yml
└── sprinkler-repair.yml
```

Each niche has its own YAML file containing 6-12 issue definitions.

---

## YAML Schema

### Top-Level Structure

```yaml
niche: "restaurant-hood-cleaning"  # Niche slug
nicheTitle: "Restaurant Hood Cleaning"  # Display name
icon: "Flame"  # Lucide icon name
issues:
  - slug: "failed-health-inspection-grease-buildup"
    title: "Failed Health Inspection Due to Grease Buildup"
    snippet: "NFPA 96 compliance cleaning restores safety ratings in 24-48 hours."
    category: "compliance-inspections"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "failed health inspection grease buildup"
      - "restore health rating after failed inspection"
      - "NFPA 96 emergency cleaning"
    articleSlug: "failed-health-inspection-grease-buildup"
    priority: 1  # Higher = show first on homepage
```

### Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `niche` | string | ✅ | Niche slug (matches `/niches/{slug}/`) |
| `nicheTitle` | string | ✅ | Display name for niche |
| `icon` | string | ✅ | Lucide icon name |
| `issues` | array | ✅ | Array of issue objects |
| `issues[].slug` | string | ✅ | Issue slug (unique within niche) |
| `issues[].title` | string | ✅ | Problem statement (45-60 chars) |
| `issues[].snippet` | string | ✅ | 1-sentence solution (80-120 chars) |
| `issues[].category` | string | ✅ | Blog category slug (see taxonomy.md) |
| `issues[].cities` | array | ✅ | Cities where this issue applies |
| `issues[].keywords` | array | ✅ | 3-5 target keywords for SEO |
| `issues[].articleSlug` | string | ✅ | Resource article slug (without city prefix) |
| `issues[].priority` | number | ⚠️ | Sort order (1 = highest, 10 = lowest). Default: 5 |

---

## Example Files

### `/content/issues/hood-cleaning.yml`

```yaml
niche: "restaurant-hood-cleaning"
nicheTitle: "Restaurant Hood Cleaning"
icon: "Flame"
issues:
  # Priority Issues (Show on Homepage)
  - slug: "failed-health-inspection-grease-buildup"
    title: "Failed Health Inspection Due to Grease Buildup"
    snippet: "NFPA 96 compliance cleaning restores safety ratings in 24-48 hours."
    category: "compliance-inspections"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "failed health inspection grease buildup"
      - "restore health rating after failed inspection"
      - "NFPA 96 emergency cleaning Miami"
    articleSlug: "failed-health-inspection-grease-buildup"
    priority: 1

  - slug: "exhaust-fan-grinding-noise"
    title: "Exhaust Fan Making Loud Grinding Noise"
    snippet: "Emergency fan motor replacement with same-day service available."
    category: "emergency-after-hours"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "exhaust fan grinding noise"
      - "kitchen exhaust fan loud noise repair"
      - "emergency fan motor replacement"
    articleSlug: "exhaust-fan-grinding-noise-repair"
    priority: 2

  - slug: "hood-cleaning-frequency-requirements"
    title: "How Often Do We Need Hood Cleaning?"
    snippet: "NFPA 96 mandates cleaning frequency based on cooking volume and grease production."
    category: "compliance-inspections"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "hood cleaning frequency requirements"
      - "how often hood cleaning NFPA 96"
      - "restaurant hood cleaning schedule"
    articleSlug: "hood-cleaning-frequency-by-restaurant-type"
    priority: 3

  # Secondary Issues (Show on Niche Hub)
  - slug: "grease-buildup-fire-hazard"
    title: "Grease Buildup Creating Fire Hazard Risk"
    snippet: "Professional degreasing reduces fire risk by 85% per fire marshal data."
    category: "compliance-inspections"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "grease buildup fire hazard"
      - "kitchen fire risk prevention"
      - "commercial kitchen fire safety"
    articleSlug: "grease-buildup-fire-hazard-prevention"
    priority: 4

  - slug: "hood-cleaning-certificate-missing"
    title: "Can't Find Our Last Hood Cleaning Certificate"
    snippet: "Digital certificate lookup service retrieves lost records within 24 hours."
    category: "compliance-inspections"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "lost hood cleaning certificate"
      - "retrieve hood cleaning records"
      - "certificate of performance lookup"
    articleSlug: "retrieve-lost-hood-cleaning-certificate"
    priority: 5

  - slug: "high-hood-cleaning-costs"
    title: "Hood Cleaning Costs Exceeding Our Budget"
    snippet: "Monthly contracts reduce per-service costs by 20-30% vs. on-demand pricing."
    category: "cost-guides"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "hood cleaning cost reduction"
      - "hood cleaning contract pricing"
      - "reduce restaurant hood cleaning costs"
    articleSlug: "hood-cleaning-cost-reduction-strategies"
    priority: 6
```

---

### `/content/issues/grease-trap.yml`

```yaml
niche: "grease-trap-cleaning"
nicheTitle: "Grease Trap Cleaning"
icon: "Droplets"
issues:
  - slug: "grease-trap-overflow-backup"
    title: "Grease Trap Overflow Backing Up Drains"
    snippet: "Emergency pumping service clears blockages and prevents health code violations."
    category: "emergency-after-hours"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "grease trap overflow backup"
      - "grease trap emergency pumping"
      - "drain backup from grease trap"
    articleSlug: "grease-trap-overflow-emergency-pumping"
    priority: 1

  - slug: "grease-trap-pumping-frequency"
    title: "How Often Should We Pump Our Grease Trap?"
    snippet: "Pumping frequency depends on tank size and daily wastewater volume per EPA guidelines."
    category: "maintenance-repairs"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "grease trap pumping frequency"
      - "how often pump grease trap"
      - "grease trap maintenance schedule"
    articleSlug: "grease-trap-pumping-frequency-guide"
    priority: 2

  - slug: "foul-odor-from-grease-trap"
    title: "Foul Odor Coming from Grease Trap Area"
    snippet: "Bacterial enzyme treatments neutralize odors between cleanings."
    category: "maintenance-repairs"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "grease trap foul odor"
      - "eliminate grease trap smell"
      - "grease trap odor control"
    articleSlug: "eliminate-grease-trap-odors"
    priority: 3

  - slug: "grease-trap-size-inadequate"
    title: "Grease Trap Too Small for Our Kitchen Volume"
    snippet: "Upgrade sizing calculations based on fixture units and peak flow rates."
    category: "planning-roi"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "grease trap size inadequate"
      - "grease trap sizing calculation"
      - "upgrade grease trap size"
    articleSlug: "grease-trap-sizing-upgrade-guide"
    priority: 4
```

---

### `/content/issues/septic-tank.yml`

```yaml
niche: "septic-tank-services"
nicheTitle: "Septic Tank Services"
icon: "Truck"
issues:
  - slug: "septic-tank-backup-flooding"
    title: "Septic Tank Backup Causing Property Flooding"
    snippet: "Emergency pumping and drain field inspection resolve backups in 4-6 hours."
    category: "emergency-after-hours"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "septic tank backup flooding"
      - "emergency septic pumping"
      - "septic overflow emergency"
    articleSlug: "septic-tank-backup-emergency-pumping"
    priority: 1

  - slug: "failed-septic-inspection-sale"
    title: "Failed Septic Inspection During Property Sale"
    snippet: "Pre-sale septic inspections identify issues early to avoid deal delays."
    category: "compliance-inspections"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "failed septic inspection property sale"
      - "pre-sale septic inspection"
      - "septic system real estate inspection"
    articleSlug: "pre-sale-septic-inspection-guide"
    priority: 2

  - slug: "slow-drains-septic-warning"
    title: "Slow Drains Throughout Building"
    snippet: "Slow drainage indicates full tank or drain field failure requiring inspection."
    category: "maintenance-repairs"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "slow drains septic tank"
      - "septic system slow drainage"
      - "septic tank maintenance signs"
    articleSlug: "slow-drains-septic-tank-warning-signs"
    priority: 3

  - slug: "septic-pumping-frequency"
    title: "When Should We Schedule Septic Pumping?"
    snippet: "Most tanks require pumping every 3-5 years based on household size and usage."
    category: "maintenance-repairs"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "septic pumping frequency"
      - "how often pump septic tank"
      - "septic tank pumping schedule"
    articleSlug: "septic-tank-pumping-frequency-guide"
    priority: 4
```

---

### `/content/issues/sealcoating.yml`

```yaml
niche: "sealcoating"
nicheTitle: "Sealcoating & Paving"
icon: "HardHat"
issues:
  - slug: "parking-lot-cracks-worsening"
    title: "Parking Lot Cracks Worsening After Rain"
    snippet: "Crack sealing and sealcoating prevent water penetration and extend pavement life."
    category: "maintenance-repairs"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "parking lot cracks after rain"
      - "asphalt crack sealing"
      - "prevent parking lot deterioration"
    articleSlug: "parking-lot-crack-repair-sealcoating"
    priority: 1

  - slug: "faded-parking-lot-striping"
    title: "Faded Parking Lot Striping Causing Confusion"
    snippet: "Re-striping with reflective paint improves visibility and ADA compliance."
    category: "compliance-inspections"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "faded parking lot striping"
      - "parking lot restriping"
      - "ADA compliant parking striping"
    articleSlug: "parking-lot-restriping-guide"
    priority: 2

  - slug: "sealcoating-frequency"
    title: "How Often Should We Sealcoat Our Parking Lot?"
    snippet: "Florida climate requires sealcoating every 2-3 years to prevent UV and rain damage."
    category: "maintenance-repairs"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "sealcoating frequency Florida"
      - "how often sealcoat parking lot"
      - "asphalt maintenance schedule"
    articleSlug: "sealcoating-frequency-florida-climate"
    priority: 3

  - slug: "potholes-damaging-vehicles"
    title: "Potholes Damaging Customer and Employee Vehicles"
    snippet: "Pothole patching and infrared repair restore smooth surfaces within 1-2 days."
    category: "emergency-after-hours"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "pothole repair parking lot"
      - "emergency pothole patching"
      - "asphalt pothole damage repair"
    articleSlug: "emergency-pothole-repair-service"
    priority: 4
```

---

### `/content/issues/fire-extinguisher.yml`

```yaml
niche: "fire-extinguisher-services"
nicheTitle: "Fire Extinguisher Services"
icon: "AlertTriangle"
issues:
  - slug: "fire-extinguishers-expired-tags"
    title: "Fire Extinguishers Expired or Missing Tags"
    snippet: "Annual inspections and recharging ensure compliance with Florida Fire Prevention Code."
    category: "compliance-inspections"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "expired fire extinguisher tags"
      - "fire extinguisher inspection Florida"
      - "fire extinguisher compliance"
    articleSlug: "fire-extinguisher-inspection-compliance"
    priority: 1

  - slug: "failed-fire-safety-inspection"
    title: "Building Failed Fire Safety Inspection"
    snippet: "Emergency extinguisher installation and certification available within 24 hours."
    category: "emergency-after-hours"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "failed fire safety inspection"
      - "emergency fire extinguisher installation"
      - "fire code compliance 24 hours"
    articleSlug: "emergency-fire-extinguisher-installation"
    priority: 2

  - slug: "wrong-type-fire-extinguisher"
    title: "Wrong Type of Fire Extinguisher for Kitchen"
    snippet: "Class K extinguishers required for commercial kitchens per NFPA 10 standards."
    category: "compliance-inspections"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "Class K fire extinguisher kitchen"
      - "commercial kitchen fire extinguisher type"
      - "NFPA 10 fire extinguisher requirements"
    articleSlug: "class-k-fire-extinguisher-kitchen-requirements"
    priority: 3

  - slug: "fire-extinguisher-training"
    title: "Staff Not Trained on Fire Extinguisher Use"
    snippet: "On-site training sessions cover PASS method and proper extinguisher selection."
    category: "planning-roi"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "fire extinguisher training employees"
      - "PASS method training"
      - "fire safety training commercial"
    articleSlug: "fire-extinguisher-training-guide"
    priority: 4
```

---

### `/content/issues/sprinkler-repair.yml`

```yaml
niche: "sprinkler-repair"
nicheTitle: "Sprinkler Repair & Testing"
icon: "Sprinkle"
issues:
  - slug: "backflow-preventer-leaking"
    title: "Backflow Preventer Leaking Water"
    snippet: "Certified backflow testing and repair prevents contamination and fines."
    category: "maintenance-repairs"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "backflow preventer leaking"
      - "backflow testing repair"
      - "backflow device certification"
    articleSlug: "backflow-preventer-repair-testing"
    priority: 1

  - slug: "sprinkler-zone-not-activating"
    title: "Sprinkler Zone Not Activating Properly"
    snippet: "Valve replacement and control panel diagnostics restore system function."
    category: "maintenance-repairs"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "sprinkler zone not working"
      - "irrigation valve replacement"
      - "sprinkler system diagnostics"
    articleSlug: "sprinkler-zone-troubleshooting-repair"
    priority: 2

  - slug: "sprinkler-heads-not-popping-up"
    title: "Sprinkler Heads Not Popping Up"
    snippet: "Head replacement and pressure adjustment ensure proper coverage."
    category: "maintenance-repairs"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "sprinkler heads not popping up"
      - "sprinkler head replacement"
      - "low water pressure sprinklers"
    articleSlug: "sprinkler-head-replacement-guide"
    priority: 3

  - slug: "high-water-bill-sprinkler-leak"
    title: "High Water Bill from Sprinkler Leak"
    snippet: "Leak detection service identifies underground pipe breaks saving 30-50% on water costs."
    category: "cost-guides"
    cities:
      - miami
      - boca-raton
      - fort-lauderdale
    keywords:
      - "high water bill sprinkler leak"
      - "sprinkler leak detection"
      - "underground sprinkler pipe repair"
    articleSlug: "sprinkler-leak-detection-repair"
    priority: 4
```

---

## TypeScript Interface

```typescript
// /lib/types/issues.ts

export interface Issue {
  slug: string
  title: string
  snippet: string
  category: string
  cities: string[]
  keywords: string[]
  articleSlug: string
  priority: number
}

export interface NicheIssues {
  niche: string
  nicheTitle: string
  icon: string
  issues: Issue[]
}
```

---

## Data Loading Function

```typescript
// /lib/data/issues.ts

import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import type { NicheIssues, Issue } from '@/lib/types/issues'

const ISSUES_DIR = path.join(process.cwd(), 'content', 'issues')

/**
 * Load all issues for a specific niche
 */
export function getIssuesByNiche(nicheSlug: string): Issue[] {
  const filePath = path.join(ISSUES_DIR, `${nicheSlug}.yml`)

  if (!fs.existsSync(filePath)) {
    return []
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const data = yaml.load(fileContents) as NicheIssues

  // Sort by priority (ascending)
  return data.issues.sort((a, b) => a.priority - b.priority)
}

/**
 * Load all issues across all niches
 */
export function getAllIssues(): Issue[] {
  const files = fs.readdirSync(ISSUES_DIR)
  const allIssues: Issue[] = []

  files.forEach((file) => {
    if (!file.endsWith('.yml')) return

    const nicheSlug = file.replace('.yml', '')
    const issues = getIssuesByNiche(nicheSlug)
    allIssues.push(...issues)
  })

  // Sort by priority globally
  return allIssues.sort((a, b) => a.priority - b.priority)
}

/**
 * Get top N issues for homepage (2 per niche, prioritized)
 */
export function getHomepageIssues(count: number = 12): Issue[] {
  const niches = ['hood-cleaning', 'grease-trap', 'septic-tank', 'sealcoating', 'fire-extinguisher', 'sprinkler-repair']
  const issues: Issue[] = []

  niches.forEach((niche) => {
    const nicheIssues = getIssuesByNiche(niche)
    issues.push(...nicheIssues.slice(0, 2)) // Take top 2 from each niche
  })

  return issues.slice(0, count)
}

/**
 * Filter issues by category
 */
export function getIssuesByCategory(categorySlug: string): Issue[] {
  const allIssues = getAllIssues()
  return allIssues.filter((issue) => issue.category === categorySlug)
}

/**
 * Filter issues by city
 */
export function getIssuesByCity(citySlug: string): Issue[] {
  const allIssues = getAllIssues()
  return allIssues.filter((issue) => issue.cities.includes(citySlug))
}
```

---

## Usage Examples

### Homepage: "Common Issues We Solve" Grid

```typescript
// /app/page.tsx

import { getHomepageIssues } from '@/lib/data/issues'
import IssuesGrid from '@/components/home/IssuesGrid'

export default function HomePage() {
  const issues = getHomepageIssues(12) // Get top 12 issues

  return (
    <>
      {/* Other sections... */}

      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Common Issues We Can Solve
          </h2>
          <p className="text-neutral-600">
            Expert solutions for your toughest commercial facility challenges
          </p>
        </div>

        <IssuesGrid issues={issues} />
      </section>
    </>
  )
}
```

### Niche Hub: Filtered Issues

```typescript
// /app/niches/[slug]/page.tsx

import { getIssuesByNiche } from '@/lib/data/issues'
import IssuesGrid from '@/components/home/IssuesGrid'

export default function NicheHubPage({ params }: { params: { slug: string } }) {
  const issues = getIssuesByNiche(params.slug).slice(0, 6) // Top 6 for hub

  return (
    <>
      {/* Other sections... */}

      <section className="container py-16">
        <h2 className="text-3xl font-bold text-neutral-800 mb-8">
          Common Issues
        </h2>
        <IssuesGrid issues={issues} />
      </section>
    </>
  )
}
```

---

## Validation Rules

### Pre-Commit Checks
1. **Schema Validation**: All YAML files must match schema
2. **Unique Slugs**: `issue.slug` must be unique within niche file
3. **Category Valid**: `issue.category` must match one of 5 defined categories
4. **Cities Valid**: `issue.cities` must only contain `miami`, `boca-raton`, `fort-lauderdale`
5. **Priority Range**: `issue.priority` must be 1-10
6. **Character Limits**:
   - `title`: 45-60 chars
   - `snippet`: 80-120 chars
7. **Keywords**: 3-5 keywords required per issue

---

## Implementation Checklist for Cursor

- [ ] Create `/content/issues/` directory
- [ ] Create 6 YAML files (one per niche) with 4-6 issues each
- [ ] Install `js-yaml` package: `npm install js-yaml @types/js-yaml`
- [ ] Create `/lib/types/issues.ts` with TypeScript interfaces
- [ ] Create `/lib/data/issues.ts` with data loading functions
- [ ] Update `<IssuesGrid>` component to accept `issues` prop
- [ ] Test data loading on homepage
- [ ] Test filtered data on niche hubs
- [ ] Verify all issue links go to correct resource articles (once articles exist)

---

**Status**: Issues data contract complete ✅
**Next**: Copy & SEO contracts for homepage
