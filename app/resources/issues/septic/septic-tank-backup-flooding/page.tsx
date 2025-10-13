import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic Tank Backup Causing Property Flooding - Emergency Services | LocalBizzList',
  description: 'Emergency pumping and drain field inspection resolve backups in 4-6 hours. Fast septic backup solutions in South Florida.',
  keywords: ['septic tank backup flooding', 'emergency septic pumping', 'septic overflow emergency'],
}

export default function SepticTankBackupFloodingPage() {
  return (
    <article className="container py-12">
      <header className="mb-8">
        <div className="text-sm text-primary font-semibold mb-2">SEPTIC TANK SERVICES</div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          Septic Tank Backup Causing Property Flooding
        </h1>
        <p className="text-xl text-neutral-600">
          Emergency pumping and drain field inspection resolve backups in 4-6 hours.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500 mt-4">
          <span>Published: October 8, 2025</span>
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
