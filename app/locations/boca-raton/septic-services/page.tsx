import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Shield, Clock, Users, Award, Phone, MapPin, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Septic Services Boca Raton | Septic Tank Pumping & Inspection | LocalBizzList",
  description: "Professional septic services in Boca Raton, FL. Expert septic tank pumping, inspection, and drain field repair for residential and commercial properties. Same-day service available.",
  keywords: "septic services boca raton, septic tank pumping boca raton, septic inspection boca raton, drain field repair boca raton, septic maintenance boca raton",
  openGraph: {
    title: "Septic Services Boca Raton | Septic Tank Pumping & Inspection",
    description: "Professional septic services in Boca Raton, FL. Expert septic tank pumping, inspection, and drain field repair for residential and commercial properties.",
    type: "website",
  },
};

export default function BocaRatonSepticServicesPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LocalBizzList - Boca Raton Septic Services",
    "description": "Professional septic tank pumping, inspection, and maintenance services in Boca Raton, FL",
    "url": "https://localbizzlist.com/locations/boca-raton/septic-services",
    "telephone": "+15615551234",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[CURSOR: Add street address]",
      "addressLocality": "Boca Raton",
      "addressRegion": "FL",
      "postalCode": "33431",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.3683",
      "longitude": "-80.1289"
    },
    "areaServed": {
      "@type": "City",
      "name": "Boca Raton",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Septic Services Boca Raton",
    "description": "Professional septic tank pumping, inspection, and maintenance services in Boca Raton, Florida",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LocalBizzList",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Boca Raton",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Boca Raton",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    "serviceType": "Septic Tank Maintenance and Repair"
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
        "name": "Locations",
        "item": "https://localbizzlist.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Boca Raton",
        "item": "https://localbizzlist.com/locations/boca-raton"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Septic Services"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin size={28} />
              <span className="text-xl font-semibold">Boca Raton, Florida</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Professional Septic Services in Boca Raton
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Expert septic tank pumping, inspection, and maintenance services for Boca Raton's coastal properties. We understand Palm Beach County's unique challenges including high water tables, sandy soils, and saltwater intrusion. Serving residential and commercial properties throughout Boca Raton, Delray Beach, Deerfield Beach, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing/instant-quote/septic-tank-services?src=boca-septic-hero"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Instant Quote
              </a>
              <a
                href="tel:+15615551234"
                className="btn-secondary text-lg px-8 py-4"
              >
                <Phone className="inline mr-2" size={20} />
                Call (561) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Septic Services for Boca Raton</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From routine maintenance to emergency repairs, we provide comprehensive septic solutions tailored to Boca Raton's unique coastal environment and Palm Beach County regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Septic Tank Pumping</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional septic tank pumping services for Boca Raton homes and businesses. We understand the unique challenges of coastal properties including high water tables and sandy soils that affect pumping frequency.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Residential and commercial pumping</li>
                  <li>• Emergency same-day service</li>
                  <li>• Proper disposal of waste</li>
                  <li>• System inspection included</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Septic System Inspection</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive septic system inspections for Boca Raton properties. Our certified inspectors understand Palm Beach County requirements and can identify issues before they become costly problems.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Pre-purchase inspections</li>
                  <li>• Annual maintenance checks</li>
                  <li>• Drain field assessment</li>
                  <li>• Detailed inspection reports</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <Award className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Drain Field Repair</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Expert drain field repair and replacement services for Boca Raton properties. We specialize in addressing the common issues caused by sandy soils and high water tables in coastal areas.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Drain field replacement</li>
                  <li>• French drain installation</li>
                  <li>• Soil testing and analysis</li>
                  <li>• Permitting assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boca Raton Specific Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Unique Septic Challenges in Boca Raton</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Boca Raton's coastal location presents specific challenges for septic systems that require specialized knowledge and experience to address effectively.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                      <MapPin className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">High Water Tables</h3>
                      <p className="text-gray-600">
                        Boca Raton's proximity to the ocean and extensive canal system creates high water tables that can interfere with proper septic system function. This requires specialized pumping schedules and system design considerations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                      <Shield className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sandy Soil Conditions</h3>
                      <p className="text-gray-600">
                        The sandy soils common in Boca Raton provide excellent drainage but can also lead to rapid system failure if not properly maintained. Our experts understand how to work with these soil conditions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                      <Users className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Saltwater Intrusion</h3>
                      <p className="text-gray-600">
                        Coastal properties in Boca Raton may experience saltwater intrusion that can accelerate corrosion and affect system performance. We use specialized materials and techniques to combat these issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Palm Beach County Regulations</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Pumping Requirements</h4>
                    <p className="text-gray-600">Residential systems must be pumped every 3-5 years, commercial systems annually. High-risk areas may require more frequent service.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Inspection Mandates</h4>
                    <p className="text-gray-600">Property transfers require certified septic inspections. New installations must meet current environmental standards.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Permit Requirements</h4>
                    <p className="text-gray-600">All septic work requires proper permitting through Palm Beach County Environmental Resources Management.</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop"
                    alt="Coastal septic system challenges in Boca Raton"
                    width={600}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Serving Boca Raton and Surrounding Areas</h2>
              <p className="text-xl text-gray-600">
                We provide septic services throughout Palm Beach County, with specialized expertise in coastal communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <h3 className="text-lg font-semibold mb-2">Boca Raton</h3>
                <p className="text-gray-600 text-sm">Downtown, Mizner Park, Royal Palm Yacht Club</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <h3 className="text-lg font-semibold mb-2">Delray Beach</h3>
                <p className="text-gray-600 text-sm">Atlantic Avenue, Pineapple Grove, Delray Shores</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <h3 className="text-lg font-semibold mb-2">Deerfield Beach</h3>
                <p className="text-gray-600 text-sm">Cove Shopping Center, Hillsboro Beach</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <h3 className="text-lg font-semibold mb-2">Highland Beach</h3>
                <p className="text-gray-600 text-sm">Oceanfront properties, coastal communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Boca Raton Chooses Our Septic Services</h2>
              <p className="text-xl text-gray-600">
                Local expertise, reliable service, and competitive pricing make us the preferred choice for septic services in Boca Raton.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed septic contractors with comprehensive insurance coverage. All work meets Palm Beach County standards.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Same-Day Service</h3>
                <p className="text-gray-600">
                  Emergency septic services available 7 days a week. Most routine services scheduled within 24 hours.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  Over 15 years serving Boca Raton. We understand local soil conditions, regulations, and common issues.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
                <p className="text-gray-600">
                  All work backed by our satisfaction guarantee. We stand behind our septic services with comprehensive warranties.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Residential & Commercial</h3>
                <p className="text-gray-600">
                  Expert service for homes, restaurants, offices, and commercial properties throughout Boca Raton.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="text-teal-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Work around your schedule with evening and weekend appointments available for your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Resource Guides */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Expert Septic Resources for Boca Raton</h2>
              <p className="text-xl text-gray-600">
                Comprehensive guides and resources to help you understand and maintain your septic system in Boca Raton's unique environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Septic System Maintenance</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how to properly maintain your septic system in Boca Raton's coastal environment.
                </p>
                <a href="/resources/septic-tank-services/boca-raton/maintenance-schedule" className="text-blue-600 font-medium text-sm hover:underline">
                  Read Guide →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Pumping Frequency</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Understand how often your septic tank needs pumping in Boca Raton.
                </p>
                <a href="/resources/septic-tank-services/boca-raton/pumping-frequency" className="text-blue-600 font-medium text-sm hover:underline">
                  Read Guide →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Drain Field Care</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Protect your drain field from Boca Raton's sandy soil conditions.
                </p>
                <a href="/resources/septic-tank-services/boca-raton/drain-field-care" className="text-blue-600 font-medium text-sm hover:underline">
                  Read Guide →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Emergency Repairs</h3>
                <p className="text-gray-600 text-sm mb-4">
                  What to do when your septic system fails in Boca Raton.
                </p>
                <a href="/resources/septic-tank-services/boca-raton/emergency-repairs" className="text-blue-600 font-medium text-sm hover:underline">
                  Read Guide →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about septic services in Boca Raton, Florida.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">How often should I pump my septic tank in Boca Raton?</h3>
                <p className="text-gray-600">
                  In Boca Raton, septic tanks typically need pumping every 3-5 years for residential properties and annually for commercial properties. However, properties with high water tables or sandy soils may require more frequent service. We recommend annual inspections to determine the optimal pumping schedule for your specific property.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">What are the signs of septic system failure in Boca Raton?</h3>
                <p className="text-gray-600">
                  Common signs include slow drains, gurgling sounds, sewage odors, wet spots in your yard, or lush grass over the drain field. In Boca Raton's coastal environment, saltwater intrusion can also cause accelerated corrosion. If you notice any of these signs, contact us immediately for inspection and repair.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Do I need permits for septic work in Boca Raton?</h3>
                <p className="text-gray-600">
                  Yes, all septic system work in Boca Raton requires permits through Palm Beach County Environmental Resources Management. This includes repairs, replacements, and new installations. We handle all permitting requirements and ensure your project meets current environmental standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">How does Boca Raton's coastal location affect septic systems?</h3>
                <p className="text-gray-600">
                  Boca Raton's coastal location presents unique challenges including high water tables, sandy soils, and potential saltwater intrusion. These factors can affect system performance and require specialized maintenance approaches. Our local expertise ensures your system is properly designed and maintained for these conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
