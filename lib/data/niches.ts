import { LucideIcon } from 'lucide-react'

export interface Niche {
  slug: string
  title: string
  shortTitle: string
  icon: string
  description: string
  servicePageHref: string
  nicheHubHref: string
  status: 'live' | 'planned'
}

export const NICHES: Niche[] = [
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
  {
    slug: 'grease-trap-cleaning',
    title: 'Grease Trap Cleaning',
    shortTitle: 'Grease Trap',
    icon: 'Droplets',
    description: 'Commercial grease trap pumping, maintenance, and compliance services for restaurants and food service facilities.',
    servicePageHref: '/services/grease-trap-cleaning/',
    nicheHubHref: '/niches/grease-trap-cleaning/',
    status: 'planned',
  },
  {
    slug: 'septic-tank-services',
    title: 'Septic Tank Services',
    shortTitle: 'Septic Tank',
    icon: 'Truck',
    description: 'Septic tank pumping, inspections, repairs, and emergency services for commercial and residential properties.',
    servicePageHref: '/services/septic-tank-services/',
    nicheHubHref: '/niches/septic-tank-services/',
    status: 'planned',
  },
  {
    slug: 'sealcoating',
    title: 'Sealcoating & Paving',
    shortTitle: 'Sealcoating',
    icon: 'HardHat',
    description: 'Asphalt sealcoating, striping, pothole repair, and parking lot maintenance for commercial properties.',
    servicePageHref: '/services/sealcoating/',
    nicheHubHref: '/niches/sealcoating/',
    status: 'planned',
  },
  {
    slug: 'fire-extinguisher-services',
    title: 'Fire Extinguisher Services',
    shortTitle: 'Fire Extinguisher',
    icon: 'AlertTriangle',
    description: 'Fire extinguisher inspections, recharging, installation, and compliance testing for commercial facilities.',
    servicePageHref: '/services/fire-extinguisher-services/',
    nicheHubHref: '/niches/fire-extinguisher-services/',
    status: 'planned',
  },
  {
    slug: 'sprinkler-repair',
    title: 'Sprinkler Repair & Testing',
    shortTitle: 'Sprinkler Repair',
    icon: 'Zap',
    description: 'Commercial sprinkler system repairs, backflow testing, and fire suppression maintenance services.',
    servicePageHref: '/services/sprinkler-repair/',
    nicheHubHref: '/niches/sprinkler-repair/',
    status: 'planned',
  },
]

export function getNicheBySlug(slug: string): Niche | undefined {
  return NICHES.find(niche => niche.slug === slug)
}

export function getLiveNiches(): Niche[] {
  return NICHES.filter(niche => niche.status === 'live')
}

export function getAllNiches(): Niche[] {
  return NICHES
}
