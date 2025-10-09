import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Calendar, CheckCircle, AlertTriangle, DollarSign, Wrench, Droplets, Shield, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: "Septic Tank Services - Professional Installation, Pumping & Repair",
  description: "Complete septic tank services including installation, pumping, repair, and maintenance. Licensed professionals serving Miami, Boca Raton, and Fort Lauderdale.",
  keywords: ["septic tank services", "septic pumping", "septic repair", "septic installation", "drain field repair"],
  openGraph: {
    title: "Septic Tank Services - Professional Installation, Pumping & Repair",
    description: "Complete septic tank services including installation, pumping, repair, and maintenance. Licensed professionals serving Miami, Boca Raton, and Fort Lauderdale.",
    url: "https://local-bizz-list.vercel.app/services/septic-tank-services",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Professional septic tank services"
      }
    ]
  }
};

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
                href="/pricing/instant-quote/septic-tank-services?src=septic_services_hero"
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
              to keep your system running smoothly. Our licensed professionals understand South Florida's 
              unique challenges including high water tables, coastal conditions, and tropical climate factors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Septic Pumping</h3>
              <p className="text-gray-600">Regular pumping every 3-5 years to prevent backups and maintain system efficiency. We handle all waste disposal according to environmental regulations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Repairs</h3>
              <p className="text-gray-600">24/7 emergency service for septic backups and system failures. Quick response times to prevent property damage and health hazards.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation</h3>
              <p className="text-gray-600">New septic system installation with proper permits and inspections. We handle all regulatory requirements and ensure code compliance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
              <p className="text-gray-600">Scheduled maintenance to extend system life and prevent issues. Includes inspections, minor repairs, and system optimization.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond basic septic services, we offer specialized solutions for South Florida's unique conditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Wrench className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Drain Field Repair</h3>
              </div>
              <p className="text-gray-600">Specialized drain field repair and replacement services. We understand Miami's high water table and clay soil challenges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Droplets className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">System Inspections</h3>
              </div>
              <p className="text-gray-600">Comprehensive septic system inspections for real estate transactions, insurance claims, and routine maintenance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold">Compliance Services</h3>
              </div>
              <p className="text-gray-600">Permit assistance, regulatory compliance, and environmental protection services for all septic work.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Consultation</h3>
              </div>
              <p className="text-gray-600">Expert consultation for system design, troubleshooting, and long-term maintenance planning.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold">Emergency Cleanup</h3>
              </div>
              <p className="text-gray-600">Professional cleanup services for septic backups, including sanitization and odor removal.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">Preventive Care</h3>
              </div>
              <p className="text-gray-600">Proactive maintenance programs to prevent costly repairs and extend system lifespan.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600">
              We provide septic services throughout South Florida with specialized knowledge of local conditions
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
                  We understand the challenges of high water tables and coastal conditions.
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
                  Coastal septic solutions for Boca Raton with specialized knowledge of salt air effects, 
                  storm surge protection, and Palm Beach County regulations.
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
                  We handle hurricane season challenges and flood zone requirements.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Resource Guides by City */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Guides by City</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides tailored to each city's unique septic system challenges and requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Miami Resources */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Miami Resources</h3>
              </div>
              <p className="text-gray-600 mb-4">Expert guides for Miami-Dade County septic systems</p>
              <div className="space-y-2">
                <Link href="/resources/septic-tank-services/miami/drain-field-problems-warning-signs" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Drain Field Problems & Warning Signs
                </Link>
                <Link href="/resources/septic-tank-services/miami/emergency-septic-backups" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Emergency Septic Backups
                </Link>
                <Link href="/resources/septic-tank-services/miami/permits-local-rules" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Permits & Local Rules
                </Link>
                <Link href="/resources/septic-tank-services/miami/septic-inspection-checklist" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Septic Inspection Checklist
                </Link>
                <Link href="/resources/septic-tank-services/miami/septic-pumping-cost-frequency" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Pumping Cost & Frequency
                </Link>
              </div>
            </div>
            
            {/* Boca Raton Resources */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Boca Raton Resources</h3>
              </div>
              <p className="text-gray-600 mb-4">Specialized guides for Palm Beach County coastal conditions</p>
              <div className="space-y-2">
                <Link href="/resources/septic-tank-services/boca-raton/drain-field-problems-warning-signs" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Drain Field Problems & Warning Signs
                </Link>
                <Link href="/resources/septic-tank-services/boca-raton/emergency-septic-backups" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Emergency Septic Backups
                </Link>
                <Link href="/resources/septic-tank-services/boca-raton/permits-local-rules" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Permits & Local Rules
                </Link>
                <Link href="/resources/septic-tank-services/boca-raton/septic-inspection-checklist" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Septic Inspection Checklist
                </Link>
                <Link href="/resources/septic-tank-services/boca-raton/septic-pumping-cost-frequency" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Pumping Cost & Frequency
                </Link>
              </div>
            </div>
            
            {/* Fort Lauderdale Resources */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-orange-600 mr-2" />
                <h3 className="text-xl font-semibold">Fort Lauderdale Resources</h3>
              </div>
              <p className="text-gray-600 mb-4">Comprehensive guides for Broward County septic systems</p>
              <div className="space-y-2">
                <Link href="/resources/septic-tank-services/fort-lauderdale/drain-field-problems-warning-signs" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Drain Field Problems & Warning Signs
                </Link>
                <Link href="/resources/septic-tank-services/fort-lauderdale/emergency-septic-backups" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Emergency Septic Backups
                </Link>
                <Link href="/resources/septic-tank-services/fort-lauderdale/permits-local-rules" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Permits & Local Rules
                </Link>
                <Link href="/resources/septic-tank-services/fort-lauderdale/septic-inspection-checklist" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Septic Inspection Checklist
                </Link>
                <Link href="/resources/septic-tank-services/fort-lauderdale/septic-pumping-cost-frequency" className="block text-blue-600 hover:text-blue-700 text-sm">
                  • Pumping Cost & Frequency
                </Link>
              </div>
            </div>
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
            href="/pricing/instant-quote/septic-tank-services?src=septic_services_end"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Get Instant Quote
          </Link>
        </div>
      </div>
    </div>
  )
}