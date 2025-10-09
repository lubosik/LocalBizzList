import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, Shield, AlertTriangle, CheckCircle, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Permits & Local Rules for Septic Work — Fort Lauderdale | LocalBizzList",
  description: "Complete guide to permits and local rules for septic work in Fort Lauderdale. Learn about Broward County requirements, coastal environment regulations, and compliance procedures.",
  keywords: "septic permits fort lauderdale, broward county septic permits, septic work permits fort lauderdale, septic regulations fort lauderdale",
  openGraph: {
    title: "Permits & Local Rules for Septic Work — Fort Lauderdale",
    description: "Complete guide to permits and local rules for septic work in Fort Lauderdale including Broward County requirements and coastal environment regulations.",
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: '2025-01-15T00:00:00.000Z',
    authors: ['LocalBizzList'],
  },
};

export default function FortLauderdaleSepticPermitsRulesPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Permits & Local Rules for Septic Work — Fort Lauderdale",
    "description": "Complete guide to permits and local rules for septic work in Fort Lauderdale including Broward County requirements and coastal environment regulations.",
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
      "@id": "https://localbizzlist.com/resources/septic-tank-services/fort-lauderdale/permits-local-rules"
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
        "name": "Fort Lauderdale Permits & Rules"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What permits are required for septic work in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Broward County requires permits for septic system installation, repair, replacement, and major modifications. Emergency repairs may have expedited permit processes, but all work must comply with county health department regulations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get a septic permit in Broward County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard septic permits in Broward County typically take 2-4 weeks for approval. Expedited permits for emergencies may be processed in 1-2 weeks. Complex projects or coastal properties may require additional review time."
        }
      },
      {
        "@type": "Question",
        "name": "Are there special requirements for coastal septic systems in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, coastal septic systems in Fort Lauderdale must meet additional requirements including saltwater-resistant materials, elevated design for high water tables, storm surge protection, and enhanced environmental protection measures."
        }
      },
      {
        "@type": "Question",
        "name": "Who can apply for septic permits in Broward County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Septic permits must be applied for by licensed septic contractors or property owners. Contractors must be licensed by the state and registered with Broward County. Property owners can apply for their own permits but must use licensed contractors for the work."
        }
      },
      {
        "@type": "Question",
        "name": "What are the costs for septic permits in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Septic permit costs in Broward County range from $150-500 depending on the type of work. Installation permits cost more than repair permits. Additional fees may apply for coastal properties, environmental reviews, or expedited processing."
        }
      },
      {
        "@type": "Question",
        "name": "Are there environmental regulations for septic systems in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Fort Lauderdale septic systems must comply with environmental protection regulations including water quality standards, setback requirements from water bodies, proper disposal procedures, and protection of sensitive coastal ecosystems."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I work on my septic system without a permit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Working without required permits can result in fines, stop-work orders, required system removal, and legal action. Unpermitted work may also void insurance coverage and create problems when selling the property."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need permits for septic system maintenance in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Routine maintenance like pumping and minor repairs typically don't require permits. However, major repairs, component replacement, or system modifications require permits. When in doubt, consult with Broward County Health Department."
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Permits & Local Rules for Septic Work — Fort Lauderdale
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Complete guide to permits and local rules for septic work in Fort Lauderdale. Learn about Broward County requirements, coastal environment regulations, and compliance procedures.
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
                <h3 className="font-semibold mb-2">Permit Requirements</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Types of Permits</li>
                  <li>• Application Process</li>
                  <li>• Required Documentation</li>
                  <li>• Approval Timeline</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fort Lauderdale Specifics</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Broward County Rules</li>
                  <li>• Coastal Regulations</li>
                  <li>• Environmental Protection</li>
                  <li>• Compliance Procedures</li>
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
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Permits and local rules for septic work in Fort Lauderdale"
                width={1200}
                height={400}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Understanding Septic Permits in Fort Lauderdale</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fort Lauderdale septic work is regulated by Broward County Health Department, with additional requirements for coastal properties. Understanding permit requirements and local rules is essential for legal compliance and system performance.
              </p>
              <p className="text-gray-600 mb-6">
                This comprehensive guide covers all permit requirements, application procedures, and Fort Lauderdale-specific regulations for septic system work, including coastal environment considerations and environmental protection requirements.
              </p>
            </div>

            {/* Types of Permits */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Types of Septic Permits
              </h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Permit Categories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Installation Permits</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        New septic system installation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        System replacement
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Major system modifications
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Drain field expansion
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Repair Permits</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Tank repair or replacement
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Drain field repair
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Pump system installation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Component replacement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Fort Lauderdale Specific Permit Requirements</h3>
                <p className="text-gray-700 mb-4">
                  Coastal properties in Fort Lauderdale may require additional permits and approvals:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Coastal Considerations:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Environmental impact assessment</li>
                      <li>• Storm surge protection plans</li>
                      <li>• Saltwater intrusion mitigation</li>
                      <li>• High water table design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Additional Approvals:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Water management district</li>
                      <li>• Environmental protection agency</li>
                      <li>• Coastal zone management</li>
                      <li>• Flood zone compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-green-600" />
                Application Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-green-600">Step 1: Preparation</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Site survey and assessment</li>
                    <li>• Soil testing and analysis</li>
                    <li>• System design plans</li>
                    <li>• Contractor selection</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Step 2: Application</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Complete permit application</li>
                    <li>• Submit required documents</li>
                    <li>• Pay permit fees</li>
                    <li>• Schedule inspections</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-purple-600">Step 3: Approval</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Review and approval</li>
                    <li>• Permit issuance</li>
                    <li>• Work commencement</li>
                    <li>• Final inspection</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Broward County Application Timeline</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left font-semibold">Permit Type</th>
                        <th className="px-4 py-2 text-left font-semibold">Processing Time</th>
                        <th className="px-4 py-2 text-left font-semibold">Fort Lauderdale Factors</th>
                        <th className="px-4 py-2 text-left font-semibold">Cost Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b">Installation</td>
                        <td className="px-4 py-2 border-b">3-4 weeks</td>
                        <td className="px-4 py-2 border-b">Coastal review required</td>
                        <td className="px-4 py-2 border-b">$300-500</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Repair</td>
                        <td className="px-4 py-2 border-b">2-3 weeks</td>
                        <td className="px-4 py-2 border-b">Environmental assessment</td>
                        <td className="px-4 py-2 border-b">$150-300</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Emergency</td>
                        <td className="px-4 py-2 border-b">1-2 weeks</td>
                        <td className="px-4 py-2 border-b">Expedited processing</td>
                        <td className="px-4 py-2 border-b">$200-400</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Modification</td>
                        <td className="px-4 py-2 border-b">2-4 weeks</td>
                        <td className="px-4 py-2 border-b">Design review required</td>
                        <td className="px-4 py-2 border-b">$200-400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Required Documentation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-purple-600" />
                Required Documentation
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">Standard Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <strong>Site plan:</strong> Property survey and layout
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <strong>Soil test:</strong> Percolation and soil analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <strong>System design:</strong> Engineering plans and specifications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <strong>Contractor license:</strong> Licensed contractor information
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Fort Lauderdale Additional Requirements</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <strong>Environmental assessment:</strong> Coastal impact analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <strong>Flood zone compliance:</strong> FEMA flood zone documentation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <strong>Water table analysis:</strong> Groundwater level assessment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <strong>Storm protection:</strong> Hurricane and storm surge plans
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Coastal Environment Documentation</h3>
                <p className="text-gray-700 mb-4">
                  Fort Lauderdale's coastal environment requires additional documentation:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Impact:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Water quality assessment</li>
                      <li>• Ecosystem impact study</li>
                      <li>• Wildlife protection plan</li>
                      <li>• Coastal erosion analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Specifications:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Saltwater-resistant materials</li>
                      <li>• Corrosion protection design</li>
                      <li>• Elevated system plans</li>
                      <li>• Enhanced filtration systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compliance Certificates:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Environmental permits</li>
                      <li>• Water management approval</li>
                      <li>• Coastal zone compliance</li>
                      <li>• Building code certification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Broward County Rules */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-red-600" />
                Broward County Rules & Regulations
              </h2>
              
              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Key Regulations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Setback Requirements</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        <strong>Water bodies:</strong> 50 feet minimum
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        <strong>Property lines:</strong> 10 feet minimum
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        <strong>Wells:</strong> 100 feet minimum
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        <strong>Buildings:</strong> 5 feet minimum
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">System Requirements</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        <strong>Tank size:</strong> Minimum 1,000 gallons
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        <strong>Drain field:</strong> Proper sizing required
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        <strong>Materials:</strong> Approved materials only
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        <strong>Installation:</strong> Licensed contractor required
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Fort Lauderdale Specific Rules</h3>
                <p className="text-gray-700 mb-4">
                  Additional rules apply to Fort Lauderdale's coastal environment:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Coastal Protection:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Enhanced setback requirements</li>
                      <li>• Saltwater intrusion protection</li>
                      <li>• Storm surge mitigation</li>
                      <li>• Erosion control measures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Compliance:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Water quality monitoring</li>
                      <li>• Ecosystem protection</li>
                      <li>• Wildlife habitat preservation</li>
                      <li>• Coastal zone management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Regulations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-green-600" />
                Environmental Regulations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Water Quality Protection</h3>
                  <p className="text-gray-700 mb-4">
                    Fort Lauderdale septic systems must protect water quality in coastal environments.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Nutrient reduction:</strong> Minimize nitrogen and phosphorus</li>
                    <li>• <strong>Pathogen control:</strong> Prevent bacterial contamination</li>
                    <li>• <strong>Chemical filtration:</strong> Remove harmful substances</li>
                    <li>• <strong>Monitoring requirements:</strong> Regular water quality testing</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Ecosystem Protection</h3>
                  <p className="text-gray-700 mb-4">
                    Coastal ecosystems require special protection from septic system impacts.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Mangrove protection:</strong> Preserve coastal vegetation</li>
                    <li>• <strong>Wildlife habitat:</strong> Protect animal habitats</li>
                    <li>• <strong>Erosion control:</strong> Prevent soil loss</li>
                    <li>• <strong>Biodiversity:</strong> Maintain ecosystem diversity</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Compliance Requirements</h3>
                <p className="text-gray-700 mb-4">
                  Fort Lauderdale septic systems must meet comprehensive environmental standards:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Design Standards:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Enhanced treatment systems</li>
                      <li>• Advanced filtration</li>
                      <li>• Nutrient removal</li>
                      <li>• Pathogen reduction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Monitoring:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Regular inspections</li>
                      <li>• Water quality testing</li>
                      <li>• Performance monitoring</li>
                      <li>• Compliance reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Maintenance:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Professional service</li>
                      <li>• Record keeping</li>
                      <li>• Component replacement</li>
                      <li>• System upgrades</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Procedures */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Compliance Procedures</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                <h3 className="text-xl font-semibold mb-4">Inspection Requirements</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left font-semibold">Inspection Type</th>
                        <th className="px-4 py-2 text-left font-semibold">Frequency</th>
                        <th className="px-4 py-2 text-left font-semibold">Fort Lauderdale Requirements</th>
                        <th className="px-4 py-2 text-left font-semibold">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b">Pre-installation</td>
                        <td className="px-4 py-2 border-b">Before work begins</td>
                        <td className="px-4 py-2 border-b">Site assessment required</td>
                        <td className="px-4 py-2 border-b">$100-200</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">During construction</td>
                        <td className="px-4 py-2 border-b">As work progresses</td>
                        <td className="px-4 py-2 border-b">Coastal compliance check</td>
                        <td className="px-4 py-2 border-b">$75-150</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Final inspection</td>
                        <td className="px-4 py-2 border-b">Upon completion</td>
                        <td className="px-4 py-2 border-b">Environmental compliance</td>
                        <td className="px-4 py-2 border-b">$150-300</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Annual compliance</td>
                        <td className="px-4 py-2 border-b">Yearly</td>
                        <td className="px-4 py-2 border-b">Performance monitoring</td>
                        <td className="px-4 py-2 border-b">$200-400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Penalties and Enforcement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
                Penalties and Enforcement
              </h2>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Consequences of Non-Compliance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Legal Penalties</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Fines:</strong> $500-5,000 per violation</li>
                      <li>• <strong>Stop-work orders:</strong> Immediate work cessation</li>
                      <li>• <strong>System removal:</strong> Required system dismantling</li>
                      <li>• <strong>Legal action:</strong> Court proceedings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Property Impact</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Insurance issues:</strong> Coverage denial</li>
                      <li>• <strong>Sale problems:</strong> Property transfer issues</li>
                      <li>• <strong>Value reduction:</strong> Property devaluation</li>
                      <li>• <strong>Future permits:</strong> Difficulty obtaining permits</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded border-l-4 border-red-500">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> Always obtain required permits before beginning septic work. The cost of compliance is far less than the penalties for non-compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">What permits are required for septic work in Fort Lauderdale?</h3>
                  <p className="text-gray-700">
                    Broward County requires permits for septic system installation, repair, replacement, and major modifications. Emergency repairs may have expedited permit processes, but all work must comply with county health department regulations.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">How long does it take to get a septic permit in Broward County?</h3>
                  <p className="text-gray-700">
                    Standard septic permits in Broward County typically take 2-4 weeks for approval. Expedited permits for emergencies may be processed in 1-2 weeks. Complex projects or coastal properties may require additional review time.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Are there special requirements for coastal septic systems in Fort Lauderdale?</h3>
                  <p className="text-gray-700">
                    Yes, coastal septic systems in Fort Lauderdale must meet additional requirements including saltwater-resistant materials, elevated design for high water tables, storm surge protection, and enhanced environmental protection measures.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Who can apply for septic permits in Broward County?</h3>
                  <p className="text-gray-700">
                    Septic permits must be applied for by licensed septic contractors or property owners. Contractors must be licensed by the state and registered with Broward County. Property owners can apply for their own permits but must use licensed contractors for the work.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">What are the costs for septic permits in Fort Lauderdale?</h3>
                  <p className="text-gray-700">
                    Septic permit costs in Broward County range from $150-500 depending on the type of work. Installation permits cost more than repair permits. Additional fees may apply for coastal properties, environmental reviews, or expedited processing.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Are there environmental regulations for septic systems in Fort Lauderdale?</h3>
                  <p className="text-gray-700">
                    Yes, Fort Lauderdale septic systems must comply with environmental protection regulations including water quality standards, setback requirements from water bodies, proper disposal procedures, and protection of sensitive coastal ecosystems.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">What happens if I work on my septic system without a permit?</h3>
                  <p className="text-gray-700">
                    Working without required permits can result in fines, stop-work orders, required system removal, and legal action. Unpermitted work may also void insurance coverage and create problems when selling the property.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Do I need permits for septic system maintenance in Fort Lauderdale?</h3>
                  <p className="text-gray-700">
                    Routine maintenance like pumping and minor repairs typically don't require permits. However, major repairs, component replacement, or system modifications require permits. When in doubt, consult with Broward County Health Department.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="/locations/fort-lauderdale/septic-services"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">Septic Services in Fort Lauderdale</h4>
                  <p className="text-sm text-gray-600">Complete local service information and expert guidance</p>
                </a>

                <a
                  href="/services/septic-tank-services"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">All Septic Tank Services</h4>
                  <p className="text-sm text-gray-600">Comprehensive septic services across South Florida</p>
                </a>

                <a
                  href="/resources/septic-tank-services/fort-lauderdale/septic-inspection-checklist"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">Septic Inspection Checklist</h4>
                  <p className="text-sm text-gray-600">Inspection requirements and compliance guide</p>
                </a>

                <a
                  href="/resources/septic-tank-services/fort-lauderdale/septic-pumping-cost-frequency"
                  className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                >
                  <h4 className="font-semibold text-blue-600 mb-2">Septic Pumping Cost & Frequency</h4>
                  <p className="text-sm text-gray-600">Cost planning and frequency requirements</p>
                </a>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help with Septic Permits in Fort Lauderdale?</h2>
              <p className="text-xl mb-6">
                Our licensed contractors understand Broward County requirements and can help you navigate the permit process for coastal septic systems in Fort Lauderdale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/pricing/instant-quote/septic-tank-services?src=septic_fort-lauderdale_permits-local-rules_mid"
                  className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                >
                  Get Instant Quote
                </a>
                <a
                  href="tel:+19545551234"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
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
