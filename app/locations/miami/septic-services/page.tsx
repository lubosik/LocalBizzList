import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, CheckCircle, AlertTriangle, DollarSign, Phone, Star, Shield, FileText, Wrench, Droplets, Users, Settings, Zap, HelpCircle } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Septic Tank Services Miami - Professional Pumping & Repair | Miami-Dade County",
  description: "Professional septic tank services in Miami-Dade County. Expert pumping, repair, installation & maintenance. Licensed contractors serving Miami, Homestead, Hialeah & surrounding areas. Same-day service available.",
  keywords: ["septic tank services Miami", "septic pumping Miami", "septic repair Miami-Dade", "septic installation Miami", "drain field repair Miami", "emergency septic service Miami", "Miami septic tank pumping", "septic system maintenance Miami"],
  openGraph: {
    title: "Septic Tank Services Miami - Professional Pumping & Repair | Miami-Dade County",
    description: "Professional septic tank services in Miami-Dade County. Expert pumping, repair, installation & maintenance. Licensed contractors serving Miami, Homestead, Hialeah & surrounding areas.",
    url: "https://local-bizz-list.vercel.app/locations/miami/septic-services",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Professional septic tank services in Miami"
      }
    ]
  }
}

export default function MiamiSepticServices() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Septic Tank Services Miami - Professional Pumping & Repair",
    "description": "Professional septic tank services in Miami-Dade County. Expert pumping, repair, installation & maintenance. Licensed contractors serving Miami, Homestead, Hialeah & surrounding areas.",
    "author": {
      "@type": "Organization",
      "name": "LocalBizzList"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LocalBizzList",
      "logo": {
        "@type": "ImageObject",
        "url": "https://local-bizz-list.vercel.app/logo.png"
      }
    },
    "datePublished": "2025-01-10",
    "dateModified": "2025-01-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://local-bizz-list.vercel.app/locations/miami/septic-services"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Septic Tank Services Miami",
    "description": "Professional septic tank services in Miami-Dade County including pumping, repair, installation and maintenance",
    "provider": {
      "@type": "Organization",
      "name": "LocalBizzList",
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
    "offers": {
      "@type": "Offer",
      "description": "Professional septic tank services with same-day availability in Miami"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should I pump my septic tank in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Miami homes need septic pumping every 2-3 years, but this can vary based on tank size, household size, and usage patterns. Miami's high water table and frequent flooding may require more frequent service."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Miami septic systems different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miami's high water table, frequent flooding, and older subdivisions create unique challenges. Systems must be designed to handle these conditions and require specialized maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need permits for septic work in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Miami-Dade County requires permits for new installations, major repairs, and some maintenance work. We handle all permit applications and ensure compliance with local regulations."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if my septic backs up during a storm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stop using water immediately and call for emergency service. During storms, Miami's high water table can overwhelm septic systems, requiring immediate professional attention."
        }
      },
      {
        "@type": "Question",
        "name": "How much does septic pumping cost in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard residential pumping typically costs $250-$350, while commercial services range from $400-$800. Emergency services and larger tanks cost more. We provide transparent pricing with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Can I install a new septic system in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but it requires proper permits, soil testing, and compliance with Miami-Dade County regulations. We handle the entire process from planning to installation and inspection."
        }
      },
      {
        "@type": "Question",
        "name": "What are signs my septic system needs attention?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Slow drains, gurgling sounds, sewage odors, wet spots in the yard, or sewage backups are all warning signs. In Miami's challenging environment, early intervention is crucial."
        }
      },
      {
        "@type": "Question",
        "name": "Do you service all areas of Miami-Dade County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide septic services throughout Miami-Dade County including Miami, Homestead, Hialeah, Coral Gables, and all surrounding communities."
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Septic Tank Services in Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional septic system services for Miami-Dade County's unique challenges
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Miami Septic System Challenges</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Miami's unique environment presents specific challenges for septic systems. Understanding these challenges
              helps us provide better service and prevent costly problems.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Environmental Factors</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">High Water Table</h4>
                    <p className="text-gray-600">Miami's shallow water table (often 2-4 feet below surface) affects drain field performance and requires specialized installation techniques.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frequent Flooding</h4>
                    <p className="text-gray-600">Hurricane season and heavy rains can overwhelm septic systems, requiring emergency pumping and system protection measures.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Clay Soil Conditions</h4>
                    <p className="text-gray-600">Miami's clay-rich soil affects drainage and requires proper system sizing and installation techniques.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Salt Air Corrosion</h4>
                    <p className="text-gray-600">Coastal proximity causes accelerated corrosion of metal components, requiring regular inspection and maintenance.</p>
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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Older Subdivisions</h3>
              <p className="text-gray-600 mb-4">
                Many Miami neighborhoods built before 1980 have aging septic systems that need regular maintenance and upgrades.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Systems installed before modern regulations</li>
                <li>• Smaller tank sizes than current standards</li>
                <li>• Drain fields nearing end of life</li>
                <li>• Outdated materials and construction methods</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Florida Regulations</h3>
              <p className="text-gray-600 mb-4">
                New Florida regulations require nitrogen-reducing systems for new installations and major repairs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• HB 1379 nitrogen-reducing requirements</li>
                <li>• Enhanced treatment systems mandatory</li>
                <li>• Regular inspection requirements</li>
                <li>• Environmental protection measures</li>
              </ul>
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
              Comprehensive septic services tailored to Miami's unique environmental conditions and regulatory requirements
            </p>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Professional Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">1. Assessment</h4>
                <p className="text-sm text-gray-600">We locate and assess your septic system, checking for accessibility and potential issues specific to Miami conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">2. Service</h4>
                <p className="text-sm text-gray-600">Professional service execution using equipment designed for Miami's high water table and soil conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">3. Inspection</h4>
                <p className="text-sm text-gray-600">Thorough inspection of tank, pipes, and drain field to identify any problems and ensure compliance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">4. Report</h4>
                <p className="text-sm text-gray-600">Detailed report with recommendations and maintenance schedule optimized for Miami's environment.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Septic Pumping</h3>
              <p className="text-gray-600 mb-4">Regular pumping to prevent backups and maintain system efficiency in Miami's challenging conditions. More frequent service may be needed due to high water table.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete waste removal</li>
                <li>• Tank inspection</li>
                <li>• System cleaning</li>
                <li>• Miami-specific frequency recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Repairs</h3>
              <p className="text-gray-600 mb-4">24/7 emergency service for septic backups and system failures throughout Miami-Dade County. Critical during hurricane season.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Blockage removal</li>
                <li>• System diagnostics</li>
                <li>• Immediate response</li>
                <li>• Storm damage assessment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Installation</h3>
              <p className="text-gray-600 mb-4">New septic system installation with proper permits and inspections for Miami-Dade County. Includes nitrogen-reducing systems per Florida regulations.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Permit assistance</li>
                <li>• Site evaluation</li>
                <li>• Professional installation</li>
                <li>• Compliance with HB 1379</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
              <p className="text-gray-600 mb-4">Scheduled maintenance to extend system life and prevent issues in Miami's challenging environment. Includes corrosion protection.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regular inspections</li>
                <li>• Preventive maintenance</li>
                <li>• System optimization</li>
                <li>• Salt air protection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Drain Field Repair</h3>
              <p className="text-gray-600 mb-4">Specialized drain field services for Miami's high water table and clay soil conditions. Includes flood damage assessment.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Field assessment</li>
                <li>• Repair and replacement</li>
                <li>• Performance optimization</li>
                <li>• High water table solutions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600 mb-4">Expert consultation for septic system planning and troubleshooting in Miami. Includes regulatory compliance guidance.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• System evaluation</li>
                <li>• Upgrade planning</li>
                <li>• Compliance guidance</li>
                <li>• Storm preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Costs & Frequency Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Miami Septic Service Costs & Frequency</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent pricing and maintenance schedules tailored to Miami's unique environmental conditions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cost Breakdown */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Cost Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Routine Pumping (1,000-1,500 gal)</span>
                  <span className="text-blue-600 font-bold">$250-350</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Large Tank Pumping (1,500+ gal)</span>
                  <span className="text-blue-600 font-bold">$350-500</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">System Inspection</span>
                  <span className="text-blue-600 font-bold">$150-250</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Emergency Service</span>
                  <span className="text-blue-600 font-bold">$400-600</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Drain Field Repair</span>
                  <span className="text-blue-600 font-bold">$2,000-8,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">New System Installation</span>
                  <span className="text-blue-600 font-bold">$5,000-15,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Commercial Services</span>
                  <span className="text-blue-600 font-bold">$500-1,000</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Miami Considerations:</strong> High water table and frequent flooding may require more frequent service.
                  Emergency services during hurricane season may include additional fees.
                </p>
              </div>
            </div>

            {/* Frequency Guide */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Maintenance Schedule</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Small Household (1-2 people)</h4>
                    <p className="text-gray-600 text-sm">Pump every 3-4 years. Monitor for signs of high water table issues.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Medium Household (3-4 people)</h4>
                    <p className="text-gray-600 text-sm">Pump every 2-3 years. Annual inspection recommended for Miami conditions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Large Household (5+ people)</h4>
                    <p className="text-gray-600 text-sm">Pump every 1-2 years. More frequent monitoring needed in Miami.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">High Water Table Areas</h4>
                    <p className="text-gray-600 text-sm">More frequent pumping required due to Miami's shallow water table.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Commercial Properties</h4>
                    <p className="text-gray-600 text-sm">Restaurants: 3-6 months. Offices: 6-12 months. Regular maintenance contracts available.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Miami-Specific Factors:</strong> High water table, clay soil, frequent flooding, and salt air corrosion
                  can affect system performance. Regular maintenance is especially important in our coastal environment.
                </p>
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional septic service process tailored for Miami-Dade County's unique environmental conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Locate & Access</h3>
              <p className="text-gray-600">We locate your septic tank and access lids, ensuring minimal disruption to your property. Specialized equipment for Miami's high water table.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pump & Clean</h3>
              <p className="text-gray-600">Complete waste removal and tank cleaning using professional equipment designed for Miami's challenging conditions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inspect & Test</h3>
              <p className="text-gray-600">Thorough inspection of all components and system performance testing, including flood damage assessment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Report & Recommend</h3>
              <p className="text-gray-600">Detailed report with maintenance recommendations and next service scheduling optimized for Miami's environment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Rules & Permits */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Miami-Dade County Septic Regulations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding local regulations and permit requirements is essential for septic work in Miami-Dade County
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Permits & Inspections</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">New Installations</h4>
                    <p className="text-gray-600 text-sm">Miami-Dade County permits required for all new septic system installations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Major Repairs</h4>
                    <p className="text-gray-600 text-sm">Repairs over $1,000 require permits and inspections</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Property Transfers</h4>
                    <p className="text-gray-600 text-sm">Septic inspection required for real estate transactions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regular Inspections</h4>
                    <p className="text-gray-600 text-sm">Inspections every 3-5 years for system compliance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Compliance Requirements</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Setback Distances</h4>
                    <p className="text-gray-600 text-sm">Minimum 5 feet from property lines, 10 feet from wells</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Soil Testing</h4>
                    <p className="text-gray-600 text-sm">Percolation tests required for new systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Environmental Protection</h4>
                    <p className="text-gray-600 text-sm">Measures to protect groundwater and surface water</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Record Keeping</h4>
                    <p className="text-gray-600 text-sm">Maintenance history documentation required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Miami-Dade County Health Department</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Phone:</strong> (305) 324-2400</p>
                  <p><strong>Address:</strong> 1350 NW 14th St, Miami, FL 33125</p>
                  <p><strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM</p>
                  <p><strong>Website:</strong> miamidade.gov/health</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Permit Process</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Submit application with site plans</li>
                  <li>• Pay permit fees ($200-500 typically)</li>
                  <li>• Schedule soil testing if required</li>
                  <li>• Wait for approval (2-4 weeks)</li>
                  <li>• Schedule inspections during work</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Professional Help:</strong> We handle all permit applications and ensure compliance with Miami-Dade County regulations.
                Our licensed professionals understand the specific requirements for septic work in Miami and can save you time and avoid costly violations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Issues Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Miami Septic Issues & Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding common septic system problems helps you identify issues early and prevent costly repairs in Miami's challenging environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold">Drain Field Saturation</h3>
              </div>
              <p className="text-gray-600 mb-4">High water table in Miami can cause drain fields to become saturated, leading to slow drainage and backups.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> High water table, overuse, poor soil</p>
                <p><strong>Solutions:</strong> Regular pumping, drain field evaluation, system replacement</p>
                <p><strong>Cost:</strong> $2,000-8,000 for repair/replacement</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold">Flood Damage</h3>
              </div>
              <p className="text-gray-600 mb-4">Hurricane season and heavy rains can overwhelm septic systems, causing backups and contamination.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> Storm surge, heavy rainfall, system overload</p>
                <p><strong>Solutions:</strong> Emergency pumping, system protection, flood damage assessment</p>
                <p><strong>Cost:</strong> $400-2,000 for emergency service</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold">Odor Problems</h3>
              </div>
              <p className="text-gray-600 mb-4">High humidity and temperature in Miami can intensify septic odors, especially during summer months.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> High humidity, blocked vents, full tank</p>
                <p><strong>Solutions:</strong> Regular maintenance, proper ventilation, tank pumping</p>
                <p><strong>Cost:</strong> $300-800 for cleaning/repair</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Slow Drains</h3>
              </div>
              <p className="text-gray-600 mb-4">Accumulated solids and high water table can cause slow drainage throughout the system.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> Clogged pipes, full tank, tree roots</p>
                <p><strong>Solutions:</strong> Professional cleaning, pipe repair, root removal</p>
                <p><strong>Cost:</strong> $200-800 for cleaning/repair</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">System Aging</h3>
              </div>
              <p className="text-gray-600 mb-4">Many Miami homes have older septic systems that need upgrades or replacement.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> Old systems, outdated materials, wear and tear</p>
                <p><strong>Solutions:</strong> System assessment, modernization, replacement</p>
                <p><strong>Cost:</strong> $5,000-15,000 for new system</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Tree Root Intrusion</h3>
              </div>
              <p className="text-gray-600 mb-4">Miami's lush vegetation can cause tree roots to invade septic systems and drain fields.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> Tree roots seeking moisture, poor barrier installation</p>
                <p><strong>Solutions:</strong> Root removal, barrier installation, tree management</p>
                <p><strong>Cost:</strong> $500-2,000 for root removal/repair</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Response in Miami</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Immediate Actions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Stop using water immediately</li>
                  <li>• Avoid flushing toilets</li>
                  <li>• Turn off water supply if possible</li>
                  <li>• Move people and pets away from affected areas</li>
                  <li>• Call emergency septic service</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Storm Preparation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pump tank before hurricane season</li>
                  <li>• Secure tank lids and access points</li>
                  <li>• Clear area around system</li>
                  <li>• Have emergency contact numbers ready</li>
                  <li>• Consider backup power for pumps</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>24/7 Emergency Service:</strong> We provide round-the-clock emergency response for septic system failures in Miami.
                Quick action can prevent property damage and health hazards. Call us immediately for urgent situations.
              </p>
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
              Common questions about septic services in Miami-Dade County
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How often should I pump my septic tank in Miami?</h3>
              <p className="text-gray-600">Most Miami homes need septic pumping every 2-3 years, but this can vary based on tank size, household size, and usage patterns. Miami's high water table and frequent flooding may require more frequent service. Commercial properties typically need service every 3-6 months.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What makes Miami septic systems different?</h3>
              <p className="text-gray-600">Miami's high water table (often 2-4 feet below surface), frequent flooding, clay soil conditions, and salt air corrosion create unique challenges. Systems must be designed to handle these conditions and require specialized maintenance techniques.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need permits for septic work in Miami?</h3>
              <p className="text-gray-600">Yes, Miami-Dade County requires permits for new installations, major repairs (over $1,000), and some maintenance work. We handle all permit applications and ensure compliance with local regulations including HB 1379 nitrogen-reducing requirements.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What should I do if my septic backs up during a storm?</h3>
              <p className="text-gray-600">Stop using water immediately and call for emergency service. During storms, Miami's high water table can overwhelm septic systems, requiring immediate professional attention. We provide 24/7 emergency response throughout hurricane season.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does septic pumping cost in Miami?</h3>
              <p className="text-gray-600">Standard residential pumping typically costs $250-$350, while commercial services range from $400-$800. Emergency services and larger tanks cost more. We provide transparent pricing with no hidden fees and offer maintenance contracts for regular service.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I install a new septic system in Miami?</h3>
              <p className="text-gray-600">Yes, but it requires proper permits, soil testing, and compliance with Miami-Dade County regulations. New systems must include nitrogen-reducing technology per Florida HB 1379. We handle the entire process from planning to installation and inspection.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What are signs my septic system needs attention?</h3>
              <p className="text-gray-600">Slow drains, gurgling sounds, sewage odors, wet spots in the yard, or sewage backups are all warning signs. In Miami's challenging environment with high water table and frequent flooding, early intervention is crucial to prevent costly repairs.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you service all areas of Miami-Dade County?</h3>
              <p className="text-gray-600">Yes, we provide septic services throughout Miami-Dade County including Miami, Homestead, Hialeah, Coral Gables, Aventura, North Miami, and all surrounding communities. We understand the unique challenges of each area.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I prepare my septic system for hurricane season?</h3>
              <p className="text-gray-600">Pump your tank before hurricane season, secure tank lids and access points, clear the area around your system, and have emergency contact numbers ready. Consider backup power for pumps if you have a pump system. We offer storm preparation consultations.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the new Florida septic tank law?</h3>
              <p className="text-gray-600">Florida HB 1379 requires nitrogen-reducing systems for new installations and major repairs. These systems help protect Florida's waterways by reducing nitrogen levels in wastewater. We install compliant systems and handle all regulatory requirements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Links Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Miami Septic Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore more septic service information and resources for Miami-Dade County
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/septic-tank-services" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-transparent group-hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">All Septic Services</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive overview of all septic tank services we provide across South Florida.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More →
                </span>
              </div>
            </Link>

            <Link href="/resources/septic-tank-services/miami/septic-pumping-cost-frequency" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-transparent group-hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Pumping Cost & Frequency</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Complete guide to Miami septic pumping costs, schedules, and money-saving tips.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">
                  Read Guide →
                </span>
              </div>
            </Link>

            <Link href="/resources/septic-tank-services/miami/emergency-septic-backups" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-transparent group-hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Emergency Septic Backups</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  What to do during septic emergencies in Miami, including storm-related backups.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">
                  Read Guide →
                </span>
              </div>
            </Link>
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
            Licensed professionals with local expertise and 24/7 emergency response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing/instant-quote/septic-tank-services?src=septic_miami_service-page_cta"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Get Instant Quote
            </Link>
            <Link
              href="/resources/septic-tank-services/miami/drain-field-problems-warning-signs"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Drain Field Guide
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}