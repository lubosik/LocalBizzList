import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parking Lot Cracks Worsening After Rain - Repair Solutions | LocalBizzList',
  description: 'Crack sealing and sealcoating prevent water penetration and extend pavement life. Expert parking lot repair in South Florida.',
  keywords: ['parking lot cracks after rain', 'asphalt crack sealing', 'prevent parking lot deterioration'],
}

export default function ParkingLotCracksWorseningPage() {
  return (
    <article className="container py-12">
      <header className="mb-8">
        <div className="text-sm text-primary font-semibold mb-2">SEALCOATING & PAVING</div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          Parking Lot Cracks Worsening After Rain
        </h1>
        <p className="text-xl text-neutral-600">
          Crack sealing and sealcoating prevent water penetration and extend pavement life.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500 mt-4">
          <span>Published: October 9, 2025</span>
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
