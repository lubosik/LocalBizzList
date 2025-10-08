import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator } from 'lucide-react'
import IssuesGrid from '@/components/home/IssuesGrid'
import LatestGuides from '@/components/home/LatestGuides'
import { getNicheBySlug } from '@/lib/data/niches'
import { getAllCities } from '@/lib/data/cities'
import { getIssuesByNiche } from '@/lib/data/issues'

export const metadata: Metadata = {
  title: 'Fire Extinguisher Services - South Florida | LocalBizzList',
  description: 'Fire extinguisher inspections, recharging, installation, and compliance testing in Miami, Boca Raton, and Fort Lauderdale. Florida Fire Code certified.',
  keywords: [
    'fire extinguisher services South Florida',
    'fire extinguisher inspection Miami',
    'fire safety Boca Raton',
    'fire extinguisher Fort Lauderdale',
    'Florida Fire Code compliance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com/niches/fire-extinguisher-services/',
    siteName: 'LocalBizzList',
    title: 'Fire Extinguisher Services - South Florida',
    description: 'Fire extinguisher inspections and compliance testing in Miami, Boca Raton, Fort Lauderdale. Florida Fire Code certified.',
  },
}

export default function FireExtinguisherServicesPage() {
  const niche = getNicheBySlug('fire-extinguisher-services')
  const cities = getAllCities()

  if (!niche) {
    return <div>Niche not found</div>
  }

  // Get real issues for this niche
  const nicheIssues = getIssuesByNiche('fire-extinguisher-services')
  
  // Transform issues for IssuesGrid component
  const fireExtinguisherIssues = nicheIssues.map((issue) => ({
    niche: 'Fire Extinguisher',
    title: issue.title,
    snippet: issue.snippet,
    slug: issue.slug,
    city: issue.cities[0], // Use first city
  }))

  // Mock data for fire extinguisher resources
  const fireExtinguisherResources = [
    {
      title: 'Fire Extinguisher Inspection Compliance Guide',
      excerpt: 'Understanding Florida Fire Prevention Code requirements for commercial fire extinguisher inspections.',
      city: 'Miami',
      category: 'Compliance & Inspections',
      publishedAt: 'Jan 5, 2025',
      readTime: '8 min read',
      slug: 'fire-extinguisher-inspection-compliance',
      citySlug: 'miami',
    },
    {
      title: 'Emergency Fire Extinguisher Installation',
      excerpt: 'Step-by-step guide for emergency fire extinguisher installation and certification.',
      city: 'Boca Raton',
      category: 'Emergency & After-Hours',
      publishedAt: 'Jan 4, 2025',
      readTime: '7 min read',
      slug: 'emergency-fire-extinguisher-installation',
      citySlug: 'boca-raton',
    },
    {
      title: 'Class K Fire Extinguisher Requirements',
      excerpt: 'Complete guide for commercial kitchen fire extinguisher requirements and NFPA 10 compliance.',
      city: 'Fort Lauderdale',
      category: 'Compliance & Inspections',
      publishedAt: 'Jan 3, 2025',
      readTime: '6 min read',
      slug: 'class-k-fire-extinguisher-kitchen-requirements',
      citySlug: 'fort-lauderdale',
    },
    {
      title: 'Fire Extinguisher Training Guide',
      excerpt: 'Employee training on proper fire extinguisher use and the PASS method.',
      city: 'Miami',
      category: 'Planning & ROI',
      publishedAt: 'Jan 2, 2025',
      readTime: '5 min read',
      slug: 'fire-extinguisher-training-guide',
      citySlug: 'miami',
    },
    {
      title: 'Fire Extinguisher Cost Reduction Strategies',
      excerpt: 'Ways to reduce fire safety compliance costs through preventive contracts and efficient scheduling.',
      city: 'Boca Raton',
      category: 'Cost Guides',
      publishedAt: 'Jan 1, 2025',
      readTime: '6 min read',
      slug: 'fire-extinguisher-cost-reduction-strategies',
      citySlug: 'boca-raton',
    },
    {
      title: 'Fire Extinguisher Troubleshooting Guide',
      excerpt: 'Common fire extinguisher problems and when to call for professional repair.',
      city: 'Fort Lauderdale',
      category: 'Maintenance & Repairs',
      publishedAt: 'Dec 31, 2024',
      readTime: '7 min read',
      slug: 'fire-extinguisher-troubleshooting-repair',
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
            name: 'Fire Extinguisher Services',
            serviceType: 'Fire Extinguisher Services',
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
            url: 'https://localbizzlist.com/niches/fire-extinguisher-services/',
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
                name: 'Fire Extinguisher Services',
                item: 'https://localbizzlist.com/niches/fire-extinguisher-services/',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-int py-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fire Extinguisher Services in South Florida
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {niche.description} Available in Miami, Fort Lauderdale, and Boca Raton.
          </p>
          <Link
            href="/pricing/instant-quote/fire-extinguisher-services?src=niche_fire-extinguisher-services"
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
            Find certified Fire Extinguisher Services providers in your city.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}/fire-extinguisher/`}
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
              Common Fire Extinguisher Issues
            </h2>
            <p className="text-neutral-600">
              Expert solutions for your toughest fire safety challenges
            </p>
          </div>
          
          <IssuesGrid issues={fireExtinguisherIssues} />
        </div>
      </section>

      {/* Resources */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Resources & Guides
          </h2>
          <p className="text-neutral-600">
            Expert advice on fire extinguisher compliance, maintenance, and cost management.
          </p>
        </div>
        
        <LatestGuides guides={fireExtinguisherResources} />
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-fg mb-2">
              Need fire extinguisher inspection?
            </h2>
            <p className="text-primary-fg/90 text-base">
              Get an instant quote for Florida Fire Code compliance.
            </p>
          </div>

          <Link
            href="/pricing/instant-quote/fire-extinguisher-services?src=niche_fire-extinguisher-services_footer"
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
