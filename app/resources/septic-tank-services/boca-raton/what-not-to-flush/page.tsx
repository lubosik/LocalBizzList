import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, CheckCircle, XCircle, Droplets, Wrench, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: "What Not to Flush — Boca Raton | LocalBizzList",
  description: "Complete guide to what not to flush in septic systems in Boca Raton. Learn about Palm Beach County requirements, coastal environment considerations, and proper disposal methods.",
  keywords: "what not to flush boca raton, septic system care boca raton, palm beach county septic disposal, septic system maintenance boca raton",
  openGraph: {
    title: "What Not to Flush — Boca Raton",
    description: "Complete guide to what not to flush in septic systems in Boca Raton including Palm Beach County requirements and coastal environment considerations.",
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: '2025-01-15T00:00:00.000Z',
    authors: ['LocalBizzList'],
  },
};

export default function BocaRatonWhatNotToFlushPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Not to Flush — Boca Raton",
    "description": "Complete guide to what not to flush in septic systems in Boca Raton including Palm Beach County requirements and coastal environment considerations.",
    "author": {
      "@type": "Organization",
      "name": "LocalBizzList"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LocalBizzList",
      "logo": {
        "@type": "ImageObject",
        "url": "https://localbizzlist.com/logo.png"
      }
    },
    "datePublished": "2025-01-15T00:00:00.000Z",
    "dateModified": "2025-01-15T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://localbizzlist.com/resources/septic-tank-services/boca-raton/what-not-to-flush"
    }
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
        "item": "https://localbizzlist.com/resources/septic-tank-services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Boca Raton What Not to Flush"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I never flush in a septic system in Boca Raton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Never flush grease, oil, chemicals, medications, feminine hygiene products, paper towels, wipes, or any non-biodegradable materials. In Boca Raton's coastal environment, also avoid saltwater and high-salt content items that can accelerate corrosion."
        }
      },
      {
        "@type": "Question",
        "name": "Why are some items more harmful to septic systems in Boca Raton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Boca Raton's high water table, sandy soil, and coastal environment make septic systems more sensitive to harmful materials. Saltwater exposure and high water table conditions can accelerate system failure when improper items are flushed."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use garbage disposals with septic systems in Boca Raton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Garbage disposals can be used but should be limited. In Boca Raton's coastal environment, excessive use can overwhelm systems due to high water table conditions. Consider composting food waste instead."
        }
      },
      {
        "@type": "Question",
        "name": "Are there Palm Beach County regulations about septic system disposal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Palm Beach County has strict regulations about what can be disposed of in septic systems. Violations can result in fines, system failure, and health department violations."
        }
      },
      {
        "@type": "Question",
        "name": "How can I properly dispose of harmful items in Boca Raton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use proper disposal methods including recycling centers, hazardous waste collection, and municipal waste services. Palm Beach County provides specific disposal guidelines for coastal properties."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I flush harmful items in Boca Raton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Harmful items can cause system failure, health hazards, property damage, and Palm Beach County violations. In coastal areas, the impact can be more severe due to environmental factors."
        }
      },
      {
        "@type": "Question",
        "name": "Are there special considerations for coastal septic systems in Boca Raton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, coastal septic systems require extra care due to saltwater exposure, high water tables, and environmental protection requirements. Avoid salt-based products and ensure proper disposal methods."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I educate my family about septic system care in Boca Raton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regular education is important, especially for new family members or guests. In Boca Raton's coastal environment, seasonal reminders about storm preparation and environmental protection are also recommended."
        }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              What Not to Flush — Boca Raton
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Complete guide to what not to flush in septic systems in Boca Raton. Learn about Palm Beach County requirements, coastal environment considerations, and proper disposal methods for septic system care.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Never Flush</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Harmful Chemicals</li>
                  <li>• Non-Biodegradable Items</li>
                  <li>• Personal Care Products</li>
                  <li>• Food Waste</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Boca Raton Specifics</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Coastal Environment</li>
                  <li>• High Water Table</li>
                  <li>• Saltwater Considerations</li>
                  <li>• Proper Disposal Methods</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-12">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c3b6d7d7b8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="What not to flush in septic systems in Boca Raton"
                width={1200}
                height={400}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What Not to Flush in Boca Raton Septic Systems</h2>
              <p className="text-lg text-gray-600 mb-6">
                Proper septic system care is essential for maintaining system health and compliance with Palm Beach County regulations. Boca Raton's coastal environment makes septic systems more sensitive to harmful materials.
              </p>
              <p className="text-gray-600 mb-6">
                The combination of high water tables, sandy soil, and saltwater exposure can accelerate system failure when improper items are flushed. Understanding what not to flush is crucial for system longevity and environmental protection.
              </p>
            </div>

            {/* Never Flush */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <XCircle className="w-6 h-6 mr-3 text-red-600" />
                Never Flush These Items
              </h2>
              
              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Harmful Chemicals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Household Chemicals</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <XCircle className="w-4 h-4 text-red-500 mr-2" />
                        Bleach and disinfectants
                      </li>
                      <li className="flex items-center">
                        <XCircle className="w-4 h-4 text-red-500 mr-2" />
                        Drain cleaners
                      </li>
                      <li className="flex items-center">
                        <XCircle className="w-4 h-4 text-red-500 mr-2" />
                        Pesticides and herbicides
                      </li>
                      <li className="flex items-center">
                        <XCircle className="w-4 h-4 text-red-500 mr-2" />
                        Paint and solvents
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Personal Care Products</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <XCircle className="w-4 h-4 text-red-500 mr-2" />
                        Medications
                      </li>
                      <li className="flex items-center">
                        <XCircle className="w-4 h-4 text-red-500 mr-2" />
                        Feminine hygiene products
                      </li>
                      <li className="flex items-center">
                        <XCircle className="w-4 h-4 text-red-500 mr-2" />
                        Condoms and diapers
                      </li>
                      <li className="flex items-center">
                        <XCircle className="w-4 h-4 text-red-500 mr-2" />
                        Cotton swabs and balls
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Boca Raton Specific Concerns</h3>
                <p className="text-gray-700 mb-4">
                  Additional items to avoid in Boca Raton's coastal environment:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Saltwater Exposure:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Salt-based cleaning products</li>
                      <li>• High-salt content items</li>
                      <li>• Saltwater from cleaning</li>
                      <li>• Salt-based medications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">High Water Table:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Large volumes of water</li>
                      <li>• Excessive flushing</li>
                      <li>• Water-intensive cleaning</li>
                      <li>• Storm water runoff</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Biodegradable Items */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-orange-600" />
                Non-Biodegradable Items
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">Paper Products</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <strong>Paper towels:</strong> Don't break down
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <strong>Wet wipes:</strong> Clog systems
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <strong>Napkins:</strong> Slow decomposition
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <strong>Tissues:</strong> Don't dissolve
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-800">Plastic Items</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-yellow-500 mr-2" />
                      <strong>Plastic bags:</strong> Never decompose
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-yellow-500 mr-2" />
                      <strong>Plastic wrappers:</strong> Clog pipes
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-yellow-500 mr-2" />
                      <strong>Plastic containers:</strong> Damage system
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-yellow-500 mr-2" />
                      <strong>Plastic toys:</strong> System hazards
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Boca Raton Environmental Impact</h3>
                <p className="text-gray-700 mb-4">
                  Non-biodegradable items have increased impact in Boca Raton's coastal environment:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Coastal Water Quality:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Marine life protection</li>
                      <li>• Water quality standards</li>
                      <li>• Environmental compliance</li>
                      <li>• Wildlife habitat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sandy Soil Impact:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Soil contamination</li>
                      <li>• Filtration system damage</li>
                      <li>• Drain field clogging</li>
                      <li>• System efficiency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">High Water Table:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Groundwater contamination</li>
                      <li>• Water table pollution</li>
                      <li>• Saturation issues</li>
                      <li>• System overload</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Waste */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Droplets className="w-6 h-6 mr-3 text-green-600" />
                Food Waste Guidelines
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Safe to Flush</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <strong>Small amounts:</strong> Minimal food waste
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <strong>Biodegradable:</strong> Natural materials
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <strong>Liquid waste:</strong> Water-soluble
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <strong>Organic matter:</strong> Natural decomposition
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-800">Never Flush</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-2" />
                      <strong>Grease and oil:</strong> Clog systems
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-2" />
                      <strong>Large food scraps:</strong> Overload system
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-2" />
                      <strong>Fruit pits:</strong> Don't decompose
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-2" />
                      <strong>Bones and shells:</strong> System damage
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Boca Raton Food Waste Considerations</h3>
                <p className="text-gray-700 mb-4">
                  Special considerations for food waste in Boca Raton's coastal environment:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Composting Options:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Backyard composting</li>
                      <li>• Community programs</li>
                      <li>• Municipal collection</li>
                      <li>• Organic waste reduction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Garbage Disposal:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Limited use recommended</li>
                      <li>• Water conservation</li>
                      <li>• System load management</li>
                      <li>• High water table</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Impact:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Coastal water quality</li>
                      <li>• Wildlife protection</li>
                      <li>• Storm water management</li>
                      <li>• Environmental compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Proper Disposal Methods */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Wrench className="w-6 h-6 mr-3 text-blue-600" />
                Proper Disposal Methods
              </h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Disposal Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Recycling Centers</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Paper products</li>
                      <li>• Plastic containers</li>
                      <li>• Glass bottles</li>
                      <li>• Metal items</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Hazardous Waste</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Chemicals and solvents</li>
                      <li>• Paints and stains</li>
                      <li>• Medications</li>
                      <li>• Batteries</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Boca Raton Disposal Resources</h3>
                <p className="text-gray-700 mb-4">
                  Local disposal options for Boca Raton residents:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Municipal Services:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Curbside collection</li>
                      <li>• Bulk waste pickup</li>
                      <li>• Hazardous waste days</li>
                      <li>• Recycling programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Drop-off Centers:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Recycling facilities</li>
                      <li>• Hazardous waste sites</li>
                      <li>• Composting centers</li>
                      <li>• Specialized disposal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Programs:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Coastal protection</li>
                      <li>• Water quality programs</li>
                      <li>• Wildlife conservation</li>
                      <li>• Environmental education</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Palm Beach County Requirements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-purple-600" />
                Palm Beach County Requirements
              </h2>
              
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Compliance Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Health Department</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Proper disposal practices</li>
                      <li>• System maintenance records</li>
                      <li>• Compliance monitoring</li>
                      <li>• Violation reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Environmental Protection</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Water quality standards</li>
                      <li>• Coastal protection measures</li>
                      <li>• Wildlife habitat protection</li>
                      <li>• Stormwater management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Boca Raton Compliance Factors</h3>
                <p className="text-gray-700 mb-4">
                  Additional compliance considerations for Boca Raton properties:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Coastal Regulations:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Environmental impact</li>
                      <li>• Saltwater protection</li>
                      <li>• Storm surge compliance</li>
                      <li>• Coastal water quality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">High Water Table:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Groundwater protection</li>
                      <li>• Saturation prevention</li>
                      <li>• Water quality standards</li>
                      <li>• Environmental compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sandy Soil:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Soil contamination prevention</li>
                      <li>• Filtration protection</li>
                      <li>• Drain field preservation</li>
                      <li>• System efficiency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">What should I never flush in a septic system in Boca Raton?</h3>
                  <p className="text-gray-700">
                    Never flush grease, oil, chemicals, medications, feminine hygiene products, paper towels, wipes, or any non-biodegradable materials. In Boca Raton's coastal environment, also avoid saltwater and high-salt content items that can accelerate corrosion.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Why are some items more harmful to septic systems in Boca Raton?</h3>
                  <p className="text-gray-700">
                    Boca Raton's high water table, sandy soil, and coastal environment make septic systems more sensitive to harmful materials. Saltwater exposure and high water table conditions can accelerate system failure when improper items are flushed.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Can I use garbage disposals with septic systems in Boca Raton?</h3>
                  <p className="text-gray-700">
                    Garbage disposals can be used but should be limited. In Boca Raton's coastal environment, excessive use can overwhelm systems due to high water table conditions. Consider composting food waste instead.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Are there Palm Beach County regulations about septic system disposal?</h3>
                  <p className="text-gray-700">
                    Yes, Palm Beach County has strict regulations about what can be disposed of in septic systems. Violations can result in fines, system failure, and health department violations.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">How can I properly dispose of harmful items in Boca Raton?</h3>
                  <p className="text-gray-700">
                    Use proper disposal methods including recycling centers, hazardous waste collection, and municipal waste services. Palm Beach County provides specific disposal guidelines for coastal properties.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">What happens if I flush harmful items in Boca Raton?</h3>
                  <p className="text-gray-700">
                    Harmful items can cause system failure, health hazards, property damage, and Palm Beach County violations. In coastal areas, the impact can be more severe due to environmental factors.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Are there special considerations for coastal septic systems in Boca Raton?</h3>
                  <p className="text-gray-700">
                    Yes, coastal septic systems require extra care due to saltwater exposure, high water tables, and environmental protection requirements. Avoid salt-based products and ensure proper disposal methods.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">How often should I educate my family about septic system care in Boca Raton?</h3>
                  <p className="text-gray-700">
                    Regular education is important, especially for new family members or guests. In Boca Raton's coastal environment, seasonal reminders about storm preparation and environmental protection are also recommended.
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
                  href="/resources/septic-tank-services/boca-raton/septic-pumping-cost-frequency"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">Septic Pumping Cost & Frequency</h4>
                  <p className="text-sm text-gray-600">Pumping requirements and costs for Boca Raton properties</p>
                </Link>

                <Link
                  href="/resources/septic-tank-services/boca-raton/drain-field-problems-warning-signs"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">Drain Field Problems</h4>
                  <p className="text-sm text-gray-600">Warning signs and prevention for Boca Raton properties</p>
                </Link>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Need Septic System Care in Boca Raton?</h2>
              <p className="text-xl mb-6">
                Our licensed contractors can help you maintain your septic system properly and provide guidance on Boca Raton's coastal environment requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/pricing/instant-quote/septic-tank-services?src=septic_boca-raton_what-not-to-flush_mid"
                  className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                >
                  Get Maintenance Quote
                </a>
                <a
                  href="tel:+15615551234"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                >
                  Call (561) 555-1234
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
