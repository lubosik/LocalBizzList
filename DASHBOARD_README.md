# SEO Feasibility Dashboard

A comprehensive Next.js dashboard for analyzing South Florida niche SEO feasibility across 20 different business niches.

## Overview

This dashboard provides interactive data visualization and analysis for:
- 20 luxury and high-value service niches in South Florida
- Keyword research data with volume, CPC, and difficulty metrics
- SERP analysis including local pack presence
- Competitor analysis
- Custom scoring with adjustable weights
- 90-day content plans for each niche

## Features

### Overview Dashboard (`/dashboard`)

- **Metric Cards**: Summary statistics (total niches, highest/lowest scores, avg CPC, local pack %)
- **Top 3 Recommendations**: Highest-scoring niches with strengths/weaknesses
- **Interactive Charts**:
  - Rankability bar chart (sortable, clickable)
  - Demand vs Competition scatter plot
- **Weights Panel**: Adjust scoring factors with live recalculation
  - Demand (25%)
  - Competition (35%)
  - Local Pack (15%)
  - Content Gap (15%)
  - Seasonality (10%)
- **Data Table**: Sortable, searchable table of all niches
- **Export Options**: CSV download and print-to-PDF

### Niche Detail Pages (`/dashboard/[niche]`)

Each niche has a detailed analysis page with:

#### Tabs
1. **Keywords**: Filterable grid with search volume, CPC, difficulty, SERP features
2. **SERP**: Result type distribution, local pack metrics, top domains
3. **Competitors**: Competitor analysis with ratings and services
4. **Plan**: Content strategy and 90-day implementation plan

#### Features
- Radar chart showing sub-scores
- Quick metrics panel
- Adjustable weights (preserved in URL)
- Copy/export functionality for content plans

## Getting Started

### Prerequisites

```bash
Node.js 18+
npm or yarn
```

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Running the Dashboard

```bash
npm run dev
```

Visit [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

### Building for Production

```bash
npm run build
npm start
```

## Data Management

### Data Location

All niche data is stored in:
```
LocalBizzList research/outputs/niches/*.json
```

Each niche has a JSON file with:
- Keywords (volume, CPC, competition)
- SERP data
- Competitor information
- Scores and sub-scores
- Content plans
- 90-day implementation roadmap

### Refreshing Data

To update the dashboard with new data:

1. **Update niche JSON files** in `LocalBizzList research/outputs/niches/`

2. **Rebuild the static pages**:
   ```bash
   npm run build
   ```

The dashboard automatically aggregates all JSON files on build.

### Adding New Niches

1. Create a new JSON file in `outputs/niches/` following this structure:

```json
{
  "name": "Your Niche Name",
  "slug": "your_niche_name",
  "keywords": [...],
  "serpData": [...],
  "competitorData": {...},
  "scores": {
    "total": 0,
    "subScores": {
      "demand": 0,
      "competition": 0,
      "localPack": 0,
      "contentGap": 0,
      "seasonality": 0
    },
    "weights": {...}
  },
  "summary": {...},
  "contentPlan": {...},
  "ninetyDayPlan": {...}
}
```

2. Rebuild the site:
   ```bash
   npm run build
   ```

## Scoring System

### Formula

```
Score = (Demand × 0.25) + (Competition × 0.35) + (LocalPack × 0.15) + (ContentGap × 0.15) + (Seasonality × 0.10)
```

All sub-scores are on a 0-100 scale.

### Adjusting Weights

Weights can be adjusted in two ways:

1. **Via UI**: Use the weights panel on any dashboard page
2. **Via URL**: Add query parameters
   ```
   /dashboard?wD=25&wC=35&wL=15&wG=15&wS=10
   ```

Weights are automatically normalized to sum to 100%.

### Verdict Thresholds

- **EXCELLENT**: Score ≥ 70
- **GO**: Score ≥ 50
- **CAUTION**: Score ≥ 30
- **NO-GO**: Score < 30

## Technology Stack

- **Framework**: Next.js 13.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Charts**: Recharts
- **Icons**: Lucide React

## Architecture

### Key Files

```
app/
├── dashboard/
│   ├── page.tsx                    # Overview page (server component)
│   ├── DashboardPageClient.tsx     # Overview client logic
│   └── [niche]/
│       ├── page.tsx                # Detail page (server component)
│       ├── NicheDetailClient.tsx   # Detail client logic
│       └── components/             # Tab components
│           ├── KeywordsTab.tsx
│           ├── SerpTab.tsx
│           ├── CompetitorsTab.tsx
│           └── PlanTab.tsx

components/
├── ui/                             # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── tabs.tsx
│   └── ...
└── dashboard/                      # Dashboard-specific
    ├── ScoreBadge.tsx
    ├── MetricCard.tsx
    ├── RankabilityBarChart.tsx
    ├── DemandCompetitionScatter.tsx
    ├── WeightsPanel.tsx
    └── ExportButtons.tsx

lib/
├── data/
│   └── aggregateNicheData.ts      # Data loading & types
├── scoring.ts                      # Scoring calculations
└── utils.ts                        # Utilities
```

### Data Flow

1. **Server Components** load data from JSON files
2. **Client Components** receive data as props
3. **Weights** are managed in client state and URL params
4. **Recalculation** happens client-side without re-fetching

## Export Features

### CSV Export

Click "Export CSV" to download:
- All visible niches (respects search filter)
- Current scores (with active weights)
- All metrics and sub-scores

### Print to PDF

Click "Print / PDF" or use Ctrl/Cmd+P:
- Optimized print layout (A4)
- Removes interactive elements
- Preserves charts and colors
- Clean, professional formatting

## Accessibility

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Labels**: Proper labels on charts, buttons, and controls
- **Color Contrast**: AA+ compliance
- **Screen Readers**: Semantic HTML and proper landmarks

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Static Generation**: All niche pages pre-rendered at build time
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code eliminated
- **Image Optimization**: Next.js automatic optimization

## Troubleshooting

### Charts not rendering

Ensure Recharts is installed:
```bash
npm install recharts
```

### Type errors

Run type check:
```bash
npm run type-check
```

### Build fails

Clear cache and rebuild:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Data not updating

Ensure JSON files are valid and rebuild:
```bash
npm run build
```

## Development

### Adding New Features

1. Create components in `components/dashboard/`
2. Update types in `lib/data/aggregateNicheData.ts` if needed
3. Test with development server
4. Build and verify production build

### Modifying Scoring

Update weights and formulas in `lib/scoring.ts`:

```typescript
export const DEFAULT_WEIGHTS: Weights = {
  demand: 0.25,
  competition: 0.35,
  localPack: 0.15,
  contentGap: 0.15,
  seasonality: 0.10,
};
```

## License

Proprietary - LocalBizzList

## Support

For questions or issues, contact the development team.

---

**Last Updated**: 2025-09-30
**Version**: 1.0.0
