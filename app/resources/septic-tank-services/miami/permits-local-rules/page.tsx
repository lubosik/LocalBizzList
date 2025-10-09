import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Calendar, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Permits & Local Rules for Septic Work — Miami",
  description: "Complete guide to permits and local rules for septic work in Miami. Learn about Miami-Dade County requirements and compliance.",
  keywords: ["septic permits Miami", "Miami-Dade septic permits", "septic work permits Miami", "Miami septic regulations"],
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
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Permits & Local Rules for Septic Work — Miami</h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>11 min</span></div>
              <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>Miami</span></div>
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>January 15, 2024</span></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Miami-Dade County has specific permit requirements and regulations for septic system work. 
                Understanding these requirements ensures compliance and avoids costly violations.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Permit Assistance?</h3>
                <p className="text-blue-800 mb-4">Get help with septic permits and compliance in Miami with licensed professionals.</p>
                <Link href="/pricing/instant-quote/septic-tank-services?src=septic_miami_permits-local-rules_mid" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Miami-Dade Permit Requirements</h2>
              <p className="mb-4">Understanding the specific permit requirements for septic work in Miami-Dade County.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Regulations</h2>
              <p className="mb-4">Key regulations and compliance requirements for septic systems in Miami.</p>

              {/* FAQ Section */}
              <section id="faq" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">What permits do I need for septic work in Miami?</h3>
                    <p className="text-gray-700">
                      Miami-Dade County requires building permits for septic system installation, repair, replacement, and modifications. Additional permits may be needed for excavation, electrical work, and environmental compliance. All work must be performed by licensed contractors.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">How long does it take to get septic permits in Miami?</h3>
                    <p className="text-gray-700">
                      Septic permits in Miami-Dade County typically take 2-4 weeks for review and approval. Complex projects or those requiring environmental assessments may take longer. Expedited processing is available for emergency repairs.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">What are the costs for septic permits in Miami?</h3>
                    <p className="text-gray-700">
                      Septic permit costs in Miami-Dade County range from $200-800 depending on the scope of work. Additional fees apply for inspections, environmental assessments, and plan reviews. Licensed contractors can provide accurate cost estimates.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Can I do septic work without a permit in Miami?</h3>
                    <p className="text-gray-700">
                      No, all septic system work in Miami-Dade County requires permits. Working without permits can result in fines, stop-work orders, and legal consequences. Always obtain proper permits before beginning any septic work.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">What are Miami's septic system regulations?</h3>
                    <p className="text-gray-700">
                      Miami-Dade County regulations include minimum setback requirements, soil percolation standards, system sizing based on occupancy, environmental protection measures, and regular inspection requirements. Coastal areas have additional restrictions.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Do I need a licensed contractor for septic work in Miami?</h3>
                    <p className="text-gray-700">
                      Yes, all septic system work in Miami-Dade County must be performed by licensed contractors. Contractors must have appropriate licenses, insurance, and bonding. Verify contractor credentials before hiring.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">What inspections are required for septic work in Miami?</h3>
                    <p className="text-gray-700">
                      Required inspections include pre-construction, during installation, final inspection, and periodic maintenance inspections. Miami-Dade County inspectors verify compliance with codes, environmental requirements, and safety standards.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Are there special requirements for coastal properties in Miami?</h3>
                    <p className="text-gray-700">
                      Yes, coastal properties in Miami have additional requirements including flood zone compliance, saltwater intrusion protection, enhanced environmental safeguards, and stricter setback requirements from water bodies.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/locations/miami/septic-services"
                    className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                  >
                    <h4 className="font-semibold text-blue-600 mb-2">Septic Services in Miami</h4>
                    <p className="text-sm text-gray-600">Complete local service information and Miami-Dade County guidance</p>
                  </Link>

                  <Link
                    href="/services/septic-tank-services"
                    className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                  >
                    <h4 className="font-semibold text-blue-600 mb-2">All Septic Tank Services</h4>
                    <p className="text-sm text-gray-600">Comprehensive septic services across South Florida</p>
                  </Link>

                  <Link
                    href="/resources/septic-tank-services/miami/septic-inspection-checklist"
                    className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                  >
                    <h4 className="font-semibold text-blue-600 mb-2">Septic Inspection Checklist</h4>
                    <p className="text-sm text-gray-600">Prepare for inspections and compliance</p>
                  </Link>

                  <Link
                    href="/resources/septic-tank-services/miami/septic-pumping-cost-frequency"
                    className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                  >
                    <h4 className="font-semibold text-blue-600 mb-2">Septic Pumping Cost & Frequency</h4>
                    <p className="text-sm text-gray-600">Maintenance requirements and costs</p>
                  </Link>
                </div>
              </section>

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
