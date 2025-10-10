import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Shield, Clock, Users, Award, Phone, MapPin, Calendar, HelpCircle, Settings, Zap, Wrench, Droplets, FileText, AlertTriangle, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: "Septic Services Fort Lauderdale | Expert Tank Pumping & Coastal System Care | LocalBizzList",
  description: "Professional septic services in Fort Lauderdale, FL. Expert septic tank pumping, inspection, and drain field repair for coastal properties. Specialized in high water tables, sandy soils, and saltwater intrusion. Same-day service available.",
  keywords: "septic services fort lauderdale, septic tank pumping fort lauderdale, septic inspection fort lauderdale, drain field repair fort lauderdale, septic maintenance fort lauderdale, coastal septic systems fort lauderdale, broward county septic services",
  openGraph: {
    title: "Septic Services Fort Lauderdale | Expert Tank Pumping & Coastal System Care",
    description: "Professional septic services in Fort Lauderdale, FL. Expert septic tank pumping, inspection, and drain field repair for coastal properties. Specialized in high water tables, sandy soils, and saltwater intrusion.",
    type: "website",
  },
};

export default function FortLauderdaleSepticServicesPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LocalBizzList - Fort Lauderdale Septic Services",
    "description": "Professional septic tank pumping, inspection, and maintenance services in Fort Lauderdale, FL",
    "url": "https://localbizzlist.com/locations/fort-lauderdale/septic-services",
    "telephone": "+19545551234",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[CURSOR: Add street address]",
      "addressLocality": "Fort Lauderdale",
      "addressRegion": "FL",
      "postalCode": "33301",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.1224",
      "longitude": "-80.1373"
    },
    "areaServed": {
      "@type": "City",
      "name": "Fort Lauderdale",
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
    "name": "Septic Services Fort Lauderdale",
    "description": "Professional septic tank pumping, inspection, and maintenance services in Fort Lauderdale, Florida",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LocalBizzList",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fort Lauderdale",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Fort Lauderdale",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    "serviceType": "Septic Tank Maintenance and Repair"
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Professional Septic Services in Fort Lauderdale, FL",
    "description": "Expert septic tank pumping, inspection, and maintenance services for Fort Lauderdale's coastal properties. Specialized in high water tables, sandy soils, and saltwater intrusion.",
    "author": {
      "@type": "Organization",
      "name": "LocalBizzList"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LocalBizzList"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should I pump my septic tank in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most Fort Lauderdale homes, septic tanks should be pumped every 3-5 years. However, coastal properties with high water tables may require more frequent pumping every 2-3 years. Factors like household size, water usage, tank size, and proximity to saltwater also affect pumping frequency."
        }
      },
      {
        "@type": "Question",
        "name": "What's the cost of septic tank pumping in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Septic tank pumping in Fort Lauderdale typically costs $300-500 for residential tanks. Commercial properties and larger tanks may cost $500-800. Coastal properties with difficult access or high water tables may have additional charges."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need permits for septic work in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most septic work in Fort Lauderdale requires permits from the Broward County Health Department. This includes new installations, repairs, and modifications. Our team handles all permit applications and ensures compliance with local regulations."
        }
      },
      {
        "@type": "Question",
        "name": "How does Fort Lauderdale's coastal environment affect septic systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fort Lauderdale's coastal location creates unique challenges including high water tables, sandy soil, and potential saltwater intrusion. These conditions require specialized installation techniques, corrosion-resistant materials, and more frequent maintenance than inland systems."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency septic services in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 emergency septic services throughout Fort Lauderdale and surrounding areas. Our emergency response team can handle backups, overflows, and urgent repairs. We understand that septic emergencies can't wait, especially in coastal properties."
        }
      }
    ]
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
        "name": "Fort Lauderdale",
        "item": "https://localbizzlist.com/locations/fort-lauderdale"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <MapPin size={28} />
                  <span className="text-xl font-semibold">Fort Lauderdale, Florida</span>
                </div>
                <h1 className="text-5xl font-bold mb-6">
                  Professional Septic Services in Fort Lauderdale
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Expert septic tank pumping, inspection, and maintenance services for Fort Lauderdale's coastal properties. We understand Broward County's unique challenges including high water tables, sandy soils, saltwater intrusion, and climate change impacts. Our specialized coastal septic expertise ensures your system performs optimally in South Florida's challenging environment. Serving residential and commercial properties throughout Fort Lauderdale, Pompano Beach, Wilton Manors, Plantation, Davie, and Hollywood.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="/pricing/instant-quote/septic-tank-services?src=septic_fort-lauderdale_service-page_hero"
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Get Instant Quote
                  </a>
                  <a
                    href="tel:+19545551234"
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    <Phone className="inline mr-2" size={20} />
                    Call (954) 555-1234
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c3b6d7d7b8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional septic tank pumping service truck in Fort Lauderdale"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Professional Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Professional Septic Service Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">1. Assessment</h3>
                <p className="text-gray-600 text-sm">
                  We evaluate your septic system's condition, checking for Fort Lauderdale-specific issues like high water table impacts and coastal corrosion.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">2. Service Execution</h3>
                <p className="text-gray-600 text-sm">
                  Our certified technicians perform the required service using specialized equipment designed for coastal properties and high water table conditions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">3. Quality Inspection</h3>
                <p className="text-gray-600 text-sm">
                  We conduct thorough post-service inspections to ensure optimal performance and compliance with Broward County regulations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">4. Documentation</h3>
                <p className="text-gray-600 text-sm">
                  You receive detailed service reports and maintenance recommendations tailored to Fort Lauderdale's unique coastal environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Complete Septic Services in Fort Lauderdale
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Septic Tank Pumping</h3>
                <p className="text-gray-600 mb-4">
                  Professional septic tank pumping services for Fort Lauderdale properties. We handle all tank sizes from 750 to 1,500 gallons, with specialized equipment for coastal properties and high water table conditions. Our technicians understand the unique challenges of Fort Lauderdale's sandy soil and proximity to saltwater.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Residential & Commercial
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Same-Day Service Available
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Licensed & Insured
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Coastal-Specific Techniques
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Septic System Inspection</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive septic system inspections for Fort Lauderdale properties. Our certified inspectors understand Broward County requirements and coastal system challenges. We check for saltwater intrusion, high water table impacts, and system components affected by the coastal environment.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pre-Purchase Inspections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Annual Maintenance Checks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Detailed Reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Coastal Environment Assessment
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Droplets className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Drain Field Repair</h3>
                <p className="text-gray-600 mb-4">
                  Expert drain field repair and replacement services for Fort Lauderdale's challenging soil conditions. We specialize in sandy soils and high water table environments. Our team understands how coastal conditions affect drain field performance and longevity.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Drain Field Assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Repair & Replacement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Permitting Assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sandy Soil Solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fort Lauderdale Specific Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fort Lauderdale Septic System Challenges
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Coastal Environment Considerations</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-600">High Water Tables</h4>
                    <p className="text-gray-600 mb-3">
                      Fort Lauderdale's proximity to the ocean and extensive canal system creates high water table conditions that can affect septic system performance. Our technicians understand how to work with these conditions.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Elevated drain field installation</li>
                      <li>• Specialized pumping techniques</li>
                      <li>• Water table monitoring</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-green-600">Sandy Soil Conditions</h4>
                    <p className="text-gray-600 mb-3">
                      The sandy soil composition in Fort Lauderdale affects drain field performance and requires specialized installation and maintenance techniques.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Modified drain field design</li>
                      <li>• Enhanced filtration systems</li>
                      <li>• Regular maintenance schedules</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-orange-600">Saltwater Intrusion</h4>
                    <p className="text-gray-600 mb-3">
                      Coastal properties may experience saltwater intrusion that can affect septic system components and require specialized materials and techniques.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Corrosion-resistant materials</li>
                      <li>• Saltwater-compatible systems</li>
                      <li>• Regular system monitoring</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-red-600">Climate Change & Sea Level Rise</h4>
                    <p className="text-gray-600 mb-3">
                      Fort Lauderdale faces increasing challenges from sea level rise and changing precipitation patterns that affect septic system performance and longevity.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Elevated system installations</li>
                      <li>• Flood-resistant components</li>
                      <li>• Future-proofing strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                  alt="Septic system installation in Fort Lauderdale coastal environment"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Broward County Septic Regulations & Compliance</h3>
              <p className="text-gray-700 mb-4">
                Fort Lauderdale septic systems must comply with Broward County Health Department regulations, Florida DEP standards, and DOH requirements. Our team stays current with all local requirements and can assist with permitting and compliance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Key Requirements:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Minimum setback distances</li>
                    <li>• Tank size requirements</li>
                    <li>• Drain field specifications</li>
                    <li>• Inspection schedules</li>
                    <li>• Nitrogen-reducing systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Our Services:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Permit application assistance</li>
                    <li>• Compliance inspections</li>
                    <li>• Regulatory updates</li>
                    <li>• Documentation support</li>
                    <li>• System upgrades</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Specialized Systems:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Aerobic Treatment Units (ATUs)</li>
                    <li>• Nitrogen-reducing systems</li>
                    <li>• Coastal-compatible designs</li>
                    <li>• High water table solutions</li>
                    <li>• Flood-resistant installations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fort Lauderdale Septic Service Costs & Frequency */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fort Lauderdale Septic Service Costs & Frequency
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Service Cost Breakdown</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-semibold">Service</th>
                        <th className="text-right py-3 font-semibold">Cost Range</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b">
                        <td className="py-3">Residential Tank Pumping (750-1000 gal)</td>
                        <td className="text-right py-3">$300-450</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Commercial Tank Pumping (1000+ gal)</td>
                        <td className="text-right py-3">$500-800</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">System Inspection</td>
                        <td className="text-right py-3">$150-300</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Drain Field Assessment</td>
                        <td className="text-right py-3">$200-400</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Emergency Service (after hours)</td>
                        <td className="text-right py-3">$400-600</td>
                      </tr>
                      <tr>
                        <td className="py-3">Coastal Property Surcharge</td>
                        <td className="text-right py-3">$50-100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Recommended Maintenance Schedule</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-3 text-blue-600">Standard Residential Properties</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Pumping: Every 3-5 years</li>
                      <li>• Inspection: Annually</li>
                      <li>• Drain field check: Every 2 years</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-3 text-orange-600">Coastal Properties</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Pumping: Every 2-3 years</li>
                      <li>• Inspection: Every 6 months</li>
                      <li>• Saltwater intrusion check: Annually</li>
                      <li>• Corrosion assessment: Every 2 years</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-3 text-green-600">Commercial Properties</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Pumping: Every 1-2 years</li>
                      <li>• Inspection: Quarterly</li>
                      <li>• Grease trap service: Monthly</li>
                      <li>• System monitoring: Continuous</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Fort Lauderdale Septic Issues & Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Common Fort Lauderdale Septic Issues & Solutions
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-red-600">Drain Field Saturation</h3>
                  <p className="text-gray-600 mb-3">
                    High water tables in Fort Lauderdale can cause drain fields to become saturated, leading to system backups and poor drainage.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold mb-2">Causes:</p>
                    <ul className="text-gray-600 space-y-1 mb-3">
                      <li>• High water table conditions</li>
                      <li>• Excessive rainfall</li>
                      <li>• Poor soil percolation</li>
                    </ul>
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Elevated drain field installation</li>
                      <li>• French drain systems</li>
                      <li>• Regular maintenance pumping</li>
                    </ul>
                    <p className="mt-3 text-gray-600"><strong>Estimated Cost:</strong> $3,000-8,000</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-orange-600">Saltwater Intrusion</h3>
                  <p className="text-gray-600 mb-3">
                    Coastal properties may experience saltwater intrusion that corrodes septic system components and affects performance.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold mb-2">Causes:</p>
                    <ul className="text-gray-600 space-y-1 mb-3">
                      <li>• Proximity to saltwater</li>
                      <li>• Rising sea levels</li>
                      <li>• Storm surge events</li>
                    </ul>
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Corrosion-resistant materials</li>
                      <li>• Elevated system installation</li>
                      <li>• Regular component replacement</li>
                    </ul>
                    <p className="mt-3 text-gray-600"><strong>Estimated Cost:</strong> $2,000-5,000</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Sandy Soil Drainage Issues</h3>
                  <p className="text-gray-600 mb-3">
                    Fort Lauderdale's sandy soil composition can cause rapid drainage but also lead to system instability and shifting.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold mb-2">Causes:</p>
                    <ul className="text-gray-600 space-y-1 mb-3">
                      <li>• Sandy soil composition</li>
                      <li>• Poor system anchoring</li>
                      <li>• Ground shifting</li>
                    </ul>
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Proper system anchoring</li>
                      <li>• Enhanced filtration systems</li>
                      <li>• Regular inspections</li>
                    </ul>
                    <p className="mt-3 text-gray-600"><strong>Estimated Cost:</strong> $1,500-4,000</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-purple-600">Hurricane Damage</h3>
                  <p className="text-gray-600 mb-3">
                    Fort Lauderdale's hurricane season can cause flooding, debris damage, and system component failure.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold mb-2">Causes:</p>
                    <ul className="text-gray-600 space-y-1 mb-3">
                      <li>• Storm surge flooding</li>
                      <li>• Debris impact</li>
                      <li>• Power outages</li>
                    </ul>
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Emergency pumping services</li>
                      <li>• System component replacement</li>
                      <li>• Flood damage assessment</li>
                    </ul>
                    <p className="mt-3 text-gray-600"><strong>Estimated Cost:</strong> $500-3,000</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-green-600">System Aging</h3>
                  <p className="text-gray-600 mb-3">
                    Older septic systems in Fort Lauderdale may not meet current standards and may require upgrades or replacement.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold mb-2">Causes:</p>
                    <ul className="text-gray-600 space-y-1 mb-3">
                      <li>• System age (20+ years)</li>
                      <li>• Outdated technology</li>
                      <li>• Regulatory changes</li>
                    </ul>
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• System modernization</li>
                      <li>• Component upgrades</li>
                      <li>• Complete replacement</li>
                    </ul>
                    <p className="mt-3 text-gray-600"><strong>Estimated Cost:</strong> $5,000-15,000</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-600">Tree Root Intrusion</h3>
                  <p className="text-gray-600 mb-3">
                    Fort Lauderdale's lush vegetation can cause tree roots to infiltrate septic systems, causing blockages and damage.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold mb-2">Causes:</p>
                    <ul className="text-gray-600 space-y-1 mb-3">
                      <li>• Tree root growth</li>
                      <li>• System proximity to trees</li>
                      <li>• Moisture-seeking roots</li>
                    </ul>
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Root barrier installation</li>
                      <li>• Pipe replacement</li>
                      <li>• Tree removal/relocation</li>
                    </ul>
                    <p className="mt-3 text-gray-600"><strong>Estimated Cost:</strong> $800-2,500</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-orange-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Emergency Response in Fort Lauderdale</h3>
              <p className="text-gray-700 mb-4">
                Fort Lauderdale's coastal location and hurricane season require specialized emergency response capabilities. Our team is equipped to handle urgent septic issues that can't wait.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-orange-600">Immediate Actions:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Stop using water immediately</li>
                    <li>• Check for obvious blockages</li>
                    <li>• Move valuables away from affected areas</li>
                    <li>• Call emergency services (954) 555-1234</li>
                    <li>• Document damage for insurance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-orange-600">Storm Preparation:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Pump tank before hurricane season</li>
                    <li>• Secure system components</li>
                    <li>• Clear drainage areas</li>
                    <li>• Have emergency contact ready</li>
                    <li>• Consider backup power options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Serving Fort Lauderdale & Surrounding Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-2">Fort Lauderdale</h3>
                <p className="text-gray-600 text-sm">Downtown, Las Olas, Victoria Park, Coral Ridge, coastal properties</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-2">Pompano Beach</h3>
                <p className="text-gray-600 text-sm">Coastal properties, high water table areas</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-2">Wilton Manors</h3>
                <p className="text-gray-600 text-sm">Residential septic maintenance, older systems</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-2">Plantation</h3>
                <p className="text-gray-600 text-sm">Suburban septic services, newer developments</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-2">Davie</h3>
                <p className="text-gray-600 text-sm">Rural and suburban properties, larger lots</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-2">Hollywood</h3>
                <p className="text-gray-600 text-sm">Coastal septic systems, beachfront properties</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-2">Lauderdale Lakes</h3>
                <p className="text-gray-600 text-sm">Residential communities, established neighborhoods</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-2">Oakland Park</h3>
                <p className="text-gray-600 text-sm">Mixed residential areas, commercial properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Fort Lauderdale Septic Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed septic contractors with comprehensive insurance coverage for your peace of mind.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Same-Day Service</h3>
                <p className="text-gray-600">
                  Emergency septic services available 7 days a week with same-day response for urgent issues.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep knowledge of Fort Lauderdale's unique coastal conditions and Broward County regulations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
                <p className="text-gray-600">
                  100% satisfaction guarantee on all septic services with comprehensive warranties.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Residential & Commercial</h3>
                <p className="text-gray-600">
                  Complete septic services for both residential properties and commercial establishments.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Convenient appointment times including evenings and weekends to fit your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Resource Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Expert Septic Guides for Fort Lauderdale
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Septic Pumping Cost & Frequency</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Complete cost guide and pumping schedules for Fort Lauderdale properties.
                </p>
                <a
                  href="/resources/septic-tank-services/fort-lauderdale/septic-pumping-cost-frequency"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Guide →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Septic Inspection Checklist</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  What inspectors look for in Broward County septic inspections.
                </p>
                <a
                  href="/resources/septic-tank-services/fort-lauderdale/septic-inspection-checklist"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Guide →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-3 text-orange-600">Emergency Septic Backups</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  First-hour emergency actions for septic backups in Fort Lauderdale.
                </p>
                <a
                  href="/resources/septic-tank-services/fort-lauderdale/emergency-septic-backups"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  Read Guide →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Drain Field Problems</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Early warning signs and solutions for Fort Lauderdale drain field issues.
                </p>
                <a
                  href="/resources/septic-tank-services/fort-lauderdale/drain-field-problems-warning-signs"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Guide →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">What Not to Flush</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Complete guide to grease, chemicals, and additives that damage septic systems.
                </p>
                <a
                  href="/resources/septic-tank-services/fort-lauderdale/what-not-to-flush"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Guide →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Permits & Local Rules</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Broward County permit requirements and regulations for septic work.
                </p>
                <a
                  href="/resources/septic-tank-services/fort-lauderdale/permits-local-rules"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Guide →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Septic vs Sewer Conversion</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Pros, cons, and costs of converting from septic to sewer in Fort Lauderdale.
                </p>
                <a
                  href="/resources/septic-tank-services/fort-lauderdale/septic-vs-sewer-conversion"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Guide →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Restaurants on Septic</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Load management and maintenance for Fort Lauderdale restaurants on septic systems.
                </p>
                <a
                  href="/resources/septic-tank-services/fort-lauderdale/restaurants-on-septic"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Guide →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions - Fort Lauderdale Septic Services
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  How often should I pump my septic tank in Fort Lauderdale?
                </h3>
                <p className="text-gray-600">
                  For most Fort Lauderdale homes, septic tanks should be pumped every 3-5 years. However, coastal properties with high water tables may require more frequent pumping every 2-3 years. Factors like household size, water usage, tank size, and proximity to saltwater also affect pumping frequency. Properties with Aerobic Treatment Units (ATUs) may need more frequent maintenance. Our team can assess your specific situation and recommend the optimal pumping schedule.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  What's the cost of septic tank pumping in Fort Lauderdale?
                </h3>
                <p className="text-gray-600">
                  Septic tank pumping in Fort Lauderdale typically costs $300-500 for residential tanks. Commercial properties and larger tanks may cost $500-800. Coastal properties with difficult access or high water tables may have additional charges. We provide free estimates for all services and transparent pricing with no hidden fees.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  Do I need permits for septic work in Fort Lauderdale?
                </h3>
                <p className="text-gray-600">
                  Yes, most septic work in Fort Lauderdale requires permits from the Broward County Health Department. This includes new installations, repairs, and modifications. Our team handles all permit applications and ensures compliance with local regulations. We stay current with all regulatory changes and can guide you through the entire process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  How does Fort Lauderdale's coastal environment affect septic systems?
                </h3>
                <p className="text-gray-600">
                  Fort Lauderdale's coastal location creates unique challenges including high water tables, sandy soil, and potential saltwater intrusion. These conditions require specialized installation techniques, corrosion-resistant materials, and more frequent maintenance than inland systems. Our technicians are specifically trained to work with these coastal conditions and use appropriate techniques and materials.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  What are the signs of septic system problems in Fort Lauderdale?
                </h3>
                <p className="text-gray-600">
                  Common warning signs include slow drains, gurgling sounds, sewage odors, wet spots in the yard, and lush green grass over the drain field. In Fort Lauderdale's coastal environment, high water tables can cause additional issues like system backups during heavy rains. If you notice any of these signs, contact us immediately for an assessment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  Do you offer emergency septic services in Fort Lauderdale?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide 24/7 emergency septic services throughout Fort Lauderdale and surrounding areas. Our emergency response team can handle backups, overflows, and urgent repairs. We understand that septic emergencies can't wait, especially in coastal properties where flooding and storm damage can cause immediate system failures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  How long do septic systems last in Fort Lauderdale?
                </h3>
                <p className="text-gray-600">
                  With proper maintenance, septic systems in Fort Lauderdale can last 20-30 years. However, coastal conditions and high water tables can reduce lifespan. Regular inspections and maintenance help maximize system longevity and prevent costly repairs. Our maintenance programs are specifically designed for Fort Lauderdale's unique conditions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  Can I use additives to maintain my septic system?
                </h3>
                <p className="text-gray-600">
                  Most septic additives are unnecessary and can actually harm your system. Regular pumping and proper maintenance are more effective. Avoid flushing chemicals, grease, or non-biodegradable items. Our team can recommend proper maintenance practices for Fort Lauderdale conditions and help you establish an effective maintenance routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Septic Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Related Septic Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Main Septic Services</h3>
                <p className="text-gray-600 mb-4">
                  Learn about our comprehensive septic services available throughout South Florida.
                </p>
                <a
                  href="/services/septic-tank-services"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View All Services →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Miami Septic Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional septic services for Miami-Dade County properties with specialized coastal expertise.
                </p>
                <a
                  href="/locations/miami/septic-services"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Miami Services →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Boca Raton Septic Services</h3>
                <p className="text-gray-600 mb-4">
                  Expert septic services for Palm Beach County properties including Boca Raton and surrounding areas.
                </p>
                <a
                  href="/locations/boca-raton/septic-services"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Boca Raton Services →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Schedule Your Fort Lauderdale Septic Service?
            </h2>
            <p className="text-xl mb-8">
              Get an instant quote or call us today for professional septic services in Fort Lauderdale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing/instant-quote/septic-tank-services?src=septic_fort-lauderdale_service-page_cta"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Get Instant Quote
              </a>
              <a
                href="tel:+19545551234"
                className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                <Phone className="inline mr-2" size={20} />
                Call (954) 555-1234
              </a>
            </div>
            <div className="mt-12">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop"
                alt="Professional septic tank pumping service in Fort Lauderdale"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
