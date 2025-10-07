import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Restaurant Hood Cleaning Resources | Expert Guides & Checklists',
  description: 'Comprehensive resources for restaurant hood cleaning including NFPA 96 checklists, frequency guides, and troubleshooting tips for Miami, Boca Raton, and Fort Lauderdale.',
  keywords: 'restaurant hood cleaning resources, NFPA 96 checklist, hood cleaning frequency, exhaust fan problems, Miami hood cleaning, Boca Raton hood cleaning, Fort Lauderdale hood cleaning',
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

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Restaurant Hood Cleaning Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guides, checklists, and troubleshooting tips to help your restaurant maintain 
              NFPA 96 compliance and optimal kitchen exhaust system performance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cities Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Resources by City
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cities.map((city) => (
              <div key={city.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {city.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {city.description}
                </p>
                <div className="space-y-4">
                  {resourceTypes.map((resource) => (
                    <Link
                      key={resource.slug}
                      href={`/resources/${city.slug}/${resource.slug}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{resource.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {resource.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Types Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Resource Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourceTypes.map((resource) => (
              <div key={resource.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {resource.description}
                </p>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/resources/${city.slug}/${resource.slug}`}
                      className="block text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {city.name} Guide →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/services/restaurant-hood-cleaning"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Service Overview</h3>
              <p className="text-sm text-gray-600">Learn about our hood cleaning services</p>
            </Link>
            <Link
              href="/pricing/instant-quote"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Get Quote</h3>
              <p className="text-sm text-gray-600">Instant pricing for your restaurant</p>
            </Link>
            <Link
              href="/locations/miami/hood-cleaning"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Miami Service</h3>
              <p className="text-sm text-gray-600">Hood cleaning in Miami</p>
            </Link>
            <Link
              href="/locations/boca-raton/hood-cleaning"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Boca Raton Service</h3>
              <p className="text-sm text-gray-600">Hood cleaning in Boca Raton</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
