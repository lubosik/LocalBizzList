import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic Tank Pumping Schedule and Frequency - Maintenance Guide | LocalBizzList',
  description: 'Optimal pumping schedules based on tank size, household usage, and local regulations. Complete septic maintenance guide.',
  keywords: ['septic tank pumping', 'pumping frequency', 'septic maintenance schedule', 'tank pumping cost'],
}

export default function SepticTankPumpingFrequencyPage() {
  return (
    <article className="container py-12">
      <header className="mb-8">
        <div className="text-sm text-primary font-semibold mb-2">SEPTIC TANK SERVICES</div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          Septic Tank Pumping Schedule and Frequency
        </h1>
        <p className="text-xl text-neutral-600">
          Optimal pumping schedules based on tank size, household usage, and local regulations.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500 mt-4">
          <span>Published: October 13, 2025</span>
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
