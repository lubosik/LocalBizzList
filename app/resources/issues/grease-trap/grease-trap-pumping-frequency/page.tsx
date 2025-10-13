import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Often Should We Pump Our Grease Trap? - Maintenance Guide | LocalBizzList',
  description: 'Pumping frequency depends on tank size and daily wastewater volume per EPA guidelines. Complete grease trap maintenance schedule guide.',
  keywords: ['grease trap pumping frequency', 'how often pump grease trap', 'grease trap maintenance schedule'],
}

export default function GreaseTrapPumpingFrequencyPage() {
  return (
    <article className="container py-12">
      <header className="mb-8">
        <div className="text-sm text-primary font-semibold mb-2">GREASE TRAP CLEANING</div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          How Often Should We Pump Our Grease Trap?
        </h1>
        <p className="text-xl text-neutral-600">
          Pumping frequency depends on tank size and daily wastewater volume per EPA guidelines.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500 mt-4">
          <span>Published: October 12, 2025</span>
          <span>8 min read</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {/* Content placeholder - Cursor will fill this */}
        <p className="text-neutral-600">Content coming soon...</p>
      </div>
    </article>
  )
}
