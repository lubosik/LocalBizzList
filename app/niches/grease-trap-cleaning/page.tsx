import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator } from 'lucide-react'
import IssuesGrid from '@/components/home/IssuesGrid'
import LatestGuides from '@/components/home/LatestGuides'
import { getNicheBySlug } from '@/lib/data/niches'
import { getAllCities } from '@/lib/data/cities'
import { getIssuesByNiche } from '@/lib/data/issues'

export const metadata: Metadata = {
  title: 'Grease Trap Cleaning Services - South Florida | LocalBizzList',
  description: 'Commercial grease trap pumping, maintenance, and compliance services in Miami, Boca Raton, and Fort Lauderdale. Emergency service available.',
  keywords: [
    'grease trap cleaning South Florida',
    'grease trap pumping Miami',
    'commercial grease trap Boca Raton',
    'grease trap maintenance Fort Lauderdale',
    'EPA compliance grease trap',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com/niches/grease-trap-cleaning/',
    siteName: 'LocalBizzList',
    title: 'Grease Trap Cleaning Services - South Florida',
    description: 'Commercial grease trap pumping and maintenance in Miami, Boca Raton, Fort Lauderdale. Emergency service available.',
  },
}

export default function GreaseTrapCleaningPage() {
  const niche = getNicheBySlug('grease-trap-cleaning')
  const cities = getAllCities()

  if (!niche) {
    return <div>Niche not found</div>
  }

  // Get real issues for this niche
  const nicheIssues = getIssuesByNiche('grease-trap-cleaning')
  
  // Transform issues for IssuesGrid component
  const greaseTrapIssues = nicheIssues.map((issue) => ({
    niche: 'Grease Trap',
    title: issue.title,
    snippet: issue.snippet,
    slug: issue.slug,
    city: issue.cities[0], // Use first city
  }))

  // Mock data for grease trap resources
  const greaseTrapResources = [
    {
      title: 'Grease Trap Pumping Frequency Guide for Miami Restaurants',
      excerpt: 'Understanding EPA guidelines for grease trap pumping schedules based on kitchen volume and usage.',
      city: 'Miami',
      category: 'Maintenance & Repairs',
      publishedAt: 'Jan 5, 2025',
      readTime: '6 min read',
      slug: 'grease-trap-pumping-frequency-guide',
      citySlug: 'miami',
    },
    {
      title: 'Emergency Grease Trap Overflow Solutions',
      excerpt: 'Step-by-step guide for handling grease trap emergencies and preventing health code violations.',
      city: 'Boca Raton',
      category: 'Emergency & After-Hours',
      publishedAt: 'Jan 4, 2025',
      readTime: '8 min read',
      slug: 'grease-trap-overflow-emergency-pumping',
      citySlug: 'boca-raton',
    },
    {
      title: 'Grease Trap Odor Control Methods',
      excerpt: 'Effective strategies for eliminating foul odors from grease trap areas between cleanings.',
      city: 'Fort Lauderdale',
      category: 'Maintenance & Repairs',
      publishedAt: 'Jan 3, 2025',
      readTime: '5 min read',
      slug: 'eliminate-grease-trap-odors',
      citySlug: 'fort-lauderdale',
    },
    {
      title: 'Grease Trap Sizing Calculations',
      excerpt: 'How to determine the correct grease trap size for your commercial kitchen volume.',
      city: 'Miami',
      category: 'Planning & ROI',
      publishedAt: 'Jan 2, 2025',
      readTime: '7 min read',
      slug: 'grease-trap-sizing-upgrade-guide',
      citySlug: 'miami',
    },
    {
      title: 'Grease Trap Cost Reduction Strategies',
      excerpt: 'Ways to reduce grease trap maintenance costs through preventive contracts and efficient scheduling.',
      city: 'Boca Raton',
      category: 'Cost Guides',
      publishedAt: 'Jan 1, 2025',
      readTime: '6 min read',
      slug: 'grease-trap-cost-reduction-strategies',
      citySlug: 'boca-raton',
    },
    {
      title: 'Grease Trap Compliance Requirements',
      excerpt: 'Understanding local regulations and inspection requirements for grease trap maintenance.',
      city: 'Fort Lauderdale',
      category: 'Compliance & Inspections',
      publishedAt: 'Dec 31, 2024',
      readTime: '8 min read',
      slug: 'grease-trap-inspection-compliance',
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
            name: 'Grease Trap Cleaning Services',
            serviceType: 'Grease Trap Cleaning',
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
            url: 'https://localbizzlist.com/niches/grease-trap-cleaning/',
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
                name: 'Grease Trap Cleaning',
                item: 'https://localbizzlist.com/niches/grease-trap-cleaning/',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-int py-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Grease Trap Cleaning Services in South Florida
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {niche.description} Available in Miami, Fort Lauderdale, and Boca Raton.
          </p>
          <Link
            href="/pricing/instant-quote/grease-trap-cleaning?src=niche_grease-trap-cleaning"
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
            Find certified Grease Trap Cleaning providers in your city.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}/grease-trap-cleaning/`}
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
              Common Grease Trap Issues
            </h2>
            <p className="text-neutral-600">
              Expert solutions for your toughest grease trap challenges
            </p>
          </div>
          
          <IssuesGrid issues={greaseTrapIssues} />
        </div>
      </section>

      {/* Resources */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Resources & Guides
          </h2>
          <p className="text-neutral-600">
            Expert advice on grease trap maintenance, compliance, and cost management.
          </p>
        </div>
        
        <LatestGuides guides={greaseTrapResources} />
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-fg mb-2">
              Need emergency grease trap pumping?
            </h2>
            <p className="text-primary-fg/90 text-base">
              Get an instant quote for same-day grease trap service.
            </p>
          </div>

          <Link
            href="/pricing/instant-quote/grease-trap-cleaning?src=niche_grease-trap-cleaning_footer"
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
