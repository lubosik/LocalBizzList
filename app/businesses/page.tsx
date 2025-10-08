import Hero from '@/components/Hero'

// Empty businesses array - will be populated with real hood cleaning vendors
const businesses: any[] = []

export const metadata = {
  title: 'Business Directory - LocalBizzList',
  description: 'Browse verified local businesses and service providers in South Florida.',
}

export default function BusinessesPage() {
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

        {businesses.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-neutral-400">🏢</span>
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">
              No businesses yet
            </h3>
            <p className="text-neutral-600 mb-6 max-w-md mx-auto">
              We're building our directory of verified hood cleaning and commercial service providers. 
              Check back soon for local businesses in your area.
            </p>
            <a 
              href="/businesses/add" 
              className="btn-primary px-6 py-3"
            >
              Add Your Business
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business) => (
              <div key={business.slug} className="card p-6">
                <div className="flex items-start gap-4 mb-4">
                  {business.logo && (
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <img
                        src={business.logo}
                        alt={`${business.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-800 mb-1">
                      {business.name}
                    </h3>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                      {business.category}
                    </span>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">{business.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    {business.city}, {business.state}
                  </span>
                  <a
                    href={`/businesses/${business.slug}`}
                    className="text-primary hover:text-primary-int font-semibold"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}