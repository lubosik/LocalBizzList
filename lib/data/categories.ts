export interface Category {
  slug: string
  label: string
  icon: string
  colorScheme: 'primary' | 'secondary' | 'accent' | 'primary-int' | 'neutral'
  description: string
}

export const CATEGORIES: Category[] = [
  {
    slug: 'cost-guides',
    label: 'Cost Guides',
    icon: 'DollarSign',
    colorScheme: 'primary',
    description: 'Pricing breakdowns, cost calculators, ROI analysis, and budget planning guides.',
  },
  {
    slug: 'compliance-inspections',
    label: 'Compliance & Inspections',
    icon: 'ClipboardCheck',
    colorScheme: 'secondary',
    description: 'Regulatory requirements, inspection checklists, code compliance, and certification guides.',
  },
  {
    slug: 'maintenance-repairs',
    label: 'Maintenance & Repairs',
    icon: 'Wrench',
    colorScheme: 'accent',
    description: 'Preventive maintenance schedules, troubleshooting guides, and repair best practices.',
  },
  {
    slug: 'emergency-after-hours',
    label: 'Emergency & After-Hours',
    icon: 'Clock',
    colorScheme: 'primary-int',
    description: 'Emergency services, after-hours availability, same-day response, and urgent repair guides.',
  },
  {
    slug: 'planning-roi',
    label: 'Planning & ROI',
    icon: 'TrendingUp',
    colorScheme: 'neutral',
    description: 'Strategic planning, long-term maintenance contracts, cost-benefit analysis, and efficiency guides.',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(category => category.slug === slug)
}

export function getAllCategories(): Category[] {
  return CATEGORIES
}
