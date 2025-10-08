import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Restaurant Hood Cleaning Resources | Expert Guides & Checklists',
  description: 'Comprehensive restaurant hood cleaning resources including NFPA 96 checklists, frequency guides, and troubleshooting tips for Miami, Boca Raton, and Fort Lauderdale.',
}

const cities = [
  {
    name: 'Miami',
    slug: 'miami',
    description: 'Expert guides for Miami restaurant hood cleaning compliance'
  },
  {
    name: 'Boca Raton',
    slug: 'boca-raton',
    description: 'Professional hood cleaning resources for Boca Raton restaurants'
  },
  {
    name: 'Fort Lauderdale',
    slug: 'fort-lauderdale',
    description: 'Comprehensive hood cleaning guides for Fort Lauderdale establishments'
  }
]

const resourceTypes = [
  {
    title: 'NFPA 96 Hood Cleaning Checklist',
    slug: 'nfpa-96-hood-cleaning-checklist',
    description: 'Complete compliance checklist for fire safety requirements',
    icon: '📋'
  },
  {
    title: 'Hood Cleaning Frequency by Restaurant Type',
    slug: 'hood-cleaning-frequency-by-restaurant-type',
    description: 'Guidelines for cleaning schedules based on cooking volume',
    icon: '📅'
  },
  {
    title: 'Kitchen Exhaust Fan Problems & Quick Fixes',
    slug: 'exhaust-fan-problems-and-fixes',
    description: 'Troubleshooting guide for common exhaust system issues',
    icon: '🔧'
  }
]

export default function HoodCleaningResourcesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary to-primary-int py-16">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Restaurant Hood Cleaning Resources
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Expert guides, NFPA 96 checklists, and compliance tips for South Florida restaurants
          </p>
        </div>
      </div>

      {/* Browse by City */}
      <div className="container py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
            Resources by City
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {cities.map((city) => (
              <div key={city.slug} className="card p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-4">{city.name}</h3>
                <p className="text-neutral-600 text-sm mb-6">{city.description}</p>
                <div className="space-y-3">
                  {resourceTypes.map((resource) => (
                    <Link
                      key={resource.slug}
                      href={`/resources/restaurant-hood-cleaning/${city.slug}/${resource.slug}`}
                      className="block text-primary hover:underline text-sm font-semibold"
                    >
                      {resource.icon} {resource.title} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* All Resources List */}
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
            All Hood Cleaning Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceTypes.map((resource) => (
              <div key={resource.slug} className="card p-6">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2">{resource.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{resource.description}</p>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/resources/restaurant-hood-cleaning/${city.slug}/${resource.slug}`}
                      className="block text-primary hover:underline text-sm font-semibold"
                    >
                      {city.name} Guide →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-secondary py-16">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Hood Cleaning Service?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get an instant quote for NFPA 96 certified hood cleaning
          </p>
          <Link
            href="/pricing/instant-quote/restaurant-hood-cleaning?src=resources_hood_cta"
            className="btn-primary px-8 py-3 text-lg"
          >
            Get Instant Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
