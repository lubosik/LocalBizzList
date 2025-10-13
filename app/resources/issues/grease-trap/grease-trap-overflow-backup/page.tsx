import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grease Trap Overflow Backing Up Drains - Emergency Solutions | LocalBizzList',
  description: 'Emergency pumping service clears blockages and prevents health code violations. Expert grease trap overflow solutions in South Florida.',
  keywords: ['grease trap overflow backup', 'grease trap emergency pumping', 'drain backup from grease trap'],
}

export default function GreaseTrapOverflowPage() {
  return (
    <article className="container py-12">
      <header className="mb-8">
        <div className="text-sm text-primary font-semibold mb-2">GREASE TRAP CLEANING</div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          Grease Trap Overflow Backing Up Drains
        </h1>
        <p className="text-xl text-neutral-600">
          Emergency pumping service clears blockages and prevents health code violations.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500 mt-4">
          <span>Published: October 15, 2025</span>
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
