import Hero from '@/components/Hero'
import ArticleGrid from '@/components/ArticleGrid'
import CategoryStrip from '@/components/home/CategoryStrip'
import IssuesGrid from '@/components/home/IssuesGrid'
import { getAllCategories } from '@/lib/data/categories'
import { getHomepageIssues } from '@/lib/data/issues'
import type { BlogPost } from '@/lib/types/blog'

export const metadata = {
  title: 'Blog & Resources - LocalBizzList',
  description: 'Expert advice, how-to guides, cost information, and local insights for South Florida commercial services.',
}

export default function BlogPage() {
  // Real blog posts data
  const posts: BlogPost[] = [
    {
      title: '30-Point NFPA 96 Compliance Checklist for Miami Restaurants',
      excerpt: 'Complete NFPA 96 compliance checklist for Miami restaurants. Ensure fire safety compliance with Miami-Dade County requirements and avoid costly violations.',
      slug: 'nfpa-96-compliance-checklist-miami',
      publishedAt: '2024-01-15',
      category: 'compliance-inspections',
      categorySlug: 'compliance-inspections',
      featuredImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      featuredImageAlt: 'NFPA 96 compliance checklist for Miami restaurants',
      author: 'LocalBizzList Team',
      readingTime: 12,
      niche: 'restaurant-hood-cleaning',
      city: 'Miami',
      url: '/blog/nfpa-96-compliance-checklist-miami',
    },
    {
      title: 'Hood Cleaning Frequency by Restaurant Type in Boca Raton',
      excerpt: 'Complete guide to hood cleaning frequency requirements by restaurant type in Boca Raton. NFPA 96 compliance schedules and cost factors.',
      slug: 'hood-cleaning-frequency-boca-raton',
      publishedAt: '2024-01-15',
      category: 'compliance-inspections',
      categorySlug: 'compliance-inspections',
      featuredImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      featuredImageAlt: 'Hood cleaning frequency by restaurant type',
      author: 'LocalBizzList Team',
      readingTime: 10,
      niche: 'restaurant-hood-cleaning',
      city: 'Boca Raton',
      url: '/blog/hood-cleaning-frequency-boca-raton',
    },
    {
      title: 'Kitchen Exhaust Fan Problems & Quick Fixes in Fort Lauderdale',
      excerpt: 'Common kitchen exhaust fan problems and quick fixes for Fort Lauderdale restaurants. Troubleshooting guide for fan issues.',
      slug: 'exhaust-fan-problems-fort-lauderdale',
      publishedAt: '2024-01-15',
      category: 'maintenance-repairs',
      categorySlug: 'maintenance-repairs',
      featuredImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      featuredImageAlt: 'Kitchen exhaust fan problems and fixes',
      author: 'LocalBizzList Team',
      readingTime: 8,
      niche: 'restaurant-hood-cleaning',
      city: 'Fort Lauderdale',
      url: '/blog/exhaust-fan-problems-fort-lauderdale',
    },
    {
      title: 'NFPA 96 Hood Cleaning Checklist for Fort Lauderdale',
      excerpt: 'Complete NFPA 96 hood cleaning checklist for Fort Lauderdale restaurants. Ensure compliance and avoid violations.',
      slug: 'nfpa-96-hood-cleaning-checklist-fort-lauderdale',
      publishedAt: '2024-01-15',
      category: 'compliance-inspections',
      categorySlug: 'compliance-inspections',
      featuredImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      featuredImageAlt: 'NFPA 96 hood cleaning checklist',
      author: 'LocalBizzList Team',
      readingTime: 11,
      niche: 'restaurant-hood-cleaning',
      city: 'Fort Lauderdale',
      url: '/blog/nfpa-96-hood-cleaning-checklist-fort-lauderdale',
    },
    {
      title: 'Hood Cleaning Frequency Requirements in Miami',
      excerpt: 'Understanding hood cleaning frequency requirements for Miami restaurants. NFPA 96 compliance and Miami-Dade County regulations.',
      slug: 'hood-cleaning-frequency-requirements-miami',
      publishedAt: '2024-01-15',
      category: 'compliance-inspections',
      categorySlug: 'compliance-inspections',
      featuredImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      featuredImageAlt: 'Hood cleaning frequency requirements',
      author: 'LocalBizzList Team',
      readingTime: 9,
      niche: 'restaurant-hood-cleaning',
      city: 'Miami',
      url: '/blog/hood-cleaning-frequency-requirements-miami',
    },
    {
      title: 'Exhaust Fan Problems & Coastal Climate Considerations in Boca Raton',
      excerpt: 'Exhaust fan problems and coastal climate considerations for Boca Raton restaurants. Salt air effects and maintenance tips.',
      slug: 'exhaust-fan-coastal-considerations-boca-raton',
      publishedAt: '2024-01-15',
      category: 'maintenance-repairs',
      categorySlug: 'maintenance-repairs',
      featuredImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      featuredImageAlt: 'Exhaust fan coastal climate considerations',
      author: 'LocalBizzList Team',
      readingTime: 7,
      niche: 'restaurant-hood-cleaning',
      city: 'Boca Raton',
      url: '/blog/exhaust-fan-coastal-considerations-boca-raton',
    },
  ]

  const categories = getAllCategories()
  
  // Get top 6 issues for the "Common Issues" section
  const topIssues = getHomepageIssues(6)
  const issues = topIssues.map((issue) => ({
    niche: issue.title.split(' ')[0],
    title: issue.title,
    snippet: issue.snippet,
    slug: issue.slug,
    city: issue.cities[0],
  }))

  return (
    <>
      <Hero
        title="Blog & Resources"
        description="Expert advice, how-to guides, cost information, and local insights for South Florida commercial services."
        showSearch={true}
        searchPlaceholder="Search articles..."
        searchUrl="/blog/search"
      />

      {/* Category Chips */}
      <section className="container py-8">
        <h2 className="mb-3 text-base font-semibold text-brand-ink/90">Browse resources by topic</h2>
        <CategoryStrip categories={categories} />
      </section>

      {/* Common Issues We Can Solve */}
      <section className="bg-neutral-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-2">
              Common Issues We Can Solve
            </h2>
            <p className="text-neutral-600">
              Expert solutions for your toughest commercial service challenges
            </p>
          </div>
          <IssuesGrid issues={issues} />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Latest Articles
          </h2>
          <p className="text-neutral-600">
            Expert advice and insights for South Florida commercial services
          </p>
        </div>
        <ArticleGrid posts={posts} />
      </section>
    </>
  )
}