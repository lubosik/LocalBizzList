'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Globe, CheckCircle2 } from 'lucide-react'
import type { Business } from 'contentlayer/generated'

interface BusinessCardProps {
  business: Business
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <article className="card">
      <Link href={business.url} className="block">
        {business.logo && (
          <div className="relative h-32 w-full bg-neutral-50 flex items-center justify-center border-b border-neutral-100">
            <Image
              src={business.logo}
              alt={`${business.name} logo`}
              width={120}
              height={80}
              className="object-contain"
            />
          </div>
        )}

        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold text-neutral-800 leading-tight hover:text-primary transition-colors">
              {business.name}
            </h3>
            {business.verified && (
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" aria-label="Verified" />
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="category-tag">
              {business.category}
            </span>
          </div>

          <p className="text-sm text-neutral-600 leading-6 line-clamp-2">
            {business.description}
          </p>

          <div className="space-y-2 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="line-clamp-1">{business.city}, {business.state}</span>
            </div>

            {business.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="hover:text-primary transition-colors">
                  {business.phone}
                </span>
              </div>
            )}

            {business.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <span className="hover:text-primary transition-colors truncate">
                  Visit Website
                </span>
              </div>
            )}
          </div>

          {business.services && business.services.length > 0 && (
            <div className="mt-2">
              <p className="text-xs font-semibold text-neutral-700 mb-1">Services:</p>
              <p className="text-xs text-neutral-600 line-clamp-2">
                {business.services.slice(0, 3).join(', ')}
                {business.services.length > 3 && '...'}
              </p>
            </div>
          )}

          <div className="mt-auto pt-2">
            <span className="text-sm font-semibold text-primary hover:text-primary-int transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}