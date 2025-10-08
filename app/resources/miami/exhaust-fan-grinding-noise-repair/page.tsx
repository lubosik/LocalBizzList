import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Wrench, AlertTriangle, Clock, DollarSign, Phone, MapPin, Shield, Settings, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Exhaust Fan Making Loud Grinding Noise Miami | Emergency Fan Repair',
  description: 'Emergency exhaust fan repair for Miami restaurants experiencing loud grinding noise. Same-day fan motor replacement with NFPA 96 certified technicians.',
  keywords: [
    'exhaust fan grinding noise Miami',
    'kitchen exhaust fan repair Miami',
    'restaurant exhaust fan loud noise Miami',
    'commercial exhaust fan grinding Miami',
    'hood fan motor replacement Miami',
    'emergency fan repair Miami',
    'kitchen hood fan repair Miami',
    'restaurant exhaust fan repair Miami'
  ],
  openGraph: {
    title: 'Exhaust Fan Making Loud Grinding Noise Miami | Emergency Fan Repair',
    description: 'Emergency exhaust fan repair for Miami restaurants experiencing loud grinding noise. Same-day fan motor replacement available.',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Commercial kitchen exhaust fan repair Miami'
      }
    ]
  }
}

export default function ExhaustFanGrindingNoiseMiamiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Exhaust Fan Making Loud Grinding Noise Miami | Emergency Fan Repair",
    "description": "Emergency exhaust fan repair for Miami restaurants experiencing loud grinding noise. Same-day fan motor replacement with NFPA 96 certified technicians.",
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
      "@id": "https://localbizzlist.com/resources/miami/exhaust-fan-grinding-noise-repair"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What causes exhaust fan grinding noise in Miami restaurants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grinding noise typically indicates worn bearings, misaligned fan blades, or motor issues. Miami's high humidity accelerates bearing wear and can cause corrosion that leads to grinding sounds."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you repair a grinding exhaust fan in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide same-day emergency fan repair service throughout Miami-Dade County. Most grinding noise issues can be diagnosed and repaired within 2-4 hours of service call."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to operate a restaurant with a grinding exhaust fan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, grinding noise indicates serious mechanical issues that can lead to fan failure, fire hazards, and health code violations. Immediate repair is essential for safety and compliance."
        }
      },
      {
        "@type": "Question",
        "name": "What does exhaust fan motor replacement cost in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fan motor replacement typically costs $400-800 depending on motor size and accessibility. We provide transparent pricing and can give estimates over the phone for emergency repairs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you repair all types of commercial exhaust fans in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we repair all commercial exhaust fan types including centrifugal, axial, and mixed-flow fans. Our technicians are certified to work on all major commercial kitchen exhaust systems."
        }
      },
      {
        "@type": "Question",
        "name": "Can you prevent future exhaust fan grinding issues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, regular maintenance including bearing lubrication, belt tension adjustment, and motor inspection prevents grinding issues. We offer maintenance contracts to keep your exhaust system running smoothly."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide warranty on exhaust fan repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 90-day warranty on all repair work and 1-year warranty on new motor installations. All work is backed by our satisfaction guarantee."
        }
      },
      {
        "@type": "Question",
        "name": "What areas of Miami do you serve for emergency fan repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide emergency exhaust fan repair throughout Miami-Dade County, including Downtown Miami, Brickell, Wynwood, Little Havana, Coconut Grove, Aventura, and surrounding areas."
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
        "name": "Miami",
        "item": "https://localbizzlist.com/locations/miami"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Exhaust Fan Grinding Noise Repair"
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
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-8 h-8 mr-3" />
              <span className="text-orange-200 font-semibold">EMERGENCY REPAIR AVAILABLE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Exhaust Fan Making Loud Grinding Noise in Miami
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Emergency exhaust fan repair for Miami restaurants experiencing loud grinding noise. 
              Same-day fan motor replacement with NFPA 96 certified technicians throughout Miami-Dade County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/pricing/instant-quote?src=resource_miami_exhaust-fan-grinding-noise-repair_mid"
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-lg text-center transition-colors"
              >
                Get Emergency Repair Quote
              </Link>
              <Link 
                href="tel:+13055551234"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-4 rounded-lg text-center transition-colors"
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
              <a href="#miami-context" className="text-blue-600 hover:text-blue-800 font-medium">Miami Exhaust Fan Issues</a>
              <a href="#nfpa-96-basics" className="text-blue-600 hover:text-blue-800 font-medium">Understanding Grinding Noise</a>
              <a href="#cost-frequency" className="text-blue-600 hover:text-blue-800 font-medium">Repair Costs & Timeline</a>
              <a href="#process-checklist" className="text-blue-600 hover:text-blue-800 font-medium">Emergency Repair Process</a>
              <a href="#local-realities" className="text-blue-600 hover:text-blue-800 font-medium">Miami Service Considerations</a>
              <a href="#common-problems" className="text-blue-600 hover:text-blue-800 font-medium">Common Problems & Solutions</a>
              <a href="#faqs" className="text-blue-600 hover:text-blue-800 font-medium">Frequently Asked Questions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Miami Context */}
          <section id="miami-context" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Miami Exhaust Fan Issues</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Miami's tropical climate creates unique challenges for commercial exhaust fans, with high humidity and salt air 
                accelerating mechanical wear and causing grinding noise issues. When your restaurant's exhaust fan starts 
                making loud grinding sounds, immediate repair is essential to prevent complete failure and maintain kitchen operations.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Why Miami Exhaust Fans Develop Grinding Noise</h3>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-start">
                    <Wrench className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>High humidity accelerates bearing wear and corrosion</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Salt air from coastal locations causes metal corrosion</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Year-round operation without seasonal maintenance breaks</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Heavy grease buildup affects fan balance and alignment</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700">
                Grinding noise in exhaust fans indicates serious mechanical problems that can lead to complete fan failure, 
                fire hazards, and health code violations. Our emergency repair service can diagnose and fix most grinding 
                issues within hours, minimizing downtime for your Miami restaurant.
              </p>
            </div>
          </section>

          {/* Understanding Grinding Noise */}
          <section id="nfpa-96-basics" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Understanding Grinding Noise</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Grinding noise in commercial exhaust fans typically indicates mechanical failure in critical components. 
                Understanding the causes helps determine the urgency of repair and prevents further damage to your exhaust system.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Common Causes of Grinding Noise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">Worn Bearings</h4>
                    <p className="text-sm text-gray-600">Most common cause - bearings lose lubrication and develop metal-on-metal contact</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">Misaligned Fan Blades</h4>
                    <p className="text-sm text-gray-600">Blades contact housing or other components due to imbalance or damage</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">Motor Issues</h4>
                    <p className="text-sm text-gray-600">Internal motor components wear out or become misaligned</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">Debris Accumulation</h4>
                    <p className="text-sm text-gray-600">Grease and debris cause fan blades to contact housing</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3">Safety Warning</h3>
                <p className="text-red-700 mb-4">
                  <strong>Never ignore grinding noise in your exhaust fan.</strong> This indicates serious mechanical failure 
                  that can lead to:
                </p>
                <ul className="space-y-2 text-red-700">
                  <li>• Complete fan failure and kitchen shutdown</li>
                  <li>• Fire hazards from overheated components</li>
                  <li>• Health code violations and inspection failures</li>
                  <li>• Expensive damage to ductwork and other components</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700">
                Immediate repair is essential when grinding noise occurs. Our emergency service can diagnose the exact cause 
                and provide same-day repair to restore your exhaust system to safe operation.
              </p>
            </div>
          </section>

          {/* Cost & Timeline */}
          <section id="cost-frequency" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Repair Costs & Timeline</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Emergency exhaust fan repair costs vary based on the specific issue, fan size, and accessibility requirements. 
                Most grinding noise problems can be resolved within hours, minimizing downtime for your Miami restaurant.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2" />
                    Emergency Repair Costs
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li>Bearing replacement: $200-400</li>
                    <li>Fan blade realignment: $150-300</li>
                    <li>Motor replacement: $400-800</li>
                    <li>Complete fan replacement: $800-1,500</li>
                    <li>Emergency service call: $150-250</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    Repair Timeline
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>Emergency response: 2-4 hours</li>
                    <li>Diagnosis and assessment: 30-60 minutes</li>
                    <li>Bearing replacement: 2-4 hours</li>
                    <li>Motor replacement: 4-6 hours</li>
                    <li>Complete fan replacement: 6-8 hours</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">What Affects Repair Costs</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li><strong>Fan accessibility:</strong> Roof-mounted fans require additional safety equipment</li>
                  <li><strong>Component availability:</strong> Some motors require special ordering</li>
                  <li><strong>System complexity:</strong> Multi-fan systems cost more to repair</li>
                  <li><strong>Urgency:</strong> Same-day service may include emergency surcharges</li>
                  <li><strong>Warranty status:</strong> Covered repairs reduce out-of-pocket costs</li>
                </ul>
              </div>

              {/* Mid-Article CTA */}
              <div className="bg-orange-600 text-white p-8 rounded-lg text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Need Emergency Fan Repair?</h3>
                <p className="text-lg mb-6">Don't let grinding noise shut down your Miami restaurant kitchen</p>
                <Link 
                  href="/pricing/instant-quote?src=resource_miami_exhaust-fan-grinding-noise-repair_mid"
                  className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-lg inline-block transition-colors"
                >
                  Get Emergency Repair Quote
                </Link>
              </div>
            </div>
          </section>

          {/* Process Checklist */}
          <section id="process-checklist" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Emergency Repair Process</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Our emergency exhaust fan repair process is designed to restore safe operation quickly while ensuring 
                proper diagnosis and long-term reliability for your Miami restaurant.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Emergency Repair Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Initial Assessment</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>Listen to grinding noise pattern and location</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>Check fan operation and vibration levels</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>Inspect accessible components for damage</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Repair Process</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>Disconnect power and ensure safety</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>Remove fan housing and inspect components</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>Replace or repair damaged components</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>Test operation and verify noise elimination</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Post-Repair Documentation</h3>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Repair report with detailed work performed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Before and after photos of repaired components</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Warranty information for replaced parts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Recommended maintenance schedule to prevent future issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Realities */}
          <section id="local-realities" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Miami Service Considerations</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Miami's unique environment and restaurant landscape present specific considerations for emergency exhaust fan repair. 
                Understanding these local factors ensures efficient service and prevents future grinding noise issues.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-orange-600">Miami Climate Factors</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                      <span><strong>High humidity:</strong> Accelerates bearing wear and metal corrosion</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                      <span><strong>Salt air exposure:</strong> Coastal locations experience faster component degradation</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                      <span><strong>Temperature fluctuations:</strong> Daily heating/cooling cycles stress components</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-orange-600">Service Logistics</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                      <span><strong>Traffic considerations:</strong> Downtown vs. beach area access times</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                      <span><strong>Parking restrictions:</strong> Valet and loading dock requirements</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                      <span><strong>Equipment access:</strong> Roof-mounted fans require specialized equipment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-3">Miami Restaurant Operations</h3>
                <p className="text-green-700 mb-4">
                  Miami's year-round tourism and diverse cuisine types create unique demands on exhaust systems. 
                  Our technicians understand local restaurant operations and can provide repairs that accommodate 
                  your specific cooking volume and schedule requirements.
                </p>
                <ul className="space-y-2 text-green-700">
                  <li>• 24/7 emergency service for tourist-heavy areas</li>
                  <li>• Flexible scheduling around peak dining hours</li>
                  <li>• Experience with diverse cuisine types and cooking methods</li>
                  <li>• Understanding of Miami-Dade County health department requirements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Problems */}
          <section id="common-problems" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Common Problems & Solutions</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Understanding common causes of exhaust fan grinding noise helps prevent future failures and ensures 
                proper maintenance for ongoing reliability in Miami's challenging environment.
              </p>

              <div className="space-y-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Problem: Bearing Failure Due to Humidity</h3>
                  <p className="text-red-700 mb-4">
                    Miami's high humidity causes bearing lubrication to break down faster, leading to metal-on-metal 
                    contact and grinding noise. This is the most common cause of exhaust fan grinding in Miami restaurants.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Solution:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Replace bearings with humidity-resistant sealed bearings</li>
                      <li>• Increase lubrication frequency during humid months</li>
                      <li>• Install bearing temperature monitoring systems</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">Problem: Fan Blade Imbalance</h3>
                  <p className="text-yellow-700 mb-4">
                    Grease buildup and corrosion can cause fan blades to become unbalanced, leading to grinding noise 
                    as blades contact the housing or other components.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Solution:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Clean and balance fan blades during regular maintenance</li>
                      <li>• Replace damaged or corroded blades immediately</li>
                      <li>• Install vibration monitoring to detect early imbalance</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Problem: Motor Misalignment</h3>
                  <p className="text-blue-700 mb-4">
                    Motor mounting bolts can loosen over time, especially in high-vibration environments, causing 
                    motor misalignment and grinding noise from internal components.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Solution:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Check and tighten motor mounting bolts regularly</li>
                      <li>• Use lock washers and thread-locking compounds</li>
                      <li>• Install vibration dampening mounts for high-vibration applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">What causes exhaust fan grinding noise in Miami restaurants?</h3>
                <p className="text-gray-700">
                  Grinding noise typically indicates worn bearings, misaligned fan blades, or motor issues. Miami's high humidity accelerates bearing wear and can cause corrosion that leads to grinding sounds.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">How quickly can you repair a grinding exhaust fan in Miami?</h3>
                <p className="text-gray-700">
                  We provide same-day emergency fan repair service throughout Miami-Dade County. Most grinding noise issues can be diagnosed and repaired within 2-4 hours of service call.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Is it safe to operate a restaurant with a grinding exhaust fan?</h3>
                <p className="text-gray-700">
                  No, grinding noise indicates serious mechanical issues that can lead to fan failure, fire hazards, and health code violations. Immediate repair is essential for safety and compliance.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">What does exhaust fan motor replacement cost in Miami?</h3>
                <p className="text-gray-700">
                  Fan motor replacement typically costs $400-800 depending on motor size and accessibility. We provide transparent pricing and can give estimates over the phone for emergency repairs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Do you repair all types of commercial exhaust fans in Miami?</h3>
                <p className="text-gray-700">
                  Yes, we repair all commercial exhaust fan types including centrifugal, axial, and mixed-flow fans. Our technicians are certified to work on all major commercial kitchen exhaust systems.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Can you prevent future exhaust fan grinding issues?</h3>
                <p className="text-gray-700">
                  Yes, regular maintenance including bearing lubrication, belt tension adjustment, and motor inspection prevents grinding issues. We offer maintenance contracts to keep your exhaust system running smoothly.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Do you provide warranty on exhaust fan repairs?</h3>
                <p className="text-gray-700">
                  Yes, we provide 90-day warranty on all repair work and 1-year warranty on new motor installations. All work is backed by our satisfaction guarantee.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">What areas of Miami do you serve for emergency fan repair?</h3>
                <p className="text-gray-700">
                  We provide emergency exhaust fan repair throughout Miami-Dade County, including Downtown Miami, Brickell, Wynwood, Little Havana, Coconut Grove, Aventura, and surrounding areas.
                </p>
              </div>
            </div>
          </section>

          {/* End CTA */}
          <section className="bg-orange-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Fix Your Grinding Exhaust Fan Today</h2>
            <p className="text-xl mb-6">
              Don't let grinding noise shut down your Miami restaurant kitchen. Get emergency exhaust fan repair 
              with same-day service available throughout Miami-Dade County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing/instant-quote?src=resource_miami_exhaust-fan-grinding-noise-repair_end"
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Get Emergency Repair Quote
              </Link>
              <Link 
                href="/locations/miami/hood-cleaning"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Learn More About Miami Hood Cleaning
              </Link>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/resources/miami/exhaust-fan-problems-and-fixes" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Kitchen Exhaust Fan Problems & Quick Fixes</h3>
                <p className="text-gray-700">Comprehensive guide to common exhaust fan issues and troubleshooting steps for Miami restaurants.</p>
              </Link>
              <Link href="/resources/miami/hood-cleaning-frequency-by-restaurant-type" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Hood Cleaning Frequency Requirements</h3>
                <p className="text-gray-700">Understanding NFPA 96 cleaning schedules to prevent exhaust system problems.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
