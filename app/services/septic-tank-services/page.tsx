import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, CheckCircle, AlertTriangle, DollarSign } from 'lucide-react'

export const metadata = {
  title: "Septic Tank Services - Professional Installation, Pumping & Repair",
  description: "Complete septic tank services including installation, pumping, repair, and maintenance. Licensed professionals serving Miami, Boca Raton, and Fort Lauderdale.",
  keywords: ["septic tank services", "septic pumping", "septic repair", "septic installation", "drain field repair"],
  canonical: "https://local-bizz-list.vercel.app/services/septic-tank-services"
}

export default function SepticTankServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Septic Tank Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Complete septic system installation, pumping, repair, and maintenance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing/instant-quote?src=septic_services_hero"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Get Instant Quote
              </Link>
              <Link 
                href="/niches/septic-tank-services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Septic Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to emergency repairs, we provide comprehensive septic tank services 
              to keep your system running smoothly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Septic Pumping</h3>
              <p className="text-gray-600">Regular pumping to prevent backups and maintain system efficiency.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Repairs</h3>
              <p className="text-gray-600">24/7 emergency service for septic backups and system failures.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation</h3>
              <p className="text-gray-600">New septic system installation with proper permits and inspections.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
              <p className="text-gray-600">Scheduled maintenance to extend system life and prevent issues.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600">
              We provide septic services throughout South Florida
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/locations/miami/septic-services" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-transparent group-hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Miami</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional septic services for Miami-Dade County including pumping, repairs, and installations.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More →
                </span>
              </div>
            </Link>
            
            <Link href="/locations/boca-raton/septic-services" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-transparent group-hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Boca Raton</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Coastal septic solutions for Boca Raton with specialized knowledge of salt air effects.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More →
                </span>
              </div>
            </Link>
            
            <Link href="/locations/fort-lauderdale/septic-services" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-transparent group-hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Fort Lauderdale</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive septic services for Broward County including emergency repairs and maintenance.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Septic Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get professional septic tank services with licensed technicians and guaranteed work.
          </p>
          <Link 
            href="/pricing/instant-quote?src=septic_services_end"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Get Instant Quote
          </Link>
        </div>
      </div>
    </div>
  )
}