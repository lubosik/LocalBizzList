import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Instant Sprinkler Repair Quote | South Florida | LocalBizzList',
  description: 'Get an instant quote for sprinkler system repairs and testing. Professional service for Miami, Boca Raton, Fort Lauderdale.',
}

export default function SprinklerQuotePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">LocalBizzList</Link>
            <Link href="tel:+19545554663" className="text-neutral-700 hover:text-primary font-semibold">(954) 555-4663</Link>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-primary to-primary-int py-16">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Get Your Instant Sprinkler Repair Quote</h1>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">Professional fire sprinkler repairs, backflow testing, and maintenance services.</p>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Sprinkler Service Calculator</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Service Type *</label>
                <select className="input w-full" required>
                  <option value="">Select service type</option>
                  <option value="repair">Sprinkler Repair</option>
                  <option value="inspection">Annual Inspection</option>
                  <option value="backflow-testing">Backflow Testing</option>
                  <option value="installation">New Installation</option>
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
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Building Type *</label>
                <select className="input w-full" required>
                  <option value="">Select building type</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="industrial">Industrial Facility</option>
                  <option value="residential">Residential Complex</option>
                  <option value="warehouse">Warehouse</option>
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

      <div className="bg-secondary py-16">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Emergency Repairs Available</h2>
          <Link href="tel:+19545554663" className="btn-primary px-8 py-3 text-lg">Call (954) 555-4663</Link>
        </div>
      </div>
    </div>
  )
}
