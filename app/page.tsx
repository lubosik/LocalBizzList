import { Metadata } from 'next'
import Link from 'next/link'
import HomeHero from '@/components/home/HomeHero'
import NicheGrid from '@/components/home/NicheGrid'
import CategoryStrip from '@/components/home/CategoryStrip'
import IssuesGrid from '@/components/home/IssuesGrid'
import LatestGuides from '@/components/home/LatestGuides'
import FooterCTA from '@/components/home/FooterCTA'
import { getAllNiches } from '@/lib/data/niches'
import { getAllCategories } from '@/lib/data/categories'
import { getHomepageIssues } from '@/lib/data/issues'
import { getAllCities } from '@/lib/data/cities'

export const metadata: Metadata = {
  title: 'LocalBizzList - South Florida Commercial Services Directory',
  description: 'Find certified experts for hood cleaning, grease trap, septic, and more across Miami, Fort Lauderdale, Boca Raton. Instant quotes, same-day service.',
  keywords: [
    'South Florida commercial services',
    'restaurant hood cleaning Miami',
    'grease trap cleaning',
    'septic tank services',
    'sealcoating Fort Lauderdale',
    'fire extinguisher services Boca Raton',
    'sprinkler repair',
    'NFPA 96 compliance',
    'same-day service',
  ],
  authors: [{ name: 'LocalBizzList' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com',
    siteName: 'LocalBizzList',
    title: 'LocalBizzList - South Florida Commercial Services Directory',
    description: 'Find certified experts for commercial services across Miami, Fort Lauderdale, and Boca Raton. Instant quotes, same-day service, NFPA compliance guaranteed.',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'LocalBizzList - South Florida Commercial Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LocalBizzList - South Florida Commercial Services',
    description: 'Find certified experts for commercial services across Miami, Fort Lauderdale, and Boca Raton.',
    images: ['/images/og-homepage.jpg'],
  },
}

// Helper function to map niche slug to URL path segment
function getNichePathSegment(nicheSlug: string): string {
  const nicheMap: Record<string, string> = {
    'restaurant-hood-cleaning': 'hood-cleaning',
    'grease-trap-cleaning': 'grease-trap',
    'septic-tank-services': 'septic',
    'sealcoating': 'sealcoating',
    'fire-extinguisher-services': 'fire-extinguisher',
    'sprinkler-repair': 'sprinkler',
  }
  return nicheMap[nicheSlug] || nicheSlug
}

export default function HomePage() {
  const niches = getAllNiches()
  const categories = getAllCategories()
  const cities = getAllCities()

  // Get top 12 issues from real data
  const topIssues = getHomepageIssues(12)

  // Get all niche issues to access niche metadata
  const allNicheIssues = require('@/lib/data/issues').getAllNicheIssues()

  // Transform issues for IssuesGrid component
  const issues = topIssues.map((issue) => {
    // Find the niche this issue belongs to
    const nicheData = allNicheIssues.find((n: any) =>
      n.issues.some((i: any) => i.slug === issue.slug)
    )
    
    // Find the specific issue to get comingSoon flag
    const specificIssue = nicheData?.issues.find((i: any) => i.slug === issue.slug)

    return {
      niche: nicheData?.nicheTitle || issue.title.split(' ')[0],
      nicheSlug: nicheData?.niche || '',
      title: issue.title,
      snippet: issue.snippet,
      slug: issue.slug,
      city: issue.cities[0], // Use first city
      comingSoon: specificIssue?.comingSoon || false,
    }
  })
  
  // Real data for latest guides from actual blog articles
  const latestGuides = [
    {
      title: '30-Point NFPA 96 Compliance Checklist for Miami Restaurants',
      excerpt: 'Complete NFPA 96 compliance checklist for Miami restaurants. Ensure fire safety compliance with Miami-Dade County requirements and avoid costly violations.',
      city: 'Miami',
      category: 'Compliance & Inspections',
      publishedAt: 'Oct 6, 2025',
      readTime: '12 min read',
      slug: 'nfpa-96-compliance-checklist-miami',
      citySlug: 'miami',
      url: '/blog/nfpa-96-compliance-checklist-miami',
      thumbnailImage: 'https://images.unsplash.com/photo-1676128923106-1f4bf988f347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGhvb2QlMjBjbGVhbmluZyUyMGNvbW1lcmNpYWx8ZW58MHx8fHwxNzYwMzY0MTM4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Hood Cleaning Frequency by Restaurant Type in Boca Raton',
      excerpt: 'Complete guide to hood cleaning frequency requirements for different restaurant types in Boca Raton. NFPA 96 compliance schedules for fast food, fine dining, and casual restaurants.',
      city: 'Boca Raton',
      category: 'Compliance & Inspections',
      publishedAt: 'Oct 8, 2025',
      readTime: '10 min read',
      slug: 'hood-cleaning-frequency-boca-raton',
      citySlug: 'boca-raton',
      url: '/blog/hood-cleaning-frequency-boca-raton',
      thumbnailImage: 'https://images.unsplash.com/photo-1663490080984-4f9f2c02e96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGhvb2QlMjBjbGVhbmluZyUyMGNvbW1lcmNpYWx8ZW58MHx8fHwxNzYwMzY0MTM4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Kitchen Exhaust Fan Problems & Quick Fixes in Fort Lauderdale',
      excerpt: 'Complete troubleshooting guide for kitchen exhaust fan problems in Fort Lauderdale. Quick fixes for common issues, repair costs, and when to call professionals.',
      city: 'Fort Lauderdale',
      category: 'Maintenance & Repairs',
      publishedAt: 'Oct 10, 2025',
      readTime: '10 min read',
      slug: 'exhaust-fan-problems-fort-lauderdale',
      citySlug: 'fort-lauderdale',
      url: '/blog/exhaust-fan-problems-fort-lauderdale',
      thumbnailImage: 'https://images.unsplash.com/photo-1666479258732-5ea17469b610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGhvb2QlMjBjbGVhbmluZyUyMGNvbW1lcmNpYWx8ZW58MHx8fHwxNzYwMzY0MTM4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'NFPA 96 Hood Cleaning Checklist for Fort Lauderdale',
      excerpt: 'Complete NFPA 96 hood cleaning checklist for Fort Lauderdale restaurants. Ensure fire safety compliance with Broward County requirements and avoid costly violations.',
      city: 'Fort Lauderdale',
      category: 'Compliance & Inspections',
      publishedAt: 'Oct 12, 2025',
      readTime: '11 min read',
      slug: 'nfpa-96-hood-cleaning-checklist-fort-lauderdale',
      citySlug: 'fort-lauderdale',
      url: '/blog/nfpa-96-hood-cleaning-checklist-fort-lauderdale',
      thumbnailImage: 'https://images.unsplash.com/photo-1755937302364-b871cf494a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGhvb2QlMjBjbGVhbmluZyUyMGNvbW1lcmNpYWx8ZW58MHx8fHwxNzYwMzY0MTM4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Hood Cleaning Frequency Requirements in Miami',
      excerpt: 'Understanding hood cleaning frequency requirements for Miami restaurants. NFPA 96 compliance and Miami-Dade County regulations.',
      city: 'Miami',
      category: 'Compliance & Inspections',
      publishedAt: 'Oct 14, 2025',
      readTime: '9 min read',
      slug: 'hood-cleaning-frequency-requirements-miami',
      citySlug: 'miami',
      url: '/blog/hood-cleaning-frequency-requirements-miami',
      thumbnailImage: 'https://images.unsplash.com/photo-1629219222129-8e51c028e95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHw1fHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGhvb2QlMjBjbGVhbmluZyUyMGNvbW1lcmNpYWx8ZW58MHx8fHwxNzYwMzY0MTM4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Exhaust Fan Problems & Coastal Climate Considerations in Boca Raton',
      excerpt: 'Exhaust fan problems and coastal climate considerations for Boca Raton restaurants. Salt air effects and maintenance tips.',
      city: 'Boca Raton',
      category: 'Maintenance & Repairs',
      publishedAt: 'Oct 15, 2025',
      readTime: '7 min read',
      slug: 'exhaust-fan-coastal-considerations-boca-raton',
      citySlug: 'boca-raton',
      url: '/blog/exhaust-fan-coastal-considerations-boca-raton',
      thumbnailImage: 'https://images.unsplash.com/photo-1588990678968-c092c0f54f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHw2fHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGhvb2QlMjBjbGVhbmluZyUyMGNvbW1lcmNpYWx8ZW58MHx8fHwxNzYwMzY0MTM4fDA&ixlib=rb-4.1.0&q=80&w=400',
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
            '@type': 'WebSite',
            name: 'LocalBizzList',
            url: 'https://localbizzlist.com',
            description: 'South Florida directory for commercial services including hood cleaning, grease trap, septic, sealcoating, fire extinguishers, and sprinkler repair.',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://localbizzlist.com/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'LocalBizzList',
            url: 'https://localbizzlist.com',
            logo: 'https://localbizzlist.com/images/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              email: 'info@localbizzlist.com',
              areaServed: ['Miami', 'Fort Lauderdale', 'Boca Raton'],
              availableLanguage: ['en', 'es'],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <HomeHero
        headline="South Florida's Trusted Directory for Commercial Services"
        subcopy="Find certified experts for restaurant hood cleaning, grease trap services, septic maintenance, and more. Instant quotes, same-day service, NFPA compliance guaranteed."
        primaryCTA={{
          text: 'Browse Service Niches',
          href: '/niches/',
        }}
        secondaryCTA={{
          text: 'Get Instant Quote',
          href: '/pricing/instant-quote?src=home_hero',
        }}
      />

      {/* Niche Grid */}
      <NicheGrid niches={niches} />

      {/* Blog Categories Strip */}
      <section className="container py-8">
        <h2 className="text-xl md:text-2xl font-semibold text-brand-ink mb-3">Browse resources by topic</h2>
        <CategoryStrip categories={categories} />
      </section>

      {/* Common Issues We Solve */}
      <IssuesGrid issues={issues} />

      {/* Latest Guides */}
        <LatestGuides guides={latestGuides} />

      {/* Service Areas & Trust Links */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Areas */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Service Areas</h2>
            <p className="text-neutral-600 mb-4">
              We provide certified commercial services across South Florida's major metropolitan areas.
            </p>
            <div className="space-y-2">
              <Link href="/locations/miami/hood-cleaning/" className="block text-primary hover:text-primary-int font-semibold">
                Miami Hood Cleaning Services
              </Link>
              <Link href="/locations/boca-raton/hood-cleaning/" className="block text-primary hover:text-primary-int font-semibold">
                Boca Raton Commercial Services
              </Link>
              <Link href="/locations/fort-lauderdale/hood-cleaning/" className="block text-primary hover:text-primary-int font-semibold">
                Fort Lauderdale Exhaust Cleaning
              </Link>
            </div>
          </div>

          {/* Trust & Resources */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Why Trust LocalBizzList</h2>
            <p className="text-neutral-600 mb-4">
              NFPA 96 certified, fully insured, and committed to same-day service across South Florida.
            </p>
            <div className="space-y-2">
              <Link href="/about/" className="block text-primary hover:text-primary-int font-semibold">
                About Our Company
              </Link>
              <Link href="/services/restaurant-hood-cleaning/" className="block text-primary hover:text-primary-int font-semibold">
                Restaurant Hood Cleaning Services
              </Link>
              <Link href="/resources/" className="block text-primary hover:text-primary-int font-semibold">
                Resource Center & Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Band */}
      <FooterCTA
        headline="Need a Certificate of Performance Tonight?"
        subtext="Get an instant quote for same-day hood cleaning with NFPA 96 certification."
        buttonText="Get Instant Quote"
        buttonHref="/pricing/instant-quote?src=home_footer"
      />
    </>
  )
}