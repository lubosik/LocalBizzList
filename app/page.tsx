import { Metadata } from 'next'
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

export default function HomePage() {
  const niches = getAllNiches()
  const categories = getAllCategories()
  const cities = getAllCities()
  
  // Get top 12 issues from real data
  const topIssues = getHomepageIssues(12)
  
  // Transform issues for IssuesGrid component
  const issues = topIssues.map((issue) => ({
    niche: issue.title.split(' ')[0], // Extract first word as niche name
    title: issue.title,
    snippet: issue.snippet,
    slug: issue.slug,
    city: issue.cities[0], // Use first city
  }))
  
  // Mock data for latest guides - will be replaced with real data from resources
  const mockGuides = [
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
      <LatestGuides guides={mockGuides} />

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