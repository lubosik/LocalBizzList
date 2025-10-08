import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Instant Fire Extinguisher Service Quote | South Florida | LocalBizzList',
  description: 'Get an instant quote for fire extinguisher inspection, recharging, and installation. Professional service for Miami, Boca Raton, Fort Lauderdale.',
}

export default function FireExtinguisherQuotePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-gradient-to-b from-primary to-primary-int py-16">
        <div className="container">
          <Link
            href="/pricing/instant-quote"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Service Selection
          </Link>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Get Your Instant Fire Extinguisher Quote</h1>
            <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">Professional fire extinguisher inspection, recharging, and compliance services.</p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Fire Extinguisher Service Calculator</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Service Type *</label>
                <select className="input w-full" required>
                  <option value="">Select service type</option>
                  <option value="inspection">Annual Inspection</option>
                  <option value="recharge">Recharge Service</option>
                  <option value="installation">New Installation</option>
                  <option value="training">Fire Safety Training</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Location *</label>
                <select className="input w-full" required>
                  <option value="">Select your city</option>
                  <option value="miami">Miami, FL</option>
                  <option value="boca-raton">Boca Raton, FL</option>
                  <option value="fort-lauderdale">Fort Lauderdale, FL</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Number of Extinguishers *</label>
                <select className="input w-full" required>
                  <option value="">Select quantity</option>
                  <option value="1-5">1-5 units</option>
                  <option value="6-15">6-15 units</option>
                  <option value="16-30">16-30 units</option>
                  <option value="30+">30+ units</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Business Name *</label>
                  <input type="text" className="input w-full" placeholder="Your business" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Phone Number *</label>
                  <input type="tel" className="input w-full" placeholder="(954) 555-0123" required />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn-primary px-12 py-4 text-lg font-semibold">Get My Free Quote</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-primary py-16">
        <div className="container text-center text-primary-fg">
          <h2 className="text-3xl font-bold mb-4">Need Service Today?</h2>
          <Link href="tel:+19545554663" className="bg-white text-primary hover:bg-neutral-50 px-8 py-3 text-lg rounded-lg font-semibold inline-flex items-center transition-colors">Call (954) 555-4663</Link>
        </div>
      </div>
    </div>
  )
}
