import Link from 'next/link'
import { allPosts, allBusinesses } from 'contentlayer/generated'
import Hero from '@/components/Hero'
import ArticleGrid from '@/components/ArticleGrid'
import BusinessGrid from '@/components/BusinessGrid'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  // Get featured posts
  const featuredPosts = allPosts
    .filter((post) => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)

  // Get featured businesses
  const featuredBusinesses = allBusinesses
    .filter((business) => business.featured)
    .slice(0, 6)

  return (
    <>
      <Hero
        title="South Florida's Premier Directory for High-Value Services"
        description="Connect with verified luxury real estate agents, wealth managers, legal experts, and premium service providers. Curated exclusively for discerning clients."
        showSearch={true}
        searchPlaceholder="Search luxury services, businesses, or expertise..."
      />

      {/* Featured Articles Section */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 mb-2">
              Featured Articles
            </h2>
            <p className="text-neutral-600">
              Insights on wealth, real estate, and premium services in South Florida
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-int font-semibold transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {featuredPosts.length > 0 ? (
          <ArticleGrid posts={featuredPosts} />
        ) : (
          <div className="text-center py-12 bg-neutral-50 rounded-lg">
            <p className="text-neutral-600">No featured articles yet. Check back soon!</p>
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-int font-semibold transition-colors"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-neutral-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-2">
              Browse by Category
            </h2>
            <p className="text-neutral-600">
              Explore articles and guides by topic
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'How-To Guides', slug: 'how-to', color: 'bg-primary' },
              { name: 'Cost Guides', slug: 'cost-guides', color: 'bg-secondary' },
              { name: 'Expert Advice', slug: 'expert-advice', color: 'bg-accent' },
              { name: 'Business News', slug: 'business-news', color: 'bg-primary-int' },
            ].map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-neutral-200"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                  {category.name[0]}
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-neutral-600">
                  Browse {category.name.toLowerCase()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 mb-2">
              Featured Businesses
            </h2>
            <p className="text-neutral-600">
              Verified premium service providers and luxury professionals
            </p>
          </div>
          <Link
            href="/businesses"
            className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-int font-semibold transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {featuredBusinesses.length > 0 ? (
          <BusinessGrid businesses={featuredBusinesses} />
        ) : (
          <div className="text-center py-12 bg-neutral-50 rounded-lg">
            <p className="text-neutral-600">No featured businesses yet. Check back soon!</p>
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/businesses"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-int font-semibold transition-colors"
          >
            View All Businesses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            List Your Business
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join our directory and connect with thousands of South Florida customers looking for your services.
          </p>
          <Link
            href="/businesses/add"
            className="inline-flex items-center gap-2 bg-white text-secondary hover:bg-neutral-50 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Add Your Business
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}