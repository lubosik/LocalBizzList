# PRD — South Florida Niche SEO Feasibility + Insights Dashboard

## Project: localbizzlist.com

**Goal:** Identify the Top 3 easiest-to-rank niches in South Florida for a content-led directory and show all results in a visual dashboard with drilldowns per niche.

## Scope

**Geo focus:** South Florida (Miami, Miami Beach, Hialeah, Fort Lauderdale, Hollywood FL, Pembroke Pines, Pompano Beach, Boca Raton, West Palm Beach, Delray Beach, Boynton Beach).

**Fallback:** If data is sparse for any niche query, also pull US-wide metrics.

## Niches (20)

1. Mold Remediation Services
2. Smart Outdoor Lighting Solutions
3. Preventative Mold Treatment Services
4. Yacht Maintenance and Repair Services
5. Yacht and Jet Detailing Services
6. Cybersecurity integration with smart home security
7. Custom Smart Wine Cellars
8. Non-Surgical Rhinoplasty Options
9. Smart Home Installation
10. Specialized Family Office Concierge Services
11. Digital Estate Planning and Online Will Services
12. Tax Advisory for Cryptocurrency and Digital Assets
13. Niche Tax Advisory for Real Estate Investors
14. Digital Estate Planning Services
15. Specialized Elder Law Consulting
16. Metal Roof Maintenance and Inspection Services
17. Roofing Inspection and Maintenance Plans
18. Outdoor kitchen design consultation and customization services
19. High-tech smart home remodeling
20. Pool Automation and Smart Pool Technology Installations

## Outputs

### Data files (per niche)
- Keyword tables with Volume, CPC, KD, SERP features, Top URLs for South Florida (city modifiers) + US fallback

### Scoring
- Weighted Rankability Score (0–100) per niche + sub-scores
- Transparent formulas

### Dashboard web app inside your repo

#### `/dashboard` (Overview)
- Cards for each niche with key metrics
- Sortable table
- Top-3 highlight

#### `/dashboard/[niche]` (Drilldown)
- Tabs for Keywords, SERP, Competitors, Content Plan
- Charts & tables

### Export
- CSV & print-to-PDF (print CSS) for any view

### Interactive features
- Weight sliders to recalculate scores live

### Deliverables
- Top-3 brief with 90-day content plans (pillar/cluster + local pages) for each winner

## Scoring Model (editable)

### Demand (25%)
- Normalized search volume across head + top long-tails (city-modified + US fallback)
- CPC bonus

### Competition (35%)
- Average KD (lower better)
- Penalty if SERPs are dominated by gov/mega publishers
- Competitor strength proxy from top URLs

### Local Pack friendliness (15%)
- Presence of map packs
- % of SERPs where directories rank Top-3

### Content Gap & Intent (15%)
- Count of underserved "cost/near me/checklist/vs/how-to" queries

### Seasonality/Volatility (10%)
- Monthly trend stability (or mark "unknown")

**Return:** Sub-scores + overall score and a short rationale per niche.
