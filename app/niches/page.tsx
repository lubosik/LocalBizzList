import { Metadata } from 'next'
import NicheGrid from '@/components/home/NicheGrid'
import { getAllNiches } from '@/lib/data/niches'

export const metadata: Metadata = {
  title: 'Commercial Service Niches - LocalBizzList',
  description: 'Explore our 6 service niches: restaurant hood cleaning, grease trap, septic tank, sealcoating, fire extinguishers, and sprinkler repair across South Florida.',
  keywords: [
    'commercial services South Florida',
    'restaurant services Miami',
    'facility maintenance',
    'NFPA compliance services',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com/niches/',
    siteName: 'LocalBizzList',
    title: 'Commercial Service Niches - LocalBizzList',
    description: 'Explore our 6 service niches across South Florida: hood cleaning, grease trap, septic, sealcoating, fire extinguishers, sprinkler repair.',
  },
}

export default function NichesPage() {
  const niches = getAllNiches()

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Commercial Service Niches',
            url: 'https://localbizzlist.com/niches/',
            description: 'Directory of commercial service niches including hood cleaning, grease trap, septic, sealcoating, fire extinguishers, and sprinkler repair.',
            mainEntity: niches.map(niche => ({
              '@type': 'Service',
              name: niche.title,
              url: `https://localbizzlist.com${niche.nicheHubHref}`,
              description: niche.description,
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-int py-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our Service Niches
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            LocalBizzList connects you with certified experts across 6 essential commercial service categories. 
            Browse by niche to find vetted providers in Miami, Fort Lauderdale, and Boca Raton.
          </p>
          <p className="text-lg text-white/80">
            Need help choosing the right service? Call us for a free consultation at{' '}
            <a href="tel:+19545554663" className="font-semibold hover:underline">
              (954) 555-HOOD
            </a>
          </p>
        </div>
      </section>

      {/* Niche Grid */}
      <NicheGrid niches={niches} />
    </>
  )
}
