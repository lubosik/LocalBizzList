# Dashboard Structure

## Page Routes

```
/dashboard
├── Overview Page (all 20 niches)
│   ├── Metric Cards
│   ├── Top 3 Recommendations
│   ├── Rankability Bar Chart
│   ├── Demand vs Competition Scatter
│   ├── Weights Panel
│   └── Data Table (sortable, searchable)
│
└── /[niche]
    ├── Niche Header (score, verdict, radar chart)
    ├── Tabs:
    │   ├── Keywords (filterable grid)
    │   ├── SERP (pie chart, metrics)
    │   ├── Competitors (sortable table)
    │   └── Plan (content strategy, 90-day plan)
    └── Right Rail:
        ├── Quick Metrics
        └── Weights Panel
```

## Component Hierarchy

```
app/dashboard/
├── page.tsx (Server Component)
│   └── DashboardPageClient.tsx
│       ├── MetricCard × 4
│       ├── Card (Top 3 Section)
│       │   └── Card × 3 (Individual recommendations)
│       ├── RankabilityBarChart
│       ├── DemandCompetitionScatter
│       ├── WeightsPanel
│       ├── Card (Data Table)
│       └── ExportButtons
│
└── [niche]/
    ├── page.tsx (Server Component)
    └── NicheDetailClient.tsx
        ├── NicheHeader
        │   └── RadarChart (sub-scores)
        ├── Tabs
        │   ├── KeywordsTab
        │   ├── SerpTab
        │   ├── CompetitorsTab
        │   └── PlanTab
        └── QuickMetricsPanel
            └── WeightsPanel
```

## Data Flow

```
JSON Files (20 niches)
    ↓
loadAllNicheData()
    ↓
{
  niches: NicheData[],
  metrics: DashboardMetrics,
  top3: NicheData[]
}
    ↓
Server Components
    ↓
Props to Client Components
    ↓
User Adjusts Weights
    ↓
recalculateScores() (client-side)
    ↓
Re-render with new rankings
    ↓
Update URL query params
```

## File Organization

```
Localbizzlist/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx                    [Server] Overview page
│   │   ├── DashboardPageClient.tsx     [Client] Overview logic
│   │   └── [niche]/
│   │       ├── page.tsx                [Server] Detail page
│   │       ├── NicheDetailClient.tsx   [Client] Detail logic
│   │       └── components/
│   │           ├── NicheHeader.tsx
│   │           ├── KeywordsTab.tsx
│   │           ├── SerpTab.tsx
│   │           ├── CompetitorsTab.tsx
│   │           ├── PlanTab.tsx
│   │           └── QuickMetricsPanel.tsx
│   └── globals.css                     [Styles] Print CSS + theme
│
├── components/
│   ├── ui/                             [shadcn/ui]
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   └── input.tsx
│   └── dashboard/                      [Custom]
│       ├── ScoreBadge.tsx
│       ├── MetricCard.tsx
│       ├── RankabilityBarChart.tsx
│       ├── DemandCompetitionScatter.tsx
│       ├── WeightsPanel.tsx
│       └── ExportButtons.tsx
│
├── lib/
│   ├── data/
│   │   └── aggregateNicheData.ts       [Data] Loading + types
│   ├── scoring.ts                      [Logic] Calculations
│   └── utils.ts                        [Utils] Formatting
│
├── LocalBizzList research/
│   └── outputs/
│       └── niches/                     [Data] 20 JSON files
│           ├── mold_remediation_services.json
│           ├── pool_automation_and_smart_pool_technology_installations.json
│           └── ... (18 more)
│
├── DASHBOARD_README.md                 [Docs] User guide
├── DASHBOARD_SUMMARY.md                [Docs] Implementation summary
└── DASHBOARD_STRUCTURE.md              [Docs] This file
```

## State Management

### Server State (Static)
- Loaded once per build
- Source: JSON files
- Functions: `loadAllNicheData()`, `getNicheBySlug()`

### Client State (Dynamic)
- `weights` - Current scoring weights
- `searchTerm` - Table search filter
- `sortField` / `sortDirection` - Table sorting
- `activeTab` - Selected tab in detail view

### URL State (Shareable)
- Query params preserve weights: `?wD=25&wC=35&wL=15&wG=15&wS=10`
- Enables sharing specific dashboard views

## Interactive Features

### Overview Page
1. **Weight Sliders** → Update state → Recalculate scores → Re-sort/re-render
2. **Bar Chart Click** → Navigate to niche detail (with weights in URL)
3. **Scatter Plot Click** → Navigate to niche detail
4. **Table Row Click** → Navigate to niche detail
5. **Search Input** → Filter table rows
6. **Column Headers** → Sort table
7. **Export CSV** → Generate and download file
8. **Print Button** → Open print dialog

### Detail Page
1. **Keywords Tab**
   - Search input → Filter rows
   - Intent dropdown → Filter by intent type
   - Column headers → Sort rows

2. **SERP Tab**
   - Pie chart → Show result type distribution
   - Domain list → Display top competitors

3. **Competitors Tab**
   - Column headers → Sort by domain/rating/title length
   - External links → Open competitor sites

4. **Plan Tab**
   - Copy buttons → Copy section to clipboard (with feedback)
   - Export button → Download as Markdown file

5. **Weights Panel**
   - Sliders → Adjust weights
   - Apply button → Recalculate and update URL
   - Reset button → Restore defaults

## Responsive Breakpoints

```css
/* Mobile First */
base     : < 768px   (1 column)
md       : ≥ 768px   (2 columns)
lg       : ≥ 1024px  (3 columns)
```

### Layout Adaptations

**Overview**
- Mobile: Stack all cards vertically
- Tablet: 2-column grid for metrics, charts stack
- Desktop: 4-column metrics, charts side-by-side, 3-col layout with weights

**Detail**
- Mobile: Full-width tabs, stack right rail below
- Tablet: Full-width tabs, narrower right rail
- Desktop: 3/4 tabs + 1/4 right rail

## Performance Optimizations

1. **Static Generation**: All pages pre-rendered at build time
2. **Code Splitting**: Automatic route-based splitting
3. **Lazy Loading**: Charts only load when visible
4. **Memoization**: `useMemo` for expensive calculations
5. **Tree Shaking**: Unused Recharts components removed

## Accessibility Features

- **Keyboard**: Tab navigation, Enter/Space activation
- **Screen Readers**: ARIA labels, semantic HTML
- **Focus**: Visible focus indicators
- **Color**: High contrast, not color-only indicators
- **Text**: Minimum 14px, good line height

## Browser Testing

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+

## Print Layout

When printing/exporting to PDF:
- Removes: Buttons, inputs, sliders
- Preserves: Charts, tables, metrics, text
- Optimizes: A4 page size, page breaks, colors
- Format: Clean, professional, printer-friendly

---

**Visual Flow Example:**

```
User lands on /dashboard
    ↓
Views all 20 niches ranked by default weights
    ↓
Adjusts Competition weight from 35% → 50%
    ↓
Rankings update instantly (client-side)
    ↓
URL updates: /dashboard?wD=25&wC=50&wL=10&wG=10&wS=5
    ↓
Clicks on "Pool Automation..." niche
    ↓
Navigates to detail page with weights preserved
    ↓
Views Keywords tab with filtering
    ↓
Switches to Plan tab
    ↓
Clicks "Export MD" to download content plan
    ↓
Returns to overview (weights still preserved)
    ↓
Clicks "Export CSV" to download all data
    ↓
Shares URL with team (weights preserved for consistent view)
```
