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
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">Expert guides and compliance tips for grease trap maintenance</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-white">We Handle Everything For You</h2>
            <p className="text-lg text-white/90 mb-4">
              <strong>We handle all the sourcing, negotiations, and logistics to find you the best grease trap cleaning service provider at the cheapest cost in your area.</strong> 
              Restaurant hood cleaning, grease trap services, septic maintenance, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center text-white/90">
                <span className="w-5 h-5 bg-green-300 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-green-800 text-xs">✓</span>
                </span>
                <span>EPA Compliant Providers</span>
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-5 h-5 bg-green-300 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-green-800 text-xs">✓</span>
                </span>
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-5 h-5 bg-green-300 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-green-800 text-xs">✓</span>
                </span>
                <span>Complete Project Management</span>
              </div>
            </div>
          </div>
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
