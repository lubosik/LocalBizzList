import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, TrendingUp } from 'lucide-react'

export const metadata = {
  title: "Septic vs Sewer Conversion: Pros, Cons & Costs — Miami",
  description: "Complete guide to septic vs sewer conversion in Miami. Learn about costs, benefits, and Miami-Dade County requirements for conversion.",
  keywords: ["septic vs sewer Miami", "sewer conversion Miami", "Miami septic conversion", "septic to sewer Miami"],
  category: "planning-roi",
  city: "Miami",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "10 min",
  h1: "Septic vs Sewer Conversion: Pros, Cons & Costs — Miami",
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-vs-sewer-conversion"
}

export default function MiamiSepticVsSewerConversion() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 py-3">
              <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/resources" className="text-gray-500 hover:text-gray-700">Resources</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/services/septic-tank-services" className="text-gray-500 hover:text-gray-700">Septic Tank Services</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/locations/miami" className="text-gray-500 hover:text-gray-700">Miami</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{metadata.h1}</li>
            </ol>
          </div>
        </nav>

        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">Planning & ROI</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Miami</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{metadata.h1}</h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{metadata.readTime}</span></div>
              <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>{metadata.city}</span></div>
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{new Date(metadata.publishedAt).toLocaleDateString()}</span></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Converting from septic to sewer in Miami involves significant costs and considerations. 
                Understanding the pros, cons, and Miami-Dade County requirements helps make informed decisions.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Need Conversion Consultation?</h3>
                <p className="text-purple-800 mb-4">Get expert advice on septic vs sewer conversion in Miami with licensed professionals.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_septic-vs-sewer-conversion_mid" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conversion Costs</h2>
              <p className="mb-4">Understanding the full cost of converting from septic to sewer in Miami.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
              <p className="mb-4">Weighing the benefits and drawbacks of septic vs sewer systems in Miami.</p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Ready to Explore Conversion?</h3>
                <p className="text-purple-800 mb-6 text-lg">Get professional consultation on septic vs sewer conversion in Miami.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_septic-vs-sewer-conversion_end" className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
