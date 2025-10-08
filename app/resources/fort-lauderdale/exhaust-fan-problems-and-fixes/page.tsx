import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Wrench, AlertTriangle, Clock, DollarSign, Phone, MapPin, Settings, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kitchen Exhaust Fan Problems & Quick Fixes Fort Lauderdale | Troubleshooting Guide',
  description: 'Complete troubleshooting guide for Fort Lauderdale restaurant exhaust fan problems. Quick fixes for noise, vibration, poor airflow, and motor issues with coastal climate solutions.',
  keywords: [
    'kitchen exhaust fan problems Fort Lauderdale',
    'restaurant exhaust fan troubleshooting Fort Lauderdale',
    'exhaust fan noise Fort Lauderdale',
    'exhaust fan vibration Fort Lauderdale',
    'kitchen hood fan repair Fort Lauderdale',
    'commercial exhaust fan problems Fort Lauderdale',
    'Fort Lauderdale exhaust fan maintenance',
    'Broward County exhaust fan repair'
  ],
  openGraph: {
    title: 'Kitchen Exhaust Fan Problems & Quick Fixes Fort Lauderdale | Troubleshooting Guide',
    description: 'Complete troubleshooting guide for Fort Lauderdale restaurant exhaust fan problems. Quick fixes for noise, vibration, and motor issues.',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Kitchen exhaust fan problems Fort Lauderdale'
      }
    ]
  }
}

export default function ExhaustFanProblemsFortLauderdalePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kitchen Exhaust Fan Problems & Quick Fixes Fort Lauderdale | Troubleshooting Guide",
    "description": "Complete troubleshooting guide for Fort Lauderdale restaurant exhaust fan problems. Quick fixes for noise, vibration, poor airflow, and motor issues with coastal climate solutions.",
    "author": {
      "@type": "Organization",
      "name": "LocalBizzList"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LocalBizzList",
      "logo": {
        "@type": "ImageObject",
        "url": "https://localbizzlist.com/images/logo.png"
      }
    },
    "datePublished": "2025-01-07",
    "dateModified": "2025-01-07",
    "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=630&fit=crop",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://localbizzlist.com/resources/fort-lauderdale/exhaust-fan-problems-and-fixes"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What causes exhaust fan noise in Fort Lauderdale restaurants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Exhaust fan noise in Fort Lauderdale restaurants is commonly caused by worn bearings, misaligned fan blades, loose mounting hardware, or motor issues. The coastal climate with high humidity and salt air accelerates bearing wear and can cause corrosion that leads to noise problems."
        }
      },
      {
        "@type": "Question",
        "name": "How can I fix exhaust fan vibration in my Fort Lauderdale restaurant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Exhaust fan vibration can be fixed by checking fan blade balance, tightening mounting bolts, replacing worn bearings, or adjusting belt tension. Fort Lauderdale's coastal conditions may require more frequent maintenance to prevent vibration issues."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my exhaust fan have poor airflow in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Poor airflow is typically caused by clogged filters, grease buildup in ducts, fan blade damage, or motor problems. Fort Lauderdale's high humidity can cause grease to accumulate faster, requiring more frequent filter cleaning and duct maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "When should I call a professional for exhaust fan repair in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Call a professional when you experience grinding noise, excessive vibration, motor failure, electrical issues, or when basic troubleshooting doesn't resolve the problem. Fort Lauderdale's coastal climate makes professional maintenance essential for long-term reliability."
        }
      },
      {
        "@type": "Question",
        "name": "How does Fort Lauderdale's coastal climate affect exhaust fans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fort Lauderdale's coastal climate accelerates corrosion, bearing wear, and grease accumulation. High humidity and salt air cause faster component degradation, requiring more frequent maintenance and specialized corrosion-resistant materials."
        }
      },
      {
        "@type": "Question",
        "name": "What maintenance can prevent exhaust fan problems in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regular maintenance includes cleaning filters monthly, checking belt tension, lubricating bearings, inspecting for corrosion, and monitoring fan operation. Fort Lauderdale's climate requires more frequent maintenance than inland locations."
        }
      },
      {
        "@type": "Question",
        "name": "How much does exhaust fan repair cost in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Exhaust fan repair costs vary by issue: bearing replacement ($200-400), motor replacement ($400-800), fan blade repair ($150-300), or complete fan replacement ($800-1,500). Emergency service may include additional charges."
        }
      },
      {
        "@type": "Question",
        "name": "Can I perform exhaust fan maintenance myself in Fort Lauderdale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic maintenance like filter cleaning and visual inspection can be done by restaurant staff. However, electrical work, motor repairs, and complex mechanical issues require professional technicians familiar with Fort Lauderdale's coastal conditions."
        }
      }
    ]
  }

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
        "name": "Fort Lauderdale",
        "item": "https://localbizzlist.com/locations/fort-lauderdale"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Kitchen Exhaust Fan Problems & Quick Fixes"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Wrench className="w-8 h-8 mr-3" />
              <span className="text-purple-200 font-semibold">TROUBLESHOOTING GUIDE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kitchen Exhaust Fan Problems & Quick Fixes in Fort Lauderdale
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Complete troubleshooting guide for Fort Lauderdale restaurant exhaust fan problems. Quick fixes for noise, vibration, 
              poor airflow, and motor issues with solutions for coastal climate challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/pricing/instant-quote?src=resource_fort-lauderdale_exhaust-fan-problems-and-fixes_mid"
                className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-8 py-4 rounded-lg text-center transition-colors"
              >
                Get Professional Repair Quote
              </Link>
              <Link 
                href="tel:+13055551234"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-lg text-center transition-colors"
              >
                <Phone className="inline mr-2" size={20} />
                Call (305) 555-1234
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#fort-lauderdale-context" className="text-blue-600 hover:text-blue-800 font-medium">Fort Lauderdale Exhaust Fan Challenges</a>
              <a href="#common-problems" className="text-blue-600 hover:text-blue-800 font-medium">Common Exhaust Fan Problems</a>
              <a href="#troubleshooting" className="text-blue-600 hover:text-blue-800 font-medium">Step-by-Step Troubleshooting</a>
              <a href="#quick-fixes" className="text-blue-600 hover:text-blue-800 font-medium">Quick Fixes & Solutions</a>
              <a href="#coastal-solutions" className="text-blue-600 hover:text-blue-800 font-medium">Coastal Climate Solutions</a>
              <a href="#prevention" className="text-blue-600 hover:text-blue-800 font-medium">Prevention & Maintenance</a>
              <a href="#faqs" className="text-blue-600 hover:text-blue-800 font-medium">Frequently Asked Questions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Fort Lauderdale Context */}
          <section id="fort-lauderdale-context" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Fort Lauderdale Exhaust Fan Challenges</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Fort Lauderdale's coastal environment presents unique challenges for commercial exhaust fans. High humidity, salt air, 
                and seasonal variations create conditions that accelerate wear and cause problems not typically seen in inland locations.
              </p>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Fort Lauderdale-Specific Exhaust Fan Issues</h3>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Salt air corrosion accelerates bearing and motor wear</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>High humidity causes grease buildup and filter clogging</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tourist season creates high-volume cooking demands</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Seasonal temperature variations affect fan performance</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700">
                Understanding these local challenges helps Fort Lauderdale restaurants implement proper maintenance schedules 
                and recognize early warning signs of exhaust fan problems before they become costly repairs.
              </p>
            </div>
          </section>

          {/* Common Problems */}
          <section id="common-problems" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Common Exhaust Fan Problems</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Commercial exhaust fans in Fort Lauderdale restaurants experience several common problems. Understanding these issues 
                and their causes helps implement effective troubleshooting and prevention strategies.
              </p>

              <div className="space-y-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    Excessive Noise
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-red-700 mb-3">Common Causes</h4>
                      <ul className="space-y-2 text-red-700">
                        <li>• Worn or damaged bearings</li>
                        <li>• Misaligned fan blades</li>
                        <li>• Loose mounting hardware</li>
                        <li>• Motor bearing failure</li>
                        <li>• Debris in fan housing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-700 mb-3">Fort Lauderdale Factors</h4>
                      <ul className="space-y-2 text-red-700">
                        <li>• Salt air accelerates bearing wear</li>
                        <li>• Humidity causes corrosion</li>
                        <li>• Grease buildup affects balance</li>
                        <li>• High-volume cooking increases wear</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                    <Settings className="w-6 h-6 mr-2" />
                    Excessive Vibration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-3">Common Causes</h4>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• Unbalanced fan blades</li>
                        <li>• Loose mounting bolts</li>
                        <li>• Worn motor bearings</li>
                        <li>• Misaligned motor shaft</li>
                        <li>• Damaged fan blades</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-3">Fort Lauderdale Factors</h4>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• Corrosion affects blade balance</li>
                        <li>• Salt air damages mounting hardware</li>
                        <li>• Humidity causes rust and wear</li>
                        <li>• Grease accumulation affects balance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    Poor Airflow
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-700 mb-3">Common Causes</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Clogged or dirty filters</li>
                        <li>• Grease buildup in ducts</li>
                        <li>• Damaged fan blades</li>
                        <li>• Motor performance issues</li>
                        <li>• Ductwork obstructions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-700 mb-3">Fort Lauderdale Factors</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li>• High humidity accelerates grease buildup</li>
                        <li>• Salt air causes corrosion in ducts</li>
                        <li>• Tourist season increases cooking volume</li>
                        <li>• Coastal climate affects filter performance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <Wrench className="w-6 h-6 mr-2" />
                    Motor Problems
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">Common Causes</h4>
                      <ul className="space-y-2 text-green-700">
                        <li>• Worn motor bearings</li>
                        <li>• Electrical connection issues</li>
                        <li>• Overheating from poor ventilation</li>
                        <li>• Capacitor failure</li>
                        <li>• Motor winding problems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">Fort Lauderdale Factors</h4>
                      <ul className="space-y-2 text-green-700">
                        <li>• Salt air accelerates motor corrosion</li>
                        <li>• High humidity affects electrical components</li>
                        <li>• Increased load during tourist season</li>
                        <li>• Coastal conditions require specialized motors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Step-by-Step Troubleshooting</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Follow these systematic troubleshooting steps to identify and resolve exhaust fan problems in Fort Lauderdale restaurants. 
                Always prioritize safety and disconnect power before performing any maintenance.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Safety First - Pre-Troubleshooting Checklist</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Disconnect power to exhaust fan system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Allow system to cool completely</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Wear appropriate safety equipment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Ensure proper access and lighting</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Step 1: Visual Inspection</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-700 mb-3">Check These Areas</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Fan blade condition and balance</li>
                        <li>• Mounting hardware tightness</li>
                        <li>• Motor housing condition</li>
                        <li>• Electrical connections</li>
                        <li>• Filter cleanliness</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-700 mb-3">Fort Lauderdale Focus</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Look for salt air corrosion</li>
                        <li>• Check for humidity damage</li>
                        <li>• Inspect for grease buildup</li>
                        <li>• Look for rust and wear</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">Step 2: Operational Testing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-3">Test Procedures</h4>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• Check fan startup and operation</li>
                        <li>• Listen for unusual noises</li>
                        <li>• Feel for excessive vibration</li>
                        <li>• Measure airflow with anemometer</li>
                        <li>• Check motor temperature</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-3">Document Findings</h4>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• Record noise patterns and levels</li>
                        <li>• Note vibration intensity</li>
                        <li>• Document airflow measurements</li>
                        <li>• Take photos of issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Step 3: Problem Identification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">Common Issues</h4>
                      <ul className="space-y-2 text-green-700">
                        <li>• Bearing wear or failure</li>
                        <li>• Fan blade damage</li>
                        <li>• Motor problems</li>
                        <li>• Electrical issues</li>
                        <li>• Mounting problems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">Fort Lauderdale Specific</h4>
                      <ul className="space-y-2 text-green-700">
                        <li>• Corrosion-related failures</li>
                        <li>• Humidity damage</li>
                        <li>• Salt air effects</li>
                        <li>• Grease accumulation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mid-Article CTA */}
              <div className="bg-purple-600 text-white p-8 rounded-lg text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Need Professional Exhaust Fan Repair?</h3>
                <p className="text-lg mb-6">Get expert diagnosis and repair for your Fort Lauderdale restaurant exhaust fan</p>
                <Link 
                  href="/pricing/instant-quote?src=resource_fort-lauderdale_exhaust-fan-problems-and-fixes_mid"
                  className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-8 py-4 rounded-lg inline-block transition-colors"
                >
                  Get Professional Repair Quote
                </Link>
              </div>
            </div>
          </section>

          {/* Quick Fixes */}
          <section id="quick-fixes" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Quick Fixes & Solutions</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                These quick fixes can resolve many common exhaust fan problems in Fort Lauderdale restaurants. 
                Always prioritize safety and call professionals for complex issues.
              </p>

              <div className="space-y-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Fixing Excessive Noise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-red-700 mb-3">Quick Fixes</h4>
                      <ul className="space-y-2 text-red-700">
                        <li>• Tighten loose mounting bolts</li>
                        <li>• Clean fan blades and housing</li>
                        <li>• Check and replace worn belts</li>
                        <li>• Lubricate accessible bearings</li>
                        <li>• Remove debris from fan housing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-700 mb-3">When to Call Professional</h4>
                      <ul className="space-y-2 text-red-700">
                        <li>• Grinding or screeching sounds</li>
                        <li>• Motor bearing noise</li>
                        <li>• Electrical humming</li>
                        <li>• Noise persists after basic fixes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">Fixing Excessive Vibration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-3">Quick Fixes</h4>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• Tighten all mounting hardware</li>
                        <li>• Check fan blade balance</li>
                        <li>• Adjust belt tension</li>
                        <li>• Clean fan blades thoroughly</li>
                        <li>• Check motor alignment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-3">When to Call Professional</h4>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• Severe vibration continues</li>
                        <li>• Fan blade damage visible</li>
                        <li>• Motor mounting issues</li>
                        <li>• Structural damage concerns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Fixing Poor Airflow</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-700 mb-3">Quick Fixes</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Clean or replace filters</li>
                        <li>• Remove grease buildup</li>
                        <li>• Check ductwork obstructions</li>
                        <li>• Clean fan blades</li>
                        <li>• Verify fan rotation direction</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-700 mb-3">When to Call Professional</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Ductwork cleaning needed</li>
                        <li>• Motor performance issues</li>
                        <li>• Complex airflow problems</li>
                        <li>• System design issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Fixing Motor Problems</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">Quick Fixes</h4>
                      <ul className="space-y-2 text-green-700">
                        <li>• Check electrical connections</li>
                        <li>• Clean motor housing</li>
                        <li>• Check capacitor condition</li>
                        <li>• Verify power supply</li>
                        <li>• Clean motor ventilation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">When to Call Professional</h4>
                      <ul className="space-y-2 text-green-700">
                        <li>• Motor won't start</li>
                        <li>• Electrical issues</li>
                        <li>• Motor overheating</li>
                        <li>• Bearing replacement needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Coastal Solutions */}
          <section id="coastal-solutions" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Coastal Climate Solutions</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Fort Lauderdale's coastal environment requires specialized solutions for exhaust fan problems. 
                These strategies address the unique challenges of salt air, high humidity, and seasonal variations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-600">Corrosion Prevention</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span><strong>Use corrosion-resistant materials:</strong> Stainless steel components for coastal installations</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span><strong>Apply protective coatings:</strong> Anti-corrosion treatments for metal components</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span><strong>Regular cleaning:</strong> Remove salt deposits and moisture regularly</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-600">Humidity Management</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span><strong>Increased maintenance frequency:</strong> More frequent cleaning and inspection</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span><strong>Moisture control:</strong> Proper ventilation and drainage systems</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span><strong>Grease management:</strong> Enhanced grease removal systems</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Fort Lauderdale-Specific Maintenance Schedule</h3>
                <p className="text-orange-700 mb-4">
                  Adjust your maintenance schedule for Fort Lauderdale's coastal conditions:
                </p>
                <ul className="space-y-2 text-orange-700">
                  <li>• <strong>Monthly:</strong> Filter cleaning and visual inspection</li>
                  <li>• <strong>Quarterly:</strong> Bearing lubrication and belt tension check</li>
                  <li>• <strong>Semi-annually:</strong> Complete system cleaning and inspection</li>
                  <li>• <strong>Annually:</strong> Professional maintenance and component replacement</li>
                  <li>• <strong>Before tourist season:</strong> Comprehensive system check</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Seasonal Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-blue-700 mb-3">Tourist Season (Dec-Apr)</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Increase maintenance frequency</li>
                      <li>• Monitor system performance closely</li>
                      <li>• Schedule preventive maintenance</li>
                      <li>• Keep emergency repair contacts ready</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-blue-700 mb-3">Off-Season (May-Nov)</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Schedule major maintenance</li>
                      <li>• Replace worn components</li>
                      <li>• Plan system upgrades</li>
                      <li>• Conduct thorough inspections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention */}
          <section id="prevention" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Prevention & Maintenance</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Preventive maintenance is essential for Fort Lauderdale restaurants to avoid costly exhaust fan repairs. 
                These strategies help maintain optimal performance and extend equipment life in coastal conditions.
              </p>

              <div className="space-y-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Daily Maintenance Tasks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">Staff Responsibilities</h4>
                      <ul className="space-y-2 text-green-700">
                        <li>• Visual inspection of fan operation</li>
                        <li>• Listen for unusual noises</li>
                        <li>• Check for excessive vibration</li>
                        <li>• Monitor airflow performance</li>
                        <li>• Report issues immediately</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">Fort Lauderdale Focus</h4>
                      <ul className="space-y-2 text-green-700">
                        <li>• Check for salt air corrosion</li>
                        <li>• Monitor humidity effects</li>
                        <li>• Watch for grease accumulation</li>
                        <li>• Note seasonal variations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Weekly Maintenance Tasks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-700 mb-3">Cleaning Tasks</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Clean accessible fan blades</li>
                        <li>• Remove grease buildup</li>
                        <li>• Clean filter surfaces</li>
                        <li>• Check mounting hardware</li>
                        <li>• Inspect electrical connections</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-700 mb-3">Fort Lauderdale Specific</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Remove salt deposits</li>
                        <li>• Check for corrosion</li>
                        <li>• Monitor humidity effects</li>
                        <li>• Clean coastal debris</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">Monthly Maintenance Tasks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-3">Professional Tasks</h4>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• Complete system inspection</li>
                        <li>• Bearing lubrication</li>
                        <li>• Belt tension adjustment</li>
                        <li>• Motor performance check</li>
                        <li>• Airflow measurement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-3">Fort Lauderdale Focus</h4>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• Corrosion assessment</li>
                        <li>• Salt air damage evaluation</li>
                        <li>• Humidity impact analysis</li>
                        <li>• Seasonal adjustment planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Fort Lauderdale Maintenance Contracts</h3>
                <p className="text-purple-700 mb-4">
                  Consider professional maintenance contracts that account for Fort Lauderdale's coastal conditions:
                </p>
                <ul className="space-y-2 text-purple-700">
                  <li>• <strong>Coastal-specific schedules:</strong> Adjusted for humidity and salt air</li>
                  <li>• <strong>Seasonal adjustments:</strong> Tourist season and off-season variations</li>
                  <li>• <strong>Emergency service:</strong> 24/7 availability during peak periods</li>
                  <li>• <strong>Corrosion-resistant parts:</strong> Specialized components for coastal use</li>
                  <li>• <strong>Documentation:</strong> Detailed records for compliance and insurance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">What causes exhaust fan noise in Fort Lauderdale restaurants?</h3>
                <p className="text-gray-700">
                  Exhaust fan noise in Fort Lauderdale restaurants is commonly caused by worn bearings, misaligned fan blades, loose mounting hardware, or motor issues. The coastal climate with high humidity and salt air accelerates bearing wear and can cause corrosion that leads to noise problems.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">How can I fix exhaust fan vibration in my Fort Lauderdale restaurant?</h3>
                <p className="text-gray-700">
                  Exhaust fan vibration can be fixed by checking fan blade balance, tightening mounting bolts, replacing worn bearings, or adjusting belt tension. Fort Lauderdale's coastal conditions may require more frequent maintenance to prevent vibration issues.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Why does my exhaust fan have poor airflow in Fort Lauderdale?</h3>
                <p className="text-gray-700">
                  Poor airflow is typically caused by clogged filters, grease buildup in ducts, fan blade damage, or motor problems. Fort Lauderdale's high humidity can cause grease to accumulate faster, requiring more frequent filter cleaning and duct maintenance.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">When should I call a professional for exhaust fan repair in Fort Lauderdale?</h3>
                <p className="text-gray-700">
                  Call a professional when you experience grinding noise, excessive vibration, motor failure, electrical issues, or when basic troubleshooting doesn't resolve the problem. Fort Lauderdale's coastal climate makes professional maintenance essential for long-term reliability.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">How does Fort Lauderdale's coastal climate affect exhaust fans?</h3>
                <p className="text-gray-700">
                  Fort Lauderdale's coastal climate accelerates corrosion, bearing wear, and grease accumulation. High humidity and salt air cause faster component degradation, requiring more frequent maintenance and specialized corrosion-resistant materials.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">What maintenance can prevent exhaust fan problems in Fort Lauderdale?</h3>
                <p className="text-gray-700">
                  Regular maintenance includes cleaning filters monthly, checking belt tension, lubricating bearings, inspecting for corrosion, and monitoring fan operation. Fort Lauderdale's climate requires more frequent maintenance than inland locations.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">How much does exhaust fan repair cost in Fort Lauderdale?</h3>
                <p className="text-gray-700">
                  Exhaust fan repair costs vary by issue: bearing replacement ($200-400), motor replacement ($400-800), fan blade repair ($150-300), or complete fan replacement ($800-1,500). Emergency service may include additional charges.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Can I perform exhaust fan maintenance myself in Fort Lauderdale?</h3>
                <p className="text-gray-700">
                  Basic maintenance like filter cleaning and visual inspection can be done by restaurant staff. However, electrical work, motor repairs, and complex mechanical issues require professional technicians familiar with Fort Lauderdale's coastal conditions.
                </p>
              </div>
            </div>
          </section>

          {/* End CTA */}
          <section className="bg-purple-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Get Professional Exhaust Fan Repair</h2>
            <p className="text-xl mb-6">
              Don't let exhaust fan problems shut down your Fort Lauderdale restaurant. Get expert diagnosis and repair 
              with same-day service available throughout Broward County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing/instant-quote?src=resource_fort-lauderdale_exhaust-fan-problems-and-fixes_end"
                className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Get Professional Repair Quote
              </Link>
              <Link 
                href="/locations/fort-lauderdale/hood-cleaning"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Learn More About Fort Lauderdale Hood Cleaning
              </Link>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/resources/fort-lauderdale/exhaust-fan-grinding-noise-repair" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Exhaust Fan Making Loud Grinding Noise</h3>
                <p className="text-gray-700">Emergency repair guide for Fort Lauderdale restaurants experiencing grinding noise from exhaust fans.</p>
              </Link>
              <Link href="/resources/fort-lauderdale/hood-cleaning-frequency-by-restaurant-type" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Hood Cleaning Frequency by Restaurant Type</h3>
                <p className="text-gray-700">Understanding NFPA 96 cleaning schedules to prevent exhaust system problems.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}