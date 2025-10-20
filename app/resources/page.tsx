import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNiches } from '@/lib/data/niches'
import { Flame, Droplets, Truck, HardHat, AlertTriangle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Services Resources | Expert Guides & Checklists | LocalBizzList',
  description: 'Comprehensive resources for commercial services including hood cleaning, grease trap, septic, sealcoating, fire extinguisher, and sprinkler guides for South Florida.',
}

const iconMap: { [key: string]: any } = {
  Flame,
  Droplets,
  Truck,
  HardHat,
  AlertTriangle,
  Zap,
}

export default function ResourcesPage() {
  const niches = getAllNiches()

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary to-primary-int py-16">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Commercial Services Resources
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Expert guides, checklists, and troubleshooting tips for all your commercial service needs across South Florida.
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
            Browse Resources by Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {niches.map((niche) => {
              const Icon = iconMap[niche.icon] || Flame

              return (
                <Link
                  key={niche.slug}
                  href={`/resources/${niche.slug}`}
                  className="card p-6 hover:shadow-xl transition-all duration-200 hover:scale-105 group"
                >
                  <div className="flex flex-col">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                      {niche.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 flex-grow">
                      Guides, checklists, and tips for {niche.shortTitle.toLowerCase()} services
                    </p>
                    <span className="text-primary font-semibold text-sm group-hover:underline">
                      View Resources →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Popular Resources Preview */}
      <div className="bg-white py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
              Popular Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/resources/restaurant-hood-cleaning" className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📋</div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-800 mb-2">NFPA 96 Hood Cleaning Checklist</h3>
                    <p className="text-neutral-600 text-sm">Complete compliance checklist for restaurant hood cleaning</p>
                  </div>
                </div>
              </Link>

              <Link href="/resources/grease-trap-cleaning" className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💧</div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-800 mb-2">Grease Trap Maintenance Guide</h3>
                    <p className="text-neutral-600 text-sm">Essential tips for grease trap pumping and compliance</p>
                  </div>
                </div>
              </Link>

              <Link href="/resources/septic-tank-services" className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🚛</div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-800 mb-2">Septic Tank Care Guide</h3>
                    <p className="text-neutral-600 text-sm">How to maintain your septic system and avoid costly repairs</p>
                  </div>
                </div>
              </Link>

              <Link href="/resources/sealcoating" className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏗️</div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-800 mb-2">Parking Lot Maintenance Tips</h3>
                    <p className="text-neutral-600 text-sm">Extend the life of your asphalt with proper sealcoating</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary py-16">
        <div className="container text-center text-primary-fg">
          <h2 className="text-3xl font-bold mb-4">
            Need a Service Quote?
          </h2>
          <p className="text-xl text-white mb-4">
            <strong>We handle all the sourcing, negotiations, and logistics to find you the best service provider at the cheapest cost in your area.</strong>
          </p>
          <p className="text-lg mb-8 opacity-90">
            Get instant quotes for any of our commercial services
          </p>
          <Link
            href="/pricing/instant-quote?src=resources_cta"
            className="bg-white text-primary hover:bg-neutral-50 px-8 py-3 text-lg rounded-lg font-semibold inline-flex items-center transition-colors"
          >
            Get Instant Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
