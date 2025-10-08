import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, Wrench } from 'lucide-react'

export const metadata = {
  title: "Drain Field Problems & Early Warning Signs — Miami",
  description: "Learn about drain field problems and early warning signs in Miami. Understand Miami-specific soil conditions and when to call for professional repair.",
  keywords: ["drain field problems Miami", "septic drain field Miami", "drain field repair Miami", "Miami septic drain field"],
  category: "maintenance-repairs",
  city: "Miami",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "9 min",
  h1: "Drain Field Problems & Early Warning Signs — Miami",
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/drain-field-problems-warning-signs"
}

export default function MiamiDrainFieldProblemsWarningSigns() {
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
                Miami's high water table and clay soil create unique challenges for drain fields. 
                Recognizing early warning signs can prevent costly repairs and system failures.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Need Drain Field Repair?</h3>
                <p className="text-orange-800 mb-4">Get professional drain field repair service in Miami with licensed technicians.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_drain-field-problems-warning-signs_mid" className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Miami Drain Field Challenges</h2>
              <p className="mb-4">Understanding Miami's unique soil and water conditions affecting drain fields.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Early Warning Signs</h2>
              <p className="mb-4">Recognize the first signs of drain field problems before they become serious.</p>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Experiencing Drain Field Issues?</h3>
                <p className="text-orange-800 mb-6 text-lg">Get professional drain field repair service in Miami with expert diagnosis.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_drain-field-problems-warning-signs_end" className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
