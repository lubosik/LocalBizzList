import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: "Emergency Septic Backups: First-Hour Actions — Miami",
  description: "Emergency septic backup response guide for Miami. Learn immediate actions to take and when to call professionals for septic emergencies.",
  keywords: ["emergency septic backup Miami", "septic emergency Miami", "septic backup repair Miami", "Miami septic emergency"],
  category: "emergency-after-hours",
  city: "Miami",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "6 min",
  h1: "Emergency Septic Backups: First-Hour Actions — Miami",
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/emergency-septic-backups"
}

export default function MiamiEmergencySepticBackups() {
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
              <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">Emergency & After Hours</span>
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
                Septic backups in Miami can be especially problematic due to high water tables and frequent flooding. 
                Knowing the right immediate actions can prevent property damage and health hazards.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Septic Service Available</h3>
                <p className="text-red-800 mb-4">24/7 emergency septic service in Miami for immediate response to backups.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_emergency-septic-backups_mid" className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Get Emergency Service</Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Immediate Actions</h2>
              <p className="mb-4">Critical first steps when experiencing a septic backup in Miami.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Precautions</h2>
              <p className="mb-4">Important safety measures to protect your family and property.</p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Need Emergency Septic Service?</h3>
                <p className="text-red-800 mb-6 text-lg">Get immediate emergency septic service in Miami with 24/7 availability.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_emergency-septic-backups_end" className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Get Emergency Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
