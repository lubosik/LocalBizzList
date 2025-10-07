import Hero from '@/components/Hero'

// Mock business data - replace with real data source
const mockBusinesses = [
  {
    slug: 'elite-realty-group',
    name: 'Elite Realty Group',
    description: 'Premier luxury real estate services in South Florida',
    category: 'Real Estate',
    city: 'Miami',
    state: 'FL',
    phone: '(305) 555-0123',
    website: 'https://eliterealtygroup.com',
    services: ['Luxury Home Sales', 'Property Management', 'Investment Consulting'],
    logo: '/images/businesses/elite-realty-group.jpg',
    verified: true,
    featured: true,
  },
  {
    slug: 'prestige-wealth-advisors',
    name: 'Prestige Wealth Advisors',
    description: 'Comprehensive wealth management and financial planning services',
    category: 'Financial Services',
    city: 'Boca Raton',
    state: 'FL',
    phone: '(561) 555-0456',
    website: 'https://prestigewealthadvisors.com',
    services: ['Investment Management', 'Estate Planning', 'Tax Optimization'],
    logo: '/images/businesses/prestige-wealth-advisors.jpg',
    verified: true,
    featured: true,
  },
]

export const metadata = {
  title: 'Business Directory - LocalBizzList',
  description: 'Browse verified local businesses and service providers in South Florida.',
}

export default function BusinessesPage() {
  const businesses = mockBusinesses.sort((a, b) =>
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
      </section>
    </>
  )
}