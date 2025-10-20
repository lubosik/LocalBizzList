import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Locations - Miami, Boca Raton, Fort Lauderdale | LocalBizzList',
  description: 'LocalBizzList serves South Florida including Miami-Dade, Broward, and Palm Beach counties. Find local commercial services in your area.',
}

const locations = [
  {
    name: 'Miami',
    slug: 'miami',
    county: 'Miami-Dade County',
    description: 'Serving all of Miami-Dade County including Miami, Miami Beach, Coral Gables, Hialeah, and surrounding areas.',
    areas: ['Miami', 'Miami Beach', 'Coral Gables', 'Hialeah', 'Doral', 'Kendall', 'Aventura', 'Homestead'],
    phone: '(305) 555-4663',
  },
  {
    name: 'Boca Raton',
    slug: 'boca-raton',
    county: 'Palm Beach County',
    description: 'Serving all of Palm Beach County including Boca Raton, Delray Beach, Boynton Beach, and surrounding areas.',
    areas: ['Boca Raton', 'Delray Beach', 'Boynton Beach', 'Deerfield Beach', 'Highland Beach', 'Gulf Stream'],
    phone: '(561) 555-7821',
  },
  {
    name: 'Fort Lauderdale',
    slug: 'fort-lauderdale',
    county: 'Broward County',
    description: 'Serving all of Broward County including Fort Lauderdale, Pompano Beach, Hollywood, and surrounding areas.',
    areas: ['Fort Lauderdale', 'Pompano Beach', 'Hollywood', 'Dania Beach', 'Plantation', 'Wilton Manors'],
    phone: '(954) 555-9203',
  },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary to-primary-int py-16">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            South Florida Service Locations
          </h1>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Professional commercial services across Miami-Dade, Broward, and Palm Beach counties
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-white">We Handle Everything For You</h2>
            <p className="text-lg text-white/90 mb-4">
              <strong>We handle all the sourcing, negotiations, and logistics to find you the best service provider at the cheapest cost in your area.</strong> 
              Restaurant hood cleaning, grease trap services, septic maintenance, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center text-white/90">
                <span className="w-5 h-5 bg-green-300 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-green-800 text-xs">✓</span>
                </span>
                <span>Licensed & Certified Providers</span>
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-5 h-5 bg-green-300 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-green-800 text-xs">✓</span>
                </span>
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-5 h-5 bg-green-300 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-green-800 text-xs">✓</span>
                </span>
                <span>Complete Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="container py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
            We Serve These Areas
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {locations.map((location) => (
              <div key={location.slug} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-800">{location.name}</h3>
                    <p className="text-sm text-neutral-600">{location.county}</p>
                  </div>
                </div>

                <p className="text-neutral-700 mb-6">{location.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-3">Service Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.areas.map((area) => (
                      <span key={area} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-6 space-y-3">
                  <Link
                    href={`/locations/${location.slug}`}
                    className="block btn-primary text-center"
                  >
                    View {location.name} Services
                  </Link>
                  <a
                    href={`tel:${location.phone.replace(/\D/g, '')}`}
                    className="block btn-secondary text-center"
                  >
                    Call {location.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Resource Links */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
              Location-Specific Resources
            </h2>
            <p className="text-neutral-600 text-center mb-8">
              View guides and compliance information tailored to your area
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locations.map((location) => (
                <div key={location.slug} className="border border-neutral-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-neutral-800 mb-4">{location.name} Guides</h3>
                  <div className="space-y-3">
                    <Link
                      href={`/resources/restaurant-hood-cleaning/${location.slug}/nfpa-96-hood-cleaning-checklist`}
                      className="block text-primary hover:underline text-sm"
                    >
                      📋 NFPA 96 Compliance Checklist →
                    </Link>
                    <Link
                      href={`/resources/restaurant-hood-cleaning/${location.slug}/hood-cleaning-frequency-by-restaurant-type`}
                      className="block text-primary hover:underline text-sm"
                    >
                      📅 Hood Cleaning Frequency Guide →
                    </Link>
                    <Link
                      href={`/resources/restaurant-hood-cleaning/${location.slug}/exhaust-fan-problems-and-fixes`}
                      className="block text-primary hover:underline text-sm"
                    >
                      🔧 Exhaust Fan Troubleshooting →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary py-16">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-4">
            <strong>We handle all the sourcing, negotiations, and logistics to find you the best service provider at the cheapest cost in your area.</strong>
          </p>
          <p className="text-lg text-white/90 mb-8">
            Get instant quotes for any of our commercial services
          </p>
          <Link
            href="/pricing/instant-quote?src=locations_cta"
            className="inline-block bg-white text-primary px-8 py-3 text-lg font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Get Instant Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
