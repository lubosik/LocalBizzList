import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Calendar, Wrench, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Drain Field Care Guide — Boca Raton Septic Systems | LocalBizzList",
  description: "Complete guide to drain field maintenance and care in Boca Raton, Florida. Learn about sandy soil conditions, high water tables, and coastal drain field protection.",
  keywords: "drain field care boca raton, septic drain field maintenance boca raton, drain field problems boca raton, boca raton septic systems",
  openGraph: {
    title: "Drain Field Care Guide — Boca Raton Septic Systems",
    description: "Complete guide to drain field maintenance and care in Boca Raton, Florida. Learn about sandy soil conditions, high water tables, and coastal drain field protection.",
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: '2025-01-15T00:00:00.000Z',
    authors: ['LocalBizzList'],
  },
};

export default function BocaRatonDrainFieldCarePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Drain Field Care Guide — Boca Raton Septic Systems",
    "description": "Complete guide to drain field maintenance and care in Boca Raton, Florida",
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
        "name": "Drain Field Care Guide",
        "item": "https://localbizzlist.com/resources/septic-tank-services/boca-raton/drain-field-care"
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
              <li className="text-gray-900 font-medium">Drain Field Care Guide</li>
            </ol>
          </div>
        </nav>

        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">Maintenance & Repairs</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Boca Raton</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Drain Field Care Guide — Boca Raton Septic Systems</h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>8 min read</span></div>
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>Jan 15, 2025</span></div>
              <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>Boca Raton, FL</span></div>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Complete guide to drain field maintenance and care in Boca Raton, Florida. Learn about sandy soil conditions, high water tables, and coastal drain field protection.
            </p>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Understanding Drain Fields in Boca Raton</h2>
              <p className="text-lg text-gray-600 mb-6">
                Drain fields are the critical final component of your septic system, responsible for filtering and dispersing treated wastewater into the soil. In Boca Raton's unique coastal environment, proper drain field care is essential for system longevity and environmental protection.
              </p>
              <p className="text-gray-600 mb-6">
                Boca Raton's sandy soils, high water tables, and proximity to saltwater create specific challenges that require specialized maintenance approaches. This comprehensive guide covers everything you need to know about drain field care in Boca Raton.
              </p>
            </div>

            {/* Boca Raton Specific Challenges */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Boca Raton Drain Field Challenges</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">Sandy Soil Conditions</h3>
                  <p className="text-gray-700 mb-4">
                    Boca Raton's sandy soils provide excellent drainage but can lead to rapid wastewater percolation, potentially overwhelming the drain field during peak usage periods.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Rapid water percolation</li>
                    <li>• Reduced filtration time</li>
                    <li>• Potential for system overload</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-900">High Water Table</h3>
                  <p className="text-gray-700 mb-4">
                    Boca Raton's high water table can saturate drain fields, especially during rainy seasons, reducing their effectiveness and potentially causing backups.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Seasonal saturation</li>
                    <li>• Reduced absorption capacity</li>
                    <li>• Increased maintenance needs</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-900">Saltwater Intrusion</h3>
                  <p className="text-gray-700 mb-4">
                    Coastal proximity can lead to saltwater intrusion, which can corrode drain field components and affect soil permeability over time.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Component corrosion</li>
                    <li>• Soil permeability changes</li>
                    <li>• Accelerated wear</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-900">Palm Beach County Regulations</h3>
                  <p className="text-gray-700 mb-4">
                    Palm Beach County has specific requirements for drain field maintenance, inspections, and modifications that must be followed.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Regular inspection requirements</li>
                    <li>• Permit requirements for modifications</li>
                    <li>• Environmental compliance standards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Maintenance Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Drain Field Maintenance Schedule</h2>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <h3 className="text-xl font-semibold">Recommended Maintenance Timeline</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Monthly</h4>
                        <p className="text-gray-600">Visual inspection of drain field area</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Essential</span>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Quarterly</h4>
                        <p className="text-gray-600">Check for standing water and odors</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Important</span>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Annually</h4>
                        <p className="text-gray-600">Professional inspection and soil testing</p>
                      </div>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">Critical</span>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Every 3-5 Years</h4>
                        <p className="text-gray-600">Complete drain field evaluation and cleaning</p>
                      </div>
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">Required</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Drain Field Warning Signs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-red-900 mb-2">Standing Water</h3>
                        <p className="text-red-700">Pools of water or soggy areas over the drain field indicate saturation or blockage.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-orange-900 mb-2">Sewage Odors</h3>
                        <p className="text-orange-700">Strong sewage smells near the drain field suggest system failure or backup.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Slow Drains</h3>
                        <p className="text-yellow-700">Drains throughout the house running slowly may indicate drain field problems.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Lush Vegetation</h3>
                        <p className="text-blue-700">Unusually green or fast-growing grass over the drain field indicates excess nutrients.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-purple-900 mb-2">Gurgling Sounds</h3>
                        <p className="text-purple-700">Bubbling or gurgling sounds in drains suggest air trapped in the system.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Backup in House</h3>
                        <p className="text-green-700">Sewage backing up into toilets or drains indicates complete system failure.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Drain Field Care in Boca Raton</h2>
              <p className="text-lg text-gray-600 mb-6">
                Professional drain field care is essential in Boca Raton due to the unique environmental challenges. Our certified technicians understand local soil conditions, water table fluctuations, and Palm Beach County regulations.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Inspection & Testing</h3>
                  <p className="text-gray-600">Comprehensive evaluation of drain field performance, soil conditions, and system integrity.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Maintenance Services</h3>
                  <p className="text-gray-600">Regular cleaning, aeration, and preventive maintenance to extend drain field life.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Emergency Repairs</h3>
                  <p className="text-gray-600">24/7 emergency response for drain field failures and system backups.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How often should I inspect my drain field in Boca Raton?</h3>
                  <p className="text-gray-600">
                    We recommend monthly visual inspections and annual professional evaluations. Boca Raton's challenging environment requires more frequent monitoring than other areas.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Can I drive over my drain field?</h3>
                  <p className="text-gray-600">
                    Never drive or park vehicles over your drain field. The weight can compact the soil and damage the distribution pipes, especially in Boca Raton's sandy soil conditions.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What should I plant over my drain field?</h3>
                  <p className="text-gray-600">
                    Plant only grass or shallow-rooted plants. Avoid trees, shrubs, or deep-rooted plants that can damage the drain field pipes and distribution system.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How long do drain fields last in Boca Raton?</h3>
                  <p className="text-gray-600">
                    With proper maintenance, drain fields typically last 15-25 years in Boca Raton. Coastal conditions and high water tables can affect longevity, making regular care essential.
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
                  href="/resources/septic-tank-services/boca-raton/drain-field-problems-warning-signs"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">Drain Field Problems & Warning Signs</h4>
                  <p className="text-sm text-gray-600">Recognize early signs of drain field failure</p>
                </Link>

                <Link
                  href="/resources/septic-tank-services/boca-raton/maintenance-schedule"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">Septic System Maintenance Schedule</h4>
                  <p className="text-sm text-gray-600">Comprehensive maintenance planning for Boca Raton systems</p>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-12 px-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Need Professional Drain Field Care in Boca Raton?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our certified technicians provide comprehensive drain field maintenance and repair services throughout Boca Raton and Palm Beach County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/pricing/instant-quote/septic-tank-services?src=septic_boca-raton_drain-field-care_end"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Get Instant Quote
                </Link>
                <Link 
                  href="/locations/boca-raton/septic-services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
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