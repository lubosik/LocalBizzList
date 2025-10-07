import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Globe, CheckCircle2, ArrowLeft } from 'lucide-react'

// Mock business data - replace with real data source
const mockBusinesses = [
  {
    slug: 'elite-realty-group',
    name: 'Elite Realty Group',
    description: 'Premier luxury real estate services in South Florida',
    category: 'Real Estate',
    city: 'Miami',
    state: 'FL',
    phone: '(305) 555-0123',
    website: 'https://eliterealtygroup.com',
    services: ['Luxury Home Sales', 'Property Management', 'Investment Consulting'],
    logo: '/images/businesses/elite-realty-group.jpg',
    verified: true,
    featured: true,
  },
  {
    slug: 'prestige-wealth-advisors',
    name: 'Prestige Wealth Advisors',
    description: 'Comprehensive wealth management and financial planning services',
    category: 'Financial Services',
    city: 'Boca Raton',
    state: 'FL',
    phone: '(561) 555-0456',
    website: 'https://prestigewealthadvisors.com',
    services: ['Investment Management', 'Estate Planning', 'Tax Optimization'],
    logo: '/images/businesses/prestige-wealth-advisors.jpg',
    verified: true,
    featured: true,
  },
]

export async function generateStaticParams() {
  return mockBusinesses.map((business) => ({
    slug: business.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const business = mockBusinesses.find((business) => business.slug === params.slug)

  if (!business) {
    return {
      title: 'Business Not Found',
    }
  }

  return {
    title: `${business.name} - LocalBizzList`,
    description: business.description,
    openGraph: {
      title: business.name,
      description: business.description,
      type: 'website',
      images: business.logo ? [business.logo] : [],
    },
  }
}

export default function BusinessPage({ params }: { params: { slug: string } }) {
  const business = mockBusinesses.find((business) => business.slug === params.slug)

  if (!business) {
    notFound()
  }

  // Get related businesses
  const relatedBusinesses = mockBusinesses
    .filter(
      (b) =>
        b.slug !== business.slug &&
        (b.category === business.category || b.city === business.city)
    )
    .slice(0, 3)

  return (
    <>
      <article>
        {/* Breadcrumbs */}
        <div className="border-b border-neutral-200 bg-neutral-50">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-neutral-600">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/businesses" className="hover:text-primary transition-colors">
                Businesses
              </Link>
              <span>/</span>
              <span className="text-neutral-800 truncate">{business.name}</span>
            </nav>
          </div>
        </div>

        {/* Business Header */}
        <header className="container py-12">
          <Link
            href="/businesses"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-int font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Businesses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-6">
                {business.logo && (
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={business.logo}
                      alt={`${business.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <h1 className="text-4xl font-bold text-neutral-800 leading-tight">
                      {business.name}
                    </h1>
                    {business.verified && (
                      <CheckCircle2 className="h-8 w-8 text-accent flex-shrink-0" />
                    )}
                  </div>
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                    {business.category}
                  </span>
                </div>
              </div>

              <p className="text-xl text-neutral-600 mb-8">{business.description}</p>

              {/* Services */}
              {business.services && business.services.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-4">Services</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {business.services.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-neutral-700"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Content */}
              <div className="prose prose-lg max-w-none">
                <p>Contact us today to learn more about our services and how we can help you achieve your goals.</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="card p-6 bg-neutral-50">
                  <h3 className="text-lg font-bold text-neutral-800 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-neutral-700">
                          {business.city}, {business.state}
                        </p>
                      </div>
                    </div>

                    {business.phone && (
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                        <a
                          href={`tel:${business.phone}`}
                          className="text-primary hover:text-primary-int font-semibold transition-colors"
                        >
                          {business.phone}
                        </a>
                      </div>
                    )}

                    {business.website && (
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                        <a
                          href={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-int font-semibold transition-colors break-all"
                        >
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <button className="btn-primary w-full py-3">
                      Request Quote
                    </button>
                  </div>
                </div>

                {/* Trust Badge */}
                {business.verified && (
                  <div className="card p-6 bg-accent/5 border-accent/20">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                      <h3 className="text-lg font-bold text-neutral-800">
                        Verified Business
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-600">
                      This business has been verified by LocalBizzList and meets our quality standards.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      </article>

      {/* Related Businesses */}
      {relatedBusinesses.length > 0 && (
        <section className="bg-neutral-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">
              Similar Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBusinesses.map((relatedBusiness) => (
                <div key={relatedBusiness.slug} className="card p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">
                    {relatedBusiness.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">{relatedBusiness.description}</p>
                  <Link
                    href={`/businesses/${relatedBusiness.slug}`}
                    className="text-primary hover:text-primary-int font-semibold"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}