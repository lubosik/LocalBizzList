import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Calendar, AlertTriangle, Phone, Shield, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: "Emergency Septic Backups: First-Hour Actions — Miami",
  description: "Emergency septic backup response guide for Miami. Learn immediate actions to take and when to call professionals for septic emergencies.",
  keywords: ["emergency septic backup Miami", "septic emergency Miami", "septic backup repair Miami", "Miami septic emergency"],
  openGraph: {
    title: "Emergency Septic Backups: First-Hour Actions — Miami",
    description: "Emergency septic backup response guide for Miami. Learn immediate actions to take and when to call professionals for septic emergencies.",
    url: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/emergency-septic-backups",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Emergency septic backup response in Miami"
      }
    ]
  }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Emergency Septic Backups: First-Hour Actions — Miami",
  "description": "Emergency septic backup response guide for Miami. Learn immediate actions to take and when to call professionals for septic emergencies.",
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
    "@id": "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/emergency-septic-backups"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I do immediately when my septic system backs up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stop using all water immediately, avoid flushing toilets, evacuate affected areas, and call a licensed septic professional. In Miami, high water tables can make backups more severe, so immediate action is crucial."
      }
    },
    {
      "@type": "Question",
      "name": "Is septic backup dangerous to my health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, septic backups contain harmful bacteria and pathogens. Avoid contact with sewage, wear protective equipment, and ensure proper ventilation. Miami's humid climate can increase health risks from exposure."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I get emergency septic service in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most licensed septic companies in Miami offer 24/7 emergency service with response times of 1-2 hours. During hurricane season or severe weather, response times may be longer due to increased demand."
      }
    },
    {
      "@type": "Question",
      "name": "What causes septic backups in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common causes include high water tables, tree root intrusion, grease buildup, non-flushable items, system age, and flooding. Miami's coastal conditions and tropical climate create unique challenges."
      }
    },
    {
      "@type": "Question",
      "name": "Should I try to fix a septic backup myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, septic backups require professional equipment and expertise. DIY attempts can worsen the problem, cause health hazards, and violate Miami-Dade County regulations. Always call licensed professionals."
      }
    },
    {
      "@type": "Question",
      "name": "How much does emergency septic service cost in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Emergency septic service in Miami typically costs $200-500 for the service call plus $100-200 per hour for labor. After-hours and weekend calls include premium rates. Complex repairs cost additional."
      }
    },
    {
      "@type": "Question",
      "name": "Can I prevent septic backups in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, prevention includes regular pumping every 3-5 years, avoiding grease and non-flushable items, conserving water, maintaining drain fields, and monitoring for early warning signs."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do while waiting for emergency service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stop using all water, avoid affected areas, document the damage with photos, contact your insurance company, and prepare for the technician's arrival by clearing access to the septic system."
      }
    }
  ]
};

export default function MiamiEmergencySepticBackups() {
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
              <li className="text-gray-900 font-medium">Emergency Septic Backups: First-Hour Actions</li>
            </ol>
          </div>
        </nav>

        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">Emergency & After Hours</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Miami</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency Septic Backups: First-Hour Actions — Miami</h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>10 min</span></div>
              <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>Miami</span></div>
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>January 15, 2024</span></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Septic backups in Miami can be especially problematic due to high water tables and frequent flooding. 
                Knowing the right immediate actions can prevent property damage and health hazards.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Septic Service Available</h3>
                <p className="text-red-800 mb-4">24/7 emergency septic service in Miami for immediate response to backups.</p>
                <Link href="/pricing/instant-quote/septic-tank-services?src=septic_miami_emergency-septic-backups_mid" className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Get Emergency Service</Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Immediate Actions</h2>
              <p className="mb-4">Critical first steps when experiencing a septic backup in Miami.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Precautions</h2>
              <p className="mb-4">Important safety measures to protect your family and property.</p>

              {/* FAQ Section */}
              <section id="faq" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">What should I do immediately when my septic system backs up?</h3>
                    <p className="text-gray-700">
                      Stop using all water immediately, avoid flushing toilets, evacuate affected areas, and call a licensed septic professional. In Miami, high water tables can make backups more severe, so immediate action is crucial.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Is septic backup dangerous to my health?</h3>
                    <p className="text-gray-700">
                      Yes, septic backups contain harmful bacteria and pathogens. Avoid contact with sewage, wear protective equipment, and ensure proper ventilation. Miami's humid climate can increase health risks from exposure.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">How quickly can I get emergency septic service in Miami?</h3>
                    <p className="text-gray-700">
                      Most licensed septic companies in Miami offer 24/7 emergency service with response times of 1-2 hours. During hurricane season or severe weather, response times may be longer due to increased demand.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">What causes septic backups in Miami?</h3>
                    <p className="text-gray-700">
                      Common causes include high water tables, tree root intrusion, grease buildup, non-flushable items, system age, and flooding. Miami's coastal conditions and tropical climate create unique challenges.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Should I try to fix a septic backup myself?</h3>
                    <p className="text-gray-700">
                      No, septic backups require professional equipment and expertise. DIY attempts can worsen the problem, cause health hazards, and violate Miami-Dade County regulations. Always call licensed professionals.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">How much does emergency septic service cost in Miami?</h3>
                    <p className="text-gray-700">
                      Emergency septic service in Miami typically costs $200-500 for the service call plus $100-200 per hour for labor. After-hours and weekend calls include premium rates. Complex repairs cost additional.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Can I prevent septic backups in Miami?</h3>
                    <p className="text-gray-700">
                      Yes, prevention includes regular pumping every 3-5 years, avoiding grease and non-flushable items, conserving water, maintaining drain fields, and monitoring for early warning signs.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">What should I do while waiting for emergency service?</h3>
                    <p className="text-gray-700">
                      Stop using all water, avoid affected areas, document the damage with photos, contact your insurance company, and prepare for the technician's arrival by clearing access to the septic system.
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
                    href="/resources/septic-tank-services/miami/drain-field-problems-warning-signs"
                    className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                  >
                    <h4 className="font-semibold text-blue-600 mb-2">Drain Field Problems & Warning Signs</h4>
                    <p className="text-sm text-gray-600">Recognize early signs of drain field failure</p>
                  </Link>

                  <Link
                    href="/resources/septic-tank-services/miami/permits-local-rules"
                    className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition-colors"
                  >
                    <h4 className="font-semibold text-blue-600 mb-2">Permits & Local Rules</h4>
                    <p className="text-sm text-gray-600">Understanding Miami-Dade County requirements</p>
                  </Link>
                </div>
              </section>

              <div className="bg-red-50 border border-red-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Need Emergency Septic Service?</h3>
                <p className="text-red-800 mb-6 text-lg">Get immediate emergency septic service in Miami with 24/7 availability.</p>
                <Link href="/pricing/instant-quote/septic-tank-services?src=septic_miami_emergency-septic-backups_end" className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Get Emergency Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
