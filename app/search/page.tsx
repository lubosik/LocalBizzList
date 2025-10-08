'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import SearchBar from '@/components/SearchBar'
import { getAllNiches } from '@/lib/data/niches'
import { Flame, Droplets, Truck, HardHat, AlertTriangle, Zap } from 'lucide-react'

const iconMap: { [key: string]: any } = {
  Flame,
  Droplets,
  Truck,
  HardHat,
  AlertTriangle,
  Zap,
}

// Resource guides data
const resourceGuides = [
  {
    slug: 'nfpa-96-hood-cleaning-checklist',
    title: 'NFPA 96 Hood Cleaning Checklist',
    description: 'Complete compliance checklist for fire safety requirements',
    category: 'Restaurant Hood Cleaning',
    niche: 'restaurant-hood-cleaning',
    cities: ['Miami', 'Boca Raton', 'Fort Lauderdale'],
  },
  {
    slug: 'hood-cleaning-frequency-by-restaurant-type',
    title: 'Hood Cleaning Frequency by Restaurant Type',
    description: 'Guidelines for cleaning schedules based on cooking volume',
    category: 'Restaurant Hood Cleaning',
    niche: 'restaurant-hood-cleaning',
    cities: ['Miami', 'Boca Raton', 'Fort Lauderdale'],
  },
  {
    slug: 'exhaust-fan-problems-and-fixes',
    title: 'Kitchen Exhaust Fan Problems & Quick Fixes',
    description: 'Troubleshooting guide for common exhaust system issues',
    category: 'Restaurant Hood Cleaning',
    niche: 'restaurant-hood-cleaning',
    cities: ['Miami', 'Boca Raton', 'Fort Lauderdale'],
  },
]

// Empty businesses array - will be populated with real hood cleaning vendors
const businesses: any[] = []

function SearchContent() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    const urlQuery = searchParams.get('q')
    if (urlQuery) {
      setQuery(urlQuery.toLowerCase())
    }
  }, [searchParams])

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery.toLowerCase())
  }

  const niches = getAllNiches()

  // Filter niches/services
  const filteredNiches = query
    ? niches.filter(
        (niche) =>
          niche.title.toLowerCase().includes(query) ||
          niche.shortTitle.toLowerCase().includes(query) ||
          niche.description.toLowerCase().includes(query)
      )
    : []

  // Filter resource guides
  const filteredGuides = query
    ? resourceGuides.filter(
        (guide) =>
          guide.title.toLowerCase().includes(query) ||
          guide.description.toLowerCase().includes(query) ||
          guide.category.toLowerCase().includes(query) ||
          guide.cities.some((city) => city.toLowerCase().includes(query))
      )
    : []

  // Filter businesses
  const filteredBusinesses = query
    ? businesses.filter(
        (business) =>
          business.name.toLowerCase().includes(query) ||
          business.description.toLowerCase().includes(query) ||
          business.category.toLowerCase().includes(query) ||
          business.city.toLowerCase().includes(query) ||
          business.services?.some((service: string) => service.toLowerCase().includes(query))
      )
    : []

  const totalResults = filteredNiches.length + filteredGuides.length + filteredBusinesses.length

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold text-primary-fg mb-4">
              Search LocalBizzList
            </h1>
            <p className="text-lg mb-8 opacity-90 text-primary-fg">
              Find businesses, articles, and guides across South Florida
            </p>
            <SearchBar
              placeholder="Search for businesses, services, or articles..."
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      <section className="container py-16">
        {!query ? (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">
              Enter a search term to find businesses and articles
            </p>
          </div>
        ) : totalResults === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg mb-2">
              No results found for "{query}"
            </p>
            <p className="text-neutral-500">
              Try different keywords or browse our{' '}
              <a href="/businesses" className="text-primary hover:text-primary-int">
                business directory
              </a>
              {' '}or{' '}
              <a href="/blog" className="text-primary hover:text-primary-int">
                blog
              </a>
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 mb-2">
                Search Results
              </h2>
              <p className="text-neutral-600">
                Found {totalResults} result{totalResults !== 1 ? 's' : ''} for "{query}"
              </p>
            </div>

            <div className="mb-8">
              <div className="flex gap-4 border-b border-neutral-200 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === 'all'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  All ({totalResults})
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`px-4 py-2 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === 'services'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  Services ({filteredNiches.length})
                </button>
                <button
                  onClick={() => setActiveTab('guides')}
                  className={`px-4 py-2 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === 'guides'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  Guides ({filteredGuides.length})
                </button>
                <button
                  onClick={() => setActiveTab('businesses')}
                  className={`px-4 py-2 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === 'businesses'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  Businesses ({filteredBusinesses.length})
                </button>
              </div>
            </div>

            <div>
              {/* Services/Niches Results */}
              {(activeTab === 'all' || activeTab === 'services') && filteredNiches.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-neutral-800 mb-6">Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNiches.map((niche) => {
                      const Icon = iconMap[niche.icon] || Flame
                      return (
                        <a
                          key={niche.slug}
                          href={`/niches/${niche.slug}`}
                          className="card p-6 hover:shadow-xl transition-all duration-200 group"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h4 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                            {niche.title}
                          </h4>
                          <p className="text-neutral-600 mb-4">{niche.description}</p>
                          <span className="text-primary font-semibold text-sm group-hover:underline">
                            View Service →
                          </span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Resource Guides Results */}
              {(activeTab === 'all' || activeTab === 'guides') && filteredGuides.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-neutral-800 mb-6">Resource Guides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredGuides.map((guide) => (
                      <div key={guide.slug} className="card p-6">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                          {guide.category}
                        </span>
                        <h4 className="text-xl font-bold text-neutral-800 mb-2">
                          {guide.title}
                        </h4>
                        <p className="text-neutral-600 mb-4">{guide.description}</p>
                        <div className="border-t border-neutral-200 pt-4 mt-4">
                          <p className="text-sm font-semibold text-neutral-700 mb-2">Available for:</p>
                          <div className="flex flex-wrap gap-2">
                            {guide.cities.map((city) => (
                              <a
                                key={city}
                                href={`/resources/${guide.niche}/${city.toLowerCase().replace(' ', '-')}/${guide.slug}`}
                                className="text-primary hover:underline text-sm font-semibold"
                              >
                                {city} →
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Businesses Results */}
              {(activeTab === 'all' || activeTab === 'businesses') && filteredBusinesses.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-neutral-800 mb-6">Businesses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBusinesses.map((business) => (
                      <div key={business.slug} className="card p-6">
                        <div className="flex items-start gap-4 mb-4">
                          {business.logo && (
                            <div className="relative w-16 h-16 flex-shrink-0">
                              <img
                                src={business.logo}
                                alt={`${business.name} logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-neutral-800 mb-1">
                              {business.name}
                            </h4>
                            <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                              {business.category}
                            </span>
                          </div>
                        </div>
                        <p className="text-neutral-600 mb-4">{business.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-neutral-500">
                            {business.city}, {business.state}
                          </span>
                          <a
                            href={`/businesses/${business.slug}`}
                            className="text-primary hover:text-primary-int font-semibold"
                          >
                            View Details →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}