import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface IssueCardProps {
  niche: string
  title: string
  snippet: string
  slug: string
  city: string
}

function IssueCard({ niche, title, snippet, slug, city }: IssueCardProps) {
  return (
    <div className="card p-5 hover:shadow-xl transition-shadow">
      <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
        {niche}
      </div>
      <h3 className="text-base font-semibold text-neutral-800 mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 mb-3">
        {snippet}
      </p>
      <Link
        href={`/resources/${city}/${slug}/`}
        className="text-primary hover:text-primary-int font-semibold text-sm inline-flex items-center gap-1"
      >
        Read Solution
        <ArrowRight className="w-4 h-4" />
      </Link>
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
            title={issue.title}
            snippet={issue.snippet}
            slug={issue.slug}
            city={issue.city}
          />
        ))}
      </div>
    </section>
  )
}
