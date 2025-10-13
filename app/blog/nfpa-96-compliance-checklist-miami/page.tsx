import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Clock, MapPin, Calendar, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: "30-Point NFPA 96 Compliance Checklist for Miami Restaurants",
  description: "Complete NFPA 96 compliance checklist for Miami restaurants. Ensure fire safety compliance with Miami-Dade County requirements and avoid costly violations.",
  keywords: ["NFPA 96 checklist Miami", "restaurant hood cleaning Miami", "commercial kitchen fire safety", "Miami-Dade fire code compliance"],
  category: "compliance-inspections",
  city: "Miami",
  thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2025-10-06",
  updatedAt: "2025-10-06",
  readTime: "12 min",
  h1: "30-Point NFPA 96 Compliance Checklist for Miami Restaurants",
  canonical: "https://local-bizz-list.vercel.app/blog/nfpa-96-compliance-checklist-miami"
}

const articleMeta = {
  title: "30-Point NFPA 96 Compliance Checklist for Miami Restaurants",
  description: "Complete NFPA 96 compliance checklist for Miami restaurants. Ensure fire safety compliance with Miami-Dade County requirements and avoid costly violations.",
  keywords: ["NFPA 96 checklist Miami", "restaurant hood cleaning Miami", "commercial kitchen fire safety", "Miami-Dade fire code compliance"],
  category: "compliance-inspections",
  city: "Miami",
  thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2025-10-06",
  updatedAt: "2025-10-06",
  readTime: "12 min",
  h1: "30-Point NFPA 96 Compliance Checklist for Miami Restaurants",
  canonical: "https://local-bizz-list.vercel.app/blog/nfpa-96-compliance-checklist-miami"
}

export default function NFPA96ComplianceChecklistMiami() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleMeta.h1,
    "description": articleMeta.description,
    "image": articleMeta.thumbnail,
    "author": {
      "@type": "Organization",
      "name": articleMeta.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "LocalBizzList",
      "logo": {
        "@type": "ImageObject",
        "url": "https://local-bizz-list.vercel.app/logo.png"
      }
    },
    "datePublished": articleMeta.publishedAt,
    "dateModified": articleMeta.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleMeta.canonical
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://local-bizz-list.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://local-bizz-list.vercel.app/resources"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Restaurant Hood Cleaning",
          "item": "https://local-bizz-list.vercel.app/niches/restaurant-hood-cleaning"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Miami",
          "item": "https://local-bizz-list.vercel.app/locations/miami"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": articleMeta.h1,
          "item": articleMeta.canonical
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 py-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/resources" className="text-gray-500 hover:text-gray-700">
                  Resources
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/niches/restaurant-hood-cleaning" className="text-gray-500 hover:text-gray-700">
                  Restaurant Hood Cleaning
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/locations/miami" className="text-gray-500 hover:text-gray-700">
                  Miami
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{articleMeta.h1}</li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                Compliance & Inspections
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                Miami
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {articleMeta.h1}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{articleMeta.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{articleMeta.city}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(articleMeta.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Miami's humid climate and year-round dining scene create unique challenges for restaurant hood cleaning compliance. 
                With over 3,000 restaurants in Miami-Dade County, fire inspectors are vigilant about NFPA 96 violations that can 
                result in immediate closure orders and fines up to $5,000. This comprehensive checklist covers all NFPA 96 requirements 
                specific to Miami restaurants, including{' '}
                <Link href="/blog/hood-cleaning-frequency-requirements-miami" className="text-brand-600 hover:text-brand-700 underline">
                  cleaning frequency requirements
                </Link> and{' '}
                <Link href="/niches/restaurant-hood-cleaning" className="text-brand-600 hover:text-brand-700 underline">
                  professional hood cleaning services
                </Link> available throughout Miami-Dade County.
              </p>

              {/* Mid-article CTA */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Professional Hood Cleaning?</h3>
                <p className="text-blue-800 mb-4">
                  Ensure NFPA 96 compliance with certified Miami hood cleaning professionals. Get an instant quote for your restaurant.
                </p>
                <Link 
                  href="/pricing/instant-quote?src=hood_miami_nfpa-96-compliance-checklist-miami_mid"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Section 1: Scheduling & Documentation */}
              <section id="scheduling" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Scheduling & Documentation</h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cleaning Schedule Verification</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Monthly cleaning schedule posted and visible</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Next cleaning date clearly marked</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Previous cleaning certificates on file</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Emergency contact information updated</span>
                    </li>
                  </ul>
                </div>

                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center"
                  alt="Restaurant kitchen exhaust hood cleaning schedule documentation"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg mb-8"
                  loading="lazy"
                />
              </section>

              {/* Section 2: Access & Safety */}
              <section id="access-safety" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Access & Safety</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Access Panel Checklist</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>All access panels easily removable</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>No obstructions blocking panels</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Proper gasket seals intact</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Safety latches functioning</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Requirements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Fire suppression system accessible</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Emergency shut-off switches labeled</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Proper ventilation during cleaning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Certified technician on-site</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: Plenum & Ductwork */}
              <section id="plenum-ducts" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Plenum & Ductwork</h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Plenum Inspection</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No grease accumulation visible</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Proper drainage system functioning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No structural damage or corrosion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Fire suppression nozzles unobstructed</span>
                    </li>
                  </ul>
                </div>

                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center"
                  alt="Commercial kitchen exhaust fan system maintenance and inspection"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg mb-8"
                  loading="lazy"
                />
              </section>

              {/* Section 4: Exhaust Fan */}
              <section id="exhaust-fan" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Exhaust Fan</h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Fan Motor & Blades</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Motor runs smoothly without vibration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Blades clean and balanced</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Belt tension appropriate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Electrical connections secure</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5: Baffles & Filters */}
              <section id="baffles-filters" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Baffles & Filters</h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Filter Condition</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Filters properly installed and aligned</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No visible grease buildup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Proper airflow through filters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Replacement schedule documented</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6: Documentation */}
              <section id="documentation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Documentation</h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Certificates</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Current cleaning certificate posted</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Technician certification visible</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Insurance documentation current</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Next service date clearly marked</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How often should Miami restaurants clean their hoods?</h3>
                    <p className="text-gray-700">
                      Miami restaurants must follow NFPA 96 requirements based on cooking volume. High-volume establishments 
                      (fast food, busy casual dining) require monthly cleaning, while moderate-volume restaurants need 
                      quarterly cleaning. Fine dining establishments may qualify for semi-annual cleaning.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What are the penalties for NFPA 96 violations in Miami?</h3>
                    <p className="text-gray-700">
                      Miami-Dade County Fire Rescue can issue immediate closure orders for NFPA 96 violations. Fines range 
                      from $500 to $5,000 per violation, and restaurants must remain closed until compliance is verified 
                      by a certified inspector.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need a certified technician for hood cleaning?</h3>
                    <p className="text-gray-700">
                      Yes, NFPA 96 requires hood cleaning to be performed by certified technicians. The technician must 
                      provide certification documentation and post a cleaning certificate with the next service date 
                      clearly visible.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What documentation is required for Miami inspections?</h3>
                    <p className="text-gray-700">
                      Miami-Dade County inspectors require current cleaning certificates, technician certifications, 
                      insurance documentation, and a posted cleaning schedule. All documentation must be easily 
                      accessible during inspections.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How does Miami's humidity affect hood cleaning frequency?</h3>
                    <p className="text-gray-700">
                      Miami's high humidity accelerates grease buildup and corrosion. Restaurants in high-humidity 
                      areas may need more frequent cleaning than NFPA 96 minimums. Regular inspections help determine 
                      if additional cleaning is needed.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I clean my own hood system?</h3>
                    <p className="text-gray-700">
                      NFPA 96 requires professional cleaning by certified technicians. DIY cleaning does not meet 
                      compliance requirements and may void insurance coverage. Professional cleaning ensures proper 
                      documentation and compliance verification.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What should I do if I receive a violation notice?</h3>
                    <p className="text-gray-700">
                      Contact a certified hood cleaning company immediately. Schedule emergency cleaning service 
                      and ensure all documentation is updated. Request a re-inspection to verify compliance and 
                      remove the violation notice.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How much does professional hood cleaning cost in Miami?</h3>
                    <p className="text-gray-700">
                      Hood cleaning costs in Miami range from $300 to $800 depending on system size and complexity. 
                      High-volume restaurants with complex ductwork may cost more. Regular maintenance contracts 
                      often provide better pricing and priority service.
                    </p>
                  </div>
                </div>
              </section>

              {/* End CTA */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Ensure NFPA 96 Compliance?</h3>
                <p className="text-blue-800 mb-6 text-lg">
                  Get professional hood cleaning service in Miami with certified technicians and guaranteed compliance documentation.
                </p>
                <Link 
                  href="/pricing/instant-quote?src=hood_miami_nfpa-96-compliance-checklist-miami_end"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}