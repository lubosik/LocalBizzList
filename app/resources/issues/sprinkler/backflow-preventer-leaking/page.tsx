import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Backflow Preventer Leaking Water - Repair & Testing | LocalBizzList',
  description: 'Certified backflow testing and repair prevents contamination and fines. Expert backflow services in South Florida.',
  keywords: ['backflow preventer leaking', 'backflow testing repair', 'backflow device certification'],
}

export default function BackflowPreventerLeakingPage() {
  return (
    <article className="container py-12">
      <header className="mb-8">
        <div className="text-sm text-primary font-semibold mb-2">SPRINKLER REPAIR & TESTING</div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          Backflow Preventer Leaking Water
        </h1>
        <p className="text-xl text-neutral-600">
          Certified backflow testing and repair prevents contamination and fines.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500 mt-4">
          <span>Published: October 14, 2025</span>
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
