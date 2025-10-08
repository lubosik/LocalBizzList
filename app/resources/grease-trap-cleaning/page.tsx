import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Grease Trap Cleaning Resources | Maintenance Guides & Tips',
  description: 'Expert grease trap cleaning resources including maintenance guides, pumping schedules, and compliance tips for South Florida businesses.',
}

export default function GreaseTrapResourcesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-gradient-to-b from-primary to-primary-int py-16">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Grease Trap Cleaning Resources</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Expert guides and compliance tips for grease trap maintenance</p>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Coming Soon</h2>
            <p className="text-neutral-600 mb-6">
              We're currently developing comprehensive grease trap cleaning resources including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-8">
              <li>Grease trap maintenance schedules by facility type</li>
              <li>EPA compliance requirements for South Florida</li>
              <li>Emergency overflow prevention tips</li>
              <li>Sizing and capacity guidelines</li>
              <li>Cost-saving maintenance strategies</li>
            </ul>
            <Link href="/pricing/instant-quote/grease-trap-cleaning?src=resources_grease_trap" className="btn-primary px-8 py-3">
              Get Grease Trap Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
