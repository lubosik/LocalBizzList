import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Calendar, FileText, CheckCircle, AlertTriangle, Shield, Wrench, Users, Settings, Zap, HelpCircle, DollarSign, Phone, Star, Award, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: "Miami Septic Permits & Local Rules - Complete Guide 2025",
  description: "Complete guide to septic permits and local rules in Miami-Dade County. Learn about permit requirements, application process, costs, timelines, and compliance requirements for septic work in Miami.",
  keywords: ["septic permits Miami", "Miami-Dade septic permits", "septic work permits Miami", "Miami septic regulations", "septic permit application Miami", "Miami-Dade County septic rules", "septic inspection Miami", "septic compliance Miami", "Miami septic contractor license", "septic system permits Florida"],
  openGraph: {
    title: "Permits & Local Rules for Septic Work — Miami",
    description: "Complete guide to permits and local rules for septic work in Miami. Learn about Miami-Dade County requirements and compliance.",
    url: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/permits-local-rules",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Septic permits and local rules in Miami"
      }
    ]
  }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Permits & Local Rules for Septic Work — Miami",
  "description": "Complete guide to permits and local rules for septic work in Miami. Learn about Miami-Dade County requirements and compliance.",
  "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=630&fit=crop",
  "author": {
    "@type": "Organization",
    "name": "LocalBizzList Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LocalBizzList",
    "logo": {
      "@type": "ImageObject",
      "url": "https://local-bizz-list.vercel.app/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/permits-local-rules"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What permits do I need for septic work in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Miami-Dade County requires building permits for septic system installation, repair, replacement, and modifications. Additional permits may be needed for excavation, electrical work, and environmental compliance. All work must be performed by licensed contractors."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get septic permits in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Septic permits in Miami-Dade County typically take 2-4 weeks for review and approval. Complex projects or those requiring environmental assessments may take longer. Expedited processing is available for emergency repairs."
      }
    },
    {
      "@type": "Question",
      "name": "What are the costs for septic permits in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Septic permit costs in Miami-Dade County range from $200-800 depending on the scope of work. Additional fees apply for inspections, environmental assessments, and plan reviews. Licensed contractors can provide accurate cost estimates."
      }
    },
    {
      "@type": "Question",
      "name": "Can I do septic work without a permit in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, all septic system work in Miami-Dade County requires permits. Working without permits can result in fines, stop-work orders, and legal consequences. Always obtain proper permits before beginning any septic work."
      }
    },
    {
      "@type": "Question",
      "name": "What are Miami's septic system regulations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Miami-Dade County regulations include minimum setback requirements, soil percolation standards, system sizing based on occupancy, environmental protection measures, and regular inspection requirements. Coastal areas have additional restrictions."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a licensed contractor for septic work in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all septic system work in Miami-Dade County must be performed by licensed contractors. Contractors must have appropriate licenses, insurance, and bonding. Verify contractor credentials before hiring."
      }
    },
    {
      "@type": "Question",
      "name": "What inspections are required for septic work in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Required inspections include pre-construction, during installation, final inspection, and periodic maintenance inspections. Miami-Dade County inspectors verify compliance with codes, environmental requirements, and safety standards."
      }
    },
    {
      "@type": "Question",
      "name": "Are there special requirements for coastal properties in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, coastal properties in Miami have additional requirements including flood zone compliance, saltwater intrusion protection, enhanced environmental safeguards, and stricter setback requirements from water bodies."
      }
    }
  ]
};

export default function MiamiPermitsLocalRules() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <li><Link href="/locations/miami" className="text-gray-500 hover:text-gray-700">Miami</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Permits & Local Rules for Septic Work</li>
            </ol>
          </div>
        </nav>

        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Compliance & Inspections</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Miami</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Miami Septic Permits & Local Rules - Complete Guide 2025</h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>15 min</span></div>
              <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>Miami-Dade County</span></div>
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>January 10, 2025</span></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Miami-Dade County has comprehensive permit requirements and regulations for septic system work. 
                Understanding these requirements ensures compliance, avoids costly violations, and protects Miami's unique environment including its high water table, coastal areas, and hurricane-prone conditions.
              </p>

              {/* Table of Contents */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div><a href="#miami-permit-requirements" className="text-blue-600 hover:text-blue-800">Miami-Dade Permit Requirements</a></div>
                  <div><a href="#application-process" className="text-blue-600 hover:text-blue-800">Application Process</a></div>
                  <div><a href="#costs-fees" className="text-blue-600 hover:text-blue-800">Costs & Fees</a></div>
                  <div><a href="#timeline-processing" className="text-blue-600 hover:text-blue-800">Timeline & Processing</a></div>
                  <div><a href="#contractor-requirements" className="text-blue-600 hover:text-blue-800">Contractor Requirements</a></div>
                  <div><a href="#inspection-process" className="text-blue-600 hover:text-blue-800">Inspection Process</a></div>
                  <div><a href="#compliance-violations" className="text-blue-600 hover:text-blue-800">Compliance & Violations</a></div>
                  <div><a href="#property-transfer" className="text-blue-600 hover:text-blue-800">Property Transfer Requirements</a></div>
                  <div><a href="#emergency-situations" className="text-blue-600 hover:text-blue-800">Emergency Situations</a></div>
                  <div><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Permit Assistance?</h3>
                <p className="text-blue-800 mb-4">Get help with septic permits and compliance in Miami with licensed professionals.</p>
                <Link href="/pricing/instant-quote/septic-tank-services?src=septic_miami_permits-local-rules_mid" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>

              {/* Miami-Dade Permit Requirements Section */}
              <div id="miami-permit-requirements" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Miami-Dade County Permit Requirements</h2>
                    <p className="text-lg text-gray-600">
                      Comprehensive overview of permit requirements for septic work in Miami-Dade County
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Permits Required</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Building Permits</h4>
                            <p className="text-sm text-gray-600">Required for septic system installation, repair, replacement, and modifications</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Wrench className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Excavation Permits</h4>
                            <p className="text-sm text-gray-600">Needed for any digging or earth-moving work related to septic systems</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Zap className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Electrical Permits</h4>
                            <p className="text-sm text-gray-600">Required for septic systems with electrical components or pumps</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Environmental Permits</h4>
                            <p className="text-sm text-gray-600">Needed for work near water bodies or in environmentally sensitive areas</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Miami-Specific Requirements</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Droplets className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">High Water Table</h4>
                            <p className="text-sm text-gray-600">Special considerations for Miami's shallow water table (2-3 feet below surface)</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <AlertTriangle className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Hurricane Zone</h4>
                            <p className="text-sm text-gray-600">Additional requirements for hurricane-prone areas and flood zones</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Coastal Areas</h4>
                            <p className="text-sm text-gray-600">Enhanced environmental protections for properties near water bodies</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Settings className="w-6 h-6 text-red-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Clay Soil</h4>
                            <p className="text-sm text-gray-600">Special design requirements for Miami's clay soil conditions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Permit Exemptions</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Minor Repairs</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Replacing septic tank lids</li>
                          <li>• Minor pipe repairs</li>
                          <li>• Replacing risers</li>
                          <li>• Cleaning drain field lines</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Emergency Repairs</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Emergency pumping</li>
                          <li>• Temporary repairs</li>
                          <li>• Storm damage repairs</li>
                          <li>• Health hazard mitigation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Process Section */}
              <div id="application-process" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Septic Permit Application Process</h2>
                    <p className="text-lg text-gray-600">
                      Step-by-step guide to applying for septic permits in Miami-Dade County
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Application Form DEP4015</h4>
                            <p className="text-sm text-gray-600">Complete application with property owner information</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Site Plan</h4>
                            <p className="text-sm text-gray-600">Detailed site plan showing septic system location and setbacks</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Soil Test Results</h4>
                            <p className="text-sm text-gray-600">Percolation test results and soil analysis</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Contractor License</h4>
                            <p className="text-sm text-gray-600">Copy of licensed contractor's credentials</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Property Survey</h4>
                            <p className="text-sm text-gray-600">Recent property survey showing boundaries and structures</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Steps</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                            <span className="text-blue-600 font-bold text-sm">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Prepare Documentation</h4>
                            <p className="text-sm text-gray-600">Gather all required documents and ensure accuracy</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                            <span className="text-blue-600 font-bold text-sm">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Submit Application</h4>
                            <p className="text-sm text-gray-600">Submit complete application to Miami-Dade County Health Department</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                            <span className="text-blue-600 font-bold text-sm">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Pay Fees</h4>
                            <p className="text-sm text-gray-600">Pay required permit fees and processing costs</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                            <span className="text-blue-600 font-bold text-sm">4</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Review Process</h4>
                            <p className="text-sm text-gray-600">Application reviewed by health department staff</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                            <span className="text-blue-600 font-bold text-sm">5</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Permit Issuance</h4>
                            <p className="text-sm text-gray-600">Receive approved permit and begin work</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Costs & Fees Section */}
              <div id="costs-fees" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Septic Permit Costs & Fees</h2>
                    <p className="text-lg text-gray-600">
                      Understanding the costs associated with septic permits in Miami-Dade County
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Standard Permit Fees</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Building Permit</h4>
                            <p className="text-sm text-gray-600">Septic system installation/repair</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-blue-600">$200-400</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Excavation Permit</h4>
                            <p className="text-sm text-gray-600">Earth-moving work</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-blue-600">$150-300</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Electrical Permit</h4>
                            <p className="text-sm text-gray-600">Septic system electrical work</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-blue-600">$100-200</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Environmental Permit</h4>
                            <p className="text-sm text-gray-600">Work near water bodies</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-blue-600">$300-600</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Costs</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Plan Review</h4>
                            <p className="text-sm text-gray-600">Engineering review</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-orange-600">$150-400</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Soil Testing</h4>
                            <p className="text-sm text-gray-600">Percolation tests</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-orange-600">$200-500</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Inspections</h4>
                            <p className="text-sm text-gray-600">Required inspections</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-orange-600">$100-200</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Expedited Processing</h4>
                            <p className="text-sm text-gray-600">Faster review (if available)</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-orange-600">+$100-300</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Miami-Specific Cost Factors</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Environmental Considerations</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• High water table: +$100-200</li>
                          <li>• Coastal areas: +$200-400</li>
                          <li>• Flood zones: +$150-300</li>
                          <li>• Clay soil: +$100-250</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">System Complexity</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Standard system: Base cost</li>
                          <li>• Advanced treatment: +$300-600</li>
                          <li>• Pump systems: +$200-400</li>
                          <li>• Commercial systems: +$500-1000</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <section id="faq" className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">
                      Common questions about septic permits and local rules in Miami-Dade County
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">What permits do I need for septic work in Miami?</h3>
                      <p className="text-gray-700">
                        Miami-Dade County requires building permits for septic system installation, repair, replacement, and modifications. Additional permits may be needed for excavation, electrical work, and environmental compliance. All work must be performed by licensed contractors. Coastal properties and flood zones have additional requirements.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">How long does it take to get septic permits in Miami?</h3>
                      <p className="text-gray-700">
                        Septic permits in Miami-Dade County typically take 2-4 weeks for review and approval. Complex projects or those requiring environmental assessments may take longer. Expedited processing is available for emergency repairs. Miami's high water table and environmental considerations can extend review times.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">What are the costs for septic permits in Miami?</h3>
                      <p className="text-gray-700">
                        Septic permit costs in Miami-Dade County range from $200-800 depending on the scope of work. Additional fees apply for inspections, environmental assessments, and plan reviews. Miami-specific factors like high water table, coastal areas, and clay soil can add $100-400 to permit costs.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">Can I do septic work without a permit in Miami?</h3>
                      <p className="text-gray-700">
                        No, all septic system work in Miami-Dade County requires permits. Working without permits can result in fines, stop-work orders, and legal consequences. Always obtain proper permits before beginning any septic work. Minor repairs like replacing lids or cleaning lines may be exempt.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">What are Miami's septic system regulations?</h3>
                      <p className="text-gray-700">
                        Miami-Dade County regulations include minimum setback requirements, soil percolation standards, system sizing based on occupancy, environmental protection measures, and regular inspection requirements. Coastal areas have additional restrictions including flood zone compliance and saltwater intrusion protection.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">Do I need a licensed contractor for septic work in Miami?</h3>
                      <p className="text-gray-700">
                        Yes, all septic system work in Miami-Dade County must be performed by licensed contractors. Contractors must have appropriate licenses, insurance, and bonding. Verify contractor credentials before hiring. Only Registered Septic Tank Contractors or Licensed Plumbers are permitted to work on septic systems.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">What inspections are required for septic work in Miami?</h3>
                      <p className="text-gray-700">
                        Required inspections include pre-construction, during installation, final inspection, and periodic maintenance inspections. Miami-Dade County inspectors verify compliance with codes, environmental requirements, and safety standards. Additional inspections may be required for coastal properties or flood zones.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">Are there special requirements for coastal properties in Miami?</h3>
                      <p className="text-gray-700">
                        Yes, coastal properties in Miami have additional requirements including flood zone compliance, saltwater intrusion protection, enhanced environmental safeguards, and stricter setback requirements from water bodies. These properties may require specialized septic system designs and additional permits.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">How does Miami's high water table affect septic permits?</h3>
                      <p className="text-gray-700">
                        Miami's shallow water table (often 2-3 feet below surface) requires special septic system designs and may need additional permits for specialized equipment. This can increase permit costs by $100-200 and may require environmental assessments to ensure groundwater protection.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">What happens if I violate septic permit requirements in Miami?</h3>
                      <p className="text-gray-700">
                        Violations can result in fines ranging from $500-2,000, stop-work orders, and legal consequences. Miami-Dade County takes environmental compliance seriously, especially in coastal areas and flood zones. Repeat violations can result in higher fines and potential criminal charges.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">Do I need septic permits for property transfers in Miami?</h3>
                      <p className="text-gray-700">
                        Yes, property transfers in Miami-Dade County require septic system inspection and compliance verification. Sellers must provide septic system records, and buyers may need to obtain new permits for any required repairs or upgrades before closing.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-3">Can I appeal a denied septic permit in Miami?</h3>
                      <p className="text-gray-700">
                        Yes, you can appeal denied permits through Miami-Dade County's appeals process. Appeals must be filed within 30 days of denial and may require additional documentation or expert testimony. The appeals process typically takes 4-6 weeks for resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Resources Section */}
              <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Miami Septic Resources</h2>
                    <p className="text-lg text-gray-600">
                      Explore more comprehensive guides for Miami septic system compliance and maintenance
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <FileText className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Septic Inspection Checklist</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Complete checklist for Miami-Dade County septic inspections and compliance preparation.</p>
                      <Link href="/resources/septic-tank-services/miami/septic-inspection-checklist" className="text-blue-600 hover:text-blue-800 font-medium">
                        Read Checklist →
                      </Link>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <DollarSign className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Septic Pumping Cost & Frequency</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Complete guide to septic pumping costs and frequency in Miami-Dade County.</p>
                      <Link href="/resources/septic-tank-services/miami/septic-pumping-cost-frequency" className="text-blue-600 hover:text-blue-800 font-medium">
                        Read Guide →
                      </Link>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Emergency Septic Backups</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">What to do when septic emergencies occur in Miami, including storm-related issues.</p>
                      <Link href="/resources/septic-tank-services/miami/emergency-septic-backups" className="text-blue-600 hover:text-blue-800 font-medium">
                        Read Guide →
                      </Link>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <Wrench className="w-8 h-8 text-orange-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Drain Field Problems</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Warning signs and solutions for drain field issues common in Miami's environment.</p>
                      <Link href="/resources/septic-tank-services/miami/drain-field-problems-warning-signs" className="text-blue-600 hover:text-blue-800 font-medium">
                        Read Guide →
                      </Link>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-purple-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">What Not to Flush</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Essential guide to protecting your Miami septic system from harmful materials.</p>
                      <Link href="/resources/septic-tank-services/miami/what-not-to-flush" className="text-blue-600 hover:text-blue-800 font-medium">
                        Read Guide →
                      </Link>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <Users className="w-8 h-8 text-indigo-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Miami Septic Services</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Complete overview of professional septic services available in Miami-Dade County.</p>
                      <Link href="/locations/miami/septic-services" className="text-blue-600 hover:text-blue-800 font-medium">
                        View Services →
                      </Link>
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <div className="bg-blue-50 p-8 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help with Septic Permits in Miami?</h3>
                      <p className="text-gray-600 mb-6">
                        Get expert assistance with septic permits, compliance, and regulatory requirements in Miami-Dade County.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                          href="/pricing/instant-quote?src=miami-septic-permits-guide"
                          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Get Instant Quote
                        </Link>
                        <Link 
                          href="/locations/miami/septic-services"
                          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Help with Permits?</h3>
                <p className="text-blue-800 mb-6 text-lg">Get assistance with septic permits and compliance in Miami.</p>
                <Link href="/pricing/instant-quote/septic-tank-services?src=septic_miami_permits-local-rules_end" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
