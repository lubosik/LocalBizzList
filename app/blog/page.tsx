import { allPosts } from 'contentlayer/generated'
import Hero from '@/components/Hero'
import ArticleGrid from '@/components/ArticleGrid'
import CategoryStrip from '@/components/home/CategoryStrip'
import IssuesGrid from '@/components/home/IssuesGrid'
import { getAllCategories } from '@/lib/data/categories'
import { getHomepageIssues } from '@/lib/data/issues'

export const metadata = {
  title: 'Blog & Resources - LocalBizzList',
  description: 'Expert advice, how-to guides, cost information, and local insights for South Florida commercial services.',
}

// Define in-scope niches
const IN_SCOPE_NICHES = [
  'restaurant-hood-cleaning',
  'grease-trap-cleaning', 
  'septic-tank-services',
  'sealcoating',
  'fire-extinguisher-services',
  'sprinkler-repair'
]

// Define in-scope categories
const IN_SCOPE_CATEGORIES = [
  'cost-guides',
  'compliance-inspections',
  'maintenance-repairs',
  'emergency-after-hours',
  'planning-roi'
]

export default function BlogPage() {
  // Filter posts to only include in-scope content
  const filteredPosts = allPosts.filter(post => {
    const hasValidNiche = post.niche && IN_SCOPE_NICHES.includes(post.niche)
    const hasValidCategory = post.category && IN_SCOPE_CATEGORIES.includes(post.category)
    return hasValidNiche && hasValidCategory
  })

  const posts = filteredPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

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