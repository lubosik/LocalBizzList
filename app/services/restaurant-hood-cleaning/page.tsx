import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, Shield, Clock, Users, Award, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Restaurant Hood Cleaning Services | NFPA 96 Certified | LocalBizzList",
  description: "Professional restaurant hood cleaning services certified to NFPA 96 standards. Expert kitchen exhaust cleaning for Miami, Boca Raton, Fort Lauderdale. Get instant quote.",
  keywords: "restaurant hood cleaning, commercial hood cleaning, kitchen exhaust cleaning, NFPA 96 certified, hood cleaning service, exhaust hood cleaning, commercial kitchen hood cleaning, hood cleaning near me",
  openGraph: {
    title: "Restaurant Hood Cleaning Services | NFPA 96 Certified",
    description: "Professional restaurant hood cleaning services certified to NFPA 96 standards. Expert kitchen exhaust cleaning for Miami, Boca Raton, Fort Lauderdale.",
    type: "website",
  },
};

export default function RestaurantHoodCleaningPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Restaurant Hood Cleaning Services",
    "description": "Professional NFPA 96 certified kitchen exhaust cleaning for restaurants, cafes, and commercial kitchens across South Florida.",
    "provider": {
      "@type": "Organization",
      "name": "LocalBizzList",
      "url": "https://stellasinkchamber.com",
      "telephone": "+13055551234",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Miami",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City", 
        "name": "Boca Raton",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Fort Lauderdale", 
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      }
    ],
    "serviceType": "Commercial Kitchen Exhaust Cleaning",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hood Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "NFPA 96 Certified Hood Cleaning"
          }
        }
      ]
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
        "item": "https://stellasinkchamber.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://stellasinkchamber.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Restaurant Hood Cleaning"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should restaurant hoods be cleaned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cleaning frequency depends on your cooking volume and type. High-volume kitchens with heavy grease cooking need monthly cleaning, while moderate-volume restaurants typically require quarterly cleaning. Low-volume or seasonal operations may only need semi-annual or annual cleaning."
        }
      },
      {
        "@type": "Question",
        "name": "What is NFPA 96 and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NFPA 96 is the National Fire Protection Association standard for ventilation control and fire protection of commercial cooking operations. It mandates regular cleaning schedules based on cooking volume and type. Compliance is required by most local fire codes and helps prevent dangerous grease fires."
        }
      },
      {
        "@type": "Question",
        "name": "How much does restaurant hood cleaning cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs vary based on the size and complexity of your exhaust system. Basic cleaning for small restaurants typically ranges from $400-$600, while larger commercial kitchens may cost $800-$1,500. We provide transparent, upfront pricing with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide emergency hood cleaning services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer 24/7 emergency hood cleaning services for urgent situations like failed health inspections, fire marshal violations, or equipment malfunctions. Our rapid response team can typically be on-site within 2-4 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive hood cleaning services across South Florida, including Miami, Boca Raton, Fort Lauderdale, and surrounding areas. Our certified technicians are strategically located to provide fast response times throughout the region."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Professional Restaurant Hood Cleaning Services
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              NFPA 96 certified kitchen exhaust cleaning for restaurants, cafes, and commercial kitchens. 
              Expert service across <a href="/locations/miami/hood-cleaning" className="text-blue-200 hover:text-white underline">Miami</a>, 
              <a href="/locations/boca-raton/hood-cleaning" className="text-blue-200 hover:text-white underline"> Boca Raton</a>, and 
              <a href="/locations/fort-lauderdale/hood-cleaning" className="text-blue-200 hover:text-white underline"> Fort Lauderdale</a> with instant quotes and emergency response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pricing/instant-quote?src=global-service-hero"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Instant Quote
              </a>
              <a 
                href="tel:+13055551234"
                className="btn-secondary text-lg px-8 py-4"
              >
                <Phone className="inline mr-2" size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">NFPA 96 Certified</h3>
              <p className="text-gray-600">Fully certified technicians meeting all fire safety standards</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">Round-the-clock service for urgent cleaning needs</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">500+ Restaurants</h3>
              <p className="text-gray-600">Trusted by restaurants across South Florida</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Insured & Bonded</h3>
              <p className="text-gray-600">Fully insured for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grease Risk & NFPA 96 Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Professional Hood Cleaning Matters
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-red-600">
                  The Hidden Danger of Grease Buildup
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-red-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Fire Hazard</h4>
                      <p className="text-gray-600">Grease buildup is the leading cause of commercial kitchen fires</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-red-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Health Code Violations</h4>
                      <p className="text-gray-600">Dirty hoods lead to failed health inspections and fines</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-red-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Reduced Efficiency</h4>
                      <p className="text-gray-600">Clogged systems increase energy costs and equipment wear</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">
                  NFPA 96 Compliance Standards
                </h3>
                <p className="text-gray-700 mb-6">
                  The National Fire Protection Association's NFPA 96 standard mandates regular cleaning 
                  of commercial kitchen exhaust systems to prevent fires and ensure safety.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="font-medium">High-volume kitchens</span>
                    <span className="text-blue-600 font-semibold">Monthly</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="font-medium">Moderate-volume kitchens</span>
                    <span className="text-blue-600 font-semibold">Quarterly</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="font-medium">Low-volume kitchens</span>
                    <span className="text-blue-600 font-semibold">Semi-annually</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Seasonal operations</span>
                    <span className="text-blue-600 font-semibold">Annually</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Scope */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Complete Kitchen Exhaust Cleaning Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Hood & Exhaust Components</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Exhaust hoods and canopies</li>
                  <li>• Grease filters and baffles</li>
                  <li>• Exhaust fans and blowers</li>
                  <li>• Ductwork and transitions</li>
                  <li>• Access panels and doors</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Cleaning Process</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• High-pressure steam cleaning</li>
                  <li>• Degreasing and sanitizing</li>
                  <li>• Filter replacement if needed</li>
                  <li>• System inspection and testing</li>
                  <li>• Compliance documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our 6-Step Professional Cleaning Process
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                  <p className="text-gray-600">
                    We inspect your entire exhaust system to identify grease buildup, damage, and compliance issues.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safety Preparation</h3>
                  <p className="text-gray-600">
                    We protect your kitchen equipment and floor with professional-grade coverings and containment systems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Filter Removal</h3>
                  <p className="text-gray-600">
                    All grease filters and baffles are carefully removed and transported to our cleaning station.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">High-Pressure Cleaning</h3>
                  <p className="text-gray-600">
                    We use commercial-grade steam cleaners and degreasers to remove all grease and contaminants.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 mt-1">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">System Testing</h3>
                  <p className="text-gray-600">
                    We test all components to ensure proper airflow and system functionality before completion.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 mt-1">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Documentation & Certification</h3>
                  <p className="text-gray-600">
                    You receive detailed cleaning reports and NFPA 96 compliance certificates for your records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Restaurants Choose LocalBizzList
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Certified Professionals</h3>
                <p className="text-gray-600">
                  All technicians are NFPA 96 certified with ongoing training in the latest safety standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  We work around your schedule, including evenings and weekends to minimize disruption.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Satisfaction</h3>
                <p className="text-gray-600">
                  We guarantee our work with a 100% satisfaction guarantee and comprehensive insurance coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Common Issues We Can Solve
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Exhaust Fan Making Loud Grinding Noise</h3>
                <p className="text-gray-600 mb-4">
                  Troubleshooting guide for commercial kitchen exhaust fan grinding noise. Quick fixes, safety checks, and when to call professionals for repair.
                </p>
                <a 
                  href="/resources/issues/hood-cleaning/exhaust-fan-grinding-noise"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">How Often Do We Need Hood Cleaning?</h3>
                <p className="text-gray-600 mb-4">
                  Complete guide to hood cleaning frequency requirements by NFPA 96 standards. Learn cleaning schedules for different restaurant types and cooking volumes.
                </p>
                <a 
                  href="/resources/issues/hood-cleaning/how-often-hood-cleaning"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How often should restaurant hoods be cleaned?</h3>
                <p className="text-gray-600">
                  Cleaning frequency depends on your cooking volume and type. High-volume kitchens with heavy grease cooking need monthly cleaning, while moderate-volume restaurants typically require quarterly cleaning. Low-volume or seasonal operations may only need semi-annual or annual cleaning. We assess your specific needs during our initial inspection.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What is NFPA 96 and why is it important?</h3>
                <p className="text-gray-600">
                  NFPA 96 is the National Fire Protection Association standard for ventilation control and fire protection of commercial cooking operations. It mandates regular cleaning schedules based on cooking volume and type. Compliance is required by most local fire codes and helps prevent dangerous grease fires while ensuring your restaurant passes health inspections.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How much does restaurant hood cleaning cost?</h3>
                <p className="text-gray-600">
                  Costs vary based on the size and complexity of your exhaust system. Basic cleaning for small restaurants typically ranges from $400-$600, while larger commercial kitchens may cost $800-$1,500. We provide transparent, upfront pricing with no hidden fees. Get an instant quote using our online calculator.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide emergency hood cleaning services?</h3>
                <p className="text-gray-600">
                  Yes, we offer 24/7 emergency hood cleaning services for urgent situations like failed health inspections, fire marshal violations, or equipment malfunctions. Our rapid response team can typically be on-site within 2-4 hours to address critical cleaning needs.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What areas do you serve?</h3>
                <p className="text-gray-600">
                  We provide comprehensive hood cleaning services across South Florida, including Miami, Boca Raton, Fort Lauderdale, and surrounding areas. Our certified technicians are strategically located to provide fast response times throughout the region.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What certifications do your technicians have?</h3>
                <p className="text-gray-600">
                  All our technicians are NFPA 96 certified and undergo regular training updates. We also maintain proper insurance coverage, bonding, and follow all local health department requirements. You'll receive detailed certification documentation after each cleaning service.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How long does a typical hood cleaning take?</h3>
                <p className="text-gray-600">
                  Most restaurant hood cleanings take 2-4 hours depending on the size and complexity of your system. We work efficiently to minimize disruption to your operations and can often schedule cleanings during off-peak hours or after closing.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you clean all types of commercial kitchens?</h3>
                <p className="text-gray-600">
                  Yes, we service all types of commercial kitchens including restaurants, cafes, food trucks, catering facilities, hotels, hospitals, schools, and corporate dining facilities. Our team has experience with every type of cooking operation and exhaust system configuration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Schedule Your Hood Cleaning?
            </h2>
            <p className="text-xl mb-8">
              Get an instant quote or call us today for professional NFPA 96 certified hood cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pricing/instant-quote?src=global-service-cta"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Get Instant Quote
              </a>
              <a 
                href="tel:+13055551234"
                className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                <Phone className="inline mr-2" size={20} />
                Call (305) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
