import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Instant Hood Cleaning Quote | NFPA 96 Certified | South Florida',
  description: 'Get an instant quote for restaurant hood cleaning. NFPA 96 certified service for Miami, Boca Raton, Fort Lauderdale. Free estimate in 60 seconds.',
}

export default function InstantQuotePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
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
            <h1 className="text-4xl font-bold mb-4">
              Get Your Instant Hood Cleaning Quote
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              NFPA 96 certified restaurant hood cleaning for South Florida.
              Free estimate in 60 seconds, no obligation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ NFPA 96 Certified</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ 24/7 Emergency</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Same-Day Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">
              Hood Cleaning Calculator
            </h2>
            
            <form className="space-y-6">
              {/* Service Type */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Service Type *
                </label>
                <select className="input w-full" required>
                  <option value="">Select service type</option>
                  <option value="standard">Standard Hood Cleaning (NFPA 96)</option>
                  <option value="emergency">Emergency Cleaning (Same-day)</option>
                  <option value="inspection">NFPA 96 Inspection Only</option>
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

              {/* Kitchen Type */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Kitchen Type *
                </label>
                <select className="input w-full" required>
                  <option value="">Select kitchen type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel Kitchen</option>
                  <option value="country-club">Country Club</option>
                  <option value="hospital">Hospital/Healthcare</option>
                  <option value="bakery">Commercial Bakery</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Hood Count */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Number of Hoods *
                </label>
                <select className="input w-full" required>
                  <option value="">Select number of hoods</option>
                  <option value="1">1 Hood</option>
                  <option value="2">2 Hoods</option>
                  <option value="3">3 Hoods</option>
                  <option value="4">4 Hoods</option>
                  <option value="5">5 Hoods</option>
                  <option value="6+">6+ Hoods</option>
                </select>
              </div>

              {/* Duct Length */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Duct Length (approximate)
                </label>
                <select className="input w-full">
                  <option value="">Select duct length</option>
                  <option value="short">Short (under 20 feet)</option>
                  <option value="medium">Medium (20-50 feet)</option>
                  <option value="long">Long (50+ feet)</option>
                  <option value="unknown">Not sure</option>
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
                    placeholder="Your restaurant name"
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
                    placeholder="info@localbizzlist.com"
                  />
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="contact" value="call" className="mr-2" defaultChecked />
                    Call me
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="contact" value="text" className="mr-2" />
                    Text me
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="contact" value="email" className="mr-2" />
                    Email me
                  </label>
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
              <h3 className="font-bold text-neutral-800 mb-2">NFPA 96 Certified</h3>
              <p className="text-neutral-600">IKECA member technicians with full certification</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-fg">🛡️</span>
              </div>
              <h3 className="font-bold text-neutral-800 mb-2">$2M Insured</h3>
              <p className="text-neutral-600">Full liability and workers compensation coverage</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-fg">📞</span>
              </div>
              <h3 className="font-bold text-neutral-800 mb-2">24/7 Emergency</h3>
              <p className="text-neutral-600">Same-day response for grease fire emergencies</p>
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
            Call now for same-day emergency hood cleaning
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="tel:+19545554663"
              className="bg-white text-primary hover:bg-neutral-50 px-8 py-3 text-lg rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Call (954) 555-HOOD
            </Link>
            <Link
              href="/services/restaurant-hood-cleaning"
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
