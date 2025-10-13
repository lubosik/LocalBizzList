import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface IssueCardProps {
  niche: string
  nicheSlug?: string
  title: string
  snippet: string
  slug: string
  city: string
  thumbnailImage?: string
  comingSoon?: boolean
}

// Helper to map niche slugs to URL path segments
function getNichePathSegment(nicheSlug?: string, slug?: string): string {
  if (nicheSlug) {
    const nicheMap: Record<string, string> = {
      'restaurant-hood-cleaning': 'hood-cleaning',
      'grease-trap-cleaning': 'grease-trap',
      'septic-tank-services': 'septic',
      'sealcoating': 'sealcoating',
      'fire-extinguisher-services': 'fire-extinguisher',
      'sprinkler-repair': 'sprinkler',
    }
    return nicheMap[nicheSlug] || nicheSlug
  }
  // Fallback logic based on slug
  if (!slug) return 'hood-cleaning'
  if (slug.startsWith('failed') || slug.startsWith('exhaust') || slug.startsWith('hood')) return 'hood-cleaning'
  if (slug.startsWith('grease')) return 'grease-trap'
  if (slug.startsWith('septic') || slug.startsWith('drain')) return 'septic'
  if (slug.startsWith('parking')) return 'sealcoating'
  if (slug.startsWith('fire')) return 'fire-extinguisher'
  return 'sprinkler'
}

function IssueCard({ niche, nicheSlug, title, snippet, slug, city, thumbnailImage, comingSoon }: IssueCardProps) {
  const cardClass = comingSoon
    ? "card p-5 opacity-60 pointer-events-none relative"
    : "card p-5 hover:shadow-xl transition-shadow"

  const pathSegment = getNichePathSegment(nicheSlug, slug)

  return (
    <div className={cardClass}>
      {comingSoon && (
        <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Coming Soon
        </div>
      )}
      {thumbnailImage && (
        <div className="w-full h-32 bg-neutral-200 mb-3 rounded">
          <img
            src={thumbnailImage}
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        </div>
      )}
      <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
        {niche}
      </div>
      <h3 className="text-base font-semibold text-neutral-800 mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 mb-3">
        {snippet}
      </p>
      {!comingSoon ? (
        <Link
          href={`/resources/issues/${pathSegment}/${slug}/`}
          className="text-primary hover:text-primary-int font-semibold text-sm inline-flex items-center gap-1"
        >
          Read Solution
          <ArrowRight className="w-4 h-4" />
        </Link>
      ) : (
        <span className="text-neutral-400 font-semibold text-sm inline-flex items-center gap-1">
          Coming Soon
        </span>
      )}
    </div>
  )
}

interface IssuesGridProps {
  issues: IssueCardProps[]
}

export default function IssuesGrid({ issues }: IssuesGridProps) {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">
          Common Issues We Can Solve
        </h2>
        <p className="text-neutral-600">
          Expert solutions for your toughest commercial facility challenges
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {issues.map((issue, index) => (
          <IssueCard
            key={`${issue.slug}-${index}`}
            niche={issue.niche}
            nicheSlug={issue.nicheSlug}
            title={issue.title}
            snippet={issue.snippet}
            slug={issue.slug}
            city={issue.city}
            thumbnailImage={issue.thumbnailImage}
            comingSoon={issue.comingSoon}
          />
        ))}
      </div>
    </section>
  )
}
