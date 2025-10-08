import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, FileText } from 'lucide-react'

export const metadata = {
  title: "Permits & Local Rules for Septic Work — Miami",
  description: "Complete guide to permits and local rules for septic work in Miami. Learn about Miami-Dade County requirements and compliance.",
  keywords: ["septic permits Miami", "Miami-Dade septic permits", "septic work permits Miami", "Miami septic regulations"],
  category: "compliance-inspections",
  city: "Miami",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "8 min",
  h1: "Permits & Local Rules for Septic Work — Miami",
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/permits-local-rules"
}

export default function MiamiPermitsLocalRules() {
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
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Compliance & Inspections</span>
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
                Miami-Dade County has specific permit requirements and regulations for septic system work. 
                Understanding these requirements ensures compliance and avoids costly violations.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Permit Assistance?</h3>
                <p className="text-blue-800 mb-4">Get help with septic permits and compliance in Miami with licensed professionals.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_permits-local-rules_mid" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Miami-Dade Permit Requirements</h2>
              <p className="mb-4">Understanding the specific permit requirements for septic work in Miami-Dade County.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Regulations</h2>
              <p className="mb-4">Key regulations and compliance requirements for septic systems in Miami.</p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Help with Permits?</h3>
                <p className="text-blue-800 mb-6 text-lg">Get assistance with septic permits and compliance in Miami.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_permits-local-rules_end" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
