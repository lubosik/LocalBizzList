import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { XCircle, AlertTriangle, Droplets, Shield, CheckCircle, Clock, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "What Not to Flush — Fort Lauderdale Septic System Guide | LocalBizzList",
  description: "Complete guide to what not to flush in Fort Lauderdale septic systems. Learn about harmful items, coastal environment considerations, and proper waste disposal for Broward County properties.",
  keywords: "what not to flush fort lauderdale, septic system do not flush fort lauderdale, septic tank maintenance fort lauderdale, broward county septic care",
  openGraph: {
    title: "What Not to Flush — Fort Lauderdale Septic System Guide",
    description: "Complete guide to what not to flush in Fort Lauderdale septic systems including harmful items and coastal environment considerations.",
    type: "article",
  },
};

export default function FortLauderdaleWhatNotToFlushPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Not to Flush — Fort Lauderdale Septic System Guide",
    "description": "Complete guide to what not to flush in Fort Lauderdale septic systems including harmful items and coastal environment considerations.",
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
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://localbizzlist.com/resources/septic-tank-services/fort-lauderdale/what-not-to-flush"
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
        "name": "Fort Lauderdale Flush Guide"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What items should never be flushed in Fort Lauderdale septic systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Never flush wipes, feminine hygiene products, paper towels, grease, chemicals, medications, coffee grounds, eggshells, or any non-biodegradable items. Coastal properties should also avoid salt-based products and harsh chemicals that can damage systems."
        }
      },
      {
        "@type": "Question",
        "name": "Why are coastal septic systems more sensitive to improper flushing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coastal septic systems in Fort Lauderdale face additional challenges including high water table, saltwater intrusion, and environmental regulations. Improper flushing can exacerbate these issues, leading to system failure and environmental damage."
        }
      },
      {
        "@type": "Question",
        "name": "Can I flush biodegradable wipes in Fort Lauderdale septic systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, even biodegradable wipes should not be flushed in septic systems. They don't break down quickly enough and can cause clogs, especially in coastal systems with high water table and limited treatment capacity."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I flush harmful items in my Fort Lauderdale septic system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flushing harmful items can cause clogs, system backups, drain field failure, environmental contamination, and expensive repairs. Coastal properties may face additional regulatory violations and environmental damage."
        }
      },
      {
        "@type": "Question",
        "name": "Are there special considerations for commercial properties in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, commercial properties have higher usage and stricter environmental regulations. They should implement employee training, proper disposal procedures, and regular maintenance to prevent system damage and compliance violations."
        }
      },
      {
        "@type": "Question",
        "name": "How can I educate my family about proper septic care in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Create clear guidelines, post reminders near toilets, provide proper disposal containers, explain coastal environmental impact, and establish regular maintenance schedules to protect your Fort Lauderdale septic system."
        }
      },
      {
        "@type": "Question",
        "name": "What are the environmental consequences of improper flushing in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Improper flushing can contaminate groundwater, damage coastal ecosystems, violate environmental regulations, harm marine life, and create public health risks in Fort Lauderdale's sensitive coastal environment."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use septic-safe products in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, use septic-safe cleaning products, toilet paper, and personal care items. Avoid harsh chemicals, antibacterial products, and salt-based cleaners that can damage coastal septic systems and harm the environment."
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
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              What Not to Flush — Fort Lauderdale Septic System Guide
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Complete guide to what not to flush in Fort Lauderdale septic systems. Learn about harmful items, coastal environment considerations, and proper waste disposal for Broward County properties.
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
                  <li>• Personal Care Items</li>
                  <li>• Household Products</li>
                  <li>• Food & Kitchen Waste</li>
                  <li>• Chemicals & Medications</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fort Lauderdale Specific</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Coastal Considerations</li>
                  <li>• Environmental Impact</li>
                  <li>• Commercial Properties</li>
                  <li>• Proper Disposal</li>
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
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Protecting Your Fort Lauderdale Septic System</h2>
              <p className="text-lg text-gray-600 mb-6">
                Proper waste disposal is crucial for Fort Lauderdale septic systems, especially given the coastal environment's unique challenges. Understanding what not to flush helps prevent costly repairs and environmental damage.
              </p>
              <p className="text-gray-600 mb-6">
                This comprehensive guide covers harmful items, coastal-specific considerations, and proper disposal methods to keep your Fort Lauderdale septic system functioning optimally and protect Broward County's coastal environment.
              </p>
            </div>

            {/* Never Flush Categories */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <XCircle className="w-6 h-6 mr-3 text-red-600" />
                Items Never to Flush
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-800">Personal Care Items</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-2" />
                      <strong>Wipes:</strong> Baby wipes, cleaning wipes, makeup wipes
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-2" />
                      <strong>Feminine products:</strong> Tampons, pads, liners
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-2" />
                      <strong>Cotton products:</strong> Cotton balls, swabs, pads
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-2" />
                      <strong>Dental floss:</strong> Can wrap around components
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">Household Products</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <strong>Paper products:</strong> Paper towels, napkins, tissues
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <strong>Plastic items:</strong> Condoms, wrappers, bags
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <strong>Hair:</strong> Can cause clogs and tangles
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <strong>Bandages:</strong> Adhesive can stick to pipes
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-800">Food & Kitchen Waste</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-yellow-500 mr-2" />
                      <strong>Grease & oil:</strong> Solidifies and clogs pipes
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-yellow-500 mr-2" />
                      <strong>Food scraps:</strong> Coffee grounds, eggshells, peels
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-yellow-500 mr-2" />
                      <strong>Dairy products:</strong> Can disrupt bacterial balance
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-yellow-500 mr-2" />
                      <strong>Meat scraps:</strong> Attract pests and cause odors
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">Chemicals & Medications</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <strong>Medications:</strong> Antibiotics, painkillers, vitamins
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <strong>Cleaning chemicals:</strong> Bleach, drain cleaners
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <strong>Pesticides:</strong> Can kill beneficial bacteria
                    </li>
                    <li className="flex items-center">
                      <XCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <strong>Paint & solvents:</strong> Toxic to system bacteria
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fort Lauderdale Specific Considerations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                Fort Lauderdale Coastal Considerations
              </h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Coastal Environment Impact</h3>
                <p className="text-gray-700 mb-4">
                  Fort Lauderdale's coastal environment makes septic systems more vulnerable to damage from improper flushing:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">High Water Table:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Reduced treatment capacity</li>
                      <li>• Faster contamination spread</li>
                      <li>• Limited dilution effect</li>
                      <li>• Groundwater pollution risk</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Saltwater Intrusion:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Corrosion of system components</li>
                      <li>• Reduced bacterial activity</li>
                      <li>• Increased maintenance needs</li>
                      <li>• Environmental damage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Additional Coastal Restrictions</h3>
                <p className="text-gray-700 mb-4">
                  Fort Lauderdale coastal properties should avoid additional items:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Salt-Based Products:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Salt-based cleaners</li>
                      <li>• Water softener discharge</li>
                      <li>• Saltwater aquarium waste</li>
                      <li>• Salt-based medications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Marine Contaminants:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Boat cleaning chemicals</li>
                      <li>• Marine paint residues</li>
                      <li>• Saltwater pool discharge</li>
                      <li>• Coastal debris</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Hazards:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Oil and fuel products</li>
                      <li>• Antifreeze and coolants</li>
                      <li>• Pesticides and herbicides</li>
                      <li>• Heavy metal products</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Consequences */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
                Consequences of Improper Flushing
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-800">System Damage</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      Pipe clogs and blockages
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      Pump system failure
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      Drain field saturation
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      Bacterial imbalance
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">Environmental Impact</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2" />
                      Groundwater contamination
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2" />
                      Coastal ecosystem damage
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2" />
                      Marine life harm
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2" />
                      Public health risks
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Fort Lauderdale Specific Consequences</h3>
                <p className="text-gray-700 mb-4">
                  Additional consequences for Fort Lauderdale coastal properties:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Regulatory Violations:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Broward County fines</li>
                      <li>• Environmental penalties</li>
                      <li>• Coastal zone violations</li>
                      <li>• Permit revocation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Property Impact:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Reduced property value</li>
                      <li>• Insurance issues</li>
                      <li>• Sale complications</li>
                      <li>• Maintenance costs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Community Impact:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Neighborhood contamination</li>
                      <li>• Shared system damage</li>
                      <li>• Community health risks</li>
                      <li>• Environmental liability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Considerations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-green-600" />
                Commercial Property Considerations
              </h2>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Higher Risk Factors</h3>
                <p className="text-gray-700 mb-4">
                  Commercial properties in Fort Lauderdale face additional challenges:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Increased Usage:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Higher volume of waste</li>
                      <li>• More frequent flushing</li>
                      <li>• Multiple users</li>
                      <li>• Extended hours</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Stricter Regulations:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Environmental compliance</li>
                      <li>• Regular inspections</li>
                      <li>• Documentation requirements</li>
                      <li>• Penalty enforcement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Commercial Prevention Strategies</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Employee Training:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Proper disposal education</li>
                      <li>• System care training</li>
                      <li>• Environmental awareness</li>
                      <li>• Regular updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Facility Management:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Clear signage</li>
                      <li>• Proper disposal containers</li>
                      <li>• Regular maintenance</li>
                      <li>• Monitoring systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compliance Programs:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Environmental audits</li>
                      <li>• Documentation systems</li>
                      <li>• Inspection schedules</li>
                      <li>• Corrective actions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Proper Disposal */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                Proper Disposal Methods
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Safe Disposal Options</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <strong>Trash disposal:</strong> Non-biodegradable items
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <strong>Recycling:</strong> Appropriate recyclable items
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <strong>Hazardous waste:</strong> Special collection programs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <strong>Composting:</strong> Organic kitchen waste
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Fort Lauderdale Resources</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <strong>Broward County:</strong> Hazardous waste collection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <strong>Medication disposal:</strong> Pharmacy programs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <strong>Oil disposal:</strong> Auto parts stores
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <strong>Electronic waste:</strong> Recycling centers
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Disposal Guide</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left font-semibold">Item</th>
                        <th className="px-4 py-2 text-left font-semibold">Proper Disposal</th>
                        <th className="px-4 py-2 text-left font-semibold">Fort Lauderdale Location</th>
                        <th className="px-4 py-2 text-left font-semibold">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b">Wipes & Hygiene Products</td>
                        <td className="px-4 py-2 border-b">Trash</td>
                        <td className="px-4 py-2 border-b">Regular pickup</td>
                        <td className="px-4 py-2 border-b">Free</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Medications</td>
                        <td className="px-4 py-2 border-b">Pharmacy disposal</td>
                        <td className="px-4 py-2 border-b">Local pharmacies</td>
                        <td className="px-4 py-2 border-b">Free</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Cooking Oil</td>
                        <td className="px-4 py-2 border-b">Recycling center</td>
                        <td className="px-4 py-2 border-b">Broward County facilities</td>
                        <td className="px-4 py-2 border-b">Free</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Chemicals</td>
                        <td className="px-4 py-2 border-b">Hazardous waste</td>
                        <td className="px-4 py-2 border-b">County collection</td>
                        <td className="px-4 py-2 border-b">Free</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Electronics</td>
                        <td className="px-4 py-2 border-b">E-waste recycling</td>
                        <td className="px-4 py-2 border-b">Recycling centers</td>
                        <td className="px-4 py-2 border-b">Free</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Prevention Tips */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-purple-600" />
                Prevention Tips
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">Family Education</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-purple-500 mr-2" />
                      Create clear guidelines
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-purple-500 mr-2" />
                      Post reminders near toilets
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-purple-500 mr-2" />
                      Provide proper disposal containers
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-purple-500 mr-2" />
                      Explain environmental impact
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">System Maintenance</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-500 mr-2" />
                      Regular pumping schedule
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-500 mr-2" />
                      Annual inspections
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-500 mr-2" />
                      Monitor system performance
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-500 mr-2" />
                      Address issues promptly
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Fort Lauderdale Specific Prevention</h3>
                <p className="text-gray-700 mb-4">
                  Additional prevention measures for Fort Lauderdale coastal properties:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Protection:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Use septic-safe products</li>
                      <li>• Avoid salt-based cleaners</li>
                      <li>• Minimize chemical use</li>
                      <li>• Protect coastal ecosystems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Storm Preparedness:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Secure disposal containers</li>
                      <li>• Prevent storm contamination</li>
                      <li>• Protect system components</li>
                      <li>• Emergency procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compliance:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Follow county regulations</li>
                      <li>• Maintain documentation</li>
                      <li>• Regular inspections</li>
                      <li>• Environmental monitoring</li>
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
                  <h3 className="text-lg font-semibold mb-3">What items should never be flushed in Fort Lauderdale septic systems?</h3>
                  <p className="text-gray-700">
                    Never flush wipes, feminine hygiene products, paper towels, grease, chemicals, medications, coffee grounds, eggshells, or any non-biodegradable items. Coastal properties should also avoid salt-based products and harsh chemicals that can damage systems.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Why are coastal septic systems more sensitive to improper flushing?</h3>
                  <p className="text-gray-700">
                    Coastal septic systems in Fort Lauderdale face additional challenges including high water table, saltwater intrusion, and environmental regulations. Improper flushing can exacerbate these issues, leading to system failure and environmental damage.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Can I flush biodegradable wipes in Fort Lauderdale septic systems?</h3>
                  <p className="text-gray-700">
                    No, even biodegradable wipes should not be flushed in septic systems. They don't break down quickly enough and can cause clogs, especially in coastal systems with high water table and limited treatment capacity.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">What happens if I flush harmful items in my Fort Lauderdale septic system?</h3>
                  <p className="text-gray-700">
                    Flushing harmful items can cause clogs, system backups, drain field failure, environmental contamination, and expensive repairs. Coastal properties may face additional regulatory violations and environmental damage.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Are there special considerations for commercial properties in Fort Lauderdale?</h3>
                  <p className="text-gray-700">
                    Yes, commercial properties have higher usage and stricter environmental regulations. They should implement employee training, proper disposal procedures, and regular maintenance to prevent system damage and compliance violations.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">How can I educate my family about proper septic care in Fort Lauderdale?</h3>
                  <p className="text-gray-700">
                    Create clear guidelines, post reminders near toilets, provide proper disposal containers, explain coastal environmental impact, and establish regular maintenance schedules to protect your Fort Lauderdale septic system.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">What are the environmental consequences of improper flushing in Fort Lauderdale?</h3>
                  <p className="text-gray-700">
                    Improper flushing can contaminate groundwater, damage coastal ecosystems, violate environmental regulations, harm marine life, and create public health risks in Fort Lauderdale's sensitive coastal environment.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Should I use septic-safe products in Fort Lauderdale?</h3>
                  <p className="text-gray-700">
                    Yes, use septic-safe cleaning products, toilet paper, and personal care items. Avoid harsh chemicals, antibacterial products, and salt-based cleaners that can damage coastal septic systems and harm the environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help with Septic System Care in Fort Lauderdale?</h2>
              <p className="text-xl mb-6">
                Our experienced team can help you maintain your Fort Lauderdale septic system properly, ensuring optimal performance and environmental protection for your coastal property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/pricing/instant-quote/septic-tank-services?src=ftl-what-not-flush-mid"
                  className="btn-primary bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4"
                >
                  Get Instant Quote
                </a>
                <a
                  href="tel:+19545551234"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4"
                >
                  Call (954) 555-1234
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
