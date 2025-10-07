import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { Flame, Droplets, Truck, HardHat, AlertTriangle, Zap } from 'lucide-react'

interface NicheCardProps {
  icon: LucideIcon
  title: string
  description: string
  slug: string
}

function NicheCard({ icon: Icon, title, description, slug }: NicheCardProps) {
  return (
    <div className="card p-6 flex flex-col items-start hover:shadow-xl transition-shadow">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-semibold text-neutral-800 mb-2">
        {title}
      </h3>
      <p className="text-neutral-600 text-sm mb-4 flex-1">
        {description}
      </p>
      <Link
        href={`/niches/${slug}/`}
        className="btn-primary px-4 py-2 text-sm"
      >
        View Hub
      </Link>
    </div>
  )
}

interface NicheGridProps {
  niches: Array<{
    slug: string
    title: string
    description: string
    icon: string
  }>
}

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Droplets,
  Truck,
  HardHat,
  AlertTriangle,
  Zap,
}

export default function NicheGrid({ niches }: NicheGridProps) {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">
          Explore Our Service Niches
        </h2>
        <p className="text-neutral-600">
          Certified providers across South Florida's most in-demand commercial services
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {niches.map((niche) => {
          const Icon = iconMap[niche.icon]
          return (
            <NicheCard
              key={niche.slug}
              icon={Icon}
              title={niche.title}
              description={niche.description}
              slug={niche.slug}
            />
          )
        })}
      </div>
    </section>
  )
}
