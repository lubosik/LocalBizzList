import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Instant Septic Tank Service Quote | South Florida | LocalBizzList',
  description: 'Get an instant quote for septic tank pumping, inspections, and repairs. Professional service for Miami, Boca Raton, Fort Lauderdale.',
}

export default function SepticQuotePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-gradient-to-b from-primary to-primary-int py-16">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Get Your Instant Septic Service Quote</h1>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">Professional septic tank pumping, inspections, and repairs for South Florida.</p>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Septic Service Calculator</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Service Type *</label>
                <select className="input w-full" required>
                  <option value="">Select service type</option>
                  <option value="pumping">Septic Tank Pumping</option>
                  <option value="inspection">Septic Inspection</option>
                  <option value="repair">Repair Service</option>
                  <option value="emergency">Emergency Service</option>
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
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Property Type *</label>
                <select className="input w-full" required>
                  <option value="">Select property type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Contact Name *</label>
                  <input type="text" className="input w-full" placeholder="Your name" required />
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
          <h2 className="text-3xl font-bold mb-4">Need Immediate Service?</h2>
          <Link href="tel:+19545554663" className="bg-white text-primary hover:bg-neutral-50 px-8 py-3 text-lg rounded-lg font-semibold inline-flex items-center transition-colors">Call (954) 555-4663</Link>
        </div>
      </div>
    </div>
  )
}
