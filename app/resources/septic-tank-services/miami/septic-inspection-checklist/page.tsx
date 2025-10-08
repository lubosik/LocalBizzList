import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: "Septic Inspection Checklist — What Inspectors Look For (Miami)",
  description: "Complete septic inspection checklist for Miami properties. Learn what inspectors look for and how to prepare your system for inspection.",
  keywords: ["septic inspection Miami", "septic inspection checklist Miami", "Miami-Dade septic inspection", "septic system inspection Miami"],
  category: "compliance-inspections",
  city: "Miami",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "10 min",
  h1: "Septic Inspection Checklist — What Inspectors Look For (Miami)",
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-inspection-checklist"
}

export default function MiamiSepticInspectionChecklist() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
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

        {/* Article Header */}
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
                Miami-Dade County septic inspections require specific preparation and knowledge of local regulations. 
                This checklist helps you understand what inspectors look for and how to prepare your system.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Professional Septic Inspection?</h3>
                <p className="text-blue-800 mb-4">Get certified septic inspection service in Miami with licensed professionals.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_septic-inspection-checklist_mid" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Miami Inspection Requirements</h2>
              <p className="mb-4">Miami-Dade County has specific requirements for septic system inspections.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Inspection Checklist</h2>
              <p className="mb-4">Prepare your septic system for inspection with this comprehensive checklist.</p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready for Septic Inspection?</h3>
                <p className="text-blue-800 mb-6 text-lg">Get professional septic inspection service in Miami with certified inspectors.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_septic-inspection-checklist_end" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
