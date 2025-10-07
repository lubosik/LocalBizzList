'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import SearchBar from '@/components/SearchBar'

// Mock data - replace with real data source
const mockPosts = [
  {
    slug: 'nfpa-96-compliance-checklist',
    title: 'NFPA 96 Compliance Checklist',
    excerpt: 'Complete checklist for NFPA 96 compliance',
    category: 'Compliance & Inspections',
    publishedAt: '2025-01-05',
    readTime: '8 min read',
    featuredImage: '/images/blog/nfpa-96-checklist.jpg',
    featuredImageAlt: 'NFPA 96 Compliance Checklist',
  },
]

const mockBusinesses = [
  {
    slug: 'elite-realty-group',
    name: 'Elite Realty Group',
    description: 'Premier luxury real estate services in South Florida',
    category: 'Real Estate',
    city: 'Miami',
    state: 'FL',
    phone: '(305) 555-0123',
    website: 'https://eliterealtygroup.com',
    services: ['Luxury Home Sales', 'Property Management', 'Investment Consulting'],
    logo: '/images/businesses/elite-realty-group.jpg',
    verified: true,
    featured: true,
  },
]

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

  // Filter posts
  const filteredPosts = query
    ? mockPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      )
    : []

  // Filter businesses
  const filteredBusinesses = query
    ? mockBusinesses.filter(
        (business) =>
          business.name.toLowerCase().includes(query) ||
          business.description.toLowerCase().includes(query) ||
          business.category.toLowerCase().includes(query) ||
          business.city.toLowerCase().includes(query) ||
          business.services?.some((service) => service.toLowerCase().includes(query))
      )
    : []

  const totalResults = filteredPosts.length + filteredBusinesses.length

  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary/80 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Search LocalBizzList
            </h1>
            <p className="text-lg text-white/90 mb-8">
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
              <div className="flex gap-4 border-b border-neutral-200">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 font-semibold transition-colors border-b-2 ${
                    activeTab === 'all'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  All ({totalResults})
                </button>
                <button
                  onClick={() => setActiveTab('businesses')}
                  className={`px-4 py-2 font-semibold transition-colors border-b-2 ${
                    activeTab === 'businesses'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  Businesses ({filteredBusinesses.length})
                </button>
                <button
                  onClick={() => setActiveTab('articles')}
                  className={`px-4 py-2 font-semibold transition-colors border-b-2 ${
                    activeTab === 'articles'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  Articles ({filteredPosts.length})
                </button>
              </div>
            </div>

            <div>
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

              {(activeTab === 'all' || activeTab === 'articles') && filteredPosts.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-6">Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                      <div key={post.slug} className="card p-6">
                        <h4 className="text-xl font-bold text-neutral-800 mb-2">
                          {post.title}
                        </h4>
                        <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-neutral-500">
                            {post.category} • {post.readTime}
                          </span>
                          <a
                            href={`/blog/${post.slug}`}
                            className="text-primary hover:text-primary-int font-semibold"
                          >
                            Read More →
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