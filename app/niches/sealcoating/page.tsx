import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator } from 'lucide-react'
import IssuesGrid from '@/components/home/IssuesGrid'
import LatestGuides from '@/components/home/LatestGuides'
import { getNicheBySlug } from '@/lib/data/niches'
import { getAllCities } from '@/lib/data/cities'
import { getIssuesByNiche } from '@/lib/data/issues'

export const metadata: Metadata = {
  title: 'Sealcoating & Paving Services - South Florida | LocalBizzList',
  description: 'Asphalt sealcoating, striping, pothole repair, and parking lot maintenance in Miami, Boca Raton, and Fort Lauderdale. Professional paving services.',
  keywords: [
    'sealcoating South Florida',
    'parking lot maintenance Miami',
    'asphalt repair Boca Raton',
    'paving services Fort Lauderdale',
    'parking lot striping',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com/niches/sealcoating/',
    siteName: 'LocalBizzList',
    title: 'Sealcoating & Paving Services - South Florida',
    description: 'Asphalt sealcoating and parking lot maintenance in Miami, Boca Raton, Fort Lauderdale. Professional paving services.',
  },
}

export default function SealcoatingPage() {
  const niche = getNicheBySlug('sealcoating')
  const cities = getAllCities()

  if (!niche) {
    return <div>Niche not found</div>
  }

  // Get real issues for this niche
  const nicheIssues = getIssuesByNiche('sealcoating')
  
  // Transform issues for IssuesGrid component
  const sealcoatingIssues = nicheIssues.map((issue) => ({
    niche: 'Sealcoating',
    title: issue.title,
    snippet: issue.snippet,
    slug: issue.slug,
    city: issue.cities[0], // Use first city
  }))

  // Mock data for sealcoating resources
  const sealcoatingResources = [
    {
      title: 'Sealcoating Frequency Guide for Florida Climate',
      excerpt: 'Understanding when to schedule sealcoating based on Florida weather patterns and traffic volume.',
      city: 'Miami',
      category: 'Maintenance & Repairs',
      publishedAt: 'Jan 5, 2025',
      readTime: '6 min read',
      slug: 'sealcoating-frequency-florida-climate',
      citySlug: 'miami',
    },
    {
      title: 'Emergency Pothole Repair Solutions',
      excerpt: 'Step-by-step guide for handling pothole emergencies and preventing vehicle damage.',
      city: 'Boca Raton',
      category: 'Emergency & After-Hours',
      publishedAt: 'Jan 4, 2025',
      readTime: '7 min read',
      slug: 'emergency-pothole-repair-service',
      citySlug: 'boca-raton',
    },
    {
      title: 'Parking Lot Striping Compliance Guide',
      excerpt: 'Complete guide for ADA-compliant parking lot striping and signage requirements.',
      city: 'Fort Lauderdale',
      category: 'Compliance & Inspections',
      publishedAt: 'Jan 3, 2025',
      readTime: '8 min read',
      slug: 'parking-lot-restriping-guide',
      citySlug: 'fort-lauderdale',
    },
    {
      title: 'Parking Lot Crack Repair Methods',
      excerpt: 'Effective techniques for sealing cracks and preventing water damage to asphalt.',
      city: 'Miami',
      category: 'Maintenance & Repairs',
      publishedAt: 'Jan 2, 2025',
      readTime: '6 min read',
      slug: 'parking-lot-crack-repair-sealcoating',
      citySlug: 'miami',
    },
    {
      title: 'Parking Lot Cost Reduction Strategies',
      excerpt: 'Ways to reduce parking lot maintenance costs through preventive care and efficient scheduling.',
      city: 'Boca Raton',
      category: 'Cost Guides',
      publishedAt: 'Jan 1, 2025',
      readTime: '7 min read',
      slug: 'parking-lot-cost-reduction-strategies',
      citySlug: 'boca-raton',
    },
    {
      title: 'Parking Lot Inspection Requirements',
      excerpt: 'Understanding local regulations and inspection requirements for parking lot maintenance.',
      city: 'Fort Lauderdale',
      category: 'Compliance & Inspections',
      publishedAt: 'Dec 31, 2024',
      readTime: '8 min read',
      slug: 'parking-lot-inspection-compliance',
      citySlug: 'fort-lauderdale',
    },
  ]

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Sealcoating & Paving Services',
            serviceType: 'Sealcoating',
            areaServed: cities.map(city => ({
              '@type': 'City',
              name: city.name,
              addressRegion: city.state,
            })),
            provider: {
              '@type': 'Organization',
              name: 'LocalBizzList',
              url: 'https://localbizzlist.com',
            },
            description: niche.description,
            url: 'https://localbizzlist.com/niches/sealcoating/',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://localbizzlist.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Service Niches',
                item: 'https://localbizzlist.com/niches/',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Sealcoating & Paving',
                item: 'https://localbizzlist.com/niches/sealcoating/',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-int py-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sealcoating & Paving Services in South Florida
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {niche.description} Available in Miami, Fort Lauderdale, and Boca Raton.
          </p>
          <Link
            href="/pricing/instant-quote/sealcoating?src=niche_sealcoating"
            className="btn-primary bg-white text-primary hover:bg-neutral-50 px-8 py-4 text-lg font-bold inline-flex items-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Get Instant Quote
          </Link>
        </div>
      </section>

      {/* Service Locations */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Service Areas
          </h2>
          <p className="text-neutral-600">
            Find certified Sealcoating & Paving providers in your city.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}/sealcoating/`}
              className="card p-6 text-center hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {city.name}
              </h3>
              <p className="text-neutral-600 text-sm mb-4">
                {city.county} County, {city.state}
              </p>
              <span className="text-primary font-semibold">
                View {city.name} Services →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Common Issues */}
      <section className="bg-neutral-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-2">
              Common Sealcoating Issues
            </h2>
            <p className="text-neutral-600">
              Expert solutions for your toughest paving challenges
            </p>
          </div>
          
          <IssuesGrid issues={sealcoatingIssues} />
        </div>
      </section>

      {/* Resources */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Resources & Guides
          </h2>
          <p className="text-neutral-600">
            Expert advice on sealcoating maintenance, compliance, and cost management.
          </p>
        </div>
        
        <LatestGuides guides={sealcoatingResources} />
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-fg mb-2">
              Need parking lot sealcoating?
            </h2>
            <p className="text-primary-fg/90 text-base">
              Get an instant quote for professional sealcoating service.
            </p>
          </div>

          <Link
            href="/pricing/instant-quote/sealcoating?src=niche_sealcoating_footer"
            className="bg-white text-primary hover:bg-neutral-50 px-8 py-4 text-lg font-bold inline-flex items-center gap-2 rounded-lg transition-colors"
          >
            <Calculator className="w-5 h-5" />
            Get Instant Quote
          </Link>
        </div>
      </section>
    </>
  )
}
