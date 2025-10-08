import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fire Extinguisher Services Resources | Expert Guides | LocalBizzList',
  description: 'Expert fire extinguisher resources and compliance tips for South Florida businesses.',
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-gradient-to-b from-primary to-primary-int py-16">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Fire Extinguisher Services Resources</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Expert guides and tips for fire extinguisher services</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Coming Soon</h2>
            <p className="text-neutral-600 mb-6">Comprehensive fire extinguisher resources are being developed.</p>
            <Link href="/pricing/instant-quote/fire-extinguisher-services?src=resources_fire_extinguisher_services" className="btn-primary px-8 py-3">Get Quote</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
