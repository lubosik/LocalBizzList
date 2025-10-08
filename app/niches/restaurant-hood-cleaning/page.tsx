import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator } from 'lucide-react'
import IssuesGrid from '@/components/home/IssuesGrid'
import LatestGuides from '@/components/home/LatestGuides'
import { getNicheBySlug } from '@/lib/data/niches'
import { getAllCities } from '@/lib/data/cities'
import { getIssuesByNiche } from '@/lib/data/issues'

export const metadata: Metadata = {
  title: 'Restaurant Hood Cleaning Services - South Florida | LocalBizzList',
  description: 'NFPA 96 compliant hood cleaning services in Miami, Boca Raton, and Fort Lauderdale. Same-day service, certified technicians, instant quotes available.',
  keywords: [
    'restaurant hood cleaning South Florida',
    'NFPA 96 compliance',
    'commercial kitchen cleaning Miami',
    'hood cleaning Fort Lauderdale',
    'exhaust system cleaning Boca Raton',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com/niches/restaurant-hood-cleaning/',
    siteName: 'LocalBizzList',
    title: 'Restaurant Hood Cleaning Services - South Florida',
    description: 'NFPA 96 compliant hood cleaning in Miami, Boca Raton, Fort Lauderdale. Same-day service available.',
  },
}

export default function RestaurantHoodCleaningPage() {
  const niche = getNicheBySlug('restaurant-hood-cleaning')
  const cities = getAllCities()

  if (!niche) {
    return <div>Niche not found</div>
  }

  // Get real issues for this niche
  const nicheIssues = getIssuesByNiche('restaurant-hood-cleaning')
  
  // Transform issues for IssuesGrid component
  const hoodCleaningIssues = nicheIssues.map((issue) => ({
    niche: 'Hood Cleaning',
    title: issue.title,
    snippet: issue.snippet,
    slug: issue.slug,
    city: issue.cities[0], // Use first city
  }))

  // Mock data for hood cleaning resources
  const hoodCleaningResources = [
    {
      title: '30-Point NFPA 96 Compliance Checklist for Miami Restaurants',
      excerpt: 'Complete checklist for NFPA 96 compliance including inspection requirements, cleaning schedules, and certification procedures.',
      city: 'Miami',
      category: 'Compliance & Inspections',
      publishedAt: 'Jan 5, 2025',
      readTime: '8 min read',
      slug: 'nfpa-96-hood-cleaning-checklist',
      citySlug: 'miami',
    },
    {
      title: 'Hood Cleaning Frequency by Restaurant Type in Boca Raton',
      excerpt: 'Understanding NFPA 96 requirements for different cooking volumes and grease production levels.',
      city: 'Boca Raton',
      category: 'Compliance & Inspections',
      publishedAt: 'Jan 4, 2025',
      readTime: '6 min read',
      slug: 'hood-cleaning-frequency-by-restaurant-type',
      citySlug: 'boca-raton',
    },
    {
      title: 'Kitchen Exhaust Fan Problems & Quick Fixes',
      excerpt: 'Common exhaust fan issues, troubleshooting steps, and when to call for professional repair.',
      city: 'Fort Lauderdale',
      category: 'Maintenance & Repairs',
      publishedAt: 'Jan 3, 2025',
      readTime: '10 min read',
      slug: 'exhaust-fan-problems-and-fixes',
      citySlug: 'fort-lauderdale',
    },
    {
      title: 'NFPA 96 Hood Cleaning Checklist for Fort Lauderdale',
      excerpt: 'Complete compliance checklist for Fort Lauderdale restaurants including local regulations.',
      city: 'Fort Lauderdale',
      category: 'Compliance & Inspections',
      publishedAt: 'Jan 2, 2025',
      readTime: '8 min read',
      slug: 'nfpa-96-hood-cleaning-checklist',
      citySlug: 'fort-lauderdale',
    },
    {
      title: 'Hood Cleaning Frequency Requirements in Miami',
      excerpt: 'Miami-Dade County specific requirements for hood cleaning schedules and documentation.',
      city: 'Miami',
      category: 'Compliance & Inspections',
      publishedAt: 'Jan 1, 2025',
      readTime: '6 min read',
      slug: 'hood-cleaning-frequency-by-restaurant-type',
      citySlug: 'miami',
    },
    {
      title: 'Exhaust Fan Problems & Coastal Climate Considerations',
      excerpt: 'How South Florida\'s coastal climate affects exhaust fan performance and maintenance needs.',
      city: 'Boca Raton',
      category: 'Maintenance & Repairs',
      publishedAt: 'Dec 31, 2024',
      readTime: '10 min read',
      slug: 'exhaust-fan-problems-and-fixes',
      citySlug: 'boca-raton',
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
            name: 'Restaurant Hood Cleaning Services',
            serviceType: 'Restaurant Hood Cleaning',
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
            url: 'https://localbizzlist.com/niches/restaurant-hood-cleaning/',
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
                name: 'Restaurant Hood Cleaning',
                item: 'https://localbizzlist.com/niches/restaurant-hood-cleaning/',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-int py-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Restaurant Hood Cleaning Services in South Florida
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {niche.description} Available in Miami, Fort Lauderdale, and Boca Raton.
          </p>
          <Link
            href="/pricing/instant-quote/restaurant-hood-cleaning?src=niche_restaurant-hood-cleaning"
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
            Find certified Restaurant Hood Cleaning providers in your city.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}/hood-cleaning/`}
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
              Common Restaurant Hood Cleaning Issues
            </h2>
            <p className="text-neutral-600">
              Expert solutions for your toughest hood cleaning challenges
            </p>
          </div>
          
          <IssuesGrid issues={hoodCleaningIssues} />
        </div>
      </section>

      {/* Resources */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Resources & Guides
          </h2>
          <p className="text-neutral-600">
            Expert advice on hood cleaning compliance, maintenance, and cost management.
          </p>
        </div>
        
        <LatestGuides guides={hoodCleaningResources} />
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-fg mb-2">
              Need same-day hood cleaning service?
            </h2>
            <p className="text-primary-fg/90 text-base">
              Get an instant quote for NFPA 96 certified hood cleaning.
            </p>
          </div>

          <Link
            href="/pricing/instant-quote/restaurant-hood-cleaning?src=niche_restaurant-hood-cleaning_footer"
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
