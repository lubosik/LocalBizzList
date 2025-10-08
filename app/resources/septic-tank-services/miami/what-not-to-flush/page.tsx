import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: "What Not to Flush: Grease, Chemicals & Additives — Miami",
  description: "Complete guide to what not to flush in Miami septic systems. Learn about grease, chemicals, and additives that can damage your septic system.",
  keywords: ["what not to flush Miami", "septic system maintenance Miami", "septic additives Miami", "Miami septic care"],
  category: "maintenance-repairs",
  city: "Miami",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "7 min",
  h1: "What Not to Flush: Grease, Chemicals & Additives — Miami",
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/what-not-to-flush"
}

export default function MiamiWhatNotToFlush() {
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
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">Maintenance & Repairs</span>
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
                Miami's warm climate and high humidity can accelerate septic system problems when harmful substances 
                are flushed. Understanding what not to flush can extend your system's life and prevent costly repairs.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Need Septic System Maintenance?</h3>
                <p className="text-orange-800 mb-4">Get professional septic maintenance service in Miami to keep your system healthy.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_what-not-to-flush_mid" className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Harmful Substances</h2>
              <p className="mb-4">Common items that can damage Miami septic systems and cause failures.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Safe Alternatives</h2>
              <p className="mb-4">Better alternatives for common household items that shouldn't go down the drain.</p>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Keep Your Septic System Healthy</h3>
                <p className="text-orange-800 mb-6 text-lg">Get professional septic maintenance service in Miami with expert care.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_what-not-to-flush_end" className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
