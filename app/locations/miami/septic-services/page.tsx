import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, CheckCircle, AlertTriangle, DollarSign, Phone, Star } from 'lucide-react'

export const metadata = {
  title: "Septic Tank Services Miami - Professional Pumping & Repair | Local Bizz List",
  description: "Professional septic tank services in Miami-Dade County. Expert pumping, repair, installation & maintenance. Licensed contractors serving Miami, Homestead, Hialeah & surrounding areas.",
  keywords: ["septic tank services Miami", "septic pumping Miami", "septic repair Miami-Dade", "septic installation Miami", "drain field repair Miami"],
  canonical: "https://local-bizz-list.vercel.app/locations/miami/septic-services"
}

export default function MiamiSepticServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Septic Tank Services in Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional septic system services for Miami-Dade County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing/instant-quote/septic-tank-services?src=septic_miami_service-page_hero"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Get Instant Quote
              </Link>
              <Link 
                href="/services/septic-tank-services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Miami Context Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Miami Septic System Challenges</h2>
              <p className="text-lg text-gray-600 mb-6">
                Miami's unique environment presents specific challenges for septic systems. The high water table, 
                frequent flooding, and older subdivisions require specialized knowledge and equipment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">High Water Table</h3>
                    <p className="text-gray-600">Miami's shallow water table affects drain field performance and requires specialized installation techniques.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Flood Risk</h3>
                    <p className="text-gray-600">Frequent flooding can overwhelm septic systems, requiring emergency pumping and system protection.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Older Subdivisions</h3>
                    <p className="text-gray-600">Many Miami neighborhoods have aging septic systems that need regular maintenance and upgrades.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                alt="Septic system installation in Miami"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Miami Septic Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive septic services tailored to Miami's unique environmental conditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Septic Pumping</h3>
              <p className="text-gray-600 mb-4">Regular pumping to prevent backups and maintain system efficiency in Miami's challenging conditions.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete waste removal</li>
                <li>• Tank inspection</li>
                <li>• System cleaning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Repairs</h3>
              <p className="text-gray-600 mb-4">24/7 emergency service for septic backups and system failures throughout Miami-Dade County.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Blockage removal</li>
                <li>• System diagnostics</li>
                <li>• Immediate response</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Installation</h3>
              <p className="text-gray-600 mb-4">New septic system installation with proper permits and inspections for Miami-Dade County.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Permit assistance</li>
                <li>• Site evaluation</li>
                <li>• Professional installation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
              <p className="text-gray-600 mb-4">Scheduled maintenance to extend system life and prevent issues in Miami's challenging environment.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regular inspections</li>
                <li>• Preventive maintenance</li>
                <li>• System optimization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Drain Field Repair</h3>
              <p className="text-gray-600 mb-4">Specialized drain field services for Miami's high water table and soil conditions.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Field assessment</li>
                <li>• Repair and replacement</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600 mb-4">Expert consultation for septic system planning and troubleshooting in Miami.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• System evaluation</li>
                <li>• Upgrade planning</li>
                <li>• Compliance guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Costs & Frequency Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Miami Septic Service Costs</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing for septic services in Miami-Dade County
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Residential Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Standard Pumping (1000 gal)</span>
                  <span className="text-blue-600 font-bold">$250 - $350</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Large Tank Pumping (1500+ gal)</span>
                  <span className="text-blue-600 font-bold">$350 - $500</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Emergency Service</span>
                  <span className="text-blue-600 font-bold">$400 - $600</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">System Inspection</span>
                  <span className="text-blue-600 font-bold">$150 - $250</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Commercial Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Restaurant Pumping</span>
                  <span className="text-blue-600 font-bold">$500 - $800</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Office Building</span>
                  <span className="text-blue-600 font-bold">$400 - $700</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Regular Maintenance</span>
                  <span className="text-blue-600 font-bold">$200 - $400/month</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Emergency Response</span>
                  <span className="text-blue-600 font-bold">$600 - $1000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pumping Frequency in Miami</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Residential</h4>
                <p className="text-gray-600">Every 2-3 years</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Commercial</h4>
                <p className="text-gray-600">Every 6-12 months</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">High-Use</h4>
                <p className="text-gray-600">Every 3-6 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Miami Septic Service Process</h2>
            <p className="text-lg text-gray-600">
              Professional septic service process tailored for Miami-Dade County
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Locate & Access</h3>
              <p className="text-gray-600">We locate your septic tank and access lids, ensuring minimal disruption to your property.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pump & Clean</h3>
              <p className="text-gray-600">Complete waste removal and tank cleaning using professional equipment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inspect & Test</h3>
              <p className="text-gray-600">Thorough inspection of all components and system performance testing.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Report & Recommend</h3>
              <p className="text-gray-600">Detailed report with maintenance recommendations and next service scheduling.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Rules Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Miami-Dade County Septic Regulations</h2>
            <p className="text-lg text-gray-600">
              Important compliance information for septic systems in Miami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Permits & Inspections</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">New installations require Miami-Dade County permits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Regular inspections every 3-5 years</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Property transfers require septic inspection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Repairs over $1,000 need permits</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Minimum setback distances from property lines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Proper drain field sizing for soil conditions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Environmental protection measures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Record keeping for maintenance history</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Common Issues Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Miami Septic Issues</h2>
            <p className="text-lg text-gray-600">
              Typical problems and solutions for septic systems in Miami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Drain Field Saturation</h3>
                <p className="text-gray-600 mb-3">High water table in Miami can cause drain fields to become saturated, leading to slow drainage and backups.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Regular pumping and drain field evaluation</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flood Damage</h3>
                <p className="text-gray-600 mb-3">Hurricane season and heavy rains can overwhelm septic systems, causing backups and contamination.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Emergency pumping and system protection</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Odor Problems</h3>
                <p className="text-gray-600 mb-3">High humidity and temperature in Miami can intensify septic odors, especially during summer months.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Regular maintenance and proper ventilation</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Slow Drains</h3>
                <p className="text-gray-600 mb-3">Accumulated solids and high water table can cause slow drainage throughout the system.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Professional cleaning and system evaluation</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">System Aging</h3>
                <p className="text-gray-600 mb-3">Many Miami homes have older septic systems that need upgrades or replacement.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> System assessment and modernization</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tree Root Intrusion</h3>
                <p className="text-gray-600 mb-3">Miami's lush vegetation can cause tree roots to invade septic systems and drain fields.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Root removal and barrier installation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about septic services in Miami
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How often should I pump my septic tank in Miami?</h3>
              <p className="text-gray-600">Most Miami homes need septic pumping every 2-3 years, but this can vary based on tank size, household size, and usage patterns. Commercial properties typically need more frequent service.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What makes Miami septic systems different?</h3>
              <p className="text-gray-600">Miami's high water table, frequent flooding, and older subdivisions create unique challenges. Systems must be designed to handle these conditions and require specialized maintenance.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need permits for septic work in Miami?</h3>
              <p className="text-gray-600">Yes, Miami-Dade County requires permits for new installations, major repairs, and some maintenance work. We handle all permit applications and ensure compliance with local regulations.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What should I do if my septic backs up during a storm?</h3>
              <p className="text-gray-600">Stop using water immediately and call for emergency service. During storms, Miami's high water table can overwhelm septic systems, requiring immediate professional attention.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does septic pumping cost in Miami?</h3>
              <p className="text-gray-600">Standard residential pumping typically costs $250-$350, while commercial services range from $400-$800. Emergency services and larger tanks cost more. We provide transparent pricing with no hidden fees.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I install a new septic system in Miami?</h3>
              <p className="text-gray-600">Yes, but it requires proper permits, soil testing, and compliance with Miami-Dade County regulations. We handle the entire process from planning to installation and inspection.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What are signs my septic system needs attention?</h3>
              <p className="text-gray-600">Slow drains, gurgling sounds, sewage odors, wet spots in the yard, or sewage backups are all warning signs. In Miami's challenging environment, early intervention is crucial.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you service all areas of Miami-Dade County?</h3>
              <p className="text-gray-600">Yes, we provide septic services throughout Miami-Dade County including Miami, Homestead, Hialeah, Coral Gables, and all surrounding communities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Professional Septic Services in Miami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get expert septic tank services tailored to Miami's unique environment. 
            Licensed professionals with local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/pricing/instant-quote/septic-tank-services?src=septic_miami_service-page_cta"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Get Instant Quote
            </Link>
            <Link 
              href="/resources/septic-tank-services/miami"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Miami Resources
            </Link>
          </div>
        </div>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Septic Tank Services Miami",
            "description": "Professional septic tank services in Miami-Dade County including pumping, repair, installation and maintenance",
            "provider": {
              "@type": "Organization",
              "name": "Local Bizz List",
              "url": "https://local-bizz-list.vercel.app"
            },
            "areaServed": {
              "@type": "City",
              "name": "Miami",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceType": "Septic Tank Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Miami Septic Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Septic Pumping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Repairs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "System Installation"
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
  )
}