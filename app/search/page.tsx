'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { allPosts, allBusinesses } from 'contentlayer/generated'
import SearchBar from '@/components/SearchBar'
import ArticleGrid from '@/components/ArticleGrid'
import BusinessGrid from '@/components/BusinessGrid'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/Tabs'

export default function SearchPage() {
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
    ? allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(query))
      )
    : []

  // Filter businesses
  const filteredBusinesses = query
    ? allBusinesses.filter(
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
                  <BusinessGrid businesses={filteredBusinesses} />
                </div>
              )}

              {(activeTab === 'all' || activeTab === 'articles') && filteredPosts.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-6">Articles</h3>
                  <ArticleGrid posts={filteredPosts} />
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </>
  )
}