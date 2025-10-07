import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface GuideCardProps {
  title: string
  excerpt: string
  city: string
  category: string
  publishedAt: string
  readTime: string
  slug: string
  citySlug: string
}

function GuideCard({
  title,
  excerpt,
  city,
  category,
  publishedAt,
  readTime,
  slug,
  citySlug,
}: GuideCardProps) {
  return (
    <Link
      href={`/resources/${citySlug}/${slug}/`}
      className="card overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {city}
        </div>
      </div>
      
      <div className="p-6">
        <div className="category-tag mb-3">
          {category}
        </div>
        
        <h3 className="text-lg font-semibold text-neutral-800 mb-2 leading-tight hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <span>{publishedAt}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  )
}

interface LatestGuidesProps {
  guides: GuideCardProps[]
}

export default function LatestGuides({ guides }: LatestGuidesProps) {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Latest Resources & Guides
          </h2>
          <p className="text-neutral-600 mb-12">
            Educational content to help you maintain compliance and reduce costs
          </p>
          
          <Link
            href="/resources/"
            className="text-primary hover:text-primary-int font-semibold inline-flex items-center gap-2 text-center mx-auto mb-12"
          >
            View All Resources
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <GuideCard
              key={`${guide.slug}-${index}`}
              title={guide.title}
              excerpt={guide.excerpt}
              city={guide.city}
              category={guide.category}
              publishedAt={guide.publishedAt}
              readTime={guide.readTime}
              slug={guide.slug}
              citySlug={guide.citySlug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
