import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Calendar, CheckCircle, AlertTriangle, DollarSign, Wrench, Droplets, Shield, FileText, HelpCircle, Settings, Zap, Users, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Septic Tank Services - Professional Installation, Pumping & Repair | South Florida",
  description: "Complete septic tank services including installation, pumping, repair, and maintenance. Licensed professionals serving Miami, Boca Raton, and Fort Lauderdale. Same-day service available.",
  keywords: ["septic tank services", "septic pumping", "septic repair", "septic installation", "drain field repair", "septic system maintenance", "septic tank cleaning", "emergency septic service"],
  openGraph: {
    title: "Septic Tank Services - Professional Installation, Pumping & Repair | South Florida",
    description: "Complete septic tank services including installation, pumping, repair, and maintenance. Licensed professionals serving Miami, Boca Raton, and Fort Lauderdale. Same-day service available.",
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
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Septic Tank Services - Professional Installation, Pumping & Repair",
    "description": "Complete septic tank services including installation, pumping, repair, and maintenance. Licensed professionals serving Miami, Boca Raton, and Fort Lauderdale.",
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
      "@id": "https://local-bizz-list.vercel.app/services/septic-tank-services"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Septic Tank Services",
    "description": "Professional septic tank installation, pumping, repair, and maintenance services",
    "provider": {
      "@type": "Organization",
      "name": "LocalBizzList",
      "url": "https://local-bizz-list.vercel.app"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Miami"
      },
      {
        "@type": "City", 
        "name": "Boca Raton"
      },
      {
        "@type": "City",
        "name": "Fort Lauderdale"
      }
    ],
    "serviceType": "Septic Tank Services",
    "offers": {
      "@type": "Offer",
      "description": "Professional septic tank services with same-day availability"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should a septic tank be pumped?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Septic tanks should be pumped every 3-5 years on average, but frequency depends on tank size, household size, and usage patterns. In South Florida's high water table conditions, more frequent pumping may be necessary."
        }
      },
      {
        "@type": "Question",
        "name": "What are the signs of septic system problems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common signs include slow drains, gurgling sounds, sewage odors, wet spots in the yard, lush grass over the drain field, and sewage backups. If you notice any of these signs, contact a professional immediately."
        }
      },
      {
        "@type": "Question",
        "name": "How much does septic tank pumping cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Septic tank pumping typically costs $300-600 depending on tank size, location, and accessibility. Emergency services may cost more. Contact us for a free quote based on your specific situation."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need permits for septic work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most septic work requires permits. Installation, repair, and replacement typically need permits from your local health department. We handle all permit applications and ensure compliance with local regulations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does septic tank installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Septic tank installation typically takes 1-3 days depending on system complexity, soil conditions, and weather. This includes excavation, installation, backfilling, and final inspections."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do in a septic emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In a septic emergency, stop using water immediately, avoid flushing toilets, and call a professional septic service right away. We offer 24/7 emergency services to prevent property damage and health hazards."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use additives to maintain my septic system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While some additives claim to help, regular pumping and proper maintenance are more effective. Avoid harsh chemicals and excessive use of antibacterial products, as they can harm the beneficial bacteria in your system."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my drain field is failing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Signs of drain field failure include standing water or soggy areas, sewage odors, slow drains, and unusually lush vegetation over the field. Early detection is crucial to prevent costly repairs."
        }
      }
    ]
  };

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
          
          {/* Process Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Professional Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">1. Assessment</h4>
                <p className="text-sm text-gray-600">We locate and assess your septic system, checking for accessibility and potential issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">2. Pumping</h4>
                <p className="text-sm text-gray-600">Professional pumping removes all solids and liquids from your tank safely and efficiently.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">3. Inspection</h4>
                <p className="text-sm text-gray-600">Thorough inspection of tank, pipes, and drain field to identify any problems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">4. Report</h4>
                <p className="text-sm text-gray-600">Detailed report with recommendations and maintenance schedule for optimal performance.</p>
              </div>
            </div>
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

      {/* Costs & Frequency */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Septic Service Costs & Frequency</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding septic service costs and maintenance schedules helps you budget effectively and maintain system health.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cost Breakdown */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Cost Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Routine Pumping (1,000-1,500 gal)</span>
                  <span className="text-blue-600 font-bold">$300-450</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Large Tank Pumping (1,500+ gal)</span>
                  <span className="text-blue-600 font-bold">$450-600</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">System Inspection</span>
                  <span className="text-blue-600 font-bold">$150-250</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Emergency Service</span>
                  <span className="text-blue-600 font-bold">$400-800</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Drain Field Repair</span>
                  <span className="text-blue-600 font-bold">$2,000-8,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">New System Installation</span>
                  <span className="text-blue-600 font-bold">$5,000-15,000</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Costs vary based on tank size, accessibility, soil conditions, and local regulations. 
                  Emergency services may include additional fees for after-hours or weekend work.
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
                    <p className="text-gray-600 text-sm">Pump every 4-5 years. Monitor for signs of issues.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Medium Household (3-4 people)</h4>
                    <p className="text-gray-600 text-sm">Pump every 3-4 years. Annual inspection recommended.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Large Household (5+ people)</h4>
                    <p className="text-gray-600 text-sm">Pump every 2-3 years. More frequent monitoring needed.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">High Water Table Areas</h4>
                    <p className="text-gray-600 text-sm">More frequent pumping may be required due to South Florida conditions.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>South Florida Considerations:</strong> High water tables, clay soil, and tropical climate 
                  can affect system performance. Regular maintenance is especially important in our region.
                </p>
              </div>
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

      {/* Local Rules & Permits */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Local Rules & Permits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding local regulations and permit requirements is essential for septic work in South Florida.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Miami-Dade County</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Health Department:</strong> (305) 324-2400</p>
                <p><strong>Permit Required:</strong> All septic work</p>
                <p><strong>Setback Requirements:</strong> 5 ft from property lines</p>
                <p><strong>Soil Testing:</strong> Required for new systems</p>
                <p><strong>Inspection:</strong> Pre and post-installation</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">Palm Beach County</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Health Department:</strong> (561) 840-4500</p>
                <p><strong>Permit Required:</strong> Installation & repair</p>
                <p><strong>Setback Requirements:</strong> 10 ft from wells</p>
                <p><strong>Soil Testing:</strong> Percolation test required</p>
                <p><strong>Inspection:</strong> Final inspection mandatory</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold">Broward County</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Health Department:</strong> (954) 467-4700</p>
                <p><strong>Permit Required:</strong> All septic work</p>
                <p><strong>Setback Requirements:</strong> 15 ft from water lines</p>
                <p><strong>Soil Testing:</strong> Required for new systems</p>
                <p><strong>Inspection:</strong> Multiple inspections required</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h3>
            <div className="grid md:grid-cols-2 gap-6">
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
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Common Violations</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Working without permits</li>
                  <li>• Improper setbacks from property lines</li>
                  <li>• Inadequate soil testing</li>
                  <li>• Missing inspections</li>
                  <li>• Non-compliant system design</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Professional Help:</strong> We handle all permit applications and ensure compliance with local regulations. 
                Our licensed professionals understand the specific requirements for each county and can save you time and avoid costly violations.
              </p>
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

      {/* Common Issues & Fixes */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Issues & Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding common septic system problems helps you identify issues early and prevent costly repairs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold">Drain Field Saturation</h3>
              </div>
              <p className="text-gray-600 mb-4">Standing water or soggy areas over the drain field indicate saturation.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> Overuse, poor soil, high water table</p>
                <p><strong>Solutions:</strong> Reduce water usage, improve drainage, system replacement</p>
                <p><strong>Cost:</strong> $2,000-8,000 for repair/replacement</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold">Sewage Odors</h3>
              </div>
              <p className="text-gray-600 mb-4">Unpleasant smells inside or outside your home indicate system problems.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> Blocked vents, full tank, drain field issues</p>
                <p><strong>Solutions:</strong> Pump tank, clear vents, repair leaks</p>
                <p><strong>Cost:</strong> $300-1,500 depending on cause</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold">Slow Drains</h3>
              </div>
              <p className="text-gray-600 mb-4">Drains that empty slowly or gurgle indicate potential blockages.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> Clogged pipes, full tank, tree roots</p>
                <p><strong>Solutions:</strong> Pump tank, clear pipes, root removal</p>
                <p><strong>Cost:</strong> $200-800 for cleaning/repair</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Sewage Backup</h3>
              </div>
              <p className="text-gray-600 mb-4">Sewage backing up into drains is a serious emergency situation.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> Full tank, blocked pipes, system failure</p>
                <p><strong>Solutions:</strong> Emergency pumping, pipe repair, system replacement</p>
                <p><strong>Cost:</strong> $400-15,000 depending on severity</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">Lush Vegetation</h3>
              </div>
              <p className="text-gray-600 mb-4">Unusually green grass over the drain field indicates system issues.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> Leaking system, nutrient-rich effluent</p>
                <p><strong>Solutions:</strong> System inspection, repair leaks, replacement</p>
                <p><strong>Cost:</strong> $500-10,000 for inspection/repair</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">High Water Bills</h3>
              </div>
              <p className="text-gray-600 mb-4">Unexpected increases in water usage may indicate septic problems.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Causes:</strong> Leaking pipes, running toilets, system inefficiency</p>
                <p><strong>Solutions:</strong> Fix leaks, repair toilets, system optimization</p>
                <p><strong>Cost:</strong> $100-2,000 for repairs</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Response</h3>
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
                <h4 className="font-semibold text-gray-900 mb-2">Prevention Tips</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regular pumping every 3-5 years</li>
                  <li>• Avoid flushing non-biodegradable items</li>
                  <li>• Limit water usage during heavy rain</li>
                  <li>• Keep trees away from system</li>
                  <li>• Schedule annual inspections</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>24/7 Emergency Service:</strong> We provide round-the-clock emergency response for septic system failures. 
                Quick action can prevent property damage and health hazards. Call us immediately for urgent situations.
              </p>
            </div>
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

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about septic tank services, maintenance, and South Florida-specific considerations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should a septic tank be pumped?</h3>
                    <p className="text-gray-600">Septic tanks should be pumped every 3-5 years on average, but frequency depends on tank size, household size, and usage patterns. In South Florida's high water table conditions, more frequent pumping may be necessary.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the signs of septic system problems?</h3>
                    <p className="text-gray-600">Common signs include slow drains, gurgling sounds, sewage odors, wet spots in the yard, lush grass over the drain field, and sewage backups. If you notice any of these signs, contact a professional immediately.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does septic tank pumping cost?</h3>
                    <p className="text-gray-600">Septic tank pumping typically costs $300-600 depending on tank size, location, and accessibility. Emergency services may cost more. Contact us for a free quote based on your specific situation.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need permits for septic work?</h3>
                    <p className="text-gray-600">Yes, most septic work requires permits. Installation, repair, and replacement typically need permits from your local health department. We handle all permit applications and ensure compliance with local regulations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does septic tank installation take?</h3>
                    <p className="text-gray-600">Septic tank installation typically takes 1-3 days depending on system complexity, soil conditions, and weather. This includes excavation, installation, backfilling, and final inspections.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What should I do in a septic emergency?</h3>
                    <p className="text-gray-600">In a septic emergency, stop using water immediately, avoid flushing toilets, and call a professional septic service right away. We offer 24/7 emergency services to prevent property damage and health hazards.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use additives to maintain my septic system?</h3>
                    <p className="text-gray-600">While some additives claim to help, regular pumping and proper maintenance are more effective. Avoid harsh chemicals and excessive use of antibacterial products, as they can harm the beneficial bacteria in your system.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I know if my drain field is failing?</h3>
                    <p className="text-gray-600">Signs of drain field failure include standing water or soggy areas, sewage odors, slow drains, and unusually lush vegetation over the field. Early detection is crucial to prevent costly repairs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Have more questions? Our experts are here to help.</p>
            <Link 
              href="/pricing/instant-quote/septic-tank-services?src=septic_services_faq"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Expert Advice
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