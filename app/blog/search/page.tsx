'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Filter, Clock, MapPin, Tag } from 'lucide-react'

// Article data - in a real app, this would come from a CMS or API
const articles = [
  {
    id: 1,
    title: '30-Point NFPA 96 Compliance Checklist for Miami Restaurants',
    slug: 'nfpa-96-compliance-checklist-miami',
    excerpt: 'Complete NFPA 96 compliance checklist for Miami restaurants. Ensure fire safety compliance with Miami-Dade County requirements and avoid costly violations.',
    category: 'Compliance & Inspections',
    city: 'Miami',
    niche: 'Restaurant Hood Cleaning',
    publishedAt: '2024-01-15',
    readTime: '12 min',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?fit=crop',
    url: '/blog/nfpa-96-compliance-checklist-miami',
    tags: ['NFPA 96', 'Miami', 'Compliance', 'Fire Safety']
  },
  {
    id: 2,
    title: 'Hood Cleaning Frequency by Restaurant Type in Boca Raton',
    slug: 'hood-cleaning-frequency-boca-raton',
    excerpt: 'Complete guide to hood cleaning frequency requirements by restaurant type in Boca Raton. NFPA 96 compliance schedules and cost factors.',
    category: 'Compliance & Inspections',
    city: 'Boca Raton',
    niche: 'Restaurant Hood Cleaning',
    publishedAt: '2024-01-15',
    readTime: '10 min',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?fit=crop',
    url: '/blog/hood-cleaning-frequency-boca-raton',
    tags: ['Hood Cleaning', 'Boca Raton', 'Frequency', 'NFPA 96']
  },
  {
    id: 3,
    title: 'Kitchen Exhaust Fan Problems & Quick Fixes in Fort Lauderdale',
    slug: 'exhaust-fan-problems-fort-lauderdale',
    excerpt: 'Common kitchen exhaust fan problems and quick fixes for Fort Lauderdale restaurants. Troubleshooting guide for fan issues.',
    category: 'Maintenance & Repairs',
    city: 'Fort Lauderdale',
    niche: 'Restaurant Hood Cleaning',
    publishedAt: '2024-01-15',
    readTime: '8 min',
    thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?fit=crop',
    url: '/blog/exhaust-fan-problems-fort-lauderdale',
    tags: ['Exhaust Fan', 'Fort Lauderdale', 'Repairs', 'Troubleshooting']
  },
  {
    id: 4,
    title: 'NFPA 96 Hood Cleaning Checklist for Fort Lauderdale',
    slug: 'nfpa-96-hood-cleaning-checklist-fort-lauderdale',
    excerpt: 'Complete NFPA 96 hood cleaning checklist for Fort Lauderdale restaurants. Ensure compliance and avoid violations.',
    category: 'Compliance & Inspections',
    city: 'Fort Lauderdale',
    niche: 'Restaurant Hood Cleaning',
    publishedAt: '2024-01-15',
    readTime: '11 min',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?fit=crop',
    url: '/blog/nfpa-96-hood-cleaning-checklist-fort-lauderdale',
    tags: ['NFPA 96', 'Fort Lauderdale', 'Checklist', 'Compliance']
  },
  {
    id: 5,
    title: 'Hood Cleaning Frequency Requirements in Miami',
    slug: 'hood-cleaning-frequency-requirements-miami',
    excerpt: 'Understanding hood cleaning frequency requirements for Miami restaurants. NFPA 96 compliance and Miami-Dade County regulations.',
    category: 'Compliance & Inspections',
    city: 'Miami',
    niche: 'Restaurant Hood Cleaning',
    publishedAt: '2024-01-15',
    readTime: '9 min',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?fit=crop',
    url: '/blog/hood-cleaning-frequency-requirements-miami',
    tags: ['Hood Cleaning', 'Miami', 'Frequency', 'Requirements']
  },
  {
    id: 6,
    title: 'Exhaust Fan Problems & Coastal Climate Considerations in Boca Raton',
    slug: 'exhaust-fan-coastal-considerations-boca-raton',
    excerpt: 'Exhaust fan problems and coastal climate considerations for Boca Raton restaurants. Salt air effects and maintenance tips.',
    category: 'Maintenance & Repairs',
    city: 'Boca Raton',
    niche: 'Restaurant Hood Cleaning',
    publishedAt: '2024-01-15',
    readTime: '7 min',
    thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?fit=crop',
    url: '/blog/exhaust-fan-coastal-considerations-boca-raton',
    tags: ['Exhaust Fan', 'Boca Raton', 'Coastal', 'Climate']
  },
  {
    id: 7,
    title: 'Exhaust Fan Making Loud Grinding Noise',
    slug: 'exhaust-fan-grinding-noise',
    excerpt: 'Quick guide to exhaust fan grinding noise problems. Troubleshooting steps, repair costs, and when to call professionals.',
    category: 'HOOD CLEANING',
    city: 'All Cities',
    niche: 'Restaurant Hood Cleaning',
    publishedAt: '2024-01-15',
    readTime: '5 min',
    thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?fit=crop',
    url: '/resources/issues/hood-cleaning/exhaust-fan-grinding-noise',
    tags: ['Exhaust Fan', 'Grinding Noise', 'Emergency', 'Repair']
  },
  {
    id: 8,
    title: 'How Often Do We Need Hood Cleaning?',
    slug: 'how-often-hood-cleaning',
    excerpt: 'Complete guide to hood cleaning frequency requirements. NFPA 96 compliance schedules, cost factors, and local regulations.',
    category: 'HOOD CLEANING',
    city: 'All Cities',
    niche: 'Restaurant Hood Cleaning',
    publishedAt: '2024-01-15',
    readTime: '6 min',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?fit=crop',
    url: '/resources/issues/hood-cleaning/how-often-hood-cleaning',
    tags: ['Hood Cleaning', 'Frequency', 'NFPA 96', 'Compliance']
  }
]

const cities = ['All Cities', 'Miami', 'Boca Raton', 'Fort Lauderdale']
const categories = ['All Categories', 'Compliance & Inspections', 'Maintenance & Repairs', 'HOOD CLEANING']
const niches = ['All Niches', 'Restaurant Hood Cleaning']

export default function BlogSearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedNiche, setSelectedNiche] = useState('All Niches')

  // Get search query from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const query = urlParams.get('q')
    if (query) {
      setSearchQuery(query)
    }
  }, [])

  // Filter articles based on search query and filters
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCity = selectedCity === 'All Cities' || article.city === selectedCity
      const matchesCategory = selectedCategory === 'All Categories' || article.category === selectedCategory
      const matchesNiche = selectedNiche === 'All Niches' || article.niche === selectedNiche

      return matchesSearch && matchesCity && matchesCategory && matchesNiche
    })
  }, [searchQuery, selectedCity, selectedCategory, selectedNiche])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Update URL with search query
    const url = new URL(window.location.href)
    if (searchQuery) {
      url.searchParams.set('q', searchQuery)
    } else {
      url.searchParams.delete('q')
    }
    window.history.pushState({}, '', url.toString())
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCity('All Cities')
    setSelectedCategory('All Categories')
    setSelectedNiche('All Niches')
    // Clear URL params
    const url = new URL(window.location.href)
    url.searchParams.delete('q')
    window.history.pushState({}, '', url.toString())
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="container py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Articles</h1>
            <p className="text-gray-600 mb-6">
              Find expert advice, guides, and insights for South Florida commercial services
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, or keywords..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                />
              </div>
            </form>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>
              
              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent"
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Niche Filter */}
              <select
                value={selectedNiche}
                onChange={(e) => setSelectedNiche(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent"
              >
                {niches.map(niche => (
                  <option key={niche} value={niche}>{niche}</option>
                ))}
              </select>

              <button
                onClick={clearFilters}
                className="px-3 py-1 text-sm text-brand-600 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
              >
                Clear All
              </button>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600 mb-6">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={article.url}
                  className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        width={200}
                        height={150}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          {article.city}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-brand-600 mb-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{article.city}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          <span>{article.niche}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
