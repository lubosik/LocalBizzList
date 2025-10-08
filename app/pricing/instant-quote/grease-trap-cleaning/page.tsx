import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Instant Grease Trap Cleaning Quote | South Florida | LocalBizzList',
  description: 'Get an instant quote for grease trap cleaning and pumping. Professional service for Miami, Boca Raton, Fort Lauderdale. Free estimate in 60 seconds.',
}

export default function GreaseTrapQuotePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary to-primary-int py-16">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Get Your Instant Grease Trap Quote
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional grease trap pumping and maintenance for South Florida restaurants.
            Free estimate in 60 seconds, no obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Licensed & Insured</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Emergency Service</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Same-Day Available</span>
          </div>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">
              Grease Trap Cleaning Calculator
            </h2>

            <form className="space-y-6">
              {/* Service Type */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Service Type *
                </label>
                <select className="input w-full" required>
                  <option value="">Select service type</option>
                  <option value="pumping">Grease Trap Pumping</option>
                  <option value="emergency">Emergency Overflow Service</option>
                  <option value="maintenance">Regular Maintenance</option>
                  <option value="inspection">Inspection & Compliance</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Service Location *
                </label>
                <select className="input w-full" required>
                  <option value="">Select your city</option>
                  <option value="miami">Miami, FL</option>
                  <option value="boca-raton">Boca Raton, FL</option>
                  <option value="fort-lauderdale">Fort Lauderdale, FL</option>
                </select>
              </div>

              {/* Facility Type */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Facility Type *
                </label>
                <select className="input w-full" required>
                  <option value="">Select facility type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel/Resort</option>
                  <option value="commercial">Commercial Kitchen</option>
                  <option value="industrial">Industrial Facility</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Grease Trap Size */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Grease Trap Size (gallons) *
                </label>
                <select className="input w-full" required>
                  <option value="">Select trap size</option>
                  <option value="small">Small (under 500 gallons)</option>
                  <option value="medium">Medium (500-1000 gallons)</option>
                  <option value="large">Large (1000-2000 gallons)</option>
                  <option value="xlarge">Extra Large (2000+ gallons)</option>
                  <option value="unknown">Not sure</option>
                </select>
              </div>

              {/* Service Frequency */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  How often do you need service?
                </label>
                <select className="input w-full">
                  <option value="">Select frequency</option>
                  <option value="onetime">One-time service</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="asneeded">As needed</option>
                </select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your business name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="input w-full"
                    placeholder="(954) 555-0123"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  className="input w-full h-24"
                  placeholder="Any special requirements, access notes, or questions..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-12 py-4 text-lg font-semibold"
                >
                  Get My Free Quote
                </button>
                <p className="text-sm text-neutral-500 mt-4">
                  By submitting, you agree to receive calls/texts. No spam, unsubscribe anytime.
                </p>
              </div>
            </form>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-fg">✓</span>
              </div>
              <h3 className="font-bold text-neutral-800 mb-2">Licensed & Insured</h3>
              <p className="text-neutral-600">Fully licensed waste haulers with insurance</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-fg">🛡️</span>
              </div>
              <h3 className="font-bold text-neutral-800 mb-2">EPA Compliant</h3>
              <p className="text-neutral-600">Proper disposal and documentation</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-fg">📞</span>
              </div>
              <h3 className="font-bold text-neutral-800 mb-2">Emergency Service</h3>
              <p className="text-neutral-600">Same-day response for overflow emergencies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-primary py-16">
        <div className="container text-center text-primary-fg">
          <h2 className="text-3xl font-bold mb-4">
            Need Immediate Service?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call now for emergency grease trap service
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="tel:+19545554663"
              className="bg-white text-primary hover:bg-neutral-50 px-8 py-3 text-lg rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Call (954) 555-4663
            </Link>
            <Link
              href="/niches/grease-trap-cleaning"
              className="text-primary-fg hover:underline font-semibold opacity-90"
            >
              Learn More About Our Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
