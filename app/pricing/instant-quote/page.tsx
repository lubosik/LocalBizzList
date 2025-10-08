import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNiches } from '@/lib/data/niches'
import { Flame, Droplets, Truck, HardHat, AlertTriangle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Instant Quote - South Florida Commercial Services | LocalBizzList',
  description: 'Get instant quotes for hood cleaning, grease trap, septic, sealcoating, fire extinguisher, and sprinkler services across South Florida.',
}

const iconMap: { [key: string]: any } = {
  Flame,
  Droplets,
  Truck,
  HardHat,
  AlertTriangle,
  Zap,
}

export default function QuoteSelectorPage() {
  const niches = getAllNiches()

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary to-primary-int py-16">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Get Your Instant Quote
          </h1>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
            Select the service you need and get a free, no-obligation quote in 60 seconds.
          </p>
          <p className="text-lg text-white/80">
            Serving Miami, Boca Raton, and Fort Lauderdale
          </p>
        </div>
      </div>

      {/* Service Selection */}
      <div className="container py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
            Which service do you need?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {niches.map((niche) => {
              const Icon = iconMap[niche.icon] || Flame

              return (
                <Link
                  key={niche.slug}
                  href={`/pricing/instant-quote/${niche.slug}?src=quote_selector`}
                  className="card p-6 hover:shadow-xl transition-all duration-200 hover:scale-105 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                      {niche.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                      {niche.description}
                    </p>
                    <span className="text-primary font-semibold text-sm group-hover:underline">
                      Get Quote →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="bg-white py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-800 mb-8 text-center">
              Why Choose LocalBizzList?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-fg">✓</span>
                </div>
                <h4 className="font-bold text-neutral-800 mb-2">Certified Experts</h4>
                <p className="text-neutral-600 text-sm">Licensed, insured, and industry certified</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-fg">🛡️</span>
                </div>
                <h4 className="font-bold text-neutral-800 mb-2">Fully Insured</h4>
                <p className="text-neutral-600 text-sm">$2M liability coverage for your protection</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-fg">📞</span>
                </div>
                <h4 className="font-bold text-neutral-800 mb-2">24/7 Service</h4>
                <p className="text-neutral-600 text-sm">Emergency response available anytime</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-fg">⭐</span>
                </div>
                <h4 className="font-bold text-neutral-800 mb-2">Satisfaction Guaranteed</h4>
                <p className="text-neutral-600 text-sm">Quality work backed by our guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-primary py-16">
        <div className="container text-center text-primary-fg">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call us and we'll help you find the right service
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="tel:+19545554663"
              className="bg-white text-primary hover:bg-neutral-50 px-8 py-3 text-lg rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Call (954) 555-HOOD
            </Link>
            <Link
              href="/about"
              className="text-primary-fg hover:underline font-semibold opacity-90"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
