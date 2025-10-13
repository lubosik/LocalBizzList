import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fire Extinguishers Expired or Missing Tags - Compliance Guide | LocalBizzList',
  description: 'Annual inspections and recharging ensure compliance with Florida Fire Prevention Code. Expert fire extinguisher services in South Florida.',
  keywords: ['expired fire extinguisher tags', 'fire extinguisher inspection Florida', 'fire extinguisher compliance'],
}

export default function FireExtinguishersExpiredTagsPage() {
  return (
    <article className="container py-12">
      <header className="mb-8">
        <div className="text-sm text-primary font-semibold mb-2">FIRE EXTINGUISHER SERVICES</div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          Fire Extinguishers Expired or Missing Tags
        </h1>
        <p className="text-xl text-neutral-600">
          Annual inspections and recharging ensure compliance with Florida Fire Prevention Code.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500 mt-4">
          <span>Published: October 7, 2025</span>
          <span>6 min read</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {/* Content placeholder - Cursor will fill this */}
        <p className="text-neutral-600">Content coming soon...</p>
      </div>
    </article>
  )
}
