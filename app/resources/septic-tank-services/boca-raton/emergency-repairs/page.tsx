import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, Calendar, Phone, AlertTriangle, Wrench, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Emergency Septic Repairs — Boca Raton 24/7 Service | LocalBizzList",
  description: "24/7 emergency septic repair services in Boca Raton, Florida. Fast response for backups, failures, and urgent septic issues. Licensed professionals available around the clock.",
  keywords: "emergency septic repairs boca raton, septic emergency boca raton, 24/7 septic service boca raton, septic backup repair boca raton",
  openGraph: {
    title: "Emergency Septic Repairs — Boca Raton 24/7 Service",
    description: "24/7 emergency septic repair services in Boca Raton, Florida. Fast response for backups, failures, and urgent septic issues.",
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: '2025-01-15T00:00:00.000Z',
    authors: ['LocalBizzList'],
  },
};

export default function BocaRatonEmergencyRepairsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Emergency Septic Repairs — Boca Raton 24/7 Service",
    "description": "24/7 emergency septic repair services in Boca Raton, Florida",
    "author": {
      "@type": "Organization",
      "name": "LocalBizzList"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LocalBizzList"
    },
    "datePublished": "2025-01-15T00:00:00.000Z",
    "dateModified": "2025-01-15T00:00:00.000Z"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://localbizzlist.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resources",
        "item": "https://localbizzlist.com/resources"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Septic Tank Services",
        "item": "https://localbizzlist.com/services/septic-tank-services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Boca Raton",
        "item": "https://localbizzlist.com/locations/boca-raton/septic-services"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Emergency Repairs",
        "item": "https://localbizzlist.com/resources/septic-tank-services/boca-raton/emergency-repairs"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
              <li><Link href="/locations/boca-raton/septic-services" className="text-gray-500 hover:text-gray-700">Boca Raton</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Emergency Repairs</li>
            </ol>
          </div>
        </nav>

        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">Emergency & After-Hours</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Boca Raton</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency Septic Repairs — Boca Raton 24/7 Service</h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>6 min read</span></div>
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>Jan 15, 2025</span></div>
              <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>Boca Raton, FL</span></div>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              24/7 emergency septic repair services in Boca Raton, Florida. Fast response for backups, failures, and urgent septic issues. Licensed professionals available around the clock.
            </p>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Emergency Contact */}
            <div className="mb-12 bg-red-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Emergency Septic Service</h2>
              <p className="text-xl text-red-100 mb-6">Available 24/7 for Boca Raton emergencies</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/pricing/instant-quote?src=septic_boca_raton_emergency_repairs_urgent"
                  className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
                <Link 
                  href="/pricing/instant-quote?src=septic_boca_raton_emergency_repairs_quote"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Get Emergency Quote
                </Link>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">When You Need Emergency Septic Service</h2>
              <p className="text-lg text-gray-600 mb-6">
                Septic emergencies can happen at any time, day or night. In Boca Raton's coastal environment, high water tables and sandy soils can create unique emergency situations that require immediate professional attention.
              </p>
              <p className="text-gray-600 mb-6">
                Our 24/7 emergency response team is equipped to handle all types of septic emergencies throughout Boca Raton and Palm Beach County. We understand that septic problems can't wait, and neither should you.
              </p>
            </div>

            {/* Emergency Situations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Common Emergency Situations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-red-900 mb-2">Sewage Backup</h3>
                        <p className="text-red-700">Raw sewage backing up into your home through drains, toilets, or floor drains.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-orange-900 mb-2">Complete System Failure</h3>
                        <p className="text-orange-700">System stops working entirely, causing immediate health and safety hazards.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Drain Field Flooding</h3>
                        <p className="text-yellow-700">Standing water or flooding over the drain field area, especially during storms.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Strong Sewage Odors</h3>
                        <p className="text-blue-700">Intense sewage smells inside or outside your home indicating system problems.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-purple-900 mb-2">Pipe Blockages</h3>
                        <p className="text-purple-700">Complete blockage preventing wastewater from leaving your home.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Storm Damage</h3>
                        <p className="text-green-700">Hurricane or severe weather damage to septic system components.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Emergency Response Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">1. Call</h3>
                  <p className="text-gray-600">Contact our 24/7 emergency line for immediate assistance.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">2. Dispatch</h3>
                  <p className="text-gray-600">We dispatch a certified technician within 30 minutes.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">3. Diagnose</h3>
                  <p className="text-gray-600">Quick assessment and immediate temporary solution.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">4. Repair</h3>
                  <p className="text-gray-600">Complete repair or permanent solution implementation.</p>
                </div>
              </div>
            </div>

            {/* Boca Raton Specific Considerations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Boca Raton Emergency Considerations</h2>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Coastal Environment Challenges</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-800">High Water Table</h4>
                    <p className="text-blue-700 mb-4">
                      Boca Raton's high water table can cause rapid system saturation during emergencies, requiring specialized pumping equipment and techniques.
                    </p>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Rapid saturation during storms</li>
                      <li>• Need for specialized equipment</li>
                      <li>• Quick response critical</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-800">Sandy Soil Conditions</h4>
                    <p className="text-blue-700 mb-4">
                      Sandy soils can cause rapid system failure and require immediate intervention to prevent environmental contamination.
                    </p>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Rapid percolation issues</li>
                      <li>• Environmental protection needed</li>
                      <li>• Specialized repair techniques</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Prevention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Preventing Emergency Situations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Regular Maintenance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <span className="text-gray-700">Schedule regular pumping every 3-5 years</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <span className="text-gray-700">Annual professional inspections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <span className="text-gray-700">Monitor drain field condition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <span className="text-gray-700">Address minor issues immediately</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Proper Usage</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <span className="text-gray-700">Avoid flushing non-biodegradable items</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <span className="text-gray-700">Limit water usage during storms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <span className="text-gray-700">Keep vehicles off drain field</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <span className="text-gray-700">Use septic-safe cleaning products</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Emergency Service FAQ</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How quickly can you respond to emergencies?</h3>
                  <p className="text-gray-600">
                    We typically respond within 30 minutes for emergency calls in Boca Raton. Our 24/7 dispatch ensures immediate response to urgent situations.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What should I do while waiting for emergency service?</h3>
                  <p className="text-gray-600">
                    Stop using all water immediately, avoid flushing toilets, and keep people away from affected areas. If sewage is backing up, evacuate the area and call us immediately.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Do you charge extra for emergency service?</h3>
                  <p className="text-gray-600">
                    Emergency service includes a premium rate for after-hours and weekend calls, but we provide transparent pricing upfront. The cost is worth preventing health hazards and property damage.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Can you handle storm-related septic emergencies?</h3>
                  <p className="text-gray-600">
                    Yes, we specialize in storm-related septic emergencies in Boca Raton. Our equipment can handle flooded conditions and we understand the unique challenges of coastal weather.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/locations/boca-raton/septic-services"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">Septic Services in Boca Raton</h4>
                  <p className="text-sm text-gray-600">Complete local service information and Palm Beach County guidance</p>
                </Link>

                <Link
                  href="/services/septic-tank-services"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">All Septic Tank Services</h4>
                  <p className="text-sm text-gray-600">Comprehensive septic services across South Florida</p>
                </Link>

                <Link
                  href="/resources/septic-tank-services/boca-raton/emergency-septic-backups"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">Emergency Septic Backups</h4>
                  <p className="text-sm text-gray-600">What to do when your septic system backs up</p>
                </Link>

                <Link
                  href="/resources/septic-tank-services/boca-raton/septic-inspection-checklist"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">Septic Inspection Checklist</h4>
                  <p className="text-sm text-gray-600">Prevent emergencies with regular inspections</p>
                </Link>
              </div>
            </section>

            {/* Final CTA */}
            <div className="bg-red-600 text-white py-12 px-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Don't Wait - Call Now for Emergency Service</h2>
              <p className="text-xl text-red-100 mb-8">
                Septic emergencies require immediate attention. Our certified technicians are standing by 24/7 to help with any emergency situation in Boca Raton.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/pricing/instant-quote/septic-tank-services?src=septic_boca-raton_emergency-repairs_final"
                  className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Service
                </Link>
                <Link 
                  href="/locations/boca-raton/septic-services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Boca Raton Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}