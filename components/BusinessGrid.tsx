import type { Business } from 'contentlayer/generated'
import BusinessCard from './BusinessCard'

interface BusinessGridProps {
  businesses: Business[]
}

export default function BusinessGrid({ businesses }: BusinessGridProps) {
  if (businesses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600">No businesses found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map((business) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  )
}