import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Clock, MapPin, Calendar } from 'lucide-react'

export const metadata = {
  title: "NFPA 96 Hood Cleaning Checklist for Fort Lauderdale Restaurants",
  description: "Complete NFPA 96 hood cleaning checklist for Fort Lauderdale restaurants. Ensure fire safety compliance with Broward County requirements and avoid costly violations.",
  keywords: ["NFPA 96 hood cleaning checklist Fort Lauderdale", "restaurant hood cleaning Fort Lauderdale", "commercial kitchen fire safety", "Broward County fire code compliance"],
  category: "compliance-inspections",
  city: "Fort Lauderdale",
  thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "11 min",
  h1: "NFPA 96 Hood Cleaning Checklist for Fort Lauderdale Restaurants",
  canonical: "https://local-bizz-list.vercel.app/blog/nfpa-96-hood-cleaning-checklist-fort-lauderdale"
}

export default function NFPA96HoodCleaningChecklistFortLauderdale() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          NFPA 96 Hood Cleaning Checklist for Fort Lauderdale Restaurants
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Fort Lauderdale's diverse restaurant scene requires strict adherence to NFPA 96 fire safety standards. 
            With over 2,500 restaurants in Broward County, fire inspectors are vigilant about compliance violations 
            that can result in immediate closure orders and fines up to $5,000.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Ensure NFPA 96 Compliance?</h3>
            <p className="text-blue-800 mb-6 text-lg">
              Get professional hood cleaning service in Fort Lauderdale with certified technicians and guaranteed compliance documentation.
            </p>
            <Link 
              href="/pricing/instant-quote?src=hood_fort-lauderdale_nfpa-96-hood-cleaning-checklist-fort-lauderdale_end"
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