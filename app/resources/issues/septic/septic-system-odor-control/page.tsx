import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic System Odor Control and Elimination - Solutions Guide | LocalBizzList',
  description: 'Effective odor elimination solutions for persistent septic system smells. Expert septic odor control in South Florida.',
  keywords: ['septic system odors', 'septic tank smell', 'odor control septic', 'septic odor elimination'],
}

export default function SepticSystemOdorControlPage() {
  return (
    <article className="container py-12">
      <header className="mb-8">
        <div className="text-sm text-primary font-semibold mb-2">SEPTIC TANK SERVICES</div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          Septic System Odor Control and Elimination
        </h1>
        <p className="text-xl text-neutral-600">
          Effective odor elimination solutions for persistent septic system smells.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500 mt-4">
          <span>Published: October 11, 2025</span>
          <span>7 min read</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {/* Content placeholder - Cursor will fill this */}
        <p className="text-neutral-600">Content coming soon...</p>
      </div>
    </article>
  )
}
