import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Clock, MapPin, Calendar } from 'lucide-react'

export const metadata = {
  title: "Hood Cleaning Frequency Requirements in Miami",
  description: "Understanding hood cleaning frequency requirements for Miami restaurants. NFPA 96 compliance and Miami-Dade County regulations.",
  keywords: ["hood cleaning frequency Miami", "NFPA 96 compliance Miami", "restaurant hood cleaning schedule", "Miami-Dade fire code"],
  category: "compliance-inspections",
  city: "Miami",
  thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "9 min",
  h1: "Hood Cleaning Frequency Requirements in Miami",
  canonical: "https://local-bizz-list.vercel.app/blog/hood-cleaning-frequency-requirements-miami"
}

export default function HoodCleaningFrequencyRequirementsMiami() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hood Cleaning Frequency Requirements in Miami
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            The National Fire Protection Association (NFPA) 96 standard establishes minimum cleaning frequencies 
            for commercial kitchen exhaust systems. In Miami's high-volume restaurant environment, these requirements 
            are strictly enforced by Miami-Dade County Fire Rescue. This guide covers{' '}
            <Link href="/blog/nfpa-96-compliance-checklist-miami" className="text-brand-600 hover:text-brand-700 underline">
              NFPA 96 compliance checklists
            </Link> and{' '}
            <Link href="/niches/restaurant-hood-cleaning" className="text-brand-600 hover:text-brand-700 underline">
              professional hood cleaning services
            </Link> available in Miami.
          </p>

          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center"
            alt="Miami restaurant hood cleaning frequency requirements and schedules"
            width={800}
            height={600}
            className="rounded-lg shadow-lg mb-8"
            loading="lazy"
          />

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Schedule Professional Hood Cleaning?</h3>
            <p className="text-blue-800 mb-6 text-lg">
              Get NFPA 96 compliant hood cleaning service in Miami with certified technicians and guaranteed documentation.
            </p>
            <Link 
              href="/pricing/instant-quote?src=hood_miami_hood-cleaning-frequency-requirements-miami_end"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}