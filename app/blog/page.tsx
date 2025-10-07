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
  // Mock data for blog posts until contentlayer is properly configured
  const posts: BlogPost[] = [
    {
      title: 'NFPA 96 Compliance Checklist for Fort Lauderdale Restaurants',
      excerpt: 'Complete checklist for NFPA 96 compliance including inspection requirements, cleaning schedules, and certification procedures.',
      slug: 'nfpa-96-compliance-checklist-fort-lauderdale',
      publishedAt: '2025-01-05',
      category: 'compliance-inspections',
      categorySlug: 'compliance-inspections',
      featuredImage: '/images/blog/nfpa-compliance.jpg',
      featuredImageAlt: 'NFPA 96 compliance checklist',
      author: 'LocalBizzList Team',
      readingTime: 8,
      niche: 'restaurant-hood-cleaning',
      city: 'Fort Lauderdale',
      url: '/blog/nfpa-96-compliance-checklist-fort-lauderdale',
    },
    {
      title: 'Hood Cleaning Cost Guide for Miami Restaurants',
      excerpt: 'Understanding hood cleaning costs, pricing factors, and budget planning for Miami-Dade County restaurants.',
      slug: 'hood-cleaning-cost-guide-miami',
      publishedAt: '2025-01-04',
      category: 'cost-guides',
      categorySlug: 'cost-guides',
      featuredImage: '/images/blog/hood-cleaning-costs.jpg',
      featuredImageAlt: 'Hood cleaning cost breakdown',
      author: 'LocalBizzList Team',
      readingTime: 6,
      niche: 'restaurant-hood-cleaning',
      city: 'Miami',
      url: '/blog/hood-cleaning-cost-guide-miami',
    },
    {
      title: 'Emergency Grease Trap Overflow Solutions in Boca Raton',
      excerpt: 'Immediate steps to take when your grease trap overflows and how to prevent future incidents.',
      slug: 'emergency-grease-trap-overflow-boca-raton',
      publishedAt: '2025-01-03',
      category: 'emergency-after-hours',
      categorySlug: 'emergency-after-hours',
      featuredImage: '/images/blog/grease-trap-emergency.jpg',
      featuredImageAlt: 'Emergency grease trap overflow',
      author: 'LocalBizzList Team',
      readingTime: 10,
      niche: 'grease-trap-cleaning',
      city: 'Boca Raton',
      url: '/blog/emergency-grease-trap-overflow-boca-raton',
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