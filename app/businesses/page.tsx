import { allBusinesses } from 'contentlayer/generated'
import Hero from '@/components/Hero'
import BusinessGrid from '@/components/BusinessGrid'

export const metadata = {
  title: 'Business Directory - LocalBizzList',
  description: 'Browse verified local businesses and service providers in South Florida.',
}

export default function BusinessesPage() {
  const businesses = allBusinesses.sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  return (
    <>
      <Hero
        title="South Florida Business Directory"
        description="Find verified local businesses and service providers. Browse by category, location, or search for specific services."
        showSearch={true}
        searchPlaceholder="Search businesses or services..."
      />

      <section className="container py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">
            All Businesses ({businesses.length})
          </h2>
          <p className="text-neutral-600">
            Verified local service providers in South Florida
          </p>
        </div>

        <BusinessGrid businesses={businesses} />
      </section>
    </>
  )
}