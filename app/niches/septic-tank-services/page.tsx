import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator } from 'lucide-react'
import IssuesGrid from '@/components/home/IssuesGrid'
import LatestGuides from '@/components/home/LatestGuides'
import { getNicheBySlug } from '@/lib/data/niches'
import { getAllCities } from '@/lib/data/cities'
import { getIssuesByNiche } from '@/lib/data/issues'

export const metadata: Metadata = {
  title: 'Septic Tank Services - South Florida | LocalBizzList',
  description: 'Septic tank pumping, inspections, repairs, and emergency services in Miami, Boca Raton, and Fort Lauderdale. Same-day service available.',
  keywords: [
    'septic tank services South Florida',
    'septic pumping Miami',
    'septic tank repair Boca Raton',
    'septic inspection Fort Lauderdale',
    'emergency septic service',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com/niches/septic-tank-services/',
    siteName: 'LocalBizzList',
    title: 'Septic Tank Services - South Florida',
    description: 'Septic tank pumping, inspections, and repairs in Miami, Boca Raton, Fort Lauderdale. Same-day service available.',
  },
}

export default function SepticTankServicesPage() {
  const niche = getNicheBySlug('septic-tank-services')
  const cities = getAllCities()

  if (!niche) {
    return <div>Niche not found</div>
  }

  // Get real issues for this niche
  const nicheIssues = getIssuesByNiche('septic-tank-services')
  
  // Transform issues for IssuesGrid component
  const septicTankIssues = nicheIssues.map((issue) => ({
    niche: 'Septic Tank',
    title: issue.title,
    snippet: issue.snippet,
    slug: issue.slug,
    city: issue.cities[0], // Use first city
  }))

  // Mock data for septic tank resources
  const septicTankResources = [
    {
      title: 'Septic Tank Pumping Frequency Guide for South Florida',
      excerpt: 'Understanding when to schedule septic pumping based on tank size and household usage.',
      city: 'Miami',
      category: 'Maintenance & Repairs',
      publishedAt: 'Jan 5, 2025',
      readTime: '6 min read',
      slug: 'septic-tank-pumping-frequency-guide',
      citySlug: 'miami',
    },
    {
      title: 'Emergency Septic Tank Backup Solutions',
      excerpt: 'Step-by-step guide for handling septic emergencies and preventing property damage.',
      city: 'Boca Raton',
      category: 'Emergency & After-Hours',
      publishedAt: 'Jan 4, 2025',
      readTime: '8 min read',
      slug: 'septic-tank-backup-emergency-pumping',
      citySlug: 'boca-raton',
    },
    {
      title: 'Pre-Sale Septic Inspection Checklist',
      excerpt: 'Complete guide for septic inspections during property sales and transfers.',
      city: 'Fort Lauderdale',
      category: 'Compliance & Inspections',
      publishedAt: 'Jan 3, 2025',
      readTime: '7 min read',
      slug: 'pre-sale-septic-inspection-guide',
      citySlug: 'fort-lauderdale',
    },
    {
      title: 'Septic System Warning Signs',
      excerpt: 'Early indicators of septic system problems and when to call for service.',
      city: 'Miami',
      category: 'Maintenance & Repairs',
      publishedAt: 'Jan 2, 2025',
      readTime: '5 min read',
      slug: 'slow-drains-septic-tank-warning-signs',
      citySlug: 'miami',
    },
    {
      title: 'Septic Tank Cost Reduction Strategies',
      excerpt: 'Ways to reduce septic maintenance costs through preventive care and efficient scheduling.',
      city: 'Boca Raton',
      category: 'Cost Guides',
      publishedAt: 'Jan 1, 2025',
      readTime: '6 min read',
      slug: 'septic-tank-cost-reduction-strategies',
      citySlug: 'boca-raton',
    },
    {
      title: 'Septic System Odor Troubleshooting',
      excerpt: 'Common causes of septic odors and effective solutions for odor control.',
      city: 'Fort Lauderdale',
      category: 'Maintenance & Repairs',
      publishedAt: 'Dec 31, 2024',
      readTime: '7 min read',
      slug: 'septic-system-odor-troubleshooting',
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
            name: 'Septic Tank Services',
            serviceType: 'Septic Tank Services',
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
            url: 'https://localbizzlist.com/niches/septic-tank-services/',
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
                name: 'Septic Tank Services',
                item: 'https://localbizzlist.com/niches/septic-tank-services/',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-int py-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Septic Tank Services in South Florida
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {niche.description} Available in Miami, Fort Lauderdale, and Boca Raton.
          </p>
          <Link
            href="/pricing/instant-quote?src=niche_septic-tank-services"
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
            Find certified Septic Tank Services providers in your city.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}/septic-services/`}
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
              Common Septic Tank Issues
            </h2>
            <p className="text-neutral-600">
              Expert solutions for your toughest septic tank challenges
            </p>
          </div>
          
          <IssuesGrid issues={septicTankIssues} />
        </div>
      </section>

      {/* Resources */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Resources & Guides
          </h2>
          <p className="text-neutral-600">
            Expert advice on septic tank maintenance, compliance, and cost management.
          </p>
        </div>
        
        <LatestGuides guides={septicTankResources} />
      </section>

      {/* Footer CTA */}
      <section className="bg-secondary py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Need same-day septic pumping?
            </h2>
            <p className="text-white/90 text-base">
              Get an instant quote for emergency septic tank service.
            </p>
          </div>
          
          <Link
            href="/pricing/instant-quote?src=niche_septic-tank-services_footer"
            className="btn-primary bg-white text-secondary hover:bg-neutral-50 px-8 py-4 text-lg font-bold inline-flex items-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Get Instant Quote
          </Link>
        </div>
      </section>
    </>
  )
}
